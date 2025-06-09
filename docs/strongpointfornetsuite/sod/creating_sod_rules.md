# Creating SoD Rules

## ​SoD Rules

No individual user should ​have permission to take a transaction from initiation to completion.

Transaction duties should be separated under:

- Recording
- Approvals
- Reconciliations
- Custody of Assets

Ideally these should all be handled by four separate people​. Where external compensating controls exist and approvals are closely monitored, exemptions can be made. Exceptions must be acceptable to the company’s auditors.

You can create a custom change request form for SoD Rule Changes. Refer to [Using Custom Change Request Forms](/docs/strongpointfornetsuite/change_management/use_custom_cr_forms.md) for information on implementing your custom form.

### Access Levels

The following are general definitions of access levels for permissions in NetSuite.

- __View__: The user has access to view existing files. The user cannot create, edit, or delete existing files.
- __Create__: The user can create new and view existing files. The user cannot edit or delete existing files.
- __Edit__: The user has access to create, view, and edit files. The user cannot delete existing files.
- __Full__: The user can create, view, edit, and delete files.

## Creating an SoD Rule

1. Open __SoD__ > __SoD Rule__ > __SoD Rule Library__ > __New__

   ![sod_rule_new](/img/product_docs/strongpointfornetsuite/sod/sod_rule_new.png)
2. __External ID__ is assigned by Platform Governance for NetSuite. Custom rules are numbered 1000 or above. External IDs for custom rules can be edited. SoD Library rule External IDs are 1 through 999 and cannot be edited.
3. Add a Rule __Name__ and __Description__ and optional __Memo__.
4. __Status__ indicates the current state of the Rule: __Test on Roles__, __Disabled__, __Test on Employees__, __Approved__, __Pending for Approval__, __Disabled - Feature Not In Use__, or __Disabled - Compensating Control__. Only __Approved__and __Active__ rules are applied.
5. Select or add a new __Risk__ (optional).
6. Select the __Process__ from the list. The rule pertains to the group of activities and transactions defined for the selected __Process__. The __Process__ for an SoD Library rule cannot be edited.
7. Check to make the rule __Inactive__ if needed (optional).
8. Check to __Block Conflict__ to block the save attempt on the employee record if the employee permissions/roles violates this rule (optional).
9. Select the __Access Control Type__:

   ![SoD Access Controls](/img/product_docs/strongpointfornetsuite/sod/sod_access_controls.png)

   - __Role-based__ - Select one or more __Roles__ from the displayed list. The Permissions and Advanced Permission Controls are not available for this option.
   - __Permission-based__

     1. Select __One-Sided Rule__ (only Base Permissions/Levels) or __Two-Sided Rule__ (both Base and Conflicting Permissions/Levels).
     2. Select one or more __Base Permissions__ and one or more __Base Permission Levels__. For __Base Permission__, you can enter part of the name to see a matching list, or use the drop down to view all of the permissions.
     3. Optionally add a __Base Permission Text Match__ to filter for conflicts matching the base permission string. For example: __ADMI\___ matches all __ADMI__ permissions. Can use __startswith__ search operator.
     4. For Two-Sided Rules, select one or more __Conflicting Permissions__ and one or more __Conflicting Permission Levels__. For __Conflict Permission__, you can enter part of the name to see a matching list, or use the drop down to view all of the permissions.
     5. Optionally add a __Conflict Permission Text Match__ to filter for conflicts matching the conflicting permission string. For example: __ADMI\___ matches all __ADMI__ permissions. Can use __startswith__ search operator.
   - __Permission vs Role__ provides you additional control to fine tune access to sensitive custom records. Requires all of the fields for both __Role-based__ and __Permission-based__.
10. Add Restrictions to limit the SoD rule to employees associated in one or more of the categories: __Subsidiaries__, __Departments__, __Classes__, and __Locations__.

    ![SoD Classifications](/img/product_docs/strongpointfornetsuite/sod/sod_classifications.png)
11. __Save__ the rule.

Once a Rule is saved, the __Change ID__ and __Run Retroactive__ functions are available.

There are four tabs to access details:

- __Change Logs__: all changes to the rule, including Date Created, SoD Rule, Operation, Changed By, Field Name and Script ID, NonCompliance, Old/New Value and Difference Summary.
- __SoD Rule Processing Status__: the last update and current status of the rule. Status can be __Not Started__, __InQueue__, __Processing__, or __Done__.
- __Compensating Controls__: list of controls for the rule. Click + to the right of the list to add a new control. Compensating Controls are defined on the Customization record.
- __Workflow__: displays Active Workflows and Workflow History.

![SoD Processing Status](/img/product_docs/strongpointfornetsuite/sod/sod_proc_status_tab.png)

When you add or change a rule, you can manually start the evaluation process, or wait until the Spider runs overnight. To manually run the process:

1. Open __SoD__ > __SoD Processing Status__ > __Run SoD on User Roles__
2. Select all of the roles you have modified.
3. Click __Run SoD__

## Updates to SoD Rules Report

To view the updates to your SoD rules:

__SoD__ > __SoD Rule__ > __Updates to SoD Rules__

![Updates to SoD Rules report](/img/product_docs/strongpointfornetsuite/sod/sod_rules_update_report.png)

With this report, you can easily identify modified pre-defined SoD rules. There is a saved import SoD Rule Import available to enable bulk add or update SoD rules to your production environment.

1. Create a __.csv__ file with the following fields:

   - External ID
   - Name
   - Status
   - Description
   - Block Conflict
   - Process Issues
   - Process
   - Roles
   - Memo
   - Base Permission
   - Base Permission Level(s)
   - Conflicting Permission
   - Conflicting Permission Level(s)
   - Base Permission Text Match
   - Conflict Permission Text Match
   - Subsidiaries
   - Departments
   - Classes
   - Locations
   - Compensating Controls
2. Open __Setup__ > __Import/Export__ > __Saved Imports__ > __SoD Rule Import__
3. Follow the prompts in the __Import Assistant__.
