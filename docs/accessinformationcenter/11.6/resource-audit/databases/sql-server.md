# SQL Server Reports

SQL Server reports are accessed through the Resource Audit interface. Explore the SQL Server
resources by expanding the levels within the Resources pane and selecting the desired resource. The
data within these reports is collected by the Enterprise Auditor SQL solution. See the SQL Solution
topic in the
[Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
for additional information.

A single SQL Server can have multiple instances. Each instance where data is collected has its own
node in the Access Information Center. SQL Server reports fall into the following categories:

- Permissions reports
- Activity reports
- Sensitive Data Content reports

The following report is available at the **SQL Server** node:

- [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resource-audit/databases/sql-server.md)

# Sensitive Content Summary Report

The Sensitive Content report at the **SQL Server** node provides a count of tables where criteria
matches were found in the targeted environment. This report includes a Details table.

![Sensitive Content report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/postgresql/sensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – SQL server name
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of tables with criteria matches

There is one table at the bottom displaying Details on the tables where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the table where the criteria matches were found
- Sub File – Column name of where the sensitive data resides
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

# Databases Node Reports

The following reports are displayed at the **Databases** node:

- [Activity Report](/docs/accessinformationcenter/11.6/resource-audit/databases/sql-server.md)
- Permissions – Displayed but not populated at the **Databases** node
- [Sensitive Content Report](/docs/accessinformationcenter/11.6/resource-audit/databases/sql-server.md)

# Activity Report

The Activity report at the Databases node displays activity across the databases logged during the
selected date range. The **Include Subfolders** option is active by default until removed. See the
[Results Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#results-pane)
topic for information on changing this option.

![Activity report at the Databases node](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sql/databases/databasesactivity.webp)

This report is comprised of the following columns:

- Access Time – Date and timestamp for when the operation occurred
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Resource – Type of resource
- Operation – Type of operation performed
- Access – Whether the trustee was granted access to execute the operation: **Allowed** or
  **Denied**
- Path – Database object that was acted upon
- Target Path – Query that triggered the activity event to be stored
- Process Name – Not populated for SQL Server reports

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

# Sensitive Content Report

The Sensitive Content report at the Databases node provides a list of tables and a hit count per
table where criteria matches were found on the selected resource. This report includes a table with
criteria matches visible to Access Information Center users with either Security Team Member or
Administrator roles. The Matches table requires the storage of discovered sensitive data within the
Enterprise Auditor database or it will be blank.

![Sensitive Content report at the Databases node](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sql/databases/databasessensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the table where the criteria matches were found
- Sub File – Column name of where the sensitive data resides
- Count – Number of criteria matches found within each table
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches in the tables where the selected criterion value
were found:

- Prefix – Not populated
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Not populated
- Sub File – Column name of where the sensitive data resides

# Database & Table Levels Reports

The following reports are available at the database and table levels:

- [Activity Report](/docs/accessinformationcenter/11.6/resource-audit/databases/sql-server.md)
- [Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/databases/sql-server.md)
- [Sensitive Content Report](/docs/accessinformationcenter/11.6/resource-audit/databases/sql-server.md)

# Activity Report

The Activity report at the database and table levels displays activity on the selected resource
logged during the selected date range. The **Include Subfolders** option is active by default until
removed. See the
[Results Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#results-pane)
topic for information on changing this option.

![Activity report at the database and table levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sql/databasetable/databaseactivity.webp)

This report is comprised of the following columns:

- Access Time – Date and timestamp for when the operation occurred
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee accountt
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Resource – Type of resource
- Operation – Type of operation performed
- Access – Whether the trustee was granted access to execute the operation: **Allowed** or
  **Denied**
- Path – Database object that was acted upon
- Target Path – Query that triggered the activity event to be stored
- Process Name – Not populated for SQL Server reports

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

# Permissions Report

The Permissions report at the database and table levels shows the permissions for the trustee on the
selected resource.

![Permissions report at the database and table levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/postgresql/databasetable/databasepermissions.webp)

This report is comprised of the following columns:

- Trustee Type – Type of the trustee (for example, Domain User, Database User, or Domain Group)
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Enterprise Auditor data collection and analysis configuration to identify stale accounts)
- Type – Direct or Inherited type of permission

The following rights are a normalized representation of the SQL permission levels (SQL Roles)
granted to the trustee:

- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

# Sensitive Content Report

The Sensitive Content report at the database and table levels provides a list of paths and a hit
count per table where criteria matches were found on the selected resource. This report includes a
table with criteria matches visible to Access Information Center users with either Security Team
Member or Administrator roles. The Matches table requires the storage of discovered sensitive data
within the Enterprise Auditor database or it will be blank.

![Sensitive Content report at the database and table levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/postgresql/databasetable/databasesensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the table where the criteria matches were found
- Sub File – Column name of where the sensitive data resides
- Count – Number of criteria matches found within each table
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches on the tables where the selected criterion value
were found:

- Prefix – Not populated
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Not populated
- Sub File – Column name of where the sensitive data resides

# Instance Level Reports

The following reports are available at the instance level:

- [Activity Report](/docs/accessinformationcenter/11.6/resource-audit/databases/sql-server.md)
- [Sensitive Content Details Report](/docs/accessinformationcenter/11.6/resource-audit/databases/sql-server.md)
- [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resource-audit/databases/sql-server.md)

Remember, instance permissions are populated at the **Instance Permissions** node. See the
[Instance Permissions Node Report](/docs/accessinformationcenter/11.6/resource-audit/databases/sql-server.md) topic
for additional information.

# Activity Report

The Activity report at the instance level displays activity across the entire instance logged during
the selected date range.

![Activity report at the instance level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sql/instance/instanceactivity.webp)

This report is comprised of the following columns:

- Access Time – Date and timestamp for when the operation occurred
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Resource – Type of resource
- Operation – Type of operation performed
- Access – Whether the trustee was granted access to execute the operation: **Allowed** or
  **Denied**
- Path – Database object that was acted upon
- Target Path – Query that triggered the activity event to be stored
- Process Name – Not populated in SQL Server reports

# Sensitive Content Details Report

The Sensitive Content Details report at the instance level provides details of tables where criteria
matches were found on the selected instance. This report includes a second table with criteria
matches visible to Access Information Center users with either Security Team Member or Administrator
roles. The Matches table requires the storage of discovered sensitive data within the Enterprise
Auditor database or it will be blank.

![Sensitive Content Details report at the iInstance level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentdetails.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the table where the criteria matches were found
- Sub File – Column name of where the sensitive data resides
- Count – Number of tables with criteria matches
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches in the tables where the selected criterion value
were found:

- Prefix – Not populated
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Not populated
- Sub File – Column name of where the sensitive data resides

# Sensitive Content Summary Report

The Sensitive Content Summary report at the instance level provides a count of tables where criteria
matches were found on the selected instance. This report includes a Details table.

![Sensitive Content Summary report at the instance level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – SQL server name
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of tables with criteria matches

There is one table at the bottom displaying Details on the tables where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the table where the criteria matches were found
- Sub File – Column name of where the sensitive data resides
- Count – Number of criteria matches found within each table
- Attributes – Comma separated list of Attributes found for the identity

# Instance Permissions Node Report

The following report is available at the **Instance Permissions** node:

- Activity – Displayed but not populated at the **Instance Permissions** node
- [Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/databases/sql-server.md)
- Sensitive Content – Displayed but not populated at the **Instance Permissions** node

# Permissions Report

The Permissions report at the **Instance Permissions** node shows the instance permissions for the
trustee.

![Permissions report at the Instance Permissions node](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sql/instancepermissions/instancepermissions.webp)

This report is comprised of the following columns:

- Trustee Type – Type of the trustee (for example, Domain User, Database User, or Domain Group)
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Enterprise Auditor data collection and analysis configuration to identify stale accounts)
- Type – Direct or Inherited type of permission

The following rights are a normalized representation of the SQL permission levels (SQL Roles)
granted to the trustee:

- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

# Roles Node Reports

The following report is available at the **Roles** node:

- Activity – Displayed but not populated at the **Roles** node
- [Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/databases/sql-server.md)
- Sensitive Content – Displayed but not populated at the **Roles** node

# Permissions Report

The Permissions report at the **Roles** node shows the permissions for the instance’s SQL roles.

![Permissions report at the Roles node](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sql/roles/rolespermissions.webp)

This report is comprised of the following columns:

- Trustee Type – Type of the trustee (for example, Domain User, Database User, or Domain Group)
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Enterprise Auditor data collection and analysis configuration to identify stale accounts)
- Type – Direct or Inherited type of permission

The following rights are a normalized representation of the SQL permission levels (SQL Roles)
granted to the trustee:

- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights
