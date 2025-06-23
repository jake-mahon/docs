---
title: audit policies
sidebar_label: audit-policies
description: Auditor 10.7 documentation for audit policies with configuration details, usage instructions, and implementation guidance.
---

# Configure Advanced Audit Policies

You can configure advanced audit policies instead of basic domain policies to collect Active
Directory changes with more granularity. Either basic or advanced audit policies must be configured
to track changes to accounts and groups, and to identify workstations where changes were made.

Perform the following procedures:

- To configure security options
- To configure advanced audit policies

## To configure security options

Setting up both basic and advanced audit policies may lead to incorrect audit reporting. To force
basic audit policies to be ignored and prevent conflicts, enable the _Audit: Force audit policy
subcategory settings_ policy.

To do it, perform the following steps:

1. Open the **Group Policy Management** console on any domain controller in the target domain:
   navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
   Administrative Tools (Windows 2012) **Group Policy Management.**
2. In the left pane, navigate to **Forest: `<forest_name>` > Domains > `<domain_name>`** **> Domain
   Controllers**. Right-click the effective domain controllers policy (by default, it is the
   **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.
3. In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left
   and navigate to Policies → Windows Settings → Security Settings → Local Policies → Security
   Options.
4. Locate the Audit: Force audit policy subcategory settings to override audit policy category
   settings and make sure that policy setting is set to _"Enabled"_.

   ![manualconfig_ad_nla_audit_force_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_ad_nla_audit_force_winserver2016.webp)

5. Run the following command to update group policy:

   `gpupdate /force`

## To configure advanced audit policies

1. Open the **Group Policy Management** console on any domain controller in the target domain:
   navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
   Administrative Tools (Windows 2012) **Group Policy Management.**
2. In the left pane, navigate to **Forest: `<forest_name>` > Domains > `<domain_name>`** **> Domain
   Controllers**. Right-click the effective domain controllers policy (by default, it is the
   **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.
3. In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left
   and navigate to Policies → Windows Settings → Security Settings → Advanced Audit Policy
   Configuration → Audit Policies.
4. Configure the following audit policies.

   | Policy Subnode     | Policy Name                                                                                                                                                               | Audit Events |
   | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
   | Account Management | - Audit Computer Account Management - Audit Distribution Group Management - Audit Security Group Management - Audit User Account Management                               | _"Success"_  |
   | DS Access          | Audit Directory Service Access                                                                                                                                            | _"Success"_  |
   | Logon/Logoff       | - Audit Logoff - Audit Logon These policies are only required to collect the information on the originating workstation, i.e., the computer from which a change was made. | _"Success"_  |

   ![manualconfig_ad_advpol_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_ad_advpol_winserver2016.webp)

5. Run the following command to update group policy:

   `gpupdate /force`

# Configure Basic Domain Audit Policies

Basic audit policies allow tracking changes to user accounts and groups and identifying originating
workstations. You can configure advanced audit policies for the same purpose too. See the
[Configure Advanced Audit Policies](/docs/auditor/10.7/data-sources/active-directory/audit-policies.md)topic for additional information.

1. Open the **Group Policy Management** console on any domain controller in the target domain:
   navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
   Administrative Tools (Windows 2012) **Group Policy Management.**
2. In the left pane, navigate to **Forest: `<forest_name>` > Domains > `<domain_name>`** **> Domain
   Controllers**. Right-click the effective domain controllers policy (by default, it is the
   **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.
3. In the **Group Policy Management Editor** dialog, expand the **Computer Configuration** node on
   the left and navigate to **Policies → Windows Settings → Security Settings → Local Policies →
   Audit Policy.**
4. Configure the following audit policies.

   | Policy                             | Audit Events |
   | ---------------------------------- | ------------ |
   | **Audit account management**       | _"Success"_  |
   | **Audit directory service access** | _"Success"_  |
   | **Audit logon events**             | _"Success"_  |

   ![manualconfig_ad_localpolicy_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_ad_localpolicy_winserver2016.webp)

   The Audit logon events policy is only required to collect the information on the originating
   workstation, i.e., the computer from which a change was made. This functionality is optional and
   can be disabled.

5. Run the following command to update group policy:

   `gpupdate /force`

# Configure Object-Level Auditing

Object-level auditing must be configured for the **Domain** partition if you want to collect
information on user activity in the domain. If you also want to audit changes to AD configuration
and schema, you must enable object-level auditing for **Configuration** and **Schema** partitions.

Auditing of the Configuration partition is enabled by default. See the
[Active Directory](/docs/auditor/10.7/monitoring-plans/monitoring-scope.md) topic for detailed
instructions on how to enable monitoring of changes to the Schema partition in the target AD domain.

Perform the following procedures to configure object-level auditing for the Domain, Configuration
and Schema partitions:

- Configuring object-level auditing for the Domain partition
- Enabling object-level auditing for the Configuration and Schema partitions

## Configuring object-level auditing for the Domain partition

**Step 1 –** Open the **Active Directory Users and Computers** console on any domain controller in
the target domain: navigate to Start > Windows Administrative Tools → **Active Directory Users and
Computers**.

**Step 2 –** In the **Active Directory Users and Computers** dialog, click **View** in the main menu
and ensure that the **Advanced Features** are enabled.

![manualconfig_aduc_advsecwinserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_aduc_advsecwinserver2016.webp)

**Step 3 –** Right-click the **`<domain_name>`** node and select **Properties.** Select the
**Security** tab and click **Advanced**. In the **Advanced Security Settings for `<domain_name>`**
dialog, select the **Auditing** tab.

![manualconfig_aduc_advauditing_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_aduc_advauditing_winserver2016.webp)

**Step 4 –** Perform the following actions on the Windows Server 2012 and above:

1. Click **Add**. In the **Auditing Entry** dialog, click the **Select a principal** link.
2. In the **Select user, Computer, Service account, or Group** dialog, type _"Everyone"_ in the
   **Enter the object name to select** field.
3. Set **Type** to _"Success"_ and **Applies to** to _"This object and all descendant objects"_.
4. Under **Permissions**, select all checkboxes except the following: _Full Control_, _List
   Contents_, _Read All Properties_ and _Read Permissions_.
5. Scroll to the bottom of the list and make sure that the **Only apply these auditing settings to
   objects and/or containers within this container** checkbox is cleared.

   ![manualconfig_objectlevel_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_objectlevel_winserver2016.webp)

## Enabling object-level auditing for the Configuration and Schema partitions

To perform this procedure, you will need the
[ADSI Edit](<http://technet.microsoft.com/en-us/library/cc773354(v=ws.10).aspx>) utility. Follow the
steps to enable object-level auditing for the Configuration and Schema partitions.

**Step 1 –** On any domain controller in the target domain, navigate to Start > Windows
Administrative Tools **> ADSI Edit**.

**Step 2 –** Right-click the **ADSI Edit** node and select **Connect To**. In the **Connection
Settings** dialog, enable **Select a well-known Naming Context** and select **Configuration** from
the drop-down list.

![manualconfig_adsi_connectionwinserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_adsi_connectionwinserver2016.webp)

**Step 3 –** Expand the **Configuration `<Your_Root_Domain_Name>`** node. Right-click the
**CN=Configuration, DC=`<name>`,DC=`<name>`…** node and select **Properties.**

**Step 4 –** In the **CN=Configuration, DC=`<name>`, DC=`<name>` Properties** dialog select the
**Security** tab and click **Advanced**. In the **Advanced Security Settings for Configuration**
dialog, open the **Auditing** tab.

**Step 5 –** Perform the following actions on the Windows Server 2012 and above:

1. Click **Add**. In the **Auditing Entry** dialog, click the **Select a principal** link.
2. In the **Select user, Computer, Service account, or Group** dialog, type _"Everyone"_ in the
   **Enter the object name to select** field.
3. Set **Type** to _"Success"_ and **Applies to** to _"This object and all descendant objects"_.
4. Under **Permissions**, select all checkboxes except the following: _Full Control_, _List
   Contents_, _Read All Properties_ and _Read Permissions_.
5. Scroll to the bottom of the list and make sure that the **Only apply these auditing settings to
   objects and/or containers within this container** checkbox is cleared.

   ![manualconfig_objectlevel_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_objectlevel_winserver2016.webp)

Repeat these steps for the Schema container if necessary.

# Adjust Security Event Log Size and Retention

Defining the Security event log size is essential for change auditing. If the log size is
insufficient, overwrites may occur before data is written to the Long-Term Archive and the Audit
Database, and some audit data may be lost.

To prevent overwrites, you can increase the maximum size of the Security event log and set retention
method for this log to “_Overwrite events as needed_”.

To adjust your Security event log size and retention method, follow the procedure described below.

To read about event log settings recommended by Microsoft, refer to the following article:
[Event Log](https://support.microsoft.com/en-us/help/957662/recommended-settings-for-event-log-sizes-in-windows).

To increase the maximum size of the Security event log and set its retention method

1. Open the **Group Policy Management** console on any domain controller in the target domain:
   navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
   Administrative Tools (Windows 2012) **Group Policy Management.**
2. In the left pane, navigate to **Forest: `<forest_name>` > Domains > `<domain_name>`** **> Domain
   Controllers**. Right-click the effective domain controllers policy (by default, it is the
   **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.
3. Navigate to **Computer Configuration > Policies > Windows Settings > Security Settings > Event
   Log** and double-click the **Maximum security log size** policy.

   ![manualconfig_grouppolicymaxsecuritysizewinserver2016](/img/product_docs/1secure/configuration/logonactivity/manualconfig_grouppolicymaxsecuritysizewinserver2016.webp)

4. In the Maximum security log size Properties dialog, select **Define this policy setting** and set
   maximum security log size to **4194240** kilobytes (4GB).
5. Select the **Retention method for security log** policy. In the Retention method for security log
   Properties dialog, check **Define this policy** and select **Overwrite events as needed**.
6. Run the following command to update group policy:

   `gpupdate /force`

If "Overwrite" option is not enough to meet your data retention requirements, you can use
_auto-archiving_ option for Security event log to preserve historical event data in the archive
files. With that option enabled, you may want to adjust the retention settings for log archives
(backups). Related procedures are described in the
[Auto-archiving Windows Security log](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u000000Pcx6CAC.html)
Netwrix Knowledge Base article.
