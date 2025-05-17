---
sidebar_position: 7482
title: Configuration Tool
---

# Configuration Tool

You can configure Directory Managerimmediately after installing it.

Step 1 – Run the Configuration Tool in one of the following ways:

* To configure Directory Managerright after installation, click **Next** on the **Run Configuration Tool** page. See the [Installation Tool](../Installer/Install) topic.
* When Directory Manager is installed, the Configuration Tool is also installed as a separate program on the machine. Launch the Directory Manager Configuration Tool from the Windows Start screen.

In either case, the tool opens to the **Introduction** page.

![Introduction page](../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/Install/Intro.jpg "Introduction page")

Step 2 – Read the welcome message and click **Next**.

![Create new server page](../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/Install/Select to create a new server-new.png "Create new server page")

Step 3 – To configure a Directory Manager server or a Directory Manager client, select the relevant option.

* **Configure a new GroupID server with new or existing database** – configures the Directory Manager server and the Directory Manager Data Service on the machine where Directory Manager is being installed.

  It also configures the Directory Manager Elasticsearch Service as a master node for the Elasticsearch service cluster to support load balancing. See the [Configure a New Directory Manager Server with a New or an Existing Database](GIDServer "Configure a New Directory Manager Server with a New or an Existing Database") topic for additional information.
* **Configure a new GroupID 11 server to add it into an existing GroupID 11 cluster with an existing database** – configures a Directory Manager server that has its own Data Service. This data service gets the configurations (paraphrase and database settings) of the Data Service deployed for another Directory Manager server in your environment.

  This option also configures the Directory Manager Elasticsearch Service as a slave node to the master node for the Elasticsearch Service cluster configured on the Directory Manager server. See the [Configure a new Directory Manager server to add it to an existing Directory Manager 11 cluster with an existing database](Database "Configure a new Directory Manager server to add it to an existing Directory Manager 11 cluster with an existing database") topic for additional information.