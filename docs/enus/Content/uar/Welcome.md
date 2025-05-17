---
sidebar_position: 1354
title: Welcome
---

# Welcome

Roles and Permissions are not a set once and forget about them activity. Both should be reviewed regularly to ensure your data is secured and users in your organization have the right access. **User Access Review** streamlines this review process, making it easy to manage and review all access to your NetSuite data. UAR users must have a [license](install_app#Licensin "Licensing the App").

## Terminology

Here are the basic terms used throughout the UAR guide:

* [UAR Reviewer Roles](#RevRoles)
* [Review Types](#Review)
* [Access Review](#Access)
* [Principle of Least Privilege](#Principl)
* [Permissions and Roles](#Permissi)

### UAR Reviewer Roles

Access and permissions to UAR is controlled by roles:

* **UAR Admin** manages the UAR process. This reviewer can:

  * Assign Role Owners.
  * Create Single or Global User Access Reviews.
  * Check Status of UARs.
  * Send reminders to Owners.
  * Run reporting.
* **UAR Owner** performs Role Permission and Role Membership Reviews. This reviewer can:

  * Review and Complete UARs.
  * Request Changes to Permission or Permission Levels to owned Roles.
  * Request Changes to Role Assignments for owned Roles.
  * Designate an Additional Approver for a Membership Review for owned Roles. For example, a user that does not report to you has a Role you own. You may want the user’s supervisor to also approve the Role Assignment.
* **UAR Auditor** read-only access to the UAR to perform auditing functions.
* **UAR Additional Reviewer** performs assigned membership reviews. Additional reviewers are assigned by the UAR Owners.

### Review Types

* **Membership** review the roles and global permissions assigned to individuals is appropriate.
* **Permissions** review the permissions and levels assigned to a role.

Reviews can be single or global. A global review is a group of single reviews assigned to one or more owners.

### Access Review

* Roles only have required permissions.
* Users only have required roles.
* Unused roles and access are identified and removed.
* Folder access is restricted.

### Principle of Least Privilege

* Users and scripts only have the access needed to do their tasks.
* Minimize the ability for users or outside actors to change or steal data.

### Permissions and Roles

*Permissions* are assigned to *roles*, *roles* are assigned to *users*. This follows the NetSuite concepts.

Permission Levels:

* **None** - remove the permission from the user.
* **View**
* **Create** (View/Create)
* **Edit** (View/Create/Edit)
* **Full** (View/Create/Edit/Delete)

Permissions are categorized by:

* Transactions
* Reports
* Lists, including Master Data and Configuration
* Setup
* Custom Records