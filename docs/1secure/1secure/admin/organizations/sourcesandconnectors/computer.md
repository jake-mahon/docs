# Add a Source and Connectors for Computer

Follow the steps to add a Computer data source and connector(s) to your organization.

__Step 1 –__ Click __Configuration__ in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

__Step 2 –__ Click an organization to define a data source and connector(s) for it. The properties page for the organization is displayed with the Sources tab selected by default.

__Step 3 –__ On the Sources tab, click __Add__ to add a source. The Select Data Source (Step 1 of 3) pane is displayed.

![Select Data Source %28Step 1 of 3%29 pane](/img/product_docs/1secure/1secure/admin/organizations/sourcesandconnectors/addsources_exchange.png)

__Step 4 –__ Select __Computer__ and click __Next__.

![Configure Source Details %28Step 2 of 3%29 pane](/img/product_docs/1secure/1secure/admin/organizations/sourcesandconnectors/configuresourcedetails%28step2-3%29.png)

__Step 5 –__ On the Configure source details (Step 2 of 3) pane, use the Site drop-down menu to select an existing site or add a new one. To add a new site, select the __Add new site__ option from the drop-down menu or click the __Add__ icon.

- When you choose to add a new site, you have to provide a name for it in the New site name field. Then click __Next__ to proceed with configuring the agent for the site. See the [Install Agent](/docs/1secure/1secure/install/installagent.md) topic for details on configuring the agent, starting at Step 6.
- When you select an existing site from the drop-down menu, one of the following happens:

  - If the agent has not been configured for the site, the system will proceed with the agent configuration when you click _Next_. See the [Install Agent](/docs/1secure/1secure/install/installagent.md) topic for details on configuring the agent, starting at Step 6.
  - If the agent has already been configured for the site, the system will proceed with the Computer source and connector settings when you click _Next_.

__Step 6 –__ Click __Next__.

![Configure Source Details %28Step 2 of 3%29 pane](/img/product_docs/1secure/1secure/admin/organizations/sourcesandconnectors/configsourcedetails%28step2of3%29.png)

__Step 7 –__ Select the __Manual__ or __AD Container__ option button.

- Manual – Select this option to crawl a single computer or all computers within a domain. Specify the following:

  - Endpoint – Specify the IP address, fully qualified domain name (FQDN), or NetBIOS name of the computer to crawl. If you specify a FQDN, all computers within that domain will be crawled.
  - Source Name – Specify a name for the data source
  - Computer source group – Displays the computer source groups that have already been added, while also providing the option to add a new source group. Grouping sources, such as computers, allows them to share a common configuration and makes it easier to manage related sources together. Select an existing source group or add a new one. To add a new source group, select __Add new computer source group__ from the drop-down menu or click the __Add__ icon, then specify a name for the source group in the Add new computer source group field.
- AD Container – Select this option to crawl the computers within an Active Directory container, then specify:

  - Domain Name – Specify the FQDN of the domain the container exists in.
  - Container Name – Specify the name of the container to crawl its computers.
  - Detection Interval – Specify the time interval (in hour(s) and minutes(s)) after which the source group will automatically detect the computers for auditing.
  - Source Group – Specify a name for the group to which the data source will belong. Grouping sources, such as computers, allows them to share a common configuration and makes it easier to manage related sources together.
- Crawl Source – Toggle this option to ON to enable data collection for the source
- Credentials – Displays the crdentials that have already been added, while also providing the option to add new credentials. Netwrix 1Secure uses these credentials to connect to the data source. You can select existing credentials or add new ones. To add new credentials, select __Add new Credentials__ from the drop-down menu or click the __Add__ icon, then specify the following:

  - Username – The name of a user account with the access rights to collect data from a computer or all computers in a domain. Provide the username in the Domain\UserAccount format.
  - Password – The password of the user account
  - Display Name – Specify a name you want to show for your credentials. It will be displayed on the Credentials tab of the Managed Organizations page.

__Step 8 –__  Click __Next__.

![Choose New Connector %28Step 3 of 3%29 pane](/img/product_docs/1secure/1secure/admin/organizations/sourcesandconnectors/computer_chooseconnector.png)

__Step 9 –__ The Choose new connector pane (Step 3 of 3) lists one connector for computer. Specify the following:

- File Server Activity – Toggle the __File Server Activity__ switch to ON to collect and monitor data for this connector. With this, you can generate activity reports on File Server data. See the [File Server](/docs/1secure/1secure/admin/searchandreports/activity.md#File-Server) topic for additional information.
- Enable traffic network compression – Select this checkbox to enable traffic network compression for the connector. See the [Network Traffic Compression](/docs/1secure/1secure/configuration/networktrafficcompression.md) topic for additional information.

  __CAUTION:__ If Netwrix Auditor and Netwrix 1Secure audit the same domain, make sure that the network traffic compression service is enabled for only one of the products or neither product for any of the audited services. It cannot be enabled for both products.
- Adjust audit settings automatically – Select this checkbox to adjust the audit settings automatically. With this approach, 1Secure will check your current audit settings at each data collection session and adjust them if necessary. See the [Active Directory: automatic configuration](/docs/1secure/1secure/configuration/ad/auto.md) topic for additional information.
- Monitor User Hidden Shares – Select this checkbox to monitor the user hidden shares on the computer.

  __NOTE:__ The administrative hidden shares such as admin$ will not be monitored.
- Advanced Activity Selection – Select this checkbox to choose the successful and failed actions to audit on the computer.

![Advanced Activity Selection options](/img/product_docs/1secure/1secure/configuration/computer/objectlevelaccessaudit.png)

__Step 10 –__ Click __Finish__.

The Computer data source and connector have been configured.
