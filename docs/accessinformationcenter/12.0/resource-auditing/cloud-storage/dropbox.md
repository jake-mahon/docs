# Dropbox Reports

Dropbox reports are accessed through the Resource Audit interface. Explore the Dropbox resources by
expanding the levels within the Resources pane and selecting the desired resource. The data within
these reports is collected by the Access Analyzer Dropbox solution. See the Dropbox Solution topic
in the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
additional information.

Dropbox reports fall into the following categories:

- Permissions reports
- Sensitive Data Content reports

The following report is available at the **Dropbox** node:

- [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md)

# Dropbox Reports Quick Reference Guide

The following Dropbox reports are available for selections within the Resources pane.

## Dropbox Node Report

The following report is available at the Dropbox node level:

| Report                                                                                                                          | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md) | Provides a count of files where criteria matches were found in the targeted environment. This report includes a Details table. |

## Dropbox > Team Level Reports

The following reports are available at the Team level:

| Report                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Sensitive Content Details Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md) | Provides details of files where criteria matches were found on the selected instance. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md) | Provides a count of files where criteria matches were found on the selected instance. This report includes a Details table.                                                                                                                                                                                                                                               |

## Dropbox > Team > Team Member Level Reports

The following reports are available at the Team Member level:

| Report                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Permissions Report](/docs/accessinformationcenter/12.0/resource-auditing/cloud-storage/dropbox.md)                     | Shows the permissions for the trustee on the selected resource.                                                                                                                                                                                                                                                                                                                                   |
| [Sensitive Content Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-detection.md) | Provides a list of files and a hit count per file where criteria matches were found on the selected resource. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |

## Dropbox > Team > Team Member > Resource & Subfolder Level Reports

The following reports are available at the Resource and subfolder level:

| Report                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Permissions Report](/docs/accessinformationcenter/12.0/resource-auditing/cloud-storage/dropbox.md)                     | Shows the permissions for the trustee on the selected resource.                                                                                                                                                                                                                                                                                                                                   |
| [Sensitive Content Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-detection.md) | Provides a list of files and a hit count per file where criteria matches were found on the selected resource. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |

# Team Level Reports

The following reports are available at the Team level:

- Activity Report – Displayed but not populated at the Team level
- [Sensitive Content Details Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md)
- [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md)

# Team Member, Resource & Subfolder Level Reports

The following reports are available at the Team Member, Resource, and Subfolder level:

- Activity Report – Displayed but not populated at the Team Member, Resource, and Subfolder level
- [Permissions Report](/docs/accessinformationcenter/12.0/resource-auditing/cloud-storage/dropbox.md)
- [Sensitive Content Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-detection.md)

# Permissions Report

The Permissions report at the Team Member, Resource, and Subfolder level shows the permissions for
the trustee on the selected resource.

![Permissions report at the Team Member, Resource, and Subfolder level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/dropbox/teammemberresource/teammemberpermissions.webp)

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
  by the Access Analyzer data collection and analysis configuration to identify stale accounts)
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
