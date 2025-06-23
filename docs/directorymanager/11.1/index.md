# Directory Manager 11.1

> **Simplify Active Directory and Azure AD group management**

Netwrix GroupID streamlines group management across Active Directory and Azure AD with automated provisioning, self-service capabilities, and intelligent lifecycle management. Reduce IT workload while ensuring proper access control and compliance.

## Key Features

- **Self-Service Group Management** — Enable users to create and manage groups without IT involvement
- **Automated Provisioning** — Create groups automatically based on rules and templates
- **Lifecycle Management** — Automate group attestation, expiration, and cleanup
- **Smart Groups** — Dynamic membership based on user attributes and rules

## What's New in Version 11.1

- Enhanced Azure AD integration with improved synchronization
- New approval workflows with mobile support
- Advanced reporting and analytics dashboard
- Improved performance for large directories

## Benefits

- Reduce IT tickets for group management by up to 90%
- Ensure groups remain accurate with automated lifecycle management
- Improve security by eliminating stale and unnecessary groups
- Accelerate onboarding with template-based group creation

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```

# Configure Directory Manager in Microsoft Entra ID

In Directory Manager, you can create an identity store for an identity provider and perform
different functions in that provider using its identity store. These functions include group
management tasks, such as creating groups, scheduling group updates, and expiring groups; user
management tasks, such as creating users and mailboxes, managing users’ profiles, and more.

Directory Manager supports multiple identity providers for creating an identity store, including
Microsoft Entra ID, formerly Azure Active Directory. This section provides information that will
help configure Directory Manager in Microsoft Entra ID.

# Register in Microsoft Entra ID

To use Microsoft Entra ID, formerly Azure Active Directory, identity provider, Directory Manager
must first be registered in Microsoft Entra Admin Center portal. The registration grants Directory
Manager access to a particular Microsoft Entra ID Directory and its data, such as Microsoft Entra ID
groups and users.

Directory Manager requires:

- An application registered for Directory Manager in Microsoft Entra ID (with the Microsoft Graph
  API and Exchange API permissions).
- A Microsoft Entra ID Directory Role for the service account for the Microsoft Entra ID identity
  store.

  NOTE: See the
  [All Role](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#all-role)
  section for
  [User Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#user-administrator)
  and
  [Exchange Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#exchange-administrator)
  role permissions in
  [Microsoft Entra built-in roles](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#microsoft-entra-built-in-roles).

# Entitlement

Directory Manager Entitlement enables you to stay informed on the permissions assigned to objects
residing on your Active Directory servers and SharePoint sites.

See the [Entitlement](/docs/directorymanager/11.1/configuration/entitlements.md) topic for detailed information on
Entitlement.

# History

The Directory Manager portal maintains a log of actions when objects are created, modified, and
deleted in the portal provided that the Directory Manager administrator has enabled history tracking
for the identity store. Directory Manager portal also tracks all actions that are committed to the
directory using:

- Directory Manager Management Shell cmdlets
- Directory Manager APIs

The administrator can configure the following for history tracking:

- track all or specific events
- retain history data forever or for a specified duration

Therefore, history data represents only the events that history-tracking is configured to track.
Furthermore, if history-tracking is not enabled or has been recently disabled for the identity
store, the portal does not display history data or it displays data that was logged before
history-tracking was turned off.

A user can add a note to a history action that he/she performed. Other users can just view that
note. This note may explain the reason for performing that action. See the
[Configure History Tracking](/docs/directorymanager/11.1/administration/services/overview.md)
topic.

## History views in the portal

The Directory Manager Portal displays history as below:

- **My Account History** on the portal's dashboard  
  Displays a list of actions performed by the logged-on user.
- The **History** tab in group / user / mailbox / contact properties.  
  Displays the actions performed on the object by different users.
- The [My History](/docs/directorymanager/11.1/misc/directorymanager/portal/history/myhistory.md) page.  
  Displays the actions performed by the logged-on user and any changes made to this user's profile
  by another user.
- The [My Direct Reports' History](/docs/directorymanager/11.1/misc/directorymanager/portal/history/mydirectreport.md) page.  
  Displays the changes made to the logged-on user's direct reports by this user or by any other
  user.
- The [My Groups' History](/docs/directorymanager/11.1/misc/directorymanager/portal/history/mydirectorygroup.md) page.  
  Displays the changes made by the logged-on user to a group that they own.

Use the **History items to display on home page** setting on the User Settings panel to specify the
number of history items to display on Dashboard.

Use the **History items to display** setting on the User Settings panel to specify the number of
history items to display on the History tab, My History page, My Direct Reports History page, and My
Groups History page.

Use the **Most recent objects** setting on the User Settings panel to specify the number of recent
objects to show on the **My Account History** card on Dashboard.

# Requests

A workflow request is a set of rules that Directory Manager uses as a built-in auditing system to
ensure that users enter correct data before committing changes to a directory. A workflow triggers
when some Directory Manager operation, performed by a user, meets the criteria defined in the
workflow route.

Workflow requests are defined for an identity store and applied to the different operations
performed using Directory Manager.

Directory Manager provides the following predefined workflows (also called system workflows) that
trigger when their associated events occur:

|     | Workflow Name                              | Description                                                                                                                                                              | Default Approver                                     |
| --- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| 1.  | Workflow to Reset Password                 | When a user resets his or her password. It does not apply when helpdesk users reset the passwords of other users.                                                        | Primary and additional managers of the user          |
| 2.  | Workflow to Change Group Expiration Policy | When a user changes the expiry policy of a group. By default, this workflow is disabled and no approver is specified. You can edit the workflow to add an approver.      | None                                                 |
| 3.  | Workflow to Nest a Group                   | When a user adds a group (Group A) to the membership of another group (Group B).                                                                                         | Primary and additional owners of Group A             |
| 4.  | Workflow to Join a Group                   | When a user joins a semi-private group.                                                                                                                                  | Primary and additional owners of the group           |
| 5.  | Workflow to Leave a Group                  | When a user leaves a semi-private group.                                                                                                                                 | Primary and additional owners of the group           |
| 6.  | Workflow to Transfer a User                | When a user transfers his or her direct report.                                                                                                                          | The new manager                                      |
| 7.  | Workflow to Terminate a User               | When a manager terminates a direct report. By default, this workflow is disabled and no approver is specified. You can edit the workflow to add an approver.             | None                                                 |
| 8.  | Workflow to Change Manager                 | When a user changes his or her primary or additional manager. If the user does not have a primary manager, and no default approver is set, the request is auto approved. | Existing primary and additional managers of the user |

The administrator can also define more workflows for the identity store.

In case of a Synchronize job, Directory Manager evaluates whether the task it will perform falls
under the scope of a workflow. If yes, then a workflow request is triggered the first time the job
is executed. The job will run when the request is approved.

On Directory Manager portal, use the **Requests** node to view and manage workflow requests for the
connected identity store. Expanding this node displays the following tabs:

- [My Requests](/docs/directorymanager/11.1/misc/directorymanager/portal/request/myrequest.md) lists workflow requests that you have generated. It displays both
  pending and processed requests.
- [Request Inbox](/docs/directorymanager/11.1/misc/directorymanager/portal/request/pending.md) lists the workflow requests for which you are the approver. You can
  view, approve, deny, or reroute these requests.
- [All Requests](/docs/directorymanager/11.1/misc/directorymanager/portal/request/allrequest.md) lists all pending workflow requests generated by enterprise users.

NOTE: If the user is high priority such as _Administrator_, only then they will see the _All
Requests_ tab.

## Workflow Implementation

Directory Manager workflows are carried out in a standard action sequence:

- When a user performs an action in Directory Manager, it is evaluated according to the workflow
  settings.
- If no approval is required, the change takes place in the directory and change notifications are
  sent.
- If a workflow applies, Directory Manager routes an approval request to the approving authorities
  and a 'request sent' notification is send to the requester. When the request is approved, the
  requested changes are made in the directory and change notifications go to the requester and
  approvers (except the one who has approved the request) by email.
- If the request is denied, information is not updated in the directory and an email notification is
  sent to the requester and th pe approvers (except the one who has approved the request) with an
  explanation of why it was denied.

The administrator may enable the email approval option for a workflow route. Email notifications
generated for such workflow requests contain the **Accept** and **Deny** buttons. On clicking any of
these, the approver is redirected to the Directory Manager portal, where he or she can approve or
deny the request. Navigation within the portal will require authentication.

NOTE: Email notifications are sent when an SMTP server has been configured for the identity store.

## Approving authority for a Workflow Request (without Workflow Acceleration)

For each workflow, an approving authority is also specified. The following scenarios are valid when
workflow approver acceleration settings are not applied:

- If the object specified as an approver in a workflow route is not available (such as if it is
  disabled or not specified), the workflow request would be routed to the default approver. If the
  default approver is not specified or disabled, the request is auto approved.

  See the
  [Specify a Default Approver](/docs/directorymanager/11.1/workflows/overview.md#specify-a-default-approver)
  topic.

- If the requester is also the approver for that workflow, the request is auto-approved.
- When a Synchronize job runs to set the manager for a user who does not already have a manager, the
  following happens:

  - The _Workflow to Change Manager_ will trigger if a default approver is set in advanced
    workflow settings.
  - If the default approver is not set, the workflow will not trigger and the user's manager will
    be set without requiring any approval.

## Workflow Acceleration

The workflow approver acceleration feature in Directory Manager ensures that no workflow request
remains unnoticed and undecided. Based on certain rules, it automatically accelerates a request to
another approver if the current approver does not act on it for a certain number of days.

The administrator can enable and configure workflow approver acceleration for an identity store in
Directory Manager Admin Center.

See [Workflow Approver Acceleration](/docs/directorymanager/11.1/workflows/acceleration.md)

# Messaging System

Directory Manager enables users to configure messaging systems to efficiently create or edit mail
enabled objects through a Synchronize job. Users can sync or deprovision subscriptions from the
following messaging systems:

- [Exchange Subscription](/docs/directorymanager/11.1/misc/directorymanager/portal/synchronize/job/exchange.md)
- [Google Workspace Subscription](/docs/directorymanager/11.1/misc/directorymanager/portal/synchronize/job/googleapp.md)
- [Office 365 Subscription](/docs/directorymanager/11.1/misc/directorymanager/portal/synchronize/job/office365.md)

# Manage Jobs

Synchronize allows its users to create, manage, and schedule jobs and job collections. Synchronize
simplifies this process by providing an efficient system to manage jobs and job collections.

# Synchronize

Directory Manager Synchronize is a web-based application that can be accessed using the Directory
Manager portal. The application is a bi-directional synchronization engine for transferring data
from one data source to another. The data sources may include directory servers, databases or files.
Utilizing a very intuitive GUI, you can create Synchronize jobs to provision, de-provision or
synchronize multiple data sources.

The Synchronize portal is also capable of applying transformations to the data being transferred.
This allows you to convert data after retrieving it from the source and before it gets saved at the
destination.

## Prerequisites for Synchronize

Using Directory Manager, you can create identity stores for several identity providers (such as
Active Directory and Microsoft Entra ID) as well as create data sources for providers such as files
and databases. Directory Manager Synchronize uses user-defined identity stores (as source and
destination) built on databases, files and other applications such as Oracle, SQL and so on. To view
the list of supported Synchronize providers, see the [Synchronize Providers](/docs/directorymanager/11.1/misc/directorymanager/portal/synchronize/provider.md) topic.

The following must be defined before you can use Synchronize:

- Identity Store – Identity stores must be created in Admin Center for sources and destinations
  providers. For working with Synchronize, create a Synchronize based identity store for creating
  jobs and job collections.

  Synchronize data for AD and Microsoft Entra ID is directly saved to Elasticsearch and
  Replication is not required.

- Data Sources – You need to add the data sources in Admin Center like Microsoft Excel, Text,
  Oracle, etc for creating job and job collections.
- Permissions – For performing Synchronize operations, the logged-in user must have Synchronize
  specific permissions. These permissions enable the user to create, edit and run jobs or job
  collections as per the defined Synchronize policy.
- Policies – Using the Synchronize policy, you can allow or disallow a provider to be used as a
  source or destination. You can choose the object types that can be created or synced at the
  destination using a Synchronize job. For each object type in an identity store and data source,
  specify the attributes that will be available for mapping the source and destination fields in a
  Synchronize job.
- History – Synchronize can maintain a complete track of actions performed in a directory through a
  Synchronize job, provided that an identity store for the destination provider has been defined in
  Directory Manager Admin Center and history tracking is enabled for that identity store. The
  actions to be tracked for Synchronize are also specified in history settings of that identity
  store.
- Workflows – Workflow requests can be enabled to run job or job collections. A workflow needs to be
  created in the Admin Center and an approver must be assigned for that workflow. Each time if a
  user runs a synchronize job, the job runs only when the approver approves the request. If they
  deny, the job will not run.
- Notifications – An SMTP server must be configured for the destination's identity store. Using that
  SMTP server email notification can be sent to designated recipients for different actions
  performed while executing a Synchronize job.
- Messaging Provider – A messaging provider must be configured for the destination's identity store
  so that mail-enabled objects can be created through Synchronize job in the destination.

## Dashboard

Synchronize dashboard displays performance widgets and cards displaying the data about your jobs and
job collections. On the navigation pane on the left side, you will see the following tabs:

- Create New ([Create a Job](/docs/directorymanager/11.1/misc/directorymanager/portal/synchronize/job/create.md) and [Create a Job Collection ](/docs/directorymanager/11.1/misc/directorymanager/portal/synchronize/collection/create.md))
- [Dashboard](/docs/directorymanager/11.1/misc/directorymanager/portal/synchronize/dashboard.md)
- [Manage a Job](/docs/directorymanager/11.1/misc/directorymanager/portal/synchronize/manage/job.md)
- [Manage a Job Collection ](/docs/directorymanager/11.1/misc/directorymanager/portal/synchronize/manage/jobcollection.md)
- [Job Templates](/docs/directorymanager/11.1/misc/directorymanager/portal/synchronize/manage/jobtemplate.md)
- [Job Collection Template](/docs/directorymanager/11.1/misc/directorymanager/portal/synchronize/manage/jobcollectiontemplate.md)

# Transform

During the creation of synchronize jobs, you can apply transformation scripts to manipulate source
data before saving it to the destination.

You can use transformations to perform these actions and more:

- Combining the values of two source fields into one destination field.
- Extracting a set of characters from field values.
- Assigning a string constant to a field regardless of source restrictions.

Synchronize includes a set of commonly used transformations, or you can write your own
transformation scripts using the Visual Basic .NET or Python editor.

Synchronize provides these transformations:

- Static
- Resolve
- Join
- Left
- Substring
- Script

## Static

During synchronization, the static transformation copies specified text to the destination field and
ignores the value in the source field mapped to it.

- Type the text in the **Static text** box. This text is copied for the field at the destination.

  You can also specify Windows environment variables as static text. While transferring the data
  during a job run, the job obtains the current value of the variable and saves it to the
  destination field.

  Examples:

  - If static text is set to **%COMPUTERNAME%**, running the Job will save the host computer's
    name in the target field.
  - If static text is set to variables **%NOW%** and **%Computer%** as follows:

    _Updated by GroupID %NOW% from %COMPUTERNAME%._

    Running the job will return the current date and the name of the host machine. The results
    will look like as:

    _Updated by GroupID 1/12/2003 10:04 AM from EX01-DTM_

    Environment variables may vary for different Windows releases and editions. Before using
    environment variables, determine that they are supported by the Windows installed on your
    host machine

- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.1/misc/directorymanager/portal/synchronize/transformation/autogenerateuniquepassword.md) based on complexity rules

  You can assign a single password to all synced objects or generate individual passwords for each
  object.

## Resolve

The Resolve transformation attempts to locate a recipient at the destination that matches the
selected filter and returns the distinguished name. It is useful for setting the manager or owner
fields.

destination: The target location to which to copy data. Destinations must be Exchange 5.5, Active
Directory, SQL Server, or Excel.

NOTE: This transformation can adversely affect performance, as it adds an additional query to each
record. It applies to Active Directory and Exchange only.

## Join

The Join transformation combines values from two source fields into a single destination field.

For instance, you can use a Join transformation to create a Display Name field at the destination
from the source’s **FirstName** and **LastName** fields. The values for the two source fields are
saved as a single value in the destination.

The following table list the three parameters the Join transformation requires:

| Parameter    | Description                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| First field  | Select the first source field.                                                                                                          |
| Separator    | Specify the character to use as separator between the values of the two fields. You can specify more than one characters as separators. |
| Second field | Select the second source field.                                                                                                         |

## Left

Use the Left transformation to return a specific number of characters from the left side of a source
value. You can use a Left transformation to pull characters from a value to create an abbreviation
or an alias.

For example, your requirement is to set the first three characters of a user's logon name as their
initials. You can easily achieve this by applying the settings shown in the following figure.

The following table lists the two parameters the Left transformation requires:

| Parameter            | Description                                                             |
| -------------------- | ----------------------------------------------------------------------- |
| Source field         | Select the source field from which to get the value.                    |
| Number of characters | Specify here the number of character to extract starting from the left. |

## Substring

The Substring transformation returns a set of characters from the source value. The set of
characters to extract from the source value is determined form the **Start at** and **Length**
parameters passed to the transformation.

Substring transformation is useful in cases where the set of characters to extract are from within a
value that has a fixed number of characters or digits. The use of this transformation can become
tricky if the number of characters or digits in values of the source field may vary.

The following table lists the parameters the Substring transformation requires:

| Parameter    | Description                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source field | Select the source field from which to get the value.                                                                                              |
| Start at     | Specify the index number of the character to set as the starting point. The character at this position will not be included in the result itself. |
| Length       | This represents the count of characters to extract from the starting point.                                                                       |

**Example:**

Telephone numbers are usually written with country and city codes. You may have a destination field
where you may only require the country code to be copied excluding the city code and the number
itself.

Consider the number, +92-42-5787711. Where:

| Country Code | City Code | Telephone |
| ------------ | --------- | --------- |
| 92           | 42        | 5787711   |

To extract the country code, you would set the parameters for this transformation. When executed,
this would extract 92 from the number and save it to the destination field.

## Script

Unlike the built-in transforms described above, the Script transformation is a template for writing
custom scripts. Use the **Script** template by selecting a built-in transform that provides most of
the functionality you need, select parameters, if any, and then switch the transform type to
**Script** to view the resulting script. You can then modify the script to add the functionality you
need.

# Welcome to the SSPR Portal

A Self-Service Password Reset portal (SSPR) is a type of Directory Manager portal that only
facilitates password-related functions. It enables users to manage their directory account
passwords, i.e., the password for the account they use to access their workstations and other
Microsoft services.

Using the portal, users can:

- Enroll their accounts in Directory Manager
- Change their identity store account (directory) password
- Reset their identity store account (directory) password
- Unlock their identity store (directory) accounts
- Link their accounts in different identity stores

See the [Compatibility](/docs/directorymanager/11.1/getting-started/quick-start.md#compatibility) and
[Localization](/docs/directorymanager/11.1/getting-started/quick-start.md#localization) topics for information on the devices, browsers,
and languages that Directory Manager supports.

## Launch the Portal

Use the SSPR portal URL the administrator has provided you to launch the portal. The Welcome to
GroupID page lists the following functions:

- Enroll
- Change Password
- Reset Password
- Unlock

You can either click a function and then sign in to perform that function or first sign in and then
select a function.

- Click a link to perform the specific function. Since you are not signed in, you will be redirected
  to the GroupID Authenticate page. See the [Log in](/docs/directorymanager/11.1/misc/directorymanager/portal/login.md#log-in) topic for signing
  into the portal. Then you can proceed to perform the specific function. See the
  [Manage your Identity Store Accounts](/docs/directorymanager/11.1/misc/directorymanager/ssprportal/functions.md) topic for a discussion of these functions.
- To sign in before accessing any function, click the Login link in the top right corner. You will
  be redirected to the GroupID Authenticate page. See the [Log in](/docs/directorymanager/11.1/misc/directorymanager/portal/login.md#log-in) topic
  for signing into the portal. On signing in, the main portal page is displayed. See the
  [Navigation](/docs/directorymanager/11.1/misc/directorymanager/ssprportal/navigation.md) topic for additional information.
