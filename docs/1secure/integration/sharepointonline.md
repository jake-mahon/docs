# SharePoint Online

You can use the SharePoint Online integration for the report (Activity and Risk Assessment Dashboard) subscriptions. This way, the required reports shall be delivered to a specific folder in SharePoint Online.

| Icon | Description |
| --- | --- |
| ![alerts_editicon](/img/product_docs/1secure/integration/alerts_editicon.png) | Edit Icon. Click the Edit Icon to edit the settings of the integration type. |
| ![deletebutton](/img/product_docs/1secure/integration/deletebutton.png) | Bin Icon. Click the Bin icon to delete the SharePoint Online integration. |

## Add a SharePoint Online Integration in a System

Follow the steps to add the SharePoint Online integration in Netwrix 1Secure.

__Step 1 –__ Go to Configuration > __Integrations__ and click the __Add__ icon to add the SharePoint integration.

![Integration type pane](/img/product_docs/1secure/integration/integrationtypewindow.png)

__Step 2 –__ In the displayed Integration type window, click __SharePoint Online__ and click __Next__.

![Configure connection pane](/img/product_docs/1secure/integration/integrationconfigureconnectionsharepoint.png)

__Step 3 –__ In the Configure connection window, specify the required fields:

- Client ID – The client ID of the app registered in Microsoft Entra ID. See the [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/entraid/registerconfig.md) topic for additional information.
- Tenant ID – The tenant ID of the app registered in Microsoft Entra ID. See the [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/entraid/registerconfig.md) topic for additional information.
- Client Secret – The client secret of the app registered in Microsoft Entra ID. See the [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/entraid/registerconfig.md) topic for additional information.

See the [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/entraid/registerconfig.md) topic for additional information.

__Step 4 –__ Click __Finish__.

__NOTE:__ You must firstly add a Sites.ReadWrite.All permission in your Microsoft Entra admin center. See the [ Microsoft 365 Permissions](/docs/1secure/configuration/entraid/permissions.md) topic for additional information.

The SharePoint Online integration is added now. The status displays "Ok" in green.

![Integrations list](/img/product_docs/1secure/integration/integrationssharepointonline.png)

You can click the __Edit__ icon or the __Bin__ icon to edit or delete the integration.

See the [Subscriptions](/docs/1secure/admin/searchandreports/subscriptions.md) and [Risk Assessment Dashboard](/docs/1secure/admin/riskprofiles/riskassessmentdashboard.md) topics to learn how to add subscriptions and deliver it to SharePoint Online folder.
