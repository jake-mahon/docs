# Linux Agent Deployment

Understanding Linux File Activity Monitoring

The Activity Monitor can be configured to monitor the following:

- Ability to collect all or specific file activity for specific values or specific combinations of values

It also provides the ability to feed activity data to other Netwrix products:

- Netwrix Enterprise Auditor
- Netwrix Threat Manager

Prior to adding a Windows host to the Activity Monitor, the prerequisites for the target environment must be met. See the [Linux Agent Server Requirements](/versioned_docs/activitymonitor_7.1/activitymonitor/requirements/linuxagent.md) topic for additional information.

## Deploy Linux Agent

Follow the steps to deploy the agent to the Linux host.

__Step 1 –__ On the Agents tab, click Add agent to open the Add New Agent(s) window.

![Install New Agent page of the Add New Agent(s) Wizard](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/installnew.png)

__Step 2 –__ On the Install New Agent page, enter the server name for the Linux host. Click __Next__.

![Specify Agent Port](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/portdefault.png)

__Step 3 –__ On the Agent Port page, specify the port to be used by the new agent. The default port is __4498__. Click __Next__.

![Credentials to Connect](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/add/credentialsservers.png)

__Step 4 –__ On the Credentials To Connect To The Server(s) page, connect to the Linux Server using either a __User name__ and __Password__, or a Public Key.

The options for connecting with a Password are:

- User name
- Password

![Public Key Credentials](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/add/publickey.png)

The options for connecting with a Public Key are:

- User name
- Private Key

![Client Certificate Credentials](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/add/clientcertificate.png)

To connect with a Client Certificate, select the __Client Certificate__ (for already installed agents) option. Run the following commands on the Linux machine:

```
cd /usr/bin/activity-monitor-agentd/  
./activity-monitor-agentd create-client-certificate --name [name]
```

The Client Certificate option adds an already installed agent to the console without using SSH.

To connect with a public key, select the __Public Key__ option. Copy the following command into a command prompt to generate ECDSA key for public key option:

```
ssh-keygen -m PEM -t ecdsa
```

Netwrix Activity Monitor requires to generate ECDSA Key with a blank passphrase

```
cat ~/.ssh/id_ecdsa.pub >> ~/.ssh/authorized_keys
```

__NOTE:__ It is required to add public key to authorized keys for Activity Monitor. By default, a private key is generated at ~/.ssh/id_ecdsa location along with the public key (.pub file). A user can use a different file location. Copy the following command into a command prompt to generate a private key for Activity Monitorto use:

```
cat ~/.ssh/id_ecdsa
```

__Step 5 –__ Click __Connect__ to test the connection. If the connection is successful, click __Next__. If the connection is unsuccessful, see the status message that appears for information on the failed connection.

![Linux Agent Options](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/linuxagentoptions.png)

__Step 6 –__ On the Linux Agent Options page, select which user name to use to run the daemon. To use root, leave the __Service user name__ field blank. Click __Test__ to test the connection.

__Step 7 –__ Click __Finish__. The Add New Agent(s) window closes, and the activity agent is deployed to and installed on the target host.

During the installation process, the status will be __Installing__. If there are any errors, Activity Monitor stops the installation and lists the errors in the __Agent messages__ box.

![Linux Agent Installed](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/add/activitymonitorwithlinuxagentinstalled.png)

When the Linux agent installation is complete, the status changes to __Installed__. The Monitored Host is also configured, and the added Linux host is displayed in the monitored hosts table. See the [Monitored Hosts Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/overview.md) topic for additional information.

Once a host has been added for monitoring, configure the desired outputs. See the [Output for Monitored Hosts](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/output.md) topic for additional information.

## Host Properties for Linux

Configuration settings can be edited through the tabs in the host’s Properties window. The configurable host properties are:

- [Inactivity Alerts Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/properties/inactivityalerts.md)

See the [Host Properties Window](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/properties/overview.md) topic for additional information.
