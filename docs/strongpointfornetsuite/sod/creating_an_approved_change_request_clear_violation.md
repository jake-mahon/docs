# Creating an Approved Change Request to Clear a Violation

## Assign a Non-Compliant Role to an Employee

Make sure the SoD Rule that it will violate is __Non-Blocking__. This way the employee record can be saved even if it is a non-compliant role.

To assign a non-compliant role to an employee:

1. Open __Lists__ > __Employees__ > __Employees__
2. Click __Edit__ for the affected employee.
3. Assign the __non-compliant role__.
4. Click __Save__.

This creates a SoD Violation Log.

## Create an Approved Change Request - New Method

To create an approved change request:

1. Open __SoD__ > __SoD Change Management__ > __New SoD Approval__
2. Enter information in the following fields:

   - __Name__: Enter a name for the request.
   - __Priority Level__: Select the priority level for the request. Select __New__ to add a custom level.
   - __Reason for Role or Permission Change__: Enter the information supporting the approval request.
   - Select one or more of the __Affected Employee(s)__, __Affected Rule(s)__ and __Affected User Role(s)__.
3. Click __In Progress__ in the status bar to indicate you are working on the request.
4. __Save__ the Change Request.
5. The Approval section is now available. Click __Edit__ to add __Additional Approvers__ or __Approver Notes__. Click __Save__ if you make changes. Refer to [Create a Change Request](/docs/strongpointfornetsuite/change_management/creating_change_request.md) for more details about the status bar.

The violation clears in the employee record after the approved Change Request is saved.

## Create an Approved Change Request - Old Method

To create an approved change request:

1. Open __Strongpoint__ > __Change Management Tools__ > __Change Request__ > __New__
2. Add the following required fields for pre-approval:

   - __Name__: Enter a name for the request.
   - __Change Type__: __SoD Approval__
   - __Completion Status__: __In Progress__
   - __Change Overview__: Enter a description for the change
   - __Customization__: Select the non-compliant role you want to assign to an employee.
   - __Approval Status__: __Approved__
3. Under the __SoD__ tab:

   - Select the __Affected Employee__
   - Set the __Completion Status__ to __NOT Completed__
4. Click __Save__.

The violation clears in the employee record after the approved Change Request is saved.
