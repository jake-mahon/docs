---
id: basicauditpolicies
title: Configure Basic Domain Audit Policies
---

# Configure Basic Domain Audit Policies

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) \> **Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `** > **Domains >  ``` > Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 4 –** Configure the following audit policies.

| Policy | Audit Events |
| --- | --- |
| Audit logon events | *"Success"* and *"Failure"* |
| Audit system events | *"Success"* |

![](/img/1secure/configuration/ManualConfig_NLA_AuditPolicies2016.png)

**Step 5 –** Set the Audit system events policy to **Success**.

**Step 6 –** Navigate to **Start** > **Run** and type *"cmd"*. Input the `gpupdate /force` command and press **Enter**. The group policy will be updated.