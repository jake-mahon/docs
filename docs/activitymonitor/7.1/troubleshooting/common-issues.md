# Antivirus Exclusions

Windows activity monitoring and performance of the Activity Agent may be negatively affected by
antivirus protections. Add the following components to antivirus exclusions in order to avoid
potential performance degradation.

## Directories

The following directories can be added to antivirus exclusions:

- `<INSTALL_DIR>` — Agent installation directory. Default path is
  `%ProgramFiles%\Netwrix\Activity Monitor\Agent`. The agent stores binaries and install files in
  this location.
- `<DATA_DIR>` — Agent configuration directory. Default path is
  `%ProgramData%\Netwrix\Activity Monitor\Agent`. The agent stores configuration, and debug log
  files in this location.
- `<DATA_DIR>\ActivityLogs` — Default location for collected activity files. If files are stored in
  a separate location, specify the user-designated directory instead of the default location.
- `<DATA_DIR>\Data` — Various temporary data files, which may be actively updated.

## Binary Files

The following binary files can be added to antivirus exclusions:

- Active Directory Monitoring

  - `<INSTALL_DIR>\MonitorService.exe` — Active Directory monitoring service
  - `<INSTALL_DIR>\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  - `<INSTALL_DIR>\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service
  - `%ProgramFiles%\Stealthbits\StealthINTERCEPT\SIWindowsAgent.exe` — Active Directory Module
    service.

- Dell Celerra/VNX, Isilon/PowerScale, PowerStore, and Unity Monitoring

  - `<INSTALL_DIR>\CelerraServerSvc.exe` — Dell Monitoring service
  - `<INSTALL_DIR>\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  - `<INSTALL_DIR>\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service

- Hitachi Monitoring

  - `<INSTALL_DIR>\HitachiService.exe` — Hitachi HNAS monitoring service
  - `<INSTALL_DIR>\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  - `<INSTALL_DIR>\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service

- Microsoft Entra ID (formerly Azure AD) Monitoring

  - `<INSTALL_DIR>\MonitorService.exe` — Microsoft Entra ID monitoring service
  - `<INSTALL_DIR>\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  - `<INSTALL_DIR>\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service

- Nasuni Monitoring

  - `<INSTALL_DIR>\MonitorService.exe` — Nasuni monitoring service
  - `<INSTALL_DIR>\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  - `<INSTALL_DIR>\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service

- NetApp Monitoring

  - `<INSTALL_DIR>\FPolicyServerSvc.exe` — NetApp Monitoring service
  - `<INSTALL_DIR>\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  - `<INSTALL_DIR>\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service

- Panzura Monitoring

  - `<INSTALL_DIR>\MonitorService.exe` — Panzura monitoring service
  - `<INSTALL_DIR>\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  - `<INSTALL_DIR>\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service

- SharePoint Monitoring

  - `<INSTALL_DIR>\MonitorService.exe` — SharePoint 2016, 2019 monitoring service
  - `<INSTALL_DIR>\net35\MonitorService.exe` — SharePoint 2010 monitoring service
  - `<INSTALL_DIR>\net40\MonitorService.exe` — SharePoint 2013 monitoring service
  - `<INSTALL_DIR>\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  - `<INSTALL_DIR>\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service

- SharePoint Online Monitoring

  - `<INSTALL_DIR>\MonitorService.exe` — SharePoint Online monitoring service
  - `<INSTALL_DIR>\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  - `<INSTALL_DIR>\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service

- SQL Server Monitoring

  - `<INSTALL_DIR>\MonitorService.exe` — SQL Server monitoring service
  - `<INSTALL_DIR>\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
  - `<INSTALL_DIR>\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service

- Windows Monitoring

  - `%SystemRoot%\System32\drivers\SBTFSF.sys` — The File System filter driver
  - `<INSTALL_DIR>\SBTService.exe` — Windows File System monitoring service.
  - `<INSTALL_DIR>\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service

# Update Credential Passwords

Credential passwords occasionally need to be updated due to various reasons, such as security
policies that require passwords to be reset on a regular basis. The following types of credentials
may be impacted by password changes or security policies:

- Agent and Domain Controller User Account
- Archive User Account
- Panzura MQ Protection
- Monitored Host User Account
- Active Directory Domain / DC User Account
- Agent Inactivity Alerts Email Credentials
- Monitored Host Inactivity Alerts Email Credentials

## Agent and Domain Controller User Account

The Active Directory Domain / DC User Account is used to run the actions performed by the agent. The
account can be updated in the agent properties under the **Connection** tab.

**NOTE:** If the AD monitoring account is changed, all accounts on the domain controllers will need
to be updated as well.

![Agent User Account Credentials](/img/versioned_docs/activitymonitor_7.1/activitymonitor/troubleshooting/agentuseraccount.webp)

See the
[Connection Tab](/docs/activitymonitor/7.1/administration/agents/agent-properties.md)
topic for additional information.

## Archive User Account

The Archive User Account is used to store log files from the agent and store them on a remote server
or share. The credentials can be updated in the agent properties under the **Archiving** tab.

![Archive User Account Credentials](/img/versioned_docs/activitymonitor_7.1/activitymonitor/troubleshooting/archiveuseraccount.webp)

See the
[Archiving Tab](/docs/activitymonitor/7.1/administration/agents/agent-properties.md)
topic for additional information.

## Panzura MQ Protection

The Panzura MQ Protection Credentials are used to send activity to the Activity Monitor agent. The
credentials can be updated in the agent properties under the **Panzura** tab.

![Panzura MQ Protection Account Credentials](/img/versioned_docs/activitymonitor_7.1/activitymonitor/troubleshooting/panzuramqprotectionaccount.webp)

See the
[Panzura Tab](/docs/activitymonitor/7.1/administration/agents/agent-properties.md)
topic for additional information.

## Monitored Host User Credentials

The Monitored Host User Credentials is used to connect to the monitored host device and send
activity to the agent. The credentials can be updated in monitored host properties. Select a host
under the **Monitored Host** tab. Then, click the **Edit** button to update the account credentials.

![Monitored Host User Account](/img/versioned_docs/activitymonitor_7.1/activitymonitor/troubleshooting/monitoredhostuseraccount.webp)

See the
[Nutanix Tab](/docs/activitymonitor/7.1/administration/monitored-resources/resource-properties.md)
topic for additional information.

## Agent Inactivity Alerts Email Account

The Agent Inactivity Alerts Email Account is used to automate email alerts for inactivity detected
by the agent. It can be updated in agent properties under **Inactivity Alerts** tab then Email
Alerts. This can also be changed in the monitored host properties.

![agentinactivityalertsemailcredentials](/img/versioned_docs/activitymonitor_7.1/activitymonitor/troubleshooting/agentinactivityalertsemailcredentials.webp)

See the
[Inactivity Alerts Tab](/docs/activitymonitor/7.1/administration/agents/agent-properties.md)
topic for additional information.

## Monitored Host Inactivity Alerts Email Account

The Monitored Host Inactivity Alerts Email Account are used to automate email alerts for inactivity
detected by the monitored host. The credentials can be updated in the monitored **Host Properties**.

![Monitored Host Inactivity Alerts Email Credentials Page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/troubleshooting/monitoredhostinactivityalertsemailcredentials.webp)

See the
[Inactivity Alerts Tab](/docs/activitymonitor/7.1/administration/monitored-resources/resource-properties.md)
topic for additional information.
