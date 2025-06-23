# Automated Report Clean Up

Reports are powerful tools used throughout Salesforce and interconnected to other customizations. As
user-created Reports proliferate, Salesforce accounts become inefficient and overall performance
degrades. This rules-based tool provides administrators the ability to identify and archive Reports
and keep Salesforce accounts organized, easy to understand, and improve efficiency and performance.
Archived reports can be restored.

The **Automated Report Clean Up** tool has two operating modes:

- **Automatic** - scheduled automated report clean up that runs continuously using all rules marked
  Automatic.
- **Run Now** - starts report clean up that runs once and completes within seven days using current
  clean up rule.

Menu options are available to access the rules and lists:

- Report Clean Up Rules
- Report Clean Up Status
- Archived Reports
- Retained Reports
- Reports To Be Archived

### Report Clean Up Rules

Report Clean Up rules are created by the administrator and used to locate Reports matching the rule
criteria. Report Clean Up rules are used for both Automatic and Run Now.

To create or edit rules, access **Flashlight** > **Tools** > **Automated Report Clean Up Tool** >
**Report Clean Up Rules**

![automated_report_cleanup_800x555](/img/product_docs/platgovsalesforceflashlight/tools/automated_report_cleanup_800x555.webp)

- **Name** is the assigned name for the **Report Clean Up Rule Record**.
- **Description** is the purpose of the rule record. An informative description helps administrators
  easily maintain and identify rules.
- **Notify Report Owners Prior to Archive** check to send email to report owners prior to archive.
  Default is checked.
- **Automatic** is used to include the rule in the automated report. This option is not available
  until the **Preview** function has been used.
- **Inactive** check to exclude this Report Clean Up Rule from the automated report.
- **Filter Summary** displays all of the current filters for the rule. If default filters such as
  **Exclude Private Reports** are turned off, they are displayed in red as **Included**.
- **Notes** displays information about the Report Clean Up for this rule.

**Basic Filters**

- **Report Name** filters reports to clean-up by name. Filter operator is _startswith_ and the
  wildcard _%_ may be used. Default is blank.  
   Example: _Custom % Report%_ returns all reports with a name starting with '_Custom_ ' followed by
  any character and the name must contain '_Report_' such as _Custom Inventory Detail Report_.
- **Report API Name** filters reports to clean-up by API Name. Filter operator is _startswith_ and
  the wildcard _%_ may be used. Default is blank.  
   Example: _%testing_ returns all reports with an API Name containing the word '_testing_' such as
  _customreport_testing_1_.
- **Months Since Date Last Used, Retained/Restored** filters reports by the last run date of the
  report or the restore/retain date, whichever is the most recent. Reports that have been used,
  restored, or retained within the specified timeframe are excluded from the report. Default is
  **6** months.
- **Exclude Private Reports** excludes reports set as **Private** by report owners. Default is
  checked.
- **Exclude Reports Less Than A Month Old** excludes new reports that have not been run. Default is
  checked.

**Advanced Filters**

- **Select/Selected Report Owner(s)** filters reports by matching selected owners for the rule or if
  **Exclude Owner(s)** is checked, to exclude matching owners for the rule. Scroll or use the
  **Search User** box for **Select Report Owners**. Multiple owners can be selected. Click the right
  arrow to add to the **Selected Report Owner(s)**. Remove owners by selecting them in the
  **Selected Report Owner(s)** field and clicking the left arrow. Default is blank.
- **Select/Selected Role(s)** filters reports by matching selected roles for the rule or if
  **Exclude Role(s)** is checked, to exclude matching roles for the rule. Select one or more roles
  in the **Select Roles** field. Click the right arrow to add to the **Selected Role(s)**. Remove
  roles by selecting them in the **Selected Role(s)** field and clicking the left arrow. Default is
  blank.
- **Select/Selected Inactive Owner(s)** filters reports by matching selected owners for the rule or
  if **Exclude Inactive Owner(s)** is checked, to exclude matching owners for the rule.Select one or
  more inactive owners in the **Select Inactive Owners** field. Click the right arrow to add to the
  **Selected Inactive Owner(s)**. Remove owners by selecting them in the **Selected Inactive
  Owner(s)** field and clicking the left arrow. Default is blank.

**Excluded Reports From Preview**

Lists any reports excluded after the **Preview** function is used.

#### Rule Preview

The **Preview** function provides a quick method to mark reports to be retained or to included for
clean up. The Run Now feature begins an immediate run for the rule.

1. Administrators can click **Preview** on an Report Clean Up Rule. **Preview** displays the rule,
   filters and conditions.
2. Review the Report List.  
   Click **Include All** or **Exclude All** to mark all the reports. **Include** triggers a final
   notification email to be sent to the report owners. Unchecked retains the report.
3. Click Run Now to begin a Report Clean Up for the rule.
4. After previewing, you can click **Automatic** on the Report Clean Up Rule to include the rule for
   automatic reports.

![automated_report_cleanup_preview_800x264](/img/product_docs/platgovsalesforceflashlight/tools/automated_report_cleanup_preview_800x264.webp)

#### Run Now

This option immediately begins an Report Clean Up using the current rule.

If a Report matches the Clean Up Rule:

1. Summary notification of all the matching reports is sent to the rule owner.
2. Immediate notice to all report owners with their reports that are about to be archived.
   Notifications include a **Retain this Report** link. A **Preview** link is available for the user
   to view the Report.
3. If the **Retain Report** link is not used and the Report has not been used, final notifications
   are sent to all report owners seven calendar days after the **Run Now** option was used. The
   notification includes the date the report is to be archived.
4. If the **Retain Report** link is not used and the Report has not been used by the archive date:

   - Report is archived.
   - Archive notifications are sent to rule owner and all report owners.
   - Report is added to administrator's Archived Reports list.
   - Summary notification of all auto-archived reports are sent to the rule owner.

### Automated Run Workflow

**Automated Report Clean Up** runs continuously comparing reports to all rules marked **Automatic**.
Administrators receive weekly summary information containing: **identified reports**, **retained
reports**, **scheduled to be archived reports** and **archived reports**.

1. When a Report matches a Clean Up Rule:

   - Notification is emailed to the rule owner. The Report is also included in the summary
     notification to the rule owner.
   - Notifications are sent the first closest Sunday since the rule was marked **Automatic**.
   - Notification is emailed to the report owners unless **Notify Report Owners Prior to Archive**
     is turned off for the rule.
   - All email notifications include a **Retain this Report** link. A **Preview** link is available
     for the user to view the Report.
   - Report is added to the **Automated Report Clean Up** > **Reports To Be Archived (Auto)** list.

2. If the **Retain Report** link is not used and the Report has not been used, second notifications
   are sent the following Sunday after the first notification date. The notification includes the
   date the report is to be archived.
3. If the **Retain Report** link is not used and the Report has not been used by the archive date:

   - Report is archived.
   - Archive notifications are sent to rule owner and all report owners.
   - Report is added to administrator's Archived Reports list.

### Report Clean Up Status

Open **Flashlight** > **Tools** > **Automated Report Clean Up Tool** > **Report Clean Up Status** to
view current status.

- **Status**:  
  **Pending** - initial status for the run.  
  **Pending Notification** - reports have been identified, no notifications sent.  
  **In Notice Period** - at least one notification has been sent.  
  **Processing** - report is being auto-archived.  
  **Completed** - all identified reports have been archived, and email sent to rule owner and
  administrator.  
  **Canceled** - **Automatic** checkbox was turned off for the rule.
- **Automatic**: rule is set to **Automatic** if checked.

![automated_report_cleanup_status_800x366](/img/product_docs/platgovsalesforceflashlight/tools/automated_report_cleanup_status_800x366.webp)

### Retaining a Report

Notification emails contain a link to **Retain this report** for each identified report.

Users can click on **Retain this report** to prevent archiving the report. Use **Preview** link to
view the Report. The Retain process:

- Updates the **Date Last Used, Retained/Restored** to the current date.
- Adds the report to the **Automated Report Clean Up** > **Retained Reports** report.
- Notifies the owners the report will be retained.

### Auto Archiving a Report

If report owners or users do not click on **Retain this report** in the email notifications, the
report is archived. The Archive process:

- Archives the report.
- Adds the report to the **Automated Report Clean Up** > **Archived Reports** report.
- Marks Customization record for the report I**nactive**.
- A **Restore** button is added to the **Clean Up** tab on the customization record for the report.
- Auto Archive notifications are sent to the rule owner and administrators. A **Restore** link is
  included in the email.

![automated_report_cleanup_archive_800x340](/img/product_docs/platgovsalesforceflashlight/tools/automated_report_cleanup_archive_800x340.webp)

### Restoring an Auto Archived Report

A Salesforce Administrator can restore an auto archived report. Open the **Clean Up** tab of the
Customization record for the report or the report **Automated Report Clean Up** > **Archived
Reports**. Click **Restore**. Or use the **Restore** link in the email sent to the rule owner and
administrators.

- Report is restored. Restored reports have a different internal ID from their original version.
- Updates the **Date Last Used, Retained/Restored** to the current date.
- Adds the report to the **Automated Report Clean Up** > **Retained Reports** list.

# Clean Up Overview

Clean up involves some or all of the following steps:

1. Identify and remove unused customizations (either individual or multiple):

- Completely unused
- Useless or inefficient

2. Identify and fix improperly set-up customizations (eg. no help text, inactive owner).
3. Describe each object and its clean up task (under the improvements tab.)
4. Assign change/approval policy.

## Clean Up Tools

Strongpoint has a series of built in Clean Up Tools to enable Administrators to clean up their
account in an organized and efficient manner. There are many types of clean up, but they generally
follow the same steps:

1. Select the approach
2. Analyze and organize the results
3. Create a Change Request (if required)
4. Manage the clean up as appropriate
5. Run the scanner

NOTE: Always check the Last Date Scanned on any object and re-scan that object if necessary to
ensure the information about that object is up to date.

### Select the Approach

Strongpoint can help you clean up:

- Unused Customizations
- Unused Custom Fields
- Unused Scripts
- Unused Reports

Customizations that do not follow best practices:

- Customizations with No Related Process
- Customizations with No Description
- Customizations with No Help Text
- Customizations with No Active Owner

Depending on what you want to clean up, you can view clean up reports from the Strongpoint tab under
Reports and then choosing Clean Up. You can also find the clean up reports at the bottom of the
Strongpoint homepage under Strongpoint Features and Reports.

You can clean up individual or multiple customizations by going to the Customization tab and
selecting **Create New View**. Use the filters to generate your list.

NOTE: Before moving on to other clean up activities, it is often a good idea to delete unused
customizations that are highly likely safe to delete, such as fields that have not been used in
years or that are not used by any other customization.

### Analyze and Organize the Results

Once you have selected the customizations that you want to clean up and have created a New View, you
can analyze the results. The results can then be sorted and filtered and are required to group and
manage the output for subsequent steps. You may chose to clean up based on Salesforce type and
record type (among other options).

Every Customization record has a Clean-Up Status field that enables us to track the status of the
clean-up process for that object.

The statuses are:

- **To Be Cleaned Up**: Flags the customization to be cleaned up.
- **Send Request Info Emails**: Triggers an email warning that the customization is about to be
  deleted.
- **Under Investigation**: Flags the customization as under investigation.
- **Disabled/Hidden**: Tracks that the customization has been disabled.
- **Archived**: Tracks that the data / set-up was archived.
- **Deleted**: Tracks that the customization has been deleted. The doc will be inactivated.
- **Ignore**: Removes it from the searches.
- **Fix ScriptID:** Changes the ID of the script.
- **Reassign Owner**: Changes the owner.
- **Closed**: Flags the clean up status as closed.

### Run the Scanner

At the end of the process of updating the customization record(s), the account should be scanned to
update the documentation for the customization changes. It can be re-scanned for just the specific
record type that was changed.

# Cleaning Up Customizations

Use these processes to Clean up Individual Customization or Clean Up Multiple Customizations.

## Clean up Individual Customization

1. Open the customization.
2. Open the **Improvement** tab.
3. Under **Clean Up Status**, select a status:

   - **To Be Cleaned Up**
   - **Send Request Info Emails**
   - **Under Investigation**
   - **Disabled / Hidden**
   - **Archived**
   - **Deleted**
   - **Ignore**
   - **Fix ScriptID**
   - **Reassign Owner**
   - **Closed**

4. Under **Clean Up Comments**, add notes to help with clean up.
5. Attach to a **Change Request** associated with the customization (optional).
6. Assign a **Change/Approval Policy** if there is an object specific policy (optional).
7. Under **Clean-Up Classification**, add an overview of the clean up.

![improvementtab_800x415](/img/product_docs/platgovsalesforceflashlight/clean_up/improvementtab_800x415.webp)

## Clean Up Multiple Customizations

1. Go to the **Customizations** tab.
2. Create a new list view for clean up by clicking on **Create New View**.
3. Enter a **View Name** and a **View Unique Name**.
4. Specify the filter criteria:

   - **Filter By Owner**: choose All Customizations or My Customizations.
   - **Filter By Additional Fields**: choose Salesforce Type equals Report and Record Type equals
     Report.

5. Select fields to display:

- **Clean Up Classification**
- **Clean Up Comments**
- **Clean Up Status**

![createlist_view_for_cleanup_800x403](/img/product_docs/platgovsalesforceflashlight/clean_up/createlist_view_for_cleanup_800x403.webp)6.
Restrict Visibility. You can choose to have the list view:

- Only visible to you,
- Visible to all users or
- Visible to certain groups of users.

7. Click **Save**.
8. Once your list view has been created, you can multi-select customizations for clean up by
   checking the box beside Action.
   ![multi_select_cleanup_800x382](/img/product_docs/platgovsalesforceflashlight/clean_up/multi_select_cleanup_800x382.webp)9.
   You can now choose what you want to edit for the multiple customizations selected.  
    For example, if you want to change the clean up status:
9. Go to **Edit Clean Up Status**.
10. Select a status such as To Be Cleaned Up.
11. Choose to **Apply changes to: All the selected records**.
12. Click **Save**.
    ![flagging_mass_customizations_800x374](/img/product_docs/platgovsalesforceflashlight/clean_up/flagging_mass_customizations_800x374.webp)

# Running Clean Up Reports

Strongpoint provides predefined reports to help you clean up your Salesforce Instance. The reports
are available by opening **Flashlight** > **Reports/List Views** > **Clean Up** and selecting a
report:

- Default Clean Up List View
- Open Clean Up Status
- Clean Up Waiting for Info
- Customizations Excluded from Clean Up
- Unused Fields
- Unused Scripts
- Unused Reports
- Customizations with Inactive Owners
- Custom Fields without Help Text
- Custom Fields without Description

## Using the Reports

- **Filters**
  ![filters_icon](/img/product_docs/platgovsalesforceflashlight/clean_up/filters_icon.webp):
  Open the filters to see the criteria used for the report. You can modify the unlocked filters to
  narrow the focus of the results.
- **Column Sort Order**: Use the toggler in the column heads to change the sort order of the results
  based on the selected column.
- **Links**: Use the linked fields to open details about the customization or user.

## Default Clean Up List View

The results list all customizations of Record type **Objects & Fields**, starting with API Name
**Account**, Salesforce Type **CustomField** and used less than **180 Days Ago**.

## Open Clean Up Status

This report enables you to find customizations that have been identified and noted for clean up.

## Clean Up Waiting for Info

The results list customizations flagged with clean up status **Send Request Info Emails.**

## Customizations Excluded from Clean Up

The results list active customizations flagged with clean up status **Ignore**.

## Unused Fields

The results list all of the unused custom fields.

## Unused Scripts

The results list all of the unused scripts.

## Unused Reports

The results list all of the unused reports.

## Customizations with Inactive Owners

Ownership of customizations is important for clean up and accountability in the system.

The results list customizations with owners who are either:

- Not active in Salesforce
- Do not have access to Strongpoint

## Custom Fields without Help Text

Help and Descriptions enable users to more efficiently use the system. The results list
customizations missing help.

To fix, open the customization, click **Update Description and Help Text**.

## Custom Fields without Description

Help and Descriptions enable users to more efficiently use the system. The results list
customizations missing descriptions.

To fix, open the customization, click **Update Description and Help Text**.

# Date Last Used

Date Last Used (DLU) captures changes triggered by users or other customizations. Specifically, the
last date the Customization, or the data it contains, was created, changed, accessed, processed or
used.The DLU value indicates that the customization was used at least as late as the DLU. It does
not indicate if it was used earlier. If DLU is blank, it indicates there in no verified date.

> DLU CustomField Details
>
> Setting the DLU Expiration
>
> DLU Metadata Types
>
> Excluded Metadata Extended Types
>
> DLU Scheduler

## DLU CustomField Details

CustomField usage data improves the accuracy and usefulness of the Date Last Used, enabling you to
make better decisions about the value of maintaining specific CustomFields. Usage data includes:

- how often the field has data (_frequency_)
- how recently the field has been used (_recency_)

NOTE: DLU analysis should only be performed in Production orgs. Sandbox orgs do not reflect actual
usage.

Usage data fields:

- **% Populated** displays the percentage of Records with the field populated (not blank). Fields
  with low usage are clean up candidates. For example, if the field appears on 1000 records, but
  there is only data on 400 of the records, it is 40% populated.
- **DLU** is now defined to be the last time the field was updated with **Field History Tracking**
  enabled. Field History Tracking ensures the DLU is accurate. If Field History Tracking is later
  disabled, the DLU no longer updates and the data may not be accurate. The new Date DLU Analyzed
  and DLU Status provide additional insight.
- **Date DLU Analyzed** displays the last time the scanner was run with Field History Tracking
  enabled.
- **Parent Last Update Date** is set to the **CreatedDate** of the most-recently-created Record with
  the CustomField populated. This provides usage recency information when Field History Tracking is
  disabled. **CreatedDate** is more accurate for the CustomField than the **LastModifiedDate** for
  the record.
- **DLU Status** displays the current status:  
   | DLU Status | DLU | Field History Tracking | Date DLU Analyzed | Parent Last Update Date | | ---
  | --- | --- | --- | --- | | Unavailable | Blank | Never enabled for this field. | Blank |
  Populated | | Pending | Blank | Enabled. Waiting for the scanner to run. | Blank | Populated | |
  Current | Populated | Enabled. DLU is current and accurate using automated nightly scans. | Today
  | Blank | | Recent | Populated, May be stale | Disabled. Last scan when enabled was within the
  past three months. Three months is the default time period. See Setting the DLU Expiration. |
  Within set time period | Populated | | Expired | Populated, May be stale | Disabled. Last scan
  when enabled was longer than three months ago. Three months is the default time period. See
  Setting the DLU Expiration. | Older than set time period | Populated | If Field History Tracking
  is enabled for a CustomField with a **DLU Status** of either **Recent** or **Expired**, the status
  is changed to **Pending**. Here is an example:  
  ![Example of the DLU status fields for a CustomField](/img/product_docs/platgovsalesforceflashlight/clean_up/dlu_status_example_customfield_800x294.webp)

### Notes

- When Field History Tracking is enabled, the **DLU** is accurate, and the **Parent Last Update
  Date** is blank.
- If Field History Tracking has never been enabled, only **Parent Last Update Date** has a value.
  Use **Parent Last Update Date**and **% Populated** together to get a sense of the usage.
- If Field History Tracking was enabled and later disabled, there are values in **DLU** and **Parent
  Last Update Date**. Generally, you would use the most recent of the two together with **%
  Populated** to get a sense of usage. If **DLU Status** is Expired, it is probably safe to ignore
  **DLU**.

### Setting the DLU Expiration

The DLU Parameters specify the number of months to wait before changing the DLU Status from Recent
to Expired for a CustomField. This only applies to a CustomField where **Field Tracking History**
has been disabled. To change the time period:

1. Open **Setup**
2. Expand **Custom Code**
3. Select **Custom Metadata Types**  
   ![Open Custom Metadata Types](/img/product_docs/platgovsalesforce/clean_up/custom_metadata_types.webp)
4. Click **Manage Records** by **Strongpoint DLU Parameter**.  
   ![Click Manage Records to open the record](/img/product_docs/platgovsalesforce/clean_up/custom_metadata_types_dlu_exp.webp)
5. Click **Edit** by **DLU Expiration**.  
   ![Edit the parameters](/img/product_docs/platgovsalesforce/clean_up/custom_metadata_types_dlu_para.webp)
6. Set the **DLU Expiration (Months)**. The default is three.
7. Click **Save**.

## DLU Metadata Types

Metadata types marked with an **\*** must have the **Event Logs** enabled to gather DLU information.
DLU can be used for the following metadata types:

| Salesforce Family Types & Joins                | Metadata Types                                                                                       | DLU                                                                                               |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Workflow                                       | Workflow Rule                                                                                        | Date workflow rule was last run.                                                                  |
| Workflow Approva lProcess Flow Validation Rule | Last date base record updated, if enabled                                                            |                                                                                                   |
| Scripts                                        | Apex Class**\*** Apex Trigger**\*** Apex Component**\*** Lightning Component Lightning Web Component | The last date the code was triggered by any script based on the log of the last time it was run.  |
| Forms                                          | Layout Compact Layout                                                                                | If assigned to a profile, it is the date the last record that belongs to the layout was updated . |
| Apex Page**\***                                | The last date the page was accessed (the code was triggered).                                        |                                                                                                   |
| Reports                                        | Report                                                                                               | Last date report was run.                                                                         |
| Dashboard                                      | Last date dashboard report was run.                                                                  |                                                                                                   |
| Report Type                                    | Last date report using the report type was run.                                                      |                                                                                                   |
| Analytic Snapshot                              | Last date a dashboard it is on or dependent script was run.                                          |                                                                                                   |
| List View                                      | Last date the List View was accessed.                                                                |                                                                                                   |
| Data Sources                                   | Standard Field                                                                                       | Last date the value changed.                                                                      |
| Standard Object Custom Object                  | Last date a record was saved.                                                                        |                                                                                                   |
| Custom Field                                   | Last date the value changed or if formula field, the maximum last date of the fields in the formula. |                                                                                                   |
| Dependent Fields                               | Custom Field Lookup                                                                                  | Minimum of the DLU of the record it exists on and the DLU of the source field.                    |
| Profiles and Roles                             | User                                                                                                 | Last login by the user.                                                                           |
| Role                                           | Calculated based on the last time someone logged in with that role.                                  |                                                                                                   |
| Profile                                        | Calculated based on the last time someone logged in with that profile.                               |                                                                                                   |
| Permission Set                                 | Calculated based on the last time someone logged in with that permission set.                        |                                                                                                   |
| Package                                        | Text that displays the name of the package                                                           | Maximum DLU of object in the package.                                                             |
| Extended Types (Other)                         | App Menu                                                                                             | DLU of the parent Custom Application.                                                             |
| Assignment Rules                               | Date rule was last run.                                                                              |                                                                                                   |
| Auto Response Rules                            | Date Auto Response rule was last run.                                                                |                                                                                                   |
| Call Center                                    |                                                                                                      |                                                                                                   |
| Connected App                                  | Date App was last run.                                                                               |                                                                                                   |
| Custom Application                             | Maximum DLU of customizations belonging to the application.                                          |                                                                                                   |
| Criteria Based Sharing Rule                    | Maximum of related Sharing Rules.                                                                    |                                                                                                   |
| Custom Application Component                   | Maximum DLU from parent applications.                                                                |                                                                                                   |
| Custom Label                                   | Maximum DLU of related field.                                                                        |                                                                                                   |
| Custom Metadata                                | Date modified of the object that has the value in the metadata.                                      |                                                                                                   |
| Custom Object Translation                      | DLU of the parent object.                                                                            |                                                                                                   |
| Custom Page Web Link                           | DLU of the APEX page.                                                                                |                                                                                                   |
| Custom Permission                              | DLU of a profile that has the custom permission.                                                     |                                                                                                   |
| Custom Tab                                     | DLU of the parent Custom Application.                                                                |                                                                                                   |
| Document                                       | Last time the file was opened or accessed by the system.                                             |                                                                                                   |
| Email Template                                 | Date Template was last used to send emails.                                                          |                                                                                                   |
| Escalation Rules                               | Date rule was last run.                                                                              |                                                                                                   |
| Field Set                                      | Last date a field value changed.                                                                     |                                                                                                   |
| Flow Definition                                | Date flow last accessed.                                                                             |                                                                                                   |
| Global Picklist                                | Maximum DLU of fields that use the picklist.                                                         |                                                                                                   |
| Group                                          | Last time someone from the group accessed the system (always employees).                             |                                                                                                   |
| Installed Package                              | Maximum DLU of component of the package                                                              |                                                                                                   |
| Letterhead                                     | Last date template accessed.                                                                         |                                                                                                   |
| Matching Rule                                  | Date rule was last run.                                                                              |                                                                                                   |
| Post Template                                  | Date Template was last used to send emails.                                                          |                                                                                                   |
| Queue                                          | Maximum DLU of code / workflow run on the Queue.                                                     |                                                                                                   |
| Record Type                                    | Maximum DLU of fields that use the record type.                                                      |                                                                                                   |
| Sharing Rules                                  | Date rule was last run.                                                                              |                                                                                                   |
| Static Resource                                | Max of last access date (document) or DLU code referencing it.                                       |                                                                                                   |
| Synonym Dictionary                             | Maximum DLU of related fields.                                                                       |                                                                                                   |
| Territory2                                     | Date Territory2 rule was last run.                                                                   |                                                                                                   |
| Territory2 Model                               | Date Territory2 rule was last run.                                                                   |                                                                                                   |
| Territory2 Rule                                | Date rule was last run.                                                                              |                                                                                                   |
| Territory2 Type                                | Date Territory2 rule was last run.                                                                   |                                                                                                   |
| Translations                                   | Maximum DLU of related fields.                                                                       |                                                                                                   |

## Excluded Metadata Extended Types

DLU is not used for the following metadata Extended Types:

|                             |                          |
| --------------------------- | ------------------------ |
| Action Link Group Template  | Aura Definition Bundle   |
| Auth Provider               | Business Process         |
| Certificate                 | Cors Whitelist Origin    |
| Custom Feed Filter          | Custom Site              |
| Data Category Group         | Delegate Group           |
| Embedded Service Config     | Event Delivery           |
| Event Subscription          | External Data Source     |
| Flexi Page                  | Home Page Component      |
| Home Page Layout            | Named Credential         |
| Path Assistant              | Platform Cache Partition |
| Portal                      | Quick Action             |
| Remote Site Setting         | Saml Sso Config          |
| S control                   | Sharing Reason           |
| Sharing Set                 | Site Dot Com             |
| Transaction Security Policy | Web Link                 |

## DLU Scheduler

The [Scheduler](/docs/platgovsalesforceflashlight/getting-started/scheduling-scans.md) is where you can add frequency, day and time for
processes to run. Under **Field Usage and DLU**, you can set up the scheduler to update the last
used date field on customizations with the date the metadata was last used. It populates information
for field usage on custom fields and custom objects and catch any permission set assignments related
to users.

![scheduler](/img/product_docs/platgovsalesforce/clean_up/scheduler.webp)

Once the scheduler has been set up, you can view the DLU under the **Metadata** tab on the
customization record.
