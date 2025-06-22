# Dropbox Reports

Dropbox reports are accessed through the Resource Audit interface. Explore the Dropbox resources by
expanding the levels within the Resources pane and selecting the desired resource. The data within
these reports is collected by the Enterprise Auditor Dropbox solution. See the Dropbox Solution
topic in the
[Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
for additional information.

Dropbox reports fall into the following categories:

- Permissions reports
- Sensitive Data Content reports

The following report is available at the **Dropbox** node:

- [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resource-audit/cloud-storage/dropbox.md)

# Sensitive Content Summary Report

The Sensitive Content Summary report at the **Dropbox** node provides a count of files where
criteria matches were found in the targeted environment. This report includes a Details table.

![Sensitive Content Summary report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/postgresql/sensitivecontentsummary.webp)

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

# Team Level Reports

The following reports are available at the Team level:

- Activity Report – Displayed but not populated at the Team level
- [Sensitive Content Details Report](/docs/accessinformationcenter/11.6/resource-audit/cloud-storage/dropbox.md)
- [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resource-audit/cloud-storage/dropbox.md)

# Sensitive Content Details Report

The Sensitive Content Details report at the Team level provides details of files where criteria
matches were found on the selected instance. This report includes a table with criteria matches
visible to Access Information Center users with either Security Team Member or Administrator roles.
The Matches table requires the storage of discovered sensitive data within the Enterprise Auditor
database or it will be blank.

![Sensitive Content Details report at the Team level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/dropbox/team/teamsensitivecontentdetails.webp)

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

![Sensitive Content Summary report at the Team level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/dropbox/team/teamsensitivecontentsummary.webp)

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

# Team Member, Resource & Subfolder Level Reports

The following reports are available at the Team Member, Resource, and Subfolder level:

- Activity Report – Displayed but not populated at the Team Member, Resource, and Subfolder level
- [Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/cloud-storage/dropbox.md)
- [Sensitive Content Report](/docs/accessinformationcenter/11.6/resource-audit/cloud-storage/dropbox.md)

# Permissions Report

The Permissions report at the Team Member, Resource, and Subfolder level shows the permissions for
the trustee on the selected resource.

![Permissions report at the Team Member, Resource, and Subfolder level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/dropbox/teammemberresource/teammemberpermissions.webp)

This report is comprised of the following columns:

- Trustee Type – Type of the trustee (for example, Domain User or Domain Group)
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

The Sensitive Content report at the Team Member, Resource, and Subfolder level provides a list of
tables and a hit count per table where criteria matches were found on the selected resource. This
report includes a table with criteria matches visible to Access Information Center users with either
Security Team Member or Administrator roles. The Matches table requires the storage of discovered
sensitive data within the Enterprise Auditor database or it will be blank.

![Sensitive Content report at the Team Member, Resource, and Subfolder level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/dropbox/teammemberresource/teammembersensitivecontent.webp)

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
