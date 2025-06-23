---
title: Getting Started with Directory Manager
sidebar_label: Getting Started
description: Learn Directory Manager fundamentals including clients, Admin Center configuration, device compatibility, and language support for successful deployment.
---

# Getting Started

To get started with GroupID, it would be helpful to get an understanding of the following:

- GroupID clients
- Initial Admin Center configurations after installation
- Compatible devices and browsers
- Supported languages

## GroupID Clients

The GroupID application comprises of the following main modules or clients:

- **Admin Center** - The administrative console that enables administrators to configure settings
  and controls that are essential to the functioning of GroupID.
- **GroupID portal** - The user-facing portal that enables administrators and users to create and
  manage directory objects, sync data between providers, manage entitlements for file servers and
  SharePoint sites, and generate reports to analyze your directory.
- **GroupID mobile app** - The app provides limited functions, like searching the directory and
  joining/leaving groups. These operations can also be performed through the GroupID portal, but
  it's handy to use the app.
- **Management Shell** - This command-line interface is intended for users who are comfortable with
  scripts. Use Management Shell cmdlets to perform several group and user management functions, as
  an alternative to performing those same functions from the GroupID portal.
- **APIs** - Integrate other applications with GroupID to perform several user management and group
  management functions.

## Initial Admin Center Configurations

After installing and configuring GroupID, the Super Admin is the only user who can sign into Admin
Center. (See the [Access Admin Center](/docs/directorymanager/11.0/administration/admin-center/index.md)
topic.) This user must create an identity store and configure security roles, so that other users
can sign in and use the application. The Super Admin can choose to configure further settings or let
another admin user in an identity store do so.

The following settings must be configured in Admin Center, so that administrators and users can
perform identity and access management tasks using GroupID:

- **Create and configure identity stores** - An identity store is built on an identity provider and
  enables you to manage objects and object permissions in the provider. See the
  [Identity Stores](/docs/directorymanager/11.0/configuration/identity-stores/index.md)
  topic for additional information.
- **Create data sources** - A data source is built on a provider, such as directories, databases and
  files. Data sources are used as source and destination in Synchronize jobs, in query-based
  searches, and in group membership queries. See the
  [ Data Sources](/docs/directorymanager/11.0/configuration/data-sources/index.md) topic.
- **Create a GroupID portal** - Create a web-based GroupID portal and link it to an identity store,
  so that users can carry out user, group, and entitlement management tasks. See the
  [GroupID Portal](/docs/directorymanager/11.0/configuration/services/portal-configuration.md) topic.
- **Create an SMS gateway account** - Using an SMS gateway account, GroupID sends text messages to
  users’ mobile numbers, which may include verification codes and password reset links. See the
  [SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) topic.

See the
[Menu Pane](/docs/directorymanager/11.0/user-guide/portal/navigation.md#menu-pane) topic
for additional information.

## Compatibility

This section lists the browsers, devices, and languages that GroupID supports.

- **Supported devices** - Admin Center and the GroupID portal can run on all modern desktop, laptop,
  and tablet devices.
- **Supported browsers** - Admin Center and the GroupID portal support the latest versions of the
  following browsers:

  - Microsoft Edge
  - Safari
  - Google Chrome
  - Mozilla Firefox

## Localization

GroupID detects the language settings of the web browser accessing Admin Center or the GroupID
portal, and attempts to serve the application’s content in that language. Supported languages are:

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

If GroupID does not support the browser’s language set or if it cannot detect it, English is used to
serve the content.

See Also

- [ Installation](/docs/directorymanager/11.0/getting-started/index.md)
- [Access Admin Center](/docs/directorymanager/11.0/administration/admin-center/index.md)
- [Access Portal](/docs/directorymanager/11.0/user-guide/portal/dashboard.md)
- [GroupID Management Shell](/docs/directorymanager/11.0/automation/management-shell/index.md)
- [GroupID APIs](/docs/directorymanager/11.0/automation/apis/index.md)

# Installation

The GroupID installer auto detects the prerequisite software and Windows features that GroupID
requires, and installs them without any manual intervention. This has practically simplified GroupID
installation, reduced workloads, and diminished installation time.

Furthermore, GroupID configuration and upgrade has been seamlessly integrated into the installation
experience.

See Also

- [Requirements](/docs/directorymanager/11.0/getting-started/requirements.md)
- [Preparation Tool](/docs/directorymanager/11.0/getting-started/installation/preparation-tool.md)
- [Installation Tool](/docs/directorymanager/11.0/getting-started/installation/install-groupid.md)
- [Configuration Tool](/docs/directorymanager/11.0/getting-started/installation/post-installation.md)

# Netwrix GroupID v11.0 Documentation

Managing directory objects (for example, Active Directory users and groups) can be a challenge:
Employees move locations, change departments, and start new groups all the time. As a result, IT
professionals are faced with the daunting task of continually managing and updating security and
distribution groups — often having to do so manually.

GroupID is an IAM solution that makes it easy to stay on top of all the changes, requests, and
requirements that IT sees every day.

## GroupID Functions

GroupID works with a directory service, such as Active Directory, to facilitate the following:

- Group management
- User management
- Entitlement management
- Password management

### Group Management

GroupID offers administration and automation features for directory groups. You can:

- Define rules to manage group memberships dynamically as changes occur within your organization.
- Automate group lifecycle through membership attestation, auto expiry, and deletion.
- Link identical groups in different directory services, such as Active Directory and Microsoft
  Entra ID.
- Create hierarchy-based nested groups to mirror the geographical, organizational, and managerial
  structure of your organization.
- Delegate group management to end users by enabling them to:

  - Create and manage their own groups
  - Create teams and channels in MS Teams
  - Join and leave the membership of groups

### User Management

With GroupID, you can:

- Automate user provisioning and deprovisioning in bulk.
- Establish ownership by defining a clear managerial hierarchy with dotted line management.
- Delegate user management to end users by enabling them to:

  - Create and manage users, contacts, and mailboxes in the directory.
  - Manage their direct reports.
  - Update their profiles in the directory.

- Link identical users in different directory services, such as Active Directory and Microsoft Entra
  ID.

### Entitlement Management

Stay informed on the permissions assigned to objects residing on your Active Directory file servers
and SharePoint sites.

- View entitlements from both an object’s perspective and a resource’s perspective.
- Evaluate entitlements to limit users and groups to the least privileges.
- Manage entitlements by assigning necessary permissions, modifying permissions, and revoking
  unnecessary permissions on the go.

### Password Management

Different password management functions are available for administrators, helpdesk, and end users.

- Administrators can define stringent password checks, such as disallow passwords starting with,
  ending with, or containing certain words or phrases; define regular expressions to set a syntax
  for allowed passwords; and even specify a list of disallowed passwords using an external file.
- Users can reset their own passwords and unlock their own accounts after passing multifactor
  authentication.
- Helpdesk can reset passwords and unlock accounts for users after authentication.
