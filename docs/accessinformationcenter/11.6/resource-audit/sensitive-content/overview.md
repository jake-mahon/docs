# Sensitive Content Audit Interface

The Sensitive Content Audit interface is opened by searching for a particular criteria value. See
the
[Search Features](/docs/accessinformationcenter/11.6/resource-audit/navigation/search.md)
topic for additional information. It contains three panes in all audit interfaces: Reports, Results,
and Group Membership.

In order to enable the criteria match search feature, the **Store discovered sensitive data** option
must be enabled in the Enterprise Auditor data collector scanning the target environment. See the
relevant solution topic in the
[Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
for additional information on the data collection options.

![Sensitive Content Audit Interface](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/navigate/files.webp)

The criterion being audited is identified at the top of the interface as part of the interface
breadcrumb. See the
[Sensitive Content Reports](/docs/accessinformationcenter/11.6/resource-audit/sensitive-content/overview.md)
topic for additional information.

# Sensitive Content Reports

Sensitive Content reports are accessed through the Content Audit interface. You can access Sensitive
Content reports by searching for sensitive data criterion or values on the Home page. These searches
must be preceded by `SDD` and a space, for example `SDD credit cards`. Searches are not case
sensitive. See the
[Search Features](/docs/accessinformationcenter/11.6/resource-audit/navigation/search.md)
topic for additional information. The sensitive data being reviewed is identified in the upper-left
corner. The data within these reports is collected by the Enterprise Auditor solutions which provide
data to the Resource reports. See the desired solution topic in the
[Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
for additional information.

In order to view populated Content reports, it is necessary to enable the **Store discovered
sensitive data** option within Enterprise Auditor. This is a setting configured within the
solutions’ collection query:

- File System – Configure this option for the 1-SEEK System Scan job on the SDD Audit Criteria
  Settings page of the query configuration wizard
- SharePoint – Solution automatically stores discovered sensitive data
- SQL – Configure this option for the 3-SQL_SensitiveDataScan job on the Options page of the query
  configuration wizard

**NOTE:** Only Access Information Center users with either the Security Team role or the Console
Administrator role will be able to perform Sensitive Data Discovery criteria searches. Reports are
blank for Access Information Center users with the Reader role.

The Sensitive Content report identifies where potentially sensitive data has been found across the
scanned targeted environments.

# Sensitive Content Reports Quick Reference

The following report is available for selection within the Content Audit interface:

| Report                                                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Files Report](/docs/accessinformationcenter/11.6/resource-audit/sensitive-content/files.md) | Provides a list of all files for the targeted environments which have matches to the searched Sensitive Data Discovery criteria. This report includes additional tables: - Matches – Displays information on the criteria hits found on the selected file - Activity – Displays information on activity performed on the selected file during the selected date range - Permissions – Displays information on the trustees with effective access to the parent object or folder that contains the selected sensitive data file |
