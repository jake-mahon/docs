# Moving to SQL Server

Moving to SQL Server

# Moving to SQL Server

Some planning is needed before moving the database to SQL Server. A trial run on a lab network is recommended. You can run the Data Copy wizard more than once if you cannot complete the move on the first attempt. A move back to SQL Server Compact is also possible.

### Create the Database

Your database administrator needs to set up the SQL Server database. The instructions below are an overview of the procedure, they are not step-by-step instructions. NPR V3.30 has been tested with SQL Server 2012 to 2019.

Follow the instructions below for an overview of the procedure.

__Step 1 –__ Create an SQL Server database.

__Step 2 –__ Create an SQL Server login for the Password Reset service account, and configure it for Windows authentication. To identify the service account, open services.msc, double-click the Password Reset service, and then click the Log On tab. Password Reset logs on to SQL Server with this account.

![working_with_the_database](/img/product_docs/passwordpolicyenforcer/passwordreset/administration/working_with_the_database.png)

__Step 3 –__ Create an SQL Server user, and map it to the service account login.

__Step 4 –__ Add the SQL Server user to the db\_datareader, db\_datawriter, and db\_ddladmin server roles for the database.

Your database administrator also needs to grant access to the users that will use the Data Console. These users only need to be added to the db\_datareader server role, and they can be denied access to the VerificationCode and EnrollRecord columns in the User table. The user running the Data Copy wizard also needs to be added to the db\_datawriter and db\_ddladmin server roles.

Additional permissions can be set for users of the Data Console after the tables are created. Grant the DELETE privilege on the User table to users who are allowed to delete user records. Deny all privileges on the VerificationCode and EnrollRecord columns in the User table as they are not used by the Data Console.

### Create the Tables and Copy the Data

The Data Copy wizard creates the database tables and copies the data to SQL Server. You must run the wizard even if the SQL Server Compact database is empty. Data in the destination database is deleted before it is copied from the source database.

Follow the steps below to create the tables and copy the data.

__Step 1 –__ Open the Configuration Console.

__Step 2 –__ Click the __General__ tab.

__Step 3 –__ Click __Copy Data...__ to open the Data Copy wizard.

__Step 4 –__ Click __Copy from SQL Compact to SQL Server__.

__Step 5 –__ Check the path to the SQL Server Compact database files. If the default path is incorrect, then click __Browse...__, choose a path, and then click __OK__.

__Step 6 –__ Click __Next__.

__Step 7 –__ Set the SQL Server connection settings for the Data Copy wizard. You can set different connection settings for the service account later. The __Username__ and __Password__ are only needed if __SQL Server Authentication__ is selected. The user must be in the db\_datareader, db\_datawriter, and db\_ddladmin SQL Server roles. __Encrypt connection__ should be selected to protect user information, and __Trust server certificate__ must be selected if SQL Server is using a self-signed certificate. SQL Server uses a self-signed certificate if a trusted certificate is not installed. The SQL Server Native Client must be installed if __Trust server certificate__ is selected.

![working_with_the_database_1](/img/product_docs/passwordpolicyenforcer/passwordreset/administration/working_with_the_database_1.png)

__Step 8 –__ Click __Next__.

__Step 9 –__ Check the summary information, and then click __Start__.

__Step 10 –__ Wait for the wizard to finish, and then click __Close__.

### Configure Netwrix Password Reset to Connect to SQL Server

Configure Password Reset to connect to SQL Server immediately after copying the data. If the cutover is delayed, then run the Data Copy wizard again to update the SQL Server database with the latest data. To configure Password Reset to connect to SQL Server:

__Step 1 –__ Open the Configuration Console.

__Step 2 –__ Click the __General__ tab.

__Step 3 –__ Click __Change...__

__Step 4 –__ Select the __SQL Server__ option.

__Step 5 –__ Type the server name in the __Server__ text box. Use ```[server]\[instance]``` to connect to a named instance.

__Step 6 –__ Type the database name in the __Database__ text box.

__Step 7 –__ Select the __Encrypt connection__ option to encrypt the connection to SQL Server. This option should be selected to protect user information.

__Step 8 –__ Select the __Trust server certificate__ option if SQL Server is using a self-signed certificate. SQL Server uses a self-signed certificate if a trusted certificate is not installed. Password Reset cannot connect to SQL Server with a self-signed certificate if this option is not selected. The SQL Server Native Client must be installed if __Trust server certificate__ is selected.

__Step 9 –__ Click __OK__, and then click __Apply__.

__Step 10 –__ Restart the Password Reset service. If the service does not start, then check the database connection options and the SQL Server login, user, and server roles configured earlier. You can change the database back to SQL Server Compact while you troubleshoot the issue.

### Other Tasks

Open the Data Console and set your SQL Server connection options. You will need to enter a password every time you open the Data Console if __SQL Server Authentication__ is selected. The Data Console executable and help file (APRDC.exe and CHM\_NPR.chm) can be copied to the computers of other users who will use the Data Console.

Delete the two SQL Server Compact database files (apr.sdf and aprlog.sdf) after cutting over to SQL Server. These files will soon contain outdated information, and leaving them on the server is an unnecessary security risk. Also ensure that the SQL Server database is backed up regularly.

[Open topic with navigation](/docs/default.md#open-topic-with-navigation)
