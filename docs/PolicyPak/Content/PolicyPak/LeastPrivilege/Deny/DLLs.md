---
sidebar_position: 4141
title: Denying DLLs within Applications
---

# Denying DLLs within Applications

You can deny DLLs within Applications, like PowerShell’s internal DLLs, which make it operate.

First you must turn on the option with a Global DLL policy, which may only be enabled on the **Computer Configuration** side.

![A screenshot of a computer

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Rules/Denying DLLs within Applications.png)

Then create a matching rule with **New DLL Policy**.

![A screenshot of a computer

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Rules/Denying DLLs within Applications_1.png)

Then you can **Deny execution** of the DLL when it is encountered.

**NOTE:** Some additional details and examples can be found in the [How to Defend against malicious PowerShell attacks (DLLs)?](../PowerShell/MaliciousAttacks)?") topic.