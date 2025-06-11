# Configuration > PgSQL\_DatabaseSizing Job

The Configuration Job Group is designed to provide insight into details about the PostgreSQL environment and potential vulnerabilities related to instance configuration settings.

![Configuration Job Group - PostgreSQL](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/postgresql/configurationjobgroup.webp)

The job in the Configuration Job Groups is:

- PgSQL\_DatabaseSizing Job - Provides details about PostgreSQL databases and overall database size

## Analysis Tasks for the PgSQL\_DatabaseSizing Job

Navigate to the __Jobs > Databases > PostgreSQL > Configuration > PgSQL\_DatabaseSizing > Configure__ node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/postgresql/pssqldatabasesizinganalysistasks.webp)

The default analysis tasks are:

- Database Sizing Details - Provides details about PostgreSQL databases and sizing
- Database Sizing Summary - Summarizes PostgreSQL database sizing by host

In addition to the tables and views created the analysis task, the PgSQL\_DatabaseSizing Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Database Sizing | This report highlights the size of databases in PostgreSQL | None | This report is comprised of three elements:   - Bar Chart – Displays top databases by size (MB) - Bar Chart – Displays sizes by host (GB) - Table – Provides database details |
