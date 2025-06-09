# Netwrix Threat Manager Configuration Window

The Netwrix Threat Manager Configuration window is a global setting to enable integration between Threat Prevention and Threat Manager. This window is only available to Threat Prevention administrators.

Threat Manager App Token

The Threat Manager App Token authenticates connection between Threat Prevention and Threat Manager. This token is generated in Threat Manager:

- In Threat Manager, navigate to the __Configuration__ > __App Tokens__ page
- Generate a new app token
- Copy the token

## Event Sink Tab

The Event Sink tab connects Threat Prevention to Threat Manager through a uniform resource identifier and the Threat Manager App Token. Policy event data is sent to Threat Manager through this window.

Follow the steps to configure Threat Prevention to send event data to Threat Manager.

__Step 1 –__ Generate the Threat Manager App Token in Threat Manager.

__Step 2 –__ In Threat Prevention, click __Configuration__ > __Netwrix Threat Manager Configuration__ on the menu. The Netwrix Threat Manager Configuration window opens with the Event Sink tab displayed by default.

![Netwrix Threat Manager Configuration window - Event Sink tab](/img/product_docs/threatprevention/threatprevention/admin/configuration/threatmanagerconfiguration.png)

__Step 3 –__ In the Netwrix Threat Manager URI box, enter the Threat Manager hostname or IP address and port in the following format. The default port for Threat Manager is __10001__.

- amqp://[HOSTNAME | IPADDRESS]:[PORT]
  - For an example with the host name – amqp://ExampleHost:10001
  - For an example with the host address – amqp://192.168.9.52:10001

__CAUTION:__ Do not use localhost for the hostname or 127.0.0.1 for the IP address.

__Step 4 –__ You can enable SSL for the AMQP event stream.

As Threat Manager supports TLS/SSL, you can also enable SSL in Threat Prevention to enable communication with Threat Manager in the secure way.

- If Threat Manager has TLS enabled, then select the __Enable SSL__ checkbox to enable the Agent to send events to Threat Manager. Else the Agent will throw an error when connecting.
- Select the __Ignore Certificate Errors__ checkbox to ignore certificate errors that may arise when the Agent connects to Threat Manager. If this checkbox is not selected, the Agent will fail to connect when there are certificate errors.

__Step 5 –__ In the App Token box, enter the App Token generated on the App Tokens page in Threat Manager.

__Step 6 –__ The Policies area lists all the policies that have been created in Threat Prevention. The following is displayed for each policy:

- Send – When this checkbox is selected, the policy sends the event data to Threat Manager directly from the Agent. This option can also be set by the Send to Netwrix Threat Manager checkbox on the Actions tab of a policy.
- State – Displays whether the policy is enabled or disabled  
  The State column does not control the state of the policy. A policy can be enabled or disabled either on the General tab of the respective policy or through the Policies Node Right-Click Menu.
- Name –Shows the display name of the policy
- Path – Displays the path of the policy within the structure of the Policies node in the left pane.

__Step 7 –__ Click __Save__.

All real-time event data from the selected Threat Prevention policies is now being sent to Threat Manager.

__NOTE:__ The Threat Manager URI configuration can also be used to send Threat Prevention policy data to the Activity Monitor host and port (example: amqp://localhost:4499). Threat Prevention can only send to either Threat Manager or the Activity Monitor.

## Honey Token Tab

On the Honey Token tab, you specify a samAccountName, which is substituted with the replacement samAccountName that you provide. The information on this tab is sent to the Threat Prevention Agent. If the Agent sees an LDAP query using information from the Honey Token of fake accounts, it alters the LDAP query results to return the Replacement samAccountName. This ensures the account looks like a real privileged account to lure the perpetrator to it.

Follow the steps to send the Honey Token to Threat Manager for an LDAP Deception trap.

__Step 1 –__ Configure the Source samAccountName and Replacement samAccountName in a Threat Manager Honey Token threat.

To set up a honey token, see the Configure Honeytoken Threats topic in the [Netwrix Threat Manager Documentation](https://helpcenter.netwrix.com/category/stealthdefend).

__Step 2 –__ In Threat Prevention, click __Configuration__ > __Netwrix Threat Manager Configuration__ on the menu. The Netwrix Threat Manager Configuration window opens.

__Step 3 –__ Ensure the Event Sink tab is properly set up to send event data to Threat Manager.

__Step 4 –__ Click the __Honey Token__ tab.

![Netwrix Threat Manager Configuration Window - Honey Tokem tab](/img/product_docs/threatprevention/threatprevention/admin/configuration/honeytoken.png)

__Step 5 –__ Check the __Enable LDAP substitution__ checkbox to enable the options on the tab.

__Step 6 –__ Enter the exact match of settings configured for the Threat Manager Honey Token threat for the following options:

- Exact Match or Substring
- Source samAccountName
- Replacement samAccountName

__Step 7 –__ Click __Save__.

The Honey Token is now enabled and integrated with Threat Manager.

## Forged PAC Tab

The Forged PAC tab provides the option to include Forged PAC information in the events Threat Prevention sends to Threat Manager.

Follow the steps to include the Forged PAC information in events.

__Step 1 –__ Under the Analytics node in the left pane, select the __Forged PAC__ analytic.

__Step 2 –__ On the Forged PAC analytics window, select the gear icon on the upper-right corner of the window to open the Configure Analytics window.

__Step 3 –__ Add or remove the RIDs of groups to be monitored on the Settings tab. See the Forged PAC Analytic Type topic for additional information.

__Step 4 –__ On the Policy tab, configure the following:

- General Tab – Use the toggle to __Enable__ the policy
- Event Type Tab – Keep the default settings or set as desired for the Authentication event filters
- Actions Tab – Select __Send to Threat Manager__

__Step 5 –__ Click Save once configurations are set. The Configure Analytics window closes.

__Step 6 –__ In Threat Prevention, click __Configuration__ > __Netwrix Threat Manager Configuration__ on the menu. The Netwrix Threat Manager Configuration window opens.

![Netwrix Threat Manager Configuration Window - Forged PAC tab](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/forgedpac.png)

__Step 7 –__ Ensure the Event Sink tab is properly set up to send event data to Threat Manager.

__Step 8 –__ On the Forged PAC tab, select the __Include Forged PAC information in events__ checkbox. Click __Save__.

When a Forged PAC analytic is triggered in Threat Prevention, the event data will be sent to Threat Manager.
