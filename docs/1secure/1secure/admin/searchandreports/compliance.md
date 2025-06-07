# Compliance Reports

Compliance reports help clients and Managed Service Providers gather information about their Microsoft Entra ID, Active Directory, and SharePoint Online configuration state at a specific point in time. This enables them to prove compliance with many regulations to auditors. Compliance reports provide information on user attributes, expired or locked user accounts, group memberships, and so on.

## Review a Report

Follow the steps to review a Compliance report.

__Step 1 –__ Click __Reports__ in the top bar to navigate to the Reports page. By default, the page opens to the Activity tab with New Investigation selected in the left pane.

__Step 2 –__ Select an organization from the drop-down menu at the top of the left pane to access its reports. An organization is selected by default, but you can choose a different one if needed.

__Step 3 –__ Click the __Compliance__ tab to access the compliance reports. This opens the Compliance page with the Group Membership report selected by default in the left pane.

![Compliance Reports Page](/static/img/product_docs/1secure/1secure/admin/searchandreports/reportscompliance.png)

__Step 4 –__ In the left pane, click a category to view its reports. Categories are:

- [Active Directory](#Active-Directory)
- [Microsoft Entra ID](#Microsoft-Entra-ID)
- [SharePoint Online](#SharePoint-Online)

__Step 5 –__ Click a report to open it. Reports without a filter are automatically generated when you open them. Click __Search__ to generate reports with a predefined filter set.

A list of the available Compliance reports(category-wise) is given below.

### Active Directory

| Report Name | Description |
| --- | --- |
| Group Membership | Lists the members of a group. For each member, it provides details, including the name, path, account type, membership type, domain, and admin group membership. |
| Groups | Lists all groups within Active Directory. For each group, it provides details, including the name, path, group scope, group type, and direct member count. |
| Last Logon Time | Lists user and computer accounts with the path, status (enabled, disabled), account type, and last login time for each. |
| Organizational Units | Lists the organizational units and their paths. |
| User Accounts - Expired | Lists expired user accounts, with the path, logon name, and expiration date for each account. |
| User Accounts - Locked | Lists locked user accounts, with the path, logon name, and lock date for each account. |
| User Attributes | Lists the user accounts with settings that violate company policies or applicable compliance standards. |
| User Membership | Lists the groups the user is a member of, with the permissions granted to the groups. |

### Microsoft Entra ID

| Report Name | Description |
| --- | --- |
| Role Members | Lists Microsoft Entra ID accounts (members or guests) assigned to a given role in your organization. Use this report to identify unauthorized role assignments or changes. |
| Roles | Lists the Microsoft Entra ID roles in your organization and the number of accounts (members or guests) assigned to each role. |
| User Attributes | Lists the user accounts with settings that violate company policies or applicable compliance standards. |

### SharePoint Online

| Name | Description |
| --- | --- |
| Broken Permissions Inheritance | Lists objects with permissions that differ from their parent, such as a folder with permissions different from its parent site. |
| Direct Object Permissions | Lists all identities (users or groups) that have assigned permissions to specific objects, such as documents, lists, or sites. Use this report to review which users or groups have access to data objects. |
| Direct User Permissions | Lists user accounts with direct permissions to specific objects. Use this report to see which users have permissions to what data. |
| High Risk Permissions | Lists the permissions and permission levels of high-risk trustees, such as Everyone, Authenticated Users, and Everyone except external users. |
| Permissions Overview by Resource | Provides a summary of assigned permissions in your organization, including the count of direct user permissions, stale permissions, broken permission inheritance, and high-risk permissions for each object. Click any permissions value to navigate to the specific permissions report for the selected resource. For example, clicking a High Risk Permissions value will take you to the High Risk Permissions report. |
| Sensitive Documents | Lists the documents that are classified according to the sensitive data types enabled in the SharePoint Online Data Classification connector. See step 7 in the [Add a Source and Connectors for SharePoint Online](/docs/product_docs/1secure/1secure/admin/organizations/sourcesandconnectors/sharepointonline.md) topic for addition information. |
| Sharing Links | Provides an overview of all the active sharing links within your SharePoint Online site. For each record, it displays the site collection, URL of the shared resource, name of the shared object, link creation and expiration dates, link type, assigned permissions, and more. Click the "Shared with" link to see exactly who or which groups have access. |

Sort a Report

Click a column header to sort data in a report by that column in ascending order. An arrow appears next to the column name to indicate the sort order. Click the column header again to sort the data in descending order.

Filter a Report

You can filter the data displayed in a report. Select a filter, operator, and value from the Filter, Operator, and Value drop-down menus, then click __Search__.

You can select more than one filter.

For options displayed in the Operator drop-down menu, see the [Filter Operators ](/docs/product_docs/1secure/1secure/admin/searchandreports/filteroperators.md)topic.

## Filter Descriptions

This table provides a list of filters and descriptions.

| Filter | Description |
| --- | --- |
| Group Type | Filters the report based on any of the following group types:   - Security - Distribution   To apply this filter, select __Group Type__ from the __Filter__ drop-down menu and choose an option from the __Value__ drop-down menu. |
| Group Name | Filters the report based on the name of a group.  To apply this filter, select __Group Name__ from the __Filter__ drop-down menu and specify a group name in the __Value__ field. |
| Member Type | Filters the report based on any of the following member types:   - User - Computer - Group   To apply this filter, select __Member Type__ from the __Filter__ drop-down menu and choose an option from the __Value__ drop-down menu. |
| Membership Type | Filters the report based on any of the following membership types:   - Direct - Nested   To apply this filter, select __Membership Type__ from the __Filter__ drop-down menu and choose an option from the __Value__ drop-down menu. |
| Name | Filters the report based on the name of a user or computer account.  To apply this filter, select __Name__ from the __Filter__ drop-down menu and specify a user or computer name in the __Value__ field. |
| Path | This is a filter in the report, Groups.  It filters the report based on the path of an object, which is a member of the group. The object can be a computer, user, or group. For example, "Account operator" is a group and its path is "BUILTIN/Account Operators", which is how you can find it in Active Directory Users and Computers (ADUC).  To apply this filter, select __Path__ from the __Filter__ drop-down menu and specify a path in the __Value__ field. |
| Security Identifier (SID) | Filters the report based on a Security Identifier (SID). The Security Identifier is a unique ID number that a computer or domain controller uses to identify you.  To apply this filter, select __Security Identifier (SID)__ from the __Filter__ drop-down menu and specify a SID in the __Value__ field.  This filter is shown by default in the Group Membership report. |
| Status | Filters the report based on any of the following user account statuses:   - Enabled - Disabled   To apply this filter, select __Status__ from the __Filter__ drop-down menu and choose a status from the __Value__ drop-down menu. |
| Inactive days | Filters the report based on an account's inactive days.  To apply this filter, select __Inactive Days__ from the __Filter__ drop-down menu and specify the number of inactive days in the __Value__ field. |
| AD and Microsoft Entra ID User Attributes filters | Depending on the following filters, review the specific information on the user accounts that violate company policies or applicable compliance standards:   - Account Cannot be Delegated - Cannot Change Password - Change Password on next sign in - City - Country - Creation Date - Department - Description - Email Address - Expiration Date - First Name - Is Locked - Job Title - Last Login - Last Modified - Last Name - Password Expiry - Password Last Changed - Path - Post Code - Primary Contact Number - SAM Account Name - State or Province - Status - Street Address - UPN (User Principal Name) |
| Domain | Filters the report based on the domain.  To apply this filter, select __Domain__ from the __Filter__ drop-down menu and specify the name of a domain in the __Value__ field. |
| Group Scope | Filters the report based on any of the following group scopes:   - Universal - Global - Domain Local   To apply this filter, select __Group Scope__ from the __Filter__ drop-down menu and choose an option from the __Value__ drop-down menu. |
| Group Location | Filters the report based on the specific location of a group in the directory.  To apply this filter, select __Group Location__ from the __Filter__ drop-down menu and specify a location in the __Value__ field. |
| Group Type | Filters the report based on any of the following group types:   - Security - Distribution   To apply this filter, select __Group Type__ from the __Filter__ drop-down menu and choose an option from the __Value__ drop-down menu. |
| Department | Filters the report based on a department in your organization.  To apply this filter, select __Department__ from the __Filter__ drop-down menu and specify the name of a department in the __Value__ field. |
| Job Role | Filters the report based on a job role in your organization.  To apply this filter, select __Job Role__ from the __Filter__ drop-down menu and specify a role in the __Value__ field. |
| User Origin | Filters the report based on any of the following platforms where the user was initially created:   - Hybrid AD - Microsoft Entra ID   To apply this filter, select __User Origin__ from the __Filter__ drop-down menu and choose a value from the __Value__ drop-down menu. |
| User Type | Filters the report based on any of the following user types in Microsoft 365:   - Member - Guest   To apply this filter, select __User Type__ from the __Filter__ drop-down menu and choose a value from the __Value__ drop-down menu. |
| Member Count | This filter appears in the Roles report and it filters the roles based on how many users are in it. You have to provide a number as a filter criterion and the report will display the roles that have the specified number of users.  To apply this filter, select __Member Count__ from the __Filter__ drop-down menu and specify a number in the __Value__ field. |
| Role | This filter appears in the Roles report and it filters the list of roles in the report according to a name. For example. adding the filter "Role Contains 'Administrator'" will return a list of roles like Global Administrator, Exchange Administrator, etc. It will not return roles that do not contain the word.  To apply this filter, select __Role__ from the __Filter__ drop-down menu and specify the full or partial name of a role in the __Value__ field. |
| Enabled | Filters the report based on any of the following account statuses:   - Enabled - Disabled   To apply this filter, select __Enabled__ from the __Filter__ drop-down menu and choose an option from the __Value__ drop-down menu. |
| Is Built-In | Filters the report based on predefined roles in your organization.  To apply this filter, select __Is Built-In__ from the __Filter__ drop-down menu and choose either __Yes__ or __No__ from the __Value__ drop-down menu. |
| Is Privileged | Filters the report based on privileged roles in your organization.  To apply this filter, select __Is Privileged__ from the __Filter__ drop-down menu and choose either __Yes__ or __No__ from the __Value__ drop-down menu. |
| Resource Name | Filters the report based on the name of an object, such as _Document_.  To apply this filter, select __Resource Name__ from the __Filter__ drop-down menu and specify an object name in the __Value__ field. |
| Object URL | Filters the report based on the URL of an object. For example, _SharePointHomeOrgLinks_ is an object and its URL is _https://lbkt.sharepoint.com/Lists/SharePointHomeOrgLinks_  To apply this filter, select __Object URL__ from the __Filter__ drop-down menu and specify an Object URL in the __Value__ field. |
| Object Type | Filters the report based on an object type. For example, _Documents_ is an object and its type is _SharePoint Online Document Library_.  To apply this filter, select __Object Type__ from the __Filter__ drop-down menu and choose an option from the __Value__ drop-down menu. |
| Accounts | Filters the report based on an account (user or group) with permissions to data objects, such as _Site Collection Administrators_.  To apply this filter, select __Account__ from the __Filter__ drop-down menu and specify an account name in the __Value__ field. |
| Account Type | Filters the report based on an account type, such as _SharePoint Online Group_. The report will display accounts belonging to the specified type with permissions to data objects.  To apply this filter, select __Account Type__ from the __Filter__ drop-down menu and choose an option from the __Value__ drop-down menu. |
| Permissions | Filters the report based on the permission assigned to an account, such as Add Items, Edit Items, Delete Items, etc.  To apply this filter, select __Permissions__ from the __Filter__ drop-down menu and choose an option from the __Value__ drop-down menu. |
| Last Logon | Filters the report based on an account's last logon date and time.  To apply this filter, select __Last Logon__ from the __Filter__ drop-down menu and choose a date and time from the __Value__ drop-down menu. |
| Creation | Lists the sharing links based on a creation date and time. |
| Expiry Date | Lists the sharing links based on an expiry date and time. |
| Link Type | Lists the links based on any of the following sharing types:   - Anonymous - Organization - Specific People |
| Sensitive Data Types | Lists the documents based on the sensitive data type they contain. Available data types are:   - PII - Financial Records - GDPR Restricted - GDPR - GLBA - HIPAA - PCI DSS - PHI - CCPA - CMMC - Credentials |
| Sensitive Data Criteria | Lists the documents based on a sensitive data criteria. Each data type (e.g., PII) may have multiple data criteria, like PII >> Denmark, PII >> French passport, PII >> France, and so on. |
| Sensitivity Label | Lists the documents based on a sensitivity label. For example, if you specify a label named "sensitive", it lists all the documents with that label.  Sensitivity labels are applied to documents on the basis of the settings configured for the SharePoint Online Data Classification connector in the SharePoint Online data source. See step 7 in the [Add a Source and Connectors for SharePoint Online](/docs/product_docs/1secure/1secure/admin/organizations/sourcesandconnectors/sharepointonline.md) topic for additional information. |
