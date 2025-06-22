# Netwrix Integrations Page

The Netwrix Integrations page within the Integrations interface lists the products for which the
application is configured to connect.

![Integrations interface on the Netwrix Integration page](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.webp)

Integrations with other Netwrix products enables you to run Investigations on the event data within
the connected database. When you add a Netwrixintegration, the selection for Default Data Source
identifies which database is the default source for Investigation reports. You can change it by
selecting a different database from the drop-down menu. The table provides the following
information:

- Name – The name of the integration, as supplied when it was added
- Host – The name of the database host
- Catalog – The name of the database
- Profile – The Name of the Credential Profile assigned to the integration
- Description – Integration description, as supplied when it was added

To view integration details or make modifications, select an integration from the list or under
Netwrix Integrations in the navigation pane.

## Add a Netwrix Integration

**NOTE:** Prior to adding a Netwrix Integration, you must first configure a Credential Profile with
credentials properly provisioned for connecting to the database. See the
[Credential Profile Page](/docs/threatmanager/3.0/administration/integrations/credential-profiles.md) topic for additional information on creating a
profile.

Follow the steps below to add a Netwrix Integration.

**Step 1 –** On the Integrations interface, click Add New Integration in the navigation pane. The
Add New Integration window opens.

![Add New Integrations window with the Netwrix Integration type selected](/img/product_docs/threatmanager/threatmanager/administration/configuration/integrations/netwrixintegrations.webp)

**Step 2 –** In the Type drop-down list, select Netwrix Integration.

**Step 3 –** Enter the following information:

- Name – Provide a unique, descriptive name of the integration
- Description – Provide an Integration description
- Database Host – Enter the database server hostname (NetBIOS name, FQDN, or IP address) with the
  instance name or non-standard port, if applicable, in one of the following formats:

  - No named instance, use `[SQLHostName]`, for example `NT-SQL02`
  - Named instance, use `[SQLHostName]\[SQLInstanceName]`, for example `NT-SQL02\Netwrix`
  - No named instance with non-standard port, use `[SQLHostName],[PortNumber]`, for example
    `NT-SQL02,72`
  - Named instance with non-standard port, use `[SQLHostName]\[SQLInstanceName],[PortNumber]`, for
    example `NT-SQL02\Netwrix,72`

- Credential Profile – Select the Credential Profile by name from the drop-down menu. This was
  pre-created in the Credential Profiles page.
- Configuration Catalog Name – Enter the name of the configuration database. By default, this is set
  to the name of the Threat Prevention database, `NVMonitorConfig`.
- Catalog Name – Enter the name of the database. By default, this is set to the name of the Threat
  Prevention database, `NVMonitorData`.
- Integration Service URL – This should not be modified. It is the URL for the service endpoint, by
  default `http://localhost:55558`.
- Show Deleted Policies – When this option is checked, deleted policies will show on the Policy Sync
  tab of this Netwrix integration.

**Step 4 –** Click **Test Connection** to ensure connection to the database. This will take a
moment. Then a message will appear in the upper right corner of the console indicating a successful
or failed connection. If successful, move on to the next step. If failed, recheck your entries for
error and repeat this step until a successful connection is established.

**Step 5 –** Click Add. The Add New Integration window closes.

The NetwrixIntegration is listed in the Integrations navigation pane.

**NOTE:** For integration with Netwrix Threat Prevention, you can add both the main `NVMonitorData`
database and the archive database, if one has been configured.

## Netwrix Integration Details

Follow the steps to view the details of a Netwrix product integration.

**Step 6 –** Use the gear icon in the upper right corner of the console to open the Configuration
menu. Then select **Integrations** to open the Integrations interface.

**Step 7 –** On the Integrations interface, click **Netwrix Integrations** in the navigation pane to
view a list of the already integrated Netwrix products.

**Step 8 –** Select a product from the table or the navigation pane to view the integration details.

![Integrations interface on the Netwrix Integrations details page](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/details.webp)

Select the integration from the list to see the details and modification options:

- Name and Description – The box at the top displays the name and description of the integration

  - Edit – The edit button in the upper right corner of the box changes those fields from
    read-only to editable. See the Edit Integration Name and Description topic for additional
    information.
  - Delete – The delete button in the upper right corner of the box opens the Delete Stealthbits
    Integration window to confirm the action

- Configuration – Displays the settings entered for the selected integration. These settings can be
  modified on this tab. See the Configuration Tab topic for additional information.
- Policy Sync – Displays information on the last policy sync executed. See the Policy Sync Tab topic
  for additional information.

### Configuration Tab

The Configuration tab displays the settings entered for the selected integration.

![Netwrix Integration Details on the Configuration tab](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/configurationtab.webp)

The tab provides the following settings:

- Database Host – Displays the name of the database host in the supplied format
- Credential Profile – Displays the Credential Profile by name
- Configuration Catalog Name – Displays the name of the configuration database .
- Catalog Name – Displays the name of the database
- Integration Service URL – Displays the URL for the service endpoint. This should not be modified.
- Show Deleted Policies – When this option is checked, deleted policies will show on the Policy Sync
  tab of this Netwrix integration.
- Test Connection – Click **Test Connection** to ensure connection to the database. This will take a
  moment. Then a message will appear in the upper right corner of the console indicating a
  successful or failed connection.

The Save button is enabled when any settings are modified. Click it to commit the changes before
leaving the page.

### Policy Sync Tab

The Policy Sync tab displays information on the last policy sync executed.

![Netwrix Integration Details on the Policy Sync tab](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/policysynctab.webp)

The tab provides the following information:

- Last Sync – Displays the date timestamp of the last sync
- Policies – The table displays the following information:

  - Name – The name of the Threat Prevention policy
  - Enabled – Indicates if the policy is enabled (true) or disabled (false)
  - Report to Database – Indicates if the policy is sending events to the Threat Prevention SQL
    database
  - Deleted – Indicates if the policy is deleted (true) or not deleted (false)
  - Description – The description of the policy as read from Threat Prevention

## Edit Integration Name and Description

Follow the steps to edit a Netwrix Integration name and/or description.

**Step 1 –** Use the gear icon in the upper right corner of the console to open the Configuration
menu. Then select **Integrations** to open the Integrations interface.

**Step 2 –** On the Integrations interface, click Netwrix Integrations and select the desired
Netwrix Integration.

**Step 3 –** Click the **Edit** button in the upper right corner of the name and description box.

![Name and Description box for a Netwrix Integration in Edit mode](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/editnetwrixintegration.webp)

**Step 4 –** Type in the top field to modify the integration name.

**Step 5 –** Type in the bottom field to modify the integration description.

**Step 6 –** Click the **Save** button.

The Netwrix Integration name and/or description have been modified.

## Modify Netwrix Integration Configuration

Follow the steps to modify the configuration for the selected integration.

![Netwrix Integration Details on the Configuration tab](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/configurationtab.webp)

**Step 1 –** On the Integrations interface, click Netwrix Integrations and select the desired
Netwrix Integration.

**Step 2 –** The Configuration tab opens, where you can make the desired modification.

**Step 3 –** To modify the Database Host, modify the value by typing in the textbox.

**Step 4 –** To modify the Credential Profile, select the Credential Profile by name from the
drop-down menu. This was pre-created in the Credential Profiles page.

**NOTE:** If you modify the Credential Profile for a domain, click **Test Connection** to ensure
connection to the database. This will take a moment. Then a message will appear in the upper right
corner of the console indicating a successful or failed connection.

**Step 5 –** For the Configuration Catalog Name, modify the value by typing in the textbox.

**Step 6 –** For the Catalog Name, modify the value by typing in the textbox.

_Remember,_ the Integration Service URL value should not be modified.

**Step 7 –** Check or uncheck the Show Deleted Policies box as desired.

**Step 8 –** The Save button is enabled when any settings are modified. Click it to commit the
changes before leaving the page.

The changes to the Configuration have been committed.

# Netwrix Access Analyzer (formerly Enterprise Auditor) Integration

Access Analyzer can be configured to send Sensitive Data to Threat Manager. In Access Analyzer, the
FS_DEFEND_SDD Job exports sensitive data matches collected by the File System Solution Sensitive
Data Discovery Auditing jobs to Threat Manager. For Threat Manager integration with Access Analyzer,
the following job groups must be successfully run before running the FS_DEFEND_SDD Job:

- FileSystem > 0.Collection Job Group
- FileSystem > 7.Sensitive Data Job Group

See the File System Solution section of the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
additional information.

**NOTE:** The Access Analyzer Sensitive Data Discovery Add-On is required for sensitive data
collection.

## Instantiate the FS_DEFEND_SDD Job in Access Analyzer

Follow the steps to configure the FS_DEFEND_SDD Job to send sensitive data to Threat Manager. See
the Instant Job Wizard section of the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
instructions to add this instant job to the **Jobs** tree.

In Access Analyzer, install the FS_DEFEND_SDD Job to the desired location. It is available through
the Instant Job Library under the File System library.

**Step 1 –** In the Threat Manager Console, generate the app token (endpoint token) to be copied and
pasted into the Connection Profile, and the host name (endpoint) to be used when creating the custom
host list.

In order for Access Analyzer to send data to Threat Manager, an app token must be created in Threat
Manager. If multiple Access Analyzer Consoles are sending data to Threat Manager, an app token may
be created for each Access Analyzer Console to grant individual access to Threat Manager from each
Console.

- Navigate to the Configuration > App Tokens page.
- Click the +Add button to create a new app token:
- Enter a name and a unique description for the app token.
- Click Submit.
- In the Token column, click the Key icon to open the token and copy it for use when configuring the
  Connection Profile in Access Analyzer.
- In the Host Name column, copy the port for use when creating the custom host list in Access
  Analyzer.

**Step 2 –** In Access Analyzer, create a custom Connection Profile for the FS_DEFEND_SDD Job to
authenticate to Threat Manager. See the Custom Connection Profile for FS_DEFEND_SDD Job topic for
additional information.

**Step 3 –** In Access Analyzer, create a custom host list.

- The target host is the Threat Manager Host Name generated on the Manage App Tokens page in the
  Threat Manager Console:
- Format – [HOST]:8080

**Step 4 –** Assign the custom host list at the FS_DEFEND_SDD > Configure > Hosts node.

See the FS_DEFEND_SDD Job section of the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
additional information.

**_RECOMMENDED:_** Schedule the FS_DEFEND_SDD Job to run as part of the FileSystem Job, after the
FileSystemOverview Job. The FS_DEFEND_SDD Job should be run after each subsequent sensitive data
collection.

## Custom Connection Profile for FS_DEFEND_SDD Job

The FS_DEFEND_SDD Job requires a custom Connection Profile to authenticate to Threat Manager. The
credential for the Connection Profile must be created with the Web Services (JWT) account type.

_Remember,_ , the Threat Manager App Token is generated within Threat Manager.

Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Web Services (JWT)
- Domain – `{not a field for this type of credential, defaults to <WSJWT>}`
- User name – This field should be left blank
- Password Storage: Application – Uses Access Analyzer’s configured Profile Security setting as
  selected at the Settings > Other Settings node
- Access Token – Copy and paste the Threat Manager App Token

The FS_DEFEND_SDD Job must be configured to use this custom Connection Profile.

# Netwrix Activity Monitor Integration

The Activity Monitor can be configured to send file system data and/or Active Directory and/or
Microsoft Entra ID data to Threat Manager. It must be installed and configured to monitor the target
environment. See the
[Netwrix Activity Monitor](https://helpcenter.netwrix.com/category/activitymonitor) documentation
for additional information.

In order for Threat Manager to receive the event stream data, the Activity Monitor must be
configured to do so. For file system activity events, use the Threat Manager Syslog template for the
desired monitored host configuration. For Active Directory activity events, generate an App Token in
Threat Manager and then use that app token to configure the domain’s output to Threat Manager.

The Threat Manager DC Sync threat is sourced by the Activity Monitor's Replication AD monitoring
configuration. It is necessary for it to be configured to exclude domain controllers on the Host
(From) filter.

# Integration with Other Netwrix Products

The following Netwrix products can be configured to send data to Threat Manager:

- [Netwrix Activity Monitor Integration](/docs/threatmanager/3.0/administration/integrations/netwrix-products.md) – Activity Monitor can be configured to
  send file system data and/or Active Directory data to Threat Manager.
  - The Active Directory data stream requires a unique App Token to be generated within Threat
    Manager.
- [Netwrix Threat Prevention Integration](/docs/threatmanager/3.0/threatprevention/threatmanager-configuration.md) – Threat Prevention can be configured
  to send file system data and/or Active Directory data to Threat Manager.
  - Requires a unique App Token to be generated within Threat Manager.
- [Netwrix Access Analyzer (formerly Enterprise Auditor) Integration](/docs/threatmanager/3.0/administration/integrations/netwrix-products.md) – Access
  Analyzer, formerly Netwrix StealthAUDIT, can be configured to send File System Sensitive Data to
  Threat Manager
  - Requires a unique App Token to be generated within Threat Manager.

Configure the desired product to feed data into the Threat Manager Console. Depending upon the data
source, a Threat Manager app token may need to be generated. See the
[App Tokens Page](/docs/threatmanager/3.0/administration/integrations/credential-profiles.md) topic for additional
information.
