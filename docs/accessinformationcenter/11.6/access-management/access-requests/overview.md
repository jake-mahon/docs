# Access Requests Overview

The Access Requests interface is where Access Information Center users with either the Security Team
or Administrator role (to be referred to as Request Administrators) can manage the Self-Service
Access Requests workflow through the Access Information Center. This workflow provides a way for
domain users to request access to resources or membership in groups being managed through the Access
Information Center. It also enables the assigned owners to respond to those requests directly,
granting or denying the request without involving an IT Team member.

For the purpose of the Access Information Center, a “resource” refers to the file system shared
folders, SharePoint sites, Active Directory (AD) groups, AD distribution lists, and/or local
Administrators groups.All data available within the Access Information Center is collected by
Netwrix Enterprise Auditor according to the targeted environments.

_Remember,_ owners are assigned to resources in the Resource Owners interface. Only resources with
assigned owners can be included in the Self-Service Access Requests workflow. These resources must
also have the Allow access requests option selected.

**_RECOMMENDED:_** When deploying the Access Information Center in an organization to enable
Self-Service Access Requests, notifications should be sent to assigned owners as well as domain
users. See the
[Owner Confirmation Request Email](/docs/accessinformationcenter/11.6/access-management/resource-owners/email-notifications.md)
topic for additional information.

The Your Access portal provides domain users with the ability to view current access to managed
resources, request access to resources, and view the request status for pending and processed
requests. The Your Access portal is accessible to all domain users for the domain where the Access
Information Center is located. Domain users with an Access Information Center user role navigate to
the Your Access portal by clicking the **Manage Your Access** link in the Your Links section of the
Home page. Domain users without an Access Information Center user role who are assigned as resource
owners navigate to the Your Access portal with the My Access link in the Owner portal. Domain users
without an Access Information Center role and who are not assigned resource ownership are directed
to the Your Access portal at login. See the
[Your Access Portal Overview](/docs/accessinformationcenter/11.6/access-management/access-requests/overview.md)
topic for additional information.

Who Can Manage Self-Service Access Requests (Request Administrators)?

- Access Information Center Administrators
- Access Information Center Security Team Members

Who Participates in Self-Service Access Requests?

- Domain Users — Submit requests for access to resources or membership in groups
- Owners — Approve or deny access requests
- Request Administrators — Manage requests and nudge owners to respond to pending requests

See the
[Access Requests Interface](/docs/accessinformationcenter/11.6/access-management/access-requests/overview.md)
section for information.

## Workflow of Self-Service Access Requests

Prerequisites:

- Self-Service Access License
- Access Information Center configured to send Notifications. See the
  [Notifications Page](/docs/accessinformationcenter/11.6/administration/configuration/notifications.md)
  topic for additional information.

  **NOTE:** By default, the Access Information Center is configured to send notifications only to
  the primary owner. However, this can be customized to send notifications to all assigned owners.
  See the
  [Notifications Page](/docs/accessinformationcenter/11.6/administration/configuration/notifications.md)
  topic for additional information.

- Access Information Center configured to commit AD changes
- Resources and groups must be known to the Access Information Center, having been audited by
  Enterprise Auditor
- Owners assigned to resources within the Resource Owners interface. See the
  [Resource Owners Overview](/docs/accessinformationcenter/11.6/access-management/resource-owners/overview.md)
  topic for additional information.
- Resource is configured to Allow access requests when it is assigned an owner. See the
  [Add New Resource Wizard](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md)
  and
  [Update Resource Wizard](/docs/accessinformationcenter/11.6/access-management/resource-owners/manage-owners.md)
  topics for additional information.
- Access groups configured within the environment for resources to be managed through the Access
  Information Center. See the
  [Access Groups](/docs/accessinformationcenter/11.6/access-management/resource-owners/access-groups.md)
  topic for additional information.

Workflow:

**Step 1 –** Notify owners of their responsibilities prior to enabling Self-Service Access Requests.

**Step 2 –** Notify domain users of the Your Access portal for submitting Self-Service Access
Requests.

**Step 3 –** Domain users submit requests.

**Step 4 –** Owners process requests.

**Step 5 –** Request Administrators monitor pending requests and send reminders to owners.

## Notification to Domain Users

Let your domain users know how to request access to your organization's resources or membership in
groups. Netwrix recommends notifying them with the following information:

- Why your organization is enabling self-service access requests with the Access Information Center
- How to log into the Access Information Center, specifically what URL and credentials to use.

  - You will need to decide if you are sending domain users via the Enterprise Auditor Web Console
    or directly to the Access Information Center website.

- How to access the instructions on how to submit access requests. You can link to the
  [Your Access Portal Overview](/docs/accessinformationcenter/11.6/access-management/access-requests/overview.md)
  topic or download that topic and its subtopics as a PDF and make it available within your
  corporate resources

# Access Requests Interface

The Access Requests interface opened by the **Access Requests** button on the Access Information
Center Home page is where Request Administrators manage the Self-Service Access Requests workflow.
The interface has two tabs:

- [Pending Requests Tab](#pending-requests-tab) – View pending requests and send reminders to owners
- [Request History Tab](#request-history-tab) – View the audit trail of processed requests

For both tabs the interface also includes:

- Daily Requests line graph
- Resource Types Status donut graph

## Pending Requests Tab

The Pending Requests tab in the Access Requests interface displays information for pending requests
that are awaiting an owner response.

![Access Requests interface Pending Requests tab](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/accessrequests/interfacepending.webp)

The information displayed in the table includes:

- Request Time – Date timestamp when the request was submitted
- Request ID – Numerical sequential identifier for the request
- Trustee Name – Name of the domain user requesting access
- Trustee Account – sAMAccountName associated with the domain user who is requesting access, as read
  from Active Directory
- User Title – Position in the company for the domain user who is requesting access, as read from
  Active Directory
- User E-Mail – Email address for the domain user who is requesting access, as read from Active
  Directory
- User Department – Company department for the domain user who is requesting access, as read from
  Active Directory
- User Employee ID – Unique identifier for the domain user who is requesting access, as read from
  Active Directory
- Access – Level of access requested. Possible values include:

  - For file system and SharePoint resources: Full Control, Modify, or Read
  - For groups and distribution lists: Membership

- Expiration – If the access is temporary, shows the expiration date:

  - When a user has temporary access already granted to a resource, and then requests a different
    type of access to the same resource with a different expiration date, once the new access is
    granted, the new expiration date supersedes the old date.

- Notes – Icon indicates a Note has been added. Click on the icon to read the attached note(s).
- Resource Name – The icon indicates the type of resource. The resource name includes its location,
  such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name
  (e.g., [Domain]\[Group]).
- Resource Description – Description or explanation of the resource as supplied by either the
  Ownership Administrator or the assigned owner
- Request Status – Icon indicating the status of the request
- Reviewer Name – Name of the owner who has a pending request, as read from Active Directory
- Reviewer Account – sAMAccountName associated with the owner who has a pending request, as read
  from Active Directory
- Reviewer Title – Position in the company for the owner who has a pending request, as read from
  Active Directory
- Reviewer E-Mail – Email address for the owner who has a pending request, as read from Active
  Directory
- Reviewer Department – Department in the company of the owner who has a pending request, as read
  from Active Directory
- Reviewer Employee ID – Unique identifier for the owner who has a pending request, as read from
  Active Directory

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

The buttons at the bottom enable you to perform the following actions:

![Pending Requests tab buttons](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/accessrequests/interfacependingbuttons.webp)

| Button         | Description                                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Send Reminders | Opens the Sending Reminder window, which displays the status of the notification action. The action sends email reminders to owners with pending requests. Click **OK** to close the window once the status is complete. |
| View Notes     | Opens the View Notes window for the selected request. Clicking on the Notes icon in the table will also open the View Notes window. Click **OK** to close the window.                                                    |
| Cancel         | Opens the Cancel Request wizard. See the [Cancel Request Wizard](/docs/accessinformationcenter/11.6/access-management/access-requests/request-access.md) topic for additional information.                               |

## Request History Tab

The Request History tab in the Access Requests interface displays information for processed
requests.

![Access Requests interface Request History tab](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/accessrequests/interfacehistory.webp)

The information displayed in the table includes:

- Request Time – Date timestamp when the request was submitted
- Request ID – Numerical sequential identifier for the request
- Trustee Name – Name of the domain user who requested access
- Trustee Account – sAMAccountName associated with the domain user who requested access, as read
  from Active Directory
- User Title – Position in the company for the domain user who requested access, as read from Active
  Directory
- User E-Mail – Email address for the domain user who requested access, as read from Active
  Directory
- User Department – Company department for the domain user who requested access, as read from Active
  Directory
- User Employee ID – Unique identifier for the domain user who requested access, as read from Active
  Directory
- Source – Origin of the request or change:
  - Owner means access was changed by the owner through ad hoc changes
  - User means a request was submitted by a domain user
- Access – Level of access requested. Possible values include:

  - For file system and SharePoint resources: Full Control, Modify, or Read
  - For groups and distribution lists: Membership

- Expired – If the access is temporary, shows when the access is expired:

  - If an expiration date is superseded by another request, the previous access type will show a
    different icon (purple ticket), the tooltip indicates that another request changed the access.
    In the case that an owner removes a user’s access through ad hoc changes before the expiration
    date, the removed access will show the superseded icon.

- Expiration – If the access is temporary, shows the expiration date:

  - When a user has temporary access already granted to a resource, and then requests a different
    type of access to the same resource with a different expiration date, once the new access is
    granted, the new expiration date supersedes the old date.

- Notes – Icon indicates a Note has been added. Click on the icon to read the attached note(s).
- Resource Name – The icon indicates the type of resource. The resource name includes its location,
  such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name
  (e.g., [Domain]\[Group]).
- Resource Description – Description or explanation of the resource as supplied by either the
  Ownership Administrator or the assigned owner
- Response Time – Date timestamp when the request was processed
- Decision – Decision made by the owner on the request: Accepted (green check mark), Declined (red
  x), or Canceled (orange circle with slash)
- Reviewer Name – Name of the owner who processed the request, as read from Active Directory
- Reviewer Account – sAMAccountName associated with the owner who processed the request, as read
  from Active Directory
- Reviewer Title – Position in the company for the owner Position in the company for the owner
- Reviewer E-Mail – Email address for the owner who processed the request, as read from Active
  Directory
- Reviewer Department – Department in the company of the owner who processed the request, as read
  from Active Directory
- Reviewer Employee ID – Unique identifier for the owner who processed the request, as read from
  Active Directory

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

The buttons at the bottom enable you to perform the following actions:

![Request History tab buttons](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/accessrequests/interfacehistorybuttons.webp)

| Button       | Description                                                                                                                                                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| View Changes | Opens the Changes window to view all access changes for the selected trustee. See the [Changes Window](/docs/accessinformationcenter/11.6/access-management/access-requests/manage-requests.md) topic for additional information. |
| View Notes   | Opens the View Notes window for the selected request. Clicking on the Notes icon in the table will also open the View Notes window. Click **OK** to close the window.                                                             |

# Owners & Access Requests

When your organization enables Self-Service Access Requests on a resource for which you are the
assigned owner, it means you, the business user or data custodian, are responsible for approving or
denying requests by domain users for access to your resource. When a domain user submits a request,
you receive an email notification.

![User Access Request email](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/accessrequests/owners/request.webp)

The request can be processed by using the buttons in the email, which require an Access Information
Center authentication. See the
[User Access Request Email](/docs/accessinformationcenter/11.6/access-management/access-requests/email-notifications.md)
topic for additional information.

You can also process access requests through the Owner portal.

![Access Requests link in Owners Portal](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/accessrequests/owners/ownersportal.webp)

The Owner portal displays a number next to the Access Requests link to indicate how many requests
are pending your approval. Click the link to open the Access Requests page. The Access Requests page
has two tabs:

- Pending Requests – Shows any pending access requests waiting on your approval. See the
  [Pending Access Requests](/docs/accessinformationcenter/11.6/access-management/access-requests/pending-requests.md)
  topic for additional information.
- Request History – Shows the history of access requests for your resources. See the
  [Access Request History](/docs/accessinformationcenter/11.6/access-management/access-requests/request-history.md)
  topic for additional information.

You may receive a reminder email, sent via the Access Information Center from your Request
Administrator. See the
[Access Request Reminder Email](/docs/accessinformationcenter/11.6/access-management/access-requests/email-notifications.md)
topic for additional information.

# Your Access Portal Overview

When your organization has set up Self-Service Access Requests through the Netwrix Access
Information Center (Access Information Center), it means you, as a domain user, can request access
to organizational resources and membership to security groups and distribution lists.

The Your Access portal is where domain users can view their current access, submit access requests,
and view the status of their requests. Where the Access Information Center opens is dependent on
whether or not you have Access Information Center Console access.

- For a domain user with an Access Information Center user role , the Access Information Center will
  open to the Home page. You will use the **Manage Your Access** link in the Your Link section to
  open the Your Access portal.
- For a domain user without an Access Information Center user role who has been assigned ownership
  of a resource, the Access Information Center will open directly to the Owner portal. You will use
  the **My Access** link to open the Your Access portal.
- For domain user without an Access Information Center user role who are not assigned ownership of a
  resource, the Access Information Center will open directly to the Your Access portal.

The Your Access portal displays your current access for resources managed through the Access
Information Center.

![Your Access portal interface](/img/versioned_docs/threatprevention_7.4/threatprevention/reportingmodule/interface.webp)

The information displayed in the table includes:

- Resource – The icon indicates the type of resource. The resource name includes its location, such
  as the UNC path for a file system resource, the URL for SharePoint resource, or Group name (e.g.,
  [Domain]\[Group]).
- Level of access requested. Possible values include:

  - For file system and SharePoint resources: Full Control, Modify, or Read
  - For groups and distribution lists: Membership

- Expiration – If the access is temporary, shows the expiration date:

  - When a user has temporary access already granted to a resource, and then requests a different
    type of access to the same resource with a different expiration date, once the new access is
    granted, the new expiration date supersedes the old date.

- Description – Description or explanation of the resource as supplied by either the Ownership
  Administrator or the assigned owner

The buttons above and below the table enable you to perform the following actions:

![Your Access portal interface buttons](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/interfacebuttons.webp)

| Button         | Description                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Request Access | Opens the Request Access wizard, which allows you to submit access requests. See the [Request Access Wizard](/docs/accessinformationcenter/11.6/access-management/access-requests/request-access.md) topic for additional information.                              |
| View History   | Opens the Request History page, which displays information on all of your pending and processed requests. See the [Request History Page](/docs/accessinformationcenter/11.6/access-management/access-requests/request-history.md) topic for additional information. |
| Remove Access  | Opens the Remove Access window, which allows you to remove access for yourself for the selected resource. See the [Remove Access Window](/docs/accessinformationcenter/11.6/access-management/access-requests/manage-requests.md) topic for additional information. |
