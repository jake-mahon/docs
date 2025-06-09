# File System Data Collection Configuration for Proxy as a Service

To employ the proxy mode as a service scan for collecting file system data from the target host, navigate to the __FileSystem__ > __0.Collection__ > __…System Scans__ jobs and open the File System Access Auditor Data Collector Wizard from the job’s query.

On the Applet Settings wizard page, select the following option:

- Require applet to be running as service on target – Must be selected in the Applet Launch Mechanism section to prevent the deployment of the applet or the ad hoc installation of the service during the scan

On the Scan Server Selection wizard page, select either of the following options:

- Specific Remote Server – Assigns the data collection processing to the server specified in the textbox
- Specific Remote Servers by Host List – Assigns the data collection processing to the proxy servers in the host list selected within the wizard via the __Select Hosts Lists__ button

See the [FSAA Query Configuration](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/overview.md#fsaa-query-configuration) topic for additional information.

___RECOMMENDED:___ When choosing to use proxy mode as a service for any of the File System Solution __…System Scans__ jobs, set proxy mode as a service for all of the __…System Scans__ jobs that are scheduled to run together.
