# Solution Upgrade Considerations

The following items must be taken into consideration for upgrades:

Access Information Center

- Should be upgraded at the same time as Enterprise Auditor.

  __NOTE:__ The Enterprise Auditor upgrade should be completed first.

See the Upgrade Procedure for Enterprise Auditor topic in the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)[ ](https://www.stealthbits.com/jdownloads/Documentation%20User%20Guides%20PDF/Stealthbits_AIC_InstallConfigGuide.pdf)for instructions.

Sensitive Data Discovery Add-on

- Needs to be updated on all servers where it was installed. See the [Upgrade Sensitive Data Discovery Add-on](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sensitivedatadiscovery/upgrade.md) topic for instructions.
- __CAUTION:__ The new global Settings will overwrite any previously configured criteria. Make a note of any configured Sensitive Data Criteria before upgrading Enterprise Auditor. Sensitive Data Criteria must be reconfigured after an upgrade.

With the new global experience, sensitive data criteria selection is configured globally and used by default in all solution sets. See the [Configure Global Sensitive Data Settings](#Configure-Global-Sensitive-Data-Settings) for additional information.

Active Directory Solution Considerations

- For Activity – Ensure the Netwrix Activity Monitor is a compatible version. See the Upgrade Instructions in the [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor) for additional information.

File System Solution Considerations

- For Proxy Mode as a Service – File System Proxy Service needs to be updated on the proxy servers. See the [Upgrade Proxy Service Procedure](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/filesystemproxy/upgrade.md) topic for instructions.
- For Activity – Ensure the Netwrix Activity Monitor is a compatible version. See the Upgrade Instructions in the [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor) for additional information.

SharePoint Solution Considerations

- For SharePoint Agent – Enterprise Auditor SharePoint Agent needs to be updated on the SharePoint server where it was installed. See the [Upgrade SharePoint Agent](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sharepointagent/upgrade.md) section for instructions.
- For Activity – Ensure the Stealthbits Activity Monitor is a compatible version. See the Upgrade Instructions in the [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor) for additional information.

The following binary component versions are required for Enterprise Auditor v11.6:

| Component | Version |
| --- | --- |
| Access Information Center | 11.6 |
| Netwrix Activity Monitor | 8.0 |
| File System Proxy Service | 11.6 |
| Sensitive Data Discovery Add-on | 11.6 |
| Enterprise Auditor SharePoint Agent | 11.6 |

## File System Solution Upgrade

After upgrading to Enterprise Auditor 11.6, run the latest version of the __File System__ > __0.Collection__ > __0-Create Schema__ job to migrate the File System Solution to the latest database schema.

This database schema migration should be performed before running other jobs in the File System Solution after upgrading to Enterprise Auditor 11.6.

See the [File System Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/filesystem/overview.md) topic for additional information.

## Configure Global Sensitive Data Settings

__CAUTION:__ The new global Settings will overwrite any previously configured criteria. Make a note of any configured Sensitive Data Criteria before commencing the upgrade Enterprise Auditor. Sensitive Data Criteria must be reconfigured after an upgrade.

If Sensitive Data Criteria are configured differently for each solution, re-configure the criteria selection at the solution level. See the [Sensitive Data Discovery Add-On](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/sensitivedatadiscovery/overview.md) topic and the topic for the applicable solution for additional information.

If the same Sensitive Data Criteria are used for all solutions, configure the criteria selection at the global __Settings__ > __Sensitive Data__ node, which will then be used by default in all solutions. See the [Sensitive Data Discovery Add-On](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/sensitivedatadiscovery/overview.md) topic for additional information.

Follow the steps to configure Sensitive Data Criteria at the global level.

__Step 1 –__ The Sensitive Data node provides configuration options to manage sensitive data criteria and false positive exclusion filters. These settings require the Sensitive Data Discovery Add-on. See the [Sensitive Data Discovery Add-On](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/sensitivedatadiscovery/overview.md) topic for additional information.

![Global Settings Sensitive Data node](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/application/upgrade/sensitivedata.png)

__Step 2 –__  If the same Sensitive Data Criteria are used for all solutions, configure the criteria selection at the global Settings level, which will then be used by default in all solution sets. Navigate to the __Settings__ > __Sensitive Data__ node and click __Add__ to open the Select Criteria window.

![Sensitive Data Select Criteria window](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/application/upgrade/selectcriteria.png)

__Step 3 –__ Select the desired criteria. Use the __Search Criteria__ text field to filter the list using keywords or expand each category to view and select individual Sensitive Data search criteria, then click __OK__.

By default, Sensitive Data Criteria configured at the global Settings level is inherited down to the applicable solutions.
