# Resource Owners Overview

The Resource Owners interface is where Access Information Center users with either the Security Team
or Administrator role (to be referred to as Ownership Administrators) can assign ownership of
resources to be managed through the application. Assigned owners do not require an Access
Information Center user role, as they manage their resources through the Owner portal. Resource
management options are controlled by the configuration for each resource within the Resource Owners
interface. Resources to be included in either the Resource Review or the Self-Service Access
Requests workflows must first be assigned owners within the Resource Owners interface. The Access
Information Center must be configured to commit changes in Active Directory in order for Owners to
make ad hoc changes to access. It is also required for the Self-Service Access Requests workflow.

**_RECOMMENDED:_** The Access Information Center is configured to send Notifications.

_Remember,_ for the purposes of the Access Information Center, a “resource” refers to the file
system shared folders, SharePoint sites, Active Directory (AD) groups, AD distribution lists, and/or
local Administrators groups. All data available within the Access Information Center is collected by
Netwrix Access Analyzer (formerly Enterprise Auditor) according to the targeted environments.

“Owners” are the users who are responsible for reviewing access to the resources to which they are
assigned. The Access Information Center provides the means to assign resource owners manually or
based on a calculation of the “Probable Owner.”

The Owner portal provides access to resource reports, historical and pending access requests, and
historical and pending entitlement reviews. Owners can also make ad hoc changes to access if that
feature has been enabled for the resource. The Owner portal is only accessible to users who have
been assigned ownership of at least one resource. Owners without an Access Information Center user
role are directed to the Owner portal at login. Owners with an Access Information Center user role
access the Owner portal by clicking the **Manage Your Resources** link in the Your Links section of
the Home page. See the [Owner Portal Overview](/docs/accessinformationcenter/12.0/access-management/resource-owners/owner-portal.md) topic for additional
information.

Who Can Assign Ownership (Ownership Administrators)?

- Console Users with Administrator role

  - Can complete the Review Administrator's approval process without impacting the visibility into
    the review created by a Review Administrator with the Security Team role

    **CAUTION:** Visibility into a review created by a Review Administrator with the Security
    Team role is blocked if a Review Administrator with the Administrator role starts a new
    instance.

- Console Users with Security Team role

  - Visibility into only those reviews personally created

What Can Resource Owners Do?

- View reports on their resources
- Perform a resource review (when there is a pending review)
- Process an access request (when a request is pending approval)
- View historical information on entitlement reviews
- View historical access request information
- Make ad hoc changes to resource access/membership (when this feature is enabled)

**NOTE:** The Sensitive Data content within reports and reviews is visible to all users and roles.
The Matches table in the report will only be populated for Console User with Security Team and
Administrator roles.

See the [Resource Owners Interface](/docs/accessinformationcenter/12.0/access-management/resource-owners/index.md) topic for additional information.

## Workflow of Ownership Assignment

Prerequisites:

- Entitlement Reviews License or Self-Service Access License
- Optional: The Access Information Center is configured to send Notifications. See the
  [Notifications Page](/docs/accessinformationcenter/12.0/administration/configuration/notifications.md) topic for additional information.

  **NOTE:** By default, the application is configured to send notifications only to the primary
  owner. However, this can be customized on the Configuration > Notifications page to send
  notifications to all assigned owners.

- Optional: Access Information Center configured to commit AD changes
- Owners assigned to resources must have:

  - Email address to receive notifications
  - Credentials for a domain known to the application

- Resources and groups must be known to the application
- Optional: Access groups configured within the environment for resources to be managed through the
  application, which requires the Access Information Center to be configured to commit AD changes.
  See the [Access Groups](/docs/accessinformationcenter/12.0/access-management/resource-owners/access-groups.md) topic for additional information.

Workflow:

**NOTE:** This workflow is not numbered because the Notification piece can occur at any time in the
workflow.

- Add resources to be managed by associating a business data owner with a resource.
  - See the [Add New Resource Wizard](/docs/accessinformationcenter/12.0/access-management/resource-owners/managing-owners.md) topic for additional information about adding
    individual resources.
  - See the [Import Owners Wizard](/docs/accessinformationcenter/12.0/access-management/resource-owners/managing-owners.md) topic for additional information about adding
    resources with a bulk import.
- Confirm resource ownership. See the [Ownership Confirmation](/docs/accessinformationcenter/12.0/access-management/resource-owners/owner-confirmation.md) topic for additional
  information.
- Notify owners of their responsibilities. See the Notification to Owners topic for additional
  information.

## Notification to Owners

Let your owners know what their responsibilities are by notifying them with the following
information:

- Why your organization is using the Access Information Center
- How owners should log into the application console, specifically what URL and credentials to use.
  - You will need to decide if you are sending owners to the Web Console or directly to the Access
    Information Center.
- How to access instructions on how to complete a review. You can link to the
  [Resource Ownership with the Access Information Center](/docs/accessinformationcenter/12.0/access-management/resource-owners/index.md) topic or download that
  topic and its subtopics as a PDF and make it available within your corporate resources.
- If you plan to enable the Resource Reviews workflow, also include:
  - An explanation of what a Resource Review is and why your organization is conducting them
  - Expectation on response times
- If you plan to enable the Self-Service Access Requests workflow, also include:
  - An explanation of the Your Access portal and why your organization is enabling self-service
    access requests
  - Expectation on response times

# Resource Owners Interface

The Resource Owners interface opened by the **Resource Owners** button on the Access Information
Center Home page is where Ownership Administrators perform many operations around assigning and
managing ownership.

![Resource Owners Interface in Netwrix Access Information Center](/img/product_docs/threatprevention/threatprevention/reportingmodule/interface.webp)

The information displayed in the table includes:

- Resource Name – The icon indicates the type of resource. The resource name includes its location,
  such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name
  (e.g., [Domain]\[Group]). The hyperlink will open the Resource Audit interface or Group Audit
  interface directly to the selected resource. See the
  [Audit Interfaces](/docs/accessinformationcenter/12.0/resource-auditing/navigation-guide.md) topic for additional information on
  available reports.
- Description – Description or explanation of the resource as supplied by either the Ownership
  Administrator or the assigned owner See the Notes & Descriptions topic for additional information.
- Owner Name – Name of the assigned owner. If there are several owners of a resource, the list is
  comma-separated.
- Status – Indicates whether or not the assigned owner has confirmed ownership of that resource.
  Tool-tips display when hovering over the icons indicating whether the resource ownership has been
  confirmed, declined, pending response, or that a confirmation has not been requested. The tool-tip
  also displays the date timestamp for when confirmation was received. See the
  [Ownership Confirmation](/docs/accessinformationcenter/12.0/access-management/resource-owners/owner-confirmation.md) topic for additional information.
- Notes – Icon indicates a Note has been added. Click on the icon to read the attached note(s).
  Notes can be added by Ownership Administrators or populated with alternative owners by individuals
  who declined ownership. See the [Edit Notes Window](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/editing-notes.md) and the Notes &
  Descriptions topic for additional information.
- Access Groups – Indicates whether or not access groups have been assigned to this resource. When
  the resource is a group, the Access Groups column is automatically checked, since the group itself
  is considered an access group. When File System or SharePoint resources will be managed through
  the AIC, it is necessary to configure access groups for those resources in the target environment.
  An access group provides one of the following access levels to a specific resource: Read, Modify,
  or Full Control. Access groups are required to enable the owner ad hoc changes, to enable the
  Access Information Center to automatically commit approved changes requested during entitlement
  reviews, to enable the Self-Service Access Requests workflow, and for publishing resources to IAM.
  See the [Access Groups](/docs/accessinformationcenter/12.0/access-management/resource-owners/access-groups.md) topic for additional information.
- Access Requests – Indicates whether or not the Self-Service Access Requests workflow has been
  enabled for the resource. See the [Access Requests Overview](/docs/accessinformationcenter/12.0/access-management/access-requests/index.md) topic
  for additional information.
- Owner Updates – Indicates whether or not ad hoc changes feature has been enabled for the resource
- Last Reviewed – Date timestamp when the last review took place for the resource. The hyperlink
  will open the Manage Reviews interface to that resource. See the
  [Manage Reviews Page](/docs/accessinformationcenter/12.0/access-management/resource-reviews/index.md#manage-reviews-page) topic for additional
  information.
- Active Review – Indicates whether or not there is a pending review

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/index.md) topic for additional information.

The buttons at the bottom enable you to conduct the following actions:

![Action buttons in the Resource Owners Interface](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/youraccessportal/interfacebuttons.webp)

| Button               | Function                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add                  | Launches the Add new resource wizard to add a new resource to the list. This allows you to add one resource at a time, assign a reviewer, and optionally assign access groups. See the [Add New Resource Wizard](/docs/accessinformationcenter/12.0/access-management/resource-owners/managing-owners.md) topic for additional information.                                                                                                               |
| Import               | Opens the Import Owners window to perform a bulk import of resources and assigned owners from a CSV file. See the [Import Owners Wizard](/docs/accessinformationcenter/12.0/access-management/resource-owners/managing-owners.md) topic for additional information.                                                                                                                                                                                       |
| Update               | Launches the Update resource wizard for the selected resource. This allows you to make changes to the assigned owners, to enable Access Requests, to enable owner ad hoc changes, and to change or assign access groups. See the [Update Resource Wizard](/docs/accessinformationcenter/12.0/access-management/resource-owners/managing-owners.md) topic for additional information.                                                                      |
| Remove               | Opens the Confirm removal window to removes the selected resource from being managed through the application. _Remember,_ only resources with an assigned owner will be visible in the table. Removing a resource from this table does not delete the resource from the application database. See the [Confirm Removal Window](/docs/accessinformationcenter/12.0/access-management/resource-owners/managing-owners.md) topic for additional information. |
| Request Confirmation | Opens the Confirm Ownership wizard. Sends an email to the assigned owner(s) for the selected resource requesting ownership confirmation. See the [Confirm Ownership Wizard](/docs/accessinformationcenter/12.0/access-management/resource-owners/managing-owners.md) topic for additional information.                                                                                                                                                    |
| Edit Notes           | Opens the Edit Notes window for the selected resource and allows free-text editing of the notes. See the [Edit Notes Window](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/editing-notes.md) topic for additional information.                                                                                                                                                                                                |
| Resource Audit       | Opens the Resource Audit interface for the selected resource. See the [Resource Audit Overview](/docs/accessinformationcenter/12.0/resource-auditing/index.md) topic for additional information.                                                                                                                                                                                                                                                          |

## Notes & Descriptions

A note entered by an Ownership Administrator in the Resource Owners interface is only visible to
those with access to this interface. This note can also be populated with alternative owners
suggested by an individual who declined ownership.

A note entered by an owner on the fourth page of the Change Resource Access wizard is recorded with
the change record and, if selected, included in the notification to the user about their change in
access.

A resource description can be supplied by either the Ownership Administrator or the assigned owner,
and is visible during Resource Review creation. It is visible to the owner in the Owner portal, and
it is to an Access Requester in the Your Access portal.

# Resource Ownership with the Access Information Center

This topic and its subtopics are written for users who have been assigned resource ownership.

Through the Netwrix Access Information Center, an organization can enable business owners and data
custodians to manage their resources without direct IT department involvement. You may be granted
the ability to make ad hoc changes to access of your resources. If your organization is running
Resource Review attestations, you will be expected to complete reviews. If your organization enables
Self-Service Access Requests, you will be expected to process requests for your resource.

**NOTE:** For the Access Information Center, a “resource” refers to the file system shared folders,
SharePoint sites, Active Directory (AD) groups, AD distribution lists, and/or local Administrators
groups.

Your Access Information Center Administrator will let you know what URL to use for logging in as
well as what credentials to use. The URL will require you to be connected to your organization's
network. Upon login, you will be directed to the Owner portal.
