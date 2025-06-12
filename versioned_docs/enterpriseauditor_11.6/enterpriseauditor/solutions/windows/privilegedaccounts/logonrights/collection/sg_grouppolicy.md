# SG\_GroupPolicy Job

The SG\_GroupPolicy job collects policy assignments from all targeted servers. The following policy assignments are audited:

- Allow log on locally
- Log on as a batch job
- Allow log on through Remote Desktop Services
- Log on as a service

## Queries for the SG\_GroupPolicy Job

The SG\_GroupPolicy job uses the GroupPolicy Data Collector for the following query:

__CAUTION:__ The query is preconfigured for this job. Never modify the query.

![Queries for the SG_GroupPolicy Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/grouppolicy/grouppolicyquery.png)

The query for the SG\_GroupPolicy job is:

- GroupPolicy – Collects group policy information
