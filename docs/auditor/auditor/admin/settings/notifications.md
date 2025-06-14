# Notifications

Notification settings are configured when you create the first monitoring plan in the New monitoring plan wizard.

You can update notification settings at any time in the __Settings > Notifications__. To disable notifications, go to __Settings > Notifications > Modify__ and select __No notifications__ options.

Review the following for additional information:

- Enable Notifications via Exchange Online
- Enable Notifications via SMTP
- Summary Emails and Notifications about Critical Events

## Enable Notifications via Exchange Online

To enable Netwrix Auditor to send email notifications via Exchange Online using modern authentication, configure an application. To do this, follow the steps below.

__Step 1 –__ Register a new application in the Microsoft Entra admin center.

__Step 1 –__ Under Identity go to __Applications > App registrations__ and choose __New registration__.

__Step 2 –__ Enter the name for your application, choose "Accounts in this organizational directory only". Redirect URL is optional.

__Step 3 –__ Save Client ID and Tenant ID.

__Step 4 –__ Create a new client secret and save it.

__Step 5 –__ Under Microsoft Graph API, go to __Manage__ __>__ __API permissions__, and perform the following steps:

1. Click __Add__
2. In the Request API permissions window, click __Microsoft Graph__.
3. Select __Application Permissions__.
4. In the search box, type Mail.ReadWrite and Mail.Send to add these permissions to the application.

__Step 6 –__ Grant admin consent for these permissions.

__Step 7 –__ In Netwrix Auditor, go to Notification Settings, click Modify, and under Exchange Online enter Tenant name, Application ID and Application secret.

After the application configuration, you can restrict permission so only the specified accounts could use the application to send email. To do this, the following actions required:

- Create a Group
- Add Email to a Group
- Apply Restriction Using PowerShell Commands

### Create a Group

Follow the steps to create a group.

__Step 1 –__ Log in to the Exchange admin center with your administrator account.

__Step 2 –__ Under Groupsclick on the __Mail-enabled security__ tab.

__Step 3 –__ Click __Add a group__.

__Step 4 –__ Select __Mail-enabled security__ and click __Next__.

__Step 5 –__ Set a name and click __Next__.

__Step 6 –__ Set group name and select __Approval__. Its needed to require owner approval to join the group.

__Step 7 –__ Click __Next__.

__Step 8 –__ Click __Create__.

### Add Email to a Group

Follow the steps to add emails to group.

__Step 1 –__ In the Exchange admin cente go to Groupsand click on the [Mail-enabled security] tab.

__Step 2 –__ Click on the group you have created and add emails you want to allow APIs to access.

### Apply Restriction Using PowerShell Commands

Follow the steps to run following commands using PowerShell.

__Step 1 –__ Open PowerShell

__Step 2 –__ Run the following commands in order:

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned  
Run: Install-Module PowerShellGet -Force  
Install-Module -Name ExchangeOnlineManagement -Force  
Get-Module ExchangeOnlineManagement  
Connect-ExchangeOnline -UserPrincipalName {ADMIN_EMAIL_ADDRESS_HERE}
```

__Step 3 –__ Sign in as Admin in the pop-up window.

__Step 4 –__ Run the following command:

```
New-ApplicationAccessPolicy   
-AppId {APPLICATION_ID_HERE}   
-PolicyScopeGroupId {GROUP_EMAIL_ADDRESS_HERE}   
-AccessRight RestrictAccess   
-Description "YOUR DESCRIPTION HERE."
```

## Enable Notifications via SMTP

To enable notifications via SMTP, first select __SMTP__ in the __Method__ column, then navigate to Default SMTP settings below to review settings used to deliver email notifications, reports, etc., and click Modify to adjust them if necessary.

| Option | Description |
| --- | --- |
| SMTP server | Enter your SMTP server address. It can be your company's Exchange server or any public mail server (e.g., Gmail, Yahoo). |
| Port number | Specify your SMTP server port number. |
| Sender address | Enter the address that will appear in the From field.  ___RECOMMENDED:___  click __Send Test Email__. The system will send a test message to the specified email address and inform you if any problems are detected. |
| SMTP authentication | Select this checkbox if your mail server requires the SMTP authentication. |
| Sender email (from) | Enter the address that will appear in the "_From_" field in email notifications.  This option does not affect notifications sent to users' managers and administrators. Before configuring the "_From_" field for user email notifications, make sure that your Exchange supports this option. |
| User name | Enter a user name for the SMTP authentication. |
| Password | Enter a password for SMTP authentication. |
| Use Secure Sockets Layer encrypted connection (SSL/TLS) | Select this checkbox if your SMTP server requires SSL to be enabled. |
| Use implicit SSL anthentification | Select this checkbox if the implicit SSL mode is used, which means that an SSL connection is established before any meaningful data is sent. |
| Enforce certificate validation to ensure security | Select this checkbox if you want to verify security certificate on every email transmission. The option is not available for auditing User Activity as well Netwrix Auditor tools. |

You can configure Activity Summary frequency, format and delivery time for each monitoring plan individually. See the [Fine-Tune Your Plan and Edit Settings](/docs/auditor/auditor/admin/monitoringplans/finetune.md) topic for more information.

After that, you can specify the recipient who will receive product activity and health summary emails.

## Summary Emails and Notifications about Critical Events

Follow the steps to send summary emails and notifications about critical events.

__Step 1 –__ Navigate to the Summary email recipient and click Modify.

__Step 2 –__ Specify recipient address:

- To send to a single recipient, enter personal mailbox address.
- To send to multiple recipients, make sure they are added to a distribution group, and enter the group address. Entering multiple individual addresses is not supported.

To learn more about product health, you can also navigate to the Health status tile in the main window. It will take you to the Health Status dashboard that contains information on the product activity and system health state. See the [Health Status Dashboard](/docs/auditor/auditor/admin/healthstatus/dashboard/overview.md) topic for additional information.
