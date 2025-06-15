# Add a Source and Connectors for Microsoft Entra ID

Follow the steps to add a Microsoft Entra ID data source and connector(s) to your organization.

__Step 1 –__ Click __Configuration__ in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

__Step 2 –__ Click an organization to define a data source and connector(s) for it. The properties page for the organization is displayed with the Sources tab selected by default.

__Step 3 –__ On the Sources tab, click __Add__ to add a source. The Select Data Source (Step 1 of 3) pane is displayed.

![Select Data Source %28Step 1 of 3%29 pane](../../../../../static/img/product_docs/1secure/admin/organizations/sourcesandconnectors/addsources_exchange.webp)

__Step 4 –__ Select __Entra ID__ and click __Next__.

![Configure Source Details %28Step 2 of 3%29 pane](../../../../../static/img/product_docs/1secure/admin/organizations/sourcesandconnectors/entra_configsourcedetails%28step2of3%29.webp)

__Step 5 –__ On the Configure source details (Step 2 of 3) pane, specify the following settings:

- Source Group – Specify a name for the group to which the data source will belong. Grouping sources, such as computers, allows them to share a common configuration and makes it easier to manage related sources together.
- Tenant ID – The tenant ID of the app registered in Microsoft Entra ID. See the [App Registration and Configuration in Microsoft Entra ID](../../../configuration/entraid/registerconfig.md) topic for additional information.
- Crawl Source – Toggle this option to ON to enable data collection for the source
- Service Account Entra ID Groups – Specify Microsoft Entra ID groups to exclude their service accounts from billable domain accounts so that they are not audited. To specify a Microsoft Entra ID group, enter its name and click the __Add__ icon. To specify multiple Microsoft Entra ID groups, add them one by one.
- Credentials – Displays the crdentials that have already been added, while also providing the option to add new credentials. Netwrix 1Secure uses these credentials to connect to the data source. You can select existing credentials or add new ones. To add new credentials, select __Add new Credentials__ from the drop-down menu or click the __Add__ icon, then specify the following:

  - Client ID – The client ID of the app registered in Microsoft Entra ID. See the [App Registration and Configuration in Microsoft Entra ID](../../../configuration/entraid/registerconfig.md) topic for additional information.
  - Client Secret – The client secret of the app registered in Microsoft Entra ID. See the [App Registration and Configuration in Microsoft Entra ID](../../../configuration/entraid/registerconfig.md) topic for additional information.
  - Download Certificate – For certain connectors, such as SharePoint Online State, authentication requires a certificate instead of a client secret. Download this certificate and then upload it to the app registered in Microsoft Entra ID. See the [Upload a Certificate](../../../configuration/entraid/registerconfig.md#upload-a-certificate) topic for additional information.
  - Display Name – Specify a name you want to show for your credentials. It will be displayed on the Credentials tab of the Managed Organizations page.

__Step 6 –__ Click __Next__.

![Choose New Connector %28Step 3 of 3%29 pane](../../../../../static/img/product_docs/1secure/admin/organizations/sourcesandconnectors/entra_connector%28step3of3%29.webp)

__Step 7 –__ The Choose new connector (Step 3 of 3) pane lists three connectors for Microsoft Entra ID. Specify the following:

- Entra ID Activity – Toggle the __Entra ID Activity__ switch to ON to collect and monitor data for this connector. With this, you can generate activity reports on Microsoft Entra ID data. See the [Microsoft Entra ID](../../searchandreports/activity.md#microsoft-entra-id) topic for additional information.
- Entra ID Logons – Toggle the __Entra ID Logons__ switch to ON to collect and monitor data for this connector. With this, you can generate logon reports on Microsoft Entra ID data. See the [Microsoft Entra ID](../../searchandreports/activity.md#microsoft-entra-id) topic for additional information.

  - Collect Failed Logons – Select this checkbox to collect the failed logon data for Microsoft Entra ID logon reports.
  - Collect Successful Logons – Select this checkbox to collect the successful logon data for Microsoft Entra ID logon reports.

- Entra ID State – Toggle the __Entra ID State__ switch to ON to collect and monitor data for this connector. With this, you can generate state-in-time reports on Microsoft Entra ID data. See the [State In Time Risks Reports](../../searchandreports/stateintime.md) topic for additional information.

__Step 8 –__ Click __Finish__.

The Microsoft Entra ID data source and connector(s) have been configured.
