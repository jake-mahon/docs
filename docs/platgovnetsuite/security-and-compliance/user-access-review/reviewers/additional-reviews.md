# Additional Reviewer Membership Reviews

This type of review is used to keep your roles up to date. When you click on a membership review,
the list of users with the role is displayed. The links open the appropriate record in NetSuite, for
example the **User** link opens the **User** record.

As an **Additional Reviewer**, you can only review Users in the Role Membership that are assigned to
you. Look for rows with no highlighting, with the **Status** of **Additional Reviewer** assigned to
you.

Reviews open on the **Review** tab. The **Review Notes** tab lists the review details for the
review.

![Opening a review as an additional user](/img/product_docs/platgovnetsuite/uar/uar_additional_reviewer/additional_user_review.webp)

## Membership Review Actions

You can perform these actions as part of your review:

- Review and Complete Role Membership Review
- Remove Users from the Role

Other actions:

- **Undo**: undoes all actions that have not been submitted.
- **Export**: exports the UAR list as a CSV or PDF file.
- **Submit**: submits the current changes.

### Review and Complete Role Membership Review

This display provides a global view of the user's access.

- **User**: the person assigned the role.
- **Global Permissions**: any global permissions assigned to this user.
- **Other Roles**: all roles assigned to this user.
- **SoD Violations**: any existing SoD violations for this user. Only applicable if your
  organization uses SoD.
- **Status**: the current review status. Can be **Not Started**, **Completed**, **Change Request**,
  **CR Approved**, **CR Rejected**, **CR Cancelled**, **CR Complete**, or **Additional Reviewer**.
- **Change Request ID**: if a change request is created, the linked number is added.
- **Change Request Comment**s: approver comments added to the change request are displayed.
- **Additional Reviewer**: the additional reviewer assigned to the role.

1. Select the user.  
   ![Reviewing user roles](/img/product_docs/platgovnetsuite/uar/uar_additional_reviewer/additional_user_reviewer_review.webp)
2. Review their Global Permissions, Other Roles, and SoD Violations. The links all open the specific
   records for further review. If the user should retain the role, click **Mark Completed**. The
   status is updated. You cannot undo this action.  
   ![Mark your review complete](/img/product_docs/platgovnetsuite/uar/uar_additional_reviewer/additional_user_reviewer_complete.webp)
3. Click **Submit** or make additional changes.

### Remove Users from the Role

To remove one or more users from the role:

1. Select the user.
2. Review their Global Permissions, Other Roles, and SoD Violations. The links all open the specific
   records for further review. If the user should be removed from the role, click **Remove Role
   Membership**. The user line is highlighted. Click **Undo** to cancel changes that have not be
   submitted.
3. Click **Submit** or make additional changes. A Change Request is generated for each user removed
   from the role. Status is changed to either **Change Request** and the **Change Request
   ID** added, or **Waiting for CR** if there is an existing change request in progress as part of
   another review. Click the **Change Request ID** to open the Change Request.  
   ![Remove a role](/img/product_docs/platgovnetsuite/uar/uar_additional_reviewer/additional_user_review_remove.webp)  
   If the Change Request is rejected (**CR Rejected status**) or canceled (**CR Cancelled**), the
   user row is returned to a pending state and can then be reviewed again.
   ![Remove a user from a role](/img/product_docs/platgovnetsuite/uar/uar_owner/remove_user_from_role.webp)  
   If
   the Change Request is rejected (**CR Rejected status**) or canceled (**CR Cancelled**), the user
   row is returned to a pending state and can then be reviewed again.

## Review Notes

Every record has review notes with details about the changes. Only submitted changes are captured.
The UAR list opens on the **Review** tab. Click **Review Notes** to open the notes tab. You can
**Export** the notes as a CSV or PDF file.

![Open the Review Notes tab](/img/product_docs/platgovnetsuite/uar/uar_owner/review_notes_tab.webp)

The notes have the following fields:

- **Date**: the creation or update date for the record.
- **Set By**: the user that created or updated the record.
- **Type**: the change performed.

  - **Set**: field was assigned a value.
  - **Change**: field was updated from a value to another value.
  - **Edit Permission**: when the permission was changed.
  - **Mark Complete**: when permission is marked complete.
  - **Remove**: when the permission was removed.

- **Field**: the field that was set or updated.
- **Old Value**: the previous field value.
- **New Value**: the new field value.
- **Role**: the affected role.

# User Access Reviews List

Access your Additional Reviewer list from **UAR List** in your menu bar, or one of the review
shortcuts. Your UAR List displays either the list of Global Reviews or Single Reviews. The view is
controlled with the **Sort By** selection in the Filters section.

Here is an example of the **Global** review list:

![UAR list additional reviewer](/img/product_docs/platgovnetsuite/uar/uar_additional_reviewer/additional_user_uar_list.webp)

## Filters

Filters help you organize your UAR list.

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

## UAR List

- **Name** is a link. For a **global** review, the link opens the Review list showing all of the
  associated reviews. For a **single** review the [Membership](/docs/platgovnetsuite/security-and-compliance/user-access-review/reviewers/additional-reviews.md)
  or [Permission ](/docs/platgovnetsuite/security-and-compliance/user-access-review/owners/permission-reviews.md)**Review** tab is opened. Reviews can
  also be opened via links in dashboard or email **Notifications**.
- **Number of Reviews** (global) is the number of single reviews in the global review.
- **Review Type** is the type of review. Global can be **Both**, **Membership**, or **Permission**.
  Single is **Membership** or **Permission**. The review type is set when the review is created.
- **Status** Current status of the review:

  - **Pending Assignment** Review does not have an assigned owner.
  - **Not Started** Email notification has been sent, review has not been started.
  - **In Progress** Review has been started.
  - **Additional Reviewer** Review has been assigned to an additional reviewer.
  - **Change Request** Change request has been created. The **Change Request ID** is added to the
    row. The link opens the Change Request. **CR Rejected**, **CR Cancelled**, and **CR Complete**
    are the other Change Request status values.
  - **Waiting for CR** Change request cannot be started, because there is an existing change
    request in progress for the role or permission as part of a different global review. Once the
    existing change request is complete, the current review can continue.
  - **Cancelled** Review has been canceled. Canceled global reviews are shown in the UAR History
    list. Canceled single reviews are shown in the global review.
  - **Completed** All of the rows within the review have been marked **Complete**.

- **Create Date** the date the administrator created the review.
- **Created By** the administrator who created the review.
- **Last Owner Update** the date the last change was submitted for the review.

## Review List

When you open a global review using the **Name** link in the UAR list, the Review list is displayed,
showing all of the single reviews associated with the global review.

![Review list of associated single reviews under a global review](/img/product_docs/platgovnetsuite/uar/uar_owner/review_list.webp)

- **Export** exports the list of selected reviews as either a **CSV** or **PDF** file. The exported
  file is named _Reviews_Group_List_.
- **Extract Membership Detail** creates a CSV file (_Membership_Report.csv_) of the membership
  details for the reviews.
- **Extract Permission Detail**creates a CSV file (_Permission_Report.csv_) of the permission
  details for the reviews.
- **Review Name** is a link to the [Membership](/docs/platgovnetsuite/security-and-compliance/user-access-review/reviewers/additional-reviews.md) **Review** tab.
  Reviews can also be opened via links in dashboard or email **Notifications**.
- **Role Name** the role being reviewed.
- **Review Type** is the type of review: **Membership** or **Permission**. The review type is set
  when the review is created.
- **Status** Current status of the review:

  - **Pending Assignment** Review does not have an assigned owner.
  - **Not Started** Email notification has been sent, review has not been started.
  - **In Progress** Review has been started.
  - **Additional Reviewer** Review has been assigned to an additional reviewer.
  - **Change Request** Change request has been created. The **Change Request ID** is added to the
    row. The link opens the Change Request. **CR Rejected**, **CR Cancelled**, and **CR Complete**
    are the other Change Request status values.
  - **Waiting for CR** Change request cannot be started, because there is an existing change
    request in progress for the role or permission as part of a different global review. Once the
    existing change request is complete, the current review can continue.
  - **Cancelled** Review has been canceled. Canceled global reviews are shown in the UAR History
    list. Canceled single reviews are shown in the global review.
  - **Completed** All of the rows within the review have been marked **Complete**.

- **Created By** the administrator who created the review.
- **Create Date** the date the administrator created the review.
- **Due Date** an optional due date assigned by the administrator.
- **Complete Date** the date the review was completed.

Continue with the procedures to complete your Additional Reviewer
[Membership](/docs/platgovnetsuite/security-and-compliance/user-access-review/reviewers/additional-reviews.md) reviews.
