# Oracle Database

__NOTE:__ Prior to configuring your monitoring plan, please read and complete the instructions in the following topics:

- [Protocols and Ports Required](/docs/product_docs/auditor/auditor/requirements/ports.md) – To ensure successful data collection and activity monitoring configure necessary protocols and ports for inbound and outbound connections
- [Data Collecting Account](/docs/product_docs/auditor/auditor/admin/monitoringplans/dataaccounts.md) – Configure data collecting accounts as required to audit your IT systems

- [Oracle Database](/docs/product_docs/auditor/auditor/configuration/oracle/overview.md) – Configure data source as required to be monitored

Complete the following fields:

| Option | Description |
| --- | --- |
| __General__ |  |
| Monitor this data source and collect activity data | Enable monitoring of the selected data source and configure Auditor to collect and store audit data. |
| Monitor Oracle Database logon activity | Specify what types of logon events you want to monitor: successful or failed, performed through Windows and SQL authentication.   - Failed logons - Successfullogons |
| __Users__ |  |
| Specify users to track their activity | Use controls in this section to populate the corresponding lists -click __Add__ and specify user name and type (OS or database user).   - Include—Add users to be included in the auditing scope. - Exclude—Add users to be excluded from the auditing scope by specifying their names and type (OS or database user).  User names are case-sensitive. |
| __Database Objects__ |  |
| Data objects to monitor | Create rules for objects and actions that you want to audit:   1. Click Add Rule. 2. Specify a name of the Oracle database _Object_ and _Schema_. 3. Select the necessary actions (successful or failed changes, successful or failed reads). 4. Click __Add__.   Schema and object names are case sensitive. |

Review your data source settings and click __Add__ to go back to your plan. The newly created data source will appear in the __Data source__ list. As a next step, click __Add item__ to specify an object for monitoring. See the [Add Items for Monitoring](/docs/product_docs/auditor/auditor/admin/monitoringplans/datasources.md#Add-Items-for-Monitoring) topic for additional information.

## Oracle Database Instance

Complete the following fields:

| Option | Description |
| --- | --- |
| Connection type | Select how the product connects to Oracle Database:   - Oracle Database instance – select if you want to connect to a database by instance name. - Oracle Wallet – select if you want to use Oracle Wallet – password-protected container used to store authentication and signing credentials, including private keys, certificates, and trusted certificates needed by SSL. |
| Instance name | Provide connection details in the following format: _host:port/service\_name._ Make sure audit settings are configured for your Oracle Database instance. |
| Wallet alias | Provide the alias you set while creating wallet. For example, "_MyOracle_".  Alias name in Netwrix Auditor should exactly match the alias in the ```tnsnames.ora``` file. [Configure Oracle Instant Client for HTTP Proxy Connections](/docs/product_docs/auditor/auditor/configuration/oracle/wallet.md#Configure-Oracle-Instant-Client-for-HTTP-Proxy-Connections) |
| Specify the account for collecting data  For Oracle Database instance connection type only. | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select __Custom account__ and enter credentials. The credentials are case sensitive.  A custom account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](/docs/product_docs/auditor/auditor/admin/monitoringplans/dataaccounts.md) topic for additional information. |

## Data Collection from Oracle Database

On a high level, data collection process for Oracle databases works as follows:

![hiw_diagram_oracle](/static/img/product_docs/auditor/auditor/admin/monitoringplans/oracle/hiw_diagram_oracle.png)

1. Oracle administrator prepares a dedicated service account with sufficient permissions to collect data from Oracle Database. See the [Permissions for Oracle Database Auditing](/docs/product_docs/auditor/auditor/configuration/oracle/permissions.md) topic for additional information.
2. Netwrix administrator does the following:

   - Creates a monitoring plan in Netwrix Auditor, specifying the service account (prepared at step 1) as a data collecting account in the Monitoring Plan wizard. Then s/he adds items to the monitoring plan – these are Oracle Databases to collect data from.
   - Configures alerts related to Oracle data source. Current version does not include predefined alerts for that data source, so follow the [Create Alerts](/docs/product_docs/auditor/auditor/admin/alertsettings/create.md) section to create and configure the necessary alerts.

   Remember to set the filter to “Data Source_equals_ Oracle”.
3. Netwrix Auditor Data Collection Service starts periodic (every 10 min by default) data collection sessions. The results of each session include audit events that occurred since the previous data collection. Data is retrieved via Oracle Instant Client application. The product uses direct connection string or Oracle Wallet to connect to Oracle databases.
4. Netwrix Auditor Data Collection Service processes collected data into the proprietary format (Activity Records). Each Activity Record contains initiator’s account, time, action, and other details.

   - To determine what has changed in the configuration, it compares a state snapshot from Oracle Server with the previously taken.
   - To get ‘_Who_’ (initiator) and ‘_When_’ (date and time) information for the detected changes, the product uses Oracle events data.

   Netwrix Auditor Serverthen writes the Activity Records to the audit database (default retention – 180 days) and long-term archive (default retention – 120 months).
5. Users can work with collected data in Netwrix Auditor client UI: run search, view reports, and so on. If you have configured alerting in Netwrix Auditor, then the activities that match the certain criteria will trigger the alerts. Recipients will be notified by email, and response actions will be taken, if configured.
6. Netwrix Auditor also generates an Activity Summary once a day (by default, at 3 AM) and sends it to the specified recipients. This email lists Oracle infrastructure changes and activities collected by Netwrix Auditor during the last 24 hours.
