# Permissions for SharePoint Online Auditing

Auditor allows you to audit Microsoft 365 organizations that have established modern authentication
as their identity management approach, including support for
[multi-factor authentication (MFA)](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks).
To learn more about modern authentication, refer to the following Microsoft article:
[What is modern authentication](https://docs.microsoft.com/en-us/office365/enterprise/hybrid-modern-auth-overview#what-is-modern-authentication).

In this scenario, Netwrix Auditor will access the cloud-based infrastructure via Microsoft Graph and
other modern APIs, being authenticated through a pre-configured Microsoft Entra ID (formerly Azure
AD) application with appropriate access permissions. So, you should register an Microsoft Entra ID
app and provide its settings to Auditor  when configuring a monitored item.

## Authentication for SharePoint Online Auditing

To collect audit data from your SharePoint Online and OneDrive for Business, Netwrix Auditor uses a
dedicated Microsoft Entra ID application and leverages APIs access permissions granted to that app.
To register this application and assign required permissions, an Microsoft Entra ID account with an
administrative role will be required:

- If Modern Authentication is used:
    - Microsoft Entra ID application should be created manually by user with administrative role and
      assigned required permissions. This app will allow you to collect both activity and
      state-in-time data. See the
      [Configuring Microsoft Entra ID App for Auditing SharePoint Online](/versioned_docs/auditor_10.6/auditor/configuration/microsoft365/sharepointonline/modernauth.md#configuring-microsoft-entra-id-app-for-auditing-sharepoint-online)
      section for additional information.
    - You will need to provide the Microsoft Entra ID app settings in the monitored item (Microsoft
      365 tenant) properties. See the
      [Microsoft Entra ID](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/microsoftentraid/overview.md)
      topic for additional information.

See the
[Using Modern Authentication with SharePoint Online](/versioned_docs/auditor_10.6/auditor/configuration/microsoft365/sharepointonline/modernauth.md)
topic for additional information.

- If Basic Authentication is used:

    - Microsoft Entra ID application named **Netwrix Auditor for Microsoft Entra ID** will be
      created automatically when Netwrix Auditor connects to the monitored item (Microsoft 365
      tenant) for the first time. Thus, you will need to prepare an Microsoft 365 user account with
      an administrative role in Microsoft Entra ID — to create an app and perform initial data
      collection.
    - Provide this user name and password in the monitored item properties. See the
      [Microsoft Entra ID](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/microsoftentraid/overview.md)
      topic for additional information.
    - Permissions for ongoing data collection will depend on data you plan to collect:

        - To collect both activity (event-based) and state-in-time data, the administrative role
          will be still needed.
        - To collect activity data only, the privileged role can be revoked from the specified
          account after the initial data collection.

See the
[Using Basic Authentication with SharePoint Online](/versioned_docs/auditor_10.6/auditor/configuration/microsoft365/sharepointonline/basicauth.md)
topic for additional information.
