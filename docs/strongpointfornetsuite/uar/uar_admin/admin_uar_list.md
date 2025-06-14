# Administrator UAR List

Access your owner User Access Reviews List from __UAR List__ in your menu bar, or one of the review shortcuts. Your UAR List displays either the list of Global Reviews or Single Reviews. The view is controlled with the __Sort By__ selection in the Filters section. All changes are captured in the [UAR History](/docs/strongpointfornetsuite/uar/uar_history.md).

Here is an example of the __Global__ review list:

![Administrator UAR list](/img/product_docs/strongpointfornetsuite/uar/uar_admin/admin_uar.webp)

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
- __Type of Review__ (single) Displays __Both__, __Membership__ only, or __Permission__ only reviews in the Review list.

## UAR List

- __Undo__: undoes all actions that have not been submitted.
- __Export__ exports the list of selected reviews as either a __CSV__ or __PDF__ file. There is an option to __Export All Reviews__. The exported file is named _User\_Access\_Reviews\_List_.
- __Create Review__ creates a new Global review or adds a Single review to an existing Global review.
- __Send Reminders__ send email reminders to the owners of the selected reviews.
- __Cancel Review__ cancels one or more selected reviews. Any associated open Change Requests are also canceled.
- __Name__ is a link to the Review list.
- __Number of Reviews__ (global) is the number of single reviews in the global review.
- __Review Type__ is the type of review. Global can be __Both__, __Membership__, or __Permission__. Single is __Membership__ or __Permission__. The review type is set when the review is created.
- __Owner__ (single) is the owner of the role review type.
- __Status__ Current status of the review:

  - __Pending Assignment__ Review does not have an assigned owner.
  - __Not Started__ Email notification has been sent, review has not been started.
  - __In Progress__ Review has been started.
  - __Additional Reviewer__ Review has been assigned to an additional reviewer.
  - __Change Request__ Change request has been created. The __Change Request ID__ is added to the row. The link opens the Change Request. __CR Rejected__, __CR Cancelled__, and __CR Complete__ are the other Change Request status values.
  - __Waiting for CR__ Change request cannot be started, because there is an existing change request in progress for the role or permission as part of a different global review. Once the existing change request is complete, the current review can continue.
  - __Cancelled__ Review has been canceled. Canceled global reviews are shown in the UAR History list. Canceled single reviews are shown in the global review.
  - __Completed__ All of the rows within the review have been marked __Complete__.
- __Created On__ the date the administrator created the review.
- __Created By__ the administrator who created the review.
- __Last Owner Update__ the date the last change was submitted for the review.
- __Back__ returns you to the previous screen.

### Create a New Review

__Create Review__ is an option on the administrator's UAR List.

1. Open __UAR List__ from your menu bar or a shortcut.
2. Click __Create Review__.

   ![Create a review](/img/product_docs/strongpointfornetsuite/uar/uar_admin/create_review1.webp)
3. Select __Single Review__ to add to an existing review, or __Global Review__ to start a new review. This example shows the Add to an Existing Review option.

   ![Create a review](/img/product_docs/strongpointfornetsuite/uar/uar_admin/create_review2.webp)
4. Use the drop down to __Select Global Review__ this option is only if you chose __Single__. It is not available if you are creating a new __Global__ review. The existing information for the Global review is populated.
5. Add or remove one or more roles. The left pane shows all the available roles, the right pane shows the roles you have added. The __Add all active roles__ shows active roles in the left pane. It toggles to __Show all active and assigned roles__ in the left pane. You cannot change permissions on Standard roles or the Administrator role..
6. Select __Type of Review__. This is only available if you are creating a new __Global__ review. You can select one or both options.
7. __Due Date for This Review__. Specify an optional due date.
8. Assign a __Review Name__. This is only available if you are creating a new __Global__ review.
9. Click __Create__.

Owners are assigned on the administrator's [Owner's List](/docs/strongpointfornetsuite/uar/uar_admin/admin_owner_list.md), available on your menu.

### Cancel a Review

__Cancel Review__ is an option on the administrator's UAR List and on the Review list.

1. Open the __UAR List__ from your menu bar or a shortcut.
2. Select one or more Reviews.
3. Click __Cancel Review__. Any open change requests are canceled.

   ![Cancel a review](/img/product_docs/strongpointfornetsuite/uar/uar_admin/cancel_review.webp)
4. Click __Accept__.

### Send Reminders

Reminders can be sent from the administrator's UAR List or from the Review list.

1. Open the UAR List from your menu bar or a shortcut.
2. Select one or more reviews.
3. Click __Send Reminders__. Reminders are sent immediately.
4. Click __Accept__ to exit.

## Review List

Clicking on a __Name__ in the UAR List opens the Review List. Here is an example.

![Review List](/img/product_docs/strongpointfornetsuite/uar/uar_admin/admin_review_list.webp)

### Filters

Filters help you organize your Review list.

Use __Clear__ to reset the Filters.

- __Create Date__ Use the data picker to select a date. Dates are optional and not set by default.

  - First Date field only: All reviews created from the specified date to the current date are listed.
  - Second Date field only: All reviews created before the specified date are listed.
  - Both Date fields: All reviews created in the date range are listed.
- __Status__ Select from the drop down list. __All__ is the default.  
  Possible statuses are __Not Started__, __Pending Assignment__, __In Progress__, __Complete__, __Cancelled__ and __Waiting for CR__.
- __Role__ Select the role from the drop down list. __All__ is the default.
- __Type of Review__ Displays __Both__, __Membership__ only, or __Permission__ only reviews in the Review list.
- __Owner__ Select from the drop down list.

### Review List Actions

There are various actions you can perform from this list:

- __Export__ exports the list of selected reviews as either a __CSV__ or __PDF__ file. The exported file is named _Reviews\_Group\_List_.
- __Send Reminders__ send email reminders to the owners of the selected reviews.
- __Cancel Review__ cancels one or more selected reviews. Any associated open Change Requests are also canceled.
- __Extract Membership Detail__ creates a CSV file (_Membership\_Report.csv_) of the membership details for the reviews.
- __Extract Permission Detail__creates a CSV file (_Permission\_Report.csv_) of the permission details for the reviews.
- __Review Name__ is a link to the [Membership](/docs/strongpointfornetsuite/uar/uar_owner/owner_membership_reviews.md) or [Permission ](/docs/strongpointfornetsuite/uar/uar_owner/owner_permission_reviews.md)__Review__ tab. Reviews can also be opened via links in dashboard or email __Notifications__. The Review tab and Review notes tab is the
- __Role Name__ the role being reviewed.
- __Review Type__ is the type of review: __Membership__ or __Permission__. The review type is set when the review is created.
- __Owner__ Current review owner.
- __Status__ Current status of the review:

  - __Pending Assignment__ Review does not have an assigned owner.
  - __Not Started__ Email notification has been sent, review has not been started.
  - __In Progress__ Review has been started.
  - __Additional Reviewer__ Review has been assigned to an [additional reviewer](/docs/strongpointfornetsuite/uar/uar_owner/owner_membership_reviews.md).
  - __Change Request__ Change request has been created. The __Change Request ID__ is added to the row. The link opens the Change Request. __CR Rejected__, __CR Cancelled__, and __CR Complete__ are the other Change Request status values.
  - __Waiting for CR__ Change request cannot be started, because there is an existing change request in progress for the role or permission as part of a different global review. Once the existing change request is complete, the current review can continue.
  - __Cancelled__ Review has been canceled. Canceled global reviews are shown in the UAR History list. Canceled single reviews are shown in the global review.
  - __Completed__ All of the rows within the review have been marked __Complete__.
- __Created By__ the administrator who created the review.
- __Create Date__ the date the administrator created the review.
- __Due Date__ an optional date assigned by the administrator for the review.
- __Complete Date__ the date the review was completed.
