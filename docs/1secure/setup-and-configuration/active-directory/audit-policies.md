---
title: Active Directory Audit Policies Configuration
sidebar_label: Audit Policies
description: Configure audit policies and account permissions required for Active Directory data collection and comprehensive security monitoring.
---

# Active Directory Auditing

To collect data from Active Directory, you need an account with specific permissions. The following
options are available:

## Use Domain Admin Account

You can use an account from the Domain Admins group. This account inherently has all necessary
permissions for data collection.

## Use Non-Domain Admin Account

If using a Non-Domain Admin account, set up the account with specific permissions depending on the
following aspects:

|                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In the target domain                                                                                                                  | Account Permission Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Do you plan to use [Network Traffic Compression](/docs/1secure/setup-and-configuration/network-configuration.md) for data processing? | If **YES**, account must belong to Domain Admin group. If **NO**, add an account to 'Manage auditing and security log' policy. See [Configure the Manage Auditing and Security Log Policy](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md) for more information.                                                                                                                                                                                                                                                                       |
| Do you plan to use AD Deleted Objects container for data processing?                                                                  | If **YES**, account requires Read permission on the read container. See [Granting Permissions for 'Deleted Objects' Container](/docs/1secure/setup-and-configuration/active-directory/permissions-and-access.md) topic for more information.                                                                                                                                                                                                                                                                                                                     |
| Is auto-backup _enabled_ for the domain controller event logs?                                                                        | If **YES**, account needs the following: - Access to specific registry key on the domain controllers. See[Assigning Permission To Read the Registry Key](/docs/1secure/setup-and-configuration/active-directory/permissions-and-access.md) for additional information. - Membership in either Administrators, Print Operators, or Server Operators group. - Read/Write and Full Control permissions on the logs back up folder.                                                                                                                                  |
| Is there an on-premises Exchange server in your Active Directory domain?                                                              | If **YES**, account needs the following: - Membership in the **Organization Management** or **Records Management** group or having Audit Logs management role. See [Assigning Management Roles](/docs/1secure/setup-and-configuration/active-directory/permissions-and-access.md) topic for additional information. - Adjustment of the Exchange Administrator Audit Logging settings. See [Configure Exchange Administrator Audit Logging Settings](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md) topic for additional information. |

## Use GMSA

You can use group Managed Service Accounts (gMSA) as data collecting accounts. It should also meet
the same requirements.

**NOTE:** If you are using gMSA for data collection, consider that AAL event data collection from
your on-premise Exchange server will not be possible. Thus, changes made to your Active Directory
domain via that Exchange server will be reported with _domain\\Exchange_server_name$_ instead of the
initiator (user) name in the "_Who_" field of reports, search results and activity summaries.

For more information on gMSA, refer to [Using Group Managed Service Account (gMSA)](/docs/1secure/data-sources/gmsa.md)
and to
[Microsoft documentation](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview).

---

id: configure-exchange-administrator-audit-logging-settings
title: "Configure Exchange Administrator Audit Logging Settings"
pagination_label: "Configure Exchange Administrator Audit Logging Settings"
sidebar_label: "Configure Exchange Administrator Audit Logging Settings"
sidebar_position: 65
description: "Learn how to configure Exchange Administrator Audit Logging settings for monitoring changes to Exchange servers."

---

# Configure Exchange Administrator Audit Logging Settings

To be able to audit and report who made changes to the Exchange servers in your on-premises
infrastructure, or to Active Directory via the Exchange, ensure the Exchange Administrator Audit
Logging (AAL) settings are configured as follows:

| Setting               | Value                                                                                                                                                                                                                                                                                                                                                  | Comment                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| AdminAuditLogEnabled  | True                                                                                                                                                                                                                                                                                                                                                   | Enables audit logging                                                            |
| AdminAuditLogAgeLimit | 30                                                                                                                                                                                                                                                                                                                                                     | Determines how long audit log entries will be retained (default is 90 days)      |
| AdminAuditLogCmdlets  | \*                                                                                                                                                                                                                                                                                                                                                     | Instructs the program to create a log entry for every cmdlet that is run.        |
| LogLevel              | Verbose                                                                                                                                                                                                                                                                                                                                                | Sets logging level.                                                              |
| ExcludedCmdlets       | \*-InboxRule, \*-MailboxAutoReplyConfiguration, Set-MailboxAuditBypassAssociation, Set-MailboxAutoReplyConfiguration, Set-MailboxCalendarConfiguration, Set-MailboxCalendarFolder, Set-MailboxFolderPermission, Set-MailboxJunkEmailConfiguration, Set-MailboxMessageConfiguration, Set-MailboxRegionalConfiguration, Set-MailboxSpellingConfiguration | This list of exclusions is set up as explained in step 3 of the procedure below. |

To configure these settings manually, refer to the procedure described below.

You can perform this procedure on any of the Exchange servers, and these settings will then be
replicated to all Exchange servers in the domain.

Follow the steps to configure Exchange Administrator Audit Logging settings.

**Step 1 –** On the computer where the monitored Exchange server is installed, navigate to **Start →
Programs → Exchange Management Shell**.

**Step 2 –** Execute the following command depending on your Exchange version:

- Exchange 2019, 2016 and 2013

  `Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogAgeLimit 30 -AdminAuditLogCmdlets * -LogLevel Verbose`

- Exchange 2010

`Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogAgeLimit 30 -AdminAuditLogCmdlets *`

1. To reduce server load, you can exclude the cmdlets listed in the table above from Exchange
   logging. For that:

   1. On the computer where Netwrix 1Secure is installed, browse to the _%Netwrix Auditor Server
      installation folder%/Active Directory Auditing_ folder, locate the
      **SetAALExcludedCmdlets.ps1** PowerShell script file and copy it to Exchange server.
   2. In **Exchange Management Shell**, run this script using the command line:

      `<Path_To_SetAALExcludedCmdlets_File>.\SetAALExcludedCmdlets.ps1`

   Make sure your policies allow script execution.

---

id: configure-the-manage-auditing-and-security-log-policy
title: "Configure the Manage Auditing and Security Log Policy"
pagination_label: "Configure the Manage Auditing and Security Log Policy"
sidebar_label: "Configure the Manage Auditing and Security Log Policy"
sidebar_position: 68
description: "Learn how to configure Manage Auditing and Security Log policy for non-Domain Admin data collection accounts."

---

# Configure the Manage Auditing and Security Log Policy

Perform this procedure only if the account selected for data collection is not a member of the
Domain Admins group.

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target
domain: navigate to Start > Windows Administrative Tools**→ Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `<forest_name>` → Domains → `<domain_name>` →
Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the
**Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 3 –** In the **Group Policy Management Editor** dialog, expand the **Computer Configuration**
node on the left and navigate to **Policies → Windows Settings → Security Settings → Local
Policies.**

**Step 4 –** On the right, double-click the **User Rights Assignment** policy.

**Step 5 –** Locate the **Manage auditing and security log** policy and double-click it.

**Step 6 –** In the **Manage auditing and security log Properties** dialog, click **Add User or
Group**, specify the user that you want to define this policy for.

**Step 7 –** Navigate to **Start → Run** and type _"cmd"_. Input the `gpupdate /force` command and
press **Enter**. The group policy will be updated.

**Step 8 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

## **Step 9 –** Ensure that new GPO settings applied on any audited domain controller.

id: configure-basic-domain-audit-policies
title: "Configure Basic Domain Audit Policies"
pagination_label: "Configure Basic Domain Audit Policies"
sidebar_label: "Configure Basic Domain Audit Policies"
sidebar_position: 106
description: "Learn how to configure basic domain audit policies to track user account and group changes."

---

# Configure Basic Domain Audit Policies

Basic audit policies allow tracking changes to user accounts and groups and identifying originating
workstations. You can configure advanced audit policies for the same purpose too. See the
[Configure Advanced Audit Policies](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md) topic for additional information.

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target
domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
Administrative Tools (Windows 2012)> **Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `<forest_name>`** > **Domains** >
**`<domain_name>` > Domain Controllers**. Right-click the effective domain controllers policy (by
default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 3 –** In the **Group Policy Management Editor** dialog, expand the **Computer Configuration**
node on the left and navigate to **Policies > Windows Settings > Security Settings > Local
Policies > Audit Policy.**

**Step 4 –** Configure the following audit policies.

| Policy                             | Audit Events |
| ---------------------------------- | ------------ |
| **Audit account management**       | _"Success"_  |
| **Audit directory service access** | _"Success"_  |
| **Audit logon events**             | _"Success"_  |

![manualconfig_ad_localpolicy_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_ad_localpolicy_winserver2016.webp)

The Audit logon events policy is only required to collect the information on the originating
workstation, i.e., the computer from which a change was made. This functionality is optional and can
be disabled.

**Step 5 –** Navigate to **Start > Run** and type _"cmd"_. Input the `gpupdate /force` command and
press **Enter**. The group policy will be updated.

---

id: configure-advanced-audit-policies
title: "Configure Advanced Audit Policies"
pagination_label: "Configure Advanced Audit Policies"
sidebar_label: "Configure Advanced Audit Policies"
sidebar_position: 103
description: "Learn how to configure advanced audit policies for more granular Active Directory change tracking."

---

# Configure Advanced Audit Policies

You can configure advanced audit policies instead of basic domain policies to collect Active
Directory changes with more granularity. Either basic or advanced audit policies must be configured
to track changes to accounts and groups, and to identify workstations where changes were made.

## To configure security options

Using both basic and advanced audit policies settings may lead to incorrect audit reporting. To
force basic audit policies to be ignored and prevent conflicts, enable the Audit: Force audit policy
subcategory settings to override audit policy category settings option.

Follow the steps:

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target
domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
Administrative Tools (Windows 2012) > **Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `<forest_name>` → Domains → `<domain_name>` →
Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the
**Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 3 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to Policies > Windows Settings > Security Settings → Local Policies → Security
Options.

**Step 4 –** Locate the Audit: Force audit policy subcategory settings to override audit policy
category settings and make sure that policy setting is set to _"Enabled"_.

![manualconfig_ad_nla_audit_force_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_ad_nla_audit_force_winserver2016.webp)

**Step 5 –** Navigate to **Start → Run** and type _"cmd"_. Input the `gpupdate /force` command and
press **Enter**. The group policy will be updated.

## To configure advanced audit policies

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target
domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
Administrative Tools (Windows 2012) > **Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `<forest_name>`** > **Domains** >
**`<domain_name>`** > **Domain Controllers**. Right-click the effective domain controllers policy
(by default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up
menu.

**Step 3 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to Policies > Windows Settings > Security Settings > Advanced Audit Policy
Configuration > Audit Policies.

**Step 4 –** Configure the following audit policies.

| Policy Subnode     | Policy Name                                                                                                                                                               | Audit Events |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Account Management | - Audit Computer Account Management - Audit Distribution Group Management - Audit Security Group Management - Audit User Account Management                               | _"Success"_  |
| DS Access          | Audit Directory Service Access                                                                                                                                            | _"Success"_  |
| Logon/Logoff       | - Audit Logoff - Audit Logon These policies are only required to collect the information on the originating workstation, i.e., the computer from which a change was made. | _"Success"_  |

![manualconfig_ad_advpol_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_ad_advpol_winserver2016.webp)

**Step 5 –** Navigate to **Start > Run** and type _"cmd"_. Input the `gpupdate /force` command and
press **Enter**. The group policy will be updated.

---

id: configure-object-level-auditing
title: "Configure Object-Level Auditing"
pagination_label: "Configure Object-Level Auditing"
sidebar_label: "Configure Object-Level Auditing"
sidebar_position: 108
description: "Learn how to configure object-level auditing for Domain and Configuration partitions to collect user activity information."

---

# Configure Object-Level Auditing

Object-level auditing must be configured for the **Domain** partition if you want to collect
information on user activity in the domain. You must also enable object-level auditing for
**Configuration**.

Auditing of the Configuration partition is enabled.

Follow the steps to configure object-level auditing for the Domain partition.

**Step 1 –** Open the **Active Directory Users and Computers** console on any domain controller in
the target domain: navigate to **Start** > **Windows Administrative** Tools (Windows Server 2016 and
higher) or Administrative Tools (Windows 2012) > **Active Directory Users and Computers**.

**Step 2 –** In the **Active Directory Users and Computers** dialog, click **View** in the main menu
and ensure that the **Advanced Features** are enabled.

![manualconfig_aduc_advsecwinserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_aduc_advsecwinserver2016.webp)

**Step 3 –** Right-click the **`<domain_name>`** node and select **Properties.** Select the
**Security** tab and click **Advanced**. In the **Advanced Security Settings for `<domain_name>`**
dialog, select the **Auditing** tab.

![manualconfig_aduc_advauditing_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_aduc_advauditing_winserver2016.webp)

**Step 4 –** Do one of the following depending on the OS:

- On pre-Windows Server 2012 versions:

  1. Click **Add**. In the **Select user, Computer, Service account, or Group** dialog, type
     _"Everyone"_ in the **Enter the object name to select** field.
  2. In the **Audit Entry** dialog that opens, set the _"Successful"_ flag for all access entries
     except the following: _Full Control_, _List Contents_, _Read All Properties_ and _Read
     Permissions_.

     ![manualconfig_objectlevel_entry2008](/img/product_docs/1secure/configuration/ad/manualconfig_objectlevel_entry2008.webp)

  3. Make sure that the **Apply these auditing entries to objects and/or containers within this
     container only** checkbox is cleared. Also, make sure that the **Apply onto** parameter is
     set to _"This object and all descendant objects"_.
  4. Click **Ok**.

- On Windows Server 2012 and above

  1. Click **Add**. In the **Auditing Entry** dialog, click the **Select a principal** link.
  2. In the **Select user, Computer, Service account, or Group** dialog, type _"Everyone"_ in the
     **Enter the object name to select** field.
  3. Set **Type** to _"Success"_ and **Applies to** to _"This object and all descendant objects"_.
  4. Under **Permissions**, select all checkboxes except the following: _Full Control_, _List
     Contents_, _Read All Properties_ and _Read Permissions_.
  5. Scroll to the bottom of the list and make sure that the **Only apply these auditing settings
     to objects and/or containers within this container** checkbox is cleared.

     ![manualconfig_objectlevel_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_objectlevel_winserver2016.webp)

  6. Click **Ok**.

Follow the steps to enable object-level auditing for the Configuration partition.

To perform this procedure, you will need the
[ADSI Edit](<http://technet.microsoft.com/en-us/library/cc773354(v=ws.10).aspx>) utility. In Windows
Server 2008 and above, this component is installed together with the AD DS role, or it can be
downloaded and installed along with Remote Server Administration Tools. See the
[Install ADSI Edit](/docs/1secure/setup-and-configuration/active-directory/manual-configuration.md) topic for additional information on how to install the ADSI Edit
utility.

**Step 1 –** On any domain controller in the target domain, navigate to Start>Windows Administrative
Tools (Windows Server 2016 and higher) or Administrative Tools **(Windows 2012)** **> ADSI Edit**.

**Step 2 –** Right-click the **ADSI Edit** node and select **Connect To**. In the **Connection
Settings** dialog, enable **Select a well-known Naming Context** and select **Configuration** from
the drop-down list.

![manualconfig_adsi_connectionwinserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_adsi_connectionwinserver2016.webp)

**Step 3 –** Expand the **Configuration `<Your_Root_Domain_Name>`** node. Right-click the
**CN=Configuration, DC=`<name>`,DC=`<name>`…** node and select **Properties.**

**Step 4 –** In the **CN=Configuration, DC=`<name>`, DC=`<name>` Properties** dialog select the
**Security** tab and click **Advanced**. In the **Advanced Security Settings for Configuration**
dialog, open the **Auditing** tab.

**Step 5 –** Do one of the following depending on the OS:

- On pre-Windows Server 2012 versions:

  1. Click **Add**. In the **Select user, Computer, Service account, or Group** dialog, type
     _"Everyone"_ in the **Enter the object name to select** field.
  2. In the **Audit Entry** dialog that opens, set the _"Successful"_ flag for all access entries
     except the following: _Full Control_, _List Contents_, _Read All Properties_ and _Read
     Permissions_.

     ![manualconfig_objectlevel_entry2008](/img/product_docs/1secure/configuration/ad/manualconfig_objectlevel_entry2008.webp)

  3. Make sure that the **Apply these auditing entries to objects and/or containers within this
     container only** checkbox is cleared. Also, make sure that the **Apply onto** parameter is
     set to _"This object and all descendant objects"_.
  4. Click **Ok**.

- On Windows Server 2012 and above

  1. Click **Add**. In the **Auditing Entry** dialog, click the **Select a principal** link.
  2. In the **Select user, Computer, Service account, or Group** dialog, type _"Everyone"_ in the
     **Enter the object name to select** field.
  3. Set **Type** to _"Success"_ and **Applies to** to _"This object and all descendant objects"_.
  4. Under **Permissions**, select all checkboxes except the following: _Full Control_, _List
     Contents_, _Read All Properties_ and _Read Permissions_.
  5. Scroll to the bottom of the list and make sure that the **Only apply these auditing settings
     to objects and/or containers within this container** checkbox is cleared.

     ![manualconfig_objectlevel_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_objectlevel_winserver2016.webp)

  6. Click **Ok**.
