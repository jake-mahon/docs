# SPAA: Activity Log Locations

The Activity Log Locations page is where to manually configure log locations to avoid requiring remote registry access to locate the activity event log files. It is a wizard page for the category of Scan SharePoint Activity.

![Activity Log Locations page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/activityloglocations.png)

The options in the Activity Log Locations page are:

- Add – Opens the Customize Activity Log UNC Paths location window to add a new host
- Add Default – Opens the Customize Activity Log UNC Paths location window for the default host
- Edit – Opens the Customize Activity Log UNC Paths window for the selected host. If edits are made, click __OK__ to save the changes.
- Remove – Removes the selected host

![Customize Activity Log UNC Paths Window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/customizeactivityloguncpaths.png)

The options in the Customize Activity Log UNC Paths Window are:

- Host name – Host name of the targeted SharePoint On-Premises server or SharePoint Online tenant
- SBTFileMon.ini UNC path – UNC path to the location of the __SBTFileMon.ini__ file (as configured in __Activity Monitor__ > __Monitored Hosts__)
- Activity log UNC path – UNC path to the location of the __SBTFileMon\_Logs__ folder containing the Activity Logs (as configured in __Activity Monitor__ > __Monitored Hosts__)

  __NOTE:__ For On-Premises environments you do not need to specify an Activity Log UNC path as the Data Collector will default to finding the log locations via the registry.

- Activity archive UNC path – UNC path to the archive location of Activity Logs (as configured in __Activity Monitor__ > __Agents__). If archiving is not enabled in Activity Monitor this can be left blank.

__NOTE:__ In any UNC paths, ```%HOST%``` will be replaced with the host name.

See the Getting Started with SharePoint & SharePoint Online Activity Monitor topic in the [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor) for additional information.
