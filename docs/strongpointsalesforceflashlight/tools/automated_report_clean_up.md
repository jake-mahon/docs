# Automated Report Clean Up

Reports are powerful tools used throughout Salesforce and interconnected to other customizations. As user-created Reports proliferate, Salesforce accounts become inefficient and overall performance degrades. This rules-based tool provides administrators the ability to identify and archive Reports and keep Salesforce accounts organized, easy to understand, and improve efficiency and performance. Archived reports can be restored.

The __Automated Report Clean Up__ tool has two operating modes:

- __Automatic__ - scheduled automated report clean up that runs continuously using all rules marked Automatic.
- __Run Now__ - starts report clean up that runs once and completes within seven days using current clean up rule.

Menu options are available to access the rules and lists:

- Report Clean Up Rules
- Report Clean Up Status
- Archived Reports
- Retained Reports
- Reports To Be Archived

### Report Clean Up Rules

Report Clean Up rules are created by the administrator and used to locate Reports matching the rule criteria. Report Clean Up rules are used for both Automatic and Run Now.

To create or edit rules, access __Flashlight__ > __Tools__ > __Automated Report Clean Up Tool__ > __Report Clean Up Rules__

![automated_report_cleanup_800x555](/img/product_docs/strongpointsalesforceflashlight/tools/automated_report_cleanup_800x555.png)

- __Name__ is the assigned name for the __Report Clean Up Rule Record__.
- __Description__ is the purpose of the rule record. An informative description helps administrators easily maintain and identify rules.
- __Notify Report Owners Prior to Archive__ check to send email to report owners prior to archive. Default is checked.
- __Automatic__ is used to include the rule in the automated report. This option is not available until the __Preview__ function has been used.
- __Inactive__ check to exclude this Report Clean Up Rule from the automated report.
- __Filter Summary__ displays all of the current filters for the rule. If default filters such as __Exclude Private Reports__ are turned off, they are displayed in red as __Included__.
- __Notes__ displays information about the Report Clean Up for this rule.

__Basic Filters__

- __Report Name__ filters reports to clean-up by name. Filter operator is _startswith_ and the wildcard _%_ may be used. Default is blank.  
   Example: _Custom % Report%_ returns all reports with a name starting with '_Custom_ ' followed by any character and the name must contain '_Report_' such as _Custom Inventory Detail Report_.
- __Report API Name__ filters reports to clean-up by API Name. Filter operator is _startswith_ and the wildcard _%_ may be used. Default is blank.  
   Example: _%testing_ returns all reports with an API Name containing the word '_testing_' such as _customreport\_testing\_1_.
- __Months Since Date Last Used, Retained/Restored__ filters reports by the last run date of the report or the restore/retain date, whichever is the most recent. Reports that have been used, restored, or retained within the specified timeframe are excluded from the report. Default is __6__ months.
- __Exclude Private Reports__ excludes reports set as __Private__ by report owners. Default is checked.
- __Exclude Reports Less Than A Month Old__ excludes new reports that have not been run. Default is checked.

__Advanced Filters__

- __Select/Selected Report Owner(s)__ filters reports by matching selected owners for the rule or if __Exclude Owner(s)__ is checked, to exclude matching owners for the rule. Scroll or use the __Search User__ box for __Select Report Owners__. Multiple owners can be selected. Click the right arrow to add to the __Selected Report Owner(s)__. Remove owners by selecting them in the __Selected Report Owner(s)__ field and clicking the left arrow. Default is blank.
- __Select/Selected Role(s)__ filters reports by matching selected roles for the rule or if __Exclude Role(s)__ is checked, to exclude matching roles for the rule. Select one or more roles in the __Select Roles__ field. Click the right arrow to add to the __Selected Role(s)__. Remove roles by selecting them in the __Selected Role(s)__ field and clicking the left arrow. Default is blank.
- __Select/Selected Inactive Owner(s)__ filters reports by matching selected owners for the rule or if __Exclude Inactive Owner(s)__ is checked, to exclude matching owners for the rule.Select one or more inactive owners in the __Select Inactive Owners__ field. Click the right arrow to add to the __Selected Inactive Owner(s)__. Remove owners by selecting them in the __Selected Inactive Owner(s)__ field and clicking the left arrow. Default is blank.

__Excluded Reports From Preview__

Lists any reports excluded after the __Preview__ function is used.

#### Rule Preview

The __Preview__ function provides a quick method to mark reports to be retained or to included for clean up. The [Run Now](#Run-Now) feature begins an immediate run for the rule.

1. Administrators can click __Preview__ on an Report Clean Up Rule. __Preview__ displays the rule, filters and conditions.
2. Review the Report List.  
    Click __Include All__ or __Exclude All__ to mark all the reports. __Include__ triggers a final notification email to be sent to the report owners. Unchecked retains the report.
3. Click [Run Now](#Run-Now) to begin a Report Clean Up for the rule.
4. After previewing, you can click __Automatic__ on the Report Clean Up Rule to include the rule for automatic reports.

![automated_report_cleanup_preview_800x264](/img/product_docs/strongpointsalesforceflashlight/tools/automated_report_cleanup_preview_800x264.png)

#### Run Now

This option immediately begins an Report Clean Up using the current rule.

If a Report matches the Clean Up Rule:

1. Summary notification of all the matching reports is sent to the rule owner.
2. Immediate notice to all report owners with their reports that are about to be archived. Notifications include a __Retain this Report__ link. A __Preview__ link is available for the user to view the Report.
3. If the __Retain Report__ link is not used and the Report has not been used, final notifications are sent to all report owners seven calendar days after the __Run Now__ option was used. The notification includes the date the report is to be archived.
4. If the __Retain Report__ link is not used and the Report has not been used by the archive date:

   - Report is archived.
   - Archive notifications are sent to rule owner and all report owners.
   - Report is added to administrator's Archived Reports list.
   - Summary notification of all auto-archived reports are sent to the rule owner.

### Automated Run Workflow

__Automated Report Clean Up__ runs continuously comparing reports to all rules marked [__Automatic__](#__Automatic__). Administrators receive weekly summary information containing: __identified reports__, __retained reports__, __scheduled to be archived reports__ and __archived reports__.

1. When a Report matches a Clean Up Rule:

   - Notification is emailed to the rule owner. The Report is also included in the summary notification to the rule owner.
   - Notifications are sent the first closest Sunday since the rule was marked __Automatic__.
   - Notification is emailed to the report owners unless __Notify Report Owners Prior to Archive__ is turned off for the rule.
   - All email notifications include a __Retain this Report__ link. A __Preview__ link is available for the user to view the Report.
   - Report is added to the __Automated Report Clean Up__ > __Reports To Be Archived (Auto)__ list.
2. If the __Retain Report__ link is not used and the Report has not been used, second notifications are sent the following Sunday after the first notification date. The notification includes the date the report is to be archived.
3. If the __Retain Report__ link is not used and the Report has not been used by the archive date:

   - Report is archived.
   - Archive notifications are sent to rule owner and all report owners.
   - Report is added to administrator's Archived Reports list.

### Report Clean Up Status

Open __Flashlight__ > __Tools__ > __Automated Report Clean Up Tool__ > __Report Clean Up Status__ to view current status.

- __Status__:  
  __Pending__ - initial status for the run.  
  __Pending Notification__ - reports have been identified, no notifications sent.  
  __In Notice Period__ - at least one notification has been sent.  
  __Processing__ - report is being auto-archived.  
  __Completed__ - all identified reports have been archived, and email sent to rule owner and administrator.  
  __Canceled__ - __[Automatic](#Automatic)__ checkbox was turned off for the rule.
- __Automatic__: rule is set to __Automatic__ if checked.

![automated_report_cleanup_status_800x366](/img/product_docs/strongpointsalesforceflashlight/tools/automated_report_cleanup_status_800x366.png)

### Retaining a Report

Notification emails contain a link to __Retain this report__ for each identified report.

Users can click on __Retain this report__ to prevent archiving the report. Use __Preview__ link to view the Report. The Retain process:

- Updates the __Date Last Used, Retained/Restored__ to the current date.
- Adds the report to the __Automated Report Clean Up__ > __Retained Reports__ report.
- Notifies the owners the report will be retained.

### Auto Archiving a Report

If report owners or users do not click on __Retain this report__ in the email notifications, the report is archived. The Archive process:

- Archives the report.
- Adds the report to the __Automated Report Clean Up__ > __Archived Reports__ report.
- Marks Customization record for the report I__nactive__.
- A __Restore__ button is added to the __Clean Up__ tab on the customization record for the report.
- Auto Archive notifications are sent to the rule owner and administrators. A __Restore__ link is included in the email.

![automated_report_cleanup_archive_800x340](/img/product_docs/strongpointsalesforceflashlight/tools/automated_report_cleanup_archive_800x340.png)

### Restoring an Auto Archived Report

A Salesforce Administrator can restore an auto archived report. Open the __Clean Up__ tab of the Customization record for the report or the report __Automated Report Clean Up__ > __Archived Reports__. Click __Restore__. Or use the __Restore__ link in the email sent to the rule owner and administrators.

- Report is restored. Restored reports have a different internal ID from their original version.
- Updates the __Date Last Used, Retained/Restored__ to the current date.
- Adds the report to the __Automated Report Clean Up__ > __Retained Reports__ list.
