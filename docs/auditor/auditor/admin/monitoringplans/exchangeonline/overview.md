# Exchange Online

__NOTE:__ Prior to configuring your monitoring plan, please read and complete the instructions in the following topics:

- [Protocols and Ports Required](/docs/auditor/auditor/requirements/ports.md) – To ensure successful data collection and activity monitoring configure necessary protocols and ports for inbound and outbound connections
- [Data Collecting Account](/docs/auditor/auditor/admin/monitoringplans/dataaccounts.md) – Configure data collecting accounts as required to audit your IT systems

- [Exchange Online](/docs/auditor/auditor/configuration/microsoft365/exchangeonline/overview.md) – Configure data source as required to be monitored

## How to add Exchange Online Monitoring Plan

This instruction shows how to collect audit data from the Microsoft 365 tenant.

If you plan to use modern authentication, see the [Configuring Microsoft Entra ID App for Auditing Microsoft Entra ID](/docs/auditor/auditor/configuration/microsoft365/microsoftentraid/modernauth.md#configuring-microsoft-entra-id-app-for-auditing-microsoft-entra-id) topic for additional information on how to prepare Microsoft Entra ID app with required permissions. Make sure you have the following at hand:

- Tenant name
- For modern authentication: Application (client) ID
- Application secret
- For basic authentication: User name and password

Types of data that can be collected by Netwrix Auditor from the Microsoft 365 tenant depend on the authentication option you choose.

Follow the steps to configure Office 365 tenant as a monitored item.

__Step 1 –__ On the __General__ page of the item properties, specify __Tenant name__:

- If you are going to use __Basic authentication__, you can proceed to the next step – __Tenant name__ will be filled in automatically after it.

- __NOTE:__ Basic authentication is no longer possible for Exchange Online. For the already existing tenants it is still possible to use basic authentication for SharePoint Online and Microsoft Entra ID monitoring.

- If you are going to use __Modern authentication__, paste the obtained name. See the [Using Modern Authentication with Microsoft Entra ID](/docs/auditor/auditor/configuration/microsoft365/microsoftentraid/modernauth.md) topic for additional information.

![tenantenvironment](/img/product_docs/auditor/auditor/admin/monitoringplans/tenantenvironment.png)

If you are using a government tenant, please click the __Tenant Environment__ tab and select the desired tenant environment.

__Step 2 –__ Select authentication method that will be used when accessing Office 365 services:

- Basic authentication:

  - Selected, Office 365 organization will be accessed on behalf of the user you specify.
  - Enter __User name__ and __password__; use any of the following formats: _user@domain.com_ or _user@domain.onmicrosoft.com_.
  - The __Tenant name__ field then will be filled in automatically.
  - Make sure this user account has sufficient access rights. See [Using Basic Authentication with Microsoft Entra ID](/docs/auditor/auditor/configuration/microsoft365/microsoftentraid/basicauth.md) topic for additional information.
- Modern authentication:

  - Selected, Office 365 organization will be accessed using the Microsoft Entra ID (formerly Azure AD) app you prepared. Enter:

    - __Application ID__;

      - __Application secret__.
  - See the [Using Modern Authentication with Microsoft Entra ID](/docs/auditor/auditor/configuration/microsoft365/microsoftentraid/modernauth.md) for additional information.

__Step 3 –__ Click the __Add__ button.

[![Add Office 365 Item window](/img/product_docs/auditor/auditor/admin/monitoringplans/item_o365_basic_auth_thumb_0_0.png)](/docs/auditor/resources/images/auditor/monitoringplans/item_o365_basic_auth.png)

You can use a single account to collect audit data for different Office 365 services (Microsoft Entra ID, Exchange Online, SharePoint Online); however, Netwrix recommends that you specify individual credentials for each of them.

If you plan to collect and report on the audit data for Exchange Online non-owner mailbox access, consider that the value shown in the “_Who_” field in reports and search results will be displayed in UPN format (unlike the earlier Netwrix Auditor versions). This refers to the following scenarios:

- All new installations
- Upgrade from the previous versions if:

  - Modern authentication is selected in the item settings after the upgrade.

    OR
  - Modern authentication has ever been selected in the item settings and reverted back to Basic later

__Step 4 –__ Complete the following fields:

| Option | Description |
| --- | --- |
| Monitor this data source and collect activity data |  |
| Configure audit settings | See the [Exchange Online](/docs/auditor/auditor/configuration/microsoft365/exchangeonline/overview.md) configuration topic for additional information about audit settings required to collect comprehensive audit data and the instructions on how to configure them. |
| Collect data for state-in-time reports | Configure Netwrix Auditor to store daily snapshots of your system configuration required for further state-in-time reports generation. See the [State–In–Time Reports](/docs/auditor/auditor/admin/reports/types/stateintime/overview.md) topic for additional information. |
| Collect data on non-owner access to mailboxes |  |

Review your data source settings and click __Add__ to go back to your plan. The newly created data source will appear in the __Data source__ list. As a next step, click __Add item__ to specify an object for monitoring. See the [Add Items for Monitoring](/docs/auditor/auditor/admin/monitoringplans/datasources.md#add-items-for-monitoring) topic for additional information.

See the [Office 365 Tenant](/docs/auditor/auditor/solutions/items/overview.md) topic for additional information.
