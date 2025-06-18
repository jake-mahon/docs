---
id: configure-domain-for-monitoring-active-directory
title: 'Configure Domain for Monitoring Active Directory'
pagination_label: 'Configure Domain for Monitoring Active Directory'
sidebar_label: 'Configure Domain for Monitoring Active Directory'
sidebar_position: 101
description: 'Learn how to configure your Active Directory domain for monitoring using automatic or manual methods.'
---

# Configure Domain for Monitoring Active Directory

You can configure your Active Directory domain for monitoring in one of the following ways:

- Automatically when creating an organization

  This method is recommended for evaluation purposes in test environments. If any conflicts are
  detected with your current audit settings, automatic audit configuration will not be
  performed.For a full list of audit settings required for Netwrix 1Secure to collect
  comprehensive audit data and instructions on how to configure them, refer to
  [Configure IT Infrastructure for Auditing and Monitoring](/docs/1secure/setup-and-configuration/index.md).

  If you select to automatically configure audit in the target environment, your current audit
  settings will be checked on each data collection and adjusted if necessary.

- Manually.

Also, perform the following procedures:

- [Configure Basic Domain Audit Policies](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md) or
  [Configure Advanced Audit Policies](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md). Either local or advanced audit policies
  must be configured to track changes to accounts and groups, and to identify workstations where
  changes were made.
- [Configure Object-Level Auditing](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md)
- Adjust Security Event Log Size and Retention Settings
- [Enable Secondary Logon Service](/docs/1secure/setup-and-configuration/active-directory/advanced-settings.md)

---

id: active-directory-manual-configuration
title: "Active Directory: manual configuration"
pagination_label: "Active Directory: manual configuration"
sidebar_label: "Active Directory: manual configuration"
sidebar_position: 105
description: "Learn how to manually configure your domain for Active Directory monitoring using Group Policy Management Console or ADSI Edit."

---

# Active Directory: manual configuration

To configure your domain for monitoring manually, you will need:

- **Group Policy Management Console** — if you plan to perform configuration steps from a domain
  controller

  -OR-

- **ADSI Edit** — if you plan to perform configuration steps from a server other than domain
  controller

If these tools are not installed, refer to the related topics:

- [Install ADSI Edit](/docs/1secure/setup-and-configuration/active-directory/manual-configuration.md)
- [Group Policy Management Console](/docs/1secure/setup-and-configuration/active-directory/advanced-settings.md)

Take the following configuration steps:

**Step 1 –** Configure effective domain controllers policy (by default, Default Domain Controllers
Policy). See [Configure Basic Domain Audit Policies](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md) or
[Configure Advanced Audit Policies](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md) for details.

**Step 2 –** [Configure Object-Level Auditing](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md)

**Step 3 –** Adjust Security Event Log Size and Retention Settings

**Step 4 –** If you have an on-premises Exchange server in your Active Directory domain, consider
that some changes to AD can be made via that Exchange server. To be able to audit and report who
made those changes, you should
[Configure Exchange Administrator Audit Logging Settings](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md)

Also, remember to do the following for AD auditing:

**Step 1 –** Configure Data Collecting Account, as described in
[Active Directory Auditing](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md)

**Step 2 –** Configure required protocols and ports, as described in
[Protocols and Ports Required for Monitoring Active Directory, Exchange, and Group Policy](/docs/1secure/setup-and-configuration/active-directory/advanced-settings.md)
topic.

**Step 3 –** [Enable Secondary Logon Service](/docs/1secure/setup-and-configuration/active-directory/advanced-settings.md) on the computer where
Netwrix Cloud Agent resides.

---

id: install-adsi-edit
title: "Install ADSI Edit"
pagination_label: "Install ADSI Edit"
sidebar_label: "Install ADSI Edit"
sidebar_position: 102
description: "Learn how to install ADSI Edit utility for viewing and managing Active Directory objects and attributes."

---

# Install ADSI Edit

The ADSI Edit utility is used to view and manage objects and attributes in an Active Directory
forest. ADSI Edit is required to manually configure audit settings in the target domain. It must be
installed on any domain controller in the domain you want to start auditing.

To install ADSI Edit on Windows Server 2008 and Windows Server 2008 R2

1. Navigate to **Start** > **Control Panel** > **Programs** > **Programs and Features** > **Turn
   Windows features on or off**.
2. In the **Server Manager** dialog, select **Features** in the left pane, and then click **Add
   Features**.
3. Navigate to **Remote Server Administration Tools** > **Role Administration Tools** and select
   **AD DS and AD LDS Tools** .
4. Click **Next** to proceed to the confirmation page.
5. Click **Install** to enable it.

To install ADSI Edit on Windows Server 2012 and above

1. Navigate to **Start** > **Control Panel > Programs** > **Programs and Features** > **Turn Windows
   features on or off**.
2. In the **Add Roles and Features Wizard** dialog that opens, proceed to the **Features** in the
   left pane.
3. Navigate to **Remote Server Administration Tools → Role Administration Tools** and select **AD DS
   and AD LDS Tools**.
4. Click **Next** to proceed to the confirmation page.
5. Click **Install** to enable it.
