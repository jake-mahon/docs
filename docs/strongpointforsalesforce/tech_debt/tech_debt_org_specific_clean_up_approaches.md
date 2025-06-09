# Specific Clean Up Approaches

Cleaning up an org is driven by your priorities. Platform Governance for Salesforce documentation is very flexible, to help you clean up objects quickly and effectively.

Here are some guidelines to specific clean up problems:

> [Unused, Risky](#Unused-Risky)
>
> [Unused Automation](#Unused-Automation)
>
> [Unused Test Classes](#Unused-Test-Classes)
>
> [Entire Object or Group of Parent / Child Objects](#Entire-Object-or-Group-of-Parent-Child-Objects)
>
> [Layouts and List Views](#Layouts-and-List-Views)
>
> [Value-based Clean Up](#Value-based-Clean-Up)

These guidelines assume you set up your List Views the same way as described [Step 1: Identify and Prioritize Targets](/docs/strongpointforsalesforce/tech_debt/tech_debt_org_clean_up_example.md).

## Unused, Risky

DLU is populated older than X but there are some dependencies (Role, Code, Workflow):

1. Create a Clean Up List View filtered for Customizations where:

   - DLU is populated and older than X and
   - Scripted, Filter, SOQL, and/or Profile checkboxes are checked.
2. Set the __Clean Up Status__ to __Under Investigation__ and add appropriate __Clean Up Notes__.

## Unused Automation

Code and Other Critical Objects with dependencies on Unused Fields and Objects:

1. Create a report, such as the Unused Scripts Report, using the __Customizations with Dependencies__ Report Type filtered for customizations with:

   - Salesforce Type you are focused on (for example, APEX Class)
   - The Customization’s Date Last Used and/or the Dependency: Date Last Used is populated and older than X.
   - Optional: Filter out objects from a managed package:  
     - Exclude all Packages: filter on Packages equals {blank}  
     - Exclude specific Packages: filter on Packages not equal to {names of package you want to exclude}  
     - Exclude all Managed Packages: filter on Manageable State equals __unmanaged__
2. Open each relevant Customization in a new tab and set the __Clean Up Status__ to __Under Investigation__ and add appropriate __Clean Up Notes__.
3. While investigating, flag any Unused Test Classes you no longer need. They are identified with the Test Class check box.

## Unused Test Classes

Cleaning up tests that are no longer necessary can significantly improve your release cycles. There are two reasons that a test class may be unused:

1. The code it tests is no longer used. To clean these up:

1. Create a new Report based on the __Customizations with Dependencies__ type.
2. Filter for:

   - Salesforce Type equals __Apex Class__
   - Test Class equals __True__
   - Customization’s Date Last Used and/or the Dependency: Date Last Used is populated and older than X
   - Optional: Filter out objects from a managed package.
3. Add __Clean Up Notes__ that the code it tests is no longer in use.

2. The assertions in the Test Class relate to fields no longer in use. To identify these:

1. Create a new Report based on the __Customizations with Dependencies__ report type.
2. The following filters identify test classes referencing fields that have not been used in the past six months:

- Salesforce Type equals __Apex Class__
- Test Class equals __True__
- Dependency: Salesforce Type equals __CustomField__
- Dependency: Date Last Used less than __180 DAYS AGO__

3. Add __Clean Up Notes__ that the Test Class assertions relate to fields no longer in use.

## Entire Object or Group of Parent / Child Objects

Cleaning up a group of custom parent - child objects or an entire object (including the object itself):

1. Create a Clean Up List View
2. Use the API Name as a filter set to either:

   - Equals the API Name of the parent or
   - Starts with the API Name of the parent object __plus “\_ \_.”__. (example __API Name starts with Record\_ \_.__) The period is required to ensure you just match that record and its children. You get all fields and children under the parent.
3. Set the __Clean Up Status__ to __Under Investigation__ and add appropriate __Clean Up Notes__.

## Layouts and List Views

These customizations do not have a reliable __Date Last Used__. We are working to narrow this gap. For now, be extra careful when investigating these items.

## Value-based Clean Up

Sometimes we want to clean up values not just Customizations. For example:

- Cleaning up as someone leaves the company
- Identifying hard-coded dependencies on users
- Identifying where a record type or list value is used

You have already seen some clues to how you might do this in preceding cases. For most objects, simply:

1. Create a Clean Up List View showing all Customizations.
2. Include the XML/Code field and any other specific fields you are interested in, for example: Report Formulas.
3. Search in the __Search this list__ field (Only Available in Lightning) for:

   - Email address
   - Name
   - Email root ( for example, __@netwrix.com__)
   - Record type or list value you are looking to isolate
   - Anything else that could appear in the metadata

Points to consider:

- Restricting the List View to one Record Type enables you to edit records directly from the List View.
- Search carefully if using multiple terms (refer to this [Salesforce Search guide](https://help.salesforce.com/articleView?id=000247472andtype=1)) - quotes can be useful to enforce just the string you are looking for. __“Search Term”__ (in quotes) finds objects with that phrase whereas __Search Term__ (unquoted) finds anything with __Search__ and __Term__ even if they are in different fields in the List View.
- Even good searches can result in false positive matches if the same value appears in multiple lists or record types or is a commonly-used term in Salesforce’s XML or is a common company-specific term.

__Next Technical Debt Topic:__ [Ongoing Monitoring ](/docs/strongpointforsalesforce/tech_debt/tech_debt_org_ongoing_monitoring.md)
