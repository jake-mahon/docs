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

![Agent User Account Credentials](/img/versioned_docs/activitymonitor_7.1/activitymonitor/troubleshooting/agentuseraccount.png)

See the
[Connection Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/properties/connection.md)
topic for additional information.

## Archive User Account

The Archive User Account is used to store log files from the agent and store them on a remote server
or share. The credentials can be updated in the agent properties under the **Archiving** tab.

![Archive User Account Credentials](/img/versioned_docs/activitymonitor_7.1/activitymonitor/troubleshooting/archiveuseraccount.png)

See the
[Archiving Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/properties/archiving.md)
topic for additional information.

## Panzura MQ Protection

The Panzura MQ Protection Credentials are used to send activity to the Activity Monitor agent. The
credentials can be updated in the agent properties under the **Panzura** tab.

![Panzura MQ Protection Account Credentials](/img/versioned_docs/activitymonitor_7.1/activitymonitor/troubleshooting/panzuramqprotectionaccount.png)

See the
[Panzura Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/properties/panzura.md)
topic for additional information.

## Monitored Host User Credentials

The Monitored Host User Credentials is used to connect to the monitored host device and send
activity to the agent. The credentials can be updated in monitored host properties. Select a host
under the **Monitored Host** tab. Then, click the **Edit** button to update the account credentials.

![Monitored Host User Account](/img/versioned_docs/activitymonitor_7.1/activitymonitor/troubleshooting/monitoredhostuseraccount.png)

See the
[Nutanix Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/properties/nutanix.md)
topic for additional information.

## Agent Inactivity Alerts Email Account

The Agent Inactivity Alerts Email Account is used to automate email alerts for inactivity detected
by the agent. It can be updated in agent properties under **Inactivity Alerts** tab then Email
Alerts. This can also be changed in the monitored host properties.

![agentinactivityalertsemailcredentials](/img/versioned_docs/activitymonitor_7.1/activitymonitor/troubleshooting/agentinactivityalertsemailcredentials.png)

See the
[Inactivity Alerts Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/properties/inactivityalerts.md)
topic for additional information.

## Monitored Host Inactivity Alerts Email Account

The Monitored Host Inactivity Alerts Email Account are used to automate email alerts for inactivity
detected by the monitored host. The credentials can be updated in the monitored **Host Properties**.

![Monitored Host Inactivity Alerts Email Credentials Page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/troubleshooting/monitoredhostinactivityalertsemailcredentials.png)

See the
[Inactivity Alerts Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/properties/inactivityalerts.md)
topic for additional information.
