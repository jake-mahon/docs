---
sidebar_position: 1618
title: Maintenance and Troubleshooting
---

Filter: 

* All Files

Submit Search

# Maintenance and Troubleshooting

Splunk records service logs to the \_internal index. Follow the steps to troubleshoot data input from Netwrix Auditor API:

**Step 1 –** Navigate to the Search page of the add-on or Search & Reporting Splunk app.

**Step 2 –** Enter the search command:

```
index=_internal ""
```
For example:

```
index=_internal ""
```
**Step 3 –** Press the Last 24 hours button and choose Last 15 minutes time range.

**Step 4 –** Press the search button; you should see list of the events with Splunk service information.

When the add-on operates normally there should be no errors and the following types of events should appear regularly:

* Regular events from *\*splunk\ta-netwrix-auditor-add-on-for-splunk\_netwrix\_auditor\_api\_input\_\** source with POST requests to the Netwrix Auditor API.
* Regular events from *\*splunk\ta-netwrix-auditor-add-on-for-splunk\_netwrix\_auditor\_api\_input\_\** source with checkpoint update with new ContinuationMarks received from Netwrix Auditor API.
* Events from *\*\splunk\metrics.log* source with information about indexed volumes.