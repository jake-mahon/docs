# Installation Overview

The Netwrix Auditor Access Reviews application relies on collected and analyzed data that is stored
in a Microsoft® SQL® Server database. Netwrix Auditor must be installed and collecting data before
installing and using the Access Reviews application. The Access Reviews Configuration tool must be
used after installation to complete the integration of these products.

**NOTE:** Access Reviews is a separately licensed product and is not included with Netwrix Auditor.
Make sure that you have the Access Reviews license enabled in Auditor.

## Prerequisites

The Access Reviews application must be installed on the same server as Netwrix Auditor.

### Permissions

Permissions are needed to the Netwrix Auditor database and to Active Directory. This can be one
account with sufficient rights to each or two separate accounts. For the purpose of this document,
these will be referred to as the Database service account and the Active Directory service account.

- Database service account – This is the same account used by Netwrix Auditor for a database service
  account. This credential is required for installation.

  **NOTE:** Database connection via TLS 1.2 (SQL Native Client) is supported.

- Active Directory service account – The Access Reviews Console login authentication requires the
  Active Directory service account to have rights to "read" Active Directory. This credential is
  configured during installation based on the account used for connecting to the database. See the
  [Active Directory Page](/docs/auditor/10.6/features/access-reviews/review-administration.md)
  topic for additional information.

## Software Compatibility & Versions

For proper functionality, it is necessary for the version of the Access Reviews to be compatible
with the existing Netwrix Auditor installation. If necessary,
[Netwrix Support](https://www.netwrix.com/support.html) can confirm whether the two product versions
are compatible.

Latest Version Compatibility

| Component                      | Current Version |
| ------------------------------ | --------------- |
| Netwrix Auditor Console        | 10.6\*          |
| Netwrix Auditor Access Reviews | v12.0\*         |

Last Updated 6/6/2022

See the [Upgrade Procedure](/docs/auditor/10.6/features/access-reviews/review-administration.md)
topic for additional information.

## Supported Browsers

Supported browsers for the Access Reviews Console include:

- Google® Chrome®
- Microsoft® Edge®
- Mozilla® Firefox®

## Screen Resolution Requirement

Supported screen resolution of 1368 x 768 or greater.

# Access Reviews

Netwrix Auditor supports integration with Netwrix Auditor Access Reviews, which enables business
owners to conduct resource and group reviews and recommend changes. The integration is available for
the following data sources:

- Active Directory
- Dell Data Storage (only Unity family)
- NetApp
- Nutanix Files
- Qumulo
- SharePoint Online
- Synology
- Windows File Servers

## Getting Started

This workflow assumes you already have Netwrix Auditor installed with configured monitoring plans
for a supported data source.

**NOTE:** Access Reviews is a separately licensed product and is not included with Netwrix Auditor.
Make sure that you have the Access Reviews license enabled in Auditor.

See the [Licenses](/docs/auditor/10.6/administration/user-management/licensing.md) topic for
additional information.

_Remember,_ there is one single Access Review license for all data sources that can send data to the
application.

Follow the steps to use Netwrix Auditor Access Reviews in conjuction with Auditor.

**Step 1 –** Install Access Reviews on the same computer where Netwrix Auditor is installed. See the
[Installation Overview](/docs/auditor/10.6/features/access-reviews/index.md) topic
for prerequisites and additional information.

**Step 2 –** Configure Access Reviews. The Configuration interface is only available to users with
the Administrator role. See the
[Administrator Overview](/docs/auditor/10.6/features/access-reviews/review-administration.md) topic for
configuration settings and enabling user access.

**Step 3 –** Use the Access reviews configuration tool to setup the data flow from the Auditor
database to the Access Reviews database. See the
[Select Data Sources](/docs/auditor/10.6/features/access-reviews/review-administration.md) topic for
additional information.

**NOTE:** Data upload speed depends on the amount of collected data and Auditor collectors
configuration.

**Step 4 –** Configure resource ownership through the Access Reviews Console. The Resource Owners
interface is available to users with either the Security Team or Administrator role. Managing
ownership is core component for the Access Reviews workflow. See the
[Resource Owners Overview](/docs/auditor/10.6/features/access-reviews/resource-owners.md)
topic for additional information.

**NOTE:** The
[Owners & Access Reviews](/docs/auditor/10.6/features/access-reviews/resource-owners.md)
topic and subtopics are written for the assigned owners. You can distribute the URL to this topic or
download a PDF to be distributed to your assigned resource owners.

**Step 5 –** Configure and run reviews. The Entitlement Reviews interface is available to users with
either the Security Team or Administrator role. See the
[Reviews Overview](/docs/auditor/10.6/features/access-reviews/entitlement-reviews.md) topic
for additional information.

Netwrix Auditor Access Reviews is now configured and ready to use.

## Considerations & Limitations

Review the following considerations:

1. Enabling State-in-Time data collection for your monitoring plans option is not required for the
   integration works properly.
2. The data collected by Auditor is updated at least once a day.
3. If a monitoring plan or a data source with enabled integration is deleted, all collected data
   will be removed from the Access Reviews database.
4. If there are errors in upload of data to the Access Reviews database, these errors are reflected
   in the Netwrix Auditor Health Log and text log files; status of items and data sources in Auditor
   is not affected by these errors.
5. Permissions-related considerations:

   - For Windows File Servers, permission data for all items in this data source is sent to the
     Access Reviews application;
   - Only effective top-level permissions are sent (share+NTFS);
   - Permission data is sent per file server (entirely for each server);
   - Transfer of permission data to the Access Reviews application is started when you enable the
     integration for a data source.

   ## Initial Configuration

   Next, configure the Access Reviews for your environment:

   - Console Users — Grant users access to the application starting with an Administrator account.
     There are two levels of access: Administrator and Security Team. See the
     [Console Access Page](/docs/auditor/10.6/features/access-reviews/review-administration.md)
     topic for information.

     - Optionally, disable the Builtin Administrator account. See the
       [Modify the Builtin Administrator Account](/docs/auditor/10.6/features/access-reviews/review-administration.md#modify-the-builtin-administrator-account)
       topic for additional information.

   - Notification — Configure the Notification settings required in order for the application to
     send email. See the
     [Notifications Page](/docs/auditor/10.6/features/access-reviews/review-administration.md)
     topic for information.

   ## Enable Console Users

   Access Reviews Console users granted one of the available roles should be notified.

   **_RECOMMENDED:_** The notification should include:

   - Why your organization is using Netwrix Auditor Access Reviews.
   - What they will be doing in the Access Reviews Console.
   - How to log into the Access Reviews Console, specifically what URL and credentials to use.

   You should also provide links to the appropriate topics based on the user's role:

   - Security Team — Need topics that align to the work the will be doing in the Access Reviews
     Console:

     - Ownership Administrator — Send the URL link for the
       [Resource Owners Overview](/docs/auditor/10.6/features/access-reviews/resource-owners.md)
       topic.
     - Review Administrator — Send the URL link for the
       [Reviews Overview](/docs/auditor/10.6/features/access-reviews/entitlement-reviews.md)
       topic.

   - Administrator — Send the URL link for the
     [Administrator Overview](/docs/auditor/10.6/features/access-reviews/review-administration.md) topic.

   ## Resource Ownership Configuration

   Ownership of resources must be assigned in order to use the Access Reviews workflow:

   - Resource Ownership — Assign ownership for resources to be managed through the application. See
     the
     [Resource Owners Interface](/docs/auditor/10.6/features/access-reviews/resource-owners.md)
     topic for additional information.
   - Enable Owners — Send a notification to your owners about resource ownership with the
     application. See the
     [Notification to Owners](/docs/auditor/10.6/features/access-reviews/resource-owners.md#notification-to-owners)
     topic for additional information.

   ## Access Reviews Workflow

   The Access Reviews applicaton runs attestations on resources and groups with the assigned
   owners. The workflow consists of:

   - Reviews — Configure reviews for resource Access or group Membership .
   - Owner Performs Review — Owners process the review, potentially recommending changes
   - Review Administrator Approval — Review and process owner recommended changes

   **_RECOMMENDED:_** Set expectations for response time from owners.

   Reviews can be run multiple times, maintaining a historical record for each instance. See the
   [Reviews Overview](/docs/auditor/10.6/features/access-reviews/entitlement-reviews.md)
   topic for additional information.
