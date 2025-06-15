# User Access Reviews List

Access your Additional Reviewer list from __UAR List__ in your menu bar, or one of the review shortcuts. Your UAR List displays either the list of Global Reviews or Single Reviews. The view is controlled with the __Sort By__ selection in the Filters section.

Here is an example of the __Global__ review list:

![UAR list additional reviewer](../../../../static/img/product_docs/strongpointfornetsuite/uar/uar_additional_reviewer/additional_user_uar_list.webp)

## Filters

Filters help you organize your UAR list.

Use __Clear__ to reset the Filters.

- __Create Date__ Use the data picker to select a date. Dates are optional and not set by default.

  - First Date field only: All reviews created from the specified date to the current date are listed.
  - Second Date field only: All reviews created before the specified date are listed.
  - Both Date fields: All reviews created in the date range are listed.
- __Status__ Select from the drop down list. __All__ is the default.  
  Possible statuses are __Not Started__, __Pending Assignment__, __In Progress__, __Complete__, __Cancelled__ and __Waiting for CR__.
- __Sort By__ Displays a list of either __Global Reviews__ or __Single Reviews__. __Global Reviews__ are displayed by default.

## UAR List

- __Name__ is a link. For a __global__ review, the link opens the Review list showing all of the associated reviews. For a __single__ review the [Membership](add_reviewer_membership_reviews.md) or [Permission ](../uar_owner/owner_permission_reviews.md)__Review__ tab is opened. Reviews can also be opened via links in dashboard or email __Notifications__.
- __Number of Reviews__ (global) is the number of single reviews in the global review.
- __Review Type__ is the type of review. Global can be __Both__, __Membership__, or __Permission__. Single is __Membership__ or __Permission__. The review type is set when the review is created.
- __Status__ Current status of the review:

  - __Pending Assignment__ Review does not have an assigned owner.
  - __Not Started__ Email notification has been sent, review has not been started.
  - __In Progress__ Review has been started.
  - __Additional Reviewer__ Review has been assigned to an additional reviewer.
  - __Change Request__ Change request has been created. The __Change Request ID__ is added to the row. The link opens the Change Request. __CR Rejected__, __CR Cancelled__, and __CR Complete__ are the other Change Request status values.
  - __Waiting for CR__ Change request cannot be started, because there is an existing change request in progress for the role or permission as part of a different global review. Once the existing change request is complete, the current review can continue.
  - __Cancelled__ Review has been canceled. Canceled global reviews are shown in the UAR History list. Canceled single reviews are shown in the global review.
  - __Completed__ All of the rows within the review have been marked __Complete__.
- __Create Date__ the date the administrator created the review.
- __Created By__ the administrator who created the review.
- __Last Owner Update__ the date the last change was submitted for the review.

## Review List

When you open a global review using the __Name__ link in the UAR list, the Review list is displayed, showing all of the single reviews associated with the global review.

![Review list of associated single reviews under a global review](../../../../static/img/product_docs/strongpointfornetsuite/uar/uar_owner/review_list.webp)

- __Export__ exports the list of selected reviews as either a __CSV__ or __PDF__ file. The exported file is named _Reviews_Group_List_.
- __Extract Membership Detail__ creates a CSV file (_Membership_Report.csv_) of the membership details for the reviews.
- __Extract Permission Detail__creates a CSV file (_Permission_Report.csv_) of the permission details for the reviews.
- __Review Name__ is a link to the [Membership](add_reviewer_membership_reviews.md) __Review__ tab. Reviews can also be opened via links in dashboard or email __Notifications__.
- __Role Name__ the role being reviewed.
- __Review Type__ is the type of review: __Membership__ or __Permission__. The review type is set when the review is created.
- __Status__ Current status of the review:

  - __Pending Assignment__ Review does not have an assigned owner.
  - __Not Started__ Email notification has been sent, review has not been started.
  - __In Progress__ Review has been started.
  - __Additional Reviewer__ Review has been assigned to an additional reviewer.
  - __Change Request__ Change request has been created. The __Change Request ID__ is added to the row. The link opens the Change Request. __CR Rejected__, __CR Cancelled__, and __CR Complete__ are the other Change Request status values.
  - __Waiting for CR__ Change request cannot be started, because there is an existing change request in progress for the role or permission as part of a different global review. Once the existing change request is complete, the current review can continue.
  - __Cancelled__ Review has been canceled. Canceled global reviews are shown in the UAR History list. Canceled single reviews are shown in the global review.
  - __Completed__ All of the rows within the review have been marked __Complete__.
- __Created By__ the administrator who created the review.
- __Create Date__ the date the administrator created the review.
- __Due Date__ an optional due date assigned by the administrator.
- __Complete Date__ the date the review was completed.

Continue with the procedures to complete your Additional Reviewer [Membership](add_reviewer_membership_reviews.md) reviews.
