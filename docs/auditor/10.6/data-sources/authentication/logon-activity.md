# Configure Advanced Audit Policies

You can configure advanced audit policies instead of basic domain policies to collect Logon Activity
changes with more granularity.

Perform the following procedures:

- [Configuring security options](#configuring-security-options)
- [Configuring advanced audit policies](#configuring-advanced-audit-policies)

## Configuring security options

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

## Configuring advanced audit policies

1. Open the **Group Policy Management** console on any domain controller in the target domain:
   navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
   Administrative Tools (Windows 2012) **Group Policy Management.**
2. In the left pane, navigate to **Forest: `<forest_name>` > Domains > `<domain_name>`** **> Domain
   Controllers**. Right-click the effective domain controllers policy (by default, it is the
   **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.
3. In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left
   and navigate to Policies → Windows Settings → Security Settings → Advanced Audit Policy
   Configuration → Audit Policies .
4. Configure the following audit policies.

   | Policy Subnode                     | Policy Name                                                                                                      | Audit Events                |
   | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------- |
   | Account Logon                      | - Audit Kerberos Service Ticket Operations - Audit Kerberos Authentication Service - Audit Credential Validation | _"Success"_ and _"Failure"_ |
   | - Audit Other Account Logon Events | _"Success"_ and _"Failure"_                                                                                      |                             |
   | Logon/Logoff                       | - Audit Logoff - Audit Other Logon/Logoff Events                                                                 | _"Success"_                 |
   | - Audit Logon                      | _"Success"_ and _"Failure"_                                                                                      |                             |
   | System                             | - Audit Security State Change                                                                                    | _"Success"_                 |

   ![manualconfig_nla_advpol2016](/img/versioned_docs/auditor_10.6/auditor/configuration/logonactivity/manualconfig_nla_advpol2016.webp)

5. Run the following command to update group policy:

   `gpupdate /force`

# Configure Basic Domain Audit Policies

Basic local audit policies allow tracking changes to user accounts and groups and identifying
originating workstations. You can configure advanced audit policies for the same purpose too. See
the
[Configure Advanced Audit Policies](/docs/auditor/10.6/data-sources/authentication/logon-activity.md)
topic for additional information.

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

   | Policy                     | Audit Events                |
   | -------------------------- | --------------------------- |
   | Audit logon events         | _"Success"_ and _"Failure"_ |
   | Audit account logon events | _"Success"_ and _"Failure"_ |
   | Audit system events        | _"Success"_                 |

   ![manualconfig_nla_auditpolicies2016](/img/versioned_docs/auditor_10.6/auditor/configuration/logonactivity/manualconfig_nla_auditpolicies2016.webp)

5. Run the following command to update group policy:

   `gpupdate /force`

# Logon Activity

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HirCAE.html)
knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to
  automatically configure audit in the target environment, your current audit settings will be
  checked on each data collection and adjusted if necessary.

  - For both new and existing monitoring plans, you can click **Launch Audit Configuration
    Assistant** (in the wizard step or in the plan settings, respectively) to launch a special
    tool that can detect current infrastructure settings and adjust them as needed for monitoring.
    See the
    [Audit Configuration Assistant](/docs/auditor/10.6/tools/configuration-assistant.md)
    topic for additional information.

- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

  - The following policies must be set to _"Success"_ and _"Failure"_ for the effective domain
    controllers policy:

    - Audit Logon Events
    - Audit Account Logon Events

  - The Audit system events policy must be set to _"Success"_ for the effective domain controllers
    policy.
  - The Advanced audit policy settings can be configured instead of basic.
  - The Maximum Security event log size must be set to 4GB. The retention method of the Security
    event log must be set to _“Overwrite events as needed”_ or _"Archive the log when full"_.
  - The following Windows Firewall inbound rules must be enabled:

    - Remote Event Log Management (NP-In)
    - Remote Event Log Management (RPC)
    - Remote Event Log Management (RPC-EPMAP)

See the following topics for additional information:

- [Configure Basic Domain Audit Policies](/docs/auditor/10.6/data-sources/authentication/logon-activity.md)
- [Configure Advanced Audit Policies](/docs/auditor/10.6/data-sources/authentication/logon-activity.md)
- [Configure Security Event Log Size and Retention Settings](/docs/auditor/10.6/data-sources/authentication/logon-activity.md)
- [ Logon Activity Ports](/docs/auditor/10.6/reference/ports-and-protocols.md)

## Logon Activity Actions

Review a full list of actions captured when monitoring Logon Activity with Netwrix Auditor.

**NOTE:** Please consider the following:

- Logon activity by local accounts is not reported
- Logoff activity from workstations is not reported
- Logoff activity from Domain Controllers is reported

For the attributes marked with asterisk (\*) _what_ changed is not reported.

| Action            | Object Type                | Attributes                                                                                                                |
| ----------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Successful Logon  | Logon                      | —                                                                                                                         |
| Interactive Logon | A session was reconnected. |                                                                                                                           |
| Failed Logon      | Logon\*                    | Cause description. The number of matching events if the logon attempt failed several times during a short period of time. |
| Interactive Logon |                            |                                                                                                                           |
| Logoff            | Interactive Logon          | A session was disconnected. Session duration (if the corresponding logon was found).                                      |

# Permissions for Logon Activity Auditing

Before you start creating a monitoring plan to audit the logon activity in your domain, plan for the
domain account that will be used for data collection – it should meet the requirements listed below.
Then you will provide this account in the monitoring plan wizard.

Depending on the network traffic compression setting you need to use, one of the following is
required:

- If network traffic compression is enabled, then the account must belong to the Domain Admins
  group;
- If network traffic compression is disabled, then you can choose between account which belongs to
  the Domain Admins group or non-administrative account. See the
  [Configure Non-Administrative Account to Collect Logon Activity ](#configure-non-administrative-account-to-collect-logon-activity)topic
  for additional information.

**NOTE:** Data collecting account on the target server must be a member of the local Administrators
group.

Starting with version 9.96, you can use group Managed Service Accounts (gMSA) as data collecting
accounts.

## Configure Non-Administrative Account to Collect Logon Activity

This section contains instructions on how to configure an account to collect Logon Activity with
minimum rights assignment. The instructions below apply only if you are going create a monitoring
plan with disabled network traffic compression and do not want to adjust audit settings
automatically.

Before creating an account, grant the _Read_ permission on the SECURITY registry key
`(HKEY_LOCAL_MACHINE\SECURITY)` for an admin account under which you will make changes in Group
Policy.

Follow the steps to configure non-administrative account to collect logon activity:

**Step 1 –** Create a domain user with the following privileges:

- Back up files and directories. See the
   [Configure the Back up Files and Directories Policy](/docs/auditor/10.6/data-sources/file-servers/windows-file-servers.md)
  topic for additional information.
- Log on as a batch job. See the
  [Permissions for Active Directory Auditing](/docs/auditor/10.6/data-sources/active-directory/permissions.md)
  topic for additional information.
- Manage auditing and security log. See the
  [Configure the Manage Auditing and Security Log Policy](/docs/auditor/10.6/data-sources/active-directory/permissions.md#configure-the-manage-auditing-and-security-log-policy)
  topic for additional information.

**Step 2 –** Grant the _Read_ permission on the following registry keys to this user:

- HKEY_LOCAL_MACHINE\SECURITY\Policy\PolAdtEv
- HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg
- HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security

See the
[Assign Permission To Read the Registry Key](/docs/auditor/10.6/data-sources/infrastructure/windows-servers.md#assign-permission-to-read-the-registry-key)
topic for additional information on how to do it using Registry Editor.

# Configure Security Event Log Size and Retention Settings

Follow the steps to configure Security Event Log settings:

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target
domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
Administrative Tools (Windows 2012) **Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `<forest_name>` > Domains > `<domain_name>`**
**> Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the
**Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 3 –** Navigate to **Computer Configuration > Policies > Windows Settings > Security
Settings > Event Log** and double-click the **Maximum security log size** policy.

![manualconfig_grouppolicymaxsecuritysizewinserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_grouppolicymaxsecuritysizewinserver2016.webp)

**Step 4 –** In the Maximum security log size Properties dialog, select **Define this policy
setting** and set maximum security log size to **4194240** kilobytes (4GB).

**Step 5 –** Select the **Retention method for security log** policy. In the Retention method for
security log Properties dialog, check **Define this policy** and select **Overwrite events as
needed**.

**Step 6 –** Run the following command to update group policy: `gpupdate /force`

**NOTE:** After configuring security event settings via Group Policy, you may notice that the log
size on a specific computer is not set correctly. In this case, follow the resolution steps from the
Netwrix Knowledge base article to fix the issue:
[Security log settings do not apply via GPO](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u000000HDk6CAG.html).
