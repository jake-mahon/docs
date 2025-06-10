# Cleanup Job Group

The __Active Directory__ > __Cleanup__ Job Group identifies potential stale and unused users, computers, and groups as well as issues with group membership. Remediation workflows are included to deprovision unnecessary objects.

__CAUTION:__ Apply changes only to intended target Active Directory objects, and ensure only the changes required are enabled. Enabling and executing action modules without consideration can negatively impact Active Directory.

___RECOMMENDED:___ Run the actions in a test environment before making changes to a production environment.

![Cleanup Job Group Overview page](/img/product_docs/accessanalyzer/enterpriseauditor/admin/runninginstances/overviewpage.webp)

The job groups in the Cleanup Job Group are:

- [1.Groups Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/cleanup/groups/overview.md) – Provides an automated workflow to safely deprovision groups, as well as the ability to stamp security groups with what resources they are given access to
- [2.Users Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/cleanup/users/overview.md) – Provides an automated workflow to deprovision stale and unused user accounts
- [3.Computers Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/cleanup/computers/overview.md) – Provides an automated workflow to deprovision stale computer accounts
- [AD\_CleanupProgress Job](/docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/cleanup/ad_cleanupprogress.md) – Tracks Active Directory computer, group, and user exceptions over time. This information can be used to provide a high-level picture of an organization's Active Directory cleanup effort.
