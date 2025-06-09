# Configuration > Db2\_DatabaseSizing Job

The Db2\_DatabaseSizing job provides details on overall database sizes.

![Configuration > Db2_DatabaseSizing Job in the Jobs Tree](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/db2/configurationjobstree.png)

This job is located in the Configuration job group.

## Analysis Tasks for the Db2\_DatabaseSizing Job

Navigate to the __Jobs__ > __Databases__ > __Db2__ > __Configuration__ > __Db2\_DatabaseSizing__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Db2_DatabaseSizing Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/db2/databasesizinganalysis.png)

The default analysis tasks are:

- Database Sizing – Returns size details for Db2 databases
- Database Summary – Summarizes Db2 database size by host

## Report for the Db2\_DatabaseSizing Job

In addition to the tables and views created the analysis task, the Db2\_DatabaseSizing job produces the following preconfigured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Database Sizing | Provides details on database tables and sizing | None | This report is comprised of three elements:   - Bar Chart – Displays top databases by size (MB) - Bar Chart – Displays top hosts by size (GB) - Table – Displays details on database sizing |
