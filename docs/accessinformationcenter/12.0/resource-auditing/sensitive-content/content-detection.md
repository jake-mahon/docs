# Sensitive Content Audit Interface

The Sensitive Content Audit interface is opened by searching for a particular criteria value. See
the [Search Features](/docs/accessinformationcenter/12.0/resource-auditing/search-and-filters.md) topic for additional information. It contains three panes in all
audit interfaces: Reports, Results, and Group Membership.

In order to enable the criteria match search feature, the **Store discovered sensitive data** option
must be enabled in the Access Analyzer data collector scanning the target environment. See the
relevant solution topic in the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
additional information on the data collection options.

![Sensitive Content Audit Interface](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/files.webp)

The criterion being audited is identified at the top of the interface as part of the interface
breadcrumb. See the [Sensitive Content Reports](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/index.md) topic for
additional information.

# Sensitive Content Report

The Sensitive Content report at the share and subfolder levels provides a list of files and a hit
count per file where criteria matches were found on the selected resource. This report includes a
table with criteria matches visible to Access Information Center users with either Administrator or
Security Team roles. The Matches table requires the **store discovered sensitive data**
configuration for the Access Analyzer data collection or it will be blank.

![Sensitive Content report at the share and subfolder levels](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/sharesensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches in the files where the selected criterion value
were found:

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

# Sensitive Content Report

The Sensitive Content report at the NFS Exports share and subfolder levels provides a list of files
and a hit count per file where criteria matches were found on the selected resource. This report
includes a table with criteria matches visible to Access Information Center users with either
Administrator or Security Team roles. The Matches table requires the **store discovered sensitive
data** configuration for the Access Analyzer data collection or it will be blank.

![Sensitive Content report at the NFS Exports share and subfolder levels](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/nfsexports/nfssensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Path – Location of the file where the criteria matches were found
- Count – Number of criteria matches found within each file

There is one table at the bottom displaying Matches in the files where the selected criterion value
were found.

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

**NOTE:** Up to five matches per file can be displayed.

# Sensitive Content Report

The Sensitive Content report at the Databases node provides a list of tables and a hit count per
table where criteria matches were found on the selected resource. This report includes a table with
criteria matches visible to Access Information Center users with either Security Team Member or
Administrator roles. The Matches table requires the storage of discovered sensitive data within the
Access Analyzer database or it will be blank.

![Sensitive Content report at the Databases node](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/sql/databases/databasessensitivecontent.webp)

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

# Sensitive Content Report

The Sensitive Content report at the database and table levels provides a list of paths and a hit
count per table where criteria matches were found on the selected resource. This report includes a
table with criteria matches visible to Access Information Center users with either Security Team
Member or Administrator roles. The Matches table requires the storage of discovered sensitive data
within the Access Analyzer database or it will be blank.

![Sensitive Content report at the database and table levels](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/databasetable/databasesensitivecontent.webp)

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

# Sensitive Content Report

The Sensitive Content report at the database and library level provides a list of paths and a hit
count per table where criteria matches were found on the selected resource. This report includes a
second table with criteria matches visible to Access Information Center users with either Security
Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive
data within the Access Analyzer database or it will be blank.

![Sensitive Content report at the database and library level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/databasetable/databasesensitivecontent.webp)

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

# Sensitive Content Report

The Sensitive Content report at the database and table level provides a list of paths and a hit
count per table where criteria matches were found on the selected resource. This report includes a
table with criteria matches visible to Access Information Center users with either Security Team
Member or Administrator roles. The Matches table requires the storage of discovered sensitive data
within the Access Analyzer database or it will be blank.

![Sensitive Content report at the database and table level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/databasetable/databasesensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the table where the criteria matches were found
- Sub File – Column name of where the sensitive data resides
- Count – Number of criteria matches found within each table
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches on the files where the selected criterion value
were found:

- Prefix – Not populated
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Not populated
- Sub File – Column name of where the sensitive data resides

# Sensitive Content Report

The Sensitive Content report at the database and table level provides a list of paths and a hit
count per table where criteria matches were found on the selected resource. This report includes a
table with criteria matches visible to Access Information Center users with either Security Team
Member or Administrator roles. The Matches table requires the storage of discovered sensitive data
within the Access Analyzer database or it will be blank.

![Sensitive Content report at the database and table level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/databasetable/databasesensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the table where the criteria matches were found
- Sub File – Column name of where the sensitive data resides
- Count – Number of criteria matches found within each table
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches on the files where the selected criterion value
were found:

- Prefix – Not populated
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Not populated
- Sub File – Column name of where the sensitive data resides

# Sensitive Content Report

The Sensitive Content report at the database and collections level provides a list of paths and a
hit count per collection where criteria matches were found on the selected resource. This report
includes a table with criteria matches visible to Access Information Center users with either
Security Team Member or Administrator roles. The Matches table requires the storage of discovered
sensitive data within the Access Analyzer database or it will be blank.

![Sensitive Content report at the database and collections level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/databasetable/databasesensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the collection where the criteria matches were found
- Sub File – Column name of where the sensitive data resides
- Count – Number of criteria matches found within each collection
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches on the collections where the selected criterion
value were found:

- Prefix – Not populated
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Not populated
- Sub File – Column name of where the sensitive data resides

# Sensitive Content Report

The Sensitive Content report at the Bucket level provides a list of files and a hit count per file
where criteria matches were found on the selected resource. This report includes a table with
criteria Matches visible to Access Information Center users with either Security Team Member or
Administrator roles. The Matches table requires the storage of discovered sensitive data within the
Access Analyzer database or it will be blank.

![Sensitive Content report at the Bucket level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/aws/bucket/bucketsensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of files with criteria matches
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches in the files where the selected criterion value
were found:

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

# Sensitive Content Report

The Sensitive Content report at the site collection, site, list, library, and folder levels provides
a list of files and a hit count per file where criteria matches were found on the selected resource.
This report includes a Matches table.

![Sensitive Content report at the site collection, site, list, library, and folder levels](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/sharepoint/sitecollections/sitesensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches in the files where the selected criterion value
were found:

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

**NOTE:** Up to five matches per file can be displayed.

# Sensitive Content Report

The Sensitive Content report at the Team Member, Resource, and Subfolder level provides a list of
tables and a hit count per table where criteria matches were found on the selected resource. This
report includes a table with criteria matches visible to Access Information Center users with either
Security Team Member or Administrator roles. The Matches table requires the storage of discovered
sensitive data within the Access Analyzer database or it will be blank.

![Sensitive Content report at the Team Member, Resource, and Subfolder level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/dropbox/teammemberresource/teammembersensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches in the files where the selected criterion value
were found:

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

# Sensitive Content Report

The Sensitive Content report at the mailbox and folder level provides a list of files and a hit
count per file where criteria matches were found on the selected resource. This report includes a
table with criteria matches visible to Access Information Center users with either Security Team
Member or Administrator roles. The Matches table requires the storage of discovered sensitive data
within the Access Analyzer database or it will be blank.

![Sensitive Content report at the mailbox and folder level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/exchange/mailboxfolder/mailboxsensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches in the files where the selected criterion value
were found:

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

# Files Report

The Files report for sensitive content provides a list of all files for the targeted environments
which have matches to the searched Sensitive Data Discovery criteria. This report includes
additional tables:

- Matches – Displays information on the criteria hits found on the selected file
- Activity – Displays information on activity performed on the selected file during the selected
  date range
- Permissions – Displays information on the trustees with effective access to the parent object or
  folder that contains the selected sensitive data file

![Files report for sensitive content](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/files.webp)

This report is comprised of the following columns:

- Resource Type – Target environment where the sensitive file exists. For example, File System or
  SharePoint.
- Server Name – Name of the file system server or SharePoint farm/instance
- Path – Location of the file

There are three tables at the bottom displaying Matches, Activity, and Permissions for the selected
resource.

## Matches Table

The Matches table displays information on the criteria hits found on the selected file. This table
is comprised of the following columns:

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

## Activity Table

The Activity table displays information on activity performed on the selected file during the
selected date. It will be blank if any of the following are true:

- Activity is not being monitored for the targeted environment
- The activity collection job within Access Analyzer for the environment have not been run
- There were no operation events logged on the selected file for the selected date range

![Activity table](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/sensitivecontent/activitytable.webp)

This table is comprised of the following columns:

- Access Time – Date and timestamp for when the operation occurred
- Trustee Name – Name of the trustee who performed the event on the file
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs as read from Active Directory
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Resource – Resource type being accessed. For sensitive data discovery, this will always be File.
- Operation – Type of operation performed on the file (read, add, update, delete, permission change,
  rename)
- Access – Whether the trustee was granted access to execute the operation: **Allowed** or
  **Denied**
- Path – Location of the file
- Target Path – New location if changed by the operation. Blank if the operation does not result in
  a new path.
- Process Name – Name of the process which performed the operation

## Permissions Table

The Permissions table displays information on the trustees with effective access to the parent
object or folder housing the selected sensitive data file.

![Permissions table](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/sensitivecontent/permissionstable.webp)

This table is comprised of the following columns:

- Trustee Type – Type of the trustee (for example, Domain User or Domain Group)
- Trustee Name – Name of the trustee who has effective access to the file
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongss as read from Active Directory
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Access Analyzer data collection and analysis configuration to identify stale accounts)
- Source – Share or Folder source of the permission
- Type – Direct or Inherited type of permission

The following rights are a normalized representation of the permissions granted to the trustee:

- List – Right to view list of files and subfolders
- Read – Right to view/read files and subfolders
- Write – Right to add or modify files and subfolders
- Delete – Right to delete files and subfolders
- Manage – Equivalent to full control over files and subfolders

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

# Sensitive Content Report

The Sensitive Content report for imported data provides a list of paths and a hit count per table
where criteria matches were found on the selected resource. This report includes a table visible to
Access Information Center users with either Security Team Member or Administrator roles with
criteria Matches. The Matches table requires the storage of discovered sensitive data within the
Access Analyzer database or it will be blank. The **Include Subfolders** option is active by default
until removed. See the [Results Pane](/docs/accessinformationcenter/12.0/resource-auditing/navigation-guide.md#results-pane) topic for information on
changing this option.

![Sensitive Content report for imported data](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/sharepoint/sensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches on the files where the selected criterion value
were found:

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/12.0/access-management/data-grid-operations/index.md) topic for additional information.
