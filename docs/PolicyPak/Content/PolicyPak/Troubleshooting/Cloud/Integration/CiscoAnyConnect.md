---
sidebar_position: 3946
title: I'm using Cisco Anyconnect and all the computers I register via Endpoint Policy
  Manager Cloud are being overwritten. Why is this and what can I do?
---

# I'm using Cisco Anyconnect and all the computers I register via Endpoint Policy Manager Cloud are being overwritten. Why is this and what can I do?

When you use Cisco AnyConnect, the same MAC address is used for all the computers you register Specifically it will use (00-05-9A-3C-7A-00).  ( as you can see in that link.)

The result is that Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud will match the existing record and overwrite.

The workaround is to use Endpoint Policy Manager Cloud in Loose to match on UUID only (not MAC) as seen below.

This is dump MAC as a matching criteria and use only UUID which is somewhat less aggressive.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/Integration/817_1_image001_950x578.png)