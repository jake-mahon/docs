# Configure Juniper Devices

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and access auditing requires a certain configuration of native audit settings in the audited environment and on the Auditor console computer. Configuring your IT infrastructure may also include enabling certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

__CAUTION:__ Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See the [Antivirus Exclusions for Netwrix Auditor](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HirCAE.html) knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to automatically configure audit in the target environment, your current audit settings will be checked on each data collection and adjusted if necessary.
- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or configure them manually:

  - The target Juniper device must be configured via JunOS Command Line Interface (CLI) as described below.

To configure you Juniper devices, do the following:

1. Launch the JunOS Command Line Interface (CLI).
2. Execute the following commands:

   # configure

   # set system syslog host <host address> any info

   where ```<host address>``` is the IP address of the computer where Netwrix Auditor Server is installed.

   # set system syslog host <host address> port <port name>

   where

   ```<host address>``` is the IP address of the computer where Netwrix Auditor Server is installed

   AND

   ```<port number>``` is the name of the UDP port used to listen to network devices (514 port used by default). [Network Devices](/docs/auditor/auditor/admin/monitoringplans/networkdevices.md)

   # set system syslog time-format <current year>

   # commit

## Juniper Devices

Review a full list of object types Netwrix Auditor can collect on Juniper network devices.

| Object type | Actions | Event ID |
| --- | --- | --- |
| Logon | - Successful logon | - ```LOGIN_INFORMATION``` - ```Accepted keyboard-interactive/pam``` - ```WEB_AUTH_SUCCESS``` - ```JADE_AUTH_SUCCESS``` |
| - Failed logon | - ```LOGIN_FAILED``` - ```SSHD_LOGIN_FAILED```  ```LIBJNX_LOGIN_ACCOUNT_LOCKED``` - ```WEB_AUTH_FAIL```  ```JADE_AUTH_FAILURE``` |  |
| Authentication | - Successful Logon | - FWAUTH\_HTTP\_USER\_AUTH\_ACCEPTED - ```FWAUTH_WEBAUTH_SUCCESS``` - FWAUTH\_FTP\_USER\_AUTH\_ACCEPTED - FWAUTH\_TELNET\_USER\_AUTH\_ACCEPTED - DYNAMIC\_VPN\_AUTH\_OK |
| - Failed logon | - FWAUTH\_HTTP\_USER\_AUTH\_FAIL - FWAUTH\_WEBAUTH\_FAIL  - FWAUTH\_FTP\_USER\_AUTH\_FAIL  - FWAUTH\_TELNET\_USER\_AUTH\_FAIL - DYNAMIC\_VPN\_AUTH\_FAIL |  |
| Configuration | - Modified / Modify (Failed attempt) | - ```UI_FACTORY_OPERATION``` - UI\_INITIALSETUP\_OPERATION - UI\_RESCUE\_OPERATION - UI\_LOAD\_EVENT - UI\_CFG\_AUDIT\_OTHER - UI\_CFG\_AUDIT\_SET: - UI\_CFG\_AUDIT\_NEW - UI\_CFG\_AUDIT\_SET\_SECRET - UI\_COMMIT: - UI\_COMMIT\_PROGRESS - UI\_COMMIT\_COMPLETED - UI\_COMMIT\_AT\_COMPLETED - UI\_COMMIT\_NOT\_CONFIRMED - UI\_COMMIT\_CONFIRMED\_REMINDER - UI\_COMMIT\_AT\_ABORT - UI\_COMMIT\_AT\_FAILED - UI\_COMMIT\_COMPRESS\_FAILED - UI\_COMMIT\_ROLLBACK\_FAILED |
| Rule | - Activated | - RT\_SCREEN\_ICMP - RT\_SCREEN\_IP - RT\_SCREEN\_TCP - RT\_SCREEN\_TCP\_DST\_IP - RT\_SCREEN\_TCP\_SRC\_IP - RT\_SCREEN\_UDP  - AV\_VIRUS\_DETECTED\_MT - ANTISPAM\_SPAM\_DETECTED\_MT - IDP\_APPDDOS\_APP\_ATTACK\_EVENT - IDP\_APPDDOS\_APP\_STATE\_EVENT - IDP\_ATTACK\_LOG\_EVENT |
