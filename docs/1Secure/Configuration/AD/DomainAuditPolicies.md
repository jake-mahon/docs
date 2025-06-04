---
id: domainauditpolicies
title: Configure Basic Domain Audit Policies
---

# Configure Basic Domain Audit Policies

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012)>  **Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `** > **Domains** >  ** ``` > Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 4 –** Configure the following audit policies.

| Policy | Audit Events |
| --- | --- |
| **Audit directory service access** | *"Success"* |
| **Audit logon events** | *"Success"* |

![](/img/1secure/configuration/ManualConfig_AD_LocalPolicy_WinServer2016.png)

The Audit logon events policy is only required to collect the information on the originating workstation, i.e., the computer from which a change was made. This functionality is optional and can be disabled.

**Step 5 –** Navigate to **Start > Run** and type *"cmd"*. Input the `gpupdate /force` command and press **Enter**. The group policy will be updated.