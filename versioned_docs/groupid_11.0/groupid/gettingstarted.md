# Getting Started

To get started with GroupID, it would be helpful to get an understanding of the following:

- GroupID clients
- Initial Admin Center configurations after installation
- Compatible devices and browsers
- Supported languages

## GroupID Clients

The GroupID application comprises of the following main modules or clients:

- __Admin Center__ - The administrative console that enables administrators to configure settings and controls that are essential to the functioning of GroupID.
- __GroupID portal__ - The user-facing portal that enables administrators and users to create and manage directory objects, sync data between providers, manage entitlements for file servers and SharePoint sites, and generate reports to analyze your directory.
- __GroupID mobile app__ - The app provides limited functions, like searching the directory and joining/leaving groups. These operations can also be performed through the GroupID portal, but it's handy to use the app.
- __Management Shell__ - This command-line interface is intended for users who are comfortable with scripts. Use Management Shell cmdlets to perform several group and user management functions, as an alternative to performing those same functions from the GroupID portal.
- __APIs__ - Integrate other applications with GroupID to perform several user management and group management functions.

## Initial Admin Center Configurations

After installing and configuring GroupID, the Super Admin is the only user who can sign into Admin Center. (See the [Access Admin Center](/versioned_docs/groupid_11.0/groupid/admincenter/signin.md) topic.) This user must create an identity store and configure security roles, so that other users can sign in and use the application. The Super Admin can choose to configure further settings or let another admin user in an identity store do so.

The following settings must be configured in Admin Center, so that administrators and users can perform identity and access management tasks using GroupID:

- __Create and configure identity stores__ - An identity store is built on an identity provider and enables you to manage objects and object permissions in the provider. See the [Identity Stores](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/overview.md) topic for additional information.
- __Create data sources__ - A data source is built on a provider, such as directories, databases and files. Data sources are used as source and destination in Synchronize jobs, in query-based searches, and in group membership queries. See the [ Data Sources](/versioned_docs/groupid_11.0/groupid/admincenter/datasource/overview.md) topic.
- __Create a GroupID portal__ - Create a web-based GroupID portal and link it to an identity store, so that users can carry out user, group, and entitlement management tasks. See the [GroupID Portal](/versioned_docs/groupid_11.0/groupid/admincenter/portal/overview.md) topic.
- __Create an SMS gateway account__ - Using an SMS gateway account, GroupID sends text messages to users’ mobile numbers, which may include verification codes and password reset links. See the [SMS Gateway](/versioned_docs/groupid_11.0/groupid/admincenter/smsgateway/overview.md) topic.

See the [Menu Pane](/versioned_docs/groupid_11.0/groupid/admincenter/general/navigation.md#menu-pane) topic for additional information.

## Compatibility

This section lists the browsers, devices, and languages that GroupID supports.

- __Supported devices__ - Admin Center and the GroupID portal can run on all modern desktop, laptop, and tablet devices.
- __Supported browsers__ - Admin Center and the GroupID portal support the latest versions of the following browsers:

  - Microsoft Edge
  - Safari
  - Google Chrome
  - Mozilla Firefox

## Localization

GroupID detects the language settings of the web browser accessing Admin Center or the GroupID portal, and attempts to serve the application’s content in that language. Supported languages are:

- Danish
- Dutch
- English (default)
- Finnish
- French
- German
- Icelandic
- Italian
- Portuguese
- Spanish
- Swedish
- Turkish

If GroupID does not support the browser’s language set or if it cannot detect it, English is used to serve the content.

See Also

- [ Installation](/versioned_docs/groupid_11.0/groupid/install/about.md)
- [Access Admin Center](/versioned_docs/groupid_11.0/groupid/admincenter/signin.md)
- [Access Portal](/versioned_docs/groupid_11.0/groupid/portal/login.md)
- [GroupID Management Shell](/versioned_docs/groupid_11.0/groupid/managementshell/overview.md)
- [GroupID APIs](/versioned_docs/groupid_11.0/groupid/api/welcome.md)
