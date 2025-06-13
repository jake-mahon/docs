# 2-AzureSQL\_SensitiveDataScan Job

The 2-AzureSQL\_SensitiveDataScan Job is designed to discover sensitive data in the Azure SQL instances and databases based on pre-defined or user-defined search criteria.

## Queries for the 2–AzureSQL\_SensitiveDataScan Job

The 2–AzureSQL\_SensitiveDataScan Job uses the SQL Data Collector for the following query:

![Query Selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/azuresql/collection/sensitivedatascanjob.png)

- Sensitive Data Scan — Collects sensitive data from targeted instances

### Analysis Task for 2-AzureSQL\_SensitiveDataScan Job

Navigate to the __Databases__ > __0.Collection__ > __AzureSQL__ > __2–AzureSQL\_SensitiveDataScan__ > __Configure__ node and select Analysis to view the analysis task.

__CAUTION:__ Do not modify or deselect the selected analysis task(s). The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/azuresql/collection/sensitivedatascananalysis.png)

The default analysis tasks are:

- Azure SQL SSD Matches View — Brings the Azure SQL SSD Matches View to the SA console
- Azure SQL SSD Match Hits View — Brings the Azure SQL SSD Match Hits View to the SA Console
- AIC Impot SSD — Imports Azure SQL SSD to the AIC
