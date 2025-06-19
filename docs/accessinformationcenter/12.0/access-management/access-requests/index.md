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
Netwrix Access Analyzer (formerly Enterprise Auditor) according to the targeted environments.

_Remember,_ owners are assigned to resources in the Resource Owners interface. Only resources with
assigned owners can be included in the Self-Service Access Requests workflow. These resources must
also have the Allow access requests option selected.

**_RECOMMENDED:_** When deploying the Access Information Center in an organization to enable
Self-Service Access Requests, notifications should be sent to assigned owners as well as domain
users. See the [Owner Confirmation Request Email](/docs/accessinformationcenter/12.0/access-management/resource-owners/owner-confirmation.md)
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
[Your Access Portal Overview](/docs/accessinformationcenter/12.0/access-management/access-portal/index.md) topic for additional information.

Who Can Manage Self-Service Access Requests (Request Administrators)?

- Access Information Center Administrators
- Access Information Center Security Team Members

Who Participates in Self-Service Access Requests?

- Domain Users — Submit requests for access to resources or membership in groups
- Owners — Approve or deny access requests
- Request Administrators — Manage requests and nudge owners to respond to pending requests

See the [Access Requests Interface](/docs/accessinformationcenter/12.0/access-management/access-requests/request-interface.md) section for information.

## Workflow of Self-Service Access Requests

Prerequisites:

- Self-Service Access License
- Access Information Center configured to send Notifications. See the
  [Notifications Page](/docs/accessinformationcenter/12.0/administration/configuration/notifications.md) topic for additional information.

  **NOTE:** By default, the Access Information Center is configured to send notifications only to
  the primary owner. However, this can be customized to send notifications to all assigned owners.
  See the [Notifications Page](/docs/accessinformationcenter/12.0/administration/configuration/notifications.md) topic for additional
  information.

- Access Information Center configured to commit AD changes
- Resources and groups must be known to the Access Information Center, having been audited by Access
  Analyzer
- Owners assigned to resources within the Resource Owners interface. See the
  [Resource Owners Overview](/docs/accessinformationcenter/12.0/access-management/resource-owners/index.md) topic for additional information.
- Resource is configured to Allow access requests when it is assigned an owner. See the
  [Add New Resource Wizard](/docs/accessinformationcenter/12.0/access-management/resource-owners/managing-owners.md) and
  [Update Resource Wizard](/docs/accessinformationcenter/12.0/access-management/resource-owners/managing-owners.md) topics for additional information.
- Access groups configured within the environment for resources to be managed through the Access
  Information Center. See the [Access Groups](/docs/accessinformationcenter/12.0/access-management/resource-owners/access-groups.md) topic for
  additional information.

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

  - You will need to decide if you are sending domain users via the Access Analyzer Web Console or
    directly to the Access Information Center website.

- How to access the instructions on how to submit access requests. You can link to the
  [Your Access Portal Overview](/docs/accessinformationcenter/12.0/access-management/access-portal/index.md) topic or download that topic and its
  subtopics as a PDF and make it available within your corporate resources

# Owners & Access Requests

When your organization enables Self-Service Access Requests on a resource for which you are the
assigned owner, it means you, the business user or data custodian, are responsible for approving or
denying requests by domain users for access to your resource. When a domain user submits a request,
you receive an email notification.

![User Access Request email](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/owners/request.webp)

The request can be processed by using the buttons in the email, which require an Access Information
Center authentication. See the [User Access Request Email](/docs/accessinformationcenter/12.0/access-management/access-requests/email-notifications.md) topic for additional
information.

You can also process access requests through the Owner portal.

![Access Requests link in Owners Portal](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/owners/ownersportal.webp)

The Owner portal displays a number next to the Access Requests link to indicate how many requests
are pending your approval. Click the link to open the Access Requests page. The Access Requests page
has two tabs:

- Pending Requests – Shows any pending access requests waiting on your approval. See the
  [Pending Access Requests](/docs/accessinformationcenter/12.0/access-management/access-requests/pending-requests.md) topic for additional information.
- Request History – Shows the history of access requests for your resources. See the
  [Access Request History](/docs/accessinformationcenter/12.0/access-management/access-requests/request-history.md) topic for additional information.

You may receive a reminder email, sent via the Access Information Center from your Request
Administrator. See the [Access Request Reminder Email](/docs/accessinformationcenter/12.0/access-management/access-requests/email-notifications.md) topic for additional
information.
