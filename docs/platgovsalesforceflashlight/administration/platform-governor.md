---
title: Viewing Platform Governor Status
sidebar_label: Governor Status
description: Monitor Strongpoint's usage of Salesforce governor limits with live status updates and configurable thresholds to prevent org limit overruns.
---

# Viewing the Platform Governor Status

This is a live status update of the Strongpoint Usage of SFDC Governor Limit. Access it from
**Support** > **Platform Governor Status**

When Strongpoint reaches the threshold, executions are reschedule for the next day so the
organization limit is not reached.

![governor_800x271](/img/product_docs/platgovsalesforceflashlight/getting_started/governor_800x271.webp)

## Setting a Threshold

You can set or edit the organization limits through the **Setup** menu.

1. Open **Setup**
2. Search for **Strongpoint General Config CS**
3. Click **Manage** next to **Strongpoint General Config CS**
4. Click **Edit** next to **Strongpoint Apex Method Daily**
5. Change the **Value Number** as needed.
6. Click **Save**
