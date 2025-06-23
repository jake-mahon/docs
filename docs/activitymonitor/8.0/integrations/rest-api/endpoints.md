---
title: REST API Endpoints Reference
sidebar_label: API Endpoints
description: Complete reference for Activity Monitor REST API endpoints including agent, host, domain, and monitoring resource attributes and functionality.
---

# Agent

| Attribute                                | Type     | Detailed Only | Description                                                                                                                                                                                         |
| ---------------------------------------- | -------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                                       | string   |               | Agent ID                                                                                                                                                                                            |
| platformId                               | string   |               | Platform of the agent: Windows , Linux                                                                                                                                                              |
| url                                      | string   |               | Self URL                                                                                                                                                                                            |
| host                                     | string   |               | Host name/address as specified by user                                                                                                                                                              |
| netbiosName                              | string   |               | NETBIOS name                                                                                                                                                                                        |
| authenticationMethod                     | string   |               | The authentication method for connecting to the agent: Password, PublicKey                                                                                                                          |
| agentPort                                | int      |               | The port that is used by the agent. Default: 4498.                                                                                                                                                  |
| userName                                 | string   |               | Account for connecting to the agent.                                                                                                                                                                |
| password                                 | string   | X             | Account password for connecting to the agent. Password is not exposed.                                                                                                                              |
| privateKey                               | string   |               | The private key used when PublicKey authentication method is used. The private key is not exposed.                                                                                                  |
| clientCertificate                        | string   |               | The agent's client certificate.                                                                                                                                                                     |
| protocol                                 | string   |               | The protocol used for connecting to the agent: GRPC                                                                                                                                                 |
| domain                                   | string   |               | Domain name of the agent                                                                                                                                                                            |
| machineSid                               | string   |               | The Machine SID of the Agent Server.                                                                                                                                                                |
| osVersion                                | string   |               | OS version or version servicepack                                                                                                                                                                   |
| isDC                                     | bool     |               | Is Agent a domain controller                                                                                                                                                                        |
| errorMessage                             | string   |               | Description of the failure condition                                                                                                                                                                |
| installState                             | string   |               | State of Activity Monitor agent: `NotInstalled`, `Unknown`, `Installed`, `Installing`, `Upgrading`, `Uninstalling`, `Outdated`, `Failed`, `ManagedBySI` (last one for Threat Prevention agents)     |
| version                                  | string   |               | Activity Monitor agent version                                                                                                                                                                      |
| siInstallState                           | string   |               | State of Threat Prevention agent: `NotInstalled`, `Unknown`, `Installed`, `Installing`, `Upgrading`, `Uninstalling`, `Outdated`, `Failed`, `ManagedBySI` (last one for Threat Prevention agents)    |
| siVersion                                | string   |               | Threat Prevention agent version                                                                                                                                                                     |
| managedBySI                              | bool     |               | True if the Threat Prevention Agent configuration is managed by Threat Prevention. Otherwise Activity Monitor managed the Threat Prevention Agent                                                   |
| configVersion                            | string   |               | A hash of the config file                                                                                                                                                                           |
| monitoredHostsUrl                        | string   |               | URL to the list of agent's hosts                                                                                                                                                                    |
| monitoredDomainUrl                       | string   |               | URL to the domain monitored by the agent, if any                                                                                                                                                    |
| warnings                                 | string[] | X             | Array of errors/warnings if any                                                                                                                                                                     |
| ad.safeModeStatus                        | string   | X             | `pending`, `approved`. If `pending` the Threat Prevention agent in the safe mode.                                                                                                                   |
| ad.safeModeMessage                       | string   | X             | If in the safe mode, contains a reason why the agent switched to the mode.                                                                                                                          |
| ad.hardeningIsEnabled                    | bool     | X             | AD Module hardening is enabled or disabled.                                                                                                                                                         |
| ad.safeModeIsEnabled                     | bool     | X             | AD Module safe mode is enabled or disabled.                                                                                                                                                         |
| ad.dnsResolveIsEnabled                   | bool     | X             | AD Module DNS hostname resolution is enabled or disabled.                                                                                                                                           |
| ad.siIpWhitelist                         | string[] | X             | Whitelist of IPs allowed to connect to the AD Module port.                                                                                                                                          |
| archive.IsEnabled                        | bool     | X             | Whether the archiving feature is enabled                                                                                                                                                            |
| archive.path                             | string   | X             | UNC path of the archival location                                                                                                                                                                   |
| archive.userName                         | string   | X             | An account to access the archival location.                                                                                                                                                         |
| archive.password                         | string   | X             | User password to access the archival location. Password is not exposed.                                                                                                                             |
| archive.maxLocalSize                     | string   | X             | Maximum space the agent is allowed to use on the local drives.                                                                                                                                      |
| fpolicy.port                             | int      | X             | NetApp c-mode fpolicy port                                                                                                                                                                          |
| fpolicy.auth                             | string   | X             | `NoAuth`, `Server`, `Mutual`                                                                                                                                                                        |
| fpolicy.ipWhitelist                      | string[] | X             | IP whitelist                                                                                                                                                                                        |
| fpolicy.clientCertificate                | string   | X             | The Client or CA certificate that is currently set.                                                                                                                                                 |
| fpolicy.serverCertificate                | string   | X             | The FPolicy Server certificate that is currently set. Server Certificate is not exposed.                                                                                                            |
| minLocalFreeSpace                        | string   | X             | Free disk threshold after which the agent stops writing data to the log files                                                                                                                       |
| cee.vcapsIsEnabled                       | bool     | X             | CEE Asynchronous bulk delivery (VCAPS) is enabled or disabled.                                                                                                                                      |
| cee.vcapsInterval                        | int      | X             | Interval in seconds on how often events are delivered by CEE.                                                                                                                                       |
| cee.vcapsEvents                          | int      | X             | Interval in number of events on how often events are delivered by CEE.                                                                                                                              |
| cee.httpEnabled                          | bool     | X             | CEE HTTP protocol is enabled or disabled                                                                                                                                                            |
| cee.rpcEnabled                           | bool     | X             | CEE RPC protocol is enabled or disabled                                                                                                                                                             |
| cee.ipWhitelist                          | string[] | X             | Whitelist of IPs that are allowed to connect to the agent via http protocol. If blank the agent will accept connections from any host.                                                              |
| inactivityAlerts.isEnabled               | bool     | X             | Whether Inactivity Alerting is enabled                                                                                                                                                              |
| inactivityAlerts.inactivityInterval      | int      | X             | The time interval to elapse after the Monitored Host stops receiving events.                                                                                                                        |
| inactivityAlerts.replayInterval          | int      | X             | How often to repeat an alert if the inactivity period is long lasting.                                                                                                                              |
| inactivityAlerts.inactivityCheckInterval | int      | X             | The time interval to check the Monitored Host for new events.                                                                                                                                       |
| inactivityAlerts.syslog.server           | string   | X             | The syslog server that is sent inactivity alerts.                                                                                                                                                   |
| inactivityAlerts.syslog.protocol         | string   | X             | The syslog server protocol that is used: "UDP" , "TCP" , "TLS"                                                                                                                                      |
| inactivityAlerts.syslog.separator        | string   | X             | The syslog server separator / message framing that is used: "LF ASCII 10" , "CR ASCII 13" , "CRLF ASCII 13, 10" , "NUL ASCII 0" , "Octet Count RFC 5425". Only used for TCP and TLS protocols.      |
| inactivityAlerts.syslog.template         | string   | X             | The syslog server template text that is used.                                                                                                                                                       |
| inactivityAlerts.email.server            | string   | X             | The email SMTP server that is sent inactivity alerts.                                                                                                                                               |
| inactivityAlerts.email.ssl               | bool     | X             | Email SMTP Server SSL / TLS is enabled or disabled.                                                                                                                                                 |
| inactivityAlerts.email.userName          | string   | X             | Email SMTP Server Username.                                                                                                                                                                         |
| inactivityAlerts.email.password          | string   | X             | Email SMTP Server Password. Password is not exposed.                                                                                                                                                |
| inactivityAlerts.email.from              | string   | X             | Email address of where the inactivity alert is from.                                                                                                                                                |
| inactivityAlerts.email.to                | string   | X             | Email address of where the inactivity alert is sent to.                                                                                                                                             |
| inactivityAlerts.email.subject           | string   | X             | Email message subject of the inactivity alert.                                                                                                                                                      |
| inactivityAlerts.email.body              | string   | X             | Email message body of the inactivity alert.                                                                                                                                                         |
| apiServerIsEnabled                       | bool     |               | API Server is enabled or disabled                                                                                                                                                                   |
| apiServerPort                            | int      |               | API Server TCP/IP port                                                                                                                                                                              |
| apiServerIpWhitelist                     | string[] | X             | Whitelist of IPs allowed to connect to the API Server port.                                                                                                                                         |
| apiServerMgmtConsole                     | string   | X             | NETBIOS name of the Console machine that manages the agent list of the API Server (only available for agent(s) that are running the api server)                                                     |
| traceLevel                               | string   | X             | The logging trace level of the agent.                                                                                                                                                               |
| externalNicName                          | string   | X             | The selected network interface that is used for connections. If blank, the agent will auto-detect the network interface to use.                                                                     |
| comment                                  | string   |               | The agent's set comment.                                                                                                                                                                            |
| etwLogEnabled                            | bool     |               | If true or enabled the windows agent will produce extended debugging data (ETW) logs from the windows driver when Trace logging is enabled for the agent.                                           |
| linux.serviceUsername                    | string   | X             | The linux agent's service username that is used to run the agent service / daemon. If blank, root user is used.                                                                                     |
| networkProxy.address                     | string   | X             | HTTP Proxy Server set in SERVER[:PORT] format. If blank HTTP Proxy is disabled.                                                                                                                     |
| networkProxy.useDefaultCredentials       | bool     | X             | If enabled the proxy server authenticates as the agent's machine account.                                                                                                                           |
| networkProxy.bypassProxyOnLocal          | bool     | X             | If enabled the agent will bypass the proxy server for local addresses.                                                                                                                              |
| networkProxy.userName                    | string   | X             | The Proxy Server Username                                                                                                                                                                           |
| networkProxy.password                    | string   | X             | The Proxy Server Password. Password is not exposed.                                                                                                                                                 |
| networkProxy.bypassList                  | string[] | X             | List of regular expressions that describe URIs that do not use the proxy server when accessed.                                                                                                      |
| dns.isEnabled                            | bool     | X             | Local DNS caching service is enabled or disabled.                                                                                                                                                   |
| dns.listenPort                           | int      | X             | Port used by the DNS caching service.                                                                                                                                                               |
| dns.parallelism                          | int      | X             | Parallelism level to use while processing DNS requests.                                                                                                                                             |
| dns.perfStatsTimeDebug                   | TimeSpan | X             | Period to dump performance statistics on debug level.                                                                                                                                               |
| dns.perfStatsTimeInfo                    | TimeSpan | X             | Period to dump performance statistics on info level.                                                                                                                                                |
| dns.forwardDnsServer                     | string[] | X             | List of DNS servers specified to be used for lookups. If blank, the default DNS servers of the agent are used.                                                                                      |
| dns.cacheFile                            | string   | X             | The DNS cache buffer filename that is used.                                                                                                                                                         |
| dns.successTtl                           | TimeSpan | X             | How long to cache successful lookup results before attempting the search again.                                                                                                                     |
| dns.failedTtl                            | TimeSpan | X             | How long to cache a failed lookup result before attempting the search again.                                                                                                                        |
| dns.clientWaitTimeout                    | TimeSpan | X             | The amount of the DNS service is allowed to process a request before sending a not found response. If no results are received the lookup operation continues in the background.                     |
| dns.refreshThreshold                     | TimeSpan | X             | An interval between expired items in the cache check.                                                                                                                                               |
| dns.maxCacheSize                         | int      | X             | The max size of the dns service buffer file.                                                                                                                                                        |
| dns.uselessAge                           | TimeSpan | X             | The DNS service does not resolve names for events older then the set time period.                                                                                                                   |
| dns.maxAttemptsToResolve                 | int      | X             | Maximum attempts that the DNS service will use to resolve addresses. If 0 is set, the DNS service will resolve addresses infinitely.                                                                |
| dns.suffix                               | string   | X             | The DNS suffix identifies the domain name that is appended to an unqualified host name to obtain a fully qualified domain name (FQDN) suitable for a dns name query.                                |
| adUsers.domainControllers                | string[] | X             | List of Domain Controllers to be used for user lookups. If blank, the default behavior is used.                                                                                                     |
| adUsers.lookupTimeout                    | TimeSpan | X             | The amount of time the agent will wait for the query results. If no results are received , the agent reports an empty username in the events, but continues the lookup operation in the background. |
| adUsers.successCacheTtl                  | TimeSpan | X             | How long to cache successful lookup results before attempting the lookup from Active Directory again.                                                                                               |
| adUsers.failedCacheTtl                   | TimeSpan | X             | How long to cache failed lookup results before attempting the lookup from Active Directory again.                                                                                                   |
| adUsers.maxCacheSize                     | int      | X             | The max size of the cache buffer file.                                                                                                                                                              |
| panzura.port                             | int      | X             | Agent port used for Panzura.                                                                                                                                                                        |
| panzura.useCredentials                   | bool     | X             | Protection of Panzura port is enabled or disabled.                                                                                                                                                  |
| panzura.username                         | string   | X             | Panzura's MQ username used for port protection.                                                                                                                                                     |
| panzura.password                         | string   | X             | Panzura's MQ password used for port protection. Password is not exposed.                                                                                                                            |
| panzura.ipWhitelist                      | string[] | X             | Whitelist of IP addresses of Panzura nodes that are allowed to connect to the Agent's Panzura port. If blank, connections from any host are accepted.                                               |
| nutanix.port                             | int      | X             | Agent port used for Nutanix.                                                                                                                                                                        |
| nutanix.ipWhitelist                      | string[] | X             | Whitelist of IP addresses of Nutanix nodes that are allowed to connect to the Agent's Nutanix port. If blank, connections from any host are accepted.                                               |
| qumulo.port                              | int      | X             | Agent port used for Qumulo.                                                                                                                                                                         |
| qumulo.ipWhitelist                       | string[] | X             | Whitelist of IP addresses of Qumulo nodes that are allowed to connect to the Agent's Qumulo port. If blank, connections from any host are accepted.                                                 |
| ctera.port                               | int      | X             | Agent port used for Ctera.                                                                                                                                                                          |
| ctera.ipWhitelist                        | string[] | X             | Whitelist of IP addresses of CTERA portals that are allowed to connect to the Agent's CTERA port. If blank, connections from any host are accepted.                                                 |

Response Example

```
{
    "warnings": [],
    "archive": {
        "isEnabled": false,
        "path": "\\\\KDVM01\\SBACTIVITYLOGS",
        "userName": "",
        "maxLocalSize": "5GB"
    },
    "cee": {
        "vcapsIsEnabled": false,
        "vcapsInterval": 60,
        "vcapsEvents": 100,
        "httpEnabled": false,
        "rpcEnabled": true,
        "ipWhitelist": []
    },
    "ad": {
        "safeModeStatus": null,
        "safeModeMessage": null,
        "hardeningIsEnabled": false,
        "safeModeIsEnabled": true,
        "dnsResolveIsEnabled": true,
        "siIpWhitelist": []
    },
    "minLocalFreeSpace": "64MB",
    "fpolicy": {
        "port": 9999,
        "auth": "NoAuth",
        "ipWhitelist": [],
        "clientCertificate": "",
        "serverCertificate": ""
    },
    "inactivityAlerts": {
        "isEnabled": false,
        "inactivityInterval": 360,
        "replayInterval": 360,
        "inactivityCheckInterval": 1,
        "syslog": {
            "server": "",
            "protocol": "UDP",
            "separator": "Lf",
            "template": "<14>1 %TIME_STAMP_UTC% %AGENT% %PRODUCT% - NO_DATA - [origin ip=\"%INACTIVE_SERVER_IP%\"][noactivity@33334 host=\"%INACTIVE_SERVER%\" lastEvent=\"%LAST_EVENT_TIME_STAMP_UTC%\" activityType=\"%ACTIVITY_TYPE%\"] No activity events from %INACTIVE_SERVER% for %INACTIVITY_PERIOD_HOURS% hours."
        },
        "email": {
            "server": "",
            "ssl": false,
            "userName": "",
            "from": "",
            "to": "",
            "subject": "[Activity Monitor] No activity events from %INACTIVE_SERVER% for %INACTIVITY_PERIOD_HOURS% hours",
            "body": "There were no activity events from %INACTIVE_SERVER% for %INACTIVITY_PERIOD_HOURS% hours.\n  \nHost:                 %INACTIVE_SERVER%\n  Activity Type: %ACTIVITY_TYPE%\n  Period of inactivity: %INACTIVITY_PERIOD_HOURS% hours / %INACTIVITY_PERIOD_MINUTES% minutes\n  Last event received:  %LAST_EVENT_TIME_STAMP_UTC% (UTC)\n  Last event received:  %LAST_EVENT_TIME_STAMP% (agent time)\n  Agent:                %AGENT%\n  \n  \n  %PRODUCT% %PRODUCT_VERSION%\n"
        }
    },
    "panzura": {
        "port": 4497,
        "useCredentials": false,
        "username": "guest",
        "ipWhitelist": []
    },
    "nutanix": {
        "port": 4501,
        "ipWhitelist": []
    },
    "qumulo": {
        "port": 4496,
        "ipWhitelist": []
    },
    "ctera": {
        "port": 4499,
        "ipWhitelist": []
    },
    "linux": {
        "serviceUsername": ""
    },
    "apiServerIpWhitelist": [],
    "apiServerMgmtConsole": "KDVM01",
    "traceLevel": "Info",
    "externalNicName": "",
    "dns": {
        "isEnabled": false,
        "listenPort": 4503,
        "parallelism": 4,
        "perfStatsTimeDebug": "00:01:00",
        "perfStatsTimeInfo": "00:10:00",
        "forwardDnsServer": [],
        "cacheFile": "dns.cache",
        "successTtl": "01:00:00",
        "failedTtl": "00:01:00",
        "clientWaitTimeout": "00:00:01.8000000",
        "refreshThreshold": "00:00:01",
        "maxCacheSize": 1000000,
        "uselessAge": "1.00:00:00",
        "maxAttemptsToResolve": 30,
        "suffix": ""
    },
    "adUsers": {
        "domainControllers": [],
        "lookupTimeout": "00:00:02",
        "successCacheTtl": "10:00:00",
        "failedCacheTtl": "00:01:00",
        "maxCacheSize": 300000
    },
    "networkProxy": {
        "address": "",
        "useDefaultCredentials": false,
        "bypassProxyOnLocal": false,
        "userName": "",
        "bypassList": []
    },
    "id": "AGENT0",
    "platformId": "windows",
    "url": "https://127.0.0.1:4494/api/v1/agents/AGENT0",
    "host": "KDVM01",
    "netbiosName": "KDVM01",
    "authenticationMethod": "Password",
    "userName": "KDUD1\\Administrator",
    "clientCertificate": "",
    "protocol": "GRPC",
    "domain": "KDUD1",
    "machineSid": "S-1-5-21-3126412784-2087258618-1984987930-1105",
    "osVersion": "10.0.14393.0",
    "isDC": false,
    "errorMessage": "",
    "installState": "Installed",
    "version": "7.1.164",
    "siInstallState": "NotInstalled",
    "siVersion": "",
    "managedBySI": false,
    "configVersion": "xVdvRQnWGvifzQ8Q9rpfVj227Jo=",
    "monitoredHostsUrl": "https://127.0.0.1:4494/api/v1/agents/AGENT0/hosts",
    "monitoredDomainUrl": "https://127.0.0.1:4494/api/v1/agents/AGENT0/domain",
    "apiServerIsEnabled": true,
    "apiServerPort": 4494,
    "comment": "",
    "agentPort": 4498
}
```

# Domain

| Attribute      | Type     | Detailed Only | Description                                                                                                                                                                                                           |
| -------------- | -------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id             | string   |               | Domain ID                                                                                                                                                                                                             |
| url            | string   |               | Self URL                                                                                                                                                                                                              |
| name           | string   |               | Domain NETBIOS name                                                                                                                                                                                                   |
| managedBySI    | bool     |               | Whether the monitoring configuration is managed by Threat Prevention or Activity Monitor                                                                                                                              |
| outputs        | output[] |               | Domain outputs. Domain outputs are common for all the domain controllers. However, there are several agent-specific settings, like `archivePath`. Do get agent-specific outputs use `api/v1/agents/«agentId»/domain`. |
| outputsUrl     | string   |               | URL to domain outputs                                                                                                                                                                                                 |
| agentsUrl      | string   |               | URL to domain controllers                                                                                                                                                                                             |
| masterAgentId  | string   |               | ID of the Master agent - the one whose configuration is considered the master one.                                                                                                                                    |
| masterAgentUrl | string   |               | URL to the Master agent.                                                                                                                                                                                              |
| policies       | policy[] |               | Domain Policies. The list of policies for the domain.                                                                                                                                                                 |

Response Example

```
{
    "id": "KDUD1",
    "url": "https://127.0.0.1:4494/api/v1/domains/KDUD1",
    "name": "KDUD1",
    "managedBySI": false,
    "outputs": [
        {
            "id": "69cce1100fce406192d1d8553083af43",
            "url": "https://127.0.0.1:4494/api/v1/domains/KDUD1/outputs/69cce1100fce406192d1d8553083af43",
            "domainId": "KDUD1",
            "domainUrl": "https://127.0.0.1:4494/api/v1/domains/KDUD1",
            "agentsIds": [],
            "isEnabled": true,
            "type": "LogFile",
            "logFile": {
                "format": "Json",
                "path": "C:\\ProgramData\\Netwrix\\Activity Monitor\\Agent\\ActivityLogs\\KDUD1_Log_.json",
                "archivePath": "\\\\KDVM01\\SBACTIVITYLOGS\\KDDC01\\KDUD1_69cce110-0fce-4061-92d1-d8553083af43\\KDUD1_Log_.json",
                "periodToRetainLog": 10,
                "reportUserName": false,
                "reportUncPath": false,
                "addCToPath": true,
                "reportMilliseconds": true,
                "stealthAudit": true
            },
            "comment": "",
            "managedBy": "",
            "altHost": ""
        },
        {
            "id": "cd34eb7a0c1d40c097b56056af2afd73",
            "url": "https://127.0.0.1:4494/api/v1/domains/KDUD1/outputs/cd34eb7a0c1d40c097b56056af2afd73",
            "domainId": "KDUD1",
            "domainUrl": "https://127.0.0.1:4494/api/v1/domains/KDUD1",
            "agentsIds": [],
            "isEnabled": true,
            "type": "Syslog",
            "syslog": {
                "reportUncPath": false,
                "addCToPath": true,
                "server": "1.2.3.4:514",
                "protocol": "UDP",
                "separator": "Lf",
                "template": "%SYSLOG_DATE% %HOST% LEEF:1.0|%COMPANY%|%PRODUCT%|%PRODUCT_VERSION%|%EVENT_SOURCE_TYPE%%CLASS_NAME%%EVENTNAMETRANSLATED%%SUCCESS%%BLOCKED_EVENT%|cat=%EVENTNAMETRANSLATED%\tdevTimeFormat=yyyy-MM-dd HH:mm:ss.SSS\tdevTime=%TIME_STAMP%\tSettingName=%SETTING_NAME%\tdomain=%EVENT_SOURCE_NAME%\tusrName=%PERPETRATOR_NAME%\tsrc=%ORIGINATINGCLIENTIP%\tdst=%ORIGINATING_SERVERIP%\tDistinguishedName=%DN%\tAffectedObject=%AFFECTED_OBJECT_ACCOUNT_NAME%\tClassName=%CLASS_NAME%\tOrigServer=%ORIGINATING_SERVER%\tSuccess=%SUCCESS%\tBlocked=%BLOCKED_EVENT%\tAttrName=%ATTRIBUTE_NAME%\tAttrNewValue=%ATTRIBUTE_VALUE%\tAttrOldValue=%OLD_ATTRIBUTE_VALUE%\tOperation=%OPERATION%"
            },
            "comment": "",
            "managedBy": "",
            "altHost": ""
        },
        {
            "id": "bee61b424f214f7583e9cece222b8f41",
            "url": "https://127.0.0.1:4494/api/v1/domains/KDUD1/outputs/bee61b424f214f7583e9cece222b8f41",
            "domainId": "KDUD1",
            "domainUrl": "https://127.0.0.1:4494/api/v1/domains/KDUD1",
            "agentsIds": [],
            "isEnabled": true,
            "type": "Amqp",
            "amqp": {
                "server": "5.6.7.8:10001",
                "userName": "StealthINTERCEPT",
                "queue": "",
                "exchange": "StealthINTERCEPT",
                "vhost": ""
            },
            "comment": "",
            "managedBy": "",
            "altHost": ""
        }
    ],
    "outputsUrl": "https://127.0.0.1:4494/api/v1/domains/KDUD1/outputs",
    "agentsUrl": "https://127.0.0.1:4494/api/v1/domains/KDUD1/agents",
    "masterAgentId": "AGENT1",
    "masterAgentUrl": "https://127.0.0.1:4494/api/v1/agents/AGENT1"
}
```

# Host

| Attribute                                | Type     | Detailed Only | Description                                                                                                                                                                                                                                                                          |
| ---------------------------------------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id                                       | string   |               | ID of the host.                                                                                                                                                                                                                                                                      |
| url                                      | string   |               | Self URL                                                                                                                                                                                                                                                                             |
| host                                     | string   |               | Host name/Address as specified by a user                                                                                                                                                                                                                                             |
| type                                     | string   |               | `Windows`,`NetApp`,`Celerra`,`Isilon`,`Hitachi`,`SharePoint`,`Unity`,`Nasuni`, `Panzura`, `SharePointOnline`, `AzureAD`, `Linux`, `SqlServer`                                                                                                                                        |
| userName                                 | string   |               | An account to connect the host to                                                                                                                                                                                                                                                    |
| password                                 | string   | X             | Account password to connect the host to. Password is not exposed.                                                                                                                                                                                                                    |
| autoConfigureAuditing                    | bool     |               | Automatically enable the auditing on the device, if supported                                                                                                                                                                                                                        |
| monitorAuditingStatus                    | bool     |               | Constantly verify that the auditing is enabled, fix if needed                                                                                                                                                                                                                        |
| hostAliases                              | string[] |               | List of server names for NAS if they are different from the set name of the host.                                                                                                                                                                                                    |
| outputs                                  | output[] |               | Array of host's outputs                                                                                                                                                                                                                                                              |
| inactivityAlerts.isEnabled               | bool     |               | Whether Inactivity Alerting is enabled                                                                                                                                                                                                                                               |
| inactivityAlerts.useCustomSettings       | bool     |               | Whether to use custom host settings, or inherit from agent settings.                                                                                                                                                                                                                 |
| inactivityAlerts.inactivityInterval      | int      |               | The time interval to elapse after the Monitored Host stops receiving events.                                                                                                                                                                                                         |
| inactivityAlerts.replayInterval          | int      |               | How often to repeat an alert if the inactivity period is long lasting.                                                                                                                                                                                                               |
| inactivityAlerts.inactivityCheckInterval | int      |               | The time interval to check the Monitored Host for new events.                                                                                                                                                                                                                        |
| inactivityAlerts.syslog.server           | string   |               | The syslog server that is sent inactivity alerts.                                                                                                                                                                                                                                    |
| inactivityAlerts.syslog.protocol         | string   |               | The syslog protocol that is used: "UDP" , "TCP" , "TLS"                                                                                                                                                                                                                              |
| inactivityAlerts.syslog.separator        | string   |               | The syslog server separator / message framing that is used: "LF ASCII 10" , "CR ASCII 13" , "CRLF ASCII 13, 10" , "NUL ASCII 0" , "Octet Count RFC 5425". Only used for TCP and TLS protocols.                                                                                       |
| inactivityAlerts.syslog.template         | string   |               | The syslog message template text.                                                                                                                                                                                                                                                    |
| inactivityAlerts.email.server            | string   |               | The email or SMTP server or IP that is used to send host inactivity alerts.                                                                                                                                                                                                          |
| inactivityAlerts.email.ssl               | bool     |               | Email SMTP Server SSL / TLS is enabled or disabled.                                                                                                                                                                                                                                  |
| inactivityAlerts.email.userName          | string   |               | The email or SMTP server user name.                                                                                                                                                                                                                                                  |
| inactivityAlerts.email.password          | string   | X             | The email or SMTP server password. Password is not exposed.                                                                                                                                                                                                                          |
| inactivityAlerts.email.from              | string   |               | Email address of where the inactivity alert is from.                                                                                                                                                                                                                                 |
| inactivityAlerts.email.to                | string   |               | Email address of where the inactivity alert is sent to.                                                                                                                                                                                                                              |
| inactivityAlerts.email.subject           | string   |               | Email message subject of the inactivity alert.                                                                                                                                                                                                                                       |
| inactivityAlerts.email.body              | string   |               | Email message body of the inactivity alert.                                                                                                                                                                                                                                          |
| uidTranslate.isEnabled                   | bool     |               | NFS UID translation to Windows SID is enabled or disabled.                                                                                                                                                                                                                           |
| uidTranslate.domainController            | string   |               | The name of the forest or a Domain Controller. Used for Active Directory searches.                                                                                                                                                                                                   |
| uidTranslate.port                        | int      |               | The port used for Active Directory searches.                                                                                                                                                                                                                                         |
| uidTranslate.options                     | string   |               | The set options used for Active Directory searches.                                                                                                                                                                                                                                  |
| uidTranslate.container                   | string   |               | The Active Directory container set to be searched.                                                                                                                                                                                                                                   |
| uidTranslate.scope                       | string   |               | The scope of the Active Directory search.                                                                                                                                                                                                                                            |
| uidTranslate.filter                      | string   |               | The filter of the Active Directory search.                                                                                                                                                                                                                                           |
| hitachi.uncLogPath                       | string   |               | The path of the hitachi audit event log file.                                                                                                                                                                                                                                        |
| hitachi.logFileName                      | string   |               | The filename of the hitachi audit event log.                                                                                                                                                                                                                                         |
| hitachi.pollingInterval                  | TimeSpan |               | The interval of polling the log for new events.                                                                                                                                                                                                                                      |
| api.protocol                             | string   |               | The API Protocol being used: "AutoDetect", "HTTPS", "HTTPSIgnoreErrors", "HTTP".                                                                                                                                                                                                     |
| api.certificate                          | string   |               | The text output of the HTTPS certificate.                                                                                                                                                                                                                                            |
| api.hostNameVerification                 | bool     |               | If certificate hostname verification is enabled or disabled.                                                                                                                                                                                                                         |
| api.channel                              | string   |               | The communication method being used: "AutoDetect", "ONTAPI", "REST" (only used for netapp hosts)                                                                                                                                                                                     |
| netapp.managementLif                     | string   |               | The Management LIF of the netapp host. Disabled / Empty by default.                                                                                                                                                                                                                  |
| netapp.nfs3EventName                     | string   |               | The fpolicy Event Name for successful NFSv3 Events. Default: "StealthAUDITScreeningNfsV3"                                                                                                                                                                                            |
| netapp.nfs3FailedEventName               | string   |               | The fpolicy Event Name for failed NFSv3 Events. Default: "StealthAUDITScreeningFailedNfsV3"                                                                                                                                                                                          |
| netapp.nfs4FailedEventName               | string   |               | The fpolicy Event Name for failed NFSv4 Events. Deafult: "StealthAUDITScreeningFailedNfsV4"                                                                                                                                                                                          |
| netapp.nfs4EventName                     | string   |               | The fpolicy Event Name for successful NFSv4 Events. Default: "StealthAUDITScreeningNfsV4"                                                                                                                                                                                            |
| netapp.cifsEventName                     | string   |               | The fpolicy Event Name for successful CIFS Events. Default: "StealthAUDITScreeningCifs"                                                                                                                                                                                              |
| netapp.cifsFailedEventName               | string   |               | The fpolicy Event Name for failed CIFS Events. Default: "StealthAUDITScreeningCifs"                                                                                                                                                                                                  |
| netapp.policyName                        | string   |               | The fpolicy Policy Name used for the Activity Monitor. Default: "StealthAUDIT"                                                                                                                                                                                                       |
| netapp.externalEngineName                | string   |               | The fpolicy External Engine Name used for the Activity Monitor. Default: "StealthAUDITEngine"                                                                                                                                                                                        |
| sharePoint.pollingInterval               | TimeSpan |               | The polling interval set for sharepoint on premise hosts.                                                                                                                                                                                                                            |
| spo.azure.domain                         | string   |               | The Azure Active Directory domain being monitored for SharePoint Online.                                                                                                                                                                                                             |
| spo.azure.azureCloud                     | string   |               | The selected Azure Cloud being used: "Azure", "Azure for US Government GCC", "Azure for Government GCC High", "Azure for US Government DoD", "Azure Germany", "Azure China by 21Vianet"                                                                                              |
| spo.azure.tenantId                       | string   |               | The azure Tenant ID                                                                                                                                                                                                                                                                  |
| spo.azure.tenantName                     | string   |               | The azure Tenant Name                                                                                                                                                                                                                                                                |
| spo.azure.clientId                       | string   |               | The azure Tenant Client ID.                                                                                                                                                                                                                                                          |
| spo.azure.clientSecret                   | string   | X             | The azure Client Secret. Client Secret is not exposed.                                                                                                                                                                                                                               |
| spo.azure.region                         | string   |               | The azure Region.                                                                                                                                                                                                                                                                    |
| azureAd.azure.domain                     | string   |               | The Azure Active Directory domain being monitored.                                                                                                                                                                                                                                   |
| azureAd.azure.azureCloud                 | string   |               | The selected Azure Cloud being used: "Azure", "Azure for US Government GCC", "Azure for Government GCC High", "Azure for US Government DoD", "Azure Germany", "Azure China by 21Vianet"                                                                                              |
| azureAd.azure.tenantId                   | string   |               | The azure Tenant ID                                                                                                                                                                                                                                                                  |
| azureAd.azure.tenantName                 | string   |               | The azure Tenant Name                                                                                                                                                                                                                                                                |
| azureAd.azure.clientId                   | string   |               | The azure Tenant Client ID.                                                                                                                                                                                                                                                          |
| azureAd.azure.clientSecret               | string   | X             | The azure Client Secret. Client Secret is not exposed.                                                                                                                                                                                                                               |
| azureAd.azure.region                     | string   |               | The azure Region.                                                                                                                                                                                                                                                                    |
| exchangeOnline.azure.domain              | string   |               | The Azure Active Directory domain being monitored for Exchange Online.                                                                                                                                                                                                               |
| exchangeOnline.azure.azureCloud          | string   |               | The selected Azure Cloud being used: "Azure", "Azure for US Government GCC", "Azure for Government GCC High", "Azure for US Government DoD", "Azure Germany", "Azure China by 21Vianet"                                                                                              |
| exchangeOnline.azure.tenantId            | string   |               | The azure Tenant ID                                                                                                                                                                                                                                                                  |
| exchangeOnline.azure.tenantName          | string   |               | The azure Tenant Name                                                                                                                                                                                                                                                                |
| exchangeOnline.azure.clientId            | string   |               | The azure Tenant Client ID.                                                                                                                                                                                                                                                          |
| exchangeOnline.azure.clientSecret        | string   | X             | The azure Client Secret. Client Secret is not exposed.                                                                                                                                                                                                                               |
| exchangeOnline.azure.region              | string   |               | The azure Region.                                                                                                                                                                                                                                                                    |
| sql.pollingInterval                      | string   |               | The interval for polling SQL log for new events.                                                                                                                                                                                                                                     |
| sql.tweakOptions                         | string[] |               | Extended Events tweaking options for SQL hosts.                                                                                                                                                                                                                                      |
| outputsUrl                               | string   |               | URL to the host's outputs                                                                                                                                                                                                                                                            |
| agentsUrl                                | string   |               | URL to the agents that are monitoring the host                                                                                                                                                                                                                                       |
| status.updatedAt                         | DateTime |               | A timestamp when the status has changed to this value.                                                                                                                                                                                                                               |
| status.type                              | string   |               | OK, Error, or Warning - indicates a type of the status.                                                                                                                                                                                                                              |
| status.summary                           | string   |               | A user-friendly summary string of the status. May be empty for the OK type, non-empty otherwise.                                                                                                                                                                                     |
| status.details                           | string   |               | A user-friendly message that describes the status. May be empty.                                                                                                                                                                                                                     |
| statusHistoryUrl                         | string   |               | URL to the status history of the host.                                                                                                                                                                                                                                               |
| stats.receivedAt                         | DateTime |               | Timestamp indicating the last time the Agent received something from the Host.                                                                                                                                                                                                       |
| stats.receivedCount                      | long     |               | Total number of events received by the agent for the Host.                                                                                                                                                                                                                           |
| stats.lastEventTime                      | DateTime |               | The most recent timestamp among all recent events received for the Host. File servers and other event sources can deliver events out of order. For example, each node of PowerScale cluster has its log and delivery cadence. This field shows the MAX(timestamp) for recent events. |

Response Example

```
{
    "autoConfigureAuditing": false,
    "monitorAuditingStatus": false,
    "hostAliases": [],
    "inactivityAlerts": {
        "isEnabled": false,
        "useCustomSettings": false,
        "inactivityInterval": 360,
        "replayInterval": 360,
        "inactivityCheckInterval": 1,
        "syslog": {
            "server": "",
            "protocol": "UDP",
            "separator": "Lf",
            "template": "<14>1 %TIME_STAMP_UTC% %AGENT% %PRODUCT% - NO_DATA - [origin ip=\"%INACTIVE_SERVER_IP%\"][noactivity@33334 host=\"%INACTIVE_SERVER%\" lastEvent=\"%LAST_EVENT_TIME_STAMP_UTC%\" activityType=\"%ACTIVITY_TYPE%\"] No activity events from %INACTIVE_SERVER% for %INACTIVITY_PERIOD_HOURS% hours."
        },
        "email": {
            "server": "",
            "ssl": false,
            "userName": "",
            "from": "",
            "to": "",
            "subject": "[Activity Monitor] No activity events from %INACTIVE_SERVER% for %INACTIVITY_PERIOD_HOURS% hours",
            "body": "There were no activity events from %INACTIVE_SERVER% for %INACTIVITY_PERIOD_HOURS% hours.\n  \nHost:                 %INACTIVE_SERVER%\n  Activity Type: %ACTIVITY_TYPE%\n  Period of inactivity: %INACTIVITY_PERIOD_HOURS% hours / %INACTIVITY_PERIOD_MINUTES% minutes\n  Last event received:  %LAST_EVENT_TIME_STAMP_UTC% (UTC)\n  Last event received:  %LAST_EVENT_TIME_STAMP% (agent time)\n  Agent:                %AGENT%\n  \n  \n  %PRODUCT% %PRODUCT_VERSION%\n"
        }
    },
    "id": "Windows-kdvm01",
    "url": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01",
    "host": "KDVM01",
    "type": "Windows",
    "userName": "",
    "outputs": [
        {
            "id": "b08e3c84905b4aed8718f42d2ecc523d",
            "url": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01/outputs/b08e3c84905b4aed8718f42d2ecc523d",
            "hostId": "Windows-kdvm01",
            "hostUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01",
            "agentsIds": [
                "AGENT0"
            ],
            "logsUrl": "https://127.0.0.1:4494/api/v1/logs/b08e3c84905b4aed8718f42d2ecc523d",
            "isEnabled": true,
            "type": "LogFile",
            "logFile": {
                "format": "Tsv",
                "path": "C:\\ProgramData\\Netwrix\\Activity Monitor\\Agent\\ActivityLogs\\KDVM01_Log_.tsv",
                "archivePath": "",
                "periodToRetainLog": 10,
                "reportUserName": false,
                "reportUncPath": false,
                "addCToPath": true,
                "reportMilliseconds": true,
                "stealthAudit": true
            },
            "fileFilter": {
                "allowed": true,
                "denied": true,
                "cifs": true,
                "nfs": true,
                "read": true,
                "dirRead": false,
                "create": true,
                "dirCreate": true,
                "rename": true,
                "dirRename": true,
                "delete": true,
                "dirDelete": true,
                "update": true,
                "permission": true,
                "dirPermission": true,
                "attribute": true,
                "dirAttribute": true,
                "readOptimize": false,
                "shareAdd": false,
                "shareDelete": false,
                "shareUpdate": false,
                "sharePermission": false,
                "streamRead": true,
                "streamUpdate": true,
                "streamDelete": true,
                "streamAdd": true,
                "includePaths": [],
                "excludePaths": [],
                "excludeExtensions": [
                    ".TMP",
                    ".RCV",
                    ".DS_STORE",
                    ".POLICY",
                    ".MANIFEST",
                    ".LACCDB",
                    ".LDB"
                ],
                "excludeProcesses": [
                    "SBTService.exe",
                    "FPolicyServerSvc.exe",
                    "CelerraServerSvc.exe",
                    "FSACLoggingSvc.exe",
                    "HitachiService.exe",
                    "SIWindowsAgent.exe",
                    "SIGPOAgent.exe",
                    "LogProcessorSrv.exe",
                    "SearchIndexer.exe",
                    "WindowsSearch.exe",
                    "StealthAUDIT",
                    "MonitorService35.exe",
                    "MonitorService40.exe",
                    "MonitorService45.exe",
                    "Configuration.exe",
                    "ConfigurationAgent.exe",
                    "ConfigurationAgent.Grpc.Host.exe"
                ],
                "excludeReadProcesses": [],
                "excludeAccounts": [
                    "S-1-5-17",
                    "S-1-5-18",
                    "S-1-5-19",
                    "S-1-5-20"
                ],
                "filterGroups": false,
                "officeFiltering": false,
                "pathFilters": [
                    "-**\\~$*.DOC",
                    "-**\\~$*.DOCX",
                    "-**\\~$*.ODT",
                    "-**\\~$*.PPT",
                    "-**\\~$*.PPTX",
                    "-**\\~$*.PUB",
                    "-**\\~$*.RTF",
                    "-**\\~$*.TXT",
                    "-**\\~$*.WPS",
                    "-**\\~$*.XLSX",
                    "-**\\~$*.XSN",
                    "-**\\~$*.XML",
                    "-**\\~$*.DOCM",
                    "-**\\~$*.DOTX",
                    "-**\\~$*.DOTM",
                    "-**\\~$*.DOT",
                    "-**\\~$*.MHT",
                    "-**\\~$*.HTM",
                    "-**\\~$*.XLSM",
                    "-**\\~$*.XLSB",
                    "-**\\~$*.XLTX",
                    "-**\\~$*.XLTM",
                    "-**\\~$*.XLAM",
                    "-**\\~$*.ODS",
                    "-**\\~$*.PPTM",
                    "-**\\~$*.POTX",
                    "-**\\~$*.POTM",
                    "-**\\~$*.POT",
                    "-**\\~$*.THMX",
                    "-**\\~$*.PPSX",
                    "-**\\~$*.PPSM",
                    "-**\\~$*.PPS",
                    "-**\\~$*.ODP",
                    "-**\\~$*.PDF",
                    "-**\\~$*.XPS",
                    "-**\\.TEMPORARYITEMS\\**",
                    "-**\\~SNAPSHOT\\**",
                    "-**\\WATSONRC.DAT",
                    "-**\\DESKTOP.INI",
                    "-C:\\Windows\\**",
                    "-C:\\Program Files\\**",
                    "-C:\\Program Files (x86)\\**",
                    "-C:\\ProgramData\\**",
                    "-C:\\Documents and Settings\\**",
                    "-C:\\Users\\**"
                ],
                "discardPreviewSubfolderReads": true,
                "discardPreviewSubfolderReadsInterval": 10,
                "discardPreviewFileReads": false,
                "discardPreviewFileReadsInterval": 60,
                "discardPreviewFileReadsFilenames": [
                    "*.exe",
                    "*.url",
                    "*.lnk"
                ],
                "duplicateReadsInterval": 60
            },
            "comment": "",
            "managedBy": "",
            "windows": {
                "vssCreation": true,
                "vssDeletion": true,
                "vssActivity": true,
                "discardReorderedAcl": true,
                "discardInheritedAcl": false
            },
            "status": {
                "updatedAt": "2024-09-16T17:32:24.9987211Z",
                "type": "OK"
            },
            "statusHistoryUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01/outputs/b08e3c84905b4aed8718f42d2ecc523d/statusHistory",
            "altHost": "",
            "stats": {
                "reportedAt": "2024-09-16T16:33:13.803Z",
                "reportedCount": 0,
                "lastEventTime": "2024-09-16T16:33:13.803Z",
                "filesCount": 2,
                "filesSize": 1440,
                "archiveFilesCount": 0,
                "archiveFilesSize": 0
            }
        },
        {
            "id": "f20aa0a8b7de4961b8ea9016b0d5d579",
            "url": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01/outputs/f20aa0a8b7de4961b8ea9016b0d5d579",
            "hostId": "Windows-kdvm01",
            "hostUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01",
            "agentsIds": [
                "AGENT0"
            ],
            "isEnabled": true,
            "type": "Syslog",
            "syslog": {
                "reportUncPath": false,
                "addCToPath": true,
                "server": "192.168.2.1:514",
                "protocol": "UDP",
                "separator": "Lf",
                "template": "%SYSLOG_DATE% %HOST% LEEF:1.0|%COMPANY%|%PRODUCT%|%PRODUCT_VERSION%|%EVENT_SOURCE_TYPE%%CLASS_NAME%%EVENT_NAME%%SUCCESS%%BLOCKED_EVENT%|cat=%EVENT_NAME%\tdevTimeFormat=yyyy-MM-dd HH:mm:ss.SSS\tdevTime=%TIME_STAMP%\tSettingName=%SETTING_NAME%\tdomain=%EVENT_SOURCE_NAME%\tusrName=%PERPETRATOR%\tsrc=%ORIGINATING_CLIENT_IP%\tdst=%ORIGINATING_SERVER_IP%\tDistinguishedName=%FILE_PATH%\tAffectedObject=\tClassName=%CLASS_NAME%\tOrigServer=%ORIGINATING_SERVER%\tSuccess=%SUCCESS%\tBlocked=%BLOCKED_EVENT%\tAttrName=%ATTRIBUTE_NAME%\tAttrNewValue=%ATTRIBUTE_VALUE%\tAttrOldValue=%OLD_ATTRIBUTE_VALUE%\tOperation=%OPERATION%"
            },
            "fileFilter": {
                "allowed": true,
                "denied": true,
                "cifs": true,
                "nfs": true,
                "read": true,
                "dirRead": false,
                "create": true,
                "dirCreate": true,
                "rename": true,
                "dirRename": true,
                "delete": true,
                "dirDelete": true,
                "update": true,
                "permission": true,
                "dirPermission": true,
                "attribute": true,
                "dirAttribute": true,
                "readOptimize": false,
                "shareAdd": false,
                "shareDelete": false,
                "shareUpdate": false,
                "sharePermission": false,
                "streamRead": true,
                "streamUpdate": true,
                "streamDelete": true,
                "streamAdd": true,
                "includePaths": [],
                "excludePaths": [],
                "excludeExtensions": [
                    ".TMP",
                    ".RCV",
                    ".DS_STORE",
                    ".POLICY",
                    ".MANIFEST",
                    ".LACCDB",
                    ".LDB"
                ],
                "excludeProcesses": [
                    "SBTService.exe",
                    "FPolicyServerSvc.exe",
                    "CelerraServerSvc.exe",
                    "FSACLoggingSvc.exe",
                    "HitachiService.exe",
                    "SIWindowsAgent.exe",
                    "SIGPOAgent.exe",
                    "LogProcessorSrv.exe",
                    "SearchIndexer.exe",
                    "WindowsSearch.exe",
                    "StealthAUDIT",
                    "MonitorService35.exe",
                    "MonitorService40.exe",
                    "MonitorService45.exe",
                    "Configuration.exe",
                    "ConfigurationAgent.exe",
                    "ConfigurationAgent.Grpc.Host.exe"
                ],
                "excludeReadProcesses": [],
                "excludeAccounts": [
                    "S-1-5-17",
                    "S-1-5-18",
                    "S-1-5-19",
                    "S-1-5-20"
                ],
                "filterGroups": false,
                "officeFiltering": false,
                "pathFilters": [
                    "-**\\~$*.DOC",
                    "-**\\~$*.DOCX",
                    "-**\\~$*.ODT",
                    "-**\\~$*.PPT",
                    "-**\\~$*.PPTX",
                    "-**\\~$*.PUB",
                    "-**\\~$*.RTF",
                    "-**\\~$*.TXT",
                    "-**\\~$*.WPS",
                    "-**\\~$*.XLSX",
                    "-**\\~$*.XSN",
                    "-**\\~$*.XML",
                    "-**\\~$*.DOCM",
                    "-**\\~$*.DOTX",
                    "-**\\~$*.DOTM",
                    "-**\\~$*.DOT",
                    "-**\\~$*.MHT",
                    "-**\\~$*.HTM",
                    "-**\\~$*.XLSM",
                    "-**\\~$*.XLSB",
                    "-**\\~$*.XLTX",
                    "-**\\~$*.XLTM",
                    "-**\\~$*.XLAM",
                    "-**\\~$*.ODS",
                    "-**\\~$*.PPTM",
                    "-**\\~$*.POTX",
                    "-**\\~$*.POTM",
                    "-**\\~$*.POT",
                    "-**\\~$*.THMX",
                    "-**\\~$*.PPSX",
                    "-**\\~$*.PPSM",
                    "-**\\~$*.PPS",
                    "-**\\~$*.ODP",
                    "-**\\~$*.PDF",
                    "-**\\~$*.XPS",
                    "-**\\.TEMPORARYITEMS\\**",
                    "-**\\~SNAPSHOT\\**",
                    "-**\\WATSONRC.DAT",
                    "-**\\DESKTOP.INI",
                    "-C:\\Windows\\**",
                    "-C:\\Program Files\\**",
                    "-C:\\Program Files (x86)\\**",
                    "-C:\\ProgramData\\**",
                    "-C:\\Documents and Settings\\**",
                    "-C:\\Users\\**"
                ],
                "discardPreviewSubfolderReads": true,
                "discardPreviewSubfolderReadsInterval": 10,
                "discardPreviewFileReads": false,
                "discardPreviewFileReadsInterval": 60,
                "discardPreviewFileReadsFilenames": [
                    "*.exe",
                    "*.url",
                    "*.lnk"
                ],
                "duplicateReadsInterval": 60
            },
            "comment": "",
            "managedBy": "",
            "windows": {
                "vssCreation": true,
                "vssDeletion": true,
                "vssActivity": true,
                "discardReorderedAcl": true,
                "discardInheritedAcl": false
            },
            "status": {
                "updatedAt": "2024-09-16T17:32:24.9987211Z",
                "type": "OK"
            },
            "statusHistoryUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01/outputs/f20aa0a8b7de4961b8ea9016b0d5d579/statusHistory",
            "altHost": "",
            "stats": {
                "reportedCount": 0
            }
        }
    ],
    "outputsUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01/outputs",
    "agentsUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01/agents",
    "status": {
        "updatedAt": "2024-09-16T17:32:24.9987211Z",
        "type": "OK"
    },
    "statusHistoryUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01/statusHistory",
    "stats": {
        "receivedCount": 0,
        "lastEventTime": "2024-09-16T16:33:13.803Z"
    }
}
```

# Output

| Attribute                  | Type             | Detailed Only | Description                                                                                              |
| -------------------------- | ---------------- | ------------- | -------------------------------------------------------------------------------------------------------- |
| id                         | string           |               | ID of the output.                                                                                        |
| url                        | string           |               | Self URL                                                                                                 |
| hostId                     | string           |               | ID of the host that owns the output.                                                                     |
| hostUrl                    | string           |               | URL of the host that owns the output.                                                                    |
| agentsIds                  | string[]         |               | List of Agent IDs of the agents managing the output.                                                     |
| domainId                   | string           |               | AD only: ID of the owning domain                                                                         |
| domainUrl                  | string           |               | AD only: Link to the owning domain                                                                       |
| logsUrl                    | string           |               | Link to the file output log files (for the local agent only, that has the API Server running)            |
| isEnabled                  | bool             |               | Whether or not the output is enabled. If disabled, no activity is forwarded to it.                       |
| type                       | string           |               | `LogFile`,`Syslog`,`Amqp`                                                                                |
| logFile                    | FileOutput       |               | Log file settings                                                                                        |
| syslog                     | SyslogOutput     |               | Syslog settings                                                                                          |
| amqp                       | AmqpOutput       |               | AMQP/DEFEND settings                                                                                     |
| fileFilter                 | FileFilter       |               | Filtering settings for file activity                                                                     |
| sharePointFilter           | SharePointFilter |               | Filtering settings for SharePoint                                                                        |
| comment                    | string           |               | User's comment                                                                                           |
| managedBy                  | string           |               | Name of a product that manages this output, if not self managed by NAM Agent. Values: `StealthINTERCEPT` |
| windows                    | WindowsOptions   |               | Windows filtering settings                                                                               |
| status.updatedAt           | DateTime         |               | A timestamp when the status has changed to this value.                                                   |
| status.type                | string           |               | OK, Error, or Warning - indicates a type of the status.                                                  |
| status.summary             | string           |               | A user-friendly summary string of the status. May be empty for the OK type, non-empty otherwise.         |
| status.details             | string           |               | A user-friendly message that describes the status. May be empty.                                         |
| statusHistoryUrl           | string           |               | URL of the output's status history.                                                                      |
| altHost                    | string           |               | A hostname that is reported in the activity events instead of the real hostname.                         |
| stats.reportedAt           | DateTime         |               | Timestamp indicating the last time when an event was reported to the Output.                             |
| stats.reportedCount        | long             |               | Total number of events reported to the Output.                                                           |
| stats.lastEventTime        | DateTime         |               | The most recent timestamp among all reported events to the Output.                                       |
| stats.filesCount           | int              |               | Number of log files on the agent's server.                                                               |
| stats.filesSize            | long             |               | Total size of log files on the agent's server.                                                           |
| stats.archiveFilesCount    | int              |               | Number of log files in the archival location.                                                            |
| stats.archiveFilesSize     | long             |               | Total size of log files in the archival location.                                                        |
| stats.archiveLastEventTime | DateTime         |               | The most recent timestamp in the recently archived log file.                                             |

## FileOutput

| Attribute          | Type   | Detailed Only | Description                                                                           |
| ------------------ | ------ | ------------- | ------------------------------------------------------------------------------------- |
| format             | string |               | `Tsv`, `Json`                                                                         |
| path               | string |               | Log file path on the agent's drive. Timestamp is added before the extension.          |
| archivePath        | string |               | Log file path in the archival location (UNC path)                                     |
| periodToRetainLog  | int    |               | Number of days to keep the log files alive both on the local drive and in the archive |
| reportUserName     | bool   |               | Resolve and report user name                                                          |
| reportUncPath      | bool   |               | Report UNC paths in addition to local/native paths                                    |
| addCToPath         | bool   |               | Prepend the path `C:\` and change the forward slashes to backslashes.                 |
| reportMilliseconds | bool   |               | Report events' time with milliseconds                                                 |
| stealthAudit       | bool   |               | The file was marked for consumption by Access Analyzer                                |

## SyslogOutput

| Attribute     | Type   | Detailed Only | Description                                                           |
| ------------- | ------ | ------------- | --------------------------------------------------------------------- |
| server        | string |               | Hostname/address of the syslog server in the format HOST:PORT.        |
| protocol      | string |               | `UDP`, `TCP`, `TLS`                                                   |
| separator     | string |               | `Lf`,Cr, `CrLf`, `Nul`, `Rfc5425`                                     |
| reportUncPath | bool   |               | Report UNC paths in addition to local/native paths                    |
| addCToPath    | bool   |               | Prepend the path `C:\` and change the forward slashes to backslashes. |
| template      | string |               | Text of the syslog template that is currently set to be used.         |

## AmqpOutput

| Attribute | Type   | Detailed Only | Description                                                                                                                         |
| --------- | ------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| server    | string |               | Hostname/address of the AMQP server or the Threat Manager server and the port in the SERVER:PORT format                             |
| userName  | string |               | User name for the AMQP connection, if needed. ForThreat Managerintegration, use an empty string.                                    |
| password  | string |               | Password / App Token for the AMQP connection. Password / App Token is not exposed.                                                  |
| queue     | string |               | Message queue name to post events to. ForThreat Manager integration, use an empty string.                                           |
| exchange  | string |               | Exchange name to post events to. ForThreat Manager integration, use "StealthINTERCEPT" for domain outputs or "AM" for host outputs. |
| vhost     | string |               | Virtual Host name, if needed. ForThreat Managerintegration, use an empty string.                                                    |

## FileFilter

| Attribute                            | Type     | Detailed Only | Description                                                                     |
| ------------------------------------ | -------- | ------------- | ------------------------------------------------------------------------------- |
| allowed                              | bool     |               |                                                                                 |
| denied                               | bool     |               |                                                                                 |
| cifs                                 | bool     |               |                                                                                 |
| nfs                                  | bool     |               |                                                                                 |
| read                                 | bool     |               |                                                                                 |
| dirRead                              | bool     |               |                                                                                 |
| create                               | bool     |               |                                                                                 |
| dirCreate                            | bool     |               |                                                                                 |
| rename                               | bool     |               |                                                                                 |
| dirRename                            | bool     |               |                                                                                 |
| delete                               | bool     |               |                                                                                 |
| dirDelete                            | bool     |               |                                                                                 |
| update                               | bool     |               |                                                                                 |
| permission                           | bool     |               |                                                                                 |
| dirPermission                        | bool     |               |                                                                                 |
| attribute                            | bool     |               |                                                                                 |
| dirAttribute                         | bool     |               |                                                                                 |
| readOptimize                         | bool     |               | Suppress subsequent read operations in the same folder, by the same user.       |
| shareAdd                             | bool     |               |                                                                                 |
| shareDelete                          | bool     |               |                                                                                 |
| shareUpdate                          | bool     |               |                                                                                 |
| sharePermission                      | bool     |               |                                                                                 |
| streamRead                           | bool     |               | Reads of Alternate Data Streams.                                                |
| streamUpdate                         | bool     |               | Updates of Alternate Data Streams.                                              |
| streamDelete                         | bool     |               | Deletes of Alternate Data Streams.                                              |
| streamAdd                            | bool     |               | Adds of Alternate Data Streams.                                                 |
| includePaths                         | string[] |               | Depreciated. This has been replaced by 'pathFilters'.                           |
| excludePaths                         | string[] |               | Depreciated. This has been replaced by 'pathFilters'.                           |
| excludeExtensions                    | string[] |               |                                                                                 |
| excludeProcesses                     | string[] |               |                                                                                 |
| excludeReadProccesses                | string[] |               |                                                                                 |
| excludeAccounts                      | string[] |               |                                                                                 |
| filterGroups                         | bool     |               | Process group membership when filtering.                                        |
| officeFiltering                      | bool     |               | Suppress Microsoft Office and other applications operations on temporary files. |
| pathFilters                          | string[] |               | List of paths to include and exclude.                                           |
| discardPreviewSubfolderReads         | bool     |               |                                                                                 |
| discardPreviewSubfolderReadsInterval | int      |               |                                                                                 |
| discardPreviewFileReads              | bool     |               |                                                                                 |
| discardPreviewFileReadsInterval      | int      |               |                                                                                 |
| discardPreviewFileReadsFilenames     | string[] |               |                                                                                 |
| duplicateReadsInterval               | int      |               |                                                                                 |

## SharePointFilter

| Attribute       | Type     | Detailed Only | Description |
| --------------- | -------- | ------------- | ----------- |
| operations      | string[] |               |             |
| includeUrls     | string[] |               |             |
| excludeUrls     | string[] |               |             |
| excludeAccounts | string[] |               |             |

## WindowsOptions

| Attribute           | Type | Detailed Only | Description |
| ------------------- | ---- | ------------- | ----------- |
| vssCreation         | bool |               |             |
| vssDeletion         | bool |               |             |
| vssActivity         | bool |               |             |
| discardReorderedAcl | bool |               |             |
| discardInheritedAcl | bool |               |             |

Response Example

```
{
    "id": "fcf4ad5d951548f0af10a8909c9cc284",
    "url": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm02/outputs/fcf4ad5d951548f0af10a8909c9cc284",
    "hostId": "Windows-kdvm02",
    "hostUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm02",
    "agentsIds": [
        "AGENT2"
    ],
    "isEnabled": false,
    "type": "LogFile",
    "logFile": {
        "format": "Tsv",
        "path": "C:\\ProgramData\\Netwrix\\Activity Monitor\\Agent\\ActivityLogs\\KDVM02_Log_.tsv",
        "archivePath": "",
        "periodToRetainLog": 10,
        "reportUserName": false,
        "reportUncPath": false,
        "addCToPath": true,
        "reportMilliseconds": true,
        "stealthAudit": true
    },
    "fileFilter": {
        "allowed": true,
        "denied": true,
        "cifs": true,
        "nfs": true,
        "read": true,
        "dirRead": false,
        "create": true,
        "dirCreate": true,
        "rename": true,
        "dirRename": true,
        "delete": true,
        "dirDelete": true,
        "update": true,
        "permission": true,
        "dirPermission": true,
        "attribute": true,
        "dirAttribute": true,
        "readOptimize": false,
        "shareAdd": false,
        "shareDelete": false,
        "shareUpdate": false,
        "sharePermission": false,
        "streamRead": true,
        "streamUpdate": true,
        "streamDelete": true,
        "streamAdd": true,
        "includePaths": [],
        "excludePaths": [],
        "excludeExtensions": [
            ".TMP",
            ".RCV",
            ".DS_STORE",
            ".POLICY",
            ".MANIFEST",
            ".LACCDB",
            ".LDB"
        ],
        "excludeProcesses": [
            "SBTService.exe",
            "FPolicyServerSvc.exe",
            "CelerraServerSvc.exe",
            "FSACLoggingSvc.exe",
            "HitachiService.exe",
            "SIWindowsAgent.exe",
            "SIGPOAgent.exe",
            "LogProcessorSrv.exe",
            "SearchIndexer.exe",
            "WindowsSearch.exe",
            "StealthAUDIT",
            "MonitorService35.exe",
            "MonitorService40.exe",
            "MonitorService45.exe",
            "Configuration.exe",
            "ConfigurationAgent.exe",
            "ConfigurationAgent.Grpc.Host.exe"
        ],
        "excludeReadProcesses": [],
        "excludeAccounts": [
            "S-1-5-17",
            "S-1-5-18",
            "S-1-5-19",
            "S-1-5-20"
        ],
        "filterGroups": false,
        "officeFiltering": false,
        "pathFilters": [
            "-**\\~$*.DOC",
            "-**\\~$*.DOCX",
            "-**\\~$*.ODT",
            "-**\\~$*.PPT",
            "-**\\~$*.PPTX",
            "-**\\~$*.PUB",
            "-**\\~$*.RTF",
            "-**\\~$*.TXT",
            "-**\\~$*.WPS",
            "-**\\~$*.XLSX",
            "-**\\~$*.XSN",
            "-**\\~$*.XML",
            "-**\\~$*.DOCM",
            "-**\\~$*.DOTX",
            "-**\\~$*.DOTM",
            "-**\\~$*.DOT",
            "-**\\~$*.MHT",
            "-**\\~$*.HTM",
            "-**\\~$*.XLSM",
            "-**\\~$*.XLSB",
            "-**\\~$*.XLTX",
            "-**\\~$*.XLTM",
            "-**\\~$*.XLAM",
            "-**\\~$*.ODS",
            "-**\\~$*.PPTM",
            "-**\\~$*.POTX",
            "-**\\~$*.POTM",
            "-**\\~$*.POT",
            "-**\\~$*.THMX",
            "-**\\~$*.PPSX",
            "-**\\~$*.PPSM",
            "-**\\~$*.PPS",
            "-**\\~$*.ODP",
            "-**\\~$*.PDF",
            "-**\\~$*.XPS",
            "-**\\.TEMPORARYITEMS\\**",
            "-**\\~SNAPSHOT\\**",
            "-**\\WATSONRC.DAT",
            "-**\\DESKTOP.INI",
            "-C:\\Windows\\**",
            "-C:\\Program Files\\**",
            "-C:\\Program Files (x86)\\**",
            "-C:\\ProgramData\\**",
            "-C:\\Documents and Settings\\**",
            "-C:\\Users\\**"
        ],
        "discardPreviewSubfolderReads": true,
        "discardPreviewSubfolderReadsInterval": 10,
        "discardPreviewFileReads": false,
        "discardPreviewFileReadsInterval": 60,
        "discardPreviewFileReadsFilenames": [
            "*.exe",
            "*.url",
            "*.lnk"
        ],
        "duplicateReadsInterval": 60
    },
    "comment": "",
    "managedBy": "",
    "windows": {
        "vssCreation": true,
        "vssDeletion": true,
        "vssActivity": true,
        "discardReorderedAcl": true,
        "discardInheritedAcl": false
    },
    "status": {
        "updatedAt": "2024-10-01T18:46:00.6768171Z",
        "type": "OK",
        "summary": "OK",
        "details": "OK"
    },
    "statusHistoryUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm02/outputs/fcf4ad5d951548f0af10a8909c9cc284/statusHistory",
    "altHost": "",
    "stats": {
        "reportedAt": "2024-09-30T18:49:12.282Z",
        "reportedCount": 12,
        "lastEventTime": "2024-09-30T18:49:12.282Z",
        "filesCount": 1,
        "filesSize": 2204,
        "archiveFilesCount": 0,
        "archiveFilesSize": 0
    }
}
```

## File

| Attribute    | Type     | Detailed Only | Description                                                                                     |
| ------------ | -------- | ------------- | ----------------------------------------------------------------------------------------------- |
| id           | string   |               | Activity Log File ID.                                                                           |
| size         | int      |               | File size in bytes                                                                              |
| localPath    | string   |               | File path on the local disk                                                                     |
| isZip        | bool     |               | Is it a Zip archive                                                                             |
| isArchived   | bool     |               | Determines whether the file is on a local drive of the agent or moved to the archival location. |
| type         | string   |               | `Tsv`, `Json`                                                                                   |
| updatedAt    | DateTime |               | Last time the file was updated                                                                  |
| activityFrom | DateTime |               | Activity events in the file are not younger than the date.                                      |
| activityTo   | DateTime |               | Activity events in the file are not older than the date.                                        |
| outputId     | string   |               | ID of the output that produced the file.                                                        |
| contentUrl   | string   |               | Link to the file content. MIME type `application/x-msdownload`                                  |

Response Example

```
[
    {
        "id": "localhost_Log_20190410_000000.tsv",
        "size": 81658576,
        "localPath": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\localhost_Log_20190410_000000.tsv",
        "isZip": false,
        "isArchived": false,
        "type": "Tsv",
        "updatedAt": "2019-04-10T17:45:07.2211753Z",
        "activityFrom": "2019-04-05T18:16:57",
        "activityTo": "2019-04-10T17:45:07",
        "outputId": "9c90791891774715bdb3415823790d7c",
        "contentUrl": "https://localhost:4494/api/v1/logs/get/localhost_Log_20190410_000000.tsv"
    },
    {
        "id": "localhost_Log_20190401_000000.tsv.zip",
        "size": 11,
        "localPath": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\localhost_Log_20190401_000000.tsv.zip",
        "isZip": true,
        "isArchived": false,
        "type": "Tsv",
        "updatedAt": "2019-04-10T02:03:48.8899252Z",
        "activityFrom": "0001-01-01T00:00:00",
        "activityTo": "2019-04-10T02:03:48.8879242Z",
        "outputId": "9c90791891774715bdb3415823790d7c",
        "contentUrl": "https://localhost:4494/api/v1/logs/get/localhost_Log_20190401_000000.tsv.zip"
    },
  {
    "id": "localhost_Log_20190405.tsv.zip",
    "size": 295102,
    "localPath": "\\\\WRKST0100\\SBACTIVITYLOGS\\WRKST0100\\WRKST0100_9c907918-9177-4715-bdb3-415823790d7c\\localhost_Log_20190405.tsv.zip",
    "isZip": true,
    "isArchived": true,
    "type": "Tsv",
    "updatedAt": "2019-04-05T20:59:55.1462518Z",
    "activityFrom": "2019-04-05T18:16:57",
    "activityTo": "2019-04-05T20:59:55",
    "outputId": "9c90791891774715bdb3415823790d7c",
    "contentUrl": "https://localhost:4494/api/v1/logs/archive/get/WRKST0100/WRKST0100_9c907918-9177-4715-bdb3-415823790d7c/localhost_Log_20190405.tsv.zip"
  }
]

```

## Policy

| Attribute   | Type     | Detailed Only | Read-Only | Description                                                                           |
| ----------- | -------- | ------------- | --------- | ------------------------------------------------------------------------------------- |
| id          | string   |               | X         | Policy ID.                                                                            |
| url         | string   |               | X         | Self URL.                                                                             |
| name        | string   |               |           | Policy name.                                                                          |
| description | string   |               |           | Policy description.                                                                   |
| path        | string   |               |           | Policy location.                                                                      |
| guid        | string   |               | X         | Policy GUID.                                                                          |
| isEnabled   | bool     |               |           | Whether the policy is enabled.                                                        |
| updatedAt   | DateTime |               | X         | When the policy was last modified.                                                    |
| xml         | string   |               |           | Policy body in XML format. It's the same format used by Threat Prevention Powershell. |

Response Example

```
[
    {
        "id": "1000",
        "url": "https://127.0.0.1:4494/api/v1/domains/KDUD1/policies/1000",
        "name": "SAM AD Changes",
        "description": "",
        "path": "Policies\\Auditing",
        "guid": "56abcb01-0248-4f9c-8e61-aaeb8a30b5ff",
        "isEnabled": true,
        "updatedAt": "2024-08-22T19:05:31.22",
        "xml": "<?xml version=\"1.0\" encoding=\"utf-16\"?>\r\n<AdConfigPolicy xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" id=\"1000\" enabled=\"true\" enabledHint=\"ManualSwitch\" name=\"SAM AD Changes\" path=\"Policies\\Auditing\" builtIn=\"false\" odbcEnabled=\"true\" syslogEnabled=\"false\" emailAlertingEnabled=\"false\" emailLimiterEnabled=\"true\" emailLimiterMode=\"1\" emailLimiterInterval=\"15\" createdBy=\"SAM\" createdOn=\"2024-08-21T19:14:26.724\" modifiedBy=\"KDDC01$\" modifiedOn=\"2024-08-22T19:05:31.220\" owner=\"KDDC01$\" guid=\"56abcb01-0248-4f9c-8e61-aaeb8a30b5ff\" description=\"\" templateCategory=\"\" policyType=\"kNvMonitor\" ldapPolicyRunDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyEndDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyStarted=\"false\" eventSinks=\"{'SAM':{'url':'amqp://localhost:4499','login':'G59/xvKl2Guna0By1UCduG3otKlbUBJD','password':'9TCPAXDkl6IIyx+SvmBNlw=='}}\" eventConsumers=\"\">\r\n  <linkedReports />\r\n  <schedule enabled=\"false\" origin=\"Server\" />\r\n  <registration eventSource=\"AD\" enabled=\"true\" name=\"Active Directory Changes\" description=\"\" erTypeIds=\"1400\">\r\n    <filter type=\"successFailure\" success=\"true\" failure=\"true\" />\r\n    <filter type=\"hostFrom\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"windowsPerpetrator\">\r\n      <enableForgedPAC>false</enableForgedPAC>\r\n      <includeList />\r\n      <excludeList />\r\n      <includeRIDs />\r\n    </filter>\r\n    <filter type=\"windowsObject\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"windowsAdEvents\">\r\n      <eventTypeFilter>\r\n        <item>Object Added</item>\r\n        <item>Object Modified</item>\r\n        <item>Object Deleted</item>\r\n        <item>Object Moved/Renamed</item>\r\n      </eventTypeFilter>\r\n    </filter>\r\n    <filter type=\"windowsAttr\">\r\n      <includeList />\r\n      <excludeList />\r\n      <includeAttributesList />\r\n      <excludeAttributesList />\r\n    </filter>\r\n    <filter type=\"windowsClass\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"windowsContext\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"ipAddressFrom\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"windowsDomain\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n  </registration>\r\n</AdConfigPolicy>"
    },
    {
        "id": "1001",
        "url": "https://127.0.0.1:4494/api/v1/domains/KDUD1/policies/1001",
        "name": "SAM Authentication",
        "description": "",
        "path": "Policies\\Auditing",
        "guid": "b3d5397b-ef67-4d72-860c-4efa311ad37f",
        "isEnabled": false,
        "updatedAt": "2024-08-22T19:05:31.251",
        "xml": "<?xml version=\"1.0\" encoding=\"utf-16\"?>\r\n<AdConfigPolicy xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" id=\"1001\" enabled=\"false\" name=\"SAM Authentication\" path=\"Policies\\Auditing\" builtIn=\"false\" odbcEnabled=\"true\" syslogEnabled=\"false\" emailAlertingEnabled=\"false\" emailLimiterEnabled=\"true\" emailLimiterMode=\"1\" emailLimiterInterval=\"15\" createdBy=\"SAM\" createdOn=\"2024-08-21T19:14:26.730\" modifiedBy=\"KDDC01$\" modifiedOn=\"2024-08-22T19:05:31.251\" owner=\"KDDC01$\" guid=\"b3d5397b-ef67-4d72-860c-4efa311ad37f\" description=\"\" templateCategory=\"\" policyType=\"kNvMonitor\" ldapPolicyRunDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyEndDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyStarted=\"false\" eventSinks=\"{'SAM':{'url':'amqp://localhost:4499','login':'G59/xvKl2Guna0By1UCduG3otKlbUBJD','password':'9TCPAXDkl6IIyx+SvmBNlw=='}}\" eventConsumers=\"\">\r\n  <linkedReports />\r\n  <schedule enabled=\"false\" origin=\"Server\" />\r\n  <registration eventSource=\"AD\" enabled=\"false\" name=\"Authentication Monitor\" description=\"\" erTypeIds=\"1409\">\r\n    <filter type=\"successFailure\" success=\"true\" failure=\"true\" />\r\n    <filter type=\"authProtocol\" protocol=\"0\" n2password=\"false\" remote_login=\"false\" local_login=\"false\" password_expired=\"false\" />\r\n    <filter type=\"windowsPerpetrator\">\r\n      <enableForgedPAC>false</enableForgedPAC>\r\n      <includeList />\r\n      <excludeList />\r\n      <includeRIDs>\r\n        <item rid=\"512\" />\r\n        <item rid=\"518\" />\r\n        <item rid=\"519\" />\r\n      </includeRIDs>\r\n    </filter>\r\n    <filter type=\"hostTo\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"hostFrom\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"ipAddressTo\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"ipAddressFrom\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"windowsDomain\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n  </registration>\r\n</AdConfigPolicy>"
    },
    {
        "id": "1002",
        "url": "https://127.0.0.1:4494/api/v1/domains/KDUD1/policies/1002",
        "name": "SAM Ldap Monitor",
        "description": "",
        "path": "Policies\\Auditing",
        "guid": "b119a08c-5304-45b1-b981-22023a113690",
        "isEnabled": false,
        "updatedAt": "2024-08-22T19:05:31.251",
        "xml": "<?xml version=\"1.0\" encoding=\"utf-16\"?>\r\n<AdConfigPolicy xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" id=\"1002\" enabled=\"false\" name=\"SAM Ldap Monitor\" path=\"Policies\\Auditing\" builtIn=\"false\" odbcEnabled=\"true\" syslogEnabled=\"false\" emailAlertingEnabled=\"false\" emailLimiterEnabled=\"true\" emailLimiterMode=\"1\" emailLimiterInterval=\"15\" createdBy=\"SAM\" createdOn=\"2024-08-21T19:14:26.732\" modifiedBy=\"KDDC01$\" modifiedOn=\"2024-08-22T19:05:31.251\" owner=\"KDDC01$\" guid=\"b119a08c-5304-45b1-b981-22023a113690\" description=\"\" templateCategory=\"\" policyType=\"kNvMonitor\" ldapPolicyRunDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyEndDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyStarted=\"false\" eventSinks=\"{'SAM':{'url':'amqp://localhost:4499','login':'G59/xvKl2Guna0By1UCduG3otKlbUBJD','password':'9TCPAXDkl6IIyx+SvmBNlw=='}}\" eventConsumers=\"\">\r\n  <linkedReports />\r\n  <schedule enabled=\"false\" origin=\"Server\" />\r\n  <registration eventSource=\"LDAP\" enabled=\"false\" name=\"LDAP Monitoring\" description=\"\" erTypeIds=\"1701\">\r\n    <filter type=\"ldapmQuerry\">\r\n      <includeList />\r\n    </filter>\r\n    <filter type=\"successFailure\" success=\"true\" failure=\"true\" />\r\n    <filter type=\"windowsPerpetrator\">\r\n      <enableForgedPAC>false</enableForgedPAC>\r\n      <includeList />\r\n      <excludeList />\r\n      <includeRIDs />\r\n    </filter>\r\n    <filter type=\"ldapmResult\">\r\n      <includeList />\r\n    </filter>\r\n    <filter type=\"hostFrom\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"LdapRule\">\r\n      <overrideRule>false</overrideRule>\r\n    </filter>\r\n    <filter type=\"windowsDomain\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n  </registration>\r\n</AdConfigPolicy>"
    },
    {
        "id": "1003",
        "url": "https://127.0.0.1:4494/api/v1/domains/KDUD1/policies/1003",
        "name": "SAM LSASS Guardian",
        "description": "",
        "path": "Policies\\Auditing",
        "guid": "409b77be-f0c2-4ba9-9fb9-d17d2c19084a",
        "isEnabled": false,
        "updatedAt": "2024-08-22T19:05:31.251",
        "xml": "<?xml version=\"1.0\" encoding=\"utf-16\"?>\r\n<AdConfigPolicy xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" id=\"1003\" enabled=\"false\" name=\"SAM LSASS Guardian\" path=\"Policies\\Auditing\" builtIn=\"false\" odbcEnabled=\"true\" syslogEnabled=\"false\" emailAlertingEnabled=\"false\" emailLimiterEnabled=\"true\" emailLimiterMode=\"1\" emailLimiterInterval=\"15\" createdBy=\"SAM\" createdOn=\"2024-08-21T19:14:26.733\" modifiedBy=\"KDDC01$\" modifiedOn=\"2024-08-22T19:05:31.251\" owner=\"KDDC01$\" guid=\"409b77be-f0c2-4ba9-9fb9-d17d2c19084a\" description=\"\" templateCategory=\"\" policyType=\"kNvMonitor\" ldapPolicyRunDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyEndDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyStarted=\"false\" eventSinks=\"{'SAM':{'url':'amqp://localhost:4499','login':'G59/xvKl2Guna0By1UCduG3otKlbUBJD','password':'9TCPAXDkl6IIyx+SvmBNlw=='}}\" eventConsumers=\"\">\r\n  <linkedReports />\r\n  <schedule enabled=\"false\" origin=\"Server\" />\r\n  <registration eventSource=\"AD\" enabled=\"false\" name=\"LSASS Guardian - Monitor\" description=\"\" erTypeIds=\"1802\">\r\n    <filter type=\"windowsPerpetrator\">\r\n      <enableForgedPAC>false</enableForgedPAC>\r\n      <includeList />\r\n      <excludeList />\r\n      <includeRIDs />\r\n    </filter>\r\n    <filter type=\"windowsProcess\">\r\n      <includeList />\r\n      <excludeList>\r\n        <item>MsMpEng.exe</item>\r\n        <item>svchost.exe</item>\r\n        <item>VsTskMgr.exe</item>\r\n        <item>WmiPrvSE.exe</item>\r\n        <item>scan64.exe</item>\r\n        <item>mcshield.exe</item>\r\n      </excludeList>\r\n    </filter>\r\n    <filter type=\"windowsOpenProcessFlags\">3</filter>\r\n    <filter type=\"windowsDomain\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n  </registration>\r\n</AdConfigPolicy>"
    },
    {
        "id": "1004",
        "url": "https://127.0.0.1:4494/api/v1/domains/KDUD1/policies/1004",
        "name": "SAM Replication",
        "description": "",
        "path": "Policies\\Auditing",
        "guid": "e6feb176-8a14-4a61-914b-6c864babd55a",
        "isEnabled": false,
        "updatedAt": "2024-08-22T19:05:31.251",
        "xml": "<?xml version=\"1.0\" encoding=\"utf-16\"?>\r\n<AdConfigPolicy xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" id=\"1004\" enabled=\"false\" name=\"SAM Replication\" path=\"Policies\\Auditing\" builtIn=\"false\" odbcEnabled=\"true\" syslogEnabled=\"false\" emailAlertingEnabled=\"false\" emailLimiterEnabled=\"true\" emailLimiterMode=\"1\" emailLimiterInterval=\"15\" createdBy=\"SAM\" createdOn=\"2024-08-21T19:14:26.734\" modifiedBy=\"KDDC01$\" modifiedOn=\"2024-08-22T19:05:31.251\" owner=\"KDDC01$\" guid=\"e6feb176-8a14-4a61-914b-6c864babd55a\" description=\"\" templateCategory=\"\" policyType=\"kNvMonitor\" ldapPolicyRunDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyEndDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyStarted=\"false\" eventSinks=\"{'SAM':{'url':'amqp://localhost:4499','login':'G59/xvKl2Guna0By1UCduG3otKlbUBJD','password':'9TCPAXDkl6IIyx+SvmBNlw=='}}\" eventConsumers=\"\">\r\n  <linkedReports />\r\n  <schedule enabled=\"false\" origin=\"Server\" />\r\n  <registration eventSource=\"AD\" enabled=\"false\" name=\"AD Replication Monitoring\" description=\"\" erTypeIds=\"1801\">\r\n    <filter type=\"hostFrom\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"windowsPerpetrator\">\r\n      <enableForgedPAC>false</enableForgedPAC>\r\n      <includeList />\r\n      <excludeList />\r\n      <includeRIDs />\r\n    </filter>\r\n    <filter type=\"windowsDomain\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n  </registration>\r\n</AdConfigPolicy>"
    }
]
```
