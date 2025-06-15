# Installation Settings Report

Your __Installation Settings__ report provides a comprehensive and live view of the Platform Governance for NetSuite data in your account. This data is useful as you continue to optimize your account and provides you with a measurable view of your status.

To access the report, open __Strongpoint__ > __Strongpoint Support__ > __Installation Settings__

- Click __View__ to view or print the desired report.
- Click __Edit__ to change global settings or add user notes

## Configuration and Stats

The report has the following tabs:

### Spider Status

- __Spider Status Intro__ displays the spider status and the values of the fields that control the spider.
- __Validation Tools__ links to Data Validation tools: Validation Report, Run Data Validation, and Run Data Update.
- __Documented Records Overview__ lists the total number of customizations created. The __Spider Count__ column represents the number of objects the spider detected. The __Documented Record Count__ represents the number of objects that were documented. In most cases, they should match when the spider is complete. If you access the report before the scheduled scripts are complete, you may see incomplete or duplicate records. These will be cleaned up once the scripts complete their work.

### Documentation

Displays the documentation stats, including the number of customizations and critical joins Platform Governance for NetSuite has created. If __Include All Standard Fields__ is checked (default is off), customization records are created for all standard fields of supported standard record types. Otherwise, customization records are only created for standard fields used in scripts and/or workflows. Status is shown on the __Spider__ Status tab: __Spider - All Standard Fields__.

### Clean Up

Displays statistics on customizations to be investigated and cleaned up. Cleaning up customizations provides significant performance gains and makes your system easier to understand and maintain. Platform Governance for NetSuite identifies different types of clean up activities. Each of these fields corresponds to one or more views under __Strongpoint__ > __Clean Up__.

### Script Management

Displays stats to help you identify gaps for script monitoring. The Script Management Stats and Script Archive File Folder ID can be edited.

- __Script Management Stats__: editable content box introducing the statistics on this tab.
- __Potentially Unused Scripts__: number of potentially unused scripts, calculated from scripts with audit tags but no execution date and/or a date more than six months ago.
- __Scripts with FLOStart Tags__: number of scripts with FLOStart tags inserted to track the initiation of the script.
- __Scripts with FLOStart Tags__: number of scripts with FLOEnd tag inserted to calculate execution time.
- __Scripts with No Audit Tags__: number of scripts that are not being monitored (no inserted FLOStart or FLOEnd tags).
- __Script Archive File Folder ID__: file identifier of the script archive folder. The __Enable Auto Archive__ and default __Auto Archive Folder__ are specified on the Installation tab. If enabled, a copy of each script is archived when it is changed, keeping a full version history. The archived script versions are saved in the script archive folder, and are also accessible in the Customization record for the script. Archiving all script changes does use storage space. It is a good practice to occasionally review and clean up old versions.

### Change Management

Accesses change management features:

- __Enable Opportunistic Clearance__: enables automatic clearance of qualifying low risk non-compliant changes. Default is off.
- __Enable Case to Change Request Workflow__: enables the workflow [Create Change Request from Case](../change_management/creating_change_request_from_case.md), based on the provided mappings. __Change Request Field Mapping__ includes an optional Formula to handle complex fields. After the __Enable Case to Change Request Workflow__ is enabled, a __Create Change Request__ button is available on the __Case__ record (__Lists__ > __Support__ > __Cases__).  
  Here is an example using a __Formula__ for the __Case to Change Request Field Mapping__:  
  ![Example of a Formula in the Case to Change Request Field Mapping](../../../static/img/product_docs/strongpointfornetsuite/installing_strongpoint/casetocrformula.webp)
- __Do Not ReSpider Automatically__: sets the default condition for the __Do Not ReSpider Automatically__ setting on the [ITGC Change Request](../change_management/creating_change_request.md). The default is unchecked.   
  When enabled, an automatic ReSpider occurs when a Change Request status is changed to __Completed__. This starts the ReSpider and ensures that all change logs are complete prior to changing the status. If automatic ReSpidering is turned off, there is a risk of changes being marked as non-compliant if the change logs are not complete when the user changes the status to __Completed__.
- __Enhanced User Provisioning__: enables access management for onboarding/offboarding and access change using the __[User Access Change Request](../change_management/user_provisioning.md)__.
- __Enable Auto-Provisioning__: automatically implement the onboarding changes approved though the __User Provisioning Change Request__ when __Enhanced User Provisioning__ is enabled.
- __Enable Auto-Role Removal__: automatically implement the offboarding changes approved though the __User Provisioning Change Request__ when __Enhanced User Provisioning__ is enabled.
- __Notification Sender__: select an email address from the drop down to use when sending notification emails. This sender is used when sending alerts for the following:
  - __User Access__ (Onboarding, Offboarding, Temporary Access)
  - __ITGC__
  - __Policy Change Approval__
  - __Financial Controls__ (Agent)
  - __SoD Approval__
  - __SoD Rule Change__
- __CR Email Template__: if you customize your __SoD Exemption Approval__ or __SoD Rule Change Approval__ CR Templates, add them here so they are not overwritten when the next bundle is installed. Refer to [Advanced PDF / HTML Templates](../customizations/pdf_html_templates.md).  
  ![CR Email Template section on the Installation Settings Change Management tab](../../../static/img/product_docs/strongpointfornetsuite/installing_strongpoint/change_management_cr_email_template.webp)

### Installation

Accesses the global parameters. Select __Edit__ to change them.

- __Start time/ End time__: restricts the time window for scheduled scripts.
- __Enable Auto Archive__: enables automatically archiving script files when Platform Governance for NetSuite detects that they have changed. Default is off. If enabled, a copy of each script is archived when it is changed, keeping a full version history. The archived script versions are saved in the script archive folder, and it also accessible in the Customization record for the script. Archiving all script changes does use storage space. It is a good practice to occasionally review and clean up old versions.
- __Auto Archive Folder__ : specifies the location to store the backups when __Enable Auto Archive__ is enabled.
- Script Error Actions: These fields are used for managing script errors detected by the Script Management Module.
  - __Enable Auto Process Issue__: creates a Process Issue for each script error to enable issue management and tracking of resolutions. Default is off.
  - __Process Issue Assigned__: identifies who should be assigned to the process issue.
  - __Process Issue Approved__: identifies who should be assigned to be an approver of the process issue.
- __Disable Spider Last Use Report__: disables last use report. Default is off.
- __Saved Searches Spider Time Limit__: specifies the number of years Saved Searches are documented.
- __Enable Remote Status Report__: enables Netwrix to remotely read the status report. Default is on.
- __Total Change Requests__: displays the number of change requests for the installation.
- __Total Process Issues__: displays the number of process issues for the installation.
- __Total Policies__: displays the number of policies for the installation.

### Notes

Displays __User Notes__ and __System Notes__. Use __New Note__ or the __Create New__ > __Note__ from the page drop down icon to create a new User Note.

### Jira Integration

Specifies the Jira credentials to use when Jira and Platform Governance for NetSuite are integrated. Refer to [Jira Integration](../integrations/jira_integration.md) for more information.

### ServiceNow Integration

Specifies the ServiceNow credentials to use when ServiceNow and Platform Governance for NetSuite are integrated. Refer to [ServiceNow Integration](../integrations/servicenow_integration.md) for more information.

### Menu Management

Enables hiding menu items you do not use, to improve navigation. Refer to [Managing Menus](managing_menus.md) for more information.
