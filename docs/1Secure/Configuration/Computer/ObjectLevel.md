---
id: objectlevel
title: 'Configure Object-Level Access Auditing'
---

# Configure Object-Level Access Auditing

Netwrix 1Secure can be configured to audit all the access types mentioned below:

![Advanced Activity Selection options](/img/1secure/admin/ObjectLevelAccessAudit.png "Advanced Activity Selection options")

## Configure Object-level Access Auditing on Windows Server 2012 and Above

Follow the steps to configure Object-level access auditing on Windows Server 2012 and above.

**Step 1 –** Navigate to the target file share, right-click it and select **Properties**.

**Step 2 –** In the  Properties dialog box, select the Security tab and click **Advanced**.

**Step 4 –** Click **Add** to add a new principal. You can select **Everyone** (or another user-defined group containing users that are granted special permissions) and click **Edit**.

**Step 5 –** In the Auditing Entry for  dialog box, click the **Select a principal** link and specify **Everyone**.