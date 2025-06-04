---
id: advancedpolicy
title: Configure Advanced Audit Policies
---

# Configure Advanced Audit Policies

## To configure security options

Follow the steps:

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) \> **Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest:  ``` → Domains →  ``` → Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

![](/img/1secure/configuration/ManualConfig_AD_NLA_Audit_Force_WinServer2016.png)

**Step 5 –** Navigate to **Start → Run** and type *"cmd"*. Input the `gpupdate /force` command and press **Enter**. The group policy will be updated.

## To configure advanced audit policies

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) \> **Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `** > **Domains** > **`** > **Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 4 –** Configure the following audit policies.

| Policy Subnode | Policy Name | Audit Events |
| --- | --- | --- |
| DS Access | Audit Directory Service Access | *"Success"* |
| Logon/Logoff | - Audit Logoff - Audit Logon   These policies are only required to collect the information on the originating workstation, i.e., the computer from which a change was made. | *"Success"* |

![](/img/1secure/configuration/ManualConfig_AD_AdvPol_WinServer2016.png)

**Step 5 –** Navigate to **Start > Run** and type *"cmd"*. Input the `gpupdate /force` command and press **Enter**. The group policy will be updated.