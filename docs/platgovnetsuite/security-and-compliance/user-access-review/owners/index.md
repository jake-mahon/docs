# UAR Owner

Owners are set up by the UAR administrator to perform permission and/or membership reviews to assure
they are appropriate:

- **Role Permission Review**: Review Permissions and Permission Levels granted within the Role
- **Membership Review**: Review the individuals assigned to the Role

The [Owner User Access Reviews List](/docs/platgovnetsuite/security-and-compliance/user-access-review/owners/index.md) topic has details for accomplishing your
reviews.

Owners are notified with an email message when a new review has been assigned. You can click one of
the links in the email, or login to NetSuite and open [User Access Review](/docs/platgovnetsuite/security-and-compliance/user-access-review/index.md) to
access the dashboard.

1. Open **User Access Review** from NetSuite.
2. Click **UAR Owner** to log in. Your owner dashboard is displayed.

Here is an example owner dashboard showing new assignments.

![UAR Owner dashboard](/img/product_docs/platgovnetsuite/uar/uar_owner/dashboard_owner.webp)

## Dashboard Controls

- **Home** icon is your dashboard overview, and the default display when you log in.
- **UAR List** is your **[User Access Reviews List](/docs/platgovnetsuite/security-and-compliance/user-access-review/owners/index.md)**.
- **UAR History** is your **[User Access Reviews History](/docs/platgovnetsuite/security-and-compliance/user-access-review/history.md)**.
- **My Roles** is a list of all your assigned [Roles](/docs/platgovnetsuite/security-and-compliance/user-access-review/owners/role-reviews.md).
- **Open Global Reviews** shortcut shows the number of open reviews. Opens your **User Access
  Reviews List**.
- **Open Reviews with Additional Reviewers** shortcut shows the number of open reviews. Opens your
  **User Access Reviews List**.
- **Open Change Requests** shortcut shows the number of open change requests. Opens the **User
  Access Open Change Requests** list.
- **User Access Single Reviews Count** a graphical representation of your reviews.
- **Notifications** is a list of your assignment notifications and remindersz;

  - Filter the list for **All** or **Reminders**.
  - **Mark as Read** deletes the notification.
  - **Delete** icon deletes all notifications.
  - Click the link in the notification to open the specific review. This is a shortcut to opening
    the UAR list and selecting the review.

# Owner User Access Reviews List

Access your owner User Access Reviews List from **UAR List** in your menu bar, or one of the review
shortcuts. Your UAR List displays either the list of Global Reviews or Single Reviews. The view is
controlled with the **Sort By** selection in the Filters section.

Here are examples of the **Global** and **Single** review lists:

![Owner UAR list](/img/product_docs/platgovnetsuite/uar/uar_owner/uar_list_owner.webp)

![UAR Single Review list](/img/product_docs/platgovnetsuite/uar/uar_owner/uar_list_owner_single.webp)

## Filters

Filters help you organize your UAR list.

Use **Clear** to reset the Filters.

- **Create Date** Use the data picker to select a date. Dates are optional and not set by default.

  - First Date field only: All reviews created from the specified date to the current date are
    listed.
  - Second Date field only: All reviews created before the specified date are listed.
  - Both Date fields: All reviews created in the date range are listed.

- **Status** Select from the drop down list. **All** is the default.
  Possible statuses are **Not Started**, **Pending Assignment**, **In Progress**, **Complete**,
  **Cancelled** and **Waiting for CR**.
- **Sort By** Displays a list of either **Global Reviews** or **Single Reviews**. **Global Reviews**
  are displayed by default.
- **Role** Select the role from the drop down list. **All** is the default.
- **Type of Review** (single) Displays **Both**, **Membership** only, or **Permission** only reviews
  in the Review list.

## UAR List

- **Export** exports the list of selected reviews as either a **CSV** or **PDF** file. There is an
  option to **Export All Reviews**. The exported file is named _User_Access_Reviews_List_.
- **Name** is a link. For a **global** review, the link opens the Review list showing all of the
  associated reviews. For a **single** review the [Membership](/docs/platgovnetsuite/security-and-compliance/user-access-review/owners/membership-reviews.md) or
  [Permission ](/docs/platgovnetsuite/security-and-compliance/user-access-review/owners/permission-reviews.md)**Review** tab is opened. Reviews can also be opened via
  links in dashboard or email **Notifications**.
- **Number of Reviews** (global) is the number of single reviews in the global review.
- **Review Type** is the type of review. Global can be **Both**, **Membership**, or **Permission**.
  Single is **Membership** or **Permission**. The review type is set when the review is created.
- **Owner** (single) is the owner of the role review type.
- **Status** Current status of the review:

  - **Pending Assignment** Review does not have an assigned owner.
  - **Not Started** Email notification has been sent, review has not been started.
  - **In Progress** Review has been started.
  - **Additional Reviewer** Review has been assigned to an
    [](#)[additional reviewer](/docs/platgovnetsuite/security-and-compliance/user-access-review/owners/membership-reviews.md).
  - **Change Request** Change request has been created. The **Change Request ID** is added to the
    row. The link opens the Change Request. **CR Rejected**, **CR Cancelled**, and **CR Complete**
    are the other Change Request status values.
  - **Waiting for CR** Change request cannot be started, because there is an existing change
    request in progress for the role or permission as part of a different global review. Once the
    existing change request is complete, the current review can continue.
  - **Cancelled** Review has been canceled. Canceled global reviews are shown in the UAR History
    list. Canceled single reviews are shown in the global review.
  - **Completed** All of the rows within the review have been marked **Complete**.

- **Created On** the date the administrator created the review.
- **Created By** the administrator who created the review.
- **Last Owner Update** the date the last change was submitted for the review.
- **Due Date** an optional due date for the review, set by the Administrator.
- **Additional Reviewers** (single) the number of assigned additional reviewers.
- **Back** returns you to the previous screen.

## Review List

When you open a global review using the **Name** link in the UAR list, the Review list is displayed,
showing all of the single reviews associated with the global review.

![Review list of associated single reviews under a global review](/img/product_docs/platgovnetsuite/uar/uar_owner/review_list.webp)

- **Export** exports the list of selected reviews as either a **CSV** or **PDF** file. The exported
  file is named _Reviews_Group_List_.
- **Extract Membership Detail** creates a CSV file (_Membership_Report.csv_) of the membership
  details for the reviews.
- **Extract Permission Detail**creates a CSV file (_Permission_Report.csv_) of the permission
  details for the reviews.
- **Review Name** is a link to the [Membership](/docs/platgovnetsuite/security-and-compliance/user-access-review/owners/membership-reviews.md) or
  [Permission ](/docs/platgovnetsuite/security-and-compliance/user-access-review/owners/permission-reviews.md)**Review** tab. Reviews can also be opened via links in
  dashboard or email **Notifications**.
- **Role Name** the role being reviewed.
- **Review Type** is the type of review: **Membership** or **Permission**. The review type is set
  when the review is created.
- **Status** Current status of the review:

  - **Pending Assignment** Review does not have an assigned owner.
  - **Not Started** Email notification has been sent, review has not been started.
  - **In Progress** Review has been started.
  - **Additional Reviewer** Review has been assigned to an
    [additional reviewer](/docs/platgovnetsuite/security-and-compliance/user-access-review/owners/membership-reviews.md).
  - **Change Request** Change request has been created. The **Change Request ID** is added to the
    row. The link opens the Change Request. **CR Rejected**, **CR Cancelled**, and **CR Complete**
    are the other Change Request status values.
  - **Waiting for CR** Change request cannot be started, because there is an existing change
    request in progress for the role or permission as part of a different global review. Once the
    existing change request is complete, the current review can continue.
  - **Cancelled** Review has been canceled. Canceled global reviews are shown in the UAR History
    list. Canceled single reviews are shown in the global review.
  - **Completed** All of the rows within the review have been marked **Complete**.

- **Created By** the administrator who created the review.
- **Create Date** the date the administrator created the review.
- **Due Date** an optional due date for the review, set by the Administrator.
- **Complete Date** the date the review was completed.

Continue with the procedures to complete your [Membership](/docs/platgovnetsuite/security-and-compliance/user-access-review/owners/membership-reviews.md) or
[Permission ](/docs/platgovnetsuite/security-and-compliance/user-access-review/owners/permission-reviews.md)reviews.
