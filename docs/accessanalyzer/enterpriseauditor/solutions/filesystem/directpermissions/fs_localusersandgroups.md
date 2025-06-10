# FS\_LocalUsersAndGroups Job

The FS\_LocalUsersAndGroups job is designed to report on local users and groups that have been granted direct permissions on resources from targeted file servers.

## Analysis Tasks for the FS\_LocalUsersAndGroups Job

View the analysis tasks by navigating to the __FileSystem__ > __2.Direct Permissions__ > __FS\_LocalUsersAndGroups__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_LocalUsersAndGroups Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/directpermissions/localusersandgroupsanalysis.webp)

The following analysis tasks are selected by default:

- 1. Local Groups Resource Details – Creates the SA\_FS\_LocalUsersAndGroups\_LocalGroupResourceDetails table accessible under the job’s Results node
- 2. Local Groups – Creates an interim processing table in the database for use by downstream analysis and report generation
- 3. Local Group Details – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis task, the FS\_LocalUsersAndGroups job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Local Users And Groups | This report identifies at the server level, how many local users and groups have direct ACLs, followed by details at the share level. | None | This report is comprised of two elements:   - Bar Chart – Displays top five servers with local users and groups by affected folders - Table – Provides details on local users and groups |
