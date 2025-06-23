---
title: index
sidebar_label: index
description: Auditor 10.7 documentation for index with configuration details, usage instructions, and implementation guidance.
---

# First Launch

The installer places the following icon on the desktop which opens the Access Reviews Console:

![desktopicon](/img/product_docs/threatprevention/threatprevention/install/desktopicon.webp)

Use this icon to launch the Access Reviews Console for the first time.

![Set Builtin Administrator Password page](/img/product_docs/auditor/access/reviews/admin/firstlaunchpassword.webp)

The Access Reviews application is installed with a Builtin Administrator account; "admin" is the
User Name. You will be prompted to set the account's password. It must be eight or more characters
long. After setting the password, you will need to login with the "admin" account.

Using the Configuration interface, the Builtin Administrator account can be disabled once a domain
account has been granted the Administrator role. You can also change the password for the Builtin
Administrator account. See the
[Modify the Builtin Administrator Account](/docs/auditor/10.7/access-governance/access-reviews/configuration.md#modify-the-builtin-administrator-account)
topic for additional information.

![firstlaunchlandingpage](/img/product_docs/auditor/access/reviews/admin/firstlaunchlandingpage.webp)

The Resource Owners interface opens. The first thing that should be done is to configure console
access for domain users and configure notification settings. Select the Configuration tab. See the
[Console Access Page](/docs/auditor/10.7/access-governance/access-reviews/configuration.md) and
[Notifications Page](/docs/auditor/10.7/access-governance/access-reviews/configuration.md) topics for additional information.

The interfaces available to console users are controlled by the role assigned. Owners do not need to
be assigned console access. See the [URL & Login](/docs/auditor/10.7/access-governance/access-reviews/index.md) topic for information on how users will
log in and where they are directed after login.

See the [Navigation](/docs/auditor/10.7/access-governance/access-reviews/index.md) topic for information on each of the interfaces.

# URL & Login

The Access Reviews Console can be accessed through a supported browser from a machine within your
company's network. The URL is the hosting machine's name and the
port, http://[HOSTNAME.DOMAIN.COM]:81. For example, if the application was installed on a server
named NEWYORKSRV10.NWXTech.com with the default port of 81, the URL would be
http://NEWYORKSRV10.NWXTech.com:81.

Administrators

Administrators with access to the server hosting the application can use the desktop icon to launch
the application in their default browser. Alternatively, the localhost URL can be used:

- HTTP URL

  - http://localhost:81

- HTTPS URL

  - https://localhost:481

Remote Access

Since Access Reviews is a browser-based application, it is possible to access the web interface
remotely. It is up to the Administrator to provide users with the correct URL for access.

Depending on your network environment, you may need to use the NetBIOS name, FQDN, or IP Address of
the hosting server in the browser. Also, additional configurations by network and system
administrators may be necessary to make the web server accessible to remote users (firewall
configurations, DNS settings, etc.).

The server name in the URL can be replaced with an alias. See the
[Notification Options](/docs/auditor/10.7/access-governance/access-reviews/configuration.md#notification-options) topic for additional
information.

## Login Page

Users login with their domain credentials. If only one domain is known to the Access Reviews
Console, the credentials need only be username and password. If multiple domains are known, then the
username needs to be entered in the `domain\username` format.

**NOTE:** The URL may need to be added to the browser’s list of trusted sites.

![Access Information Center Login page](/img/product_docs/threatprevention/threatprevention/eperestsite/login.webp)

The interface a user arrives at depends upon the assigned role or lack of assigned role.

## User Landing Page

Role based access controls what interfaces users can see and where each user is directed upon login.

**_RECOMMENDED:_** Send an email to your users. Let them know why you are implementing use of the
application, provide the URL, and explain how to login with their domain credentials and the
username format. See the
[Enable Console Users](/docs/auditor/10.7/access-governance/access-reviews/index.md#enable-console-users) topic for additional
information.

### Administrator Role

Users granted the Administrator role are directed to the Resource Owners interface upon login.

![Resource Owners interface as the landing page for an Administrator user](/img/product_docs/auditor/access/reviews/admin/landingadmin.webp)

Administrators are the only ones with access to the Configuration interface. The My Reviews
interface is available if the logged in user is also assigned ownership of a resource.

### Security Team Role

Users granted the Security Team role are directed to the Resource Owners interface upon login.

![Resource Owners interface as the landing page for a Security Team user](/img/product_docs/auditor/access/reviews/admin/landingsecurityteam.webp)

Security Team members only lack access to the Configuration interface, which is only available to
Administrators. The My Reviews interface is available if the logged in user is also assigned
ownership of a resource.

### Owners Without Role

Users assigned ownership of a resource but not granted a user role are directed to the My Reviews
interface upon login.

![My Reviews interface as the landing page for an Owner without a user role](/img/product_docs/auditor/access/reviews/admin/landingowner.webp)

Owners can view pending reviews and view historical reviews.

# Navigation

The Access Reviews Console has four interfaces. Upon login, users granted console access are brought
to the Resource Owners interface.

![Access Information Center landing page, Resource Owners interface, with all 4 tabs available to an Administrator who is also an assigned owner](/img/product_docs/threatprevention/threatprevention/reportingmodule/interface.webp)

The signed in user is displayed in the upper-right corner, along with the **Sign out** link. The
available interfaces change according to the role assigned to the user.

For Administrator Only

The Configuration tab opens the Configuration interface. Configure console access, Active Directory
service account, notification settings, database access, and diagnostic logging level.

This interface is available only to users with the Administrator role. See the
[Configuration Interface Overview](/docs/auditor/10.7/access-governance/access-reviews/configuration.md) topic for additional information.

For Security Team & Administrator

The Resource Owners tab opens the Resource Owners interface. Manage resource ownership by assigning
owners to resources and requesting ownership confirmation. Resources to be included in the Access
Reviews workflow must first be assigned at least one owner within the Resource Owners interface.
Assigned owners can log in to complete reviews.

This interface is available only to users with either the Security Team or Administrator role. See
the [Resource Owners Interface](/docs/auditor/10.7/access-governance/resource-owners/owner-management.md) topic for additional information.

The Entitlement Reviews tab opens the Entitlement Reviews interface. Create and manage reviews.
There are two types of reviews for resources being managed within the Access Reviews application:
resource Access reviews and group Membership reviews. This does require the Access Reviews
application to be configured to send notifications.

This interface is available only to users with either the Security Team or Administrator role. See
the [Entitlement Reviews Interface](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md) topic for additional
information.

For Assigned Owner

The My Reviews tab opens the My Reviews interface. It is only visible if the logged in user is also
an assigned owner of at least one resource. Assigned owners without a user role are directed to the
My Reviews interface at login.

The My Reviews interface is available to any domain user who has been assigned ownership of a
resource. See the [Owners & Access Reviews](/docs/auditor/10.7/access-governance/resource-owners/index.md) topic for additional
information.

## Interface Quick Reference

The table below is a quick reference aligning each interface with its purpose, how to access it, and
who has access to it:

| Interface           | Purpose                                                                                                                           | Opened By                                                      | Accessible To                         |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------- |
| Configuration       | Configure console access, Active Directory service account, notification settings, database access, and diagnostic logging level. | **Configuration** tab                                          | Administrator role                    |
| Resource Owners     | Manage resource ownership by assigning owners to resources and requesting ownership confirmation.                                 | **Resource Owners** tab                                        | Administrator role Security Team role |
| Entitlement Reviews | Create and manage reviews.                                                                                                        | **Entitlement Reviews** tab                                    | Administrator role Security Team role |
| My Reviews          | View and process pending reviews. Also view historical reviews.                                                                   | **My Reviews** tab Direct from login for owners without a role | Assigned Resource Owners              |

# Administrator Overview

Access Reviews administrators have access to the Configuration interface where there application
settings reside. This topic includes the following subtopics:

- [Getting Started](/docs/auditor/10.7/access-governance/access-reviews/index.md#getting-started)
- [First Launch](/docs/auditor/10.7/access-governance/access-reviews/index.md)
- [Navigation](/docs/auditor/10.7/access-governance/access-reviews/index.md)
- [Configuration Interface Overview](/docs/auditor/10.7/access-governance/access-reviews/configuration.md)
- [Additional Configuration Options](/docs/auditor/10.7/access-governance/access-reviews/configuration.md)
- [URL & Login](/docs/auditor/10.7/access-governance/access-reviews/index.md)
- [Troubleshooting](/docs/auditor/10.7/administration/health-monitoring/troubleshooting.md)

# Reviews Overview

The Entitlement Reviews interface is where users with either the Security Team or Administrator role
(to be referred to as Review Administrators) can manage reviews. The workflow provides a way for
business users or data custodians (to be referred to as Owners) to attest to the access and
privileges users have to their resources.

For the purpose of the Access Reviewsapplication, a “resource” refers to the file system shared
folders, SharePoint Online site collections, and Active Directory (AD) groups. All data available
within the Access Reviews application is collected by Netwrix Auditor according to the synchronized
monitoring plans.

_Remember,_ Owners are assigned to resources in the Resource Owners interface. Only resources with
assigned Owners can be included in a reviews.

Who Can Run Reviews (Review Administrators)?

- Console Users with Administrator role

  - Can complete the Review Administrator's approval process without impacting the visibility into
    the review created by a Review Administrator with the Security Team role

    **CAUTION:** Visibility into a review created by a Review Administrator with the Security
    Team role is blocked if a Review Administrator with the Administrator role starts a new
    instance.

- Console Users with Security Team role

  - Visibility into only those reviews personally created

Who Participates in Reviews?

- Review Administrators — Create / start reviews and approve / process owner recommended changes
- Owners — Perform reviews and recommend changes

Types of Reviews

There are two types of reviews:

- Access – Review user access rights to resources
- Membership – Review group membership

See the [Entitlement Reviews Interface](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md) topic for additional information.

## Workflow of Reviews

Prerequisite:

- The Access Reviews application is configured to send Notifications. See the
  [Notifications Page](/docs/auditor/10.7/access-governance/access-reviews/configuration.md) topic for additional information.

  **NOTE:** By default, the application is configured to send notifications only to the primary
  owner. However, this can be customized on the Configuration > Notifications page to send
  notifications to all assigned owners.

- Owners assigned to resources within the Resource Owners interface. See the
  [Resource Owners Overview](/docs/auditor/10.7/access-governance/resource-owners/index.md) topic for additional information.

Workflow:

**_RECOMMENDED:_** When deploying the Access Reviews application in an organization to process
reviews, owners should be notified prior to launching the first set of reviews. See the
[Notification to Owners](/docs/auditor/10.7/access-governance/resource-owners/index.md#notification-to-owners) topic for additional
information.

1. Review Administrator creates a review or starts a new review instance. See the
   [Create Review Wizard](/docs/auditor/10.7/access-governance/access-reviews/creating-reviews.md) topic for additional information.
2. Owner performs a review. See the [Pending Reviews](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md) topic for additional
   information.
3. Review Administrator approves owner recommendations. See the
   [Approval Process](/docs/auditor/10.7/access-governance/access-reviews/review-process.md) topic for additional information.
4. Implement approved changes in your organization. Manually, export a list of approved changes and
   deliver it to your IT department.

When desired, the Review Administrator runs another instance of the review and the workflow starts
again. See the [Review Instances](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md) topic for additional information.

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

See the [Licenses](/docs/auditor/10.7/installation-and-setup/initial-configuration/license-activation.md) topic for additional information.

_Remember,_ there is one single Access Review license for all data sources that can send data to the
application.

Follow the steps to use Netwrix Auditor Access Reviews in conjuction with Auditor.

**Step 1 –** Install Access Reviews on the same computer where Netwrix Auditor is installed. See the
[Installation Overview](/docs/auditor/10.7/access-governance/access-reviews/configuration.md) topic for prerequisites and
additional information.

**Step 2 –** Configure Access Reviews. The Configuration interface is only available to users with
the Administrator role. See the [Administrator Overview](/docs/auditor/10.7/access-governance/access-reviews/index.md) topic
for configuration settings and enabling user access.

**Step 3 –** Use the Access reviews configuration tool to setup the data flow from the Auditor
database to the Access Reviews database. See the
[Select Data Sources](/docs/auditor/10.7/access-governance/access-reviews/configuration.md) topic for additional information.

**NOTE:** Data upload speed depends on the amount of collected data and Auditor collectors
configuration.

**Step 4 –** Configure resource ownership through the Access Reviews Console. The Resource Owners
interface is available to users with either the Security Team or Administrator role. Managing
ownership is core component for the Access Reviews workflow. See the
[Resource Owners Overview](/docs/auditor/10.7/access-governance/resource-owners/index.md) topic for additional
information.

**NOTE:** The [Owners & Access Reviews](/docs/auditor/10.7/access-governance/resource-owners/index.md) topic and
subtopics are written for the assigned owners. You can distribute the URL to this topic or download
a PDF to be distributed to your assigned resource owners.

**Step 5 –** Configure and run reviews. The Entitlement Reviews interface is available to users with
either the Security Team or Administrator role. See the
[Reviews Overview](/docs/auditor/10.7/access-governance/access-reviews/index.md) topic for additional
information.

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
     There are two levels of access: Administrator and Security Team. See the
     [Console Access Page](/docs/auditor/10.7/access-governance/access-reviews/configuration.md) topic for
     information.

     - Optionally, disable the Builtin Administrator account. See the
       [Modify the Builtin Administrator Account](/docs/auditor/10.7/access-governance/access-reviews/configuration.md#modify-the-builtin-administrator-account)
       topic for additional information.

   - Notification — Configure the Notification settings required in order for the application to
     send email. See the
     [Notifications Page](/docs/auditor/10.7/access-governance/access-reviews/configuration.md) topic for
     information.

   ## Enable Console Users

   Access Reviews Console users granted one of the available roles should be notified.

   **_RECOMMENDED:_** The notification should include:

   - Why your organization is using Netwrix Auditor Access Reviews.
   - What they will be doing in the Access Reviews Console.
   - How to log into the Access Reviews Console, specifically what URL and credentials to use.

   You should also provide links to the appropriate topics based on the user's role:

   - Security Team — Need topics that align to the work the will be doing in the Access Reviews
     Console:

     - Ownership Administrator — Send the URL link for the
       [Resource Owners Overview](/docs/auditor/10.7/access-governance/resource-owners/index.md) topic.
     - Review Administrator — Send the URL link for the
       [Reviews Overview](/docs/auditor/10.7/access-governance/access-reviews/index.md) topic.

   - Administrator — Send the URL link for the
     [Administrator Overview](/docs/auditor/10.7/access-governance/access-reviews/index.md) topic.

   ## Resource Ownership Configuration

   Ownership of resources must be assigned in order to use the Access Reviews workflow:

   - Resource Ownership — Assign ownership for resources to be managed through the application. See
     the [Resource Owners Interface](/docs/auditor/10.7/access-governance/resource-owners/owner-management.md) topic for
     additional information.
   - Enable Owners — Send a notification to your owners about resource ownership with the
     application. See the
     [Notification to Owners](/docs/auditor/10.7/access-governance/resource-owners/index.md#notification-to-owners)
     topic for additional information.

   ## Access Reviews Workflow

   The Access Reviews applicaton runs attestations on resources and groups with the assigned
   owners. The workflow consists of:

   - Reviews — Configure reviews for resource Access or group Membership .
   - Owner Performs Review — Owners process the review, potentially recommending changes
   - Review Administrator Approval — Review and process owner recommended changes

   **_RECOMMENDED:_** Set expectations for response time from owners.

   Reviews can be run multiple times, maintaining a historical record for each instance. See the
   [Reviews Overview](/docs/auditor/10.7/access-governance/access-reviews/index.md) topic for additional
   information.
