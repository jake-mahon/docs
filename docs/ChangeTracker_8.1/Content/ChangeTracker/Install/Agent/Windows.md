---
sidebar_position: 4821
title: Installing Gen 7 Agent for Windows
---

# Installing Gen 7 Agent for Windows

The **Hub API** page must be entered together with **Access Credentials**.

By default the Agent username is ‘agent’ with password ‘passWord121’ but these can be changed. See the Users: User Administration topic for additional information.

![InstallAgent](../../../../../../static/images/ChangeTracker_8.1/Content/Resources/Images/ChangeTracker/InstallAgent.png "InstallAgent")

By default the Agent will register using the Name of the server but there is an opportunity to customize this during installation or post-installation via an edit of the Hub Details file. See the [First Run – HubDetails.xml File](../../Admin/Settings/DeviceGroups#_First_Run_– "Groups: Device Group Administration") topic for additional information.

***RECOMMENDED:*** During installation, this can also be performed on the **Advanced Configuration** step of the installation, and there is also an option to test agent connectivity.

![InstallAgentAdvancedConfiguration](../../../../../../static/images/ChangeTracker_8.1/Content/Resources/Images/ChangeTracker/InstallAgentAdvancedConfiguration.png "InstallAgentAdvancedConfiguration")

![InstallAgentTestConnectivity](../../../../../../static/images/ChangeTracker_8.1/Content/Resources/Images/ChangeTracker/InstallAgentTestConnectivity.png "InstallAgentTestConnectivity")

**NOTE:** In order to maximize performance, Gen 7 Agent operational files are located in *%PROGRAMDATA%\NNT\gen7agent.service*, similarly if you are ever required to provide the **rolling-log.txt** file to [Netwrix Support](https://www.netwrix.com/support.html "Netwrix Support") this is where it is located. See the [First Run – HubDetails.xml File](../../Admin/Settings/DeviceGroups#_First_Run_– "Groups: Device Group Administration") topic for additional information on downloading the .xml file for agents.

![InstallAgentOperationFiles](../../../../../../static/images/ChangeTracker_8.1/Content/Resources/Images/ChangeTracker/InstallAgentOperationFiles.png "InstallAgentOperationFiles")

Run the Agent UI. See the  [Agent First Run](FirstRun "Gen 7 R2 Agent First Run") topic for additional information.