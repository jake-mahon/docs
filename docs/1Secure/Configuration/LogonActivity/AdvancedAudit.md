---
id: advancedaudit
title: Configure Advanced Audit Policies
---

# Configure Advanced Audit Policies

You can configure advanced audit policies instead of basic domain policies to collect Logon Activity changes with more granularity.

Follow the steps to configure security options.

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools> **Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest:  ``` > Domains >  ``` > Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

![](/img/1secure/configuration/ManualConfig_AD_NLA_Audit_Force_WinServer2016.png)

**Step 5 –** Navigate to **Start** > **Run** and type *"cmd"*. Input the `gpupdate /force` command and press **Enter**. The group policy will be updated.

Follow the steps to configure advanced audit policies.

**Step 6 –** Open the **Group Policy Management** console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools> **Group Policy Management.**

**Step 7 –** In the left pane, navigate to **Forest: `** > **Domains** > **`** > **Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 9 –** Configure the following audit policies.

| Policy Subnode | Policy Name | Audit Events |
| --- | --- | --- |
| Logon/Logoff | - Audit Logoff - Audit Other Logon/Logoff Events | *"Success"* |
| - Audit Logon | *"Success"* and *"Failure"* |
| System | - Audit Security State Change | *"Success"* |

![](/img/1secure/configuration/ManualConfig_NLA_AdvPol2016.png)

**Step 10 –** Set the following advanced audit policies to *"Success"* and *"Failure"*:

- Audit Kerberos Service Ticket Operations
- Audit Kerberos Authentication Service
- Audit Credential Validation

**Step 11 –** Set the Audit Security State Change advanced audit policy to "*Success*".

**Step 12 –** Navigate to **Start** > **Run** and type *"cmd"*. Input the `gpupdate /force` command and press **Enter**. The group policy will be updated.