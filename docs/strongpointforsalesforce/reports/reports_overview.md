# Reports

The Netwrix Dashboard __Reports__ tab has links to all of the predefined reports and log files.

- [Access Reports](#Access-Reports)
- [Security Reports](#Security-Reports)
- [Data Classification](#Data-Classification)
- [Customizations](#Customizations)
- [Clean Up](#Clean-Up)
- [Change Enablement](#Change-Enablement)
- [Release and Deployment](#Release-and-Deployment)
- [Audit Reports](#Audit-Reports)

You can define and save your own reports.

- Customization objects have additional data to enable searching with complex queries. For example, search for _all objects with script dependencies that have not been used for six months_, _or all objects used by workflows_.
- You can filter test scripts from regular scripts. Test scripts can be queried to review test coverage and determine if they being used.

To access all reports, the following setting must be enabled:  
Open __Strongpoint__ > __Scanner__ > __Scheduler__  
 __PermissionSet Assignment__ and __System Permission__ must be __Enabled__, and the __Frequency__ set to __Daily__.   
If you have questions, contact your CSM or Salesforce Specialist.

![Enabling reports](/img/product_docs/strongpointforsalesforce/reports/access_reports_enabled.png)

## Access Reports

These reports are available from __Netwrix Dashboard__ > __Reports__ > __Access Reports__.

Filters can be used on this report. Use __Save As__ for a new version following your company naming conventions. An elevated access example is to filter __Permissionset/Profile__ by the name of the elevated access profile or permission set, such as __Admin__.

You can focus on sensitive objects by filtering by object name and adding the names of the objects in the filter using the __contains__ keyword plus the name of the object as it appears in object name. Separate each name with a comma.

> __Permissions by Object__: Displays the permissions on each object for all Permission Sets and Profiles.
>
> ![Permission by object](/img/product_docs/strongpointforsalesforce/reports/access_reports_permission_by_object.png)
>
> __Object Permission by Profile/PermSet__: Displays the object permissions organized by Permission Set and Profile.
>
> ![Access report by PermissionSet/Profile](/img/product_docs/strongpointforsalesforce/reports/access_reports_permission_by_permset.png)
>
> __Users to Profiles/PermissionSets__: Displays the Profile, PermissionSet and PermissionSet Group assigned to each user. You can filter the report information. For example, if you want a list of users that have Admin profiles, you can set two filters:
>
> - Customization Name Contains __Admin__
> - Salesforce type Equals Profile
>
> __Date Assigned__ and __Expires on__ are only relevant for PermissionSets. They are blank for Profiles. If your org does not use the __Expires on__ feature, you can remove the column from the report.
>
> ![Users to Profile/PermissionSets](/img/product_docs/strongpointforsalesforce/reports/access_reports_users_to_profile.png)
>
> __Profiles to PermissionsSets Changes__: Displays the changes made to your Profiles, PermissionSets,and PermissionSet Groups. If there is an active policy, the __Compliance__ column displays whether the change was Compliant or Non-Compliant. If no policy, all changes are Compliant.
>
> ![Access Report Profile Permissions Changes](/img/product_docs/strongpointforsalesforce/reports/access_reports_profile_changes.png)
>
> __Changes to Users__: Displays the changes to tracked user data fields. Refer to [Enhanced CPQ Support](/docs/strongpointforsalesforce/change_management/enhanced_cpq_support.md) for more information on setting up tracking.
>
> If you see the message: _--String too long - Skipped lines due to CPU limit reached--_ it simply means the governor limits have been reached. Profiles and PermissionSets are very data heavy. Platform Governance for Salesforcet skips the record and continues the scan the next day to ensure there is no impact to your org.
>
> ![Changes to Users](/img/product_docs/strongpointforsalesforce/reports/accses_reports_user_changes.png)
>
> __Record Types and Page Layout Assignments__: Displays the objects, record types and assigned layouts organized by profile.
>
> ![Access Reports Record Types and Layouts](/img/product_docs/strongpointforsalesforce/reports/access_reports_record_types.png)
>
> __System Permissions__: displays the list of System Permissions, the Profile or Permission set that has access to it and the list of Users that have this system permission enabled.
>
> ![System Permissions](/img/product_docs/strongpointforsalesforce/reports/report_systems_permissions.png)
>
> __Field Permissions__: Displays the related objects, shows if there is a Read / Edit permission, the Profile or Permission set that give that field level access and the users related to those Profiles and permission sets.
>
> ![Field Permissions report](/img/product_docs/strongpointforsalesforce/reports/report_field_permissions.png)
>
> To generate this report:
>
> 1. Open __Strongpoint Lightning__ > __Tools__ > __Field-Level security Scanner__.
> 2. Select the Salesforce object for the fields to add to the report.
> 3. Click __Search Fields__.
> 4. Change the checkbox to __True__ next to the fields to add. You can add up to 50 fields.
> 5. Click __Scan__.
>
> This pushes the new list of fields to the report. If you select other fields and repeat the process, the previous report is overwritten. Export any reports you want to keep.

## Security Reports

These reports are related to the Salesforce Health Check. It tracks if this feature of the health check is __Enabled__ or __Disabled__ for your Salesforce Organization. For full detail compare the report to the health check section in Salesforce Setup.

These reports are available from __Netwrix Dashboard__ > __Reports__ > __Security Reports__.

> __Health Check Remote Site Settings__: displays any remote sites with the __Disable Protocol__ security option selected.
>
> __Health Check Password Policies__: displays password related Health check security settings.
>
> __Health Check Session Settings__: displays session settings, including:
>
> - Require HttpOnly attribute.
> - Lock sessions to the domain in which they were first used.
> - Let users verify their identity by text (SMS)
> - Enable clickjack protection for Setup pages
> - Enable clickjack protection for non-Setup Salesforce pages
> - Enable clickjack protection for customer Visualforce pages with standard headers
> - Enable clickjack protection for customer Visualforce pages with headers disabled
> - Enable CSRF protection on GET requests on non-setup pages
> - Enable CSRF protection on POST requests on non-setup pages
> - Force relogin after Login-As-User
> - Enforce login IP ranges on every request
> - Enable Content Security Policy protection for email templates
> - Enable XSS protection
> - Enable Content Sniffing protection
> - Force logout on session timeout
> - Require identity verification for email address changes
> - Session Timeout
> - Require identity verification during multi-factor authentication (MFA) registration
> - Allow redirections to untrusted external URLs without warning
>
> __Health Check Certificates__: tracks CKM Certificate name, Expiration date, expiration status, CKM Key Size and related Policy if applicable.
>
> __Health Check Changes__: tracks the changes to the items related to the health check settings.

## Data Classification

These reports are available from __Strongpoint__ > __Reports__ > __Data Classification__.

> __Changes related to Data Classification__: displays any changes that have occured.
>
> __Fields with Data Classification__: displays fields with data classification attributes, including:
>
> - GDPR
> - PII
> - HIPAA
> - PCI
> - CCPA

## Customizations

These reports are available from __Netwrix Dashboard__ > __Reports__ > __Customizations__.

> __All Customizations__: This enables you to use Salesforce functionality to filter searches quickly for specific customizations.
>
> __Customization Impact__: This report shows your customizations and how they impact other objects.

## Clean Up

These reports are available from __Netwrix Dashboard__ > __Reports__ > __Clean Up__.

> [Default Clean Up List View](/docs/strongpointforsalesforce/clean_up/cleanup_reports.md#Default-Clean-Up-List-View)
>
> [Open Clean Up Status](/docs/strongpointforsalesforce/clean_up/cleanup_reports.md#Open-Clean-Up-Status)
>
> [Clean Up Waiting for Info](/docs/strongpointforsalesforce/clean_up/cleanup_reports.md#Clean-Up-Waiting-for-Info)
>
> [Customizations Excluded from Clean Up](/docs/strongpointforsalesforce/clean_up/cleanup_reports.md#Customizations-Excluded-from-Clean-Up)
>
> [Unused Fields](/docs/strongpointforsalesforce/clean_up/cleanup_reports.md#Unused-Fields)
>
> [Unused Apex Code](/docs/strongpointforsalesforce/clean_up/cleanup_reports.md#Unused-Apex-Code)
>
> [Unused Reports](/docs/strongpointforsalesforce/clean_up/cleanup_reports.md#Unused-Reports)
>
> [Customizations with Inactive Owners](/docs/strongpointforsalesforce/clean_up/cleanup_reports.md#Customizations-with-Inactive-Owners)
>
> [Customizations without Related Processes](/docs/strongpointforsalesforce/clean_up/cleanup_reports.md#Customizations-without-Related-Processes)
>
> [Custom Fields without Help Text](/docs/strongpointforsalesforce/clean_up/cleanup_reports.md#Custom-Fields-without-Help-Text)
>
> [Custom Fields without Description](/docs/strongpointforsalesforce/clean_up/cleanup_reports.md#Custom-Fields-without-Description)

## Change Enablement

These reports are available from __Netwrix Dashboard__ > __Reports__ > __Change Enablement__.

> __Approval Override__: shows all changes approved with an approval override.
>
> __What Changed?__: shows all changes that have occurred.
>
> __Unresolved Non-Compliant Changes__: displays open non-compliant changes. A non-compliant change indicates something was changed without the required approvals. By looking at this report, you can investigate changes and get an understanding of what the impacts are and see if any additional changes need to be made. This report is used to track changes that require action.
>
> __Managed Package Updates__: displays managed package update details for auditing.
>
> __Resolved Non-Compliant Changes__: displays resolved non-compliant changes with the change overview and the difference summary.
>
> __Compliant Changes__: displays all compliant changes. Compliant changes are automatically marked as closed. This report is used to review changes that have been automatically cleared.
>
> __Consolidated Change By Type__: displays changes summarized and grouped by Salesforce Type.
>
> __Deployed Changes__: displays an end to end summary of deployed changes to enable tracking and reporting of changes to the system.
>
> __Data Tracking Change Logs__: displays changes on objects set for data tracking.
>
> __Change/Approval Policy Changes__: this report is based on Field History Tracking. You can track up to 20 fields from the Policy Record. Salesforce starts tracking field history from the date and time you turn it on a field.
>
> __Fast Scan for Permissions Changes__: displays all changes detected in PermissionSet, PermissionSetGroup, and Profiles by the Fast Scan.

## Release and Deployment

These reports are available from __Netwrix Dashboard__ > __Reports__ > __Release and Deployment__.

> [Success Deployments](/docs/strongpointforsalesforce/reports/deployment_logs_success.md)
>
> [Deployments with Failures](/docs/strongpointforsalesforce/reports/deployment_logs_failures.md)
>
> [Deployments Pending Approval](/docs/strongpointforsalesforce/reports/deployment_logs_pending_approval.md)
>
> [Rollback Logs](/docs/strongpointforsalesforce/reports/deployment_logs_rollback.md)

## Audit Reports

__Unresolved Non-Compliant Changes__: displays open non-compliant changes. A non-compliant change indicates something was changed without the required approvals. By looking at this report, you can investigate changes and get an understanding of what the impacts are and see if any additional changes need to be made. This report is used to track changes that require action.

__Managed Package Updates__: displays managed package update details for auditing.

__Resolved Non-Compliant Changes__: displays managed package update details for auditing.

__Compliant Changes__: displays all compliant changes. Compliant changes are automatically marked as closed. This report is used to review changes that have been automatically cleared.

__Platform Changes__: displays any platform changes that have occured.

__Consolidated Changes By Type__: displays changes summarized and grouped by Salesforce Type.

__Deployed Changes__: displays an end to end summary of deployed changes to enable tracking and reporting of changes to the system.

__Unresolved Control Incidents__: Deprecated item

__Resolved Control Incidents__: Deprecated item

__Pre-Approved Control Incidents__: Deprecated item
