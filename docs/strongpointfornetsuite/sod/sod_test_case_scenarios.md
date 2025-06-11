# SoD Test Case Scenarios

Here are test case scenarios for SoD rules:

- [Assign an Admin Role to a User](#Assign-an-Admin-Role-to-a-User)
- [Set Conflicting Global Permissions for a User](#Set-Conflicting-Global-Permissions-for-a-User)
- [Assign a User a Single User Role that Violates SoD rule](#Assign-a-User-a-Single-User-Role-that-Violates-SoD-rule)
- [Assign a Combination of Multiple Roles that Violates SoD rule](#Assign-a-Combination-of-Multiple-Roles-that-Violates-SoD-rule)
- [Assign an Employee the Administrator Role with a Pre-Approved Change Request](#Assign-an-Employee-the-Administrator-Role-with-a-Pre-Approved-Change-Request)
- [Create an Approved Change Request to Clear a Violation](#Create-an-Approved-Change-Request-to-Clear-a-Violation)

## Assign an Admin Role to a User

__SoD Rules__

Admin Role should not be assigned without second level approval and monitoring.

Process

To assign an administrator role to a user:

1. Open __Lists__ > __Employees__ > __Employees__
2. Select __Edit__ by the Employee Name. (For this example select _Mini Granger_ from the list.)
3. Open the __Access__ tab.
4. Check __Give Access__.
5. On the __Roles__ tab, select __Administrator__ for the __Role__.
6. Click __Add__.
7. Click __Save__.

Result

If the SoD rule is violated, the change made will not be allowed and will be blocked right away. A user should not be assigned an Administrator role unless there is a pre-approved change request. A prompt violation message will be seen by the user trying to make the change. The user will not be able to proceed with the save action.

## Set Conflicting Global Permissions for a User

SoD Rules

Users who have permission to create Sales Orders should not have the permission to Approve Sales orders.

Process

To set global permissions for a user:

1. Open __Lists__ > __Employees__ > __Employees__
2. __Select__ Edit by the Employee Name. (For this example select _Miriam Hobbs_ from the list.)
3. Open the __Access__ tab.
4. Open the __Global Permissions__ tab.
5. Select the following __Permission__ and __Level__:

   - __Sales Order__ with __Full__
   - __Sales Order Approval__ with __Create__
6. Click __Add__ after each selection.
7. Click __Save__.

Result

If the SoD rule is violated, an SoD incident is logged and the user is prompted with a warning.

## Assign a User a Single User Role that Violates SoD rule

__SoD Rules__

Anyone who can create a journal should not be able to approve it. Users who have permission to create sales orders should not have the permission to approve sales orders.

__Process__

To set a user role:

1. Open __Lists__ > __Employees__ > __Employees__
2. Select __Edit__ by the Employee Name. (For this example select _Sam Smith_ from the list.)
3. Open the __Access__ tab.
4. Check __Give Access__.
5. On the __Roles__ tab, select __Administrator__ for the __Role__.
6. Click __Add__.
7. Click __Save__.

__Result__

If the SoD rule is violated, an SoD incident is logged and the user is prompted with a warning.

## Assign a Combination of Multiple Roles that Violates SoD rule

SoD Rules

Anyone who can create a bill should not be able to approve it and should not reconcile.

Process

To set up multiple roles:

1. Open __Lists__ > __Employees__ > __Employees__
2. Select __Edit__ by the Employee Name. (For this example select _Angela Roelle_ from the list.)
3. Open the __Access__ tab.
4. Check __Give Access__.
5. On the __Roles__ tab, select __Bill Approver__ for the __Role__.
6. Click __Add__.
7. Click __Save__.

__Result__

If the SoD rule is violated, an SoD incident is logged and the user is prompted with a warning.

## Assign an Employee the Administrator Role with a Pre-Approved Change Request

SoD Rules

Administrator assignment requires approval.

Process

To assign an administrator role:

1. Open __Strongpoint__ > __Change Management Tools__ > __ITGC Change Request__ > __New__
2. Enter these fields:

   - __Name__: Admin approval for Randy
   - __Change Type__: SoD Approval
   - __Completion Status__: Not completed
   - __Change Overview__: Need to add admin for Randy
   - __Customizations__: Administrator (user role)
   - __Approval Status__: Approved
   - __SoD__ tab __Affected Employee__: Randy Unger
3. Click __Save__.
4. Open __Lists__ > __Employees__ > __Employees__
5. Select __Edit__ by the Employee Name. (For this example select _Randy Unger_ from the list.)
6. Open the __Access__ tab.
7. Check __Give Access__.
8. On the __Roles__ tab, select __Administrator__ for the __Role__.
9. Click __Add__.
10. Click __Save__.

__Result__

1. The change made is NOT blocked. There would be NO SoD Violation pop-up.
2. Employee now has the Administrator role.
3. The SoD Rule field in the Employee form is set to Cleared.
4. A Change Log is created, and is listed under the Resolved SoD Incidents list on the __Access__ tab. It is also listed under __SoD__ > __SoD Incident Management Reports__ > __Resolved SoD Incidents__.
5. The Change Log has the following details:

   - Change Log is compliant (__Noncompliance__ checkbox is NOT checked)
   - __SoD Rule__ is Administrator assignment requires approval
   - The employee given the new Administrator role is set in the __Affected Employee__ field
   - The pre approved Change Request is set in the __Related Change Request__ field

## Create an Approved Change Request to Clear a Violation

SoD Rules

Anyone who can create a journal should not be able to approve it.

Anyone entering customer orders cannot approve or process it.

__Process__

1. Open __Lists__ > __Employees__ > __Employees__
2. Select __Edit__ by the Employee Name. (For this example select _Beverly Ucab_ from the list.)
3. Open the __Access__ tab.
4. Check __Give Access__.
5. On the __Roles__ tab, select __Z - Senior Executive__ for the __Role__.
6. Click __Add__.
7. Click __Save__.  
   Result: SoD Incidents are logged. Z - Senior Executive violates both rules.
8. Open __Strongpoint__ > __Change Management Tools__ > __ITGC Change Request__ > __New__  
   Enter these fields:

   - __Name__: Approve Z-Senior Executive for Beverly
   - __Change Type__: SoD Approval
   - __Completion Status__: Not completed
   - __Change Overview__: Test
   - __Customizations__: Z - Senior Executive (user role)
   - __Approval Status__: Approved
   - __SoD__ tab __Affected Employee__: Beverly Ucab

Result

Violations are caught after employee save.

Violation clear out in the employee record after the approved Change Request is saved.
