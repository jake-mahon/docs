# Welcome

Roles and Permissions are not a set once and forget about them activity. Both should be reviewed regularly to ensure your data is secured and users in your organization have the right access. __User Access Review__ streamlines this review process, making it easy to manage and review all access to your NetSuite data. UAR users must have a [license](install_app.md).

## Terminology

Here are the basic terms used throughout the UAR guide:

- UAR Reviewer Roles
- Review Types
- Access Review
- Principle of Least Privilege
- Permissions and Roles

### UAR Reviewer Roles

Access and permissions to UAR is controlled by roles:

- __UAR Admin__ manages the UAR process. This reviewer can:

  - Assign Role Owners.
  - Create Single or Global User Access Reviews.
  - Check Status of UARs.
  - Send reminders to Owners.
  - Run reporting.
- __UAR Owner__ performs Role Permission and Role Membership Reviews. This reviewer can:

  - Review and Complete UARs.
  - Request Changes to Permission or Permission Levels to owned Roles.
  - Request Changes to Role Assignments for owned Roles.
  - Designate an Additional Approver for a Membership Review for owned Roles. For example, a user that does not report to you has a Role you own. You may want the user’s supervisor to also approve the Role Assignment.
- __UAR Auditor__ read-only access to the UAR to perform auditing functions.
- __UAR Additional Reviewer__ performs assigned membership reviews. Additional reviewers are assigned by the UAR Owners.

### Review Types

- __Membership__ review the roles and global permissions assigned to individuals is appropriate.
- __Permissions__ review the permissions and levels assigned to a role.

Reviews can be single or global. A global review is a group of single reviews assigned to one or more owners.

### Access Review

- Roles only have required permissions.
- Users only have required roles.
- Unused roles and access are identified and removed.
- Folder access is restricted.

### Principle of Least Privilege

- Users and scripts only have the access needed to do their tasks.
- Minimize the ability for users or outside actors to change or steal data.

### Permissions and Roles

_Permissions_ are assigned to _roles_, _roles_ are assigned to _users_. This follows the NetSuite concepts.

Permission Levels:

- __None__ - remove the permission from the user.
- __View__
- __Create__ (View/Create)
- __Edit__ (View/Create/Edit)
- __Full__ (View/Create/Edit/Delete)

Permissions are categorized by:

- Transactions
- Reports
- Lists, including Master Data and Configuration
- Setup
- Custom Records
