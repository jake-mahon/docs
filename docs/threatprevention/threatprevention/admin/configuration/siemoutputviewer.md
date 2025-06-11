# SIEM Output Viewer

The SIEM Output Viewer window displays the event data (messages) that Threat Prevention writes to syslog (SIEM) in real time.

- Event data generated for a policy is sent to SIEM if the 'Send to SIEM' option is selected for that policy on the Actions tab. See the [Send to SIEM](/docs/threatprevention/threatprevention/admin/policies/actions/overview.md#send-to-siem) topic for additional information.
- Event data generated for an analytic is sent to SIEM if the 'Send Raw Data to SIEM' option is selected for that analytic on the Actions tab. See the [Send to SIEM](/docs/threatprevention/threatprevention/admin/policies/actions/overview.md#send-to-siem) topic for additional information.
- Event data generated for an event/incident/policy is sent to SIEM if a SIEM profile has been assigned to it on the [SIEM Tab](/docs/threatprevention/threatprevention/admin/configuration/systemalerting/siem.md) of the System Alerting Window.

While you can also use third-party tools like [Kiwi Syslog Server](https://www.solarwinds.com/free-tools/kiwi-free-syslog-server) to view the output, the SIEM Output Viewer window may serve as a troubleshooting tool to view and verify the actual data Threat Prevention sends to syslog (SIEM) in real time.

Follow the steps to view real time data (messages) that Threat Prevention sends to SIEM.

__Step 1 –__ Click __Configuration__ > __SIEM Output Viewer__ on the menu; the SIEM Output Viewer window opens. This window is only available to Threat Prevention administrators.

![SIEM Output Viewer window](/img/product_docs/threatprevention/threatprevention/admin/configuration/siemoutputviewer.webp)

__Step 2 –__ Click __Start__. As events occur and Threat Prevention writes to syslog (sends event/policy/analytics data to SIEM) in real time, they are displayed on the window.

__Step 3 –__ The __Autoscroll__ checkbox enables or disables automatic scrolling of the log display.

- When enabled, the SIEM Output Viewer window automatically scrolls down to show the latest incoming messages in real time.
- When disabled, you will have to manually scroll and review log entries without the display automatically jumping to the newest message.

__Step 4 –__ For each message, the following is displayed:

- Event: Time Logged – Timestamp for when the event was monitored/blocked. The specified time is the local time for the server where the Agent is deployed.Hover over the data in this column to view the local time (of the Enterprise Manager) and UTC time simultaneously.
- Host – The IP address or name of the SIEM server, configured in the SIEM server settings
- Port – The port number to communicate with the SIEM server, configured in the SIEM server settings
- Protocol – The protocol set when configuring the SIEM server, i.e., TCP or UDP
- SSL – Shows whether SSL is used when sending data to SIEM (applies if TCP is set as the protocol)
- Message – The actual data sent to syslog
- Status – This field is empty if the message is successfully sent. Otherwise, it will contain the text of the received error, for example, 'Connection timeout'

You can select a row and use Ctrl+C to copy the data displayed in it. Then paste it to another application like Notepad to examine it in detail.

__NOTE:__ The host, port, protocol, and SSL columns display the settings configured for the SIEM server where the respective message is sent. See the [Configure a SIEM Server ](/docs/threatprevention/threatprevention/admin/configuration/systemalerting/siem.md#configure-a-siem-server) topic for additional information.

This data grid employs features for sorting, filtering, searching, and more.

- Right-click anywhere in the column header to get a menu with several options to sort the data in the grid. See the [Data Grid Right-Click Menu](/docs/threatprevention/threatprevention/admin/navigation/rightclickmenus.md#data-grid-right-click-menu) topic for additional information.
- The Group by Box ribbon just above the header row impacts how much data is displayed. See the [Sort Data](/docs/threatprevention/threatprevention/admin/navigation/datagrid.md#sort-data) topic for additional information.
- Columns can be reordered as desired as well as removed from the data grid. Removed columns can be added back through the [Customization Window](/docs/threatprevention/threatprevention/admin/navigation/datagrid.md#customization-window).
- The Search icon opens the __Enter text to search…__ textbox where you can search for the required data in the data grid. See the [Search Data](/docs/threatprevention/threatprevention/admin/navigation/datagrid.md#search-data) topic for additional information.

__Step 5 –__ Click __Save__ to save the displayed data to a text file or __Clear__ to clear the data.

On clicking __Save__, the Safe As dialog box is displayed, where you can select a location to save the text file.
