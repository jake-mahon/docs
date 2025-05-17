---
sidebar_position: 2590
title: Update Credential Passwords
---

# Update Credential Passwords

Credential passwords occasionally need to be updated due to various reasons, such as security policies that require passwords to be reset on a regular basis. The following types of credentials may be impacted by password changes or security policies:

* Agent and Domain Controller User Account
* Archive User Account
* Panzura MQ Protection
* Monitored Host User Account
* Active Directory Domain / DC User Account
* Agent Inactivity Alerts Email Credentials
* Monitored Host Inactivity Alerts Email Credentials

## Agent and Domain Controller User Account

The Active Directory Domain / DC User Account is used to run the actions performed by the agent. The account can be updated in the agent properties under the **Connection** tab.

**NOTE:** If the AD monitoring account is changed, all accounts on the domain controllers will need to be updated as well.

![Agent User Account Credentials](../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/Properties/CredentialAccounts/AgentUserAccount.png "Agent User Account Credentials")

See the [Connection Tab](../Admin/Agents/Properties/Connection "Connection Tab") topic for additional information.

## Archive User Account

The Archive User Account is used to store log files from the agent and store them on a remote server or share. The credentials can be updated in the agent properties under the **Archiving** tab.

![Archive User Account Credentials](../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/Properties/CredentialAccounts/ArchiveUserAccount.png "Archive User Account Credentials")

See the [Archiving Tab](../Admin/Agents/Properties/Archiving "Archiving Tab") topic for additional information.

## Panzura MQ Protection

The Panzura MQ Protection Credentials are used to send activity to the Activity Monitor agent. The credentials can be updated in the agent properties under the **Panzura** tab.

![Panzura MQ Protection Account Credentials](../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/Properties/CredentialAccounts/PanzuraMQProtectionAccount.png "Panzura MQ Protection Account Credentials")

See the [Panzura Tab](../Admin/Agents/Properties/Panzura "Panzura Tab") topic for additional information.

## Monitored Host User Credentials

The Monitored Host User Credentials is used to connect to the monitored host device and send activity to the agent. The credentials can be updated in monitored host properties. Select a host under the **Monitored Host** tab. Then, click the **Edit** button to update the account credentials.

![Monitored Host User Account](../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/Properties/CredentialAccounts/MonitoredHostUserAccount.png "Monitored Host User Account")

See the [Nutanix Tab](../Admin/MonitoredHosts/Properties/Nutanix "Nutanix Tab") topic for additional information.

## Agent Inactivity Alerts Email Account

The Agent Inactivity Alerts Email Account is used to automate email alerts for inactivity detected by the agent. It can be updated in agent properties under **Inactivity Alerts** tab then Email Alerts. This can also be changed in the monitored host properties.

![](../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/Properties/CredentialAccounts/AgentInactivityAlertsEmailCredentials.png)

See the [Inactivity Alerts Tab](../Admin/Agents/Properties/InactivityAlerts "Inactivity Alerts Tab") topic for additional information.

## Monitored Host Inactivity Alerts Email Account

The Monitored Host Inactivity Alerts Email Account are used to automate email alerts for inactivity detected by the monitored host. The credentials can be updated in the monitored **Host Properties**.

![Monitored Host Inactivity Alerts Email Credentials Page](../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/ActivityMonitor/Properties/CredentialAccounts/MonitoredHostInactivityAlertsEmailCredentials.png "Monitored Host Inactivity Alerts Email Credentials Page")

See the [Inactivity Alerts Tab](../Admin/MonitoredHosts/Properties/InactivityAlerts "Inactivity Alerts Tab") topic for additional information.