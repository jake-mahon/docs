# Configuration Tool

You can configure GroupID immediately after installing it or later.

1. Run the Configuration Tool in one of the following ways:

    - To configure GroupID right after installation, click **Next** on the **Run Configuration
      Tool** page. See the
      [Installation Tool](/versioned_docs/groupid_11.0/groupid/install/installer/install.md) topic.
    - When GroupID is installed, the Configuration Tool is also installed as a separate program on
      the machine. Launch the GroupID Configuration Tool from the Windows Start screen.

    In either case, the tool opens to the **Introduction** page.

    ![Introduction page](/img/versioned_docs/groupid_11.0/groupid/install/configure/intro.jpg)

2. Read the welcome message and click **Next**.

    ![Create new server page](/img/versioned_docs/groupid_11.0/groupid/install/configure/select_to_create_a_new_server-new.webp)

3. To configure a GroupID server or a GroupID client, select the relevant option.

    - **Configure a new GroupID server with new or existing database** – configures the GroupID
      server and the GroupID Data Service on the machine where GroupID is being installed.

        It also configures the GroupID Elasticsearch Service as a master node for the Elasticsearch
        service cluster to support load balancing.

        See the
        [Configure a new GroupID server with a new or an existing database](/versioned_docs/groupid_11.0/groupid/install/configure/gidserver.md)
        topic for additional information.

    - **Configure a new GroupID 11 server to add it into an existing GroupID 11 cluster with an
      existing database** – configures a GroupID server that has its own Data Service. This data
      service gets the configurations (paraphrase and database settings) of the Data Service
      deployed for another GroupID server in your environment.

        This option also configures the GroupID Elasticsearch Service as a slave node to the master
        node for the Elasticsearch Service cluster configured on the GroupID server.  
         See the
        [Configure a new GroupID server to add it into an existing GroupID 11 cluster with an existing database](/versioned_docs/groupid_11.0/groupid/install/configure/database.md)
        topic for additional information.

See Also

- [Requirements](/versioned_docs/groupid_11.0/groupid/install/requirements.md)
- [Preparation Tool](/versioned_docs/groupid_11.0/groupid/install/installer/preparationtool.md)
- [Installation Tool](/versioned_docs/groupid_11.0/groupid/install/installer/install.md)
