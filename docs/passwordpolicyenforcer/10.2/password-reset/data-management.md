---
title: Password Reset Data Management Tools
sidebar_label: Data Management
description: Data management tools for Password Reset including filter editor, user data administration, and enrollment data handling.
---

# Filter Editor

Use the Filter Editor to create complex filters, filters for hidden columns, or to save and open
regularly used filters. Press **CTRL** + **F** to open the Filter Editor, or click the **Filter
Editor** button in the lower right corner of the Data Console.

![using_the_data_console_9](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_the_data_console_9.webp)

A filter may contain several conditions. Conditions start with a column name, followed by an
operator, and sometimes a value. Column names are shown in green, operators in maroon, and values in
blue.

A filter also contains a root node and optionally one or more groups. These are used to include
Boolean operators in the filter. Boolean operators are shown in red. Grouped conditions are
indented.

The filter in the image above contains the root node, one group, and four conditions. It will show
all reset requests in the last fourteen days originating from IP addresses starting with 192.168.115
or 192.168.119.

Click the **Click here to add a new condition** button to add a new condition to the filter. Click
the ellipsis button on the left of each line to add or remove conditions and groups. Click column
names, operators, and values to edit them. Most can be selected from a list. Values can also contain
the ? and \* wildcard characters.

Click **Save As...** to save a filter to a file, or **Open...** to use a saved filter. Click **OK**
to close the Filter Editor and apply the filter.

Some columns are hidden in the Data Console. You can use the Filter Editor to create filters for
these columns. For example, the filter in the image below shows all users with an NPR v1 enrollment
record.

![using_the_data_console_10](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_the_data_console_10.webp)

# Filtering Data

The Data Console can show thousands of records, but only some of them will be of interest to you at
any time. Filters let you focus on the important information.

You can create simple filters by typing values directly into the filter row, or by selecting values
from [Filtering by Column Values](#filtering-by-column-values). More complex filters are created
with the [Custom Filters](#custom-filters) and
[Filter Editor](/docs/passwordpolicyenforcer/10.2/password-reset/data-management.md)
windows.

### The Filter Row

The top row in the **Audit Log** and **Users** tabs is called the Filter Row. You can type filter
values directly into this row.

![using_the_data_console_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_the_data_console_3.webp)

The Filter Row is empty when you first open the Data Console. To create a filter, click the **Filter
Row** in the column you wish to filter. A cursor will appear. Type a value, and then press **ENTER**
or **TAB**.

Click the button to shown an editor or selector that helps you enter a value. Values can include
wildcard characters. Use a ? to match any single character, or a \* to match more than one
character.

![using_the_data_console_4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_the_data_console_4.webp)

The image above shows a filter on the Date, Source, and Source IP columns. Only password reset
events on 2/5/2015 originating from IP addresses starting with 192.168.115 are shown. The small blue
icons in the column headers show which columns have active filters.

**NOTE:** Rows are shown only if they match all filter values (logical AND). Use the custom filter
or the filter editor windows for a logical OR filter.

### Filtering by Column Values

You can also create a filter by selecting values from a list in the column headers.

![using_the_data_console_5](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_the_data_console_5.webp)

Hover the mouse pointer over a column header until a small button appears on the right side of the
header.

![using_the_data_console_6](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_the_data_console_6.webp)

Click the button to show a list of values in the column.

Select one or more values from the list. Rows that do not match one of the selected values are
hidden.

![using_the_data_console_7](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_the_data_console_7.webp)

The list of values for date and date/time columns also includes date ranges such as **Last 7 days**,
**Today**, **Yesterday**, etc.

Click **(All)** to clear the filter and display all values. Click **(Custom...)** to create a custom
filter.

### Custom Filters

Use custom filters to search for partial matches, find a range of values, or to create more complex
filters. Click **(Custom...)** in a column header's value list to create a custom filter.

![using_the_data_console_8](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_the_data_console_8.webp)

Custom filters can contain one or two conditions for each column. Select an operator for the first
condition from the drop-down list below the column name. Only relevant operators are shown for each
column.

Type a value for the condition in the text box beside the operator. The text box may have a button
on the right. Click the button to shown an editor or selector that will help you enter a value.
Values can include wildcard characters. Use a ? to match any single character, or a \* to match more
than one character.

Select the **AND** or **OR** operator if the filter will have two conditions. Select **AND** if the
filter should only show rows that meet both conditions. Select **OR** if the filter should show rows
that meet either condition.

Select an operator and value for the second condition, or leave them blank if your filter only has
one condition. Click **OK** to close the Custom Filter window and apply the filter.

**NOTE:** The Filter Editor is shown instead of the Custom Filter window if the current filter is
too complex for the Custom Filter window.

### The Filter and Status Bars

The Status Bar appears at the very bottom of the Data Console. It shows the number of visible
records and the total record count. The Filter Bar appears above the Status Bar, and it shows the
active filter. The button on the right side of the Filter Bar opens the Filter Editor.

![using_the_data_console_11](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_the_data_console_11.webp)

A button and a check box appear on the left side of the Filter Bar when a filter is active. Click
the button to clear the filter. Toggle the check box to disable or enable the filter.

![using_the_data_console_12](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_the_data_console_12.webp)

A drop-down button appears to the right of the filter. Click it to select a recently used filter.

![using_the_data_console_13](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_the_data_console_13.webp)

## Exporting Data

You can export the visible rows to Microsoft Excel, HTML, text, and XML formats.

Follow the steps below to export the visible rows in the current tab.

**Step 1 –** Click the **Audit Log** or **Users** tab.

**Step 2 –** Click the **File** menu, and then click one of the export menu items.

**Step 3 –** Type a filename, and then click **Save**.

**NOTE:** When exporting to Excel, you can choose the file type from the **Export to Excel** window.
The default file type is .xlsx.

## Deleting Users

Users are automatically deleted from Password Reset's database approximately one week after they are
deleted from Active Directory. You can also manually delete users from the Data Console.

Follow the steps below to delete a user.

**Step 1 –** Click the **Users** tab.

**Step 2 –** Select the user(s) you wish to delete.

**Step 3 –** Press the **DELETE** key, and then click **OK**.

**NOTE:** You can still view a user's event history in the **Audit Log** tab after they are deleted
from the **Users** tab.

# Moving to SQL Server

Some planning is needed before moving the database to SQL Server. A trial run on a lab network is
recommended. You can run the Data Copy wizard more than once if you cannot complete the move on the
first attempt. A move back to SQL Server Compact is also possible.

### Create the Database

Your database administrator needs to set up the SQL Server database. The instructions below are an
overview of the procedure, they are not step-by-step instructions. NPR V3.30 has been tested with
SQL Server 2012 to 2019.

Follow the instructions below for an overview of the procedure.

**Step 1 –** Create an SQL Server database.

**Step 2 –** Create an SQL Server login for the Password Reset service account, and configure it for
Windows authentication. To identify the service account, open services.msc, double-click the
Password Reset service, and then click the Log On tab. Password Reset logs on to SQL Server with
this account.

![working_with_the_database](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/working_with_the_database.webp)

**Step 3 –** Create an SQL Server user, and map it to the service account login.

**Step 4 –** Add the SQL Server user to the db_datareader, db_datawriter, and db_ddladmin server
roles for the database.

Your database administrator also needs to grant access to the users that will use the Data Console.
These users only need to be added to the db_datareader server role, and they can be denied access to
the VerificationCode and EnrollRecord columns in the User table. The user running the Data Copy
wizard also needs to be added to the db_datawriter and db_ddladmin server roles.

Additional permissions can be set for users of the Data Console after the tables are created. Grant
the DELETE privilege on the User table to users who are allowed to delete user records. Deny all
privileges on the VerificationCode and EnrollRecord columns in the User table as they are not used
by the Data Console.

### Create the Tables and Copy the Data

The Data Copy wizard creates the database tables and copies the data to SQL Server. You must run the
wizard even if the SQL Server Compact database is empty. Data in the destination database is deleted
before it is copied from the source database.

Follow the steps below to create the tables and copy the data.

**Step 1 –** Open the Configuration Console.

**Step 2 –** Click the **General** tab.

**Step 3 –** Click **Copy Data...** to open the Data Copy wizard.

**Step 4 –** Click **Copy from SQL Compact to SQL Server**.

**Step 5 –** Check the path to the SQL Server Compact database files. If the default path is
incorrect, then click **Browse...**, choose a path, and then click **OK**.

**Step 6 –** Click **Next**.

**Step 7 –** Set the SQL Server connection settings for the Data Copy wizard. You can set different
connection settings for the service account later. The **Username** and **Password** are only needed
if **SQL Server Authentication** is selected. The user must be in the db_datareader, db_datawriter,
and db_ddladmin SQL Server roles. **Encrypt connection** should be selected to protect user
information, and **Trust server certificate** must be selected if SQL Server is using a self-signed
certificate. SQL Server uses a self-signed certificate if a trusted certificate is not installed.
The SQL Server Native Client must be installed if **Trust server certificate** is selected.

![working_with_the_database_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/working_with_the_database_1.webp)

**Step 8 –** Click **Next**.

**Step 9 –** Check the summary information, and then click **Start**.

**Step 10 –** Wait for the wizard to finish, and then click **Close**.

### Configure Netwrix Password Reset to Connect to SQL Server

Configure Password Reset to connect to SQL Server immediately after copying the data. If the cutover
is delayed, then run the Data Copy wizard again to update the SQL Server database with the latest
data. To configure Password Reset to connect to SQL Server:

**Step 1 –** Open the Configuration Console.

**Step 2 –** Click the **General** tab.

**Step 3 –** Click **Change...**

**Step 4 –** Select the **SQL Server** option.

**Step 5 –** Type the server name in the **Server** text box. Use `[server]\[instance]` to connect
to a named instance.

**Step 6 –** Type the database name in the **Database** text box.

**Step 7 –** Select the **Encrypt connection** option to encrypt the connection to SQL Server. This
option should be selected to protect user information.

**Step 8 –** Select the **Trust server certificate** option if SQL Server is using a self-signed
certificate. SQL Server uses a self-signed certificate if a trusted certificate is not installed.
Password Reset cannot connect to SQL Server with a self-signed certificate if this option is not
selected. The SQL Server Native Client must be installed if **Trust server certificate** is
selected.

**Step 9 –** Click **OK**, and then click **Apply**.

**Step 10 –** Restart the Password Reset service. If the service does not start, then check the
database connection options and the SQL Server login, user, and server roles configured earlier. You
can change the database back to SQL Server Compact while you troubleshoot the issue.

### Other Tasks

Open the Data Console and set your SQL Server connection options. You will need to enter a password
every time you open the Data Console if **SQL Server Authentication** is selected. The Data Console
executable and help file (APRDC.exe and CHM_NPR.chm) can be copied to the computers of other users
who will use the Data Console.

Delete the two SQL Server Compact database files (apr.sdf and aprlog.sdf) after cutting over to SQL
Server. These files will soon contain outdated information, and leaving them on the server is an
unnecessary security risk. Also ensure that the SQL Server database is backed up regularly.

# Using the Data Console

The Data Console allows you to view and export data collected by Password Reset. Click **Start** >
**Netwrix Password Reset** > **NPR Data Console** to open the console.

The Data Console has three tabs. The **Recent Activity** tab shows a chart of recent requests. The
chart is empty when Password Reset is first installed, but it will populate itself as the system is
used.

![using_the_data_console](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_the_data_console.webp)

The bars in the chart show how many successful enrollments, resets, unlocks, and changes occurred
every day. You can click the bars to see a filtered view of the events for that day. For example,
you could click the blue bar on 2/19/2015 to see all the password resets for that day.

![using_the_data_console_1_1393x772](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_the_data_console_1_1393x772.webp)

The resulting view shows only the 15 successful password resets on 2/19/2015. These are shown in the
**Audit Log** tab. You can create your own filter to find events in this tab. See the
[Custom Filters](/docs/passwordpolicyenforcer/10.2/password-reset/data-management.md#custom-filters)
topic for additional information. You can drag a column's header to rearrange the columns, or click
a column header to sort the records.

The **Audit Log** tab has nine columns:

- Type — Event type (Success or Failure)
- Date — Event date
- Time — Event time
- Source — Event source (Reset, Unlock, etc.)
- User — User's Active Directory user logon name
- Domain — User's Active Directory domain
- Event — A description of the event
- Source IP — The request's source IP address
- Source User — The request's source username (blank if anonymous access is enabled)

The **Users** tab contains Information about each user. All users are shown by default, but you can
create filters to find specific users.

![using_the_data_console_2_1317x725](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/using_the_data_console_2_1317x725.webp)

The **Users** tab has seven columns:

- User — User's Active Directory user logon name
- Domain — User's Active Directory domain
- E-mail — E-mail address entered during enrollment
- Last Enroll — Date and time of last successful enroll
- Last Reset — Date and time of last successful password reset
- Last Unlock — Date and time of last successful account unlock
- Last Change — Date and time of last successful password change

**NOTE:** The Data Console does not automatically display new information as it is added to the
database. Press F5 to refresh the view.

# Working with the Database

The NPR Server stores user and event information in a database. The default database is Microsoft
SQL Server Compact, an embedded version of SQL Server. The benefits of using SQL Server Compact
include:

- No manual installation or configuration required.
- No maintenance apart from database. See the [Backing up the Database](#backing-up-the-database)
  topic for additional information.
- Fast and lightweight.
- Free to use.

Despite these benefits, there are some disadvantages to using an embedded database. The benefits of
using SQL Server include:

- Remote access to the database from the Data Console and other applications.
- Improved availability if SQL Server is configured for high availability.
- Increased security.

See solutions to these disadvantages in the
[Moving to SQL Server](/docs/passwordpolicyenforcer/10.2/password-reset/data-management.md)
topic.

## Backing up the Database

The database should be backed up regularly. The instructions below are for a SQL Server Compact
database. If using SQL Server, then use your backup software to backup the database.

Follow the steps below for the recommended backup procedure.

**Step 1 –** Close the **Data Console** if it is open.

**Step 2 –** Stop

**Step 3 –** Copy the database files to a local or network disk.

**Step 4 –** Start the **Netwrix Password Reset** service.

**Step 5 –** Copy the database files to another device.

The database files (apr.sdf and aprlog.sdf) are in the Password Reset Server's installation folder
by default, but the location is configurable. The following commands create copies of the files with
a .bak extension. Copy the .bak files to another device, and run the backup script daily.

net stop "Netwrix Password Reset"

copy /Y "c:\program files\netwrix password reset\apr.sdf" "c:\program files\netwrix password
reset\apr.bak"

copy /Y "c:\program files\netwrix password reset\aprlog.sdf" "c:\program files\netwrix password
reset\aprlog.bak"

net start "Netwrix Password Reset"

**NOTE:** Change the paths above if the database files are in a different folder. See the
[Database](/docs/passwordpolicyenforcer/10.2/password-reset/configuration.md#database)
topic for more information.

**Restoring database from backup**

Follow the steps below to restore the database files from a backup.

**Step 1 –** Restore apr.bak and aprlog.bak from the backup device.

**Step 2 –** Close the Data Console if it is open.

**Step 3 –** Stop .

**Step 4 –** Copy apr.bak over apr.sdf, and aprlog.bak over aprlog.sdf.

**Step 5 –** Start .

**CAUTION:** apr.sdf contains hashes of the user answers. The hashes are salted and encrypted to
protect them from attack, but you should still ensure that this file and all backup copies are
stored securely.
