---
sidebar_position: 1487
title: Configure Netwrix Auditor Service Accounts
---

Filter: 

* All Files

Submit Search

# Configure Netwrix Auditor Service Accounts

Netwrix Auditor uses the following service accounts:

| Service account | Description |
| --- | --- |
| Account for data collection | An account used by Netwrix Auditor to collect audit data from the target systems.  **NOTE:** For the data collecting account, you should use a different account than the one Auditor is using to access the database.  See [Data Collecting Account](../Admin/MonitoringPlans/DataAccounts "Data Collecting Account") for additional information. |
| Audit Database service account | An account used by Netwrix Auditor to write collected audit data to the Audit Database.  See [Requirements for SQL Server to Store Audit Data](SQLServer "Requirements for SQL Server to Store Audit Data") for additional information. |
| SSRS service account | An account used by Netwrix Auditor to upload data to the Report Server.  See [SQL Server Reporting Services](SQLServerReportingService "SQL Server Reporting Services") for additional information. |
| Long-Term Archive service account | An account used to write data to the Long-Term Archive and upload report subscriptions to shared folders. The LocalSystem account is selected by default.  See [File-Based Repository for Long-Term Archive](LongTermArchive "File-Based Repository for Long-Term Archive") for additional information. |