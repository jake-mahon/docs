---
title: Cleanup Tools and Optimization
sidebar_label: Cleanup Tools
description: Identify and remove unused customizations, fix improperly configured items, and optimize Salesforce org efficiency with built-in cleanup tools.
---

# Clean Up Overview

Clean up involves some or all of the following steps:

1. Identify and remove unused customizations (either individual or multiple):

- Completely unused
- Useless or inefficient

2. Identify and fix improperly set-up customizations (eg. no help text, inactive owner).
3. Describe each object and its clean up task (under the improvements tab.)
4. Assign change/approval policy.

## Clean Up Tools

There is a series of built in Clean Up Tools to enable Administrators to clean up their account in
an organized and efficient manner. There are many types of clean up, but they generally follow the
same steps:

1. Select the approach
2. Analyze and organize the results
3. Create a Change Request (if required)
4. Manage the clean up as appropriate
5. Run the scanner

Always check the Last Date Scanned on any object and re-scan that object if necessary to ensure the
information about that object is up to date.

### Select the Approach

Clean up:

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

Before moving on to other clean up activities, it is often a good idea to delete unused
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

### Create Change Requests (if required)

Some changes such as deletion, changes to scriptID and Help impact the customization itself. For
these types of changes we recommend creating a Change Request. However, for clean up, you can create
new change requests and assign them to the customizations. In the results view, **Create Change
Request** creates a new change request. Once that is added to that customization it appears under
**Related Change Requests**. You can have multiple customizations assigned to multiple change
requests as appropriate.

### Manage the Change or Clean Up

You can find more information about how to use the Change Request under
[Managing Change](/docs/platgovsalesforce/change-management/index.md). Once the appropriate
investigations are conducted and approvals are obtained the customization can be changed as
appropriate based on company policies and procedures.

Some of the items being changed, such as the description or owner, can be direct list edited or bulk
edited like any other Salesforce data directly in a Platform Governance for Salesforce view such as
**Unused Fields**.

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

![improvementtab](/img/product_docs/platgovsalesforce/clean_up/improvementtab.webp)

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

   ![createlist_view_for_cleanup](/img/product_docs/platgovsalesforce/clean_up/createlist_view_for_cleanup.webp)

6. Restrict Visibility. You can choose to have the list view:

- Only visible to you,
- Visible to all users or
- Visible to certain groups of users.

7. Click **Save**.
8. Once your list view has been created, you can multi-select customizations for clean up by
   checking the box beside **Action**.

   ![multi_select_cleanup](/img/product_docs/platgovsalesforce/clean_up/multi_select_cleanup.webp)

9. You can now choose what you want to edit for the multiple customizations selected.  
   For example, if you want to change the clean up status:
10. Go to **Edit Clean Up Status**.
11. Select a status such as To Be Cleaned Up.
12. Choose to **Apply changes to: All the selected records**.
13. Click **Save**.

    ![flagging_mass_customizations](/img/product_docs/platgovsalesforce/clean_up/flagging_mass_customizations.webp)

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

DLU analysis should only be performed in Production orgs. Sandbox orgs do not reflect actual usage.

**Usage data fields:**

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
  Setting the DLU Expiration. | Older than set time period | Populated |

If **Field History Tracking** is enabled for a CustomField with a **DLU Status** of either
**Recent** or **Expired**, the status is changed to **Pending**. Here is an example:

![Example of the DLU status fields for a CustomField](/img/product_docs/platgovsalesforce/clean_up/dlu_status_example_customfield.webp)

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

4. Click **Manage Records** by **Strongpoint DLU Parameter**

   ![Click Manage Records to open the record](/img/product_docs/platgovsalesforce/clean_up/custom_metadata_types_dlu_exp.webp)

5. Click **Edit** by **DLU Expiration**

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

The [Scheduler](/docs/platgovsalesforce/administration/scanners-and-automation.md) is where you can add frequency, day and time for processes
to run. Under **Field Usage and DLU**, you can set up the scheduler to update the last used date
field on customizations with the date the metadata was last used. It populates information for field
usage on custom fields and custom objects and catch any permission set assignments related to users.

![scheduler](/img/product_docs/platgovsalesforce/clean_up/scheduler.webp)

Once the scheduler has been set up, you can view the DLU under the **Metadata** tab on the
customization record.
