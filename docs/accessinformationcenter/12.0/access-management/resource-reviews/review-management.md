# Owners & Resource Reviews

When your organization performs a resource review on a resource for which you are the assigned
owner, it means you, the business user or data custodian, need to attest to the access and
privileges users have to your resource. When the Review Administrator creates a new review or starts
a new instance of an existing review, you receive an email notification that includes a link to the
your pending reviews.

![Email notification of pending review](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/newreview.webp)

Use the **Sign in** link at the bottom to open the Owner portal in the Access Information Center.

_Remember,_ Your company domain credentials are used to log in.

![Reviews link on the Ownership portal](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/ownershipportal.webp)

The Owner portal displays a number next to the **Reviews**link to indicate how many of your
resources are included in pending reviews. Click the link to open the Reviews interface. The Reviews
interface has two pages: Pending Reviews and Review History. See the Pending Reviews Page and
[Review History Page](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-history.md) topics for additional information.

## Pending Reviews Page

The Pending Reviews page lists all of your resources included in pending reviews.

![Pending Reviews page of the Reviews interface](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/pendingreviews.webp)

The information displayed in the table includes:

- Created — Date timestamp for when the review was creation. If it has been run multiple times, this
  is the date timestamp of the last instance.
- Review Type – Type of review:
  - Access – Review user access rights to resources
  - Membership – Review group membership
  - Permissions – Review trustee permissions to resources
  - Sensitive Data – Review files containing potentially sensitive data stored within resources
- Resource Name — The icon indicates the type of resource. The resource name includes its location,
  such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name
  (e.g., [Domain]\[Group]).
- Resource Description — Description or explanation of the resource as supplied by either the
  Ownership Administrator or the assigned owner
- In Progress — Displays a clock icon for an in-progress review
- Last Reviewed — Date timestamp when the last review took place for the resource.

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/index.md) topic for additional information.

Performing a review means you are evaluating the resources. You can leave the resource unchanged or
make recommendations for changes. Consider the following examples:

- In an Access or a Permissions review, you can recommend changes to the type of access granted to
  the resource.
- In a Membership Review, you can recommend removing group membership from specific users.
- In a Sensitive Data review, you can choose between keeping the file as is, recommend that a file
  be removed from its current location, or indicate that the file is not sensitive and flag it as a
  false positive.

_Remember,_ any proposed changes are not committed until the Review Administrator approves the
recommendation and processes those changes.

## Resource Review Page

The **Begin Review** button opens the Resource Review page to start the review.

![Resource Review page for an Access review](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/reviewpageaccess.webp)

The Resource Review page varies based on the type of review; however, there are several common
features:

- Tabs — This page has two tabs:

  - 1 Make changes — Displays current access for the resource. For a Sensitive Data review, this
    tab displays a list of files on your resource where potentially sensitive content has been
    identified.
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

- [Perform an Access Review](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-process.md)
- [Perform a Membership Review](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-process.md)
- [Perform a Permissions Review](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-process.md)
- [Perform a Sensitive Data Review](/docs/accessinformationcenter/12.0/access-management/resource-reviews/review-process.md)

# Review Instances

After a review has been completed, it can be run again, which creates multiple instances of the
review. Each instance is identified by date timestamps indicating its start and end times.

**_RECOMMENDED:_** Prior to running another review instance, ensure the most up to date information
is available to owners for review.

![Manage Reviews page with completed review selected](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/interfacerunagain.webp)

On the Manage Reviews page in the Resource Reviews interface, a review with a Completed status can
be started again. Select the review and click **Run Again**. The Create Review wizard opens without
the Review Type page. The review can be run as-is by navigating through the wizard with the **Next**
buttons, or you can modify as desired. Completing the wizard process restarts the review. See the
[Create Review Wizard](/docs/accessinformationcenter/12.0/access-management/resource-reviews/creating-reviews.md) topic for additional information.

![Instance drop-down on Review Details page](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/reviewinstances.webp)

Previous instances for a review can be viewed on the Review Details page. Select the instance from
the drop-down menu to show the details for it. See the
[Review Details Page](/docs/accessinformationcenter/12.0/access-management/resource-reviews/index.md#review-details-page) topic for additional information.

## Sensitive Data Review Instances

If a file was marked as false positive during a previous review and approved by the Review
Administrator, then the file was removed from the sensitive data reports and reviews for that
criteria type. The file can reappear in reports and reviews if it matches the other sensitive data
criteria.

Also, a file marked as a false positive in a previous review instance may appear in future review
instances if Netwrix Access Analyzer (formerly Enterprise Auditor) finds that it has been modified
and matches the selected criteria.

# Criteria Matches Window

The criteria type listed in a Sensitive Data review appears as a blue hyperlink. Click the hyperlink
to open the Criteria Matches window.

![Criteria Matches window](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/window/criteriamatches.webp)

The table displays the following information for each match found on the selected file:

- Criteria Name — Name of the criteria with match hits found within the file
- Criteria Type — Displays Pattern for pattern based matches (System Criteria), or the subject type
  based on Subject Profile matches (for example, Customer or Employee)
- Data — Displays the file content that contains the criteria match. This includes the 19 characters
  immediately preceding and following the criteria. The match is highlighted yellow.

  - If it's a Subject Profile criteria match, then it shows the attributes found (for example,
    Address or Phone)

Click **Close** to return to the review.

# Delete Review Window

The Delete Review window opens from either the
[Manage Reviews Page](/docs/accessinformationcenter/12.0/access-management/resource-reviews/index.md#manage-reviews-page) or the
[Review Details Page](/docs/accessinformationcenter/12.0/access-management/resource-reviews/index.md#review-details-page) of the Resource Reviews interface:

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

# Missing Items Window

The Some items could not be found message displays when importing a resource list in the Create
Review or Edit Review wizards if items specified in the CSV file can not be found or are not valid
for the review.

![Some items could not be found dialog](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/window/missingitemsmessage.webp)

Click **Yes** to open the Missing Items window or click **No** to complete the import without
viewing the missing items.

![Missing items window](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/window/missingitems.webp)

Review the list of resources. Items can be listed for multiple reasons:

- Resources that do not exist in the resource owners list
- Resources that exist in the resources owners list but the ownership has been declined
- Resources that are not valid selections for the selected review type

  - Membership – Resources that are not groups
  - Access / Permissions / Sensitive Data – Resources that are not file system, SharePoint, or DFS

- For Sensitive Data reviews, resources that do not have scan data available. This includes
  resources that only have sensitive data at a child folder level.

Click **OK** to close the window and complete the import of any valid resources.

# Rename Review Window

The Rename Review window opens from the [Manage Reviews Page](/docs/accessinformationcenter/12.0/access-management/resource-reviews/index.md#manage-reviews-page)
of the Resource Reviews interface. Follow the steps to rename a review.

**Step 1 –** Select the review and click **Rename**. The Rename Review window opens.

![Rename Review window](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/window/renamereview.webp)

**Step 2 –** Edit the review name in the textbox.

**Step 3 –** Click **OK** when finished. The Rename Review window closes.

The renamed review will display in the table on the Manage Reviews page.

# Selected Resources Window

The Selected Resources window opens from the **View Selections** button in the
[Create Review Wizard](/docs/accessinformationcenter/12.0/access-management/resource-reviews/creating-reviews.md).

![Selected Resources windwo](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/wizard/selectedresources.webp)

The table displays:

- Resource — The icon indicates the type of resource. The resource name includes its location, such
  as the UNC path for a file system resource, the URL for SharePoint resource, or Group name (e.g.,
  [Domain]\[Group]).
- Reviewer — Primary owner assigned to the resource

Use the **Remove** button to remove a resource from this review. Click **OK** to close the window
and complete the review creation.

# Send Reminders Window

The Send Reminders window opens from the [Manage Reviews Page](/docs/accessinformationcenter/12.0/access-management/resource-reviews/index.md#manage-reviews-page)
of the Resource Reviews interface. Select the desired active review(s) and click **Send Reminders**
to send immediate reminder notifications. The Send Reminders window opens to display an action
status.

![Send Reminders window](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/window/sendreminders.webp)

The window displays the action status. When a successful status is indicated, assigned owners were
sent a reminder email. Click **OK** to close the Send Reminders window.

_Remember,_ automatic weekly reminders can be configured on the
[Notifications Page](/docs/accessinformationcenter/12.0/administration/configuration/notifications.md) of the Configuration interface.

# Stop Review Window

The Stop Review window opens from the [Manage Reviews Page](/docs/accessinformationcenter/12.0/access-management/resource-reviews/index.md#manage-reviews-page) of
the Resource Reviews interface. Select the desired active review(s) and click **Stop**. The Stop
Review window opens to confirm the action.

![Stop Review window](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/window/stopreview.webp)

**CAUTION:** This will prevent owners from completing the review, removing associated resources from
their Pending Reviews list.

Click **Yes** to stop the review. Click **No** to cancel the action. The Stop Review window closes.

# View Responses Window

The View Responses window opens from the **View Response** button on the
[Review Details Page](/docs/accessinformationcenter/12.0/access-management/resource-reviews/index.md#review-details-page) of the Resource Reviews interface. It
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

**CAUTION:** If the Access Information Center has been configured to commit Active Directory
changes, clicking **Accept** will commit the changes if all prerequisite for the review type have
been met.

If the Access Information Center has been configured to commit Active Directory changes, the icon at
the front of the Item Reviewed column is yellow. The selected action is automatically committed
according to the type of review:

- Membership — Clicking accept removes group membership from the trustee
- Access and Permissions — If the prerequisite of resource based groups are set up for the
  resources, click accept will change group membership for the trustee. If the desire is to change
  access, the trustee is moved to the group with the desired access or permissions and removed from
  the group granting the current access or permissions. If the desire is to remove access, the
  trustee is removed from the group granting the current access or permissions.
- Sensitive Data — The only action that can be committed is to flag a file as a false positive for
  the selected criteria

See the [Data Collection & Automation Prerequisites](/docs/accessinformationcenter/12.0/access-management/resource-reviews/index.md) topic for additional
information.

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/index.md) topic for additional information.

Select an item in the table, and use the action buttons at the bottom to identify the decision:

![viewresponsesbuttons](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/window/viewresponsesbuttons.webp)

| Button     | Description                                                                                                                                                                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Accept     | Accepts the selected owner-recommended change. If the Access Information Center has been configured to commit changes to Active Directory and the automation prerequisites have been met for the type of review, this change will be committed when you click the **Accept** button. |
| Decline    | Declines, or rejects, the owner-recommended change.                                                                                                                                                                                                                                  |
| Defer      | Defers the owner-recommended change to a later time.                                                                                                                                                                                                                                 |
| View Notes | Opens the Notes window for the selected item.                                                                                                                                                                                                                                        |
