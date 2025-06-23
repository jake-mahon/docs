# Enterprise Auditor Console Upgrade

Enterprise Auditor 11.6 uses the Upgrade Wizard. For upgrades from versions of Enterprise Auditor
that are no longer supported, contact [Netwrix Support](https://www.netwrix.com/support.html) for
assistance.

**NOTE:** If any customizations have been done by a Netwrix Engineer, please ensure custom work is
not lost during the upgrade process. While using the Upgrade Wizard, customizations are archived
prior to solution upgrades. These archives are available after the solution upgrades have been
completed. Contact [Netwrix Support](https://www.netwrix.com/support.html) for additional
information.

The purpose of this document is to provide the basic steps needed for upgrading Enterprise Auditor
and the stock solutions. Contact [Netwrix Support](https://www.netwrix.com/support.html) for
additional information.

See the [What's New](/docs/accessanalyzer/11.6/getting-started/whats-new.md) topic for
release information.

## Considerations

Multiple Enterprise Auditor Consoles Connecting to the Same Database

In environments where multiple Enterprise Auditor Consoles are using the same SQL Server database,
every console using the database must also be updated. The act of connecting a Enterprise Auditor
Console with a newer version to a database updates the database’s schema pursuant to the new
definition. If a Enterprise Auditor Console with an older version connects to the same database
after the schema has been updated, corruption to Enterprise Auditor’s system tables can result.

SQL Server Supported Version Change for the Enterprise Auditor Database

With the release of Enterprise Auditor v11.6, SQL Server 2016 through SQL Server 2022 are the
supported versions for the Enterprise Auditor database.

To grant access to additional Solutions in an existing Enterprise Auditor installation, a new
license key is required. To update the Enterprise Auditor license key without installing a new
version of the Enterprise Auditor Console, see the
[Update License Key](/docs/accessanalyzer/11.6/installation/application/license.md)
topic for instructions.

License Key Changes

The following changes in licensing requires the organization needing a new key:

- Enterprise Auditor v11.6

  - No additional licenses are required for this version

- StealthAUDIT v11.5
  - No additional licenses are required for this version
- StealthAUDIT v11.0
  - The new Data Privacy functionality is now a licensable feature.
  - All database platforms are available as part of a single SQL license.
- StealthAUDIT v10.0
  - The new Amazon Web Services (AWS) Solution and the AWS Data Collector is now a licensable
    feature.

See the
[Update License Key](/docs/accessanalyzer/11.6/installation/application/license.md)
section for instructions on updating the license key.

# Solution Upgrade Considerations

The following items must be taken into consideration for upgrades:

Access Information Center

- Should be upgraded at the same time as Enterprise Auditor.

  **NOTE:** The Enterprise Auditor upgrade should be completed first.

See the Upgrade Procedure for Enterprise Auditor topic in the
[Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)[ ](https://www.stealthbits.com/jdownloads/Documentation%20User%20Guides%20PDF/Stealthbits_AIC_InstallConfigGuide.pdf)for
instructions.

Sensitive Data Discovery Add-on

- Needs to be updated on all servers where it was installed. See the
  [Upgrade Sensitive Data Discovery Add-on](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/upgrade.md)
  topic for instructions.
- **CAUTION:** The new global Settings will overwrite any previously configured criteria. Make a
  note of any configured Sensitive Data Criteria before upgrading Enterprise Auditor. Sensitive Data
  Criteria must be reconfigured after an upgrade.

With the new global experience, sensitive data criteria selection is configured globally and used by
default in all solution sets. See the
[Configure Global Sensitive Data Settings](#configure-global-sensitive-data-settings) for additional
information.

Active Directory Solution Considerations

- For Activity – Ensure the Netwrix Activity Monitor is a compatible version. See the Upgrade
  Instructions in the
  [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
  for additional information.

File System Solution Considerations

- For Proxy Mode as a Service – File System Proxy Service needs to be updated on the proxy servers.
  See the
  [Upgrade Proxy Service Procedure](/docs/accessanalyzer/11.6/installation/filesystem-proxy/upgrade.md)
  topic for instructions.
- For Activity – Ensure the Netwrix Activity Monitor is a compatible version. See the Upgrade
  Instructions in the
  [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
  for additional information.

SharePoint Solution Considerations

- For SharePoint Agent – Enterprise Auditor SharePoint Agent needs to be updated on the SharePoint
  server where it was installed. See the
  [Upgrade SharePoint Agent](/docs/accessanalyzer/11.6/installation/sharepoint-agent/upgrade.md)
  section for instructions.
- For Activity – Ensure the Stealthbits Activity Monitor is a compatible version. See the Upgrade
  Instructions in the
  [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
  for additional information.

The following binary component versions are required for Enterprise Auditor v11.6:

| Component                           | Version |
| ----------------------------------- | ------- |
| Access Information Center           | 11.6    |
| Netwrix Activity Monitor            | 8.0     |
| File System Proxy Service           | 11.6    |
| Sensitive Data Discovery Add-on     | 11.6    |
| Enterprise Auditor SharePoint Agent | 11.6    |

## File System Solution Upgrade

After upgrading to Enterprise Auditor 11.6, run the latest version of the **File System** >
**0.Collection** > **0-Create Schema** job to migrate the File System Solution to the latest
database schema.

This database schema migration should be performed before running other jobs in the File System
Solution after upgrading to Enterprise Auditor 11.6.

See the
[File System Solution](/docs/accessanalyzer/11.6/solutions/file-systems/permissions-analysis.md)
topic for additional information.

## Configure Global Sensitive Data Settings

**CAUTION:** The new global Settings will overwrite any previously configured criteria. Make a note
of any configured Sensitive Data Criteria before commencing the upgrade Enterprise Auditor.
Sensitive Data Criteria must be reconfigured after an upgrade.

If Sensitive Data Criteria are configured differently for each solution, re-configure the criteria
selection at the solution level. See the
[Sensitive Data Discovery Add-On](/docs/accessanalyzer/11.6/accessanalyzer/sensitivedatadiscovery/overview.md)
topic and the topic for the applicable solution for additional information.

If the same Sensitive Data Criteria are used for all solutions, configure the criteria selection at
the global **Settings** > **Sensitive Data** node, which will then be used by default in all
solutions. See the
[Sensitive Data Discovery Add-On](/docs/accessanalyzer/11.6/accessanalyzer/sensitivedatadiscovery/overview.md)
topic for additional information.

Follow the steps to configure Sensitive Data Criteria at the global level.

**Step 1 –** The Sensitive Data node provides configuration options to manage sensitive data
criteria and false positive exclusion filters. These settings require the Sensitive Data Discovery
Add-on. See the
[Sensitive Data Discovery Add-On](/docs/accessanalyzer/11.6/accessanalyzer/sensitivedatadiscovery/overview.md)
topic for additional information.

![Global Settings Sensitive Data node](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/upgrade/sensitivedata.webp)

**Step 2 –** If the same Sensitive Data Criteria are used for all solutions, configure the criteria
selection at the global Settings level, which will then be used by default in all solution sets.
Navigate to the **Settings** > **Sensitive Data** node and click **Add** to open the Select Criteria
window.

![Sensitive Data Select Criteria window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/upgrade/selectcriteria.webp)

**Step 3 –** Select the desired criteria. Use the **Search Criteria** text field to filter the list
using keywords or expand each category to view and select individual Sensitive Data search criteria,
then click **OK**.

By default, Sensitive Data Criteria configured at the global Settings level is inherited down to the
applicable solutions.

# Enterprise Auditor Core Upgrade Instructions

**CAUTION:** If Role Based Access has been enabled, a user with the Administrator role must perform
the upgrade. Other user roles do not have the necessary permissions to perform upgrades.

Follow the steps to upgrade to Enterprise Auditor 11.6 on the same server where an older version of
Enterprise Auditor is installed.

**NOTE:** If any customizations have been done by a Netwrix Engineer, please ensure the custom work
is not lost during the upgrade process. While using the Upgrade Wizard, customizations are archived
prior to solution upgrades. These archives are available after the solution upgrades have been
completed. Contact [Netwrix Support](https://www.netwrix.com/support.html) for additional
information.

**CAUTION:** The new global Settings will overwrite any previously configured Sensitive Data
criteria. Make a note of any configured Sensitive Data Criteria before upgrading Enterprise Auditor.
Sensitive Data Criteria must be reconfigured after an upgrade. See the
[Configure Global Sensitive Data Settings](/docs/accessanalyzer/11.6/installation/application/upgrade.md#configure-global-sensitive-data-settings)
topic for additional information.

![Windows Control Panel Uninstall or change a program window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/controlpaneluninstall.webp)

**Step 1 –** From Programs and Features (**Control Panel** > **Programs** > **Programs and
Features**), uninstall the previous version of Enterprise Auditor. Jobs, application configuration
files, and reports remain in the installation directory after the uninstall process.

- The `WebServer.exe.config` file is automatically retained in a Backup folder created under the Web
  folder of the installation directory. Any custom application settings contained in this file are
  kept as part of this upgrade process.

![Setup Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

**Step 2 –** Install Enterprise Auditor 11.6. See the
[Enterprise Auditor Core Installation](/docs/accessanalyzer/11.6/installation/application/install.md)
topic for detailed instructions.

- Before installation, ensure the new `StealthAUDIT.lic` license file is stored locally on the
  Enterprise Auditor Console in order to be referenced during the installation process
- Enterprise Auditor is installed to the following directory by default:
  `…\STEALTHbits\StealthAUDIT`

  If another installation path is designated, please be sure to leave `STEALTHbits\StealthAUDIT`
  as the path suffix in the installation wizard.

- During the installation, any customizations to the settings in the `WebServer.exe.config` file are
  automatically restored from the backup file retained when installing the previous version. The
  `../Web/Backup` folder is deleted after the settings have been restored.

After the installation is completed, the upgrade wizard launches from the Enterprise Auditor desktop
icon.

## Upgrade Wizard

Once the Enterprise Auditor installation process is complete, it is necessary to go through the
Upgrade Wizard. There are three Upgrade options for a solution:

- Full Upgrade – Performs a full synchronization of the directory and file structure of the solution
  to mirror the Instant Solution
- Upgrade in place – Performs file content updates of jobs matching the Instant Solutions but does
  not change the Jobs tree structure
- Do not upgrade – No upgrade is performed, leaving the previous version of the solution

The default settings configured within the Advanced Upgrade Options window align with the best
practices of the Netwrix Professional Services and Support teams.

The Upgrade Wizard conducts the following actions according to the State identified and whether the
Upgrade action is set to **Full Upgrade** or **Upgrade in place**:

| State    | Condition                                                                           | Action: Full Upgrade | Action: Upgrade in place |
| -------- | ----------------------------------------------------------------------------------- | -------------------- | ------------------------ |
| Normal   | Job exists in Locked state and has matching ID in Instant Solutions                 | Upgrade              | Upgrade                  |
| New      | Job exists in Instant Solutions but not in the Jobs tree for an existing solution   | Install              | Install                  |
| Removed  | Job exists in Locked state in the Jobs tree but does not exist in Instant Solutions | Delete               | Nothing                  |
| Copied   | Original job exists in original location, but multiple instances of the job exists  | Delete               | Upgrade                  |
| Moved    | Original job exists but in a different location than in the Instant Solutions       | Move & Upgrade       | Upgrade                  |
| Renamed  | Job found via ID match but was renamed                                              | Rename & Upgrade     | Upgrade                  |
| Conflict | Changes have been made to the job                                                   | Overwrite            | Overwrite                |

Conflicts are identified when customizations have been made by either a user or a Netwrix engineer.
Conflicts need to be either resolved prior to the upgrade action or manually applied after the
upgrade is complete. Conflict resolution can be done on the Changes window by undoing a
customization. However, if the conflict is undone prior to a solution upgrade, then the
customization will not be archived.

**CAUTION:** If Role Based Access has been enabled, a user with the Administrator role must perform
the upgrade. Other user roles do not have the necessary permissions to perform upgrades.

Follow the steps to use the Upgrade Wizard.

**Step 1 –** Launch the Enterprise Auditor application. The installation wizard placed the
Enterprise Auditor icon on the desktop.

![Configuration Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

**Step 2 –** The Enterprise Auditor Configuration Wizard opens. Click **Next** to continue.

**NOTE:** When Enterprise Auditor11.6 is installed on a server where a previous version of
Enterprise Auditor had been installed, the Version Selection page of the Configuration Wizard will
not appear.

![Configuration Wizard Solution Set Files page with conflicts](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/upgrade/solutionsetfiles.webp)

**Step 3 –** On the Solution Set Files page, only upgrade conflicts are displayed by default.

**_RECOMMENDED:_** Investigate the changes where conflicts have been identified before proceeding.

**Step 4 –** (Optional) Select an item with the Conflict State and click **View conflicts** to open
the Changes window.

Additional options include:

- Show upgrade conflicts only – Displays upgrade actions for all solutions
- Advanced – Opens the Advanced Upgrade Options window to view or modify the Upgrade option per
  solution

![View conflicts in the Changes window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/upgrade/changes.webp)

**Step 5 –** (Optional) Conflicts can be resolved on the Changes window, which is opened by the
**View conflicts** button. Remember, if the conflict is resolved prior to a solution upgrade, then
the customization will not be archived. To resolve a conflict, select it from the list and click
**Undo**.

**Step 6 –** When the Upgrade options have been set as desired. Click **Next**.

![Configuration wizard Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/options.webp)

**Step 7 –** On the Options page, select whether to send usage statistics to Netwrix to help us
improve our product. After the Usage Statistics option is set as desired, click **Next** to
continue.

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

![Configuration Wizard Progress page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/upgrade/progress.webp)

**Step 8 –** The Upgrade Progress page opens and displays the progress of the upgrade actions. When
the action completes, click **Finish**.

The Upgrade Wizard closes, and Enterprise Auditor launches. The archived Jobs directory is in a ZIP
file located within the Jobs directory: `…\STEALTHbits\StealthAUDIT\Jobs`.

The ZIP file name reflects the date and time of the upgrade. For example, the file name for an
upgrade performed on June 4, 2023 at approximately 6 PM would be: `20230604180542.zip`.
