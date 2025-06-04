---
id: manageauditingsecuritylog
title: Configure the Manage Auditing and Security Log Policy
---

# Configure the Manage Auditing and Security Log Policy

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools**→ Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest:  ``` → Domains →  ``` → Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 4 –** On the right, double-click the **User Rights Assignment** policy.

**Step 5 –** Locate the **Manage auditing and security log** policy and double-click it.

**Step 6 –** In the **Manage auditing and security log Properties** dialog, click **Add User or Group**, specify the user that you want to define this policy for.

**Step 7 –** Navigate to **Start → Run** and type *"cmd"*. Input the `gpupdate /force` command and press **Enter**. The group policy will be updated.

**Step 8 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other domain controllers.