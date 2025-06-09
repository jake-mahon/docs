# Review Assigned Roles

How to review user permissions grouped by categories.

__NOTE:__ __Assigned Roles__ is currently in a preview state and additional functionality will be added in a future release.

## Overview

The __Assigned Roles__ section displays a list of the users permissions grouped by categories. This screen is visible for managers and displays the list of employees part of the team, their roles and permissions.

You can review all assigned single roles by category. Through filters you can choose to focus on:

- __Entity Type__
- __Workflow State__
- __Policy__
- __Role__
- Other custom filters

## Participants and Artifacts

This operation should be performed by a user with the right permissions. See the [
Configure a User Profile
](/docs/usercube/usercube/user-guide/set-up/user-profile-configuration/index.md) topic for additional information.

The following example provides the rights for the Administrator profile to see the Assigned Roles page on the __Entity Type__ directory user. See the [
Create a Provisioning Rule
](/docs/usercube/usercube/user-guide/set-up/provisioning-rule-creation/index.md) and [
Create Roles in the Role Catalog
](/docs/usercube/usercube/user-guide/set-up/single-roles-catalog-creation/index.md) topics for additional information.

Code attributes enclosed with <> need to be replaced with a custom value before entering the script in the command line.

```
<AssignedRolesAccessControlRules EntityType="Directory_User" Profile="Administrator" />
```

## Review Assigned Roles

Review the Assigned Roles by proceeding as follows:

![assignedroles](/img/product_docs/usercube/usercube/user-guide/administrate/assigned-roles/assignedroles.png)

__Step 1 –__ On the home page, in the Administration section of the UI click on Assigned Roles.

![assignedrolesscreen](/img/product_docs/usercube/usercube/user-guide/administrate/assigned-roles/assignedrolesscreen.png)

__Step 2 –__ View the list of users with different assigned roles and filter them by __Entity Type__, __Workflow State__, __Policy__, __Role__ or by using a custom filter.

__Step 3 –__ Download an .xlsx file list of the __Assigned Roles__ users according to the selected filters.

Revisit the __Assigned Roles__ section any time you need to review the information related to Assigned roles.
