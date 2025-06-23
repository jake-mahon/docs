# Customizations Overview

Customization records are documentation about each customization. They are automatically built and
maintained by the Scanners. They enable you to search customizations and attach them to processes.

Click on the **Customizations** tab to display all the customizations found by the scanner. You can
change the view to focus the results. Click the **Customization Name** to open the customization
record.

Customization records contain the following information:

1. What customizations exist (or used to exist) in an account.
2. Who is using the customizations.
3. Which customizations are being used.
4. What the junctions are between customizations.
5. What detailed automated documentation exists, including search filters and formulas, related
   fields, scripts, searches and records.

For Change Management and Compliance, the joins between customizations are critical to determine the
IT risk of making changes to the system. For example, they warn you if changing a search could break
a workflow or a script.

![drd](/img/product_docs/platgovsalesforce/customizations/drd.webp)

# Understanding the Customization Record

This topic discusses the new Platform Governance for Salesforce Lightning customization record. It
is only available with the Platform Governance for Salesforce Lightning app. Refer to the topic
[Old Customization Record](/docs/platgovsalesforce/org-maintenance/customization-tracking.md) for the old style customization record.

**NOTE:** For installed orgs, users must load the Strongpoint Home Page first before opening the
**Customization** tab for the first time after the 6.0 update. The new form assignment happens in
the background for the Strongpoint Home page.

The customization detail contains general information about the customization record. The
customization name appears in the banner with function buttons:

- **Rescan**: runs the scanner on the record. You are prompted to refresh the page.
- **Go To Record**: loads the customization record for editing or to view additional details.
- **Set Policy**: accesses the inherit policy form for the customization.

Customization record fields include:

- **Owner ID**: Link to the current owner.
- **Description**: Details added to the record. Click **Update Description and Help Text** to
  update.
- **Salesforce Type**: Customization type.
- **API Name:** APIs associated with the record.
- **Help Text**: Helpful information detailing function and use of each customization. Click
  **Update Description and Help Text** to update.
- **Related Objects**: Links to related objects.

![Strongpoint Lightning Customization Record](/img/product_docs/platgovsalesforce/customizations/customization_record_lightning.webp)

## Customization Record Tabs

These are the tabs inside a customization record:

> Metadata
>
> Custom
>
> DRD
>
> Change Enablement
>
> Clean Up
>
> Related Lists

### Metadata

The Metadata tab provides the metadata information about the customization, including:

- **Customization Name**: name of the customization.
- **Salesforce Type**: Salesforce type of the custom field.
- **Customization Created By**: user who created the customization.
- **Customization Last Modified By**: user who last modified the customization.
- **Package**: indicates the package (if any) of the customization.
- **Active**: indicates whether the customization is a active.
- **Manageable State**: the current state if it is from a managed/unmanaged package.
- **Customization Created Date**: date the customization was created.
- **Customization Last Modified Date**: last date the customization was modified.

### Custom

The **Custom** tab shows the join, scanner and DLU dates.

- **Last Scanner Date**: last date in which the scanner ran and evaluated the current customization.
- **Make Join Date**: date customization was last passed to Make Join script.
- **Date Last Used**: date the customization was last used. Refer to
  [DLU](/docs/platgovsalesforce/org-maintenance/cleanup-tools.md) for more information.

### DRD

The Dependency Relationship Diagram ([DRD](/docs/platgovsalesforce/tools-and-utilities/analysis-tools.md)) displays objects,
customizations and their relationships and dependencies.

![DRD Example](/img/product_docs/platgovsalesforce/customizations/drd.webp)

### Change Enablement

The Change Enablement tab accesses the policy and data tacking settings, and the add to change
request feature.

- **Change/Approval Policy**: This field designates the approval policy related to a customization.
- **Add to Change Request**: Lookup tool to associate the clean up to an existing change request.
- Data Change Tracking: tracking status.  
  **Not Tracked**: changes in data records are not tracked.  
  **Tracked, Blocking**: changes in data records are blocked if there is no approved Change
  Request.  
  **Tracked, Non-Blocking**: changes in data records are logged.

### Clean Up

The Clean Up tab provides information customization clean up:

- **Clean Up Status**: This is the clean-up status of customizations that are to be deleted.
- **Clean-up Classification**: This field shows an overview of the clean-up classification.

### Related Lists

Links to related lists: Change Logs, Notes & Attachments and Customization History.

# Old Customization Record

This topic details the old-style customization record. Refer to
[Understanding the Customization Record](/docs/platgovsalesforce/org-maintenance/customization-tracking.md) for the updated
Platform Governance for Salesforce Lightning customization record.

The customization detail contains general information about the customization record. The
customization name appears in the banner with function buttons:

- **Save**: saves the customization record.
- **Rescan**: runs the scanner on the record. You are prompted to refresh the page.
- **Go To Record**: brings up the customization record for editing or to view additional details.
- **Update Description and Help Text**: editor to add or modify the **Description** and **Help
  Text** fields.

Customization record fields include:

- **Base Record**: Link to the base record for the customization.
- **Owner ID**: Link to the current owner.
- **Description**: Details added to the record. Click **Update Description and Help Text** to
  update.
- **Salesforce Type**: Customization type.
- **API Name:** APIs associated with the record.
- **Help Text**: Helpful information detailing function and use of each customization. Click
  **Update Description and Help Text** to update.
- **Related Objects**: Links to related objects.
- **Details**: Tabs to access details about the customization. Tabs include **Metadata**,
  **Improvement**, **Permissions**, **Control**, **DRD**, **Raw Data** and **Related Lists**.

![customization_record](/img/product_docs/platgovsalesforce/customizations/customization_record.webp)

## Customization Record Tabs

These are the tabs inside a customization record:

> Metadata
>
> Improvement
>
> Permissions
>
> Health Settings
>
> Data Classification
>
> Control
>
> DRD
>
> Raw Data
>
> Related Lists

### Metadata

The metadata tab provides the metadata information about the customization, including:

- **Date Last Used**: date the customization was last used. Refer to
  [DLU](/docs/platgovsalesforce/org-maintenance/cleanup-tools.md) for more information.
- **Data type**: data type of the custom field.
- **Last Modified Date**: last date the customization was modified.
- **Active**: indicates whether the customization is a active.
- **Package**: indicates the package (if any) of the customization.
- **List**: Custom/Standard list used as a data source by the customization.
- **Last Modified File Date**: last date the file was modified
- **Customization Created By**: user who created the customization.
- **Customization Created Date**: date the customization was created.
- **Customization Last Modified By**: user who last modified the customization.
- **Script File Date**: date the script file was last modified.
- **Script File**: primary script file for a script customization.
- **Functions**: functions used in the script.
- **Script Fields**: fields used in the script file.
- **Attempt #**: number of times the script has tried to execute.
- **# of Lines**: number of lines in the script.
- **Manageable State**: the current state if it is from a managed/unmanaged package.

### Improvement

The improvement tab provides information about improvements that can be made on a customization such
as clean up:

- **Clean Up Status**: This is the clean-up status of customizations that are to be deleted.
- **Change/Approval Policy**: This field designates the approval policy related to a customization.
- **Clean-up Classification**: This field shows an overview of the clean-up classification.
- **Add to Change Request**: Lookup tool to associate the clean up to an existing change request.

### Permissions

The permissions tabs displays the Read and Edit status for the roles.

### Health Settings

The Salesforce _Security Health Check_ is available in almost all versions of Salesforce. If you are
not already using it to monitor critical permissions and security settings, our blog
[Maintaining Org Security with the Salesforce Health Check](https://www.strongpoint.io/en/blog/what-is-salesforce-health-check)
walks you through how it works and why it’s important.

There are new customization records for each Health Check group (session settings, file upload and
security settings), so you can track and report on current settings. Based on your policy, Platform
Governance for Salesforce can require advance approval for changes to these settings, effectively
closing a potential security loophole and building more transparency (and auditability) into the
system.

The Health Settings tab is located on the customization pages for the Salesforce Health Check, such
as Session Settings, Password Policies and Certificates. This example shows the **Health Settings**
tab for the **PasswordPolicies** customization.

![Example of the PasswordPolicies Health Settings tab](/img/product_docs/platgovsalesforce/customizations/health_settings_tab_example.webp)

### Data Classification

The **Data Classification** tab in the **Custom Field** customization record gives you an
at-a-glance look at all classified fields in the Object — who owns them, their compliance category,
sensitivity level, and other important details. You also have access to custom reports showing you
where your classified data can be found.

### Control

The control tab describes assigned controls on a customization record for example controls assigned
on a financial report.

- **Control**: determines if the customization is a control.
- **Control Frequency**: frequency at which a control should be checked.
- **Track Duplicates**: specifies whether duplicate issues are to be tracked or not.
- **Control Type**: select count to record numbers, issues, tasks etc.
- **Control Assignee**: assign tasks, issues or alerts to someone other than the owner, if blank the
  control alerts the owner of the customization.
- **Controlled Process**: process this customization controls.
- **Control Count**: custom field created for the account.
- **Alert Control Owner**: check box to alert owner of the control.
- **Next Control Date Time**: notes the date and time when to start monitoring.
- **Risk/Requirement**: risk associated with the customization.
- **Last Control Run Date**: This is the last date the control was run.
- **Alert Process Owner**: check box to alert the process owner whenever an incident is detected.
- **Alert/Task Message**: The message that will be sent to the assignee on tasks or recipients of
  alerts.
- **Instructions for Resolution**: instructions for resolving the issue.
- **Control Error/Warning**: errors or warnings encountered when control was last run. Blank
  indicates no errors/warnings.

### DRD

Dependency Relationship Diagram ([DRD](/docs/platgovsalesforce/tools-and-utilities/analysis-tools.md)) displays objects, customizations
and their relationships and dependencies.

### Raw Data

This tab describes and list the XML code contained in a customization.

- **Last Scanner Date**: Last date in which the scanner ran and evaluated the current customization.
- **Rescanner**: information for rescanning the customization and evaluating progress of Apex
  Batches to show **In Progress**.
- **Make Join Date**: date customization was last passed to Make Join script.
- **Incomplete Object**: checked if the object is incomplete.
- **Suppress Changelog**: prevent changes from being made.
- **Script Fields (Raw)**: fields in the relevant script file.
- **Scripts (Raw)**: scripts used by other customizations.
- **Workflow/Approval Fields (Raw)**: data workflow fields.
- **Workflow Scripts (Raw)**: data workflow scripts.
- **Extended Types Fields (Raw)**: CSV of fields used by a customization.
- **Report/Search Fields (Raw)**: fields used in filter criteria or columns for a search.
- **Layout (Raw)**: custom field to hold custom fields of ListView, visual pages and layouts.
- **List (Raw)**: references related to this field.
- **Scanner Read**: check box to indicate if the retrieve and the customization was executed and
  read.
- **Folder File Name**: name of the folder and file where Salesforce has the Metadata component.
- **Encoded API Name**: field to note the retrieve with encoded API name.
- **XML/Code**: XML/code representation of the page for a customization.

### Related Lists

Links to related lists: Change Logs, Notes & Attachments and Customization History.
