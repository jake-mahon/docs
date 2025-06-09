# SQL\_LinkedServers Job

The SQL\_LinkedServers Job identifies Linked Servers or remote database servers on which the identified SQL and Azure SQL servers can execute commands. Some of the common remote OLE DB providers include IBM DB2, Oracle, Access and Excel. Typically, linked servers are used to handle distributed queries in SQL and Azure SQL server .

## Analysis Tasks for the SQL\_LinkedServers Job

Navigate to the __Databases__ > Jobs > SQL > 4.Configuration > SQL\_LinkedServers Job >Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are pre-configured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/analysistasks.png)

The default analysis tasks are:

- Linked Server Details – Provides details on SQL Linked Servers
- Linked Server Summary – Summarizes Linked Servers by instance

In addition to the tables created by the analysis tasks, the __SQL\_DatabaseSizing Job__ produces the following preconfigured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Linked Servers | This report highlights Linked Servers where the listed SQL Server is able to execute remote commands. | None | This report is comprised of three elements:   - Bar Chart – Provides information on top five linked servers by instance - Table – Provides details on linked servers by instance - Table – Provides details on linked servers |
