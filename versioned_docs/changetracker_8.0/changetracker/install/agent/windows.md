# Installing Gen 7 Agent for Windows

The __Hub API__ page must be entered together with __Access Credentials__.

By default the Agent username is ‘agent’ with password ‘passWord121’ but these can be changed. See the Users: User Administration topic for additional information.

![InstallAgent](/img/versioned_docs/changetracker_8.0/changetracker/install/agent/installagent.png)

By default the Agent will register using the Name of the server but there is an opportunity to customize this during installation or post-installation via an edit of the Hub Details file. See the [First Run – HubDetails.xml File](/versioned_docs/changetracker_8.0/changetracker/admin/settings/devicegroups.md#First-Run-HubDetailsxml-File) topic for additional information.

___RECOMMENDED:___ During installation, this can also be performed on the __Advanced Configuration__ step of the installation, and there is also an option to test agent connectivity.

![InstallAgentAdvancedConfiguration](/img/versioned_docs/changetracker_8.0/changetracker/install/agent/installagentadvancedconfiguration.png)

![InstallAgentTestConnectivity](/img/versioned_docs/changetracker_8.0/changetracker/install/agent/installagenttestconnectivity.png)

__NOTE:__ In order to maximize performance, Gen 7 Agent operational files are located in _%PROGRAMDATA%\NNT\gen7agent.service_, similarly if you are ever required to provide the __rolling-log.txt__ file to [Netwrix Support](https://www.netwrix.com/support.html) this is where it is located. See the [First Run – HubDetails.xml File](/versioned_docs/changetracker_8.0/changetracker/admin/settings/devicegroups.md#First-Run-HubDetailsxml-File) topic for additional information on downloading the .xml file for agents.

![InstallAgentOperationFiles](/img/versioned_docs/changetracker_8.0/changetracker/install/agent/installagentoperationfiles.png)

(missing or bad snippet)
