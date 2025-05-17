---
sidebar_position: 5886
title: Add a Storage Profile
---

# Add a Storage Profile

Follow the steps to create a Storage Profile.

![Add Storage profile option](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Storage/AddProfile.png "Add Storage profile option")

**Step 1 –** Click **Add Storage profile** at the top of the Storage view.

![New Storage profile added](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Storage/AddProfileName.png "New Storage profile added")

**Step 2 –** A new profile line appears in the Storage Profiles list with a generic name. Change the Profile name to a unique and descriptive name.

![Server Name field](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Storage/AddProfileServerName.png "Server Name field")

**Step 3 –** Type the SQL **Server name** in the textbox provided. This can be a NetBIOS name, a fully qualified domain name, or an IP Address. If the SQL Server specified is configured to use a named instance, provide the **Instance name** in the next textbox.

![Command timeout field](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Storage/AddProfileTimeout.png "Command timeout field")

**Step 4 –** Specify the time in minutes that must expire before Access Analyzer halts any SQL queries running for that amount of time.

![Authentication options](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Storage/AddProfileAuthentication.png "Authentication options")

**Step 5 –** Select the radio button for the appropriate authentication mode. If using **SQL Server authentication** , provide a **User name** and **Password** in the textboxes.

***RECOMMENDED:*** When possible, use Windows Authentication. Windows Authentication is more secure than SQL Server Authentication. See the Microsoft [Choose an authentication mode](https://learn.microsoft.com/en-us/sql/relational-databases/security/choose-an-authentication-mode "Choose an authentication mode") article for additional information.

| Good connection test | Bad connection test |
| --- | --- |
| Good Connection Test | Bad Connection Test |

**Step 6 –** It is recommended to test the credentials provided at this point. The radio button for **Use existing database** should be selected by default. Test the SQL Server connection by clicking the drop-down arrow for an existing database. If the connection is established, a listing of databases appears. If the connection cannot be established, an error warning displays.

![Database options](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Storage/AddProfileDatabase.png "Database options")

**Step 7 –** Set the database through one of the following options:

* Use existing database – Click this radio button and select a database from this list provided in the drop-down menu
* Create new database – Click this radio button and provide a unique, descriptive name in the textbox

![Connection report](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Storage/ConnectionReport.png "Connection report")

**Step 8 –** Click **Apply** and a Connection report window opens. The Connection report checks for the appropriate permissions and lists any that are missing. If no permissions are present, an error message appears in the Connection report window. When there is a `Successful connection test`, click **Close**.

**Step 9 –** If **Create new database** was selected, the new database now exists. If **Use existing database** was selected, the Storage Profile is now linked to the database. Click **Save** and then **OK** to complete the creation of the new Storage Profile.

The new Storage Profile is available to be used by Access Analyzer.