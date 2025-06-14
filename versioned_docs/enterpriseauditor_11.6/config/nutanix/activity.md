# Nutanix Activity Auditing Configuration

The Netwrix Activity Monitor can be configured to monitor activity on Nutanix devices.

A user having REST API access must be created on the Nutanix Files server to monitor the files server using Activity Monitor. Additional configurations are done by Activity Monitor with the help of this user. In the Nutanix Files server, select __Configuration__ > __Manage Roles__. Under the REST API access users section, click __New User__ to create a new user. Specify the username and the password.

__NOTE:__ The user credentials created here are used when adding a Nutanix file server in Activity Monitor.
