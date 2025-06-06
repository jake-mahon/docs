---
id: activity
title: 'SharePoint On-Premise Activity Auditing Configuration'
---

# SharePoint On-Premise Activity Auditing Configuration

SharePoint Event Auditing must be enabled for each site collection to be monitored by the Netwrix Activity Monitor and/or audited by Netwrix Access Analyzer (formerly Enterprise Auditor).

## User Requirements

Following are the SharePoint On-Premise user requirements:

- Local Administrator on SharePoint server (that hosts Central Administration)
- SharePoint SQL server, which includes login on SharePoint Admin, Config, and all content databases, with the following role permissions:

  - SharePoint 2013+

    - SPDataAccess
  - SharePoint 2010

    - `db_owner`

## Enable Event Auditing

Follow the steps for each site collection within a SharePoint 2013 through SharePoint 2019 farm.

**Step 6 –** Click OK to save the changes.