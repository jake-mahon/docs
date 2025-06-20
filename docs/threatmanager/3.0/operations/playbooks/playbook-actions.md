# Active Directory Target Actions

The following actions target Active Directory.

## Active Directory Group Membership

The Active Directory Group Membership action provides configuration options to add or remove Active
Directory group membership.

![adgroupmembership](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/adgroupmembership.webp)

- Users – Select the users for whom to alter group membership. If not specified, the user who
  triggered the threat will be used.
- Action – Select the action to take on the user's group membership.
  - Add
  - Remove
- Group – Specify the identity of the group to manage. If not specified, the group affected by the
  threat will be used.
- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.

## Change Password at Next Logon

The Change Password at Next Logon action forces the user to change their password the next time the
user logs on.

![changepassword](/img/product_docs/directorymanager/directorymanager/admincenter/general/changepassword.webp)

- Users – Select the users for whom to reset passwords at next logon. If not specified, the user who
  triggered the threat will be used.
- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.

## Disable Active Directory Account

The Disable Active Directory Account action disables the specified account.

![disableadaccount](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/disableadaccount.webp)

- Active Directory Credentials – Select a credential profile that contains valid Active Directory
  credentials. Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.
- Users – Select users to disable. If not specified, the user who triggered the threat will be used.

## Disable Active Directory Computer

The Disable Active Directory Computer action disables the specified computer object in Active
Directory.

![disableadcomputer](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/disableadcomputer.webp)

- Disable Domain Controllers – When selected, allows domain controllers to be disabled.
- Active Directory Credentials – Select a credential profile that contains valid Active Directory
  credentials. Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.
- Computer – Select the computer to disable. If not selected, the host computer will be used.

## Reset Password

The Reset Password action resets the password of the specified account.

![resetpassword](/img/product_docs/directorymanager/directorymanager/portal/resetpassword.webp)

- Users – Select the users for whom to reset passwords. If not specified, the user who triggered the
  threat will be used.
- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md) . If not specified, the
  action will be run as the credentials of the Action Service.

## Revert Permission Change

The Revert Permission Change action reverts a permission change on an Active Directory Object.

![revertpermissionchange](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/revertpermissionchange.webp)

- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the Integrations Interface. If not specified, the action
  will be run as the credentials of the Action Service.

See the [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md) topic for additional
information.

# Entra ID Target Actions

The following actions target an Entra ID application.

## Entra ID Group Membership

Manages an Entra ID group's membership by adding or removing an object from a group.

![entraidmembership](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/entraidmembership.webp)

- Users – Select the users for whom to alter group membership. If not specified, the user who
  triggered the threat will be used.
  - Perpetrator – The account that initiated the threat
  - Users Affected – Users affected by the threat
  - Both Perpetrators and Users Affected – The account that initiated the threat and the users
    affected by the threat
- Group – Specify the identity of the group to manage. If not specified, the group affected by the
  threat will be used.
- Action – Select the action to take on the user's group membership
  - Add – Add the user to the specified group
  - Remove – Remove the user from the specified group
- Credential – Select a credential profile that contains valid Entra ID credentials. Credential
  profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.

## Flag Entra ID User as Confirmed Compromised

Flag a user as confirmed compromised within your Entra ID tenant.

![confirmcompromised](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/confirmcompromised.webp)

- Users – The users to flag as confirmed compromised. If not specified, the user who triggered the
  threat will be used.

  - Perpetrator – The account that initiated the threat
  - Users Affected – Users affected by the threat
  - Both Perpetrators and Users Affected – The account that initiated the threat and the users
    affected by the threat

- Credential – Select a credential profile that will mark the user as confirmed compromised.
  Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.

## Disable Entra ID User

This actions disables a user in your Entra ID tenant.

![disableuser](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/disableuser.webp)

- Users –The users to disable. If not specified, the user who triggered the threat will be used

  - Perpetrator – The account that initiated the threat
  - Users Affected – Users affected by the threat
  - Both Perpetrators and Users Affected – The account that initiated the threat and the users
    affected by the threat

- Credential – Select a credential profile that will execute this action. Credential profiles are
  configured on the [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md). If not
  specified, the action will be run as the credentials of the Action Service.

## Reset Entra ID Password

Resets an Entra ID user's password to a specified password. If no password is specified, resets a
user's password to a random group of letters, numbers, and special characters.

![entraidresetpassword](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/entraidresetpassword.webp)

- New Password – Password will be reset to this value. If not specified, generates a random
  password.
- Users – The users that will have their password reset. If not specified, the user who triggered
  the threat will be used.

  - Perpetrator – The account that initiated the threat
  - Users Affected – Users affected by the threat
  - Both Perpetrators and Users Affected – The account that initiated the threat and the users
    affected by the threat

- Credential – Select a credential profile that will execute this action. Credential profiles are
  configured on the [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md). If not
  specified, the action will be run as the credentials of the Action Service.

# Local Host Target Actions

The following actions target the Threat Manager server.

## PowerShell Script

The PowerShell Script action executes a specified PowerShell script. This action can be used to
build a custom threat response, using PowerShell, to handle scenarios not covered by other
preconfigured action steps.

![powershellscriptactionstep](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/powershellscriptactionstep.webp)

- PowerShell Script – Select the PowerShell script to execute. By default, the PowerShell script
  includes a comment section which includes Threat Manager threat variables that can be used in
  PowerShell script action steps.
- Credential – Select a credential profile using the drop-down list. This will provide the
  PowerShell action step with a PowerShell credential object, based upon the Threat Manager
  credential specified for use in the script. For example:

  $Session = New-PSSession -ComputerName "Computer01" -Credential $Credential

  Invoke-Command -Session $Session -ScriptBlock `{Write-Host "Hello World"}`

## Send Email

The Send Email action sends an email.

![sendemail](/img/product_docs/directorymanager/directorymanager/portal/sendemail.webp)

- Subject – The subject of the email
- To – Specify the email addresses receiving the email
- Body – The body of the email. HTML is supported.

## Stop Process

The Stop Process action stops a process running locally on the host associated with the threat.

![stopprocess](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/stopprocess.webp)

- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the
  [Credential Profile Page](/docs/threatmanager/3.0/administration/integrations/credential-profiles.md). If not
  specified, the action will be run as the credentials of the Action Service.

## End User Session

The End User Session action attempts to log the specified user out of any active RDP sessions on the
target client.

![endusersession](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/endusersession.webp)

- Users – The users to log out of RDP sessions. If not specified, only the perpetrator will be used.
  Select the users from the drop-down list:

  - Perpetrator – The account that initiated the threat
  - Both Users and Perpetrators Affected – The account that initiated the threat and also the
    users affected by the threat

- Computers – The computers to log a user out of a RDP session. If not specified, only the
  perpetrator client will be used. Select computers from the drop down list:

  - Perpetrator Client – The computer that initiated the threat
  - Host – The host client that initiated the threat
  - Both Perpetrator Client and Host – The computer and the host client affected by the threat

- Credential – The domain credential used to run the action. Domain credentials are populated by
  credential profiles that are created on the Integrations page. If not specified, the action will
  be run under the credentials of the action. Select the credentials from the drop-down list. See
  the [Credential Profile Page](/docs/threatmanager/3.0/administration/integrations/credential-profiles.md) topic for
  additional information.

# Action Configuration for Playbook Steps

When adding preconfigured actions as steps in a playbook, the configuration information required
depends upon the action selected. When Add Step is selected on the Playbooks page, a box with the
following information is displayed:

![genericactionstep](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/genericactionstep.webp)

- Display Name – Populates with the name of the Action Type selected
- Action Type – A drop-down list containing all preconfigured actions that can be selected to add as
  a playbook step
- Add – Click this button to add the step to the playbook
- Continue on Error – Select this checkbox to execute the next step if the current step fails

Once an Action Type is selected, additional configuration options are displayed.

Threat Manager has the following preconfigured actions:

- [Active Directory Target Actions](/docs/threatmanager/3.0/operations/playbooks/playbook-actions.md)
- [Entra ID Target Actions](/docs/threatmanager/3.0/operations/playbooks/playbook-actions.md)
- [Local Host Target Actions](/docs/threatmanager/3.0/operations/playbooks/playbook-actions.md)
- [Tag Threat Actions](/docs/threatmanager/3.0/operations/playbooks/playbook-actions.md)
- [Third-Party Applications Target Actions](/docs/threatmanager/3.0/operations/playbooks/playbook-actions.md)
- [Windows File System Target Actions](/docs/threatmanager/3.0/operations/playbooks/playbook-actions.md)
- [Windows Server Target Actions](/docs/threatmanager/3.0/operations/playbooks/playbook-actions.md)

# Tag Threat Actions

The following action targets Threat Manager.

### Tag Object

This action adds tags to objects associated with a threat.

![tagobject](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/tagobject.webp)

- Tags – Select the tags to be applied to the object.
- Action – Specify whether to add or remove tags. If not specified, the tag will be added.
- Objects – Select which objects to tag. If not specified, the user who triggered the threat will be
  used.

### Manage Blocking Policy

This action adds or removes a user from a blocking policy.

![manageblockingpolicy](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/manageblockingpolicy.webp)

- Users – The users to have their RDP Session ended. If not specified, the user who triggered the
  threat will be used. Select the users from the drop-down list.
- Credential – The domain credential used to run the action. Domain credentials are populated by
  credential profiles that are created on the Integrations page. If not specified, the action will
  be run under the credentials of the action. Select the credentials from the drop-down list.
- Policy Name - The name of the Threat Prevention blocking policy.
- Operation - Whether to add or remove the user from the blocking policy.

# Third-Party Applications Target Actions

The following actions target third-party applications.

## Create ServiceNow Incident

This action creates an incident in ServiceNow®.

![createservicenow](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/createservicenow.webp)

- Instance – Specify the ServiceNow instance. Only enter a name and the .servicenow.com instance is
  automatically applied. For example, entering "company" will automatically become
  company.servicenow.com.
- Message – Specify the optional message to display
- Password – Specify the password for the ServiceNow instance
- Username – Specify the ServiceNow username

## Duo Authentication Push

This action sends an authentication push to the Duo API.

![duoauthenticationpush](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/duoauthenticationpush.webp)

- Users – Select the users to authenticate. If not specified, the user who triggered the threat will
  be used.
- Admin Integration Key – Specify the Duo Admin integration key
- Admin Secret Key – Specify the Duo Admin secret key
- Admin API Hostname – Specify the Duo Admin API hostname
- Auth API Integration Key – Specify the Duo Auth integration key
- Auth API Secret Key – Specify the Duo Auth API secret key
- Auth API Hostname – Specify the Duo Auth API hostname
- Prompt Title – Specify the Duo Prompt title. If not specified, a default title will be used.
- Push Information – Specify the Duo Push information. If not specified, default threat information
  will be used.
- Fail On – Select the response on which to fail the action step. If not specified, the step will
  fail on "Deny". Select an option from the following:

  - Allow
  - Deny

- User Alias – Select the alias of the user to authorize. If not specified, the user's Activity
  Monitor Account Name will be used. Select an option from the following:

  - Display Name
  - SAM Account Name

## Microsoft Teams

This action posts to a Microsoft Teams channel.

![microsoftteams](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/microsoftteams.webp)

- Message – Specify the optional message to display
- URI – Specify the URI for the Microsoft Teams incoming webhook

## RADIUS Authentication

This action utilizes RADIUS profiles to authenticate user activity.

![radiusauthentication](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/radiusauthentication.webp)

- User Not Found Behavior – Select how to handle a user not configured for RADIUS authentication. If
  not specified, the authentication will fail.
- Method – Specify the RADIUS authentication method value required by the authentication provider.
  This value will vary depending upon vendor. Example values may include: push, SMS, or phone.
- Users – Select the users to authenticate. If not specified, the perpetrator will be used.
- Timeout Behavior – Select how to handle a timeout. If not specified, the authentication will fail.
- Fail On – Select which authentication type to fail on. This allows configuration to determine when
  the action step fails. This is based upon the user response to the RADIUS Authentication request.
  If not specified, the action step will fail with a failed authentication.

## Send Syslog

This action sends a Syslog message to a server. This action utilizes the current SIEM settings,
specified on the [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md), to send the
threat information via Syslog.

![sendsyslog](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/sendsyslog.webp)

## Set Forescout Property On Host

This action adds a property to a Forescout host record. Forescout collections can be configured to
monitor this property. This allows Threat Manager to integrate with the Forescout platform to enable
the use of the capabilities of Forescout for threat response.

![forescoutproperty](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/forescoutproperty.webp)

- Forescout Server IP – The IP address of the Forescout server
- Forescout Property String – The value of the Forescout property string to be added to the host
  associated with the Target IP
- Target IP – The resource IP address that will be used to identify the host in Forescout. The
  default is Host.
- Forescout Password – Password for the Forescout server

## Slack

This action sends a message to Slack.

![slack](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/slack.webp)

- Message – The optional message to display
- URI – The URI for the Slack incoming webhook

## Twilio SMS Message

This action sends an SMS message through Twilio.

![twiliosms](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/twiliosms.webp)

- To – The phone number receiving threat notifications. Include the country code.
- SID – The Twilio SID
- Twilio Number – The phone number provided by Twilio
- Token – The Twilio token
- Message – The optional custom SMS message to send. If a message is not specified, a default SMS
  message will be sent.

## VirusTotal Report

This action scans the file hashes against the VirusTotal API and emails the results.

![virustotalreport](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/virustotalreport.webp)

- Subject – The optional custom email subject. If a subject is not specified, a default email
  subject will be used.
- Key – The key provided by VirusTotal
- To – The email addresses receiving the email

## Webhook

This action executes a webhook via a HTTP request from Threat Manager. Webhooks are used by a
variety of web applications to trigger actions or receive data from external sources.

![webhook](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/webhook.webp)

- Method – The HTTP method for the webhook. Select a method from the drop-down list:
  - GET
  - POST
  - DELETE
  - PUT
- URI – The URI for the webhook
- Body – The body of the HTTP request for the webhook

# Windows File System Target Actions

The following actions target Windows File System.

## Delete File

This action deletes the file associated with the threat.

![deletefile](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/deletefile.webp)

- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.

## Revert Permission Change

The Revert Permission Change action reverts a permission change on an Active Directory Object.

![revertpermissionchange](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/revertpermissionchange.webp)

- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the Integrations Interface. If not specified, the action
  will be run as the credentials of the Action Service.

See the [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md) topic for additional
information.

## Save File Hash

This action saves the file hash to the properties of the threat.

![savefilehash](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/savefilehash.webp)

- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.

# Windows Server Target Actions

The following actions target Windows servers.

## Close SMB Session

![closesmbsession](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/closesmbsession.webp)

This action closes any active SMB sessions for the threat perpetrator on a target host.

- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.

## Create Windows Firewall Rule

![windowsfirewall](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/windowsfirewall.webp)

This action adds a Windows Firewall Rule to block inbound or outbound network protocol traffic for
specified hosts.

- Direction – Specify the direction of the firewall rule
  - Inbound
  - Outbound
- Protocol – Specify the network protocol for the firewall rule
  - TCP
  - UDP
  - ICMPv4
  - ICMPv6
- Blocking Target – Specify the remote address to be blocked by the firewall rule
  - Perpetrator Client – The client machine used by a perpetrator for the detected threat
    (typically a workstation)
  - Host – The host associated with a threat (typically a domain controller or file server)
- Target Host – Specify the location where the windows firewall rule will be created
  - Perpetrator Client – The client machine used by a perpetrator for the detected threat
    (typically a workstation)
  - Threat Host – The host associated with a threat (typically a domain controller or file server)
- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.

## Disable User Remote Desktop Access

![disableuserremote](/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/disableuserremote.webp)

This action disconnects the user from the host and disables login rights for the user.

- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.
- Users – Select the users for whom to disable remote desktop access. If not specified, those user
  who triggered the threat will be used.
