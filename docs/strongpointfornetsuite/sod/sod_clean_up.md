# SoD Clean Up

The new __SoD__ > __SoD Clean Up__ menu accesses the power of Saved Searches to enable easy, efficient clean up of your roles. Many NetSuite accounts are littered with unused roles and role assignments. Eliminating this clutter reduces the violations you encounter, and makes it easier to see exactly what is going on in your accounts.

Platform Governance for NetSuite automatically removes employees from SoD Approval requests if one of these conditions occur:

- NetSuite access is removed
- Applicable role(s) are removed
- Employee is In-activatated

Netwrix recommends performing SoD testing and role clean up in a sandbox account. This lays the groundwork for a smooth transition to production with minimal compliance incidents to review.

Saved Searches are:

- __Employees with Standard Roles__ identifies all employees assigned to standard roles.
- __Employees with Unused Logins__ identifies any employees who have not logged in.
- __Employee Permission Changes__ identifies all employee permission changes that have occurred.
- __Unused Roles - Not Assigned__ identifies roles not assigned to any user.
- __Unused Roles - Assigned But Not In Use__ identifies roles assigned to a user, but never used.
- __Role Assignments with No Login in Six Months__ identifies assigned roles where a user has not logged in within the past six months.
- __Role Permission Change__ identifies all role permission changes that have occurred.
- __Employees with Multiple Roles Detailed__ identifies users with multiple roles and lists the roles. Multiple roles create conflicts. Users who require multiple roles for support or administration can be isolated in a sandbox using Platform Governance for NetSuite to keep the sandbox the same as production for troubleshooting and support.
- __Employees with Multiple Roles Summary__ identifies users with multiple roles.
- __Current Global Permission__ identifies users with global permissions, which can cause conflicts. Best practice is to not use global permissions on a long-term basis.
