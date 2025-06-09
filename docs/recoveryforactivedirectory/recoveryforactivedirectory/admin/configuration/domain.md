# Domains Page

The Domains page provides a list of the domains backed up by Recovery for Active Directory. It displays the backup schedule settings for each added domain. You can also add and configure new domains.

Click __Configuration__ in the left pane. Then click the __Domains__ tab on the Configuration page to open the Domains page.

![Domains Page](/img/product_docs/activitymonitor/activitymonitor/install/agent/domains.png)

The table displays the following information:

- Domain – Fully-qualified name of the domain
- Last Collection Time – The most recent time the collection (backup) occurred
- Duration – The time the collection took to complete
- Status – Collection state as idle, waiting, error, or success
- Details – Information about any errors that occurred when the last backup was performed
- Actions – Displays the icons used to collect, edit, and delete the respective domain

  - Run backup – Click the __Play__ icon to start a new collection (backup) on the respective domain if collection is needed outside of the configured schedule
  - Edit configuration – Edit the settings of the domain. Click the __Edit__ icon for a domain to open the Edit Domain Configuration wizard and edit the domain's settings. See the [Edit Domain Configuration](#Edit-Domain-Configuration) topic for additional information.
  - Delete configuration – Click the Delete icon for a domain to delete it

To add a domain, click the __Add domain configuration__ button. See the [Add a Domain](#Add-a-Domain) topic for additional information.

### Add a Domain

To add a domain, provide domain details and configure the backup schedule. For a list of the supported Windows Servers, see the [Target Domains](/docs/recoveryforactivedirectory/recoveryforactivedirectory/requirements/targetdomain.md) topic.

Follow the steps to add a domain.

__Step 1 –__ Click the __Add domain configuration__ button on the Domains page to launch the Add Domain Configuration wizard.

![Add Domain Configuration wizard - Domain page](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/domain.png)

__Step 2 –__ Enter a domain [example.domain.com] in the Domain field.

__Step 3 –__ Enter the account username [DOMAIN\USERNAME] to be used for backups, rollbacks, and recoveries in the Account field.

__Step 4 –__ Enter the password for the account in the Password field.

__NOTE:__ The account must have Domain Admin privileged access to read and write object data in order to back up, rollback, and restore objects in Active Directory. If the account has read rights only, it will be able to back up the domain but unable to rollback and restore objects. In this case, alternate credentials with read and write access to objects will have to be provided on the Credentials page of the Object Rollback and Object Restore wizards. See the [Rollback Objects](/docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/rollback.md) and [Recover an Object](/docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/recover.md#Recover-an-Object) topics for information on the wizards.

For a Least Privilege Access Model to provision an Active Directory security group with the permissions that are necessary to perform backups, rollbacks and recovery, see the [Least Privilege Access Model](/docs/recoveryforactivedirectory/recoveryforactivedirectory/requirements/targetdomain.md#Least-Privilege-Access-Model) topic.

__Step 5 –__ Click __Next__.

![Add Domain Configuration wizard - Backup Schedule page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/configuration/backupschedule.png)

__Step 6 –__ Select the days of the week in the Run the backup on section to indicate the days when backups will be run.

__Step 7 –__ Select a start time (UTC) in the Start the backup at field to begin the backup. The default time is 12:00 AM.

__Step 8 –__ In the Repeat every field, enter a frequency, in minutes, to set the time between the start of each domain backup. Keep in mind the size of the environment when configuring this option. Click __Next__.

__NOTE:__ If the start time is changed from the default and a frequency is selected (in minutes), the backups will run at the desired frequency but will skip from midnight until the selected start time.

![Add Domain Configuration wizard - Options page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/options.png)

__Step 9 –__ (_Optional_) Select the __Collect GPOs__ checkbox to enable GPO rollback and recovery. This setting requires Group Policy Management Console (GMPC). If GPO collection is not desired, skip to Step 9.

__Step 10 –__ If the Collect GPOs checkbox is selected, the Store the Group Policy Object backups in the following location field is enabled. Specify the save location for the GPO backup here.

__NOTE:__ The path must be a network share. Do not provide the path to a local drive for storing the backup.

__Step 11 –__ Click __Next__.

![Add Domain Configuration wizard - Notification page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/notification.png)

__Step 12 –__ To set notifications, select the Send email notifications check box and enter the email address of one or more users and/or groups to receive the job start and end notifications. Use a semicolon (;) to separate multiple recipients. See the [Notifications Page](/docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/configuration/notifications.md) topic for additional information.

If notifications are not desired, skip this step.

__Step 13 –__ Click __Next__.

![Add Domain Configuration wizard - Confirm page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/confirm.png)

__Step 14 –__ The Confirm page displays a summary of the settings you provided on the pages of the wizard. Use the Back button to return to a previous page and change any setting. Click __Complete__ to finish the wizard.

A new domain is added and displayed on the Domains page.

Backups will begin as scheduled. On the first scheduled instance, a complete backup of the domain is performed. Then, subsequent backups only include the incremental changes that occurred since the previous backup.

### Edit Domain Configuration

Follow the steps to edit a domain.

__Step 1 –__ On the Domains page, click the __Edit configuration__ icon for a domain. The Edit Domain Configuration wizard opens.

![Edit Domain Configuration wizard - Domain page](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/domain.png)

__Step 2 –__ Modify the domain in the Domain field, as needed.

__Step 3 –__ Modify the account username [DOMAIN\USERNAME] to be used for backups, rollbacks, and recoveries in the Account field, as needed.

__Step 4 –__ Update the password for the account in the Password field, as needed. The new credentials will take effect on next domain backup.

__Step 5 –__ Click __Next__.

![Edit Domain Configuration wizard - Backup Schedule page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/configuration/backupschedule.png)

__Step 6 –__ Modify the selection of the check boxes in the Run the backup on section to indicate the days when backups will be run, as needed.

__Step 7 –__ Modify the start time (UTC) in the Start the backup at field to begin the backup, as needed.

__Step 8 –__ In the Repeat every field, modify the frequency, in minutes, to set the time between the start of each domain backup. Keep in mind the size of the environment when configuring this option.

__NOTE:__ If the start time is changed from the default and a frequency is selected (in minutes), the backups will run at the desired frequency but will skip from midnight until the selected start time.

__Step 9 –__ Click __Next__.

![Edit Domain Configuration wizard - Options page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/options.png)

__Step 10 –__ (_Optional_) Select or deselect the __Collect GPOs__ checkbox to enable or disable GPO rollback and recovery. This setting requires Group Policy Management Console (GMPC). If GPO collection is not desired, skip to Step 12.

__Step 11 –__ If the Collect GPOs checkbox is selected, the Store the Group Policy Object backups in the following location field is enabled. Modify the save location for the GPO backup here, as needed.

__NOTE:__ The path must be a network share. Do not provide the path to a local drive for storing the backup.

__Step 12 –__ Click __Next__.

![Edit Domain Configuration wizard - Notification page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/notification.png)

__Step 13 –__ To set notifications, select the Send email notifications check box and enter the email address of one or more users and/or groups to receive the job start and end notifications. Use a semicolon (;) to separate multiple recipients. See the [Notifications Page](/docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/configuration/notifications.md) topic for additional information.

If notifications are not desired, skip this step.

![Edit Domain Configuration wizard - Confirm page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/confirm.png)

__Step 14 –__  The Confirm page displays a summary of the settings you provided on the pages of the wizard. Use the Back button to return to a previous page and change any setting. Click __Complete__ to finish the wizard.

The domain configuration is updated and backups will resume as scheduled.
