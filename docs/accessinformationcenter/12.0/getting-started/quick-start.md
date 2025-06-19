# Getting Started

The Access Information Center is installed with a Builtin Administrator account used to enable
console access. Launch the Access Information Center using the desktop icon for the first time and
set the password for the Builtin Administrator account. Then log in with that account. See the
[First Launch](/docs/accessinformationcenter/12.0/administration/first-launch.md) topic for additional information.

## Initial Configuration

Next, configure the Access Information Center for your environment:

- Console Users — Grant users access to the application starting with an Administrator account.
  There are five levels of access: Administrator, Security Team, Reader, Data Privacy, and User
  Access Administrator. See the [Console Access Page](/docs/accessinformationcenter/12.0/administration/configuration/console-access.md) topic for
  information.

  - Optionally, disable the Builtin Administrator account. See the
    [Modify the Builtin Administrator Account](/docs/accessinformationcenter/12.0/administration/configuration/console-access.md#modify-the-builtin-administrator-account)
    topic for additional information.

- Active Directory Service Account — Provide the service account to be used for accessing Active
  Directory. Optionally, enable the application to make group membership changes. See the
  [Active Directory Page](/docs/accessinformationcenter/12.0/administration/configuration/active-directory.md) topic for information.
- Notification — Configure the Notification settings required in order for the application to send
  email. See the [Notifications Page](/docs/accessinformationcenter/12.0/administration/configuration/notifications.md) topic for information.

## Enable Console Users

Access Information Center users granted one of the available roles should be notified.

**_RECOMMENDED:_** The notification should include:

- Why your organization is using the Access Information Center
- What they will be doing in the Access Information Center
- How to log into the Access Information Center, specifically what URL and credentials to use

You should also provide links to the appropriate topics based on the user's role:

- Reader and Data Privacy — Send the URL link for the
  [Resource Audit Overview](/docs/accessinformationcenter/12.0/resource-auditing/index.md) topic
- Security Team — Need topics that align to the work the will be doing in the Access Information
  Center:

  - Accessing Resource Audits — Send the URL link for the
    [Resource Audit Overview](/docs/accessinformationcenter/12.0/resource-auditing/index.md) topic
  - Ownership Administrator — Send the URL link for the
    [Resource Owners Overview](/docs/accessinformationcenter/12.0/access-management/resource-owners/index.md) topic
  - Review Administrator — Send the URL link for the
    [Resource Reviews Overview](/docs/accessinformationcenter/12.0/access-management/resource-reviews/index.md) topic
  - Request Administrator — Send the URL link for the
    [Access Requests Overview](/docs/accessinformationcenter/12.0/access-management/access-requests/index.md) topic

- Administrator — Send the URL link for the [Administrator Overview](/docs/accessinformationcenter/12.0/administration/index.md) topic
- User Access Administrator — Send the URL link for the
  [Console Access Page](/docs/accessinformationcenter/12.0/administration/configuration/console-access.md) topic

## Resource Ownership Configuration

It is possible to enable business owners and data custodians to manage their resources through the
application. Also, ownership of resources must be assigned in order to use the Resource Reviews and
Access Requests workflows.

- Resource Ownership — Assign ownership for resources to be managed through the application. See the
  [Resource Owners Interface](/docs/accessinformationcenter/12.0/access-management/resource-owners/index.md) topic for additional information.
- Enable Owners — Send a notification to your owners about resource ownership with the application.
  See the [Notification to Owners](/docs/accessinformationcenter/12.0/access-management/resource-owners/index.md#notification-to-owners) topic for
  additional information.

## Resource Review Workflow

The Access Information Center can be configured to run Resource Reviews, or attestations. All
resources to be included in reviews must be assigned owners on the Resource Owners interface. The
workflow consists of:

- Resource Reviews — Configure reviews for Access, Membership, Permissions, or Sensitive Data
- Owner Performs Review — Owners process the review, potentially recommending changes
- Review Administrator Approval — Review and process owner recommended changes

**_RECOMMENDED:_** Set expectations for response time from owners.

Reviews can be run multiple times, maintaining a historical record for each instance. See the
[Resource Reviews Overview](/docs/accessinformationcenter/12.0/access-management/resource-reviews/index.md) topic for additional information.

## Access Requests Workflow

The Access Information Center can be configured for access request by domain users. All resources to
be available for requests must be assigned owners on the Resource Owners interface. The workflow
consists of:

- Enable Domain Users — Send a notification to your domain users about access requests with the
  Access Information Center. See the
  [Notification to Domain Users](/docs/accessinformationcenter/12.0/access-management/access-requests/index.md#notification-to-domain-users) topic
  for additional information.
- Owner Response — Set expectations for response time from owners

See the [Access Requests Overview](/docs/accessinformationcenter/12.0/access-management/access-requests/index.md) topic for additional information.
