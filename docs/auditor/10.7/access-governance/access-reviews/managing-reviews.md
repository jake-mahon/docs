# Entitlement Reviews Interface

The Entitlement Reviews interface opened by the Entitlement Reviews tab is where Review
Administrators perform many operations around managing reviews. This interface has multiple pages:

- Manage Reviews Page — Create and manage all reviews
- Review Details Page — Manage and view all instances for a specific review

## Manage Reviews Page

The Manage Reviews page is the first page in the Entitlement Reviews interface. It displays
high-level information for reviews.

![Entitlement Reviews interface showing Manage Reviews page](/img/product_docs/auditor/access/reviews/entitlementreviews/managereviewspage.webp)

The interface includes:

- Table of reviews
- Daily Review Responses line graph
- Active Review Status donut graph

The information displayed in the table includes:

- Name — Name of the review, as provided by the Review Administrator
- Type — Type of review:

  - Access – Review user access rights to resources
  - Membership – Review group membership

- Status — Status of the review:

  - Status bar with specified percentage completed

    - [Empty bar] 0% – Indicates not started. Hovering over the bar will display the number of
      items included.
    - [Partially filled bar] with a non-zero% – Indicates the specific percentage of items
      completed. Hovering over the bar displays the number of items completed out of the total
      number of items.

  - Responses awaiting review — Owner(s) completed reviews. Waiting on Review Administrator's
    approval.
  - All responses processed — Reviews have been approved by Review Administrators. The review can
    be marked as completed.
  - Stopped — Indicates that the review was stopped and is considered complete even if all of the
    responses have not been received or processed. The review remains static until it is run
    again.
  - Completed — Indicates the Review Administrator has processed the owners' responses. The review
    remains static until it is run again. This status can appear by accepting the review as-is
    with the Mark Completed button.

- Created By — Name of the Review Administrator who create the review
- Created On — Date timestamp for when the review was creation. If it has been run multiple times,
  this is the date timestamp of the last instance.
- Finished On — Date timestamp when the review is marked complete by the Review Administrator. If it
  has been run multiple times, this is the date timestamp of the last instance.

The table data grid functions the same way as other table grids. See the

[Data Grid Features](/docs/auditor/10.7/access-governance/entitlement-management/data-grid-features.md) topic for additional information.

The buttons at the bottom enable you to conduct the following actions:

| Button         | Description                                                                                                                                                                                                                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create         | Launches the Create Review wizard for creating a new review. See the [Create Review Wizard](/docs/auditor/10.7/access-governance/access-reviews/creating-reviews.md) topic for additional information.                                                                                              |
| Rename         | Opens the Rename Review window for modifying the review name. See the [Rename Review Window](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md) topic for additional information.                                                                                             |
| Delete         | Opens the Delete Review window to delete review and its instance history, which asks for confirmation of the action. See the [Delete Review Window](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md) topic for additional information.                                      |
| Stop           | Opens the Stop Review window, which asks for confirmation of the action. See the [Stop Review Window](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md) topic for additional information.                                                                                    |
| View Details   | Opens the Review Details page for the selected review. See the Review Details Page topic for additional information.                                                                                                                                                                                |
| Mark Completed | Closes the selected review as-is and marks it as completed. Requires the owner(s) to have responded. **CAUTION:** No confirmation is requested for this action.                                                                                                                                     |
| Run Again      | Opens the Create Review wizard for the selected review without the option to change the review type. Modify as desired and relaunch the review. See the [Review Instances](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md) topic for additional information.               |
| Send Reminders | Sends a notification email to the assigned owner(s), reminding of the pending review. Opens the Send Reminders window, which indicates an action status. See the [Send Reminders Window](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md) topic for additional information. |

## Review Details Page

The Review Details page displays information for all instances of the selected review, which is
named in the page breadcrumb. This page is opened by selecting a review on the Manage Reviews page
and clicking **View Details**.

![Entitlement Reviews interface showing the Review Details page](/img/product_docs/auditor/access/reviews/entitlementreviews/reviewdetailspage.webp)

Instances are selected from the drop-down menu. By default the most current instance will be
displayed. Instances are named with date timestamps indicating the start and end times for the
review instance.

The information displayed in the table includes:

- Resource Name — The icon indicates the type of resource. The resource name includes its location,
  such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name
  (e.g., [Domain]\[Group]).
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
  [Edit Notes Window](/docs/auditor/10.7/access-governance/entitlement-management/edit-notes.md) topic for additional information.

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/auditor/10.7/access-governance/entitlement-management/data-grid-features.md) topic for additional information.

The buttons at the top and bottom enable you to conduct the following actions:

| Button          | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Delete          | Opens the Delete Review window to delete selected review instance, which asks for confirmation of the action. See the [Delete Review Window](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md) topic for additional information.                                                                                                                                                                                  |
| Export Excel    | Exports the selected review instance information to an Excel spreadsheet. This automatically downloads the spreadsheet. See the [Data Grid Features](/docs/auditor/10.7/access-governance/entitlement-management/data-grid-features.md) topic for additional information.                                                                                                                                                                |
| Export CSV      | Exports the selected review instance information to a CSV file. This automatically downloads the file. See the [Data Grid Features](/docs/auditor/10.7/access-governance/entitlement-management/data-grid-features.md) topic for additional information.                                                                                                                                                                                 |
| Edit Notes      | Opens the Edit Notes window for the selected resource and allows free-text editing of the notes. See the [Edit Notes Window](/docs/auditor/10.7/access-governance/entitlement-management/edit-notes.md) topic for additional information.                                                                                                                                                                                                |
| View Responses  | Opens the View Responses window, which is only available if the owner has recommended changes for the resource. This window displays all recommended changes, notes provided by the owner for the recommended change, and action buttons to Accept, Decline, or Defer the recommended change. See the [View Responses Window](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md) topic for additional information. |
| Process Changes | Opens a drop-down menu to Accept, Decline, or Defer all owner-recommended changes for the selected resource. This option allows the Review Administrator to process responses in batches, so all owner-recommended changes for the selected resource will be processed with the same action.                                                                                                                                             |
| Remove Changes  | Opens the Remove changes window. Clears all requested changes for the selected resource. The resource is returned to a ‘Waiting’ status, requiring the owner to review the resource again. See the [Remove Changes Window](/docs/auditor/10.7/access-governance/entitlement-management/edit-notes.md) topic for additional information.                                                                                                  |

# Pending Reviews

When your organization performs a review on a resource for which you are the assigned owner, it
means you, the business user or data custodian, need to attest to the access and privileges users
have to your resource. When the Review Administrator creates a new review or starts a new instance
of an existing review, you receive an email notification that includes a link to the your pending
reviews.

![Email announcing a pending review](/img/product_docs/auditor/access/reviews/entitlementreviews/pendingreviewemail.webp)

Use the **Sign in** link at the bottom to open the My Reviews interface in the Access Reviews
Console.

_Remember,_ your company domain credentials are used to log in.

The My Reviews interface has two pages: Pending Reviews and Review History. See the
[Review History Page](/docs/auditor/10.7/access-governance/access-reviews/review-history.md) topic for additional information.

## Pending Reviews Page

The Pending Reviews page lists all of your resources included in pending reviews.

![My Reviews interface showing Pending Reviews page](/img/product_docs/auditor/access/reviews/entitlementreviews/pendingreivewspage.webp)

The information displayed in the table includes:

- Created — Date timestamp for when the review was creation. If it has been run multiple times, this
  is the date timestamp of the last instance.
- Review Type – Type of review:
  - Access – Review user access rights to resources
  - Membership – Review group membership
- Resource Name — The icon indicates the type of resource. The resource name includes its location,
  such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name
  (e.g., [Domain]\[Group]).
- In Progress — Displays a clock icon for an in-progress review
- Last Reviewed — Date timestamp when the last review took place for the resource.

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/auditor/10.7/access-governance/entitlement-management/data-grid-features.md) topic for additional information.

Performing a review means you are evaluating the resources. You can leave the resource unchanged or
make recommendations for changes. Consider the following examples:

- In an Access review, you can recommend changes to the type of access granted to the resource.
- In a Membership Review, you can recommend removing group membership from specific users.

_Remember,_ any proposed changes are not committed until the Review Administrator approves the
recommendation and processes those changes.

## Resource Review Page

The Begin Review button opens the Resource Review page to start the review.

![Resource Reviews page showing the 1 Make changes tab](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/reviewpageaccess.webp)

The Resource Review page varies based on the type of review; however, there are several common
features:

- Tabs — This page has two tabs:

  - 1 Make changes — Displays current access for the resource.
  - 2 Review changes — Displays changes you recommend making for your review prior to submission

- You are reviewing — Indicates the type of review, the resource being reviewed, and the date
  timestamp for when the review instance was started
- Search — Filters the table for matches to the typed value
- Save Changes — Saves all recommended changes, enabling you to leave the review in progress and
  return at a later time to complete it. It opens the Saving review window, which displays a status
  for the action.
- Remove Access — On the 1 Make changes tab, removes access from the selected trustee(s). Ctrl-click
  can be used for multi-select. Current access blue icon with a checkmark will turn to an empty
  yellow icon.
- Only show changes since last review — Scopes the table to only display those items that have been
  modified since the last review instance
- Previous / Next buttons — Moves between the two tabs
- Submit button — On the 2 Review changes tab, the **Next** button becomes a **Submit** button. This
  submits your review to the Review Administrator.

The content within the table varies, and additional options may appear depending on the type of
review being conducted. See the following sections for step by step instructions:

- [Perform an Access Review](/docs/auditor/10.7/access-governance/access-reviews/review-process.md)
- [Perform a Membership Review](/docs/auditor/10.7/access-governance/access-reviews/review-process.md)

# Review Instances

After a review has been completed, it can be run again, which creates multiple instances of the
review. Each instance is identified by date timestamps indicating its start and end times.

**_RECOMMENDED:_** Prior to running another review instance, ensure the most up to date information
is available to owners for review.

![Entitlement Reviews interface showing the Manage Review page](/img/product_docs/auditor/access/reviews/entitlementreviews/managereviewspage.webp)

On the Manage Reviews page in the Entitlement Reviews interface, a review with a Completed status
can be started again. Select the review and click **Run Again**. The Create Review wizard opens
without the Review Type page. The review can be run as-is by navigating through the wizard with the
**Next** buttons, or you can modify as desired. Completing the wizard process restarts the review.
See the [Create Review Wizard](/docs/auditor/10.7/access-governance/access-reviews/creating-reviews.md) topic for additional information.

# Delete Review Window

The Delete Review window opens from either the
[Manage Reviews Page](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md#manage-reviews-page) or the
[Review Details Page](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md#review-details-page) of the Entitlement Reviews interface:

- Delete Entire Review — Deleting a review from the Manage Reviews page will delete all instances of
  the selected review
- Delete Review Instance — Deleting a review from the Review Details page will delete the selected
  review instance

## Delete Entire Review

Select the desired review on the Manage Reviews page and click **Delete**. The Delete Review window
opens to confirm the action.

![Delete Review window](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/window/deletereviewentire.webp)

**CAUTION:** This will delete all instances of the selected review and all historical data
associated with it.

Click **Yes** to complete the deletion. Click **No** to cancel it. The Delete Review window closes.

## Delete Review Instance

Select the desired review instance from the drop-down menu on the Review Details page and click
**Delete**. The Delete Review window opens to confirm the action.

![Delete Review window](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/window/deletereviewinstance.webp)

**CAUTION:** This will delete all historical data associated to the selected review instance.

Click **Yes** to complete the deletion. Click **No** to cancel it. The Delete Review window closes.

# Rename Review Window

The Rename Review window opens from the [Manage Reviews Page](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md#manage-reviews-page)
of the Entitlement Reviews interface. Follow the steps to rename a review.

**Step 1 –** Select the review and click **Rename**. The Rename Review window opens.

![Rename Review window](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/window/renamereview.webp)

**Step 2 –** Edit the review name in the textbox.

**Step 3 –** Click **OK** when finished. The Rename Review window closes.

The renamed review will display in the table on the Manage Reviews page.

# Selected Resources Window

The Selected Resources window opens from the **View Selections** button in the
[Create Review Wizard](/docs/auditor/10.7/access-governance/access-reviews/creating-reviews.md).

![Selected Resources windwo](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/wizard/selectedresources.webp)

The table displays:

- Resource — The icon indicates the type of resource. The resource name includes its location, such
  as the UNC path for a file system resource, the URL for SharePoint resource, or Group name (e.g.,
  [Domain]\[Group]).
- Reviewer — Primary owner assigned to the resource

Use the **Remove** button to remove a resource from this review. Click **OK** to close the window
and complete the review creation.

# Send Reminders Window

The Send Reminders window opens from the [Manage Reviews Page](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md#manage-reviews-page)
of the Entitlement Reviews interface. Select the desired active review(s) and click **Send
Reminders** to send immediate reminder notifications. The Send Reminders window opens to display an
action status.

![Send Reminders window](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/window/sendreminders.webp)

The window displays the action status. When a successful status is indicated, assigned owners were
sent a reminder email. Click **OK** to close the Send Reminders window.

_Remember,_ automatic weekly reminders can be configured on the
[Notifications Page](/docs/auditor/10.7/access-governance/access-reviews/configuration.md) of the Configuration interface.

# Stop Review Window

The Stop Review window opens from the [Manage Reviews Page](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md#manage-reviews-page) of
the Entitlement Reviews interface. Select the desired active review(s) and click **Stop**. The Stop
Review window opens to confirm the action.

![Stop Review window](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/window/stopreview.webp)

**CAUTION:** This will prevent owners from completing the review, removing associated resources from
their Pending Reviews list.

Click **Yes** to stop the review. Click **No** to cancel the action. The Stop Review window closes.

# View Responses Window

The View Responses window opens from the **View Response** button on the
[Review Details Page](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md#review-details-page) of the Entitlement Reviews interface. It
displays all owner-recommended changes and notes for the selected resource.

![View Responses window](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/viewresponses.webp)

The information displayed in the table includes:

- Item Reviewed — Item upon which changes were suggested by the owner
- Current — Current state of the item at the time of the review
- Desired — Change suggested by the owner
- Notes — Icon indicates a Note has been added. Click on the icon to read the attached note(s).
- Approval — Status of the Review Administrator's approval

  - Clock — Indicates waiting on the Review Administrator to make an official decision
  - Green Checkmark — Indicates the Review Administrator has approved the request
  - Red X — Indicates the Review Administrator has declined the request
  - Yellow Question mark — Indicates the Review Administrator has deferred taking action until a
    later time

The **Show Only Changes** checkbox is selected by default to show only the items with
owner-recommended changes. If deselected, all items included in the review are displayed. When
selecting the items with no changes in the grid, the change buttons at the bottom of the page are
disabled.

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/auditor/10.7/access-governance/entitlement-management/data-grid-features.md) topic for additional information.

Select an item in the table, and use the action buttons at the bottom to identify the decision:

![viewresponsesbuttons](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/window/viewresponsesbuttons.webp)

| Button     | Description                                          |
| ---------- | ---------------------------------------------------- |
| Accept     | Accepts the selected owner-recommended change.       |
| Decline    | Declines, or rejects, the owner-recommended change.  |
| Defer      | Defers the owner-recommended change to a later time. |
| View Notes | Opens the Notes window for the selected item.        |
