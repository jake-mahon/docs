# Access your Applications

Directory Manager users can have access to Directory Manager applications such as:

- Admin Center
- Directory Manager portals, including the Self-Service Password Reset portals
- Third-party apps that Directory Manager services as an identity provider for single sign-on (SSO)

You can view a list of your applications and launch them from Admin Center without having to
authenticate with a user name and password.

What do you want to do?

- Access an Application
- Add a Third-party Application
- Enroll your Account

## Access an Application

1. In Admin Center, click your name in the top right corner and select **My Applications**.
2. The **GroupID Applications** page displays the applications that you can access. Click an
   application to launch it.

## Add a Third-party Application

Directory Manager can serve as an identity provider to facilitate SSO for third-party apps. You can
add a third-party application as a service provider to authenticate its users through Directory
Manager.

To add a third-party application:

1. In Admin Center, click your name in the top right corner and select **My Applications**.
2. Click **Add Apps** on the **GroupID Applications** page to add a third-party application. You are
   redirected to the **Create Application** page, where you can provide the details of the
   application you want to add as a service provider in Directory Manager. See the
   [Register an Application (Service Provider) in Directory Manager](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md)
   topic.

## Enroll your Account

1. In Admin Center, click your name in the top right corner and select **My Applications**.
2. Click **Enroll your account** on the **GroupID Applications** page to enroll the identity store
   account with which you are signed into Admin Center. See the
   [Enroll your Identity Store Account](/docs/directorymanager/11.1/getting-started/enrollment.md) topic for enrollment details.

# Change your Password

You can change the password of your identity store account. After changing it, use the new password
to sign into Directory Manager and other applications that use your domain account.

You can change password according to the password policy the administrator has enabled for the
identity store. The administrator can either enable
[Directory Manage Password Policy ](/docs/directorymanager/11.1/administration/security-policies.md) or Netwrix Password Policy
Enforcer policies for the identity store.

## Change your Password

Follow the steps to change your password.

Step 1 – In Admin Center, click your name in the top right corner and select **Change Password**.

Step 2 – On the Change Password page, enter your current password in the **Current Password** box.  
By default, password characters are represented by dots. Use the toggle button in the box to show or
hide characters.

Step 3 – Enter a new password in the **New Password** and **Confirm Password** boxes. The new
password must conform to the rules of the applied password policy for the identity store.

Step 4 – Click **Change Password**.

NOTE: MFA enabled Microsoft Entra ID users cannot change their passwords in Directory Manager. If
they try to use the option, the following message is displayed:.

![Admin Center Change Password error message for an Entra ID user](/img/product_docs/directorymanager/directorymanager/admincenter/general/changepassword.webp)

If the user's account is a master account, password of its child accounts also cannot be changed in
Directory Manager.

# Group Management Concepts

To make the best of Directory Manager, you must be familiar with the following group management
concepts:

- Group Classification
- Group Types
- Group Scope
- Group Security Types

## Group Classification

Using Directory Manager, you can manage the following three kinds of groups:

- Unmanaged Groups
- Smart Groups
- Dynasties

### Unmanaged Groups

An unmanaged group, also called a static group, is a group you normally create in a directory, for
example, by using the Active Directory Users and Computers console. Though such groups can be
created using the Directory Manager portal and Management Shell, Directory Manager does not support
dynamic updates to them. Any changes to the membership have to be updated manually.

### Smart Groups

A Smart Group is one that dynamically maintains its membership based on rules. These rules are
applied in the form of a user-defined query, such as an LDAP query. This query is defined once and
scheduled for membership update using a Smart Group Update schedule. When the schedule runs, it
applies the defined rules to the directory and fetches matching records to update the group's
memberships.

In this way, Smart Groups are automatically updated whenever the user information changes in the
directory. This automated group management allows administrators to easily maintain large
distribution lists and security groups without having to manually add or remove members.

### Dynasties

A Dynasty is a Smart Group that creates and manages other Smart Groups using information in the
directory. Dynasties help you manage large distribution lists by creating hierarchical group
structures that represent your organization. The Smart Groups that the Dynasty creates are called
child groups and become members of their respective parent Dynasty.

A Dynasty retrieves data from the directory on the same pattern as a Smart Group does, but it has
its own mechanism of dividing the query results into child groups.

#### The Group-by Field Determines Child Groups

When you create a Dynasty, you specify a query and a field, referred to as the group-by field. The
group-by field is used to divide the query results into groups.

For example, if you set ‘department’ as the group-by field, then each distinct value for the
‘department’ field is returned, for instance, Sales, Marketing, and Human Resources. Thus, a Dynasty
with the group-by field set to ‘department’ creates child groups for each distinct value: Sales,
Marketing, and Human Resources.

#### Built-in Updates

Directory Manager keeps the Dynasty active in two ways:

- By adding new child groups as new values are returned for the group-by field.
- By removing existing child groups as previous values of the group-by field no longer exist in the
  directory.

Thus, as new values of the ‘department’ field appear, new groups are created, and as old values
disappear, the corresponding child groups are deleted.

The same process occurs with the membership of each child group. When a user’s department changes
from Sales to Marketing, for example, the user is removed from the Sales child group and added to
the Marketing child group.

#### The Parent-child Relationship

Dynasty children inherit their parent's characteristics and properties, such as group type, group
security, expiry policy, owner, delivery restrictions, message size restrictions and more.
Inheritance saves administrators incalculable time through the systematic application of predefined
properties to new groups.

You can modify the values of all inherited attributes for a child, except the expiry policy. Child
Dynasties always inherit the expiry policy from the parent Dynasty and it can only be modified at
the parent level.

#### Dynasty Types

Directory Manager provides the following templates for creating Dynasties:

- Organizational - To create a Smart Group for every distinct company, then for each department
  within a company, and finally for each title in a department.
- Geographical - To create a Smart Group for every distinct country, then for each state within a
  country, and finally for each city within a state.
- Managerial - To either create separate Smart Groups for the direct reports of each manager or add
  all direct reports of the top manager and sub-level managers to a single group.
- Custom - To begin with a blank Dynasty and select your own group-by attributes.

These templates provide predefined group-by attributes for creating Dynasty levels. You can also
define custom group-by attributes to expand the Dynasty levels to suit your organizational model.
You can also combine an external data source with the templates to provide extended criteria for
determining group membership.

## Group Types

Groups fall into two functional categories: distribution groups and security groups.

### Distribution Groups

Distribution groups, also called distribution lists, are designed to combine users together so that
you can send emails (via a mail server) to a group rather than individually to each user in the
group.

Distribution groups can be used only with email applications, such as Microsoft Exchange. These
groups are not security-enabled, which means that they cannot be listed in discretionary access
control lists (DACLs). If you need a group for controlling access to shared resources, create a
security group.

### Security Groups

Security groups provide an efficient way to assign access to resources on your network. Using
security groups, you can:

- Assign user rights - User rights are assigned to security groups to determine what members of that
  group can do within the scope of a domain (or forest). For example, a user who is added to the
  Backup Operators group can back-up and restore files and directories located on each domain
  controller in the domain. By being a member of this group, you inherit the user rights assigned to
  the group.
- Assign permissions to resources - This is different from user rights because user rights apply
  across an entire domain versus permissions that are directed to a specific entity. Permissions
  determine who can access the resource and the level of access, such as Full Control or Read-only.

Security groups can also be used as a distribution group in Exchange. These are known as
security-enabled distribution groups.

## Group Scope

Groups are characterized by a scope that identifies the extent to which the group is applied in a
domain or forest. The boundary, or reach, of a group scope is also determined by the domain
functional level of the domain in which it resides.

A group’s scope determines:

- the domains from where members can be added to the group
- the domains where the group can be used to grant permissions
- the domains where the group can be nested in other groups

A group can be of universal, global, or domain local scope.

### Universal

Use groups with universal scope to consolidate groups that span domains. To do this, add the
accounts to groups with global scope, and then nest these groups within groups that have universal
scope. When you use this strategy, any membership changes in the groups that have global scope do
not affect the groups with universal scope.

Do not change the membership of a group with universal scope frequently, because membership changes
cause the entire membership of the group to be replicated to every global catalog in the forest.

### Global

Use groups with global scope to manage directory objects that require daily maintenance, such as
user and computer accounts. Because groups with global scope are not replicated outside their own
domain, you can change accounts in a group having global scope frequently without generating
replication traffic to the global catalog.

As a best practice, you should use global groups or universal groups rather than domain local groups
when you specify permissions on domain directory objects that are replicated to the global catalog.

A global group can contain users, computers, and groups from the same domain but not universal
groups.

### Domain Local

Groups with domain local scope help you define and manage access to resources within a single
domain. For example, to give five users access to a printer, you can add all five user accounts in
the printer permissions list.

A domain local group can contain users, computers, global groups, and universal groups from any
domain in the forest and any trusted domain, as well as domain local groups from the same domain.
Such a group can be a member of any domain local group in the same domain.

## Group Security Types

A group’s security type determines how non-members can access the group and become its members.
Directory Manager provides three security types:

- Private - to restrict access to the group to members selected by the group owner. Only the owner
  can add or remove members from the group. Requests to join or leave the group cannot be submitted.
- Semi-Private - to restrict access to the group to members selected by the group owner. However,
  requests to join or leave the group can be sent to the owner.
- Public - to allow all users to access the group. Users can join or leave the group at will and do
  not require any permissions to do so. The administrator can configure email notifications to be
  sent to the group owner when a user joins or leaves the group.

# Manage the Global Question Pool

Directory Manager provides a list of predefined security questions for enrollment and
authentication. You can update this list by adding or removing questions.

When an identity store is created, four questions from this global pool are automatically added to
the identity store's local question pool. This pool is not shared with other identity stores.

What do you want to do?

- Add a Question to the Question Pool
- Remove a Question from the Question Pool

## Add a Question to the Question Pool

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **GroupID Settings** page, click the **Question Pool** tab.
3. To add a question, click **Add New Question**.
4. On the **Add New Question** dialog box, type a security question in the **Question** box and
   click **Add Question**."The new question is displayed on the **Question Pool** tab. Questions are
   sorted in alphabetical order.

**Search a question in the list:**

To search for a security question in the list, enter a search string in the search box and press
**Enter**. Questions that contain the string will be filtered.

## Remove a Question from the Question Pool

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **GroupID Settings** page, click the **Question Pool** tab.
3. On the **Question Pool** tab, click **Delete** for a question to delete it.
4. Click **Delete** on the **Delete Question** dialog box.  
   Deleting a question does not impact the users currently enrolled with the question.

**See Also**

- [Set up Authentication via Security Questions](/docs/directorymanager/11.1/configuration/authentication/authentication-methods.md)
- [Directory Manage Password Policy ](/docs/directorymanager/11.1/administration/security-policies.md)
- [Manage the Local Question Pool](/docs/directorymanager/11.1/configuration/identity-stores.md)

# Admin Center History

Directory Manager auto tracks the following actions performed in Admin Center:

- Creation and deletion of identity store
- Creation and deletion of SMS gateway accounts
- Creation and deletion of applications, namely Directory Manager portal, Data service, and Security
  service
- Addition and removal of security questions in the global question pool
- Changes to global replication settings
- Manual sending and deletion of notifications in the notification queue
- Modifications to notification templates

History can be viewed using the **History** node in Admin Center. You can:

- Annotate a history action that you have performed. These annotations may explain the reason for
  performing an action.
- Narrow down the history items using filters.
- Export history data to Microsoft Excel, CSV, and XML formats.

See the [History in Directory Manager](/docs/directorymanager/11.1/administration/audit-history.md) and
[Event Logging](/docs/directorymanager/11.1/configuration/identity-stores.md) topics for additional information.

What do you want to do?

- View Admin Center History
- Annotate History Items
- Export Admin Center History

## View Admin Center History

You can view the history data that Directory Manager auto tracks for high level actions performed in
Admin Center.

To view history:

1. In Admin Center, click **History** in the left pane.  
   The **Admin Center History** page displays history data in a descriptive, concise, and
   user-friendly manner. Items are sorted according to the date and time, with the most recent at
   the top.
2. Click a history item to view its details. The **History Details** dialog box displays the
   following:
   - **Object Name:** The name of the object the action was performed on.
   - **Who:** The name of the user who performed the action.
   - **Where:** The name of the computer the action was performed on.
   - **When:** The date and time of the action.
   - **Added Item(s):** A short description of the action.
   - **Removed Item(s):** This box is displayed for actions showing deletion. It displays a short
     description of the action.
3. The **Add Note** button is available if you performed this action. See
   [Annotate History Items](/docs/directorymanager/11.1/configuration/identity-stores.md#annotate-history-items) to manage
   notes.
4. Click **Close**.

### Filter History Data

Filters on the **Admin Center History** page are similar to those on the **Identity Store History**
page. Refer to the [Filter History Data](/docs/directorymanager/11.1/configuration/identity-stores.md#filter-history-data) topic
to apply the filters.

### Navigate the History Data

Navigation options on the **Admin Center History** page are similar to those on the **Identity Store
History** page. Refer to the
[Navigate Through History Items](/docs/directorymanager/11.1/configuration/identity-stores.md#navigate-through-history-items)
topic for help.

## Annotate History Items

1. In Admin Center, click **History** in the left pane.
2. On the **Admin Center History** page, click a history item and proceed to add a note. See the
   [Annotate History Items](/docs/directorymanager/11.1/configuration/identity-stores.md#annotate-history-items) topic for
   details.

## Export Admin Center History

You can export Admin Center history to Microsoft Excel, CSV, and XML formats.

**To export history:**

1. In Admin Center, click **History** in the left pane.
2. On the **Admin Center History** page, click **Export History**.
3. On the **Export History** dialog box, enter a name for the history file in the **Name** box or
   leave it to default.
4. Select a format for the history file in the **Format** drop-down list. Available formats are
   Excel, CSV, and XML
5. Click **Export History**. The file is saved at the download location specified in browser
   settings.
6. A message is displayed that history data is successfully exported. Click **OK**.

# Navigation

On signing into Admin Center, you land on the [Dashboard](/docs/directorymanager/11.1/getting-started/dashboard.md).

The following options help you to navigate the application:

- Quick Search
- Top Right Options
- Menu Pane

## Quick Search

The search box is displayed at the top. Use it to perform a quick search and directly navigate to
different pages of the application. You can search for Directory Manager settings and
configurations, and directly navigate to your required pages.

When you perform a search, it looks up the following in Admin Center:

- Identity stores - You can use quick links to navigate to different pages in an identity store,
  such as workflows, schedules, and security roles.
- SMS gateway accounts
- Directory Manager applications - Directory Manager portals, Data services, and Security services
- Admin Center pages, such as the Replication, Notifications and Licensing pages
- Admin Center functions, such as restore replication, unlock account, etc. Clicking an action
  redirects you to the relevant page.

**To perform a search:**

1. In Admin Center, enter a search string in the Search box at the top of the page.  
   A list of matched items is displayed as you type. For example, as you type ‘ta’, it shows:

   ![quick_search](/img/product_docs/directorymanager/directorymanager/admincenter/general/quick_search.webp)

2. On clicking **Quick Actions** for an identity store, it displays the settings available for the
   identity store. Click an option to navigate to it.

## Top Right Options

The top right corner of the application displays the following:

| Icon             | Description                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Help icon        | Click it to launch Admin Center help.                                                                                                                                                                                                                                                                                                                                                              |
| Manage SAML icon | Click it to launch the Authenticate panel, where you can: - Set up Directory Manager as a service provider. Directory Manager can integrate with several single sign-on (SSO) solutions that support the SAML 2.0 standard. - Set up Directory Manager as an identity provider. See the [Authenticate](/docs/directorymanager/11.1/configuration/authentication/authentication-overview.md) topic. |
| Profile icon     | Displays your profile picture with your name and the identity store that Admin Center is connected to. Click it to launch a menu that displays the Directory Manager version and the security role assigned to you in Directory Manager. The menu also displays options to change your password, access your applications, and sign out of Admin Center.                                           |

## Menu Pane

The menu pane in the left enables you to navigate to different functions in Admin Center.

| Menu Option         | Description                                                                                                                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dashboard           | Displays the latest values for Directory Manager KPIs                                                                                                                                                                                             |
| Identity Stores     | Displays the identity stores defined in Directory Manager. You can: - Create identity stores - Manage the security roles and settings for an identity store - Link identity stores                                                                |
| Data Sources        | Enables you to create and manage data sources to be used as source and destination in Synchronize jobs, in query-based searches, and in group membership queries                                                                                  |
| Replication         | Controls global replication settings that apply to all identity stores                                                                                                                                                                            |
| Notifications       | Displays the queued notifications for all identity stores. It also provides access to the Notification Editor                                                                                                                                     |
| Helpdesk            | Enables helpdesk users to perform password reset, account unlock, and account unenroll operations for identity store users                                                                                                                        |
| Applications        | Enables you to create Directory Manager applications, namely: - Directory Manager portal - Data service - Security service You can also manage the following: - Admin Center deployment - Replication service - Email service - Scheduler service |
| History             | Displays history for major actions performed in Admin Center, such as identity store creation, changes to notification templates, and more                                                                                                        |
| SMS Gateways        | Allows you to create SMS gateway accounts that Directory Manager uses to send text messages to the users’ mobile numbers                                                                                                                          |
| Notification Editor | Lists templates for Directory Manager-generated notifications. These templates apply to all identity stores                                                                                                                                       |
| Settings            | Lets you manage the following: - Directory Manager licensing - Global pool of security questions - Directory Manager logs                                                                                                                         |

**See Also**

- [Change your Password](/docs/directorymanager/11.1/administration/general-settings.md)
- [Switch Accounts](/docs/directorymanager/11.1/administration/general-settings.md)
- [Access your Applications](/docs/directorymanager/11.1/administration/general-settings.md)

# Switch Accounts

You do not need to sign out of Admin Center or a portal in order to sign in with a different
account. Simply use the _switch account_ function to achieve this.

## Switch your account

1. In Admin Center or a portal, click your name in the top right corner and select **Switch
   Account**. The next page lists the accounts you have used to sign into Admin Center and any of
   the portals.
2. Do one of the following:
   - Click an account to access Admin Center/the portal with it, without having to provide the
     password.
   - Click **Login as a different user** to sign in with an account not listed on this page.
   - Click **Logout completely** to sign out of all the accounts listed on this page.
