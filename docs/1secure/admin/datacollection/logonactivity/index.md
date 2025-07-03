---
id: logon-activity-auditing
title: "Logon Activity Auditing"
pagination_label: "Logon Activity Auditing"
sidebar_label: "Logon Activity Auditing"
sidebar_position: 73
description: "Learn how to configure domain accounts for logon activity data collection with network traffic compression requirements."
---

# Logon Activity Auditing

Before you start adding the logon activity connector in your domain, plan for the domain account
that will be used for data collection – it should meet the requirements listed below. Then you will
provide this account in the Netwrix 1Secure configuration window.

Depending on the network traffic compression setting you need to use, one of the following is
required:

- If network traffic compression is enabled, then the account must belong to the Domain Admins
  group;
- If network traffic compression is disabled, then you can choose between account which belongs to
  the Domain Admins group or non-administrative account. See
  [Configure Non-Administrative Account to Collect Logon Activity ](/docs/1secure/admin/datacollection/logonactivity/nondomainadmin.md)for more
  information;
