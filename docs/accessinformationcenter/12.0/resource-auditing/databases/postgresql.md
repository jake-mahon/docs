---
title: PostgreSQL Database Reports
sidebar_label: PostgreSQL
description: Access PostgreSQL database reports through Resource Audit interface with data collected by Access Analyzer PostgreSQL solution for database monitoring.
---

# PostgreSQL Reports

PostgreSQL reports are accessed through the Resource Audit interface. Explore the PostgreSQL
resources by expanding the levels within the Resources pane and selecting the desired resource. The
data within these reports is collected by the Access Analyzer PostgreSQL solution. See the
PostgreSQL Solution topic in the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
additional information.

A single PostgreSQL Server can have multiple instances. Each instance where data is collected has
its own node in the Access Information Center. PostgreSQL reports fall into the following
categories:

- Permissions reports
- Sensitive Data Content reports

The following report is available at the **PostgreSQL** node:

- [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md)

# PostgreSQL Reports Quick Reference Guide

The following PostgreSQL reports are available for selections within the Resources pane.

## PostgreSQL Node Report

The following report is available at the PostgreSQL node level:

| Report                                                                                                                          | Description                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md) | Provides a count of databases where criteria matches were found in the targeted environment. This report includes a Details table. |

## PostgreSQL > Instance Level Reports

The following reports are available at the instance level:

| Report                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Sensitive Content Details Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md) | Provides details of tables where criteria matches were found on the selected instance. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md) | Provides a count of tables where criteria matches were found on the selected instance. This report includes a Details table.                                                                                                                                                                                                                                               |

## PostgreSQL > Instance > Databases Node Reports

The following reports are available at the Databases node level:

| Report                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Permissions Report](/docs/accessinformationcenter/12.0/resource-auditing/databases/postgresql.md)                      | Shows the permissions for the trustee on the selected resource.                                                                                                                                                                                                                                                                                                                                     |
| [Sensitive Content Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-detection.md) | Provides a list of tables and a hit count per table where criteria matches were found on the selected resource. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |

## PostgreSQL > Instance > Database Node > Database and Table Level Reports

The following reports are available at the database and table levels:

| Report                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Permissions Report](/docs/accessinformationcenter/12.0/resource-auditing/databases/postgresql.md)                      | Shows the permissions for the trustee on the selected resource.                                                                                                                                                                                                                                                                                                                                    |
| [Sensitive Content Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-detection.md) | Provides a list of paths and a hit count per table where criteria matches were found on the selected resource. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |

# Instance Level Reports

The following reports are available at the instance level:

- Activity Report – Displayed but not populated at the instance level
- [Sensitive Content Details Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md)
- [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md)

# Database & Table Level Reports

The following reports are available at the database and table levels:

- Activity Report – Displayed but not populated at the database and table levels
- [Permissions Report](/docs/accessinformationcenter/12.0/resource-auditing/databases/postgresql.md)
- [Sensitive Content Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-detection.md)

# Permissions Report

The Permissions report at the database and table level shows the permissions for the trustee on the
selected resource.

![Permissions report at the database and tables level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/postgresql/databasetable/databasepermissions.webp)

This report is comprised of the following columns:

- Trustee Type – Type of the trustee (for example, Domain User, Database User, or Domain Group)
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
  by the Access Analyzer data collection and analysis configuration to identify stale accounts)
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
