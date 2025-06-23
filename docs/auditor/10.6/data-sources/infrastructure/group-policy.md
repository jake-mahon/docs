# Group Policy

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
- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

  - Configure the domain for auditing. See the
    [Audit Configuration Assistant](/docs/auditor/10.6/tools/configuration-assistant.md)
    topic for information on configuring the domain.
  - On the Auditor console computer:

    - If you have enabled automatic log backup for the Security log of your domain controller,
      you can instruct Auditor to clear the old backups automatically. For that, use the
      **CleanAutoBackupLogs** registry key, as described in the
      [Active Directory Registry Key Configuration](/docs/auditor/10.6/data-sources/active-directory/configuration.md)
      topic.

      **_RECOMMENDED:_** Adjust retention period for the backup files accordingly (default is
      **50** hours). See the
      [Adjust Security Event Log Size and Retention](/docs/auditor/10.6/data-sources/active-directory/configuration.md)
      topic.

    - To provide for event data collection, the Secondary Logon service must be up and running .
      Open **Administrative Tools** > **Services**, right-click the **Secondary Logon** service
      and on the **General** tab make sure that Startup type for this service is other than
      _Disabled_.

# Permissions for Group Policy Auditing

Before you start creating a monitoring plan to audit the group policy in the domain, plan for the
account that will be used for data collection – it should meet the requirements listed below. Then
you will provide this account in the monitoring plan wizard (or in the monitored item settings).

Starting with version 9.96, you can use group Managed Service Accounts (gMSA) as data collecting
accounts.

See the
[Use Group Managed Service Account (gMSA)](/docs/auditor/10.6/administration/user-management/service-accounts.md)
topic and the following Microsoft article:
[Group Managed Service Accounts Overview](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview)
for additional information about gMSA.

## Account Requirements

**NOTE:** These group Managed Service Accounts should also meet the related requirements. See the
[Use Group Managed Service Account (gMSA)](/docs/auditor/10.6/administration/user-management/service-accounts.md)
topic and the following Microsoft article:
[Group Managed Service Accounts Overview](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview)
for additional information about gMSA.

The account used for data collection must meet the following requirements:

- Member of the local Administrators group on the target server.
- Member of the Domain Admins group on the target server.

  **NOTE:** This covers all the required permissions below and is a mandatory setting if you want
  to use network traffic compression for data collection.

  OR

- The combination of the following rights and permissions if you plan to disable network traffic
  compression for your monitoring plan or, for some reasons, do not want to add this account to the
  **Domain Admins** group:

  - **Manage auditing and security log** policy must be defined for this account.  
    See the
    [Permissions for Active Directory Auditing](/docs/auditor/10.6/data-sources/active-directory/permissions.md)
    topic for additional information.
  - If you plan to process Active Directory **Deleted Objects** container, **Read** permission on
    this container is required. See the
    [Permissions for Active Directory Auditing](/docs/auditor/10.6/data-sources/active-directory/permissions.md)
    topic for additional information.

## Additional Configuration for Domain Controller's Event Logs Auto-backup

The following is required if auto-backup is _enabled_ for the domain controller event logs:

- Permissions to access the _HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\EventLog\Security_
  registry key on the domain controllers in the target domain. See the
  [Assign Permission to Read the Registry Key](#assign-permission-to-read-the-registry-key) topic
  for additional information.
- Membership in one of the following groups: **Administrators**, **Print Operators**, **Server
  Operators**.
- Read/Write share permission and Full control security permission on the logs backup folder.

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
_Default Domain Controllers Policy_), and select Edit.

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

**Step 10 –** Close Group Policy Management console.

**Step 11 –** Navigate to Start > Run and type "_cmd_". Input the `gpupdate /force` command and
press Enter. The group policy will be updated.

**Step 12 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

**Step 13 –** Ensure that new GPO settings were applied to the domain controllers.

# Group Policy Registry Keys

Review the basic registry keys that you may need to configure for monitoring Group Policy with
Netwrix Auditor. Navigate to Start → Run and type _"regedit"_.

| Registry key (REG_DWORD type)                                                                                          | Description / Value                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\AD Change Reporter                                             |                                                                                                                                                                                                              |
| CleanAutoBackupLogs                                                                                                    | Defines the retention period for the security log backups: - 0—Backups are never deleted from Domain controllers - [X]— Backups are deleted after [X] hours                                                  |
| GPOBackup                                                                                                              | Defines whether to backup GPOs during data collection: - 0—No - 1—Yes                                                                                                                                        |
| GPOBackupDays                                                                                                          | Defines the backup frequency: - 0—Backup always - X—Once in X days GPOBackup must be set to _"1"_.                                                                                                           |
| IgnoreAuditCheckResultError                                                                                            | Defines whether audit check errors should be displayed in the Activity Summary footer: - 0—Display errors - 1—Do not display errors                                                                          |
| IgnoreRootDCErrors                                                                                                     | Defines whether to display audit check errors for the root domain (when data is collected from a child domain) in the Activity Summary footer: - 0—Display errors - 1—Do not display errors                  |
| ProcessBackupLogs                                                                                                      | Defines whether to process security log backups: - 0—No - 1—Yes Even if this key is set to _"0"_, the security log backups will not be deleted regardless of the value of the CleanAutoBackupLogs key.       |
| `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\AD Change Reporter\<monitoring plan name>`                    |                                                                                                                                                                                                              |
| CollectLogsMaxThreads                                                                                                  | Defines the number of Domain Controllers to simultaneously start log collection on.                                                                                                                          |
| `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\ AD Change Reporter\<monitoring plan name>\Database settings` |                                                                                                                                                                                                              |
| SessionImportDays                                                                                                      | Defines the frequency of a full snapshot upload: - X—Once in X days                                                                                                                                          |
| HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\Management Console\Database settings                           |                                                                                                                                                                                                              |
| overwrite_datasource                                                                                                   | Defines whether to overwrite the database connection settings (stored in the reports data source) if they differ from the SQL server settings specified when configuring the monitoring plan: - 0—No - 1—Yes |
| SqlOperationTimeout                                                                                                    | Defines the timeout for executing SQL queries such as data selection, insertion or deletion (in seconds).                                                                                                    |
| timeout                                                                                                                | Defines the Audit Database connection timeout (in seconds).                                                                                                                                                  |
