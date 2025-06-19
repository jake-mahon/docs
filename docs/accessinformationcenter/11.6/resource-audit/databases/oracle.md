# Oracle Reports

Oracle reports are accessed through the Resource Audit interface. Explore the Oracle resources by
expanding the levels within the Resources pane and selecting the desired resource. The data within
these reports is collected by the Enterprise Auditor Oracle solution. See the Oracle Solution topic
in the
[Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
for additional information.

A single Oracle Server can have multiple instances. Each instance where data is collected has its
own node in the Access Information Center. Oracle reports fall into the following categories:

- Permissions reports
- Sensitive Data Content reports

The following report is available at the **Oracle** node:

- [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resource-audit/databases/oracle.md)

# Sensitive Content Summary Report

The Sensitive Content Summary report at the **Oracle** node provides a count of databases where
criteria matches were found in the targeted environment. This report includes a Details table.

![Sensitive Content Summary report at the Oracle node](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/postgresql/sensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – Oracle host name or cluster name
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

# Database & Library Level Reports

The following reports are available at the database and library levels:

- Activity Report – Displayed but not populated at the database and library level
- [Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/databases/oracle.md)
- [Sensitive Content Report](/docs/accessinformationcenter/11.6/resource-audit/databases/oracle.md)

# Permissions Report

The Permissions report at the database and library level shows the permissions for the trustee on
the selected resource.

![Permissions report at the database and library level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/postgresql/databasetable/databasepermissions.webp)

This report is comprised of the following columns:

- Trustee Type – Type of the trustee (for example, Domain User, Database user, or Domain Group)
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory or database account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory (if the database is integrated into AD) or
  from the native database security
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

The following rights are a normalized representation of the database permission levels (database
Roles) granted to the trustee:

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

The Sensitive Content report at the database and library level provides a list of paths and a hit
count per table where criteria matches were found on the selected resource. This report includes a
second table with criteria matches visible to Access Information Center users with either Security
Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive
data within the Enterprise Auditor database or it will be blank.

![Sensitive Content report at the database and library level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/postgresql/databasetable/databasesensitivecontent.webp)

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

- Activity Report – Displayed but not populated at the instance level
- [Sensitive Content Details Report](/docs/accessinformationcenter/11.6/resource-audit/databases/oracle.md)
- [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resource-audit/databases/oracle.md)

# Sensitive Content Details Report

The Sensitive Content Details report at the instance level provides details of tables where criteria
matches were found on the selected instance. This report includes a table with criteria matches
visible to Access Information Center users with either Security Team Member or Administrator roles.
The Matches table requires the storage of discovered sensitive data within the Enterprise Auditor
database or it will be blank.

![Sensitive Content Details report at the instance level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentdetails.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the table where the criteria matches were found
- Sub File – Column name of where the sensitive data resides
- Count – Number of tables with criteria matches
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches on the tables where the selected criterion value
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

- Server Name – Oracle host name or cluster name
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
