# Application

The **Application** node is for configuring general settings which affect the way the Enterprise
Auditor Console functions.

![Application](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/settings/application/application.webp)

Application Log

The Enterprise Auditor Application Log section determines what information is stored in the
Enterprise Auditor application log.

![Application Log](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/settings/application/applicationlog.webp)

The Application log level controls the types of messages generated for each job and the application.
It can be modified at the job level in the **Job Properties** window. See the
[General Tab](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for additional information. Options available in the Application log level drop-down menu
include:

- Debug – Records everything that happens during job execution, most verbose level of logging

  - Records all Info level information
  - Records everything else that happens
  - Creates the largest file

- Info – Records information about what stage of the job is being performed when errors or warnings
  occurred

  - Records all Warning level information
  - Records job progress information

- Warning – Records all warnings which occur during job execution

  - Records all Error level information
  - Records all warnings and the time of occurrence

- Error – Records all errors which occur during job execution

  - Records job start time
  - Records errors and the time of occurrence
  - Records job completion time

**_RECOMMENDED:_** Set the log level to **Warning**.

The other log levels are designed to assist with troubleshooting job execution issues. The Debug
level is only recommended when experiencing problems. After the problem is fixed or the Application
log has been sent to [Netwrix Support](https://www.netwrix.com/support.html), reduce the logging
level to **Warning** or **Info**.

Profile Security

The Profile Security section provides the option to enable an enhanced method of encryption to
various credentials stored by the Enterprise Auditor application.

![Profile Security](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/settings/application/profilesecurity.webp).

There are two options available in the Profiles stored with drop-down menu:

- Application – Default setting, does not employ the enhanced encryption
- Vault – Enables the enhanced encryption of stored credentials. See the
  [Vault](/docs/accessanalyzer/11.6/administration/settings/application.md)
  topic for requirements and additional information.

Usage Statistics

The Usage Statistics section allows you to select whether to send usage statistics data to Netwrix
to help us improve our product.

![Usage Statistics](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/settings/application/usagestatistics.webp)

- If selected, usage statistics are collected and sent to Netwrix

  - Upon startup of the Enterprise Auditor console, the system checks if usage statistics have
    been sent in the last 7 days. If they have not been, stored procedures run against the
    Enterprise Auditor database and gather data about job runs, access times, and environmental
    details like resource counts, users counts, number of exceptions, and so on. This data is then
    sent back to Netwrix to help us identify usage trends and common pain points, so that we can
    use this information to improve the product.
  - Only anonymous statistic-level data is included. No private company or personal data is
    collected or sent to Netwrix.

- If cleared, no usage statistics are collected or sent to Netwrix

Host Target Options

The Host Target Options section provides radio buttons to select the source that Enterprise Auditor
should use to connect to hosts.

![Host Target Options](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/settings/application/hosttargetoptions.webp)

Select from the following two options:

- Use host name
- Prefer DNS name if available

Grid View Parameters

The Grid View Parameters section controls how the data grids display within the Enterprise Auditor
Console.

![Grid View Parameters](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/settings/application/gridviewparameters.webp)

- Automatically rename duplicate columns within a table – Checks for and renames columns with
  duplicate names
- Automatically correct invalid column names – Checks for and corrects column names which contain
  characters SQL cannot handle

  **_RECOMMENDED:_** Leave both options selected.

- Save filters and grouping on data grids – Maintains filters configured for a data grid for the
  next viewing. If not selected, filtered data grids reset between viewings.
- Maximum row count for interactive grid view – Indicates the number of rows displayed in tables
  accessible in under a job’s Status and Results nodes

  - Maximum row count is set to 1000 by default and has a cap of 99,999 rows. This number does not
    impact the number of rows within the SQL database. To view the full row count for a table
    exceeding this size, use the SQL Server Management Studio or another SQL Server interface tool
    which displays the full table.

Filtered data grids are not lost if persistent filters are not saved. The Filtration Dialog
available for every data grid maintains a list of recent filters. See the
[Data Grid Functionality](/docs/accessanalyzer/11.6/administration/navigation.md)
topic for additional information.

Cleanup

The Cleanup section is designed to conserve space in the SQL Database Transaction Log. It only works
when the database is configured to use Simple Recovery Model.

![Cleanup Options](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/settings/application/cleanup.webp)

- Compact Database Transaction Log – If selected, every time the Enterprise Auditor application is
  closed, the Database Transaction Log is compacted

  **_RECOMMENDED:_** In most environments, it is recommended to leave this option selected. If a
  scheduled task ends while multiple tasks are still running, the process of compacting the
  database freezes it and causes the running tasks to fail.

- Run Post Processing SQL Script to Set Host Status – If selected, this option ascribes the values
  of SUCCESS, WARNING, or ERROR to indicate what happened on that host during job execution

  **_RECOMMENDED:_** It is recommended that this option be left selected.

Application Exit Options

The Application Exit Options section controls whether or not a confirmation is displayed when the
Enterprise Auditor application is closed.

![Application Exit Options](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/settings/application/applicationexitoptions.webp)

If selected, the **Show Confirmation Dialog** option causes a Confirm Exit window to open when the
Enterprise Auditor user attempts to exit the application. If deselected, the Enterprise Auditor
application closes without confirmation.

![Confirm Exit](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/settings/application/confirmexitwindow.webp)

The Confirm Exit window requires the **Yes** button to be clicked before the Enterprise Auditor
application closes.

The **Cancel** and **Save** buttons are in the lower-right corner of the Application view. These
buttons become enabled when modifications are made to the Application global settings. Whenever
changes are made at the global level, click **Save** and then **OK** to confirm the changes.
Otherwise, click **Cancel** if no changes were intended.

# Vault

The Enterprise Auditor vault provides additional security through enhanced encryption to various
credentials stored by the Enterprise Auditor application, such as Connection Profile credentials or
Schedule Service Account credentials. In order to enable the vault, the following prerequisites must
be met in the order listed:

- Enterprise Auditor Vault Service must be running

  - This service was installed during the Enterprise Auditor installation and is configured for
    Manual Startup Type
  - It needs to be configured to Log On (Service > Properties) with a service account which has
    Log on as Service rights, as well as Read and Execute rights to the VaultService.exe file
    located within the Enterprise Auditor installation directory

- Role Base Access must be enabled within Enterprise Auditor

  - The vault was designed to provide enhanced security when employing the Role Based Access, or
    least privilege, option of Enterprise Auditor
  - At least one Administrator role must be assigned to enable the vault:

    - If full Role Based Access is not desired but enabling the vault is, all of the Enterprise
      Auditor users should be given the Administrator role
    - No additional Role Based Access prerequisites are required for this option

  - See the
    [Access](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/access/overview.md)
    topic for additional information on Role Based Access

  **NOTE:** Once the vault has been enabled, it is not possible to disable Role Based Access
  without first disabling the vault. Please contact
  [Netwrix Support](https://www.netwrix.com/support.html) for assistance in disabling Role Based
  Access.

- The Profile Security section of the Application node must be set to **Vault**

  ![Vault Security](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/settings/application/vaultrbaerror.webp)

  If the previous prerequisites have not been met, then one of the following errors will occur
  when attempting to save the Vault Profile Security setting:

  - Role Based Access Error – Role Based Access must be configured in order to use the Enterprise
    Auditor Vault. Please configure Role Based Access and try again
  - Enterprise Auditor Vault Service Error – Enterprise Auditor is not running

- The Netwrix Enterprise Auditor Web Server service must be run with an account that has the
  Administrator role assigned

  - If the Administrator role is not assigned, the vault service does not allow the web server to
    access the SQL profile and throws an access denied error in the web server log file

The credentials which are encrypted once the vault has been enabled are:

- Storage Profile credentials
- Connection Profile credentials
- Schedule Service Account credentials
- Role Definitions
- Role Assignments

Once encrypted, the files with these stored credentials are moved into a new directory location.

This location is protected by the service account used to run the Enterprise Auditor Vault Service.

## Disabling the Vault

To disable the vault, navigate to the **Settings** > **Application** node and change the Profile
Security section setting to **Application**. It is a best practice to also stop the Enterprise
Auditor Vault Service.
