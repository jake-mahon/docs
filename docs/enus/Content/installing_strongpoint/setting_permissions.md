---
sidebar_position: 1428
title: Setting Role Permissions
---

# Setting Role Permissions

The **Access Type** for Platform Governance for NetSuite Custom **Record Types** is set to **Use Permission List**. This controls access using Roles, Permission Lists and Strongpoint License verification to prevent unauthorized users from changing the records. Users with Roles not included in the Permission List for a record type are denied access.

:::note
Remember to give your licensed users access to the Strongpoint tab.
:::

To use Platform Governance for NetSuite with your custom roles, add the record types to the permission list for each role. The Strongpoint roles have the correct access levels by default.

1. Open **Setup** > **Users/Roles** > **Manage Roles**
2. Edit each custom role your targeted Users use for their tasks.
3. Open the **Permissions** tab.

   ![](../../../../static/images/enus/Content/Resources/Images/permissions_tab.png "Setting Permissions for Custom Roles")
4. Open the **Custom Record** tab and add the Record Types and access levels to your custom roles.

   :::note
Adding permissions to a role affects all employees who have the role assigned to them.
   Refer to the lists of Custom Permissions needed for each role: Change Request Approvers, Manage ITGC, Manage SoD, User Access Review (UAR) and Manage Internal Audit - View Only.The default settings are shown in the Default Custom Record Types and Permission Lists and Default SoD Custom Record Types and Permission Lists tables.
   :::
5. **Save** the Permissions.

Here are the Custom Permissions needed for each role.

#### Change Request Approvers

> Assign a [User License](license_manager "Open the License Manager topic")

#### Process Issue

> No Permission Required

#### Manage ITGC

> [Strongpoint License](license_manager "Open the License Manager topic") +  
> Account Role: **Edit**  
> Change / Approval Policy: **Full**  
> Change Log: **Edit**  
> Change Request: **Edit**  
> Configuration and Stats: **Full**  
> Customization: **Full**  
> Environment: **Full**  
> Environment Compare Log: **Full**  
> Licensed User: **Full**  
> Process: **Full**  
> Spider Log: **View**  
> Test Record: **Full**  
> Users and License Manager: **Full**  
> Validation Log: **View**  
> Warning Log: **Full**

#### Manage SoD

:::note
On the Custom Role, you must check Do Not Restrict Employee Fields.
:::

> [Strongpoint License](license_manager "Open the License Manager topic") +  
> Account Role: **Edit**  
> Change / Approval Policy: **Edit**  
> Change Log: **Edit**  
> Change Request: **Edit**  
> Configuration and Stats: **Edit**  
> Customization: **View**  
> Environment: **View**  
> Process: **View**  
> Test Record: **View**  
> Warning Log: **Edit**
>
> Permission: **Full**  
> Permission / Permission Level Map: **Full**  
> Permission Level: **Full**  
> SoD Rule: **Full**  
> SoD Rule Processing Status: **Full**

#### User Access Review (UAR)

> [Strongpoint License](license_manager "Open the License Manager topic") +  
> Audit Trail: **Full**  
> Find Transaction: **Full**

#### Manage Internal Audit - **View** Only

> [Strongpoint License](license_manager "Open the License Manager topic") +  
> Account Role: **View**  
> Change / Approval Policy: **View**  
> Change Log: **View**  
> Change Request: **View**  
> Configuration and Stats: **View**  
> Customization: **View**  
> Environment: **View**  
> Environment Compare Log: **View**  
> Licensed User: **View**  
> Process: **View**  
> Spider Log: **View**  
> Test Record: **View**  
> Users and License Manager: **View**  
> Validation Log: **View**  
> Warning Log: **View**

**Default Custom Record Types and Permission Lists**

| Strongpoint Record Type | *Script ID*/Description | Permission List |
| --- | --- | --- |
| Account Role (3 records) | *customrecord\_flo\_account\_roles*  User roles used by Environment Compare Tool, Change Request Sync Tool, Lookup Customization to connect to another account. | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Edit** Strongpoint SoD Manager: **Edit** |
| Change/Approval Policy | *customrecord\_flo\_policy*  Defines the Level of change management required for a given change, Level of approval required, and Approvers. | Administrator: **Full** Advanced Change Manager: **View** Advanced Internal Auditor: **View** Change Manager: **View** Strongpoint Developer Role: **View** Strongpoint SoD Manager: **Edit** Strongpoint UAR Admin: **View** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |
| Change Log | *customrecord\_flo\_change\_log*  Tracks changes made to Customizations. | Administrator: **Edit** Advanced Change Manager: **Edit** Advanced Internal Auditor: **View** Change Manager: **Edit** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Edit** Strongpoint SoD Manager: **Edit** Strongpoint UAR Admin: **Edit** Strongpoint UAR Owner: **Create** Strongpoint UAR Additional Reviewer: **Create** Strongpoint UAR Auditor: **Edit** |
| Change Request | *customrecord\_flo\_change\_request*  Used to seek approval for any changes on Customizations, Change Policy, and SoD changes. | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Edit** Strongpoint SoD Manager: **Edit**Strongpoint UAR Admin: **Edit** Strongpoint UAR Owner: **Edit** Strongpoint UAR Additional Reviewer: **Edit** Strongpoint UAR Auditor: **View** |
| Configuration and Stats | *customrecord\_flo\_spider\_configuration*  Strongpoint Installation Settings report provides a comprehensive and live view of the Strongpoint data in the account. | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **Edit** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Full** Strongpoint SoD Manager: **Edit**Strongpoint UAR Admin: **Edit** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |
| Customization | *customrecord\_flo\_customization*  The documentation about each customization. Records are automatically built and maintained by the Strongpoint Spiders, enabling you to search customizations and attach them to processes. | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Full** Strongpoint SoD Manager: **View**Strongpoint UAR Admin: **View** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |
| Data Validation Report | *customrecord\_flo\_data\_validation*  Stores the details on a new data validation report. Data validation checks the searches used to ensure all data has been properly documented. | Administrator: **Full** |
| Environment | *customrecord\_flo\_environment*  Stores your NetSuite accounts for use by the Environment Compare Tool, Change Request Sync Tool, and Lookup Customization | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Full** Strongpoint SoD Manager: **View** |
| Environment Compare Log | *customrecord\_flo\_env\_compare\_log*  Results of Environment Compare Tool. | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Full** |
| Licensed User | *customrecord\_flo\_license\_user*  Users provisioned with a Strongpoint License. | Administrator: **Full** Advanced Change Manager: **View** Advanced Internal Auditor: **View** Change Manager: **View** Strongpoint Developer Role: **Full** Strongpoint UAR Admin: **Edit** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |
| Notification Tracker | *customrecord\_flo\_notification\_tracker*  Links all notifications sent to search owners, users, and, rule owners before and after the automatic search cleanup is executed. Screen reader support enabled. | Administrator: **Full** |
| Process | *customrecord\_flo\_process*  Process tracking record. | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Full** Strongpoint SoD Manager: **View**Strongpoint UAR Admin: **View** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |
| Process Issue | *customrecord\_process\_issue*  Optional ticketing system. | No permission required |
| Review | *customrecord\_flo\_review\_report*  Contains all the details of a UAR Review. | Strongpoint UAR Admin: **Full** Strongpoint UAR Owner: **Edit** Strongpoint UAR Additional Reviewer: **Edit** Strongpoint UAR Auditor: **View** |
| Review Group | *customrecord\_flo\_uar\_review\_group*  Contains the details for a set of UAR reviews. | Strongpoint UAR Admin: **Full** Strongpoint UAR Owner: **Edit** Strongpoint UAR Additional Reviewer: **Edit** Strongpoint UAR Auditor: **View** |
| Search Clean Up Job | *customrecord\_flo\_cleanup\_request*  Records the status and results of the automated search clean up. | Administrator: **Full** |
| Search Clean Up Rule | *customrecord\_flo\_cleanup\_rule\_record*  Created by the administrator to locate Saved Searches matching the rule criteria. | Administrator: **Full** |
| Spider Log  (49 Records) | *customrecord\_flo\_spider\_log*  List of Spider Count vs Documented Count per Customization Type. Data found in Spider Status tab of the Installation Settings. | Administrator: **Full** Advanced Change Manager: **View** Advanced Internal Auditor: **View** Change Manager: **View** Strongpoint Developer Role: **View** |
| Test Record | *customrecord\_flo\_test\_report*  Tracks tests within the Strongpoint Documentation System. | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Full** Strongpoint SoD Manager: **View**Strongpoint UAR Admin: **View** Strongpoint UAR Auditor: **View** |
| UAR Notification Data | *customrecord\_flo\_uar\_notification\_data*  List of users to receive notifications. | Strongpoint UAR Admin: **Full** Strongpoint UAR Owner: **Create** Strongpoint UAR Additional Reviewer: **Create** Strongpoint UAR Auditor: **View** |
| UAR Notifications | *customrecord\_flo\_uar\_notifications*  Notifications you see in the UAR Dashboard. | Strongpoint UAR Admin: **Full** Strongpoint UAR Owner: **Create** Strongpoint UAR Additional Reviewer: **Create** Strongpoint UAR Auditor: **View** |
| UAR Owner Notes | *customrecordflo\_uar\_owner\_notes*  Changes made by an UAR administrator to the Owner List page. | Strongpoint UAR Admin: **Full** Strongpoint UAR Owner: **Create** Strongpoint UAR Additional Reviewer: **Create** Strongpoint UAR Auditor: **View** |
| UAR Provisioning Review | *customrecord\_flo\_uar\_provisioning\_review*  Details of Membership Reviews for provisioning/deprovisioning | Strongpoint UAR Admin: **Full** Strongpoint UAR Owner: **Create** Strongpoint UAR Additional Reviewer: **Create** Strongpoint UAR Auditor: **View** |
| UAR Review Notes | *customrecord\_flo\_uar\_perm\_review\_note*  Changes made to a specific review. | Strongpoint UAR Admin: **Full** Strongpoint UAR Owner: **Create** Strongpoint UAR Additional Reviewer: **Create** Strongpoint UAR Auditor: **View** |
| Users and License Manager | *customrecord\_flo\_license*  Stores Strongpoint license information for your account. | Administrator: **Full** Advanced Change Manager: **View** Advanced Internal Auditor: **View** Change Manager: **View** Strongpoint Developer Role: **Full** Strongpoint UAR Admin: **View** Strongpoint UAR Auditor: **View** |
| Validation Log | *customrecord\_flo\_valid\_log*  Records each completed validation test and results. | Administrator: **Full** Advanced Change Manager: **View** Advanced Internal Auditor: **View** Change Manager: **View** Strongpoint Developer Role: **Full** |
| Warning Log | *customrecord\_warning\_log*  Stores any errors generated by the Change Request Sync tool. | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Edit** Strongpoint SoD Manager: **Edit** |

**Default SoD Custom Record Types and Permission Lists**

| Strongpoint Record Type | *Script ID*/Description | Permission List |
| --- | --- | --- |
| Permission | *customrecord\_flo\_permission*  Lists all NetSuite permissions in the account. Example: Transactions Journal Approval. Used when setting up an SoD rule. | Administrator: **Full** Strongpoint SoD Manager: **Full** Strongpoint UAR Admin: **Edit** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |
| Permission / Permission Level Map | *customrecord\_flo\_permission\_level\_map*  Permission to permission level map used by the SoD Approval form when adding a proposed global permission. | Administrator: **Full** Strongpoint SoD Manager: **Full** Strongpoint UAR Admin: **View** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |
| Permission Level (5 records) | *customrecord\_flo\_permission\_level*  Lists NetSuite permission levels such as **Full**, **Edit**, **Create**, and **View**. | Administrator: **Full** Strongpoint SoD Manager: **Full** Strongpoint UAR Admin: **View** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |
| SoD Rule | *customrecord\_flo\_sod\_rule*  Segregation of duties rules for access control. | Administrator: **Full** Strongpoint SoD Manager: **Full** Strongpoint UAR Admin: **View** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |
| SoD Rule Processing Status | *customrecord\_flo\_*sod\_rule*\_procstatus*  Lists the status of the SoD rule retroactive run. Status can be **Retroactive** , **In Progress** or **Done**. | Administrator: **Full** Strongpoint SoD Manager: **Full** Strongpoint UAR Admin: **View** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |