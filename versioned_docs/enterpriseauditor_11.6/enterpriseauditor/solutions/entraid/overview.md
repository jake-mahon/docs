# Entra ID Solution

The Entra ID Solution is a comprehensive set of audit jobs and reports that provide the information regarding Microsoft Entra ID configuration, operational management, and troubleshooting. The jobs within this group help pinpoint potential areas of administrative and security concerns related to Microsoft Entra ID users and groups, including syncing with on-premises Active Directory.

Supported Platforms

- Microsoft Entra ID (formerly Azure AD)

Requirements, Permissions, and Ports

See the [Microsoft Entra ID Tenant Target Requirements](/versioned_docs/enterpriseauditor_11.6/config/entraid/overview.md) topic for additional information.

Location

The Entra ID Solution requires a special Enterprise Auditor license. It can be installed from the Instant Job Wizard, see the [Instant Job Wizard](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/overview.md) topic for additional information. Once it has been installed into the Jobs tree, navigate to the solution: __Jobs__ > __Entra ID__.

The .Entra ID Inventory Job Group collects the data. The Entra ID Job Groups run analysis and generate reports on the collected data.

## Job Groups

![Entra ID Job Group Overview page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/runninginstances/overviewpage.png)

The job groups in the Entra ID Solution are:

- [1.Groups Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/entraid/groups/overview.md) – Identifies group conditions and pinpoints potential areas of administrative concern
- [2.Users Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/entraid/users/overview.md) – Identifies areas of administrative concern related to Microsoft Entra ID users
