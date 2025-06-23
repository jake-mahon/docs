---
title: Change Tracking with Change Logs
sidebar_label: Change Tracking
description: Monitor and track system changes with change logs, view modification history, and analyze changes for compliance and audit purposes.
---

# Using Change Logs

Change Logs allow you to see the type of change, who made the change and view the system notes of
the Salesforce record. Change Logs are accessed from the **Change Logs** tab or through
[Change Enablement Reports](/docs/platgovsalesforce/reporting/change-management-reports.md).

1. Expand the **Change Logs** tab.
2. Change the **Recently Viewed** pinned list to show the types of Change Logs to view. For
   example**, Data tracking Changes** or **Profile and PermissionSet** changes. The **Details** and
   **Diff Summary** differ slightly depending on the selected **Metadata Type**.
3. Click a **Change Log Name** to open it.

You can also open Change Logs from **Netwrix Dashboard** > **Reports** > **Change Enablement**.
Select a report, such as **What Changed** to see a list of Change Logs.

![changelog-1](/img/product_docs/platgovnetsuite/change_management/changelog-1.webp)

Here is an example change log for a **Profile** Metadata type.

![changelog_details](/img/product_docs/platgovsalesforce/change_management/changelog_details.webp)

## Details Tab

> **Actual Change Date**: Date the Customization was last modified.
>
> **Customization Created By**: User who created the customization.
>
> **Customization Modified By**: User who last modified the customization.
>
> **Customization**: Linked Customization(s) that have changed.
>
> **Metadata Type**: Salesforce metatdata type of the Customization.
>
> **Field Name**: Name of the changed field.
>
> **Active**: Checked if the Customization is active.
>
> **New Customization**: Checked if new customization.
>
> **Package**: Name of the Managed Package if the customizations belong to a managed package.
>
> **Operation**: Flag this field if a change or a new record is created.
>
> **Change Overview**: Overview of the change.
>
> **Data Record Id**: ID of the data record changed. This field is not in all Metadata Types.
>
> **Data Record Name**: Name of the data record changed. This field is not in all Metadata Types.
>
> **Data Record SObject API**: API name of the parent SObject of the data record changed. This field
> is not in all Metadata Types.
>
> **Related Change Request**: Change request related to the change or used to perform regression
> analysis of a non-compliant change.
>
> **Compliant Indicator**: Green flag indicates compliant, red flag indicates non-compliant.
>
> **Non-Compliant**: Checked if the change is non-compliant.
>
> **Compliance**: The change status: **Compliant** or **Non-compliant**.
>
> **Policy**: Policies associated with the Change Log.
>
> **Reason**: Name of the policy violated by the change.
>
> **Filters**: List of filters satisfied for the data record change. If blank, no filters specified.
> This field is not in all Metadata Types.
>
> **Parent Change Log**: Name of the parent change log if applicable.
>
> **Resolution Description**: Description of any steps taken to bring the change back into
> compliance. This field is not in all Metadata Types.
>
> **Short Resolution Description**: Summary description of any steps taken to bring the change back
> into compliance.
>
> **Status**: Current state of the Change Log. This field is manually set.

### Diff Summary

The **Diff Summary** section displays the differences in the objects that occurred in the change.
There is an **Export to PDF** option.

Example Diff Summary for a Data tracking Change Log:

![Diff Summary for data tracking](/img/product_docs/platgovsalesforce/change_management/diffsummary_data.webp)

Example Diff Summary for a Profile metadata type Change Log:

![Change Log Diff Summary](/img/product_docs/platgovsalesforce/change_management/changelog_diff.webp)

### Values

The **Values** section displays the **New Value** and **Old Value** of each field after the update.
The **Created By** and **Last Modified By** users and dates are displayed at the end of the list.

![changelog_values](/img/product_docs/platgovsalesforce/change_management/changelog_values.webp)

### Audit

The **Audit** section displays all fields related to an audit. Click the edit icon to edit the
record.

> **Sampled For Audit**: Select **None**, **Internal** or **External**.
>
> **Audited By**: Auditor selects their user name from the list.
>
> **Internal Audit Comments**: Internal notes added by the Auditor.
>
> **Internal Audit Status**: Select **None**, **Approved**, **Rejected** or **Under Investigation**.
>
> **Last Internal Audit**: User who made the last change in the Internal Audit fields.
>
> **External Audit Comments**: External notes added by the Auditor.
>
> **External Audit Status**: Select **None**, **Approved**, **Rejected** or **Under Investigation**.
>
> **Last External Audit**: User who made the last change in the External Audit fields.

## Related Tab

### Change Log History

**Change Log History** displays the latest history entries by **Date**. The changed **Field**,
**User** making the change, **Original Value** and **New Value** are displayed. If there is a **+**
sign by the number in **Change Log History** header, click **View All** to see the complete history.

### Notes & Attachments

**Notes & Attachments** contains uploaded files. Click on a file name to open it. Click **Upload
Files** to add additional files. If there is a **+** sign by the number in the **Notes &
Attachments** header, click **View All** to see the complete file list.

# Set Up Data Tracking

Data tracking is used for Salesforce CPQ and any sensitive data fields you want to track. Setting up
data tracking enables Platform Governance for Salesforce to track data and create change logs for
any data changes.

If you track an object, all changes to the object and fields are tracked. Consult with your security
and audit teams to develop a list of objects before enabling data tracking.

## Prerequisites

Here are the requirements to set up data tracking:

1. Enterprise Compliance license
2. Access to the Configuration app. You must have the **Strongpoint Administrator** and
   **Strongpoint Grant Permissions** assignments to access the app. This access is set through:  
   **Setup** > **Users** > **Permission Sets** > **Strongpoint Administrator** > **Manage
   Assignments**

   ![You must have these permissions to open the Configuration tool](/img/product_docs/platgovsalesforce/change_management/strongpoint_permissions.webp)

## Add Objects to Track

1. Open the Salesforce App Launcher.
2. Click **View All** to expand the app list.
3. Select **Strongpoint Configuration**. The **Recommended Objects** list is displayed.

   ![Review the recommended objects for data tracking](/img/product_docs/platgovsalesforce/change_management/data_tracking_recommended.webp)

4. Click the checkbox to select each **Recommended Object** to track.
5. Set the **Tracking** for each selected Object:

   - **Not Tracked**: Changes in data records are not tracked.
   - **Tracked, Blocking**: Changes in data records are blocked if there is not an approved Change
     Request.
   - **Tracked, Non-Blocking**: Changes in data records are logged. The Change Logs show the change
     as non-compliant if there is not an approved Change Request.

6. Set the **Update Only** for each selected Object:

   - **No**: Tracks changes to existing and new records.
   - **Yes**: Tracks changes to existing records but does not apply to new records.

7. Click **Apply Recommendations**.
8. Click **Save All Records** if you do not need any additional objects, otherwise continue these
   steps.
9. Click **Show Additional Objects for Tracking (Advanced)**. The Additional Objects list is
   displayed.
10. Click the checkbox to select each **Additional Object** to track. You can search for objects, or
    use the navigation at the bottom of the form to page through the records.
11. Set the **Tracking** and **Update Only** values for each additional selected object.
12. Click **Apply Recommendations**.
13. Click **Save All Records**.
14. Wait until the **Deployment Status** is complete, then click **Done**.

    ![Wait for the Deployment Status to complete](/img/product_docs/platgovsalesforce/change_management/data_tracking_deployment.webp)

15. Open the App Launcher and return to the **Strongpoint Lightning** app.

## Select Customizations to Track

1. Open **Customizations**.
2. Enter **CustomField** in the **Search** box.

   ![Open CustomField Tracking](/img/product_docs/platgovsalesforce/change_management/data_tracking_customfield.webp)

3. Select **CustomField Tracking**.
4. Select a customization and edit the Data Change Tracking field.

   ![Edit the Data Change Tracking](/img/product_docs/platgovsalesforce/change_management/data_tracking_customfield3.webp)

5. Click **Save** at the bottom of the form to save your changes.

## Add Tracked Objects to a Policy

Adding a tracked object to a specific policy facilitates tracking. For example, you can create a
report based on changes of that policy. In your Change Enablement process, you can set a change
level for tracked components by adding them to a specific policy.

1. Open **Change / Approval Policies**. Change the view to **All Policies** instead of **Recently
   Viewed**.
2. Select a policy to track the object.
3. Open the **Related** tab.
4. Click **Add Customizations**.
5. Enter **(Data Records** in the Search Customization box.

   ![Select the customizations](/img/product_docs/platgovnetsuite/change_management/policy_add_customizations.webp)

6. Select the customization to add. Use Shift-click (contiguous items) or Ctrl-click to select
   multiple customizations.
7. Click **Add** to add your selections to the Selected Customizations pane.
8. Click **Save** when you are done.

## Change Logs

![CPQ Change Log](/img/product_docs/platgovsalesforce/change_management/cpq_discount_change_log.webp)

**Tracked, Non-Blocking** generates a Compliant Change Log (CL-11674) if there is an approved Change
Request or a Non-Compliant Change Log (CL-11672) for changes made without an approved Change
Request.

**Tracked, Blocking** generates a Compliant Change Log (CL-11672) if there is an approved Change
Request. If a user attempts to save a change to a **Tracked, Blocking** object without an approved
Change Request, an error is generated and the change is not saved.
