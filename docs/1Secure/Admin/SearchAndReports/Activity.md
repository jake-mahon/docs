---
id: activity
title: Activity Reports
---

# Activity Reports

You can choose to view predefined Activity reports or create customized reports tailored to your needs by applying specific filters. To view custom reports, see the Create Reports with Custom Filters topic.

Activity reports collect data from the following environments:

- Active Directory
- Microsoft Entra ID
- Exchange Online
- File Server
- SharePoint Online
- SQL Database

## Review a Report

Follow the steps to review an Activity report.

**Step 1 –** Click **Reports** in the top bar to navigate to the Reports page. By default, the page opens to the Activity tab with New Investigation selected in the left pane.

**Step 2 –** Select an organization from the drop-down menu at the top of the left pane to access its reports. An organization is selected by default, but you can choose a different one if needed.

**Step 3 –** In the left pane, click a category to view its reports.

**Step 4 –** Click a report to open it. Reports without a filter are automatically generated when you open them. Click **Search** to generate reports with a predefined filter set.

Activity reports are available under the following categories.

- [Overview](#overview "Overview")
- [Active Directory](#active-directory "Active Directory")
- [Microsoft Entra ID](#microsoft-entra-id "Microsoft Entra ID")
- [Exchange Online](#exchange-online "Exchange Online")
- [File Server](#file-server "File Server")
- [SharePoint Online](#sharepoint-online "SharePoint Online")
- [SQL Database](#sql-database "SQL Database")

## Overview

| Report Name | Description |
| --- | --- |
| Activity Outside of Business Hours | Lists user activities that occur outside of predefined business hours. It helps detect unusual or suspicious behavior, such as logins or changes made during non-working hours. |
| All Logon Activity | Lists all user login attempts across the environment. It helps track login trends, such as repeated failed login attempts. |
| Changes by Date | Lists all changes to monitored objects by date. |
| Exchange Online | Lists audit logs for the Exchange sandbox. |
| Failed Logons | Lists all failed login attempts. It helps identify potential security issues, such as unauthorized users trying to access the network. |

## Active Directory

| Report Name | Description |
| --- | --- |
| All Active Directory Changes | Lists changes to all Active Directory objects including changes to permissions, configuration, etc. This is the most comprehensive report on Active Directory changes. Use it when you need to review every single change to any Active Directory object. |
| All Logon Activity | Lists all user login attempts across the Active Directory. It helps track the login trends, such as repeated failed login attempts. |
| Failed Logons | Lists the failed login attempts. It is useful for identifying the potential security issues, such as unauthorized users trying to access the system. |
| Members Added to Administrative Group | Lists all users who have been added to administrative groups. It helps administrators monitor changes to privileged groups and ensures that only authorized users have elevated access. |
| Members Removed from Administrative Group | Lists all users who have been removed from the administrative groups. It helps administrators monitor changes to privileged groups and ensures that only authorized users have elevated access. |
| Security Group Membership Changes | Lists changes made to security groups including, changes to group membership, permissions, descriptions, etc. |

## Microsoft Entra ID

| Report Name | Description |
| --- | --- |
| All Entra ID Changes | Lists all changes made to Microsoft Entra ID objects, including creation, modification, and deletion |
| Entra ID Admin Permissions Granted | Lists the users who have been granted admin level permissions |
| Entra ID Sign-In Activity | Lists all sign-in attempts across the Microsoft Entra ID |
| Mail.Read Permissions Granted to Application | Lists applications that have been granted permissions to read emails in all mailboxes without a signed-in user |
| User Added to a Microsoft Entra IDPrivileged Group | Lists users added to privileged groups |
| User Assigned New Privileged Role | Lists users who have been assigned new eligible or active privileged roles. This does not include Privileged Identity Management (PIM) role activations. |
| User Removed from a Privileged Role | Lists users whose privileged roles have been changed |

## Exchange Online

| Report Name | Description |
| --- | --- |
| All Exchange Online Changes | Lists all changes made to Exchange Online objects, configurations, and permissions. |
| All Exchange Online Non-Owner Mailbox Access Events | Lists all mailbox access performed by someone other than the mailbox owner. Use this report to protect your Exchange Online organization by identifying unauthorized activity. |
| Exchange Online Group Changes | Lists changes made to Exchange Online groups. Use this report to monitor the structure of your Exchange Online groups for changes that could lead to data leaks. |
| Exchange Online Mail User Changes | Lists changes made to the properties ofmailusers, including delivery restrictions. Use this report to detect suspicious activity in your Exchange Online organization. |
| Exchange Online Mailbox Permissions Changes | Lists all changes made to mailbox permissions, such as granting or revoking access rights to specific users. Use this report to detect unapproved permission changes. |
| Exchange Online Mailbox Policy Changes | Lists modifications made to mailbox policies. Use this report to monitor security in your Exchange Online organization and spot changes to business-critical policies. |

## File Server

| Report Name | Description |
| --- | --- |
| All File Server Changes | Lists all activities occurring on audited file servers, including changes, failed modifications, file reads, and failed read attempts. |
| Copied Files | Lists files that were copied within the monitored file share. For each file, it provides details, including the name, original file location, who copied the file, and when it was copied. Use this report to protect critical information against misuse and ensure that files containing sensitive data are not copied without a proper authorization. The report can be generated only for Windows file servers. |
| Created Files | Lists newly created files and folders. It can be used to analyze increased disk space usage. |
| Deleted Files | Lists the deleted files and folders. It helps track the removal of critical data and prevent accidental or unauthorized deletions. |
| Moved Files | Lists files and folders that were moved to a new location within the monitored scope. For each file or folder, the report displays the name and location of the original object, who moved the object, and when it was moved. |

## SharePoint Online

| Report Name | Description |
| --- | --- |
| All SharePoint Online Activity | Lists all activities across SharePoint Online sites and OneDrive for Business. |
| Anonymous Sharing Link Created | Lists all instances where anonymous sharing links are created |
| Content Management | Lists content-related activities, such as uploads, downloads, modifications, and deletions, that have occurred within the sites, lists, list items, and documents |
| Data Access | Lists the users who have accessed or downloaded documents from your SharePoint Online sites, or who have synchronized files to OneDrive for Business. |
| External User Activity | Lists all activities performed by external users, such as guest users, on SharePoint Online. By using this report, administrators can monitor external user interactions and ensure compliance with external collaboration policies. |
| High Risk Members Added | Monitors the addition of high-risk members to sensitive groups |
| High Risk Permissions Added | Tracks the assignment of high-risk permissions, such as granting broad access to various user groups. This report helps oversee and mitigate potential security risks by ensuring that elevated permissions are granted with proper authorization. |
| New Sharing Link with External User Access | Monitors the creation of new sharing links that grant access to external users |
| Activity Related to Sensitive Data | Tracks all activity related to documents marked as sensitive. It provides insights into how sensitive information is accessed and modified. |
| Mass Modifications and Deletions of Sensitive Documents | Provides an overview of all modifications and deletions related to sensitive documents.  To receive alerts for this report, make sure the Mass Modifications and Deletions of Sensitive Documents alert is enabled in the alert profile assigned to your organization. |
| Excessive External Activity with Sensitive Data | Highlights interactions between external users and documents labeled as sensitive. To receive alerts for this report, make sure the Excessive External Activity with Sensitive Data alert is enabled in the alert profile assigned to your organization. |
| Mass Failed Sensitive Data Access Attempts | Monitors unsuccessful attempts to access sensitive data, helping to identify potential security threats. It provides insights into unauthorized access attempts, enabling proactive measures to prevent future breaches and protect sensitive resources.  To receive alerts for this report, make sure the Mass Failed Sensitive Data Access Attempts alert is enabled in the alert profile assigned to your organization. |

## SQL Database

| Report Name | Description |
| --- | --- |
| All SQL Logons | Lists all login attempts on the SQL Server. Use this report to analyze user activity on production databases. |
| SQL Failed Logons | Lists the failed login attempts on the SQL Server. Use this report to identify potential security threats and analyze login issues. |

Filter a Report

You can filter the data displayed in a report. Select a filter, operator, and value from the Filter, Operator, and Value drop-down menus, then click **Search**.

You can select more than one filter.

For options displayed in the Operator drop-down menu, see the [Filter Operators](FilterOperators.md "Filter Operators") topic.

Subscribe to Activity Reports

You can subscribe to Activity reports to receive them automatically via email, or have them uploaded to a specified folder in SharePoint Online. See the [Subscriptions](Subscriptions.md) topic for additional information.