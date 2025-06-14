# Permission Reviews

This type of review is used to keep your role permissions up to date. When you click on a permission review, the permissions list is displayed. Access permission reviews from __UAR List__ in your menu bar, or one of the review shortcuts.

Reviews open on the __Review__ tab. The __Review Notes__ tab lists the review details for the review.

![Permission Review](/img/product_docs/strongpointfornetsuite/uar/uar_owner/permission_review.webp)

## Filters

Filters help you organize your Permissions review list:

- __Level__: Permission Level can be __All__ (default), __View__, __Create__, __Edit__ or __Full__.
- __Category__: Permission Category can be __All__ (default), __Transactions__, __Reports__, __Lists__, __Setup__, or __Custom Records__.
- __Role Permission__: Full list of all of your defined permissions. __All__ is the default.
- __GL Impact__: Impact can be __All__ (default), __No__, or __Yes__.
- __Permission Risk Severity__: can be__All__ (default), __Low__, or __High__.
- __Status__: Status can be __All__ (default), __Not Started__, __Complete__, __Change Request__, __CR Approved__ or __CR Complete__.

Use __Clear__ to reset the Filters.

## Permission Review Actions

You can perform these actions as part of your review:

- Review and Complete Permission Review
- Change Permission Level
- Add a Permission
- Complete the Permission Review

Once an action is taken, the Permission review changes to __In Progress__.

Other available actions:

- __Undo__: undoes all actions that have not been submitted.
- __Refresh__: reloads the UAR list.
- __Export__: exports the UAR list as a CSV or PDF file.
- __Submit__: submits the current changes.
- __Complete Review__: marks the review complete. All rows must be completed before the __Complete Review__ action is available. The complete review is displayed in the UAR History. No further actions can be taken.

### Review and Complete Permission Review

1. Select one or more __Role Permissions__.
2. Review the __Permission__ and the __Level__ are appropriate for the role. If correct, click __Mark Completed__. The status is updated. You cannot undo this action.  
   ![Mark the Permission review complete](/img/product_docs/strongpointfornetsuite/uar/uar_owner/permission_review_complete.webp)

### Change Permission Level

To change a permission level:

1. Select one or more __Role Permissions__.
2. Select a __Level__ for the permission: __None__ (removes the permission), __View__, __Create__, __Edit__, or __Full__. Not all levels are available for every permission. For standard roles, the administrator must create a new custom role for the requested changes.
3. Click __Submit__.
4. Enter a brief description of why the change is requested when prompted for the __Reason for Change__. Click __Accept__ when complete.

   ![Reason for change](/img/product_docs/strongpointfornetsuite/uar/uar_owner/change_request_reason.webp)

   A Change Request is generated for each level change. Status is changed to either __Change Request__ and the __Change Request ID__ added, or __Waiting for CR__ if there is an existing change request in progress as part of another review. Click the __Change Request ID__ to open the Change Request.

   ![Change requests for Level changes](/img/product_docs/strongpointfornetsuite/uar/uar_owner/permission_review_cr.webp)
     
   If the Change Request is approved, the status changes to __CR Approved__. If the Change Request is rejected (__CR Rejected status__) or canceled (__CR Cancelled__), the permission row is returned to a pending state.
5. You can click on the __Change Request ID__ link and review the __Approver Notes__.

### Add a Permission

To add a permission:

1. Click + __Add__.  
   ![Add a permission](/img/product_docs/strongpointfornetsuite/uar/uar_owner/permission_review_add.webp)
2. Select the __Permission__, __Category__, and __Level__.
3. Click __Submit__.
4. Enter a brief description of why the change is requested when prompted for the __Reason for Change__. Click __Accept__ when complete.

   A Change Request is generated for each new permission. Status is changed to either __Change Request__ and the __Change Request ID__ added, or __Waiting for CR__ if there is an existing change request in progress as part of another review. Click the __Change Request ID__ to open the Change Request.

   ![Adding a new permission](/img/product_docs/strongpointfornetsuite/uar/uar_owner/permission_review_add2.webp)

   If the Change Request is rejected or canceled, the added permission row is removed from the list.

### Complete the Permission Review

Each permission must be in the __Complete__ or __CR Complete status__, with all change requests finished before you can click __Complete Review__. Once a review is complete, no further changes can be made.

![Permission review complete when all rows are complete](/img/product_docs/strongpointfornetsuite/uar/uar_owner/permission_review_complete.webp)

When you click __Complete Review__, the review status is updated to __Complete__, and the review is added to the [UAR History](/docs/strongpointfornetsuite/uar/uar_history.md).

## Review Notes

Every record has review notes with details about the changes. Only submitted changes are captured. The UAR list opens on the __Review__ tab. Click __Review Notes__ to open the notes tab. You can __Export__ the notes as a CSV or PDF file.

![Open the Review Notes tab](/img/product_docs/strongpointfornetsuite/uar/uar_owner/review_notes_tab.webp)

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
