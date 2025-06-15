# 4-SQL_ServerLogons Job

The 4-SQL_ServerLogons Job captures SQL server logon activity, which includes successful or failed
logons.

## Queries for the 4-SQL_ServerLogons Job

The AppnLogSQL Query uses the SMARTLog Data Collector and has been preconfigured to process the
Windows Event Log Type.

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![sqljobgroup18](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/collection/sqljobgroup18.png)

- AppnLogSQL – Uses SmartLog Data Collector to gather logon events
    - See the
      [SMARTLog Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/smartlog/overview.md)
      topic for additional information
