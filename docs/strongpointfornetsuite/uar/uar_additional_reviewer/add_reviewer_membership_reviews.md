# Additional Reviewer Membership Reviews

This type of review is used to keep your roles up to date. When you click on a membership review, the list of users with the role is displayed. The links open the appropriate record in NetSuite, for example the __User__ link opens the __User__ record.

As an __Additional Reviewer__, you can only review Users in the Role Membership that are assigned to you. Look for rows with no highlighting, with the __Status__ of __Additional Reviewer__ assigned to you.

Reviews open on the __Review__ tab. The __Review Notes__ tab lists the review details for the review.

![Opening a review as an additional user](../../../../static/img/product_docs/strongpointfornetsuite/uar/uar_additional_reviewer/additional_user_review.webp)

## Membership Review Actions

You can perform these actions as part of your review:

- Review and Complete Role Membership Review
- Remove Users from the Role

Other actions:

- __Undo__: undoes all actions that have not been submitted.
- __Export__: exports the UAR list as a CSV or PDF file.
- __Submit__: submits the current changes.

### Review and Complete Role Membership Review

This display provides a global view of the user's access.

- __User__: the person assigned the role.
- __Global Permissions__: any global permissions assigned to this user.
- __Other Roles__: all roles assigned to this user.
- __SoD Violations__: any existing SoD violations for this user. Only applicable if your organization uses SoD.
- __Status__: the current review status. Can be __Not Started__, __Completed__, __Change Request__, __CR Approved__, __CR Rejected__, __CR Cancelled__, __CR Complete__, or __Additional Reviewer__.
- __Change Request ID__: if a change request is created, the linked number is added.
- __Change Request Comment__s: approver comments added to the change request are displayed.
- __Additional Reviewer__: the additional reviewer assigned to the role.

1. Select the user.  
   ![Reviewing user roles](../../../../static/img/product_docs/strongpointfornetsuite/uar/uar_additional_reviewer/additional_user_reviewer_review.webp)
2. Review their Global Permissions, Other Roles, and SoD Violations. The links all open the specific records for further review. If the user should retain the role, click __Mark Completed__. The status is updated. You cannot undo this action.  
   ![Mark your review complete](../../../../static/img/product_docs/strongpointfornetsuite/uar/uar_additional_reviewer/additional_user_reviewer_complete.webp)
3. Click __Submit__ or make additional changes.

### Remove Users from the Role

To remove one or more users from the role:

1. Select the user.
2. Review their Global Permissions, Other Roles, and SoD Violations. The links all open the specific records for further review. If the user should be removed from the role, click __Remove Role Membership__. The user line is highlighted. Click __Undo__ to cancel changes that have not be submitted.
3. Click __Submit__ or make additional changes. A Change Request is generated for each user removed from the role. Status is changed to either __Change Request__ and the __Change Request ID__ added, or __Waiting for CR__ if there is an existing change request in progress as part of another review. Click the __Change Request ID__ to open the Change Request.  
   ![Remove a role](../../../../static/img/product_docs/strongpointfornetsuite/uar/uar_additional_reviewer/additional_user_review_remove.webp)  
   If the Change Request is rejected (__CR Rejected status__) or canceled (__CR Cancelled__), the user row is returned to a pending state and can then be reviewed again. ![Remove a user from a role](../../../../static/img/product_docs/strongpointfornetsuite/uar/uar_owner/remove_user_from_role.webp)  
   If the Change Request is rejected (__CR Rejected status__) or canceled (__CR Cancelled__), the user row is returned to a pending state and can then be reviewed again.

## Review Notes

Every record has review notes with details about the changes. Only submitted changes are captured. The UAR list opens on the __Review__ tab. Click __Review Notes__ to open the notes tab. You can __Export__ the notes as a CSV or PDF file.

![Open the Review Notes tab](../../../../static/img/product_docs/strongpointfornetsuite/uar/uar_owner/review_notes_tab.webp)

The notes have the following fields:

- __Date__: the creation or update date for the record.
- __Set By__: the user that created or updated the record.
- __Type__: the change performed.

  - __Set__: field was assigned a value.
  - __Change__: field was updated from a value to another value.
  - __Edit Permission__: when the permission was changed.
  - __Mark Complete__: when permission is marked complete.
  - __Remove__: when the permission was removed.
- __Field__: the field that was set or updated.
- __Old Value__: the previous field value.
- __New Value__: the new field value.
- __Role__: the affected role.
