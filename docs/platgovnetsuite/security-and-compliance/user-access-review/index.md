# Accessing User Access Review

The User Access Review bundle must be [installed](/docs/platgovnetsuite/security-and-compliance/user-access-review/installation.md), and users must have NetSuite
accounts and a UAR license to access User Access Review.

**User Access Review** is available on the NetSuite menu bar if you have a
[license](/docs/platgovnetsuite/security-and-compliance/user-access-review/installation.md). If it is not on your menu, contact your Netwrix or NetSuite
administrator.

![User Access Review menu](/img/product_docs/platgovnetsuite/uar/uar_menu.webp)

1. Select **User Access Review** > **User Access Review** > **Open** from the NetSuite menu bar.
2. Click your **Role** to log in to the UAR app.

   ![Select your role](/img/product_docs/platgovnetsuite/uar/uar_role.webp)

Here is an example of the UAR Admin dashboard:

![UAR Admin Dashboard](/img/product_docs/platgovnetsuite/uar/dashboard_admin.webp)

## Dashboard

Dashboards are role specific. There are common elements for all the dashboards.

- **Menu bar**: Home icon, current role, and **Logout** are present for all roles. Lists and History
  options depend on the role.
- **Shortcuts**: Drill down into the specifics when you click on a shortcut. Available for all
  roles.
- **Charts**: Visual representation of the current reviews. Admin and Owner only.
- **Notifications**: system notifications about your reviews. Admin, Owner and Additional Reviewer
  only.

# Welcome

Roles and Permissions are not a set once and forget about them activity. Both should be reviewed
regularly to ensure your data is secured and users in your organization have the right access.
**User Access Review** streamlines this review process, making it easy to manage and review all
access to your NetSuite data. UAR users must have a [license](/docs/platgovnetsuite/security-and-compliance/user-access-review/installation.md).

## Terminology

Here are the basic terms used throughout the UAR guide:

- UAR Reviewer Roles
- Review Types
- Access Review
- Principle of Least Privilege
- Permissions and Roles

### UAR Reviewer Roles

Access and permissions to UAR is controlled by roles:

- **UAR Admin** manages the UAR process. This reviewer can:

  - Assign Role Owners.
  - Create Single or Global User Access Reviews.
  - Check Status of UARs.
  - Send reminders to Owners.
  - Run reporting.

- **UAR Owner** performs Role Permission and Role Membership Reviews. This reviewer can:

  - Review and Complete UARs.
  - Request Changes to Permission or Permission Levels to owned Roles.
  - Request Changes to Role Assignments for owned Roles.
  - Designate an Additional Approver for a Membership Review for owned Roles. For example, a user
    that does not report to you has a Role you own. You may want the user’s supervisor to also
    approve the Role Assignment.

- **UAR Auditor** read-only access to the UAR to perform auditing functions.
- **UAR Additional Reviewer** performs assigned membership reviews. Additional reviewers are
  assigned by the UAR Owners.

### Review Types

- **Membership** review the roles and global permissions assigned to individuals is appropriate.
- **Permissions** review the permissions and levels assigned to a role.

Reviews can be single or global. A global review is a group of single reviews assigned to one or
more owners.

### Access Review

- Roles only have required permissions.
- Users only have required roles.
- Unused roles and access are identified and removed.
- Folder access is restricted.

### Principle of Least Privilege

- Users and scripts only have the access needed to do their tasks.
- Minimize the ability for users or outside actors to change or steal data.

### Permissions and Roles

_Permissions_ are assigned to _roles_, _roles_ are assigned to _users_. This follows the NetSuite
concepts.

Permission Levels:

- **None** - remove the permission from the user.
- **View**
- **Create** (View/Create)
- **Edit** (View/Create/Edit)
- **Full** (View/Create/Edit/Delete)

Permissions are categorized by:

- Transactions
- Reports
- Lists, including Master Data and Configuration
- Setup
- Custom Records
