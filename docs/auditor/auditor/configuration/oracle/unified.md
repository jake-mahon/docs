# Migrate to Unified Audit

Starting with 10.5 version, Netwrix Auditor provides limited support of Oracle Database 11g and trail auditing mode accordingly. See [Considerations for Oracle Database Auditing for more information.](/docs/auditor/auditor/requirements/supported_environment.md#Considerations-for-Oracle-Database-Auditing-for-more-information)

When planning your migration, consider that you can select the following scenario:

- Migration to pure unified auditing. See the corresponding Oracle documentation article: [Migrating to Unified Auditing for Oracle Database](https://docs.oracle.com/database/121/UPGRD/afterup.htm#Migrating-to-Unified-Auditing-for-Oracle-Database).
- Use a mixed-mode audit facility (not recommended).

Perform the following steps according to official Oracle documentation:

1. [To migrate to Unified Auditing for Oracle Database](#To-migrate-to-Unified-Auditing-for-Oracle-Database)
2. [Manage Earlier Audit Records After You Migrate to Unified Auditing](https://docs.oracle.com/database/121/UPGRD/afterup.htm#Manage-Earlier-Audit-Records-After-You-Migrate-to-Unified-Auditing)

To migrate to Unified Auditing for Oracle Database

The procedure contains basic migration steps. Refer to [Oracle\_Database\_Upgrade\_Guide](https://docs.oracle.com/database/121/UPGRD/toc.htm) for more detailed upgrade scenario.

1. On the computer where your database is deployed, run the sqlplus tool.
2. Connect to your Oracle Database—use Oracle account with the ```SYSDBA``` privilege. For example:

   sqlplus sys as sysdba

   Enter password: password
3. Check if your Oracle database has already been migrated to unified auditing:

   SQL> SELECT VALUE FROM V$OPTION WHERE PARAMETER = 'Unified Auditing';

   If the ```value``` is ```true```, unified auditing mode is already enabled in your database.

   In this case, you can ignore further steps and start managing your earlier audit records. Refer to Oracle documentation for more information: [Managing Earlier Audit Records After You Migrate to Unified Auditing](https://docs.oracle.com/database/121/UPGRD/afterup.htm#Managing-Earlier-Audit-Records-After-You-Migrate-to-Unified-Auditing).

   If the ```value``` is ```false```, proceed with the steps below.
4. Stop the database. Do the following, depending on your environment:

   | For... | Do... |
   | --- | --- |
   | Single-instance environments | In sqlplus tool, execute the following command:  SQL> SHUTDOWN IMMEDIATE  SQL> EXIT |
   | Windows systems | Stop the Oracle service:  net stop OracleService%ORACLE\_SID% |
   | Oracle RAC installations | Shut down each database instance as follows:  srvctl stop database -db db\_name |
5. Stop the listener. Stopping the listener is not necessary for Oracle RAC and Grid Infrastructure listeners.

   lsnrctl stop listener\_name

   To find your listener name, execute the following command:

   lsnrctl status

   The ```Alias ```parameter shows listener name.
6. Navigate to ```$ORACLE_HOME /rdbms/lib``` directory.
7. Enable the unified auditing executable. Do the following depending on your infrastructure:

   | For... | Do... |
   | --- | --- |
   | Windows systems | Rename the ```%ORACLE_HOME%/bin/orauniaud12.dll.dbl``` file to ```%ORACLE_HOME%/bin/orauniaud12.dll.``` |
   | UNIX-based systems | Execute the following command:  make -f ins\_rdbms.mk uniaud\_on ioracle ORACLE\_HOME=$ORACLE\_HOME |
8. Restart the listener.

   lsnrctl start listener\_name
9. Restart the database. Do the following, depending on your environment:

   | For... | Do... |
   | --- | --- |
   | Single-instance environments | In sqlplus tool, execute the following command:  sqlplus sys as sysoper  Enter password: password  SQL> STARTUP |
   | Windows systems | Start the Oracle service:  net start OracleService%ORACLE\_SID% |
   | Oracle RAC installations | Start each database instance as follows:  srvctl start database -db db\_name |

See also:

1. [Manage Earlier Audit Records After You Migrate to Unified Auditing](https://docs.oracle.com/database/121/UPGRD/afterup.htm#Manage-Earlier-Audit-Records-After-You-Migrate-to-Unified-Auditing)
2. [Remove the Unified Auditing Functionality](https://docs.oracle.com/database/121/UPGRD/afterup.htm#Remove-the-Unified-Auditing-Functionality)
