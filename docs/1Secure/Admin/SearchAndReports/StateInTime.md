---
id: stateintime
title: State In Time Risks Reports
---

# State In Time Risks Reports

To view detailed risk-related data for your organization, see the [Risk Assessment Dashboard](../RiskProfiles/RiskAssessmentDashboard.md "Review Risks using Risks Assessment Dashboard") topic.

State-in-time reports display data for the Active Directory, Microsoft Entra ID, and SharePoint Online platforms in your environment. You must enable the following connectors to collect data for the respective platforms:

- Active Directory State (AD State)  
  See Step 8 in the [Add a Source and Connectors for Active Directory](../Organizations/SourcesAndConnectors/ActiveDirectory.md "Add a Source and Connectors for Active Directory") topic
- Azure AD State  
  See Step 6 in the [Add a Source and Connectors for Microsoft Entra ID](../Organizations/SourcesAndConnectors/EntraID.md "Add a Source and Connectors for Microsoft Entra ID") topic
- SharePoint Online State  
  See Step 6 in the [Add a Source and Connectors for SharePoint Online](../Organizations/SourcesAndConnectors/SharePointOnline.md "Add a Source and Connectors for SharePoint Online") topic

## Review a Report

Follow the steps to review a state-in-time report.

**Step 1 –** Click **Reports** in the top bar to navigate to the Reports page. By default, the page opens to the Activity tab with New Investigation selected in the left pane.

**Step 2 –** Select an organization from the drop-down menu at the top of the left pane to access its reports. An organization is selected by default, but you can choose a different one if needed.

**Step 3 –** Click the **Risks** tab to access the state-in-time reports. This opens the Risks page with the High Risk Permissions on Documents report displayed by default.

**NOTE:** Click the Risk Assessment Dashboard link in the left pane to navigate to the Risk Assessment page, where you can monitor the risks for the selected organization. See the [Risk Assessment Dashboard](../RiskProfiles/RiskAssessmentDashboard.md "Risk Assessment Dashboard") topic for additional information.

![Risk Reports page](/img/1secure/admin/SITRisks.png "Risk Reports page")

**Step 4 –** In the left pane, click a category to view its reports. Categories are:

- Data
- Identity
- Infrastructure

**Step 5 –** Click a report to open it. Reports without a filter are automatically generated when you open them. Click **Search** to generate reports with a predefined filter set.

A list of the available state-in-time reports is given below.

State In Time reports are available under the following categories.

- [Data](#data "Data")
- [Identity](#identity "Identity")
- [Infrastructure](#infrastructure "Infrastructure")

## Data

| Risk Name | Description |
| --- | --- |
| Sites with Broken Permissions Inheritance | Lists objects with permissions that differ from their parent site, such as a folder with permissions different from its parent site. Broken inheritance disrupts the hierarchical permission structure that Microsoft recommends for the efficient management of SharePoint Online. This may result in inconsistent access controls, increased risk of privilege creep, and difficulty in maintaining the principle of least privilege. |

## Identity

| Risk Name | Description |
| --- | --- |
| Administrative Groups | Lists administrative groups within an environment. For each group, it displays the group name, location, members, and more. |
| Empty Security Groups | Lists the empty security groups within an environment. For each group, it displays the group name, location, and more. |
| Global Administrators | Lists global administrators within an environment. For each administrator, it displays the name, location, role, and more. |

## Infrastructure

| Risk Name | Description |
| --- | --- |

Sort a Report

Click a column header to sort data in a report by that column in ascending order. An arrow appears next to the column name to indicate the sort order. Click the column header again to sort the data in descending order.

Filter a Report

You can filter the data displayed in a report. Select a filter, operator, and value from the Filter, Operator, and Value drop-down menus, then click **Search**.

You can select more than one filter.

For options displayed in the Operator drop-down menu, see the [Filter Operators](FilterOperators.md "Filter Operators") topic.

Filter Descriptions

This table provides a list of filters and descriptions.

| Filter | Description |
| --- | --- |
| Group Location | Filters the report based on the location of an administrative group in the directory. For example, Administrators is a group name and its location is SSA-D4.local/Builtin/Administrators |
| Group Name | Filters the report based on the name of an administrative group, such as Administrators. |
| Member Location | Filters the report based on the location of a member within an administrative group. For example, Domain Admins is a member name and its location is SSA-D4.local/Users/Domain ​Admins. |
| Member Name | Filters the report based on the name of a member of an administrative group, such as Domain Admins. |
| Member through | Specify whether a group is a member of a group explicitly or inherited from another group.  For example, Group A \> Admin Group (Group A is explicitly a member of Admin Group)  Group B \> Group C \> Admin Group (Group C is explicitly a member of Admin Group while Group B is an inherited member of Admin Group)  If you do not specify the value, it will include both. If your Value is Inherited, it will only show Group B, and if you Value is Explicit, it will show Group A and Group C |
| Source Type | Filters the report based on any of the following source types:   - AD Group - Entra ID Group - Windows Local Group - SharePoint Online Group |
| Source | Filters the report based on the name of a data source. The data source name corresponds to the value specified in the Source Group field when adding a data source. See the [Sources and Connectors](../Organizations/SourcesAndConnectors/Overview.md "Sources and Connectors") topic for additional information. |
| Role | Filters the report based on a role, such as Global Administrator. |
| Object Type | Filters the report based on an object type, such as SharePoint Online Document Library. |
| Object URL | Filters the report based on the URL of an object. For example, antoN ​4.docx is an object and its URL is https://1secanton.sharepoint.com/sites/Permissions-2/Shared ​Documents/Sorting/antoN ​4.docx. |
| Resource Name | Filters the report based on the name of an object, such as Contract Draft.docx. |
| Access Granted To | Filters the report based on the level of access granted to user(s) on an object. |
| Parent URL | Filters the report based on the name of a parent site for objects. |