---
title: configuration
sidebar_label: configuration
description: Auditor 10.6 documentation for configuration with configuration details, usage instructions, and implementation guidance.
---

# Additional Configuration to Review Changes Made via Exchange Server

If you have an on-premises Exchange server in your Active Directory domain, consider that some
changes can be made through this Exchange server. To be able to audit and report who made those
changes, make sure that the account used for data collection meets one of the following
requirements:

- Membership in the Organization Management or Records Management group

OR

- The Audit Logs management role (see the
  [Assign Management Roles](/docs/auditor/10.6/data-sources/infrastructure/exchange-server.md#assign-management-roles)
  topic for additional information)

You will also need to configure Exchange Administrator Audit Logging (AAL) settings. See the
[Exchange Administrator Audit Logging Settings](/docs/auditor/10.6/data-sources/infrastructure/exchange-server.md)
topic for additional information.

## Additional Configuration for Domain Controller's Event Logs Auto-backup

The following is required if auto-backup is _enabled_ for the domain controller event logs:

- Permissions to access the _HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\EventLog\Security_
  registry key on the domain controllers in the target domain. See the
  [Assign Permission to Read the Registry Key](#assign-permission-to-read-the-registry-key) topic
  for additional information.
- Membership in one of the following groups: Administrators, Print Operators, or Server Operators
- Read/Write share permission and Full control security permission on the logs backup folder.

## Considerations for gMSA Account

If you are using gMSA for data collection, consider that AAL event data collection from your
on-premise Exchange server will not be possible.

Thus, changes made to your Active Directory domain via that Exchange server will be reported with
`domain\Exchange_server_name$` instead of the initiator (user) name in the "_Who_" field of reports,
search results and activity summaries.

## Configure Manage Auditing and Security Log Policy

Perform this procedure only if the account selected for data collection is not a member of the
Domain Admins group. Follow the steps:

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target
domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
Administrative Tools (Windows 2012) **Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `<forest_name>` > Domains > `<domain_name>`**
**> Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the
**Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 3 –** In the Group Policy Management Editor dialog, expand the **Computer Configuration**
node on the left and navigate to **Policies > Windows Settings > Security Settings > Local
Policies.**

**Step 4 –** On the right, double-click the **User Rights Assignment** policy.

**Step 5 –** Locate the **Manage auditing and security log** policy and double-click it.

**Step 6 –** In the Manage auditing and security log Properties**anage auditing and security log
Properties** dialog, click **Add User or Group**, specify the user that you want to define this
policy for.

**Step 7 –** Run the following command to update group policy: `gpupdate /force`

**Step 8 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

**Step 9 –** Ensure that new GPO settings applied on any audited domain controller.

## Grant Permissions for Deleted Objects Container

Perform this procedure only if the account selected for data collection is not a member of the
Domain Admins group. Follow the steps:

**Step 1 –** Log on to any domain controller in the target domain with a user account that is a
member of the **Domain Admins** group.

**Step 2 –** Navigate to **Start > Run** and type **cmd**.

**Step 3 –** Input the following command: ``dsacls `<deleted_object_dn>` /takeownership``

where `deleted_object_dn` is the distinguished name of the deleted directory object.

For example: `dsacls "CN=Deleted Objects,DC=Corp,DC=local" /takeownership`

**Step 4 –** To grant permission to view objects in the Deleted Objects container to a user or a
group, type the following command:

``dsacls `<deleted_object_dn>` /G `<user_or_group>`:`<Permissions>` ``

where `deleted_object_dn` is the distinguished name of the deleted directory object
and` user_or_group` is the user or group for whom the permission applies, and `Permissions` is the
permission to grant.

For example, `dsacls "CN=Deleted Objects,DC=Corp,DC=local" /G Corp\jsmith:LCRP`

In this example, the user CORP\jsmith has been granted **List Contents** and **Read Property**
permissions for the **Deleted Objects** container in the **corp.local** domain. These permissions
let this user view the contents of the **Deleted Objects** container, but do not let this user make
any changes to objects in this container. These permissions are equivalent to the default
permissions that are granted to the **Domain Admins** group.

## Define Log On As a Batch Job Policy

On monitoring plan creation, the Log on as a batch job policy is automatically defined for the Data
Processing Account as a local security policy. However, if you have the "Deny a log on as a batch
job" policy defined locally or on the domain level, the local "Log on as a batch job" policy will be
reset. In this case, redefine the "Deny log on as a batch job" policy through the "Local Security
Policy" console on your computer or on the domain level through the Group Policy Management console.

You can configure this policy via the Local Security Policy snap-in or using the Group Policy
Management console.

### Configure the Log On As a Batch Job policy via Local Security Policy Snap-in

Follow the steps to configure the Log On As a Batch Job policy via Local Security Policy snap-in.

**Step 1 –** On any domain controller in the target domain, open the Local Security Policy snap-in:
navigate to Start > Windows Administrative Tools and select Local Security Policy.

**Step 2 –** In the Local Security Policy snap-in, navigate to **Security Settings** > **Local
Policies > User Rights Assignment** and locate the **Log on as a batch job** policy.

![manualconfig_ws_logonasbatch](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_ws_logonasbatch.webp)

**Step 3 –** Double-click the **Log on as a batch job** policy, and click **Add User or Group**.
Specify the account that you want to define this policy for.

### Configure the Log On As a Batch Job Policy Using the Group Policy Management Console

Perform this procedure only if the account selected for data collection is not a member of the
Domain Admins group. Follow the steps:

**Step 1 –** Open the Group Policy Management console on any domain controller in the target domain:
navigate to Start > Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools
(Windows 2012 R2 and below) > Group Policy Management.

**Step 2 –** In the left pane, navigate to Forest: `<forest name>` > Domains > `<domain name>` >
Domain Controllers. Right-click the effective domain controllers policy (by default, it is the
_Default Domain Controllers Policy_), and select Edit.

**Step 3 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to Policies > Windows Settings > Security Settings > Local Policies.

**Step 4 –** On the right, double-click the User Rights Assignment policy.

**Step 5 –** Locate the Log on as a batch job policy and double-click it.

**Step 6 –** In the Log on as a batch job Properties dialog, click Add User or Group and specify the
user that you want to define this policy for.

**Step 7 –** Navigate to Start > Run and type cmd. Input the `gpupdate /force` command and press
Enter. The group policy will be updated.

**Step 8 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

**Step 9 –** Ensure that new GPO settings applied on any audited domain controller.

## Assign Permission to Read the Registry Key

This permission is required only if the account selected for data collection is not a member of the
Domain Admins group.

This permission should be assigned on each domain controller in the audited domain, so if your
domain contains multiple domain controllers, it is recommended to assign permissions through Group
Policy, or automatically using
[Audit Configuration Assistant](/docs/auditor/10.6/tools/configuration-assistant.md).

To assign permissions manually, use the Registry Editor snap-in or the Group Policy Management
console.

Assign Permission Via the Registry Editor Snap-in

Follow the steps to assign permission via the Registry Editor snap-in:

**Step 1 –** On your target server, open Registry Editor: navigate to **Start > Run** and type
_"regedit"_.

**Step 2 –** In the left pane, navigate to _HKEY_LOCAL_MACHINE\SYSTEM\CurrentControl
Set\Services\EventLog\Security_.

**Step 3 –** Right-click the **Security** node and select **Permissions** from the pop-up menu.

**Step 4 –** Click **Add** and enter the name of the user that you want to grant permissions to.

**Step 5 –** Check **Allow** next to the **Read** permission.

**Step 6 –** For auditing Logon Activity, you also need to assign the Read permission to the
_HKEY_LOCAL_MACHINE\SECURITY\Policy\PolAdtEv_ registry key.

To assign permission using the Group Policy Management console

Assign Permission Using the Group Policy Management Console

Follow the steps to assign permission using the Group Policy Management console:

**Step 1 –** Open the Group Policy Management console on any domain controller in the target domain:
navigate to Start > Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools
(Windows 2012 R2 and below) > Group Policy Management.

**Step 2 –** In the left pane, navigate to Forest: `<forest name>` > Domains > `<domain name>` >
Domain Controllers. Right-click the effective domain controllers policy (by default, it is the
_Default Domain Controllers Policy_), and select Edit .

**Step 3 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to Policies > Windows Settings > Security Settings > Registry.

**Step 4 –** Right-click in the pane and select Add Key.

**Step 5 –** Navigate to `HKEY_LOCAL_MACHINE\SECURITY\Policy\PolAdtEv` and click OK.

**Step 6 –** Click Add and enter the name of the user that you want to grant permissions to and
press Enter.

**Step 7 –** Check Allow next to the _"Read"_ permission and click OK

**Step 8 –** In the pop-up window, select Propagate inheritable permissions to all subkeys and click
OK.

**Step 9 –** Repeat the steps 4-8 for keys below:

- `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg`;
- `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security`.

**Step 10 –** Close the Group Policy Management console.

**Step 11 –** Navigate to Start > Run and type **cmd**. Input the `gpupdate /force` command and
press Enter. The group policy will be updated.

**Step 12 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

**Step 13 –** Ensure that new GPO settings were applied to the domain controllers.

# Configure Advanced Audit Policies

You can configure advanced audit policies instead of basic domain policies to collect Active
Directory changes with more granularity. Either basic or advanced audit policies must be configured
to track changes to accounts and groups, and to identify workstations where changes were made.

Perform the following procedures:

- [To configure security options](#to-configure-security-options)
- [To configure advanced audit policies](#to-configure-advanced-audit-policies)

## To configure security options

Using both basic and advanced audit policies settings may lead to incorrect audit reporting. To
force basic audit policies to be ignored and prevent conflicts, enable the Audit: Force audit policy
subcategory settings to override audit policy category settings option.

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

   ![manualconfig_ad_nla_audit_force_winserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_ad_nla_audit_force_winserver2016.webp)

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

   ![manualconfig_ad_advpol_winserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_ad_advpol_winserver2016.webp)

5. Run the following command to update group policy:

   `gpupdate /force`

# Active Directory: Automatic Configuration

This is a recommended method of applying Active Directory audit settings required by Auditor to
monitor your AD domain. With this approach, the program will check your current audit settings at
each data collection session and adjust them if necessary.

To adjust audit settings automatically, do any of the following:

- When creating a new monitoring plan, at the first step of the wizard select the **Adjust audit
  settings automatically** option. See the
  [Create a New Monitoring Plan](/docs/auditor/10.6/monitoring-plans/creating-plans.md)
  topic for additional information.

![mp_wizard_step1_ad](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/mp_wizard_step1_ad.webp)

- For the existing monitoring plan, modify data collection settings for Active Directory data
  source, selecting **Adjust audit settings automatically** option.  
  See the Manage Data Sources and
  [Active Directory](/docs/auditor/10.6/monitoring-plans/data-sources-config.md)
  topics for additional information.
- For both new and existing monitoring plans, you can click **Launch Audit Configuration Assistant**
  (in the wizard step or in the plan settings, respectively) to launch a special tool that can
  detect current infrastructure settings and adjust them as needed for monitoring. See the
  [Audit Configuration Assistant](/docs/auditor/10.6/tools/configuration-assistant.md)
  topic for additional information.

If any conflicts are detected with your current audit settings, automatic audit configuration will
not be performed. For a full list of audit settings required for Netwrix Auditor to collect
comprehensive audit data and instructions on how to configure them, refer to the
[Active Directory](/docs/auditor/10.6/data-sources/active-directory/index.md)
topic.

See also:

- [Active Directory](/docs/auditor/10.6/data-sources/active-directory/index.md)
- [Audit Configuration Assistant](/docs/auditor/10.6/tools/configuration-assistant.md)
- [Active Directory: Manual Configuration](/docs/auditor/10.6/data-sources/active-directory/configuration.md)

# Configure Basic Domain Audit Policies

Basic audit policies allow tracking changes to user accounts and groups and identifying originating
workstations. You can configure advanced audit policies for the same purpose too. See the
[Configure Advanced Audit Policies](/docs/auditor/10.6/data-sources/active-directory/configuration.md)topic
for additional information.

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

   ![manualconfig_ad_localpolicy_winserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_ad_localpolicy_winserver2016.webp)

   The Audit logon events policy is only required to collect the information on the originating
   workstation, i.e., the computer from which a change was made. This functionality is optional and
   can be disabled.

5. Run the following command to update group policy:

   `gpupdate /force`

# Active Directory: Manual Configuration

To configure your domain for monitoring manually, you will need:

- Group Policy Management Console — Required if you plan to perform configuration steps from a
  domain controller

  -OR-

- ADSI Edit — Required if you plan to perform configuration steps from a server other than domain
  controller

**NOTE:** If these tools are not installed, refer to the following Microsoft articles:

- [Group Policy Management Console](<https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/dn265969(v=ws.11)>)
- [ADSI Edit](<https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc773354(v=ws.10)?redirectedfrom=MSDN>)

Follow the steps to configure your domain for monitoring.

**Step 1 –** Configure effective domain controllers policy (by default, Default Domain Controllers
Policy). See the
[Configure Basic Domain Audit Policies](/docs/auditor/10.6/data-sources/active-directory/configuration.md)
or
[Configure Advanced Audit Policies](/docs/auditor/10.6/data-sources/active-directory/configuration.md)
topics for additional information.

**Step 2 –** Configure object-level auditing. See the
[Configure Object-Level Auditing](/docs/auditor/10.6/data-sources/active-directory/configuration.md)
topic for additional information.

**Step 3 –** Adjust the security event log size and retention settings. See the
[Adjust Security Event Log Size and Retention](/docs/auditor/10.6/data-sources/active-directory/configuration.md)topic
for additional information.

**Step 4 –** If you have an on-premises Exchange server in your Active Directory domain, consider
that some changes to AD can be made via that Exchange server. To be able to audit and report who
made those changes, perform configuration steps as described in the
[Exchange Administrator Audit Logging Settings](/docs/auditor/10.6/data-sources/infrastructure/exchange-server.md)
topic.

Optionally, you can adjust the Active Directory Tombstone Lifetime. See the
[Adjust Active Directory Tombstone Lifetime (optional)](/docs/auditor/10.6/data-sources/active-directory/configuration.md)
topic for additional information.

Also, remember to perform the following steps for AD auditing:

**Step 1 –** Configure Data Collecting Account, as described in the
[Additional Configuration to Review Changes Made via Exchange Server](/docs/auditor/10.6/data-sources/active-directory/configuration.md)
topic.

**Step 2 –** Configure required protocols and ports, as described in the
[Active Directory Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)
topic.

**Step 3 –** Enable Secondary Logon Service on the computer where Netwrix Auditor Server resides.

## Enable Secondary Logon Service

Follow the steps to Enable Secondary Logon Service.

**Step 1 –** On the computer where Auditor Server resides, navigate to Start > Windows
Administrative Tools > **Services**.

**Step 2 –** In the **Services** dialog, locate the **Secondary Logon** service.

**Step 3 –** Right-click the service and on the **General** tab make sure that **Startup type** for
this service is other than _Disabled_. The startup type can be either _Automatic_ or _Manual_.

# Configure Object-Level Auditing

Object-level auditing must be configured for the **Domain** partition if you want to collect
information on user activity in the domain. If you also want to audit changes to AD configuration
and schema, you must enable object-level auditing for **Configuration** and **Schema** partitions.

Auditing of the Configuration partition is enabled by default. See the
[Active Directory](/docs/auditor/10.6/monitoring-plans/data-sources-config.md)
topic for detailed instructions on how to enable monitoring of changes to the Schema partition in
the target AD domain.

Perform the following procedures to configure object-level auditing for the Domain, Configuration
and Schema partitions:

- [Configuring object-level auditing for the Domain partition](#configuring-object-level-auditing-for-the-domain-partition)
- [Enabling object-level auditing for the Configuration and Schema partitions](#enabling-object-level-auditing-for-the-configuration-and-schema-partitions)

## Configuring object-level auditing for the Domain partition

1. Open the **Active Directory Users and Computers** console on any domain controller in the target
   domain: navigate to Start > Windows Administrative Tools → **Active Directory Users and
   Computers**.
2. In the **Active Directory Users and Computers** dialog, click **View** in the main menu and
   ensure that the **Advanced Features** are enabled.

   ![manualconfig_aduc_advsecwinserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_aduc_advsecwinserver2016.webp)

3. Right-click the **`<domain_name>`** node and select **Properties.** Select the **Security** tab
   and click **Advanced**. In the **Advanced Security Settings for `<domain_name>`** dialog, select
   the **Auditing** tab.

   ![manualconfig_aduc_advauditing_winserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_aduc_advauditing_winserver2016.webp)

4. Do one of the following depending on the OS:

   - On pre-Windows Server 2012 versions:

     1. Click **Add**. In the **Select user, Computer, Service account, or Group** dialog, type
        _"Everyone"_ in the **Enter the object name to select** field.
     2. In the **Audit Entry** dialog that opens, set the _"Successful"_ flag for all access
        entries except the following: _Full Control_, _List Contents_, _Read All Properties_ and
        _Read Permissions_.

        ![manualconfig_objectlevel_entry2008](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_objectlevel_entry2008.webp)

     3. Make sure that the **Apply these auditing entries to objects and/or containers within
        this container only** checkbox is cleared. Also, make sure that the **Apply onto**
        parameter is set to _"This object and all descendant objects"_.

   - On Windows Server 2012 and above

     1. Click **Add**. In the **Auditing Entry** dialog, click the **Select a principal** link.
     2. In the **Select user, Computer, Service account, or Group** dialog, type _"Everyone"_ in
        the **Enter the object name to select** field.
     3. Set **Type** to _"Success"_ and **Applies to** to _"This object and all descendant
        objects"_.
     4. Under **Permissions**, select all checkboxes except the following: _Full Control_, _List
        Contents_, _Read All Properties_ and _Read Permissions_.
     5. Scroll to the bottom of the list and make sure that the **Only apply these auditing
        settings to objects and/or containers within this container** checkbox is cleared.

        ![manualconfig_objectlevel_winserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_objectlevel_winserver2016.webp)

## Enabling object-level auditing for the Configuration and Schema partitions

To perform this procedure, you will need the
[ADSI Edit](<http://technet.microsoft.com/en-us/library/cc773354(v=ws.10).aspx>) utility. In Windows
Server 2008 and above, this component is installed together with the AD DS role, or it can be
downloaded and installed along with Remote Server Administration Tools. See the topic for additional
information on how to install the ADSI Edit utility.

1. On any domain controller in the target domain, navigate to Start > Windows Administrative Tools
   **→ ADSI Edit**.
2. Right-click the **ADSI Edit** node and select **Connect To**. In the **Connection Settings**
   dialog, enable **Select a well-known Naming Context** and select **Configuration** from the
   drop-down list.

   ![manualconfig_adsi_connectionwinserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_adsi_connectionwinserver2016.webp)

3. Expand the **Configuration `<Your_Root_Domain_Name>`** node. Right-click the **CN=Configuration,
   DC=`<name>`,DC=`<name>`…** node and select **Properties.**
4. In the **CN=Configuration, DC=`<name>`, DC=`<name>` Properties** dialog select the **Security**
   tab and click **Advanced**. In the **Advanced Security Settings for Configuration** dialog, open
   the **Auditing** tab.
5. Do one of the following depending on the OS:

   - On pre-Windows Server 2012 versions:

     1. Click **Add**. In the **Select user, Computer, Service account, or Group** dialog, type
        _"Everyone"_ in the **Enter the object name to select** field.
     2. In the **Audit Entry** dialog that opens, set the _"Successful"_ flag for all access
        entries except the following: _Full Control_, _List Contents_, _Read All Properties_ and
        _Read Permissions_.

        ![manualconfig_objectlevel_entry2008](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_objectlevel_entry2008.webp)

     3. Make sure that the **Apply these auditing entries to objects and/or containers within
        this container only** checkbox is cleared. Also, make sure that the **Apply onto**
        parameter is set to _"This object and all descendant objects"_.

   - On Windows Server 2012 and above

     1. Click **Add**. In the **Auditing Entry** dialog, click the **Select a principal** link.
     2. In the **Select user, Computer, Service account, or Group** dialog, type _"Everyone"_ in
        the **Enter the object name to select** field.
     3. Set **Type** to _"Success"_ and **Applies to** to _"This object and all descendant
        objects"_.
     4. Under **Permissions**, select all checkboxes except the following: _Full Control_, _List
        Contents_, _Read All Properties_ and _Read Permissions_.
     5. Scroll to the bottom of the list and make sure that the **Only apply these auditing
        settings to objects and/or containers within this container** checkbox is cleared.

        ![manualconfig_objectlevel_winserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_objectlevel_winserver2016.webp)

6. Repeat these steps for the Schema container if necessary.

# Active Directory Registry Key Configuration

Review the basic registry keys that you may need to configure for monitoring Active Directory with
Netwrix Auditor. On the computer whereNetwrix Auditor Server is installed, navigate to **Start** >
**Run** and type **regedit**.

| Registry key (REG_DWORD type)                                                                       | Description / Value                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\AD Change Reporter                          |                                                                                                                                                                                                                                                   |
| CleanAutoBackupLogs                                                                                 | Defines the retention period for the security log backups: - 0—Backups are never deleted from Domain controllers - [X]— Backups are deleted after [X] hours                                                                                       |
| IgnoreAuditCheckResultError                                                                         | Defines whether audit check errors should be displayed in the Activity Summary footer: - 0—Display errors - 1—Do not display errors                                                                                                               |
| IgnoreRootDCErrors                                                                                  | Defines whether to display audit check errors for the root domain (when data is collected from a child domain) in the Activity Summary footer: - 0—Display errors - 1—Do not display errors                                                       |
| MonitorModifiedAndRevertedBack                                                                      | Defines whether the Activity Summary must display the attributes whose values were modified and then restored between data collections: - 0—These attributes are not displayed - 1—These attributes are displayed as "modified and reverted back" |
| ProcessBackupLogs                                                                                   | Defines whether to process security log backups: - 0—No - 1—Yes Even if this key is set to _"0"_, the security log backups will not be deleted regardless of the value of the CleanAutoBackupLogs key.                                            |
| `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\AD Change Reporter\<monitoring plan name>` |                                                                                                                                                                                                                                                   |
| CollectLogsMaxThreads                                                                               | Defines the number of Domain Controllers to simultaneously start log collection on.                                                                                                                                                               |
| HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\Management Console\Database settings        |                                                                                                                                                                                                                                                   |
| SqlOperationTimeout                                                                                 | Defines the timeout for executing SQL queries such as data selection, insertion or deletion (in seconds).                                                                                                                                         |
| timeout                                                                                             | Defines the Audit Database connection timeout (in seconds).                                                                                                                                                                                       |

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

   ![manualconfig_grouppolicymaxsecuritysizewinserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_grouppolicymaxsecuritysizewinserver2016.webp)

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

# Adjust Active Directory Tombstone Lifetime (optional)

You can restore deleted Active Directory objects and their attributes using the Netwrix Auditor
Object Restore for Active Directory tool shipped with Netwrix Auditor. The tool finds the
information on deleted objects in the product snapshots (this data is stored in the Long-Term
Archive, a local file-based storage of audit data) and AD tombstones.

To be able to restore deleted Active Directory objects longer, increase the **Active Directory
tombstone lifetime** property (set by default to 180 days). Netwrix recommends setting it to 2 years
(**730 days**). You can specify any number of days, but a selected value should not exceed the
Long-Term Archive retention period.

Take into consideration that increasing tombstone lifetime may affect Active Directory performance
and operability.

To change the tombstone lifetime attribute

To perform this procedure, you will need the
[ADSI Edit](<http://technet.microsoft.com/en-us/library/cc773354(v=ws.10).aspx>) utility. In Windows
Server 2008 and above, this component is installed together with the AD DS role, or it can be
downloaded and installed along with Remote Server Administration Tools. See the topic for additional
information on how to install the ADSI Edit utility.

1. On any domain controller in the target domain, navigate to Start > Windows Administrative Tools >
   **ADSI Edit**.
2. Right-click the **ADSI Edit** node and select **Connect To**. In the **Connection Settings**
   dialog, enable **Select a well-known Naming Context** and select **Configuration** from the
   drop-down list.

   ![manualconfig_adsi_connectionwinserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_adsi_connectionwinserver2016.webp)

3. Navigate to **Configuration `<Your_Root_Domain_Name>` >
   CN=Configuration,DC=`<name>`,DC=`<name>` > CN=Services > CN=Windows NT > CN=Directory Service**.
   Right-click it and select **Properties** from the pop-up menu.
4. In the **CN=Directory Service Properties** dialog, locate the **tombstoneLifetime** attribute in
   the **Attribute Editor** tab.

   ![manualconfig_adsi_tombstone_winserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_adsi_tombstone_winserver2016.webp)

5. Click **Edit**. Set the value to _"730"_ (which equals 2 years).
