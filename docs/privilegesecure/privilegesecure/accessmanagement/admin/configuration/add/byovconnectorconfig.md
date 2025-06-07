# Bring Your Own Vault (BYOV) Connector Configuration

This topic walks through the steps necessary to configure Netwrix Privilege Secure as a BYOV Integration Connector that can be used to perform activities as a specific user account. This can be done with accounts managed by Privilege Secure, or with accounts stored inside of a Secret Vault within Privilege Secure.

Use this workflow to bypass the default "Enable Account" and "Disable Account" pre-session and post-session actions. In the case of a Secret Vault credential, when it is necessary to use an unmanaged account for an activity.

## Set Up an Integration Connector

Begin by setting up an Integration Connector for using Netwrix Privilege Secure as a BYOV Connector. Ensure that the account you wish to use for your activity is managed by Privilege Secure or is contained within a Secret Vault resource in Privilege Secure.

__NOTE:__ For managed accounts, ensure that the account has been rotated at least once since being managed. Otherwise, there will be no vaulted password in the Netwrix Privilege Secure database.

### Configure the Activity Connector

Follow the steps to configure an Activity Connector.

__Step 1 –__ In the Netwrix Privilege Secure console, navigate to the __Configuration__ menu, and the __Integration Connectors__ submenu.

__Step 2 –__ Click the __Plus__ to add a new Activity Connector.

__Step 3 –__ Configure the following activity connector fields:

- Connector Name – Enter a name to uniquely identify the connector
- Connector Description (Optional) – Enter a brief description to identify the service account
- Connector Template – A selection of templates for connector configurations. Select __BYOV__ from the drop-down list.
- API Url – The base URL for the API being used for the vault integration. Ex: http://localhost:6500.
- App ID – The application ID for the vault. Enter __SbPAM__.
- Client Certificate – The base 64 string from the certificate file being used to authenticate to the vault. Leave blank.
- Advanced – Use this section to override the default behavior of the connector by providing a custom PowerShell script. Click on the __Advanced__ section to edit the Checkout Script Block and the Checkin Script Block or Skip the Certificate Check.
- Skip Certificate Check – Select the checkbox

![BYOV Connector for Privilege Secure](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/byovconnectornps.png)

__Step 4 –__ Copy and paste the following script into the "Checkout Script Block" field. (The "Checkin Script Block" field may be left blank.)

[Copy](javascript:void(0);)

Checkout Script Block

```
param (  
    $Options,  
    $Credential  
)  
$Token = $Options.RestApiToken  
$Uri = $Options.RestApiUri  
<#   
$Message = (ConvertTo-Json $Options -Depth 12)  
Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"  
#>  
function Get-CredentialMatch {  
    [CmdletBinding()]  
    param (  
        $CredentialAccount,  
        $CredentialResource,  
        $Token,  
        $Uri  
    )  
    $credentials = @()  
    $skip = 0  
    $take = 100  
    $result = $null  
    if ($null -ne $CredentialAccount) {          
        $FilterText = "$($CredentialAccount)"  
        $Message = "FILTERTEXT: $FilterText"  
        Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"              
        do {              
            $Params = @{  
                RestApiToken = $Token;                  
                Uri          = "$($Uri.TrimEnd("/"))/api/v1/Credential/Search?skip=$skip&take=$take&filterText=$FilterText&credentialType=1";  
            }              
            $result = Invoke-SbPAMRest @Params            
            <#  
            $Message = (ConvertTo-Json $result)  
            Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"  
            #>  
            $result.Data | ForEach-Object { $credentials += $_ }  
            $skip += $take          
        } until ($credentials.Count -ge $result.RecordsTotal)      
        $credentials | Foreach-Object {   
            $Message = "FOUND: $($_.Id) UserName: $($_.UserName)"   
            Write-Host "$(ConvertTo-Json $_)"  
            Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"  
        }          
        $Message = "Find UserName -eq $CredentialAccount"  
        Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"  
        $result = $credentials | Where-Object -Property UserName -eq $CredentialAccount  
        if ($null -eq $result) {  
            $Test = "$($Options.TargetHost.DnsHostName)\$CredentialAccount"              
            if ($null -ne $Options.TargetHost.NetBiosName) {  
                $Test = "$($Options.TargetHost.NetBiosName)\$CredentialAccount"  
            }  
            $Message = "Find UserName -eq $Test"  
            Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"  
            $result = $credentials | Where-Object -Property UserName -eq $Test  
        }  
        if ($null -eq $result) {  
            $result = $credentials | Where-Object { $_.Username -match $CredentialAccount -and $_.Domain -eq $CredentialResource }  
        }  
    }  
    return $result  
}  
### If this is an activity then use the LoginAccountName  
$TargetAccount = $Options.ActivitySession.LoginAccountName  
$CredentialAccount = $null  
$CredentialResource = $null  
if ($null -ne $Options.ActivitySession) {  
    $CredentialAccount = $Options.ActivitySession.LoginAccountName      
}  
$Message = "CredentialAccount: $CredentialAccount"  
Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"  
### This is a service account, so the info should be in the Credential      
if ($null -eq $CredentialAccount) {          
    $CredentialAccount = $Credential.Username  
}  
$Message = "CredentialAccount: $CredentialAccount"  
Add-SbPAMActionLog -Type Info -Message "BYOV: $Message"  
$result = Get-CredentialMatch -CredentialAccount $CredentialAccount -Token $Token -Uri $Uri  
if ($null -eq $result) {  
    if ($CredentialAccount -match ".*@.*") {  
        $Parts = $CredentialAccount.Split("@")  
        $CredentialAccount = $Parts[0]  
        $CredentialResource = $Parts[1]  
    }  
    $result = Get-CredentialMatch -CredentialAccount $CredentialAccount -CredentialResource $CredentialResource -Token $Token -Uri $Uri  
}  
if ($null -ne $result) {  
    $Params = @{  
        RestApiToken = $Token;                  
        Uri          = "$($Uri.TrimEnd("/"))/api/v1/Credential/$($result[0].CredentialId)?showPassword=true";      
    }      
    $result = Invoke-SbPAMRest @Params  
    # To support domain users in secret vaults  
    if ($result.Username -match ".*\.*") {  
        $Parts = $result.Username.split("\")  
        $Credential.Username = $Parts[1]  
        $Credential.Domain = $Parts[0]  
        $Credential.Password = $result.Password  
    }  
    $Credential.Username = $result.Username  
    $Credential.Domain = $result.Domain  
    $Credential.Password = $result.Password  
    return $Credential  
}  
else {  
    $Message = "Unable to find credential for $CredentialAccount $CredentialResource"  
    Add-SbPAMActionLog -Type Error -Message "BYOV: $Message"  
}
```

__Step 5 –__ Click __Save__ to create the BYOV connector.

See the [Bring Your Own Vault (BYOV) Integration](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/integrationbyov.md) topic for additional information on configuring a BYOV connector.

### Create a User

Once the integration connector has been configured, create a manually-managed user.

Follow the steps to create a manually-managed user.

__Step 1 –__ Navigate to __Dashboard__ > __Credentials__ tab.

![Select a User to manage account](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/byovmanageuser.png)

__Step 2 –__ Search or scroll to find the user you wish to manage. Once identified, check the box next to the account name.

![Select Manual manage account](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/byovmanualmanageaccount.png)

__Step 3 –__ Click on the __Manage__ button that becomes available above the list, and select __Manual__.

__NOTE:__ Ensure the user is not already managed or added into Privilege Secure.

See the [Credentials Dashboard](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/dashboard/credentials.md) topic for additional information on creating a managed account.

### Set the Account Password

Once the account has been manually managed, the password must be set for the account. The following icons should be visible: Wrench (Set Password), Clipboard (Copy Password to Clipboard), and Information (View Password).

Follow the steps to set an account password.

__Step 1 –__ Navigate to __Dashboard__ > __Credentials__ tab and locate the manually managed account.

![Managed User Wrench Icon](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/byovmanageuserwrench.png)

__Step 2 –__ Click on the __Wrench__ icon to set the password.

![Set password for the credential window](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/byovsetpassword.png)

__Step 3 –__ Enter a password to match the AD password, then click __Save__.

__NOTE:__ For versions before Privilege Secure 4.1, a support ticket will be needed as the Set Password feature is not available.

See the [Manage Internal Service Accounts](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/window/credentials/manageinternalserviceaccount.md) topic for additional information on manually managing an account.

### Create an Activity

Once the password has been set for the account, create an activity for the BYOV connector.

Follow the steps to create an activity.

__Step 1 –__ Navigate to __Policy__ tab > __Activities__.

__Step 2 –__ Click the blue plus icon and create a new Activity using the BYOV Connector.

__Step 3 –__ Configure the activity with the following values:

- Name — Displays the name of the activity
- Description — Description of the policy
- Platform — Displays the type of platform, which defines the resource
- Login Account — Displays the account used to log onto the resource. Select __Vault__ from the drop down menu.
- Activity Type — Controls the type of actions for the activity. Select __Interactive__ from the drop down menu.
- Vault Connector — Displays a list of previously configured vault connectors. Select the vault connector created from the steps above.

__NOTE:__ You may use accounts stored in a Vault and added as a resource once the integration is created. Also, you may apply domain or other local accounts managed by Netwrix Privilege Secure, but the password must be rotated once prior to use with an activity.

![BYOV create an Activity](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/byovconnectoractivity.png)

__Step 4 –__ Click Save to create the Activity.

__NOTE:__ Ensure the Login Account Template uses the format DOMAIN\samAccountName (e.g., NWXTECH\dgrayson).

See the [Add Activity](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/activity.md) topic for additional information on creating an Activity.

### Configure a New Policy

Once an Activity has been created, configure a new Policy.

Follow the steps to create a Policy.

__Step 1 –__ Navigate to the __Policy__ tab > __Access Policy__.

![Create a new policy for the BYOV Connector](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/byovconnectorpolicy.png)

__Step 2 –__ Click the __Plus__ icon and create a new Policy. See the [Add Access Policy](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/accesspolicy.md) topic for additional information.

- Set the Type as __Resource Based__ and select a Connection Profile, with __Default__ being sufficient for most setups.

__Step 3 –__ Click __Save__ to create the Access Policy.

__Step 4 –__ Once the Access Policy is created, add the following:

- Users to the Policy. See the [Users Tab for Resource Based Access Policies](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/policyresource/users.md) topic for additional information.
- Activity created for the BYOV Connector. See the [Activities Tab for Resource Based Access Policies](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/policyresource/activities.md) topic for additional information.
- Associated resources intended for this Activity. See the [Resources Tab for Resource Based Access Policies](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/policyresource/resources.md) topic for additional information.

See the [Add Access Policy](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/accesspolicy.md) topic for additional information on creating an Access Policy.

After completing these steps, you can use the specified manually-managed user on the resources outlined in the policy. This setup is ideal for scenarios where a single account is used across multiple resources but needs to be managed through Privilege Secure for enhanced security and management.

![My Activities BYOV Connector](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/byovconnectormyactivities.png)

_Remember,_ Always verify configurations and permissions, especially when integrating with systems like AD and using specific user accounts for critical operations.
