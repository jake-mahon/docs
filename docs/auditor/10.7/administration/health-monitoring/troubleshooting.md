# Update Credential Passwords

Credential passwords occasionally need to be updated due to various reasons, such as security
policies that require passwords to be reset on a regular basis. The following types of credentials
may be impacted by password changes or security policies:

- Database service account
- Active Directory service account
- SMTP authentication service account
- Application Service Account
- Bultin Administrator account

## Database Service Account

The Database service account grants access to the SQL Server database. It can be updated on the
Database page of the Configuration interface. See the
[Update the Database Service Account Password](/docs/auditor/10.7/access-governance/access-reviews/configuration.md#update-the-database-service-account-password)
topic for instructions.

## Active Directory Service Account

The Active Directory service account handles user authentication to the Access Reviews Console. It
can be updated on the Active Directory page of the Configuration interface. See the
[Update the Active Directory Service Account Password](/docs/auditor/10.7/access-governance/access-reviews/configuration.md#update-the-active-directory-service-account-password)
topic for instructions.

## SMTP Authentication Service Account

An SMTP server is required for the application to send notifications. If the SMTP server requires
authentication, the service account can be updated on the Notifications page of the Configuration
interface. See the
[Configure SMTP Server Settings](/docs/auditor/10.7/access-governance/access-reviews/configuration.md#configure-smtp-server-settings)
topic for instructions.

## Application Service Account

The account used to run the Netwrix Auditor Access Reviews service can be updated using Services
Control Manager console. See the
[Modify the Service Account via Service Control Manager](/docs/auditor/10.7/administration/health-monitoring/troubleshooting.md#modify-the-service-account-via-service-control-manager)
topic for instructions.

## Builtin Administrator Account

The Builtin Administrator account is an application account that is created during the first launch.
It is used to complete the initial configuration steps and to grant console access to domain users.
This account can be disabled after Administrator users are added. However, if it is enabled and a
security policy requires the password to be reset, it can be updated on the Console Access page of
the Configuration interface. See the
[Modify the Builtin Administrator Account](/docs/auditor/10.7/access-governance/access-reviews/configuration.md#modify-the-builtin-administrator-account)
topic for modification instructions.

# Change Log Level

The `AccessInformationCenter.Service.exe.Config` file is located in the `Logs` folder of the Access
Reviews installation directory:

...\Netwrix\Access Reviews

Follow the steps to modify the log level.

**Step 1 –** Open the `AccessInformationCenter.Service.exe.Config` file in a text editor, e.g.
Notepad.

![AccessInformationCenter.Service.exe.Config file in Notepad](/img/product_docs/auditor/access/reviews/admin/troubleshooting/logvalue.webp)

**Step 2 –** The level value is set in the `LogLevel` parameter, where "2" is the default level. As
the logging level increases from 0 to 3, the types of information and level of detail included
within the log file also increase. Change to the desired log level:

<add key="LogLevel" value="2" />

- Error level is when `value="0"`
- Warning level is when `value="1"`
- Info level is when `value="2"`
- Debug level is when `value="3"`

  - Debug logging can be enabled from the Diagnostics page of the Configuration interface

**Step 3 –** Save and close the `AccessInformationCenter.Service.exe.Config` file.

Once troubleshooting has finished, it is recommended to return the log level to the default level,
Info = 2, to prevent the log file from growing too large.

# Troubleshooting

The following are several troubleshooting tips that can assist with diagnosing trouble with the
Access Reviews application. If engaging with
[Netwrix Support](https://www.netwrix.com/support.html), it will be useful to be aware of these.

Configuration of Permissions on the Installation Directory:

The Windows service account running the Netwrix Auditor Access Reviews service may be used as the
Database service account, the Active Directory service account, and/or the SMTP authentication
account. Check the Database, Active Directory, and Notification pages in the Configuration interface
to confirm where the account is in use before modifying it to ensure these functionality are not
impaired. If this account is changed, a new account must have the **Full Control** permission to
files and folders in the Access Reviews installation directory. See the
[Application Service Account](/docs/auditor/10.7/administration/health-monitoring/troubleshooting.md) topic for additional information.

Log File:

By default the Access Reviews application is configured to log at the Info level. When requested by
Netwrix Support, you can enable Debug level from the Diagnostics page of the Configuration
interface. See the [Diagnostics Page](/docs/auditor/10.7/access-governance/access-reviews/configuration.md) topic for additional
information.

If a different log level is needed or desired, the `aic.log` file can be modified. See the
[Change Log Level](/docs/auditor/10.7/administration/health-monitoring/troubleshooting.md) topic for additional information.

Credential Password Changes:

The Access Reviews application uses several different types of service accounts. If a credential
password for one of these accounts is no longer valid, it will impact application functionality.
Additionally, if the Builtin Administrator account remains enabled, it may be necessary to reset the
password. See the [Update Credential Passwords](/docs/auditor/10.7/administration/health-monitoring/troubleshooting.md) topic for additional
information.

# Application Service Account

The Windows service account running the Netwrix Auditor Access Reviews service may be used as the
Database service account, the Active Directory service account, and/or the SMTP authentication
account. Check the Database, Active Directory, and Notification pages in the Configuration interface
to confirm where the account is in use before modifying it to ensure these functionality are not
impaired. If the same account is being used for multiple purposes, it will require the proper
permissions for each purpose.

It may become necessary (for testing purposes, infrastructure changes, etc.) to change the Windows
account set to run the Netwrix Auditor Access Reviews service. The following step-by-step
instructions are for modifying this account within the Services Control Manager console.

**CAUTION:** The account assigned to run the Netwrix Auditor Access Reviews service must have Full
Control over the installation directory:

...\Netwrix\Access Reviews

## Modify the Service Account via Service Control Manager

Follow the steps to enable and/or modify the Windows service account running the Netwrix Auditor
Access Reviews service.

**Step 1 –** Navigate to Service Control Manager (`services.msc`). The Services Control Manager
opens.

![Services Manager Console showing the Netwrix Access Information Center service and the right-click Menu](/img/product_docs/auditor/access/reviews/admin/troubleshooting/servicesmanager.webp)

**Step 2 –** Right-click on the Netwrix Auditor Access Reviews service and select **Properties**.
The service Properties window opens.

![Netwrix Access Information Center service Properties window with Select User browser window](/img/product_docs/auditor/access/reviews/admin/troubleshooting/serviceproperties.webp)

**Step 3 –** On the **Log On** tab, select the **This account** radio button. Enter the account name
using NTAccount format [```DOMAIN\username```]. Optionally, use the **Browse** button to search for
the account. Enter the account's password in both the **Password** and **Confirm password** fields.
Then click **OK**. The Properties window closes.

**Step 4 –** The selected account is displayed in the Log On As column for the service. Either
Restart or Stop and Start the service for this change to take affect.

The Netwrix Auditor Access Reviews service is now running with the supplied Windows account.

# Troubleshooting

This section provides instructions on how to troubleshoot issues that you may encounter while using
Netwrix Auditor.

If your issue is not listed in the table below, try searching
[Netwrix Knowledge Base](https://helpcenter.netwrix.com/).

If you need assistance from the Technical Support team, you can open a ticket using the Customer
portal as described in the Creating a ticket with Customer portal section.

| Issue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Reason and solution                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| I cannot connect/logon to Auditor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 1. You may have insufficient permissions. Contact your Auditor Global administrator to make sure that your account is delegated control of the product. 2. You are trying to connect to a remote Auditor specified by its IP address while the NTLM authentication is disabled. Try specifying a server by its name (e.g., EnterpriseWKS).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| I do not receive any results while searching audit data or generating reports, or I am sure that some data is missing.                                                                                                                                                                                                                                                                                                                                                                                                         | 1. No changes were detected. 2. You do not have sufficient permissions to review intelligence data. Contact your Global administrator. 3. Review your filter settings and make sure that your filters are properly configured. Try modifying your search. 4. You are looking for changes that occurred more than 180 days ago. These changes are no longer available for reporting and running searches. Ask your Auditor Global administrator to import audit data for a required date range from the Long-Term Archive. 5. Data collection for this monitoring plan might not have been launched two times yet or there was no data collection after this change; therefore, audit data has not been written to the Audit Database yet. 6. Some settings in Auditor are configured incorrectly. Contact your Auditor administrator to make sure that: - The monitoring plan you want to audit is properly configured, and the monitoring is enabled for each data source individually. - Audit Database settings are properly configured for each data source individually and Disable security intelligence and make data available only in activity summaries is cleared. Netwrix recommends to store all audit data on the same default SQL Server instance. |
| "No plans found" text in the Monitoring plan field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Contact your Auditor Global administrator or Configurator to make sure that the monitoring plans exist and are properly configured.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| I see a blank window instead of a report.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Contact your Auditor Global administrator to make sure that you are granted sufficient permissions on the Report Server. To view reports in a web browser - Open a web browser and type the Report Manager URL (found under Settings>**Audit Database**). In the page that opens, navigate to the report you want to generate and click the report name. You can modify the report filters and click View Report to apply them.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| I configured report subscription to be uploaded to a file server, but cannot find it / cannot access it.                                                                                                                                                                                                                                                                                                                                                                                                                       | Subscriptions can be uploaded either to a file share (e.g., _\\filestorage\reports_) or to a folder on the computer where Auditor Server is installed. To access these reports, you must be granted the Read permission.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| When trying to collect event data from Active Directory domain, an error message like this appears in Netwrix Health Log: _Monitoring Plan: `<Monitoring_Plan_Name>` The following error has occurred while processing '`<Item_Name>`': Error collecting the security log of the domain `<Domain_Name>`. Failed to process the domain controller `<Domain_Controller_Name>` due to the following error: The service cannot be started, either because it is disabled or because it has no enabled devices associated with it_. | This may happen due to Secondary Logon Service disabled state. To collect event data from the domain, this service must be up and running. Open its properties and start the service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| The 'Workstation' field in search, reports, and Activity Summary is reported as 'unknown'                                                                                                                                                                                                                                                                                                                                                                                                                                      | For the full list of possible reasons, please refer to the following Netwrix Knowledge Base article: [Why is the "Workstation" field reported as "unknown"?](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA00g000000H9VdCAK.html)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Creating a ticket with Customer portal

1. Sign in at [https://www.netwrix.com/my_tickets.html](https://www.netwrix.com/my_tickets.html).
2. You can search or browse through the Knowledge Base articles here, or click **Create New
   Ticket**:

   ![support_ticket_customer_portal_fixed](/img/product_docs/auditor/auditor/admin/healthstatus/support_ticket_customer_portal_fixed.webp)

3. Fill in the form, describing the issue, and click **Open a ticket**.
4. After that, you will be able to attach the files you need (screenshots, emails, reports, etc.).

![support_ticket_customer_portal](/img/product_docs/auditor/auditor/admin/healthstatus/support_ticket_customer_portal.webp)
