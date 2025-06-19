# Sensitive Content Summary Report

The Sensitive Content Summary report at the **File System** node provides a count of files where
criteria matches were found in the targeted environment. This report includes a Details table.

![Sensitive Content Summary report at the File System node](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/sensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – Name of the server
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of files with criteria matches

There is one table at the bottom displaying Details on the files where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

# Sensitive Content Details Report

The Sensitive Content Details report at the server level provides details of files where criteria
matches were found on the selected resource. This report includes a Matches table.

![Sensitive Content Details report at the server level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/exchange/server/serversensitivecontentdetails.webp)

This report is comprised of the following columns:

- Share Name – Name of the share
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of files with criteria matches
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Details on the files where the selected criterion value
were found:

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

# Sensitive Content Summary Report

The Sensitive Content Summary report at the server level provides a count of files where criteria
matches were found on the selected resource. This report includes a Details table.

![Sensitive Content Summary report at the server level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/exchange/server/serversensitivecontentsummary.webp)

This report is comprised of the following columns:

- Share Name – Name of the share
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of files with criteria matches

There is one table at the bottom displaying Details on the files where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

# Sensitive Content Summary Report

The Sensitive Content report at the **SQL Server** node provides a count of tables where criteria
matches were found in the targeted environment. This report includes a Details table.

![Sensitive Content report](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/sensitivecontentsummary.webp)

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

# Sensitive Content Details Report

The Sensitive Content Details report at the instance level provides details of tables where criteria
matches were found on the selected instance. This report includes a second table with criteria
matches visible to Access Information Center users with either Security Team Member or Administrator
roles. The Matches table requires the storage of discovered sensitive data within the Access
Analyzer database or it will be blank.

![Sensitive Content Details report at the iInstance level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentdetails.webp)

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

![Sensitive Content Summary report at the instance level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentsummary.webp)

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

# Sensitive Content Summary Report

The Sensitive Content Summary report at the **Oracle** node provides a count of databases where
criteria matches were found in the targeted environment. This report includes a Details table.

![Sensitive Content Summary report at the Oracle node](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/sensitivecontentsummary.webp)

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

# Sensitive Content Details Report

The Sensitive Content Details report at the instance level provides details of tables where criteria
matches were found on the selected instance. This report includes a table with criteria matches
visible to Access Information Center users with either Security Team Member or Administrator roles.
The Matches table requires the storage of discovered sensitive data within the Access Analyzer
database or it will be blank.

![Sensitive Content Details report at the instance level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentdetails.webp)

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

![Sensitive Content Summary report at the instance level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentsummary.webp)

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

# Sensitive Content Summary Report

The Sensitive Content Summary report at the **MySQL** node provides a count of databases where
criteria matches were found in the targeted environment. This report includes a Details table.

![Sensitive Content Summary report at the MySQL node](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/sensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – MySQL host name or cluster name
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

# Sensitive Content Details Report

The Sensitive Content Details report at the instance level provides details of tables where criteria
matches were found on the selected instance. This report includes a table with criteria matches
visible to Access Information Center users with either Security Team Member or Administrator roles.
The Matches table requires the storage of discovered sensitive data within the Access Analyzer
database or it will be blank.

![Sensitive Content Details report at the instance level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentdetails.webp)

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

![Sensitive Content Summary report at the instance level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – MySQL host name or cluster name
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

# Sensitive Content Summary Report

The Sensitive Content Summary report at the **PostgreSQL** node provides a count of databases where
criteria matches were found in the targeted environment. This report includes a Details table.

![Sensitive Content Summary report at the PostgreSQL node](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/sensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – PostgreSQL host name or cluster name
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

# Sensitive Content Details Report

The Sensitive Content Details report at the instance level provides details of tables where criteria
matches were found on the selected instance. This report includes a table with criteria matches
visible to Access Information Center users with either Security Team Member or Administrator roles.
The Matches table requires the storage of discovered sensitive data within the Access Analyzer
database or it will be blank.

![Sensitive Content Details report at the instance level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentdetails.webp)

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

![Sensitive Content Summary report at the instance level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – PostgreSQL host name or cluster name
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

# Sensitive Content Summary Report

The Sensitive Content Summary report at the **MongoDB** node provides a count of collections where
criteria matches were found in the targeted environment. This report includes a Details table.

![Sensitive Content Summary report at the MongoDB node](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/sensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – MongoDB host name or cluster name
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of collections with criteria matches

There is one table at the bottom displaying Details on the collections where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe)..
- Path – Location of the collection where the criteria matches were found
- Sub File – Column name of where the sensitive data resides
- Count – Number of criteria matches found within each collection
- Attributes – Comma separated list of Attributes found for the identity

# Sensitive Content Details Report

The Sensitive Content Details report at the instance level provides details of collections where
criteria matches were found on the selected instance. This report includes a table with criteria
matches visible to Access Information Center users with either Security Team Member or Administrator
roles. The Matches table requires the storage of discovered sensitive data within the Access
Analyzer database or it will be blank.

![Sensitive Content Details report at the instance level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentdetails.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the collection where the criteria matches were found
- Sub File – Column name of where the sensitive data resides
- Count – Number of collections with criteria matches
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches on the files where the selected criterion value
were found:

- Prefix – Not populated
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Not populated
- Sub File – Column name of where the sensitive data resides

# Sensitive Content Summary Report

The Sensitive Content Summary report at the instance level provides a count of collections where
criteria matches were found on the selected instance. This report includes a Details table.

![Sensitive Content Summary report at the instance level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – MongoDB host name or cluster name
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of collections with criteria matches

There is one table at the bottom displaying Details on the collections where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the collection where the criteria matches were found
- Sub File – Column name of where the sensitive data resides
- Count – Number of criteria matches found within each collection
- Attributes – Comma separated list of Attributes found for the identity

# Sensitive Content Summary Report

The Sensitive Content Summary report at the **Amazon** node provides a count of files where criteria
matches were found in the targeted environment. This report includes a Details table.

![Sensitive Content Summary report](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/sensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – SQL server name
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of files with criteria matches

There is one table at the bottom displaying Details on the files where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

# Sensitive Content Details Report

The Sensitive Content Details report at the Organization level provides a count of files where
criteria matches were found on the selected instance. This report includes a table with criteria
Matches visible to Access Information Center users with either Security Team Member or Administrator
roles. The Matches table requires the storage of discovered sensitive data within the Access
Analyzer database or it will be blank.

![Sensitive Content Details report at the Organization level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/exchange/server/serversensitivecontentdetails.webp)

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

# Sensitive Content Summary Report

The Sensitive Content Summary report at the Organization level provides a count of files where
criteria matches were found on the selected instance. This report includes a Details table.

![Sensitive Content Summary report at the Organization level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/exchange/server/serversensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – SQL server name
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of files with criteria matches

There is one table at the bottom displaying Details on the files where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

# Sensitive Content Summary Report

The Sensitive Content Summary report at the **SharePoint** node provides a count of files where
criteria matches were found in the targeted SharePoint on-premise farms and SharePoint Online
instances. This report includes a Details table.

![Sensitive Content Summary report at the SharePoint node](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/sharepoint/sensitivecontent.webp)

This report is comprised of the following columns:

- Server Name – Single server name representing the entire SharePoint on-premise farm or SharePoint
  Online instance
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of files with criteria matches

There is one table at the bottom displaying Details on the files where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

# Sensitive Content Details Report

The Sensitive Content Details report at the on-premise farm and online instance level provides
details of files where criteria matches were found on the site collection. This report includes a
Matches table.

![Sensitive Content Details report at the on-premise farm and online instance levels](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentdetails.webp)

This report is comprised of the following columns:

- Site Collection – Name of the site collection
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of files with criteria matches
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Details on the files where the selected criterion value
were found:

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

# Sensitive Content Summary Report

The Sensitive Content Summary report at the on-premise farm and online instance levels provides a
count of files where criteria matches were found on the site collection. This report includes a
Details table.

![Sensitive Content Summary report at the on-premise farm and online instance levels](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentsummary.webp)

This report is comprised of the following columns:

- Site Collection – Name of the site collection
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of files with criteria matches

There is one table at the bottom displaying Details on the files where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

# Sensitive Content Summary Report

The Sensitive Content Summary report at the **Dropbox** node provides a count of files where
criteria matches were found in the targeted environment. This report includes a Details table.

![Sensitive Content Summary report](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/sensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – SQL server name
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of files with criteria matches

There is one table at the bottom displaying Details on the files where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

# Sensitive Content Details Report

The Sensitive Content Details report at the Team level provides details of files where criteria
matches were found on the selected instance. This report includes a table with criteria matches
visible to Access Information Center users with either Security Team Member or Administrator roles.
The Matches table requires the storage of discovered sensitive data within the Access Analyzer
database or it will be blank.

![Sensitive Content Details report at the Team level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/dropbox/team/teamsensitivecontentdetails.webp)

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

# Sensitive Content Summary Report

The Sensitive Content Summary report at the Team level provides a count of files where criteria
matches were found on the selected instance. This report includes a Details table.

![Sensitive Content Summary report at the Team level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/dropbox/team/teamsensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – SQL server name
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of files with criteria matches

There is one table at the bottom displaying Details on the files where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

# Sensitive Content Summary Report

The Sensitive Content Summary report at the **Exchange** node provides a count of files where
criteria matches were found in the targeted environment. This report includes a Details table.

![Sensitive Content Summary report](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/sensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – SQL server name
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of files with criteria matches

There is one table at the bottom displaying Details on the files where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

# Sensitive Content Details Report

The Sensitive Content Details report at the server level provides details of files where criteria
matches were found on the selected instance. This report includes a table with criteria matches
visible to Access Information Center users with either Security Team Member or Administrator roles.
The Matches table requires the storage of discovered sensitive data within the Access Analyzer
database or it will be blank.

![Sensitive Content Details report at the server level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/exchange/server/serversensitivecontentdetails.webp)

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

# Sensitive Content Summary Report

The Sensitive Content Summary report at the server level provides a count of files where criteria
matches were found on the selected instance. This report includes a Details table.

![Sensitive Content Summary report at the server level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/exchange/server/serversensitivecontentsummary.webp)

This report is comprised of the following columns:

- Server Name – Name of the server
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of files with criteria matches

There is one table at the bottom displaying Details on the files where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of files with criteria matches
- Attributes – Comma separated list of Attributes found for the identity
