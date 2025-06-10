# Nutanix Files Activity Auditing Configuration

The Netwrix Activity Monitor can be configured to monitor file activity on Nutanix Files devices.

A user having REST API access must be created on the Nutanix Files server to monitor the files server using Activity Monitor. Additional configurations are done automatically by Activity Monitor using the Nutanix API with the help of this user.

Follow the steps to create a new user account with Nutanix Prism:

__Step 1 –__ Open Nutanix Prism web portal.

__Step 2 –__ Select __File Server__ category. In the list of servers, select the server you want to audit.

__Step 3 –__ Click __Manage roles__.

__Step 4 –__ In the Manage roles dialog box locate the REST API access user section and click __+New user__.

![Manage Roles - File Server](/img/product_docs/activitymonitor/config/nutanix/activitynutanix.png)

__Step 5 –__ Enter local user account name and password, then click __Save__ to save the settings.

__Step 6 –__ Click __Close__ to close the Manage roles dialog box.

__NOTE:__ The user credentials created here are used when adding a Nutanix file server in Activity Monitor.

__NOTE:__ Nutanix Files does not report events for activity originating from a server where the Activity Monitor Agent is installed.
