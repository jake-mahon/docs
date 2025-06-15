# Db2_EffectivePermissions Job

This job provides insight into effective user and role permissions to all the database objects in the targeted Db2 database servers.

## Analysis Tasks for the Db2 _EffectivePermissions Job

Navigate to the __Jobs__ > __Databases__ > __Db2__ > __Permissions__ > __Db2_EffectivePermissions__ > __Configure__ node and select __Analysis__ to view the Analysis Tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Db2 _EffectivePermissions Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/db2/permissions/effectivepermissionsanalysis.png)

The default analysis tasks are:

- Effective Permissions – Uses role membership to display effective permissions on Db2 objects
- Database Summary – Summarizes effective permissions by Db2 database

## Report for the Db2_Effective Job

In addition to the tables and views created the analysis task, the Db2_EffectivePermissions job produces the following preconfigured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Effective Permissions | This report shows details on effective permissions in the audited Db2 environment. | None | This report is comprised of three elements:   - Bar Chart – Displays Database Summary - Table – Displays Database Summary - Table – Displays permissions details |
