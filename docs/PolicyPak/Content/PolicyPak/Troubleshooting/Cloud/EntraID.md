---
sidebar_position: 3863
title: How do I fully reset my Azure AD connection between Azure and Endpoint Policy
  Manager Cloud to start over?
---

# How do I fully reset my Azure AD connection between Azure and Endpoint Policy Manager Cloud to start over?

If you're having issues getting Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud and Azure sync'd, here is what to try:

**Step 1 –** First, you need to be logged into your Azure account you're using FOR the configuration between Endpoint Policy Manager Cloud and Azure.

**Step 2 –** Navigate to 

**Step 3 –** Select "Endpoint Policy Manager Azure AD Connector' application

**Step 4 –** Click "Manage your application"

**Step 5 –** Click "Revoke permissions"

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/951_1_image-20230318014644-1_950x496.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/951_2_image-20230318014644-2_950x298.png)

**Step 6 –** Then in PPC Portal:

* Create Azure AD configuration
* Activate Azure AD configuration
* Sync Azure AD configuration

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/951_3_image-20230318014644-3_950x521.png)

If that still doesn't work, you can force Azure to remove the Endpoint Policy Manager application. The steps from Microsoft are here:



You can use a Powershell script and force remove the app and try again. Put the script below into block #6 as seen here.

Afterward, back in Endpoint Policy Manager Cloud re-create the connection.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/951_4_image-20230318014644-4_950x350.png)

Connect-AzureAD

```
# Get Service Principal using objectId  
$sp = Get-AzureADServicePrincipal -ObjectId "d240f374-28e9-4275-8521-110ff55fb61c"  
  
# Get all delegated permissions for the service principal  
$spOAuth2PermissionsGrants = Get-AzureADOAuth2PermissionGrant -All $true| Where-Object { $_.clientId -eq $sp.ObjectId }  
  
# Remove all delegated permissions  
$spOAuth2PermissionsGrants | ForEach-Object {  
    Remove-AzureADOAuth2PermissionGrant -ObjectId $_.ObjectId  
}  
  
# Get all application permissions for the service principal  
$spApplicationPermissions = Get-AzureADServiceAppRoleAssignedTo -ObjectId $sp.ObjectId -All $true | Where-Object { $_.PrincipalType -eq "ServicePrincipal" }  
  
# Remove all delegated permissions  
$spApplicationPermissions | ForEach-Object {  
    Remove-AzureADServiceAppRoleAssignment -ObjectId $_.PrincipalId -AppRoleAssignmentId $_.objectId  
}
```