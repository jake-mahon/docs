---
sidebar_position: 3884
title: How do I turn on Debug logging if asked?
---

# How do I turn on Debug logging if asked?

Debug logging might be required by the Netwrix Endpoint Policy Manager (formerly PolicyPak) technical team, and goes beyond standard logging.

To turn on Debug logging:

**Step 1 –** Please add a registry key in

`HKLMSoftwarePoliciesPolicyPakConfigLogs` as REG\_DWORD called DefaultVerbose and set it to 0xFFFFFFFF as seen in this screenshot.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Log/385_1_image0021.png)

**Step 2 –** Then Reboot. (Very important.)

**Step 3 –** You know you'll have done it right, when special Debug messages appear in the logs like BRExtension::dtor as seen here. For instance, check `%programdata%PolicyPakPolicyPak`Browser RouterppService.log and look to see its been done correctly.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Log/385_2_image003.png)

**Step 4 –** After that, reproduce the problem, and run `PPLOGS` as seen in Step 3 [What must I send to Endpoint Policy Manager support in order to get the FASTEST support?](../FastSupport) and attach to your support case.