# SIEM Tab

Alert notification via SIEM sends event notifications to a SIEM product using UDP or TCP protocol. Before SIEM alerting can be enabled, the SIEM server must be configured. Follow the steps to set up what events receive notifications.

__Step 1 –__ Click __Configuration__ > __Alerts__ on the menu. The Netwrix Threat Prevention System Alerting window opens.

__Step 1 –__ Click the __SIEM__ tab.

__Step 2 –__ Click __Configure__ to configure a SIEM server. See the [Configure a SIEM Server](#configure-a-siem-server) topic for additional information.

__Step 3 –__ Once configured, click __Events__ on the __SIEM__ tab.

![Netwrix Threat Prevention System Alerting window - SEIM tab](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/systemalerting/seim.png)

__Step 4 –__ Click the button next to Disabled to toggle the setting to __Enabled__.

__Step 5 –__ Select an event category (Security, Operations, Configuration, Analytics, Policies) in the left pane.0

The [Configure a SIEM Server](#configure-a-siem-server) options allows administrators to set a SIEM mapping file for each type of event category.

__Step 6 –__ Check the checkbox for the event/incident/policy for which you want to trigger SIEM notifications.

__Step 7 –__ Click the Select Profile, please option for an event/incident/policy and select a SEIM Profile from the drop-down menu to assign it to the event/incident/policy.

- For policies, multiple profiles can be assigned by either checking the desired profile(s) or the Select All option. Click __OK__ in the drop-down menu to confirm the selection.

You can assign a profile to as many events as required.

__Step 8 –__ For Analytics, choose whether or not to enable Ongoing Attack Alerts. When checked, Threat Prevention sends periodic reminders of an ongoing attack if it continues after the initial notification has been sent.

__Step 9 –__ Click __OK__ to save the settings.

Threat Prevention now sends SIEM notifications for the selected events/incidents/policies.

## Configure a SIEM Server

Multiple profiles can be created across SIEM servers to serve different alerting functionalities. Follow the steps to configure one or more SIEM servers for alerting.

![Netwrix Threat Prevention System Alerting window – SEIM tab – Configure SEIM Server](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/systemalerting/seimserver.png)

__Step 1 –__ Click __Configuration__ > __Alerts__ on the menu. The Netwrix Threat Prevention System Alerting window opens.

__Step 1 –__ On the SIEM tab, click __Configure__.

__Step 2 –__ In the SIEM Profiles area, click the Add (+) button to create a new SIEM profile. To rename the default text, select the name string and enter the new profile name.

___RECOMMENDED:___ For each profile, use a unique name for easy identification.

__Step 3 –__ Use the Protocol drop-down menu to select either protocol:

- UDP
- TCP – If selected, the Require SSL/TLS checkbox is displayed. If desired, check this box and ensure the certificate is saved in the certificate store.

__Step 4 –__ In the Host Address box, provide either an IP address or server name for the SIEM server.

__Step 5 –__ In the Port box, provide the port number to communicate with the SIEM server.

__Step 6 –__ Use the Mapping File for Events drop-down menu to select the SIEM product to receive policy event notifications. The gear icon to the right of the drop-down allows you to import a custom mapping file. These mapping file formats are specifically designed for policy events.

__Step 7 –__ Use the Mapping File for System Alerts drop-down menu to select the SIEM product to receive Threat Prevention Security, Threat Prevention Operations, and Threat Prevention Configuration event alerts.

The gear icon to the right of the drop-down allows you to import a custom mapping file. These mapping file formats are specifically designed for Threat Prevention system events.

__Step 8 –__ Use the Mapping File for Authentication Analytics drop-down menu to select the SIEM product to receive Authentication Analytics incident alerts.

The gear icon to the right of the drop-down allows you to import a custom mapping file. These mapping file formats are specifically designed for Analytics incidents.

__Step 9 –__ _(Optional)_ Use the __Test__ button to confirm the configuration settings.

__Step 10 –__ Click __OK__ to save the settings.

Once a SIEM server is configured, assign it to events using the System Alerting window’s SIEM Tab or the [Actions Tab](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/actions/overview.md) of a policy or the [Actions Tab](/versioned_docs/threatprevention_7.4/threatprevention/admin/templates/actions.md) of a policy template.

IBM QRadar Integration

Netwrix has created a custom app for integration between Threat Prevention and QRadar. See the [Active Directory App for QRadar](/versioned_docs/threatprevention_7.4/threatprevention/siemdashboard/qradar/overview.md) topic for additional information. There is also a custom app for File Activity, that can receive data from either Threat Prevention or Netwrix Activity Monitor. See the [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor) for additional information.

Splunk Integration

Netwrix has created custom apps for integration between Threat Prevention and Splunk. See the [Active Directory App for Splunk](/versioned_docs/threatprevention_7.4/threatprevention/siemdashboard/splunk/activedirectory/overview.md) topic and the [Threat Hunting App for Splunk](/versioned_docs/threatprevention_7.4/threatprevention/siemdashboard/splunk/threathunting/overview.md) topic for additional information. There is also a custom app for File Activity, that can receive data from either Threat Prevention or Netwrix Activity Monitor. See the [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor) for additional information.

## Add a Custom SIEM Mapping File

Custom SIEM mapping files can be added. First create the mapping file, and save it in a location that the Administration Console can access. The default mapping files are stored in the following folder:

…\Netwrix\Netwrix Threat Prevention\SIWinConsole\SIEMTemplates\

Follow the steps to add a custom SIEM mapping file.

![SIEM tab - Gear icon for Custom Mapping File](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/systemalerting/geariconformappingfile.png)

__Step 1 –__ Click __Configuration__ > __Alerts__ on the menu. The Netwrix Threat Prevention System Alerting window opens.

__Step 2 –__ On the SIEM tab, click __Configure__.

__Step 3 –__ Click the __gear icon__ next for the alert type to be configured to open the SIEM Templates window. The new mapping file will only be available for the alert type selected.

![SIEM Templates window](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/systemalerting/siemtemplates.png)

__Step 4 –__ Click __Add__ (+) to open the Import SIEM Mapping File window.

![Import SIEM Mapping File window](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/systemalerting/importfile.png)

__Step 5 –__ Select the desired mapping file and click __Open__. The SIEM Mapping File window closes and the selected mapping file appears in the SIEM Templates window. It is now available in the drop-down menu. Click __Close__.

__Step 6 –__ Click __OK__ to save the settings.

The new mapping file can now be selected from the drop-down menu for the selected alert type.
