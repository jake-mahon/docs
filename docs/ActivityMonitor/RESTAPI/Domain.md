---
id: domain
title: Domain
---

# Domain

| Attribute | Type | Detailed Only | Description |
| --- | --- | --- | --- |
| id | string | | Domain ID |
| url | string | | Self URL |
| name | string | | Domain NETBIOS name |
| managedBySI | bool | | Whether the monitoring configuration is managed by Threat Prevention or Activity Monitor |
| outputsUrl | string | | URL to domain outputs |
| agentsUrl | string | | URL to domain controllers |
| masterAgentId | string | | ID of the Master agent - the one whose configuration is considered the master one. |
| masterAgentUrl | string | | URL to the Master agent. |
| policies | policy[] | | Domain Policies. The list of policies for the domain. |

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
                "path": "C:\\ProgramData\\\Netwrix\\Activity Monitor\\Agent\\ActivityLogs\\KDUD1_Log_.json",
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
`