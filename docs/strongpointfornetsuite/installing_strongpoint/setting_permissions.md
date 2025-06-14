# Setting Role Permissions

The __Access Type__ for Platform Governance for NetSuite Custom __Record Types__ is set to __Use Permission List__. This controls access using Roles, Permission Lists and Strongpoint License verification to prevent unauthorized users from changing the records. Users with Roles not included in the Permission List for a record type are denied access.

Remember to give your [licensed](/docs/strongpointfornetsuite/installing_strongpoint/license_manager.md) users access to the [Strongpoint tab](/docs/strongpointfornetsuite/installing_strongpoint/setting_strongpoint_tab_access.md).

To use Platform Governance for NetSuite with your custom roles, add the record types to the permission list for each role. The Strongpoint roles have the correct access levels by default.

1. Open __Setup__ > __Users/Roles__ > __Manage Roles__
2. Edit each custom role your targeted Users use for their tasks.
3. Open the __Permissions__ tab.

   ![Setting Permissions for Custom Roles](/img/product_docs/strongpointfornetsuite/installing_strongpoint/permissions_tab.webp)
4. Open the __Custom Record__ tab and add the Record Types and access levels to your custom roles.

   Adding permissions to a role affects all employees who have the role assigned to them.
     
   Refer to the lists of Custom Permissions needed for each role: Change Request Approvers, Manage ITGC, Manage SoD, User Access Review (UAR) and Manage Internal Audit - View Only.  
   The default settings are shown in the Default Custom Record Types and Permission Lists and Default SoD Custom Record Types and Permission Lists tables.
5. __Save__ the Permissions.

Here are the Custom Permissions needed for each role.

#### Change Request Approvers

> Assign a [User License](/docs/strongpointfornetsuite/installing_strongpoint/license_manager.md)

#### Process Issue

> No Permission Required

#### Manage ITGC

> [Strongpoint License](/docs/strongpointfornetsuite/installing_strongpoint/license_manager.md) +  
> Account Role: __Edit__  
> Change / Approval Policy: __Full__  
> Change Log: __Edit__  
> Change Request: __Edit__  
> Configuration and Stats: __Full__  
> Customization: __Full__  
> Environment: __Full__  
> Environment Compare Log: __Full__  
> Licensed User: __Full__  
> Process: __Full__  
> Spider Log: __View__  
> Test Record: __Full__  
> Users and License Manager: __Full__  
> Validation Log: __View__  
> Warning Log: __Full__

#### Manage SoD

On the Custom Role, you must check __Do Not Restrict Employee Fields__.

> [Strongpoint License](/docs/strongpointfornetsuite/installing_strongpoint/license_manager.md) +  
> Account Role: __Edit__  
> Change / Approval Policy: __Edit__  
> Change Log: __Edit__  
> Change Request: __Edit__  
> Configuration and Stats: __Edit__  
> Customization: __View__  
> Environment: __View__  
> Process: __View__  
> Test Record: __View__  
> Warning Log: __Edit__
>
> Permission: __Full__  
> Permission / Permission Level Map: __Full__  
> Permission Level: __Full__  
> SoD Rule: __Full__  
> SoD Rule Processing Status: __Full__

#### User Access Review (UAR)

> [Strongpoint License](/docs/strongpointfornetsuite/installing_strongpoint/license_manager.md) +  
> Audit Trail: __Full__  
> Find Transaction: __Full__

#### Manage Internal Audit - __View__ Only

> [Strongpoint License](/docs/strongpointfornetsuite/installing_strongpoint/license_manager.md) +  
> Account Role: __View__  
> Change / Approval Policy: __View__  
> Change Log: __View__  
> Change Request: __View__  
> Configuration and Stats: __View__  
> Customization: __View__  
> Environment: __View__  
> Environment Compare Log: __View__  
> Licensed User: __View__  
> Process: __View__  
> Spider Log: __View__  
> Test Record: __View__  
> Users and License Manager: __View__  
> Validation Log: __View__  
> Warning Log: __View__

__Default Custom Record Types and Permission Lists__

| Strongpoint Record Type | _Script ID_/Description | Permission List |
| --- | --- | --- |
| Account Role   (3 records) | _customrecord\_flo\_account\_roles_    User roles used by Environment Compare Tool, Change Request Sync Tool, Lookup Customization to connect to another account. | Administrator: __Full__   Advanced Change Manager: __Full__   Advanced Internal Auditor: __View__   Change Manager: __Full__   Strongpoint Data Access Only Role: __Edit__   Strongpoint Developer Role: __Edit__   Strongpoint SoD Manager: __Edit__ |
| Change/Approval   Policy | _customrecord\_flo\_policy_    Defines the Level of change management required for a given change, Level of approval required, and Approvers. | Administrator: __Full__   Advanced Change Manager: __View__   Advanced Internal Auditor: __View__   Change Manager: __View__   Strongpoint Developer Role: __View__   Strongpoint SoD Manager: __Edit__   Strongpoint UAR Admin: __View__   Strongpoint UAR Owner: __View__   Strongpoint UAR Additional Reviewer: __View__   Strongpoint UAR Auditor: __View__ |
| Change Log | _customrecord\_flo\_change\_log_    Tracks changes made to Customizations. | Administrator: __Edit__   Advanced Change Manager: __Edit__   Advanced Internal Auditor: __View__   Change Manager: __Edit__   Strongpoint Data Access Only Role: __Edit__   Strongpoint Developer Role: __Edit__   Strongpoint SoD Manager: __Edit__   Strongpoint UAR Admin: __Edit__   Strongpoint UAR Owner: __Create__   Strongpoint UAR Additional Reviewer: __Create__   Strongpoint UAR Auditor: __Edit__ |
| Change Request | _customrecord\_flo\_change\_request_    Used to seek approval for any changes on Customizations, Change Policy, and SoD changes. | Administrator: __Full__   Advanced Change Manager: __Full__   Advanced Internal Auditor: __View__   Change Manager: __Full__   Strongpoint Data Access Only Role: __Edit__   Strongpoint Developer Role: __Edit__   Strongpoint SoD Manager: __Edit__Strongpoint UAR Admin: __Edit__   Strongpoint UAR Owner: __Edit__   Strongpoint UAR Additional Reviewer: __Edit__   Strongpoint UAR Auditor: __View__ |
| Configuration and Stats | _customrecord\_flo\_spider\_configuration_    Strongpoint Installation Settings report provides a comprehensive and live view of the Strongpoint data in the account. | Administrator: __Full__   Advanced Change Manager: __Full__   Advanced Internal Auditor: __Edit__   Change Manager: __Full__   Strongpoint Data Access Only Role: __Edit__   Strongpoint Developer Role: __Full__   Strongpoint SoD Manager: __Edit__Strongpoint UAR Admin: __Edit__   Strongpoint UAR Owner: __View__   Strongpoint UAR Additional Reviewer: __View__   Strongpoint UAR Auditor: __View__ |
| Customization | _customrecord\_flo\_customization_    The documentation about each customization. Records are automatically built and maintained by the Strongpoint Spiders, enabling you to search customizations and attach them to processes. | Administrator: __Full__   Advanced Change Manager: __Full__   Advanced Internal Auditor: __View__   Change Manager: __Full__   Strongpoint Data Access Only Role: __Edit__   Strongpoint Developer Role: __Full__   Strongpoint SoD Manager: __View__Strongpoint UAR Admin: __View__   Strongpoint UAR Owner: __View__   Strongpoint UAR Additional Reviewer: __View__   Strongpoint UAR Auditor: __View__ |
| Data Validation Report | _customrecord\_flo\_data\_validation_    Stores the details on a new data validation report. Data validation checks the searches used to ensure all data has been properly documented. | Administrator: __Full__ |
| Environment | _customrecord\_flo\_environment_    Stores your NetSuite accounts for use by the Environment Compare Tool, Change Request Sync Tool, and Lookup Customization | Administrator: __Full__   Advanced Change Manager: __Full__   Advanced Internal Auditor: __View__   Change Manager: __Full__   Strongpoint Data Access Only Role: __Edit__   Strongpoint Developer Role: __Full__   Strongpoint SoD Manager: __View__ |
| Environment Compare Log | _customrecord\_flo\_env\_compare\_log_    Results of Environment Compare Tool. | Administrator: __Full__   Advanced Change Manager: __Full__   Advanced Internal Auditor: __View__   Change Manager: __Full__   Strongpoint Data Access Only Role: __Edit__   Strongpoint Developer Role: __Full__ |
| Licensed User | _customrecord\_flo\_license\_user_    Users provisioned with a Strongpoint License. | Administrator: __Full__   Advanced Change Manager: __View__   Advanced Internal Auditor: __View__   Change Manager: __View__   Strongpoint Developer Role: __Full__   Strongpoint UAR Admin: __Edit__   Strongpoint UAR Owner: __View__   Strongpoint UAR Additional Reviewer: __View__   Strongpoint UAR Auditor: __View__ |
| Notification Tracker | _customrecord\_flo\_notification\_tracker_    Links all notifications sent to search owners, users, and, rule owners before and after the automatic search cleanup is executed. Screen reader support enabled. | Administrator: __Full__ |
| Process | _customrecord\_flo\_process_    Process tracking record. | Administrator: __Full__   Advanced Change Manager: __Full__   Advanced Internal Auditor: __View__   Change Manager: __Full__   Strongpoint Data Access Only Role: __Edit__   Strongpoint Developer Role: __Full__   Strongpoint SoD Manager: __View__Strongpoint UAR Admin: __View__   Strongpoint UAR Owner: __View__   Strongpoint UAR Additional Reviewer: __View__   Strongpoint UAR Auditor: __View__ |
| Process Issue | _customrecord\_process\_issue_    Optional ticketing system. | No permission required |
| Review | _customrecord\_flo\_review\_report_    Contains all the details of a UAR Review. | Strongpoint UAR Admin: __Full__   Strongpoint UAR Owner: __Edit__   Strongpoint UAR Additional Reviewer: __Edit__   Strongpoint UAR Auditor: __View__ |
| Review Group | _customrecord\_flo\_uar\_review\_group_    Contains the details for a set of UAR reviews. | Strongpoint UAR Admin: __Full__   Strongpoint UAR Owner: __Edit__   Strongpoint UAR Additional Reviewer: __Edit__   Strongpoint UAR Auditor: __View__ |
| Search Clean Up Job | _customrecord\_flo\_cleanup\_request_    Records the status and results of the automated search clean up. | Administrator: __Full__ |
| Search Clean Up Rule | _customrecord\_flo\_cleanup\_rule\_record_    Created by the administrator to locate Saved Searches matching the rule criteria. | Administrator: __Full__ |
| Spider Log    (49 Records) | _customrecord\_flo\_spider\_log_    List of Spider Count vs Documented Count per Customization Type. Data found in Spider Status tab of the Installation Settings. | Administrator: __Full__   Advanced Change Manager: __View__   Advanced Internal Auditor: __View__   Change Manager: __View__   Strongpoint Developer Role: __View__ |
| Test Record | _customrecord\_flo\_test\_report_    Tracks tests within the Strongpoint Documentation System. | Administrator: __Full__   Advanced Change Manager: __Full__   Advanced Internal Auditor: __View__   Change Manager: __Full__   Strongpoint Data Access Only Role: __Edit__   Strongpoint Developer Role: __Full__   Strongpoint SoD Manager: __View__Strongpoint UAR Admin: __View__   Strongpoint UAR Auditor: __View__ |
| UAR Notification Data | _customrecord\_flo\_uar\_notification\_data_    List of users to receive notifications. | Strongpoint UAR Admin: __Full__   Strongpoint UAR Owner: __Create__   Strongpoint UAR Additional Reviewer: __Create__   Strongpoint UAR Auditor: __View__ |
| UAR Notifications | _customrecord\_flo\_uar\_notifications_    Notifications you see in the UAR Dashboard. | Strongpoint UAR Admin: __Full__   Strongpoint UAR Owner: __Create__   Strongpoint UAR Additional Reviewer: __Create__   Strongpoint UAR Auditor: __View__ |
| UAR Owner Notes | _customrecordflo\_uar\_owner\_notes_    Changes made by an UAR administrator to the Owner List page. | Strongpoint UAR Admin: __Full__   Strongpoint UAR Owner: __Create__   Strongpoint UAR Additional Reviewer: __Create__   Strongpoint UAR Auditor: __View__ |
| UAR Provisioning Review | _customrecord\_flo\_uar\_provisioning\_review_    Details of Membership Reviews for provisioning/deprovisioning | Strongpoint UAR Admin: __Full__   Strongpoint UAR Owner: __Create__   Strongpoint UAR Additional Reviewer: __Create__   Strongpoint UAR Auditor: __View__ |
| UAR Review Notes | _customrecord\_flo\_uar\_perm\_review\_note_    Changes made to a specific review. | Strongpoint UAR Admin: __Full__   Strongpoint UAR Owner: __Create__   Strongpoint UAR Additional Reviewer: __Create__   Strongpoint UAR Auditor: __View__ |
| Users and License Manager | _customrecord\_flo\_license_    Stores Strongpoint license information for your account. | Administrator: __Full__   Advanced Change Manager: __View__   Advanced Internal Auditor: __View__   Change Manager: __View__   Strongpoint Developer Role: __Full__   Strongpoint UAR Admin: __View__   Strongpoint UAR Auditor: __View__ |
| Validation Log | _customrecord\_flo\_valid\_log_    Records each completed validation test and results. | Administrator: __Full__   Advanced Change Manager: __View__   Advanced Internal Auditor: __View__   Change Manager: __View__   Strongpoint Developer Role: __Full__ |
| Warning Log | _customrecord\_warning\_log_    Stores any errors generated by the Change Request Sync tool. | Administrator: __Full__   Advanced Change Manager: __Full__   Advanced Internal Auditor: __View__   Change Manager: __Full__   Strongpoint Data Access Only Role: __Edit__   Strongpoint Developer Role: __Edit__   Strongpoint SoD Manager: __Edit__ |

__Default SoD Custom Record Types and Permission Lists__

| Strongpoint Record Type | _Script ID_/Description | Permission List |
| --- | --- | --- |
| Permission | _customrecord\_flo\_permission_    Lists all NetSuite permissions in the account. Example: Transactions Journal Approval. Used when setting up an SoD rule. | Administrator: __Full__   Strongpoint SoD Manager: __Full__   Strongpoint UAR Admin: __Edit__   Strongpoint UAR Owner: __View__   Strongpoint UAR Additional Reviewer: __View__   Strongpoint UAR Auditor: __View__ |
| Permission / Permission Level Map | _customrecord\_flo\_permission\_level\_map_    Permission to permission level map used by the SoD Approval form when adding a proposed global permission. | Administrator: __Full__   Strongpoint SoD Manager: __Full__   Strongpoint UAR Admin: __View__   Strongpoint UAR Owner: __View__   Strongpoint UAR Additional Reviewer: __View__   Strongpoint UAR Auditor: __View__ |
| Permission Level   (5 records) | _customrecord\_flo\_permission\_level_    Lists NetSuite permission levels such as __Full__, __Edit__, __Create__, and __View__. | Administrator: __Full__   Strongpoint SoD Manager: __Full__   Strongpoint UAR Admin: __View__   Strongpoint UAR Owner: __View__   Strongpoint UAR Additional Reviewer: __View__   Strongpoint UAR Auditor: __View__ |
| SoD Rule | _customrecord\_flo\_sod\_rule_    Segregation of duties rules for access control. | Administrator: __Full__   Strongpoint SoD Manager: __Full__   Strongpoint UAR Admin: __View__   Strongpoint UAR Owner: __View__   Strongpoint UAR Additional Reviewer: __View__   Strongpoint UAR Auditor: __View__ |
| SoD Rule Processing Status | _customrecord\_flo\__sod\_rule_\_procstatus_    Lists the status of the SoD rule retroactive run. Status can be __Retroactive__ , __In Progress__ or __Done__. | Administrator: __Full__   Strongpoint SoD Manager: __Full__   Strongpoint UAR Admin: __View__   Strongpoint UAR Owner: __View__   Strongpoint UAR Additional Reviewer: __View__   Strongpoint UAR Auditor: __View__ |
