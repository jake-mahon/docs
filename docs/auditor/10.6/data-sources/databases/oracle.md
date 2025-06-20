# Configure Oracle Database for Auditing

This topic explains how to configure Oracle Database for the following versions of the Oracle
Database Software:

- [Configure Oracle Database 12c, 18c, 19c for Auditing](#configure-oracle-database-12c-18c-19c-for-auditing)
- [Configure Oracle Database 11g for Auditing](#configure-oracle-database-11g-for-auditing)

## Configure Oracle Database 12c, 18c, 19c for Auditing

The following auditing modes are available for Oracle Database 12c, 18c, 19c:

- Unified Auditing—Recommended. See the following Oracle technical article for detailed instructions
  on how to enable Unified Auditing:
  [Enabling Unified Auditing](http://www.oracle.com/webfolder/technetwork/tutorials/obe/db/12c/r1/security/sec_uni_audit/sec_uni_audit.html).

  Perform the following steps to configure Unified Auditing on your Oracle Database:

  1. Create and enable an audit policy to audit specific parameters across your Oracle Database.

     After an audit policy has been enabled or disabled, Netwrix Auditor starts collecting data
     after a successful logon session.

  2. If needed, create and enable specific audit policies to audit successful data access and
     changes, user actions, component actions, etc.

- Mixed Mode—Default auditing in a newly installed database. It enables both traditional and the new
  **Unified Auditing** facilities. Netwrix recommends using **Unified Auditing** mode if you do not
  have any trail audit facilities in your infrastructure.

  The product does not log any errors on these events to the Netwrix Auditor System Health log.

To configure Oracle Database 12c, 18c, 19c Unified Auditing

1. On the computer where your database is deployed, run the sqlplus tool.
2. Connect to your Oracle Database—use Oracle account with the `SYSDBA` privilege. For example:

   `OracleUser as sysdba`

   Enter your password.

3. Create and enable audit policies. You can set them to audit the following:

   - Configuration changes
   - Successful and failed data access and changes
   - `Oracle Data Pump`, `Oracle Recovery Manager (RMAN)` and `Oracle SQL*Loader Direct Path Load`
     components | To monitor... | Execute the command... | | --- | --- | | Configuration changes
     | - Create an audit policy (e.g., `nwx_actions_pol`) for any user:
     `CREATE AUDIT POLICY nwx_actions_pol ACTIONS      CREATE TABLE,DROP TABLE,ALTER TABLE,GRANT,REVOKE,     CREATE VIEW,DROP VIEW,CREATE PROCEDURE,     ALTER PROCEDURE,RENAME,AUDIT,NOAUDIT,     ALTER DATABASE,ALTER USER,ALTER SYSTEM,     CREATE USER,CREATE ROLE,SET ROLE,DROP USER,     DROP ROLE,CREATE TRIGGER,ALTER TRIGGER,     DROP TRIGGER,CREATE PROFILE,DROP PROFILE,     ALTER PROFILE,DROP PROCEDURE,     CREATE MATERIALIZED VIEW,DROP MATERIALIZED VIEW,     ALTER ROLE,TRUNCATE TABLE,CREATE FUNCTION,     ALTER FUNCTION,DROP FUNCTION,CREATE PACKAGE,     ALTER PACKAGE,DROP PACKAGE,CREATE PACKAGE BODY,     ALTER PACKAGE BODY,DROP PACKAGE BODY,LOGON,LOGOFF,     CREATE DIRECTORY,DROP DIRECTORY,CREATE JAVA,     ALTER JAVA,DROP JAVA,PURGE TABLE,     CREATE PLUGGABLE DATABASE,ALTER PLUGGABLE DATABASE,     DROP PLUGGABLE DATABASE,CREATE AUDIT POLICY,     ALTER AUDIT POLICY,DROP AUDIT POLICY,     CREATE FLASHBACK ARCHIVE,ALTER FLASHBACK ARCHIVE,     DROP FLASHBACK ARCHIVE;` -
     Enable the audit policy: `AUDIT POLICY nwx_actions_pol;` To disable audit policy, use the
     following command: `NOAUDIT POLICY nwx_actions_pol;` | | Data access and changes (successful
     and failed) | - Create the audit policy (e.g., `nwx_actions_obj_pol`):
     `CREATE AUDIT POLICY nwx_actions_obj_pol ACTIONS      DELETE on hr.employees, INSERT on hr.employees,      UPDATE on hr.employees, SELECT on hr.employees, FLASHBACK on hr.employees CONTAINER = CURRENT;` -
     Enable the audit policy (e.g., `nwx_actions_obj_pol`): `AUDIT POLICY nwx_actions_obj_pol;` | |
     Component actions: `Oracle Data Pump`, `Oracle Recovery Manager`, and
     `Oracle SQL*Loader Direct Path Load` | - Create the audit policies (e.g.,
     `nwx_sqlloader_dp_pol`, etc.): No special configuration required to audit RMAN events.
     `CREATE AUDIT POLICY nwx_datapump_exp_pol ACTIONS COMPONENT=DATAPUMP EXPORT;`
     `CREATE AUDIT POLICY nwx_datapump_imp_pol ACTIONS COMPONENT=DATAPUMP IMPORT;`
     `CREATE AUDIT POLICY nwx_sqlloader_dp_pol ACTIONS COMPONENT=DIRECT_LOAD LOAD;` - Enable these
     policies: `AUDIT POLICY nwx_datapump_exp_pol;` `AUDIT POLICY nwx_datapump_imp_pol;`
     `AUDIT POLICY nwx_sqlloader_dp_pol;` |

4. If necessary, enable more granular audit policies.

   | To...                                                                             | Execute the command...                                                  |
   | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
   | Apply audit policy to selected users                                              | `AUDIT POLICY nwx_actions_pol BY SYS, SYSTEM, <user_name>; `            |
   | Exclude user actions from being audited (e.g., exclude failed `Operator` actions) | `AUDIT POLICY nwx_actions_pol EXCEPT Operator WHENEVER NOT SUCCESSFUL;` |
   | Audit successful actions of selected user (e.g., `Operator`)                      | `AUDIT POLICY nwx_actions_pol BY Operator WHENEVER SUCCESSFUL;`         |

For additional information on `CREATE AUDIT POLICY` and `AUDIT POLICY` parameters, see the following
Oracle Database administration documents:

- `[CREATE AUDIT POLICY](https://docs.oracle.com/database/121/SQLRF/statements_5001.htm#create-audit-policy)`
- `[AUDIT POLICY](http://docs.oracle.com/database/121/SQLRF/statements_4008.htm#audit-policy)`

Currently, Netwrix Auditor checks audit settings for Unified Auditing when accomptability is enabled
for `ACTIONS`. If any of your current settings conflict with the audit configuration required for
Netwrix Auditor, these conflicts will be listed in the Netwrix Auditor System Health event log.

Also, remember to do the following:

- Configure Data Collecting Account as described in
  [Permissions for Oracle Database Auditing](/docs/auditor/10.6/data-sources/databases/oracle.md)
  topic.
- Configure ports as described in
  [Oracle Database Ports](/docs/auditor/10.6/reference/ports-and-protocols.md) topic.

**NOTE:** Traditional auditing is deprecated in Oracle Database 21c. Oracle recommends using Unified
Auditing, which enables selective and more effective auditing within Oracle Database. See the
[Oracle website](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlrf/AUDIT-Traditional-Auditing.html#oracle-website)
for more information.

## Configure Oracle Database 11g for Auditing

This section explains how to configure **Standard Auditing** on your Oracle Database 11g, preparing
for monitoring with the product.

Starting with version 10.5, Auditor provides limited support of Oracle Database 11g. See the
[Considerations for Oracle Database 11g](/docs/auditor/10.6/data-sources/databases/oracle.md#considerations-for-oracle-database-11g)
topic for additional information.

Verify that Oracle Data Provider for .NET and Oracle Instant Client are installed and properly
configured on the computer where Auditor Server is installed. The product does not provide any
special notification for that.

Follow the steps to configure **Standard Auditing** on your Oracle Database 11g:

**Step 1 –** Select the audit trail to store audit records. Oracle Database has the following
options:

- **Database audit trail**— Set by default.
- **XML audit trail**— Recommended.
- **OS files**—Not supported by current version of Netwrix Auditor.

**Step 2 –** Enable auditing of Oracle Database changes, using the corresponding command.

### Store Oracle Audit Records

Follow the steps to select Audit Trail to store Oracle Audit Records:

**Step 1 –** On the computer where your database is deployed, run the sqlplus tool.

**Step 2 –** Connect to your Oracle Database using Oracle account with the `SYSDBA` privilege. For
example:

`OracleUser as sysdba`

**Step 3 –** Enter your password.

Depending on where you want to store audit records, execute the required command.

| Store to...                                                                                                                                                                                                                      | Execute...                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Store audit records to XML audit trail (recommended). Use this audit trail if you want Netwrix Auditor to report on actions performed by users with SYSDBA and SYSOPER privileges. Otherwise, these actions will not be audited. | `ALTER SYSTEM SET audit_trail=XML SCOPE=SPFILE;` If you want to enable auditing of actions performed by SYS user and by users connecting with SYSDBA and SYSOPER privileges, execute: `ALTER SYSTEM SET audit_sys_operations=TRUE SCOPE=SPFILE;` |
| Database audit trail (default setting) In this case, actions performed by user SYS and users connecting with SYSDBA and SYSOPER privileges will not be audited.                                                                  | `ALTER SYSTEM SET audit_trail=DB SCOPE=SPFILE;`                                                                                                                                                                                                  |
| Store audit records to XML or database audit trail and keep full text of SQL-specific query in audit records. Only ALTER actions will be reported.                                                                               | For database audit trail: `ALTER SYSTEM SET audit_trail=DB, EXTENDED SCOPE=SPFILE;` For XML audit trail: ` ALTER SYSTEM SET audit_trail=XML, EXTENDED SCOPE=SPFILE;`                                                                             |

**Step 4 –** If you turned auditing on or off, you will need to restart the database. For that, run
the following:

`SHUTDOWN IMMEDIATE`

`STARTUP`

If you only changed auditing settings, database restart is not required.

If you are using Oracle Real Application Clusters (RAC), see the
[Starting and Stopping Instances and Oracle RAC Databases](https://docs.oracle.com/cd/E11882_01/rac.112/e41960/admin.htm#starting-and-stopping-instances-and-oracle-rac-databases)
section in Real Application Clusters Administration and Deployment Guide for additional information
on restarting your instances.

### Enable Auditing of Oracle Database Changes

Follow the steps to enable auditing of Oracle Database changes:

**Step 1 –** On the computer where your database is deployed, run the sqlplus tool.

**Step 2 –** Connect to your Oracle Database—use Oracle account with the `SYSDBA` privilege. For
example:

`OracleUser as sysdba`

**Step 3 –** Enter your password.

**Step 4 –** Depending on your monitoring requirements, enable auditing of the database parameters
with the related command.

| To monitor for...                                                                                                                             | Execute...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Configuration changes                                                                                                                         | - For any user: `AUDIT ALTER SYSTEM,SYSTEM AUDIT,SESSION,TABLE,USER,   VIEW,ROLE,PROCEDURE,TRIGGER,PROFILE,DIRECTORY,   MATERIALIZED VIEW,SYSTEM GRANT,NOT EXISTS,   ALTER TABLE,GRANT DIRECTORY,GRANT PROCEDURE,   GRANT TABLE;` `AUDIT ALTER DATABASE, FLASHBACK ARCHIVE ADMINISTER;` If you want to disable configuration auditing, use the following commands: `NOAUDIT ALTER SYSTEM,SYSTEM AUDIT,SESSION,   TABLE,USER,VIEW,ROLE,PROCEDURE,TRIGGER,PROFILE,   DIRECTORY,MATERIALIZED VIEW,SYSTEM GRANT,   NOT EXISTS,ALTER TABLE,GRANT DIRECTORY,   GRANT PROCEDURE,GRANT TABLE;` `NOAUDIT ALTER DATABASE,   FLASHBACK ARCHIVE ADMINISTER;` |
| - For specific user: `AUDIT SYSTEM GRANT, SESSION, TABLE, PROCEDURE BY <USER_NAME>``````;` You can specify several users separated by commas. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Successful data access and changes                                                                                                            | `AUDIT SELECT,INSERT,DELETE,UPDATE,RENAME,    FLASHBACK ON <TABLE_NAME> BY ACCESS WHENEVER SUCCESSFUL;`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Failed data access and change                                                                                                                 | `AUDIT SELECT,INSERT,DELETE,UPDATE,RENAME,    FLASHBACK ON <TABLE_NAME>    BY ACCESS WHENEVER NOT SUCCESSFUL;`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Successful and failed data access and changes                                                                                                 | `AUDIT SELECT,INSERT,DELETE,UPDATE,RENAME,   FLASHBACK ON <TABLE_NAME>;`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

For additional information on `ALTER SYSTEM` and `AUDIT` parameters, see the following Oracle
database administration documents:

- `[AUDIT_TRAIL](https://docs.oracle.com/cd/E11882_01/server.112/e40402/initparams017.htm#audit_trail)`
- `[AUDIT](http://docs.oracle.com/cd/E11882_01/server.112/e41084/statements_4007.htm#audit)`

After an audit parameter has been enabled or disabled, Auditor will start collecting data after
successful logon session.

Also, remember to do the following:

- Configure Data Collecting Account. See the
  [Permissions for Oracle Database Auditing](/docs/auditor/10.6/data-sources/databases/oracle.md)
  topic for additional information.
- Configure ports. See the
  [Oracle Database Ports](/docs/auditor/10.6/reference/ports-and-protocols.md) topic
  for additional information about ports and protocols required for auditing.

# Configure Fine Grained Auditing

When configuring Fine Grained Auditing, you need to create an audit policy with required parameters
set. The section below explains how to create, disable and delete such audit policies.

Fine Grained audit policies can be configured for Oracle Database Enterprise Edition only. Keep in
mind that if you have Fine Grained policies configured, you will receive a permanent error in the
Netwrix Auditor System Health log because Netwrix Auditor cannot detect it. Use Unified and Standard
audit policies to keep track of data changes.

To configure Fine Grained Auditing:

Below is an example of Fine Grained audit policy that enables auditing of audit statements
`(INSERT, UPDATE, DELETE,` and `SELECT`) on table `hr.emp` to audit any query that accesses the
`salary` column of the employee records that belong to `sales` department.

| To...                   | Execute the following command...                                                                                                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| To create audit policy  | `EXEC DBMS_FGA.ADD_POLICY(object_schema => 'hr', object_name => 'emp', policy_name => 'chk_hr_emp', audit_condition => 'dept = ''SALES'' ', audit_column => 'salary', statement_types => 'INSERT,UPDATE,DELETE,SELECT');` |
| To disable audit policy | `EXEC DBMS_FGA.DISABLE_POLICY(object_schema => 'hr', object_name =>'emp', policy_name => 'chk_hr_emp');`                                                                                                                  |
| To delete audit policy  | `EXEC DBMS_FGA.DROP_POLICY(object_schema => 'hr', object_name =>'emp', policy_name => 'chk_hr_emp');`                                                                                                                     |

Refer to Oracle documentation for additional information on
[Working with Oracle Fine Grained Auditing](https://docs.oracle.com/cd/F28299_01/pt857pbr3/eng/pt/tadm/task_WorkingwithOracleFineGrainedAuditing-4f7f7a.html?pli=ul_d90e208_tadm#working-with-oracle-fine-grained-auditing).

# Oracle Database

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HirCAE.html)
knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to
  automatically configure audit in the target environment, your current audit settings will be
  checked on each data collection and adjusted if necessary.
- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

  - On the Oracle server, configure the required settings described below.
  - On the Auditor console computer, verify that Oracle Data Provider for .NET and Oracle Instant
    Client are installed and properly configured. See the
    [Permissions for Oracle Database Auditing](/docs/auditor/10.6/data-sources/databases/oracle.md#for-oracle-database-auditing)
    topic of system requirements.

Ensure that you have met all software requirements on the Oracle Database side. See the
[Software Requirements](/docs/auditor/10.6/getting-started/requirements.md) topic for
additional information.

Before you start monitoring your Oracle Database with Netwrix Auditor, you should configure it to
provide audit trails. Depending on your current database version and edition, Oracle supports
different auditing types:

| Auditing type                           | Oracle version                                                                          | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unified Auditing                        | Oracle Database 23c, 21c, 19c, 18c, 12c                                                 | Consolidates all auditing into a single repository and view. This provides a two-fold simplification: audit data can now be found in a single location and all audit data is in a single format. See [Configure Oracle Database for Auditing](/docs/auditor/10.6/data-sources/databases/oracle.md) topic for more information.                                                                                                                                                                                                                                                                                   |
| Fine Grained Auditing                   | Oracle Database 23c, 21c, 19c, 18c, 12c, 11g Available for **Enterprise Edition** only. | Supports auditing of actions associated with columns in application tables — along with conditions necessary for an audit record to be generated. Helps to focus on security-relevant columns and rows, ignoring areas that are less important. See [Configure Fine Grained Auditing](/docs/auditor/10.6/data-sources/databases/oracle.md) topic for more information.                                                                                                                                                                                                                                           |
| Standard Auditing (trail auditing mode) | Oracle Database 11g                                                                     | See topic for more information. Use initialization parameters and the `AUDIT` and `NOAUDIT` SQL statements to audit: - SQL statements - privileges - schema objects - network and multitier activities See [Oracle documentation](https://docs.oracle.com/cd/E11882_01/server.112/e10575/tdpsg_auditing.htm#oracle-documentation) for more information. Starting with version 10.5, Netwrix Auditor provides limited support of Oracle Database 11g and trail auditing mode, in particular: Netwrix Auditor client UI does not display any warnings and / or errors related to Standard Auditing mode operation. |

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HirCAE.html)
knowledge base article for additional information.

## Considerations for Oracle Database 11g

Starting with version 9.95, Netwrix Auditor for Oracle Database is focused on versions 12c and
above. It means that Oracle Database 11g users will not be able to benefit from latest features and
improvements of the product. Oracle Database 11g users should also consider its support expiration
dates set by the vendor. So, when planning your Netwrix Auditor deployment, consider the following:

- Several limitations apply to Oracle 11g support in Netwrix Auditor 9.96:

  - Oracle wallets are not supported
  - Lightweight drivers for Oracle Instant Client are not supported
  - Auditor client UI does not display any warnings and / or errors regarding to trail audit mode
    operation

- If you are using Oracle Database 11g and have performed seamless upgrade to the latest version of
  Auditor, the audit data collection will operate properly. However, consider and keep in mind
  Oracle Database 11g support expiration dates.

If you are using Oracle Database 12c or later, make sure you have Unified auditing mode enabled.
Otherwise, Netwrix Auditor may not operate properly. See the
[Migrate to Unified Audit](/docs/auditor/10.6/data-sources/databases/oracle.md)
topic for additional information.

See the [Software Requirements](/docs/auditor/10.6/getting-started/requirements.md) topic
for additional information.

## Configuration

If you are using Oracle Wallet to connect to your database, see the
[Create and Configure Oracle Wallet](/docs/auditor/10.6/data-sources/databases/oracle.md)
topic for configuration details.

Oracle Wallet is not supported for Oracle 11g. If you are unsure of your audit settings, refer to
the
[Verify Your Oracle Database Audit Settings](/docs/auditor/10.6/data-sources/databases/oracle.md)

Follow the steps for proper configuration.

**Step 1 –** Configure Data Collecting Account, as described in the
[Permissions for Oracle Database Auditing](/docs/auditor/10.6/data-sources/databases/oracle.md)
topic.

**Step 2 –** Configure required protocols and ports, as described in the
[Oracle Database Ports](/docs/auditor/10.6/reference/ports-and-protocols.md) topic.

## Oracle Database objects

Review a full list of object types Netwrix Auditor can collect on Oracle Database. If you deployed
your Oracle Database in a cluster mode (Oracle Real Application Cluster), a host name also will be
reported.

Details marked with asterisk (\*) are reported for Oracle Database 11g only.

Details marked with asterisk (\*\*) are reported for Oracle Database 12c only.

Oracle Object modification under Privileges and object rename under Rename are reported without
Object type (“Not available” is displayed).

Oracle Database startup under System Settings is reported without Workstation (“Not available” is
displayed).

| Object type                                                                                                                                                                                                                                                                                                                                                                                            | Actions                                                                                                                                | Details                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Directories                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - Directory                                                                                                                                                                                                                                                                                                                                                                                            | - Added / Add (Failed attempt) - Removed / Remove (Failed attempt)                                                                     | - Cause (for failed attempts) - Container name\*\* - Database User - Program name / Database session requester\*\* - Privilege for action - Session ID - Object schema                                                                                                         |
| Executable objects                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - Procedure - Function - Package - Package body - Java                                                                                                                                                                                                                                                                                                                                                 | - Added / Add (Failed attempt) - Modified / Modify (Failed attempt) - Removed / Remove (Failed attempt)                                | - Cause (for failed attempts) - Container name\*\* - Database User - Privilege for action - Program name / Database session requester\*\* - Session ID - Unified policy name\*\*                                                                                               |
| For Oracle 11g database Modified / Modify (Failed attempt) events will not be monitored for the following objects: _Procedure, Function, Package, Package body_ since native audit of these events is not supported. See the [Database SQL Language Reference](https://docs.oracle.com/cd/B28359_01/server.111/b28286/statements_4007.htm#database-sql-language-reference) for additional information. |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| Logons                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - Logon                                                                                                                                                                                                                                                                                                                                                                                                | - Successful logon / Failed logon - Logoff                                                                                             | - Cause (for failed attempts) - Client IP (only for logon events) - Container name\*\* - Database User - Privilege for action - Program name / Database session requester\*\* - Session ID - Object schema - Unified policy name\*\*                                           |
| Materialized views                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - Materialized view                                                                                                                                                                                                                                                                                                                                                                                    | - Added / Failed Add - Removed / Failed Remove                                                                                         | - Cause (for failed attempts) - Container name\*\* - Database user - With option - Program name / Database session requester\*\* - Session ID - Object schema - Unified policy name\*\*                                                                                        |
| Privileges                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - Object                                                                                                                                                                                                                                                                                                                                                                                               | - Modified / Modify (Failed attempt)                                                                                                   | - Cause (for failed attempts) - Container name\*\* - Database user - With option - Privilege user - Program name / Database session requester\*\* - Session ID - Unified policy name\*\*                                                                                       |
| - Role                                                                                                                                                                                                                                                                                                                                                                                                 | - Added / Add (Failed attempt) - Modified / Modify (Failed attempt) - Removed / Remove (Failed attempt)                                | - Captured SQL statement - Cause (for failed attempts) - Container name\*\* - Database user - With option - Program name / Database session requester\*\* - Role name - Session ID - Unified policy name\*\*                                                                   |
| - Database                                                                                                                                                                                                                                                                                                                                                                                             | - Modified / Modify (Failed attempt)                                                                                                   | - Captured SQL statement - Cause (for failed attempts) - Container name\*\* - Database user - With option - Program name / Database session requester\*\* - Session ID - Unified policy name\*\*                                                                               |
| Profiles                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - Profile                                                                                                                                                                                                                                                                                                                                                                                              | - Added / Add (Failed attempt) - Modified / Modify (Failed attempt) - Removed / Remove (Failed attempt)                                | - Captured SQL statement - Cause (for failed attempts) - Container name\*\* - Database user - Privilege for action - Program name / Database session requester\*\* - Session ID - Unified policy name\*\*                                                                      |
| Rename                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - Object                                                                                                                                                                                                                                                                                                                                                                                               | - Renamed / Rename (Failed attempt)                                                                                                    | - Cause (for failed attempts) - Container name\*\* - Database user - New object name - With option - Privilege user - Session ID - Unified policy name\*\*                                                                                                                     |
| Roles                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - Role                                                                                                                                                                                                                                                                                                                                                                                                 | - Added / Add (Failed attempt) - Modified / Modify (Failed attempt) - Removed / Remove (Failed attempt)                                | - Captured SQL statement - Cause (for failed attempts) - Container name\*\* - Database user - Privilege for action - Program name / Database session requester\*\* - Session ID - Unified policy name\*\*                                                                      |
| Data                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - Data                                                                                                                                                                                                                                                                                                                                                                                                 | - Added / Add (Failed attempt) - Modified / Modify (Failed attempt) - Read / Read (Failed attempt) - Removed / Remove (Failed attempt) | - Cause (for failed attempts) - Container name\*\* - Database user - FGA policy name - Session ID                                                                                                                                                                              |
| System Settings                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - Audit Policy                                                                                                                                                                                                                                                                                                                                                                                         | - Added / Add (Failed attempt) - Modified / Modify (Failed attempt)                                                                    | - Captured SQL statement - Cause (for failed attempts) - Container name\*\* - Database user - With option - Program name / Database session requester\*\* - Session ID - Unified policy name\*\*                                                                               |
| - Database                                                                                                                                                                                                                                                                                                                                                                                             | - Modified / Modify (Failed attempt)                                                                                                   |                                                                                                                                                                                                                                                                                |
| Tables                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - Table                                                                                                                                                                                                                                                                                                                                                                                                | - Added / Add (Failed attempt) - Modified / Modify (Failed attempt) - Removed / Remove (Failed attempt)                                | - Captured SQL statement - Cause (for failed attempts) - Container name\*\* - Database user - Program name / Database session requester\*\* - Session ID - Object schema - Unified policy name                                                                                 |
| Triggers                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - Trigger                                                                                                                                                                                                                                                                                                                                                                                              | - Added / Add (Failed attempt) - Modified / Modify (Failed attempt) - Removed / Remove (Failed attempt)                                | - Captured SQL statement - Cause (for failed attempts) - Container name\*\* - Database user - With option - Program name / Database session requester\*\* - Referenced table - Referenced table schema - Session ID - Object schema - Triggered by\* - Unified policy name\*\* |
| Users                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - User                                                                                                                                                                                                                                                                                                                                                                                                 | - Added / Add (Failed attempt) - Modified / Modify (Failed attempt) - Removed / Remove (Failed attempt)                                | - Captured SQL statement - Cause (for failed attempts) - Container name\*\* - Database user - Privilege for action - Program name / Database session requester\*\* - Session ID - Unified policy name\*\*                                                                      |
| Views                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - View                                                                                                                                                                                                                                                                                                                                                                                                 | - Added / Add (Failed attempt) - Removed / Remove (Failed attempt)                                                                     | - Cause (for failed attempts) - Container name\*\* - Database user - With option - Program name / Database session requester\*\* - Session ID - Object schema - Unified policy name\*\*                                                                                        |
| Oracle Datapump                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - Datapump                                                                                                                                                                                                                                                                                                                                                                                             | - Read / Read (Failed attempt) - Modified / Modify (Failed attempt)                                                                    | - Cause (for failed attempts) - Container name\*\* - Database user - Datapump boolean parameters - Datapump text parameters - Program name / Database session requester\*\* - Session ID                                                                                       |
| Oracle Recovery Manager (RMAN)                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - RMAN                                                                                                                                                                                                                                                                                                                                                                                                 | - Added / Add (Failed attempt) - Modified / Modify (Failed attempt) - Read / Read (Failed attempt) - Removed / Remove (Failed attempt) | - Cause (for failed attempts) - Container name\*\* - Database user - Program name / Database session requester\*\* - RMAN operation                                                                                                                                            |
| Oracle SQL\*Loader Direct Path Load                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                        |                                                                                                                                                                                                                                                                                |
| - Direct Path Load API                                                                                                                                                                                                                                                                                                                                                                                 | - Modified / Modify (Failed attempt)                                                                                                   | - Cause (for failed attempts) Container name\*\* - Database user - Program name / Database session requester\*\* - Session ID                                                                                                                                                  |

# Permissions for Oracle Database Auditing

When creating a monitoring plan for your Oracle Database, you should specify the account that has
sufficient privileges to collect data from the database. At least, the following privileges are
required:

- CREATE SESSION — Allows an account to connect to a database.
- SELECT — Allows an account to retrieve data from one or more tables, views, etc.

Alternatively, you can assign the default administrator role to that account.

You can grant the required privileges to the existing account, or create a new one. Follow the
procedure described below.

Follow the steps to grant CREATE SESSION and SELECT privileges to the account.

**Step 1 –** On the computer where your database is deployed, run the sqlplus tool.

**Step 2 –** Connect to your Oracle Database.

**NOTE:** Use Oracle account with the `SYSDBA` privilege, for example:

`OracleUser as sysdba`

**Step 3 –** Enter the account password.

**Step 4 –** Decide on the account that will be used to access this database for audit data
collection. You can:

- Use the account that already exists

  - OR -

- Create a new account. To create a new account, use the following command::  
  `CREATE USER <account_name> IDENTIFIED BY PASSWORD;`

**Step 5 –** Grant `CREATE SESSION` system privilege to that account. For that, execute:  
`GRANT CREATE SESSION TO <account_name>;`

**Step 6 –** Grant `SELECT` privilege on the required object to that account. See the
[For Oracle Database Auditing](#for-oracle-database-auditing) topic for the detailed object list.
For that, execute: `GRANT SELECT ON <object> TO <account_name>;`  
For example:  
`GRANT SELECT ON aud$ TO OracleUser;`

CREATE SESSION and SELECT privileges now granted to the account.

Alternatively, you can grant the default administrator role to that account. For that, execute:  
`GRANT DBA TO <account_name>; `

## For Oracle Database Auditing

Before you start creating a monitoring plan to audit your Oracle Database, plan for the account that
will be used for data collection – it should meet the requirements listed below. Then you will
provide this account in the monitoring plan wizard.

1. The `CREATE SESSION` system privilege must be granted to the account used to connect to Oracle
   Database for data collection.
2. Depending on your Oracle Database version, the `SELECT` privilege on the certain objects must be
   granted to that account: | | | | --- | --- | | Oracle Database 12c, 18c, 19c | Grant `SELECT`
   privilege on the following objects: - `aud$ ` - `gv_$xml_audit_trail` - `dba_stmt_audit_opts` -
   `v_$parameter` - `dba_obj_audit_opts` - `dba_audit_policies` - `dba_audit_mgmt_clean_events` -
   `gv_$instance` - `fga_log$` - `gv_$unified_audit_trail` - `all_unified_audit_actions` -
   `audit_unified_policies` - `audit_unified_enabled_policies` - `audsys.aud$unified` (for Oracle
   Database 12c Release 2 and higher) | | Oracle Database 11g Starting with version 10.5, Netwrix
   Auditor provides limited support of Oracle Database 11g. | Grant `SELECT` privilege on the
   following objects: - `aud$ ` - `gv_$xml_audit_trail` - `dba_stmt_audit_opts` - `v_$parameter` -
   `dba_obj_audit_opts` - `dba_audit_policies` - `dba_audit_mgmt_clean_events` - `gv_$instance` -
   `fga_log$` |
   - You can grant the default **Administrator** role to the account.
   - If you are going to configure Fine Grained Auditing, make sure that you are using Oracle
     Database _Enterprise Edition_. Then grant privileges depending on your Oracle Database
     version.

# Migrate to Unified Audit

Starting with 10.5 version, Netwrix Auditor provides limited support of Oracle Database 11g and
trail auditing mode accordingly.

When planning your migration, consider that you can select the following scenario:

- Migration to pure unified auditing. See the corresponding Oracle documentation article:
  [Migrating to Unified Auditing for Oracle Database](https://docs.oracle.com/database/121/UPGRD/afterup.htm#migrating-to-unified-auditing-for-oracle-database).
- Use a mixed-mode audit facility (not recommended).

Perform the following steps according to official Oracle documentation:

1. To migrate to Unified Auditing for Oracle Database
2. [Manage Earlier Audit Records After You Migrate to Unified Auditing](https://docs.oracle.com/database/121/UPGRD/afterup.htm#manage-earlier-audit-records-after-you-migrate-to-unified-auditing)

To migrate to Unified Auditing for Oracle Database

The procedure contains basic migration steps. Refer to
[Oracle_Database_Upgrade_Guide](https://docs.oracle.com/database/121/UPGRD/toc.htm) for more
detailed upgrade scenario.

1. On the computer where your database is deployed, run the sqlplus tool.
2. Connect to your Oracle Database—use Oracle account with the `SYSDBA` privilege. For example:

   sqlplus sys as sysdba

   Enter password: password

3. Check if your Oracle database has already been migrated to unified auditing:

   SQL> SELECT VALUE FROM V$OPTION WHERE PARAMETER = 'Unified Auditing';

   If the `value` is `true`, unified auditing mode is already enabled in your database.

   In this case, you can ignore further steps and start managing your earlier audit records. Refer
   to Oracle documentation for more information:
   [Managing Earlier Audit Records After You Migrate to Unified Auditing](https://docs.oracle.com/database/121/UPGRD/afterup.htm#managing-earlier-audit-records-after-you-migrate-to-unified-auditing).

   If the `value` is `false`, proceed with the steps below.

4. Stop the database. Do the following, depending on your environment:

   | For...                       | Do...                                                                             |
   | ---------------------------- | --------------------------------------------------------------------------------- |
   | Single-instance environments | In sqlplus tool, execute the following command: SQL> SHUTDOWN IMMEDIATE SQL> EXIT |
   | Windows systems              | Stop the Oracle service: net stop OracleService%ORACLE_SID%                       |
   | Oracle RAC installations     | Shut down each database instance as follows: srvctl stop database -db db_name     |

5. Stop the listener. Stopping the listener is not necessary for Oracle RAC and Grid Infrastructure
   listeners.

   lsnrctl stop listener_name

   To find your listener name, execute the following command:

   lsnrctl status

   The `Alias `parameter shows listener name.

6. Navigate to `$ORACLE_HOME /rdbms/lib` directory.
7. Enable the unified auditing executable. Do the following depending on your infrastructure:

   | For...             | Do...                                                                                           |
   | ------------------ | ----------------------------------------------------------------------------------------------- |
   | Windows systems    | Rename the `%ORACLE_HOME%/bin/orauniaud12.dll.dbl` file to `%ORACLE_HOME%/bin/orauniaud12.dll.` |
   | UNIX-based systems | Execute the following command: make -f ins_rdbms.mk uniaud_on ioracle ORACLE_HOME=$ORACLE_HOME  |

8. Restart the listener.

   lsnrctl start listener_name

9. Restart the database. Do the following, depending on your environment:

   | For...                       | Do...                                                                                                        |
   | ---------------------------- | ------------------------------------------------------------------------------------------------------------ |
   | Single-instance environments | In sqlplus tool, execute the following command: sqlplus sys as sysoper Enter password: password SQL> STARTUP |
   | Windows systems              | Start the Oracle service: net start OracleService%ORACLE_SID%                                                |
   | Oracle RAC installations     | Start each database instance as follows: srvctl start database -db db_name                                   |

See also:

1. [Manage Earlier Audit Records After You Migrate to Unified Auditing](https://docs.oracle.com/database/121/UPGRD/afterup.htm#manage-earlier-audit-records-after-you-migrate-to-unified-auditing)
2. [Remove the Unified Auditing Functionality](https://docs.oracle.com/database/121/UPGRD/afterup.htm#remove-the-unified-auditing-functionality)

# Verify Your Oracle Database Audit Settings

You can verify your Oracle Database audit settings manually. Do one of the following, depending on
your Oracle Database version and edition.

| Oracle Database version/edition                                                                                                                                         | Command                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oracle Database 19c (Unified Auditing)                                                                                                                                  | `select ENTITY_NAME, ENABLED_OPTION, SUCCESS, FAILURE from AUDIT_UNIFIED_ENABLED_POLICIES; `                                                                          |
| Oracle Database 12c, 18c, 19c (Unified Auditing)                                                                                                                        | `select USER_NAME, ENABLED_OPT, SUCCESS, FAILURE from AUDIT_UNIFIED_ENABLED_POLICIES;`                                                                                |
| Oracle Database Enterprise Edition (Fine Grained Auditing)                                                                                                              | `SELECT POLICY_NAME, ENABLED from DBA_AUDIT_POLICIES;`                                                                                                                |
| Oracle Database 11g(Standard Auditing) Starting with version 10.5, Netwrix Auditor provides limited support of Oracle Database 11g and trail auditing mode accordingly. | `SELECT audit_option, success, failure FROM dba_stmt_audit_opts;` To review your initialization parameters, execute the following command: `SHOW PARAMETERS audit%r;` |

If you want to clean your audit settings periodically, refer to the following Oracle Help Center
article for more information:
[Database PL/SQL Packages and Types Reference.](https://docs.oracle.com/database/121/ARPLS/d_audit_mgmt.htm#database-plsql-packages-and-types-reference)

# Create and Configure Oracle Wallet

Oracle Wallet is a file that stores database authentication and signing credentials. It allows users
to securely access databases without providing credentials to third-party software (for example,
Netwrix Auditor), and easily connect to Oracle products, including located in the clouds (e.g.
Autonomous Data Warehouse).

A configured Wallet consists of two files, `cwallet.sso` and `ewallet.p12` stored in a secure Wallet
directory

## Create Oracle Wallet

There are multiple methods to create Oracle Wallet files. For example:

- Using Oracle Wallet Manager. Refer to the following Oracle help article for more information:
  [Creating a New Oracle Wallet](https://docs.oracle.com/database/121/DBIMI/walet.htm#creating-a-new-oracle-wallet).
- Using a console. As an example, refer to the following Oracle help article for WebLogic JDBC:
  [Creating and Managing Oracle Wallet](https://docs.oracle.com/middleware/1213/wls/JDBCA/oraclewallet.htm#creating-and-managing-oracle-wallet).
- Using other Oracle products. For example, Autonomous Data Warehouse. Refer to the following Oracle
  help article for more information:
  [Download Client Credentials (Wallets)](https://docs.oracle.com/en/cloud/paas/autonomous-data-warehouse-cloud/user/connect-download-wallet.html#download-client-credentials-wallets).

## Install Oracle Instant Client

To perform clear install of Oracle Instant Client, follow the instructions below. If you have Oracle
Client installed, see the
[Update Existing Oracle Client Installation](#update-existing-oracle-client-installation) topic for
additional information.

Follow the steps to install Oracle Instant Client

**Step 1 –** Download the appropriate package from Oracle website:
[Instant Client Packages](https://www.oracle.com/database/technologies/instant-client/downloads.html).
Netwrix recommends installing the latest available version but the product is compatible with
version 12 and above.

**Step 2 –** Download client credentials and store the file in a secure location. See
[Download Client Credentials (Wallets)](https://docs.oracle.com/en/cloud/paas/atp-cloud/atpug/connect-download-wallet.html#download-client-credentials-wallets)
for more information.

**Step 3 –** Unzip your credentials file into a secure location.

**Step 4 –** Navigate to a folder where you unzipped your credentials and locate the sqlnet.ora
file.

**Step 5 –** Replace the `"?/network/admin"` parameter with the name of the folder containing client
credentials. For example:

Windows-based platforms:

WALLET_LOCATION = (SOURCE = (METHOD = file) (METHOD_DATA =
(DIRECTORY="D:\\myapp\\atp_credentials")

SSL_SERVER_DN_MATCH=yes

**Step 6 –** Create the `TNS_ADMIN` environment variable and set it to the location of the
credentials file.

This variable is used to change the directory path of Oracle Net Services configuration files from
the default location of `ORACLE_HOME\network\admin` to the location of the secure folder containing
the credentials file you saved in Step 2. Set the `TNS_ADMIN` environment variable to the directory
where the unzipped credentials files are, not to the credentials file itself.

**Step 7 –** Navigate to a folder where you unzipped your credentials and locate the tnsnames.ora
file. The file is used to map connection information for each Oracle service to a logical alias.

**Step 8 –** Review sample tnsnames.ora file where `myOracle` – is a logical alias for the wallet:

myOracle =

(description=

(address=((ADDRESS = (PROTOCOL = TCP)(HOST = server1)(PORT = 1521))

(CONNECT_DATA =

)

)

Keep in mind that the wallet alias in the configuration file must equal to Netwrix Auditor item
name.

## Configure Oracle Instant Client for HTTP Proxy Connections

If the client is behind a firewall and your network configuration requires an HTTP proxy to connect
to the internet, perform the following steps to update the `sqlnet.ora` and `tnsnames.ora` files.

HTTP proxy connections are available starting with Oracle Instant Client 12.2.0.1 or later.

1. Add the following line to the `sqlnet.ora` file to enable connections through an HTTP proxy:

   SQLNET.USE_HTTPS_PROXY=on

2. Open the `tnsnames.ora.` file and add the following HTTP proxy connection definitions:

   - `https_proxy` — specify the proxy server hostname. For example, `proxyhostname`.
   - `https_proxy_port `— specify port used for HTTP proxy connection. For example, `80`.

   Review configuration example:

   ATPC_high =

   (description=

   (address=

   (https_proxy=proxyhostname)(https_proxy_port=80)(protocol=tcps)(port=1522)(host=atpc.example.oraclecloud.com)

   )

   (connect_data=(service_name=atpc1_high.atpc.oraclecloud.com)

   )

   (security=(ssl_server_cert_dn="atpc.example.oraclecloud.com,OU=Oracle BMCS US,O=Oracle
   Corporation,L=Redwood City,ST=California,C=US")

   )

   )

Configuring `sqlnet.ora` and` tnsnames.ora` for the HTTP proxy may not be enough depending on your
organization's network configuration and security policies. For example, some networks require a
username and password for the HTTP proxy. In such cases, contact your network administrator to open
outbound connections to hosts in the oraclecloud.com domain using port `1522 `without going through
an HTTP proxy.

## Update Existing Oracle Client Installation

Netwrix assumes that you have `sqlnet.ora` and `tnsnames.ora` files and the `TNS_ADMIN `environment
variable.

Do the following:

1. Update your sqlnet.ora file. Example:

   WALLET_LOCATION = (SOURCE = (METHOD = file) (METHOD_DATA =
   (DIRECTORY="/home/atpc_credentials")

2. Copy the entries in the `tnsnames.ora` file provided in the Autonomous Transaction Processing
   wallet to your existing `tnsnames.ora` file.

See also:

- Oracle Wallet
