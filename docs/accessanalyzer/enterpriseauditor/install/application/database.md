# Access Analyzer Database

The Access Analyzer database is dynamic in nature. There are a handful of required system tables which are created at installation time or when individual features are used the first time. All other data tables in the Access Analyzer database are created and bound to individual jobs which are added to the Access Analyzer Console. As jobs are created and modified, corresponding tables are created and modified in the database. A job can generate one or more tables.

The structure and schema of each data table is controlled by the Access Analyzer data collector used to collect data and write results to the table. There is a one-to-one relationship between a task created within a Access Analyzer job and the table to which the task writes results. Creating tasks or adding and removing properties within a task modifies the schema of the table on subsequent execution of the job.

Access Analyzer offers users the ability to modify its preconfigured jobs or create custom jobs and tasks as needed. Therefore, precise schema information for data tables cannot be predicted, restricted, or locked down.

## Database Permissions

The account configured in the storage profile to be used by Access Analyzer to access the database should have the necessary rights to Add, Alter, Create, Drop, Select, and Update. These rights are critical to normal Access Analyzer operations and functionality.

___RECOMMENDED:___ The account used by Access Analyzer should have database owner (DBO) level access to the database.

If database owner rights cannot be obtained, the following SQL script can be executed by a database administrator (DBA) against the Access Analyzer database to grant the necessary permissions to the appropriate users (replacing `<SA User ID>` and `<SA Database>` with the appropriate values):

```sql
USE [master]
GRANT VIEW ANY DEFINITION TO [<SA User ID>]  
GO  
USE [<SA Database>]  
GO  
EXEC sp_addrolemember 'db_datareader', '<SA User ID>'  
GO  
EXEC sp_addrolemember 'db_datawriter', '<SA User ID>'  
GO  
GRANT CREATE TABLE TO [<SA User ID>]  
GO  
GRANT CREATE VIEW TO [<SA User ID>]  
GO  
GRANT CREATE PROCEDURE TO [<SA User ID>]  
GO  
GRANT CREATE FUNCTION TO [<SA User ID>]  
GO  
GRANT CREATE TYPE TO [<SA User ID>]  
GO  
GRANT REFERENCES ON SCHEMA::dbo TO [<SA User ID>]  
GO  
GRANT ALTER ON SCHEMA::dbo TO [<SA User ID>]  
GO  
GRANT EXECUTE ON SCHEMA::dbo TO [<SA User ID>]  
GO  
GRANT INSERT ON SCHEMA::dbo TO [<SA User ID>]  
GO  
GRANT UPDATE ON SCHEMA::dbo TO [<SA User ID>]  
GO  
Alter User [<SA User ID>] with DEFAULT_SCHEMA = dbo
```

## Database Sizing

SQL Server storage considerations vary. As Access Analyzer is a highly customizable auditing platform, variables such as query scope, the number of hosts, frequency, historical retention, and reporting needs are a few of the factors which affect the database resource consumption by Access Analyzer.

- Query Scope – Amount of data configured to be returned from each query (queries are dynamic and can be configured to return one row per host or tens of thousands)
- Number of Hosts – Number of hosts targeted for auditing objectives
- Frequency – How often jobs are run
- Historical Retention – Amount of collected data to be retained in source data tables based on a user-configured time frame
- Reporting Needs – Anticipated data needed to generate reports

Recommended SQL Server database sizes are provided for specific solutions in the [Requirements](/docs/accessanalyzer/enterpriseauditor/requirements/overview.md) topics. These recommendations are based on environmental factors, the number of target objects within an environment (users, hosts, mailboxes, etc.), and the applicable factors listed above for the specific solution.

### Customer Examples of Database Sizing

The overall database size is ultimately governed by an organization’s auditing objectives. The examples below provide a glimpse into how these objectives combine with the applicable factors above to impact the Access Analyzer database resource consumption.

- Example from an Active Directory Solution Customer
  - An Active Directory (AD) customer intends to collect AD User/Group/Membership information and run the standard Active Directory Solution within their environment. In an environment of 50,000 Users and 200,000 Groups, the database can be 50 GB in size. The expansion of group information can also require 20 GB of TEMPDB space.
- Example from a Data Access Governance Solution Customer
  - A Data Access Governance customer using the File System Solution intends to collect and report on file system permissions, and optionally to profile size, age, extensions, and ownership of files in the organization. The database for a typical mid-sized organization could be anywhere from 60 GB to upward of 240 GB, depending on the number of folders scanned, which can vary greatly in depth and width. Electing to collect content-related information will also impact database size.
- Another Example from a Data Access Governance Solution Customer
  - A Data Access Governance customer using the File System Solution intends to inventory 1.3 PB of files spread across 600+ standalone (non-clustered) Windows file servers, collecting information on file permissions and ages (and possibly, ad hoc, information on file system activity) with an overall plan to identify stale data, consolidate active data on a subset of the organization’s file system infrastructure, and to move that active data to a cloud-based platform like SharePoint Online. Activity monitoring (FSAC) is to be used ad hoc against open shares to profile resource ownership and also to validate the “staleness” of certain resources. The database sizing for a project of this scope could be up to 750 GB for the database, 240 GB for the transaction log, and 380 GB of TEMPDB space.
- Example from an Exchange Solution Customer
  - An Exchange customer only intends to collect Mail-Flow Metrics for 100,000 Mailboxes from 10 HUB Servers in the organization. However, the customer would like to keep six months of history on User to User Activity sent internally and externally, as well as one year of Server and User Volume Traffic. This database can grow to around 320 GB.
- Example from a Windows Solution Customer
  - A Windows customer intends to audit and retain Success and Failed login events for five member servers retaining the data for twelve months within their environment. The database can be 100 GB in size.

## Securing the Access Analyzer Database

The typical database configuration is to have __sysadmin Server Role__ assigned to the ID used to connect to the SQL instance. It will allow full control over the instance where the Access Analyzer database resides. This configuration is chosen because Access Analyzer requires some interaction with the master database in order to install and configure the initial Access Analyzer database. When it is necessary to secure the Access Analyzer database, the following steps should be followed to achieve the minimum SQL security levels without breaking core Access Analyzer functionality.

### Database Creation & First Level of Security

Use SQL Server Management Studio to create the Access Analyzer database and configure the settings for the server roles and user mappings.

![SQL Server Management Studio create New Database](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/createnewdatabase.webp)

__Step 1 –__ Create a new database for use with Access Analyzer. Right-click on the __Databases__ node and choose __New Database__.

![SQL Server Management Studio New Database window](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/newdatabase.webp)

__Step 2 –__ Set the __Database name__. Set any other desired data files configuration per company standards. Click __OK__ on the New Database window.

___RECOMMENDED:___ Enter Access Analyzer as the Database name.

![SQL Server Management Studio create New Login](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/newlogin.webp)

__Step 3 –__ Create a new SQL Login account by right-clicking on the __Security__ > __Logins__ folder and selecting __New Login__.

__Step 4 –__ Choose the authentication mode as the login type for use with the newly created Access Analyzer database. The available options are Windows authentication and SQL Server authentication.

![SQL Server Management Studio new login with Windows authentication](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/loginwindows.webp)

- If __Windows authentication__ is desired, then click __Search__ and select the desired Windows account, which has been set up for use with Access Analyzer.

![SQL Server Management Studio new login with SQL Server authentication](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/loginsql.webp)

- ___RECOMMENDED:___ If __SQL Server authentication__ is desired, use a login name called Access Analyzer.

__NOTE:__ Set the __Default Database__ as Access Analyzer (or the desired Access Analyzer database) and choose English as the __Default Language__.

![SQL Server Management Studio New Login User Mapping](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/loginusermapping.webp)

__Step 5 –__ Navigate to the __User Mapping__ menu, select the Access Analyzer (or the desired Access Analyzer database) database, and set the __Default Schema__ to __DBO__.

__Step 6 –__ In the __Database role membership__ section, set the role to __db_owner__. Click __OK__ to save new user configuration information and continue on to configure the Access Analyzer Console.

__Step 7 –__ Configure the Access Analyzer Console to access the assigned database using the newly secured login account.

__NOTE:__ This step requires the completion of the Access Analyzer installation. See the [Access Analyzer Core Installation](/docs/accessanalyzer/enterpriseauditor/install/application/wizard.md) topic for instructions.

![Storage Profile configuration page](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/storageprofile.webp)

__Step 8 –__ Launch Access Analyzer and navigate to __Settings__ > __Storage__.

- Select the Storage Profile and enter the name of the SQL Server in the __Server name__ field and __Instance Name__, if applicable.
- Enter the name of the Access Analyzer database in the __Use existing database__ field.
- Choose the authentication method which matches the secure login that was created in Step 4, either __Windows authentication__ or __SQL Server authentication__. If using SQL Server authentication, enter the __User name__ and __Password__.

![Connection report window](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/connectionreport.webp)

- Click __Apply__ and a Connection report window will open. Verify that the connection and test table drop were performed successfully.
- Click __Close__ on the Connection report window and then __Save__ the new Storage Profile.

![Change storage profile dialog](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/changestorageprofile.webp)

__NOTE:__ If previously connected to another database which already had the Access Analyzer DB schema applied, then a prompt should appear to merge the host management data. Choose the appropriate options and then click __OK__ to migrate data.

__Step 9 –__ Make sure to close and re-open the Access Analyzer Console before continuing to configure or use Access Analyzer if a new database Storage Profile was chosen as the default.

The __blue arrow__ signifies the default profile was changed but does not take effect until the required restart of the Access Analyzer Console.

See the [Access Analyzer Initial Configuration](/docs/accessanalyzer/enterpriseauditor/install/application/firstlaunch.md) topic to perform these steps during the initial configuration process after installation.

### Second Level of Security

For second level security of the SQL Server database, use the script provided in the [Database Permissions](#database-permissions) section.
