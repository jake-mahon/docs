# Resource Reviews Overview

The Resource Reviews interface is where users with either the Security Team or Administrator role
(to be referred to as Review Administrators) can manage reviews. The workflow provides a way for
business users or data custodians (to be referred to as Owners) to attest to the access and
privileges users have to their resources.

For the purpose of the Access Information Center, a “resource” refers to the file system shared
folders, SharePoint sites, Active Directory (AD) groups, AD distribution lists, and/or local
Administrators groups. All data available within the Access Information Center is collected by
Netwrix Access Analyzer (formerly Enterprise Auditor) according to the targeted environments.

_Remember,_ Owners are assigned to resources in the Resource Owners interface. Only resources with
assigned Owners can be included in a Resource Review.

Who Can Run Resource Reviews (Review Administrators)?

- Console Users with Administrator role

  - Can complete the Review Administrator's approval process without impacting the visibility into
    the review created by a Review Administrator with the Security Team role

    **CAUTION:** Visibility into a review created by a Review Administrator with the Security
    Team role is blocked if a Review Administrator with the Administrator role starts a new
    instance.

- Console Users with Security Team role

  - Visibility into only those reviews personally created

Who Participates in Resource Reviews?

- Review Administrators — Create / start reviews and approve / process owner recommended changes
- Owners — Perform reviews and recommend changes

Types of Resource Reviews

There are four types of reviews:

- Access – Review user access rights to resources
- Membership – Review group membership
- Permissions – Review trustee permissions to resources
- Sensitive Data – Review files containing potentially sensitive data stored within resources

**NOTE:** The Sensitive Data content within reports and reviews is visible to all users and roles.
The Matches table in the report will only be populated for Console User with Security Team and
Administrator roles. This is also required for Sensitive Data reviews.

See the [Resource Reviews Interface](/docs/accessinformationcenter/12.0/access-management/resource-reviews/index.md) topic for additional information.

Ignored Trustees

Trustees added to the SA_AIC_ResourceReviewIgnoredTrustees database table are excluded from Access,
Membership, and Permissions reviews. For Membership and Permissions reviews, trustees must be
directly excluded on an individual basis. Any members of excluded groups not directly referenced
will still show in these reviews.

## Workflow of Resource Reviews

Prerequisites:

- Entitlement Reviews License
- The Access Information Center is configured to send Notifications. See the
  [Notifications Page](/docs/accessinformationcenter/12.0/administration/configuration/notifications.md) topic for additional information.

  **NOTE:** By default, the application is configured to send notifications only to the primary
  owner. However, this can be customized on the Configuration > Notifications page to send
  notifications to all assigned owners.

- Owners assigned to resources within the Resource Owners interface. See the
  [Resource Owners Overview](/docs/accessinformationcenter/12.0/access-management/resource-owners/index.md) topic for additional information.
- Sensitive Data reviews have specific requirements for Access Analyzer configuration. See the
  [Data Collection Prerequisites](/docs/accessinformationcenter/12.0/access-management/resource-reviews/index.md#data-collection-prerequisites) topic for
  additional information.
- Optional: Access Information Center configured to commit AD changes. See the
  [Automation Prerequisites](/docs/accessinformationcenter/12.0/access-management/resource-reviews/index.md#automation-prerequisites) topic for additional
  information.

Workflow:

**_RECOMMENDED:_** When deploying the Access Information Center in an organization to process
reviews, owners should be notified prior to launching the first set of reviews. See the
[Notification to Owners](/docs/accessinformationcenter/12.0/access-management/resource-owners/index.md#notification-to-owners) topic for additional
information.

**Step 1 –** Review Administrator creates a review or starts a new review instance. See the
[Create Review Wizard](/docs/accessinformationcenter/12.0/access-management/resource-reviews/creating-reviews.md) topic for additional information.

**Step 2 –** Owner performs a review. See the
[Pending Reviews Page](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-management.md#pending-reviews-page) topic for additional information.

**Step 3 –** Review Administrator approves owner recommendations. See the
[Approval Process](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-process.md) topic for additional information.

**Step 4 –** Implement approved changes in your organization:

- Automatically, if the Access Information Center is configured to commit AD changes and access
  groups are assigned to the resources (limited to Access Information Center functionality)
- Manually, export a list of approved changes and deliver it to your IT department

When desired, the Review Administrator runs another instance of the review and the workflow starts
again. See the [Review Instances](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-management.md) topic for additional information.

# Resource Reviews Interface

The Resource Reviews interface opened by the **Resource Reviews** button on the Access Information
Center Home page is where Review Administrators perform many operations around managing reviews.
This interface has multiple pages:

- Manage Reviews Page — Create and manage all reviews
- Review Details Page — Manage and view all instances for a specific review

## Manage Reviews Page

The Manage Reviews page is the first page in the Resource Reviews interface. It displays high-level
information for reviews.

![Resource Reviews interface showing Manage Reviews page](/img/product_docs/threatprevention/threatprevention/reportingmodule/interface.webp)

The interface includes:

- Table of reviews
- Daily Review Responses line graph
- Active Review Status donut graph

The information displayed in the table includes:

- Name — Name of the review, as provided by the Review Administrator.
- Type — Type of review:

  - Access – Review user access rights to resources
  - Membership – Review group membership
  - Permissions – Review trustee permissions to resources
  - Sensitive Data – Review files containing potentially sensitive data stored within resources

- Status — Status of the review:

  - Status bar with specified percentage completed

    - [Empty bar] 0% – Indicates not started. Hovering over the bar will display the number of
      items included.
    - [Partially filled bar] with a non-zero% – Indicates the specific percentage of items
      completed. Hovering over the bar displays the number of items completed out of the total
      number of items.

  - Responses awaiting review — Owner(s) completed reviews. Waiting on Review Administrator's
    approval.
  - Stopped — Indicates that the review was stopped and is considered complete even if all of the
    responses have not been received or processed. The review remains static until it is run
    again.
  - All responses processed — Reviews have been approved by Review Administrators. The review can
    be marked as completed.
  - Completed — Indicates the Review Administrator has processed the owners' responses. The review
    remains static until it is run again. This status can appear by accepting the review as-is
    with the **Mark Completed** button.

- Created By — Name of the Review Administrator who create the review
- Created On — Date timestamp for when the review was creation. If it has been run multiple times,
  this is the date timestamp of the last instance.
- Finished On — Date timestamp when the review is marked complete by the Review Administrator. If it
  has been run multiple times, this is the date timestamp of the last instance.

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/index.md) topic for additional information.

The buttons at the bottom enable you to conduct the following actions:

![Action buttons in the Resource Reviews Interface](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/youraccessportal/interfacebuttons.webp)

| Button         | Description                                                                                                                                                                                                                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create         | Launches the Create Review wizard for creating a new review. See the [Create Review Wizard](/docs/accessinformationcenter/12.0/access-management/resource-reviews/creating-reviews.md) topic for additional information.                                                                                               |
| Rename         | Opens the Rename Review window for modifying the review name. See the [Rename Review Window](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-management.md) topic for additional information.                                                                                             |
| Edit           | Opens the Edit Review wizard for the selected review. This allows you to edit some options for an in progress review. See the [Edit Review Wizard](/docs/accessinformationcenter/12.0/access-management/resource-reviews/creating-reviews.md) for additional information.                                              |
| Delete         | Opens the Delete Review window to delete review and its instance history, which asks for confirmation of the action. See the [Delete Review Window](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-management.md) topic for additional information.                                      |
| Stop           | Opens the Stop Review window, which asks for confirmation of the action. See the [Stop Review Window](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-management.md) topic for additional information.                                                                                    |
| Mark Completed | Closes the selected review as-is and marks it as completed. Requires the owner(s) to have responded. **CAUTION:** No confirmation is requested for this action.                                                                                                                                                        |
| Run Again      | Opens the Create Review wizard for the selected review without the option to change the review type. Modify as desired and relaunch the review. See the [Review Instances](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-management.md) topic for additional information.               |
| View Details   | Opens the Review Details page for the selected review. See the Review Details Page topic for additional information.                                                                                                                                                                                                   |
| Send Reminders | Sends a notification email to the assigned owner(s), reminding of the pending review. Opens the Send Reminders window, which indicates an action status. See the [Send Reminders Window](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-management.md) topic for additional information. |

## Review Details Page

The Review Details page displays information for all instances of the selected review, which is
named in the page breadcrumb. This page is opened by selecting a review and clicking **View
Details**.

![Resource Reviews interface showing the Review Details page](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/reviewdetails.webp)

Instances are selected from the drop-down menu. By default the most current instance will be
displayed. Instances are named with date timestamps indicating the start and end times for the
review instance.

The information displayed in the table includes:

- Resource Name — The icon indicates the type of resource. The resource name includes its location,
  such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name
  (e.g., [Domain]\[Group]).
- Resource Description — Description or explanation of the resource as supplied by either the
  Ownership Administrator or the assigned owner
- Reviewer Name — Primary owner assigned to the resource
- Review Status — Indicates whether or not the assigned owner has submitted the review. Tool-tips
  display when hovering over the icons.
- Review Changes — Displays a count of items that have recommended changes for the resource
- Review Time — Date timestamp for when the owner submitted the review
- Approval Status — Status of the Review Administrator's approval:

  - Blank — Indicates the owner has not completed the review for the resource
  - Status bar with specified percentage completed

    - [Empty bar] 0% – Indicates not started. Hovering over the bar will display the number of
      items included.
    - [Partially filled bar] with a non-zero% – Indicates the specific percentage of items
      completed. Hovering over the bar displays the number of items completed out of the total
      number of items.

  - Completed — Indicates the Review Administrator has processed the owners' responses. The review
    remains static until it is run again.

- Approval Notes – Icon indicates a Note has been added. Click on the icon to read the attached
  note(s). Notes displayed here can only be added or viewed by the Review Administrator. See the
  [Edit Notes Window](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/editing-notes.md) topic for additional information.

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/index.md) topic for additional information.

The buttons at the top and bottom enable you to conduct the following actions:

![Action buttons on the Review Details page](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/reviewdetailsbuttons.webp)

| Button          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Delete          | Opens the Delete Review window to delete selected review instance, which asks for confirmation of the action. See the [Delete Review Window](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-management.md) topic for additional information.                                                                                                                                                                                                                                                       |
| Export Excel    | Exports the selected review instance information to an Excel spreadsheet. This automatically downloads the spreadsheet. See the [Data Grid Features](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/index.md) topic for additional information.                                                                                                                                                                                                                                                       |
| Export CSV      | Exports the selected review instance information to a CSV file. This automatically downloads the file. See the [Data Grid Features](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/index.md) topic for additional information.                                                                                                                                                                                                                                                                        |
| Edit Notes      | Opens the Edit Notes window for the selected resource and allows free-text editing of the notes. See the [Edit Notes Window](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/editing-notes.md) topic for additional information.                                                                                                                                                                                                                                                                       |
| View Responses  | Opens the View Responses window, which is only available if the owner has recommended changes for the resource. This window displays all recommended changes, notes provided by the owner for the recommended change, and action buttons to Accept, Decline, or Defer the recommended change. See the [View Responses Window](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-management.md) topic for additional information.                                                                      |
| Process Changes | Opens a drop-down menu to Accept, Decline, or Defer all owner-recommended changes for the selected resource. This option allows the Review Administrator to process responses in batches, so all owner-recommended changes for the selected resource will be processed with the same action. **CAUTION:** If the Access Information Center has been configured to commit changes to Active Directory and the automation prerequisites have been met for this type of review, selecting Accept will commit the requested changes. |
| Remove Changes  | Opens the Remove changes window. Clears all requested changes for the selected resource. The resource is returned to a ‘Waiting’ status, requiring the owner to review the resource again. See the [Remove Changes Window](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/removing-changes.md) topic for additional information.                                                                                                                                                                      |
| Resource Audit  | Opens the Resource Audit interface for the selected resource. See the [Resource Audit Overview](/docs/accessinformationcenter/12.0/resource-auditing/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                 |

# Data Collection & Automation Prerequisites

Resource Reviews have the following prerequisites:

- Data Collection Prerequisites
- Automation Prerequisites

  - Sensitive Data Review Automation

## Data Collection Prerequisites

### File System

The following prerequisites are required for reviews of file system data.

Sensitive Data Reviews Requirement

Sensitive Data reviews of file system data requires the following setting be configured in the
**FileSystem** > **0.Collection** Job Group in Netwrix Access Analyzer (formerly Enterprise
Auditor):

- In the 1-FSAA System Scans Job, configure the Query by selecting the **Scan file-level details**
  checkbox on the File Details tab on the Default Scoping Options page of the File System Access
  Auditor Data Collector Wizard.

View Sensitive Content within Reviews Requirement

In order to view the potentially sensitive data during a review, the following setting must also be
configured in the **FileSystem** > **0.Collection** Job Group in Netwrix Access Analyzer (formerly
Enterprise Auditor):

- In the 1-SEEK System Scans Job, configure the Query by selecting the **Store discovered sensitive
  data** checkbox on the -Sensitive Data Settings page of the File System Access Auditor Data
  Collector Wizard.

### SharePoint

The following prerequisites are required for reviews of SharePoint data.

View Sensitive Content within Reviews Requirement

In order to view the potentially sensitive data during a review, the following setting must be
configured in the **SharePoint** > **0.Collection** Job Group:

- In the 1-SPSEEK System Scans Job, configure the Query by selecting the **Store discovered
  sensitive data** checkbox on the DLP Audit Settings page of the SharePoint Access Auditor Data
  Collector Wizard.

False Positive Sensitive Data

Files that match multiple sensitive data criteria display in every sensitive data review with a
matched criteria selected. Files that have been identified as false positives for sensitive content
can be flagged either through a resource review or through the **Settings** > **Sensitive Data**
node of the Netwrix Access Analyzer (formerly Enterprise Auditor) Console. This removes the file
from reports on sensitive data until it has been un-flagged or the file has been modified and
rescanned.

**NOTE:** A false positive is a file which matches the sensitive data criteria but does not contain
actual sensitive data.

## Automation Prerequisites

When the Access Information Center has been configured to commit Active Directory group membership
changes, the Review Administrator approval process will automatically commit approved changes
recommended by owners during the review. Each type of review has additional requirements for
automation of approved changes.

- Access review — The resource must have an assigned Access Group for the access-level being
  modified (Read, Modify, or Full Control), and these groups must be in an OU for groups to be
  managed through the Access Information Center
- Membership review — The group must be in an OU for groups to be managed through the Access
  Information Center
- Permissions review — The resource must have an assigned Access Group for the access-level being
  modified (Read, Modify, or Full Control)
- Sensitive Data review — There are no additional prerequisites

  **CAUTION:** Of the three possible actions of Keep, Remove, and Not Sensitive for a Sensitive
  Data review, the Remove action cannot be automated through the Access Information Center. It
  must be manually done outside of the application. See the Sensitive Data Review Automation topic
  for additional information.

See the [Access Groups](/docs/accessinformationcenter/12.0/access-management/resource-owners/access-groups.md) topic for additional information.

### Sensitive Data Review Automation

When approving changes in a Sensitive Data review, only Not Sensitive (flag as False Positive)
requests can be automatically committed.

Removing a file from a resource cannot be done through the Access Information Center.

Approving a Keep request has no action associated to it. The file does contain sensitive data and is
to remain where it is.

Approving a Not Sensitive request to flag a file as a False Positive means the file is removed from
Access Information Center and Netwrix Access Analyzer (formerly Enterprise Auditor) reports, which
identify it as containing sensitive data matching that specific criteria. However, if the file
matches multiple sensitive data criteria, the file still displays in reports and reviews for the
other criteria. The file is added to the false positives list in the Netwrix Access Analyzer
(formerly Enterprise Auditor) **Settings** > **Sensitive Data** node for that specific criteria. If
the file is modified after being flagged, it may reappear in sensitive data reports and reviews if
matches to the criteria were found on subsequent data collection scans.
