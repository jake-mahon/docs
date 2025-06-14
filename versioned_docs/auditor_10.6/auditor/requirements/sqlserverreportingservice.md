# SQL Server Reporting Services

Netwrix Auditor utilizes SQL Server Reporting Services (SSRS) engine for report generation.

If you want to generate reports and run search queries against data collected by Netwrix Auditor, you should configure SQL Server Reporting Services (2012 R2 and above required).

Consider the following:

- SQL Server and SQL Server Reporting Services can be deployed on the separate machines only in commercial edition. SQL Server Express Edition with Advanced Services does not support such deployment scenario.

__NOTE:__ It is recommended to use HTTPS instead of HTTP. HTTPS connection should also be configured for Reporting Service.

If you plan, however, not to use Netwrix Auditor built-in intelligence (search, alerts or reports) but only to receive e-mail notifications on audit data collection results, you may not need to configure SSRS or audit database settings.

## Configure SSRS Account

An account used to upload data to the SQL Server Reporting Services (SSRS) Server must be granted the Content Manager role on the SSRS __Home__ folder.

__NOTE:__ gMSA cannot be used to access SSRS. Use a standard account for that purpose.

Follow the steps to assign the Content Manager role.

__Step 1 –__  Navigate to your __Report Manager__ URL.

__Step 2 –__ On the Home page, navigate to __Folder Settings__ and click __New Role Assignment__ (the path can slightly vary depending on your SQL Server version).

__Step 3 –__ Specify an account in the following format: _domain\user_. The account must belong to the same domain where Netwrix Auditor is installed, or to a trusted domain.

__Step 4 –__ Select __Content Manager__.

## Grant Additional Permissions on Report Server

To be able to generate a report, any user assigned the Global administrator, Global reviewer, or Reviewer role must be granted the Browser role on the Report Server. Netwrix Auditor grants this role automatically when adding a user. If for some reason the product was unable to grant the role, do it manually.

Follow the steps to assign the Browser role to a user.

__Step 1 –__ Open the __Report Manager__ URL in your web browser.

__Step 2 –__ Depending on the user's delegated scope, select the entire Home folder or drill-down to specific data sources or event reports.

__Step 3 –__ Navigate to __Manage Folder__ (the path can slightly vary depending on your SQL Server version) and select Add group or user.

__Step 4 –__ Specify an account in the following format: _domain\user_. The account must belong to the same domain where Netwrix Auditor Server is installed, or to a trusted domain.

__Step 5 –__ Select __Browser__.

As a rule, Auditor can use Reporting Services with the default settings. However, to ensure that Reporting Services is properly configured, perform the following procedure:

You must be logged in as a member of the local Administrators group on the computer where SQL Server 2016 Express is installed.

Follow the steps to verify Reporting Services installation.

__Step 1 –__ Navigate to __Start >____All Apps > SQL Server____Reporting Services Configuration Manager__.

__Step 2 –__ In the Reporting Services Configuration Connection dialog, make sure that your local report server instance (for example, _SQLExpress_) is selected, and click __Connect__.

__Step 3 –__ 
In the __Reporting Services Configuration Manager__ left pane, select __Web Service URL__. Make sure that:

- __Virtual Directory__ is set to _ReportServer_``<YourSqlServerInstanceName>`` (e.g., _ReportServer_SQLEXPRESS_ for _SQLEXPRESS_ instance)
- __TCP Port__ is set to _80_

__Step 4 –__ In the Reporting Services Configuration Manager left pane, select __Database__. Make sure that the SQL Server Name and Database Name fields contain correct values. If necessary, click __Change Database__ and complete the Report Server Database Configuration wizard.

__Step 5 –__ In the Reporting Services Configuration Manager left pane, select __Report Manager URL__. Make sure __Virtual Directory__ is set correctly, and that the URL is valid.
