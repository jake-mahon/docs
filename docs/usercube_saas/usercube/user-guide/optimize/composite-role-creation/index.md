# Create a Composite Role

How to define composite roles in order to create sets of single roles easy to assign. See the [
Composite Role
](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/provisioning/compositerole/index.md) and [
Create Roles in the Role Catalog
](/docs/usercube_saas/usercube/user-guide/set-up/single-roles-catalog-creation/index.md)topics for additional information.

## Overview

A composite role is a set of single roles that are usually assigned together, because they revolve around the same application, or the same job, etc. Composite roles are aggregates of single roles, they can help organize the role catalog. See the [
Composite Role
](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/provisioning/compositerole/index.md) topic for additional information.

![Schema](/img/product_docs/usercube/usercube/user-guide/optimize/composite-role-creation/compositeroles_applicativeroles.png)

A composite role is a business role comprehensible by managers. It provides an additional layer of abstraction above existing entitlements and single roles. We can say that if a single role allows a user to perform a task, a composite role allows them to perform a job.

### Composite roles and Role Mining

Composite roles can also be created based on the rules provided by Role Mining. Rules link roles to dimensions. See the [
Perform Role Mining
](/docs/usercube_saas/usercube/user-guide/optimize/assignment-automation/role-mining/index.md) topic for additional information.

The following example shows single roles from A to F. Role Mining suggested the rules on the schema, linking these single roles to the organizations R&D and Project as well as to the functions developer, writer, contractor and project manager. The idea is to use these rules to create composite roles. Here, we clearly have one role for R&D-developer, one for R&D-writer, Project-contractor and Project-project manager. Thus, it is clear here that composite roles add an abstraction layer.

![Example](/img/product_docs/usercube/usercube/user-guide/optimize/composite-role-creation/compositeroles_schema.png)

Single role rules link composite roles to single roles: a single role rule states that specific single roles are assigned according to specific criteria, particularly composite roles. See the [Single Role Rule](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/provisioning/singlerolerule/index.md) and [
Create Roles in the Role Catalog
](/docs/usercube_saas/usercube/user-guide/set-up/single-roles-catalog-creation/index.md)topics for additional information. Thus, a composite role assignment can imply specific single role assignments.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owners who know the application's users, entitlements and data model.

| Input | Output |
| --- | --- |
| Role catalog (required) | Composite roles |

See the [
Create Roles in the Role Catalog
](/docs/usercube_saas/usercube/user-guide/set-up/single-roles-catalog-creation/index.md) topic for additional information.

## Create a Composite Role

Create a composite role by proceeding as follows:

__Step 1 –__ On the home page in the __Configuration__ section, click on __Access Roles__ to access the roles page.

![Home Page - Access Roles](/img/product_docs/usercube/usercube/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.png)

__Step 2 –__ On the roles page, click on the adequate category and create a role by clicking on __+ New__ at the top right corner.

__Step 3 –__ Fill in the fields.

![singlerolescatalog_createcompositerole_v62](/img/product_docs/usercube/usercube/user-guide/optimize/composite-role-creation/singlerolescatalog_createcompositerole_v62.png)

- __Identifier__: must be unique among roles and without any whitespace.
- __Name__: will be displayed in the UI to identify the single role.
- __Policy__: policy in which the role exists.
- __Entity Type__: entity type targeted by the role.
- __Category__: category assigned to the role.
- __Secondary Categories__: other potential categories assigned to the role.
- __Approval Workflow__: represents the number of validations required to assign the role.
- Lock the end date: locks manual permission at the end date. Has four options:

  - Inherited: the policy's setting will be used.
  - Explicit: at the time of assignment, the end date can be specified manually or can be locked to the applicable context rule.
  - __Never__: the end date will never be locked and needs to be specified manually.
  - __Always__: the end date is always locked according to the applicable context rule.
- __Approve Role Implicitly__: needs at least a simple approval workflow. __Implicit__ mode bypasses the approval step(s) if the person who issues the role request is also the role officer. __Explicit__ refuses said bypass. __Inherited__ follows the policy decision to approve roles implicitly or not.
- __Hide in Simplified View__: hides the role from the users' __Simplified View__ in __View Permissions__ dialog. This setting does not apply to roles which are either inferred or have workflow states which require manual action.
- __Comment Management on Permission Review__: to change if different from the role policy.
- __Maximum Duration__: duration (in minutes) after which the role will be automatically revoked, if no earlier end date is specified. It impacts only the roles which are manually assigned after the maximum duration is set. Pre-assigned roles are not impacted. If no duration is set on the role, the __MaxDuration__ of the associated policy is applied. If the __MaxDuration__ is set to 0 on the role, it prevents the associated policy from applying its __MaxDuration__ to it.

__Step 4 –__ Click on __Create__ and see a line added on the roles page.

__Step 5 –__ Create at least one single role rule with the composite role as a criterion.

## Impact of Modifications

When deleting a composite role, caution must be used when deleting the corresponding single role rules. Indeed, these rules thus lose their criteria and may be applied to far too many people after that.

Simulations are available in order to anticipate the changes induced by a creation/modification/deletion in roles and single role rules. See the [
Perform a Simulation
](/docs/usercube_saas/usercube/user-guide/optimize/simulation/index.md)topic for additional information.

## Verify Composite Role Creation

In order to verify the process, check that the role and rule are created with the right parameters.

For roles, click on __Access Roles__ on the home page in the __Configuration__ section.

![Home Page - Access Roles](/img/product_docs/usercube/usercube/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.png)

Select composite roles and find the role you created inside the right category and with the right parameters.

![Access Composite Roles](/img/product_docs/usercube/usercube/user-guide/optimize/composite-role-creation/compositeroles_testroles_v602.png)

For rules, follow the instructions about assignment rules. See the [
Automate Role Assignments
](/docs/usercube_saas/usercube/user-guide/optimize/assignment-automation/automate-role-assignment/index.md)
