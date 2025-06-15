# Configure a new GroupID server to add it into an existing GroupID 11 cluster with an existing database

While installing GroupID, you can choose to create a GroupID server with load balancing support, where load will be balanced in real time with multiple Data Services, portals and Elasticsearch instances.

This option also configures the GroupID Elasticsearch Service as a slave node to the master node for the Elasticsearch Service cluster configured on the GroupID server.

To configure a GroupID server with existing database:

1. On the __Select to create new server or use existing server__ page of the Configuration Tool, select [Configure a new GroupID server with a new or an existing database](/versioned_docs/groupid_11.0/groupid/install/configure/gidserver.md) option.
   See point # 2 on the [Configuration Tool](/versioned_docs/groupid_11.0/groupid/install/configure/configure.md) topic.
2. Click __Next__.

   ![database settings](/img/versioned_docs/groupid_11.0/groupid/install/configure/databasesettings.jpg)
3. In the __SQL Server__ list, select the SQL Server to use with this new GroupID Server. The SQL Server must be the same used with the master node of GroupID.

   If the required server does not appear in the list, make sure that __the SQL Server Browser__ service is running on the SQL Server machine and then click the __Refresh__ button.
4. In the __Authentication__ list, select an authentication mode to be used when connecting to the SQL Server database. Modes are:

   - __SQL Server Authentication__ - To set SQL Server to work with GroupID using an SQL Server account. See the [Authentication Modes](/versioned_docs/groupid_11.0/groupid/install/setupauthentication.md) topic for additional information.
   - __Windows Authentication__ - To set SQL Server to work with GroupID using a Windows user account. See the [Authentication Modes](/versioned_docs/groupid_11.0/groupid/install/setupauthentication.md) topic for additional details.
5. Depending on the authentication mode selected, do the following:

   - For SQL Server Authentication: enter the user name and password of the selected SQL Server in the __SQL Username__ and __SQL Password__ boxes.
   - For Windows Authentication: User name and password fields will be disabled with Windows Authentication. The logged-in user credentials will be populated here.
6. In the __SQL Database__ box, specify name of the SQL database being used by the master GroupID node. This new GroupID instance will use the same database.

   NOTE:  While configuring a new GroupID machine with an existing database option, the Copy Database button has no relevance here.
7. Click __Next__.

   ![License page](/img/versioned_docs/groupid_11.0/groupid/install/configure/license_w_existing_db_option.jpg)
8. On the __License__ page, license information of GroupID installed on the master node is displayed. A valid license and key enable the __Next__ button. If the __Next__ button remains disabled, check your entries for errors.
9. Click __Next__.

   ![GroupID Service Configurations](/img/versioned_docs/groupid_11.0/groupid/install/configure/servicesconfiguration.jpg)
10. GroupID requires two services:

    - __GroupID Data Service__: This is a web-based service that GroupID uses to communicate with Microsoft SQL Server for storing and fetching data in the database.
    - __GroupID Security Service__: This is also a web-based service that GroupID uses to:

      - Authenticate and authorize users on different GroupID functionalities in accordance with their roles.
      - Encrypt and decrypt data that GroupID Data Service stores and fetches from the SQL database.

      To deploy these services, the Configuration Tool creates and configures a new website in IIS with the name GroupIDSite11. By default, it binds this site to any of the available ports. However, if you have a different preference, you can change the port.

      Click __Advanced Options__ and enter the port in __the Port Number__ box.
    - __Replication service__: This service replicates object attributes from the provider (such as Active Directory) to Elasticsearch.
    - __Admin Center__: Admin Center is a web-based application that can be accessed over the Internet and Intranet.

    NOTE: This GroupID instance will use Email and Scheduler services of the selected cluster.
11. Click __Next__.

    ![Elasticsearch Settings page](/img/versioned_docs/groupid_11.0/groupid/install/configure/elasticsearchsettings.jpg)
12. GroupID provides the following two options for Elasticsearch configuration. Select the relevant option:

    - __Let GroupID install and manage Elasticsearch__: If you select this option, GroupID Configuration Tool will install Elasticsearch. It presents you default configuration of Elasticsearch cluster it will create:

      ![Select Elastic Cluster page](/img/versioned_docs/groupid_11.0/groupid/install/configure/select_cluster_w_existing_db_option.png)

      1. __Cluster Name__: lists all the clusters defined so far. Select one to create an Elasticsearch node within the selected cluster.
      2. __Port__: the default port for Elasticsearch API communication. Modify the port number if the mentioned default port is not available.
      3. __TCP Port__: the default port for communication between nodes within the cluster. Modify the port number if the mentioned default port is not available.

         NOTE: Make sure that the specified ports are available and unblocked.
    - __I will install and manage Elasticsearch myself__: If you select this option, the following page is displayed:

      ![Elasticsearch settings page](/img/versioned_docs/groupid_11.0/groupid/install/configure/elasticsearchsettings-2.jpg)

      Provide configurations of Elasticsearch you want to use with GroupID:

      - __Elasticsearch URL__: URL for accessing the Elasticsearch.
      - __Elasticsearch Username__: service account for Elasticsearch.
      - __Elasticsearch Password__: password of the Elasticsearch service account.
13. Click __Next__.

    ![Service Account Settings page](/img/versioned_docs/groupid_11.0/groupid/install/configure/service_account_settings_w_existing_db.jpg)

    NOTE: If you configure a Group Managed Service Account (gMSA) as an App Pool service account then the GroupID Configuration tool will add this account in the local administrators and IIS_IUSRS groups.

    NOTE: If you configure a normal user account as an App Pool service account and an AD identity store is created with a gMSA service account, then the App Pool service account must have the _PrincipalsAllowedToRetrieveManagedPassword_ property. The App Pool service account also must be a member of Backup Operators and IIS_IUSRS groups.
14. The __Service Account Settings__ page, specify the service account to use for the GroupID app pool in IIS and Windows services.

    - Use a domain account or a Group Managed Service Account (gMSA).
    - The account must be a member of the Administrators group or both the Backup Operators and IIS_IUSRS groups.
    - The account you specify will be used to manage the GroupID app pool in IIS. GroupID Data Service, Mobile Service, Security Service, and the portals run under the app pool.
    - By default, a local account, GroupIDSSuser, is set for the GroupID app pool, but you cannot proceed unless you change it to a domain account or gMSA.
    - You can specify a local account (with local administrator rights) in app pool for a machine that is not joined to any domain (this applies to an Microsoft Entra ID identity store only).

      NOTE: For GroupID App Pool, a domain account can be used for a machine joined to a domain.

      NOTE: Before you use a Group Managed Service Account, make sure that:

      - Key Distribution Service (KDS) is enabled on the GroupID machine.
      - Microsoft AD module for PowerShell is installed on the machine.
15. You can specify a service accounts for the app pool in any of the following ways:

    - __Use an existing account__: Click __Browse__.

      ![Find Service Account page](/img/versioned_docs/groupid_11.0/groupid/install/configure/findserviceaccount.jpg)

      On the __Find Service Account__ dialog box, search and select the required account and click __OK__.
    - __Create a new service account__: Click the __Create New__ button on the Service Account Setting page.

      ![Create a new service account page](/img/versioned_docs/groupid_11.0/groupid/install/configure/createserviceaccount.jpg)

      On the __Create Service Account__ dialog box, select the kind of account you want to create. Enter a name, container and password for the account. Click __Create__.

      NOTE: The logged-in user must have appropriate rights to create a new account.

      NOTE: If Key Distribution Service (KDS) is not configured in the environment, a warning will be displayed that you cannot use a Group Managed Service Account.
16. Provide password for the App Pool service account (except for a Group Managed Service Account) in the Password box.
17. Click __Configure__.

    ![Configuring GroupID ](/img/versioned_docs/groupid_11.0/groupid/install/configure/configuring.jpg)
18. The next page displays the progress while a GroupID server is configured on the machine.

    ![GroupID Configured successfully](/img/versioned_docs/groupid_11.0/groupid/install/configure/configuresuccess.jpg)
19. This completes the configuration of GroupID as a slave node on your machine.   
    Click __Launch GroupID__ to start using GroupID. The Sign In page opens:

    ![GroupID Sign In page](/img/versioned_docs/groupid_11.0/groupid/install/configure/launchgid.jpg)

    To login in to GroupID Admin Center for the first time, provide GroupID Administrator user name and password.

    or

    click __Next__ to launch the Upgrade wizard for upgrading GroupID.

See Also

- [Configuration Tool](/versioned_docs/groupid_11.0/groupid/install/configure/configure.md)
