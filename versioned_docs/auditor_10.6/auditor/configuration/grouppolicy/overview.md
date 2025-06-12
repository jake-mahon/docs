# Group Policy

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and access auditing requires a certain configuration of native audit settings in the audited environment and on the Auditor console computer. Configuring your IT infrastructure may also include enabling certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

__CAUTION:__ Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See the [Antivirus Exclusions for Netwrix Auditor](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HirCAE.html) knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to automatically configure audit in the target environment, your current audit settings will be checked on each data collection and adjusted if necessary.
- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or configure them manually:

  - Configure the domain for auditing. See the [Audit Configuration Assistant](/versioned_docs/auditor_10.6/auditor/tools/auditconfigurationassistant.md) topic for information on configuring the domain.
  - On the Auditor console computer:

    - If you have enabled automatic log backup for the Security log of your domain controller, you can instruct Auditor to clear the old backups automatically. For that, use the __CleanAutoBackupLogs__ registry key, as described in the [Active Directory Registry Key Configuration](/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/registrykey.md) topic.

      ___RECOMMENDED:___ Adjust retention period for the backup files accordingly (default is __50__ hours). See the [Adjust Security Event Log Size and Retention](/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/securitylog.md#adjust-security-event-log-size-and-retention) topic.
    - To provide for event data collection, the Secondary Logon service must be up and running . Open __Administrative Tools__ > __Services__, right-click the __Secondary Logon__ service and on the __General__ tab make sure that Startup type for this service is other than _Disabled_.
