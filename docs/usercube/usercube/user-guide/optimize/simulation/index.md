# Perform a Simulation

How to assess the impact of a modification on the role model, including the role catalog, role assignment rules and resource correlation rules, using a dedicated [Create a Policy](/docs/product_docs/usercube/usercube/user-guide/optimize/policy-creation/index.md). See the [
Create Roles in the Role Catalog
](/docs/product_docs/usercube/usercube/user-guide/set-up/single-roles-catalog-creation/index.md), [
Automate Role Assignments
](/docs/product_docs/usercube/usercube/user-guide/optimize/assignment-automation/automate-role-assignment/index.md)[
Correlate Resources
](/docs/product_docs/usercube/usercube/user-guide/set-up/categorization/correlation/index.md), and [Create a Policy](/docs/product_docs/usercube/usercube/user-guide/optimize/policy-creation/index.md) topics for additional information.

## Overview

Identity Manager's simulations gather roles and rules which are to be created, modified or deleted, without being inserted in the actual role model straight away. More specifically, a simulation can involve:

- Correlation rules and classification Rule;
- Scalar rules and navigation rules;
- Resource Type rules;
- [
  Single Role
  ](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/provisioning/singlerole/index.md) and [
  Composite Role
  ](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/provisioning/compositerole/index.md);
- [Single Role Rule](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/provisioning/singlerolerule/index.md) and [Composite Role Rule](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/provisioning/compositerolerule/index.md).

See the [
Correlate Resources
](/docs/product_docs/usercube/usercube/user-guide/set-up/categorization/correlation/index.md) [
Resource Classification Rule
](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/provisioning/resourceclassificationrule/index.md), and [Resource Type](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md) topics for additional information.

A simulation can also be created by the [
Perform Role Mining
](/docs/product_docs/usercube/usercube/user-guide/optimize/assignment-automation/role-mining/index.md) for the automation of role assignments.

Through simulation, integrators can:

1. create, modify or delete roles and rules in a given policy;

   Only one simulation can be active per policy.
2. observe via simulation reports the impact on the whole system, i.e. both assignments and provisioning results, before the changes are applied;
3. decide to confirm or cancel changes.

NETWRIX recommends using simulation whenever performing an action (creation/modification/deletion) on the role model.

## Participants and Artifacts

Integrators are able to perform simulation if they master the new role model.

| Input | Output |
| --- | --- |
| Role catalog (optional)   Automate Role Assignments (optional)   Categorize Resources (optional) | Updated role model |

See the [
Create Roles in the Role Catalog
](/docs/product_docs/usercube/usercube/user-guide/set-up/single-roles-catalog-creation/index.md), [
Automate Role Assignments
](/docs/product_docs/usercube/usercube/user-guide/optimize/assignment-automation/automate-role-assignment/index.md), and [
Categorize Resources
](/docs/product_docs/usercube/usercube/user-guide/set-up/categorization/index.md) topics for additional information.

## Launch a Simulation

Launch a simulation by proceeding as follows:

1. Access the simulation list by clicking on __Simulations__ on the home page, in the __Configuration__ section.

   ![Home - Simulations](/static/img/product_docs/usercube/usercube/user-guide/optimize/simulation/home_simulations_v600.png)

   ![Simulation List](/static/img/product_docs/usercube/usercube/user-guide/optimize/simulation/simulation_list_v602.png)
2. Create a new simulation by clicking on the addition button at the top right corner.

   ![Addition Icon](/static/img/product_docs/usercube/usercube/user-guide/set-up/categorization/classification/iconadd_v602.svg)
3. Fill in the fields.

   ![Simulation List](/static/img/product_docs/usercube/usercube/user-guide/optimize/simulation/simulation_new_v602.png)
4. Click on __+ Create__.
5. Perform changes through the __Roles Changes__ and __Rules Changes__ tabs and the following icons, respectively for addition, modification and deletion:

   ![Edition - Approval Icon](/static/img/product_docs/usercube/usercube/user-guide/set-up/categorization/classification/iconadd_v602.svg)

   ![Recommendation Icon](/static/img/product_docs/usercube/usercube/user-guide/optimize/simulation/simulation_iconedit_v600.svg)

   ![Discouragement Icon](/static/img/product_docs/usercube/usercube/user-guide/optimize/simulation/simulation_icondelete_v600.svg)

   At any time, you can click on the line of a previously made change to access its description, even click on __Cancel__ to erase it.

   ![Cancel Change](/static/img/product_docs/usercube/usercube/user-guide/optimize/simulation/simulation_cancel_v602.png)
6. Click on __Start__ to launch the simulation.

   ![Start Simulation](/static/img/product_docs/usercube/usercube/user-guide/optimize/simulation/simulation_start_v602.png)
7. After a few seconds, click on __Refresh__ to display the simulation results.
8. Observe the results in the overview and in the Excel report available via the Download button.

   ![Download Icon](/static/img/product_docs/usercube/usercube/user-guide/set-up/initial-identities-loading/load-identities/icondownload_v602.svg)

## Shift from Simulation to Production

After all needed changes have been simulated, you can decide to apply or cancel them.

![Apply or Cancel Changes](/static/img/product_docs/usercube/usercube/user-guide/optimize/simulation/simulation_decision_v600.png)

Then, the simulation is no longer active.

Clicking on __Apply__ applies the simulated changes to the role model. You need to launch the [
Compute Role Model Task
](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/jobs/tasks/server/computerolemodeltask/index.md) to observe the actual changes in users' entitlements.

## Impact of Modifications

Once you've applied or canceled the changes of a simulation, said simulation is no longer active. If you still need to simulate changes on the same policy, you can create a new simulation.

Deleting a simulation doesn't impact the role model. It simply undoes the simulated changes which haven't been applied yet.

## Verify Modification

In order to verify the process, check that the roles and rules are created with the right parameters.

For roles, click on __Access Roles__ on the home page in the __Configuration__ section.

![Home Page - Access Roles](/static/img/product_docs/usercube/usercube/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.png)

Select the type of role that you want to check, and find the roles you created inside the right category and with the right parameters.

![Select Roles](/static/img/product_docs/usercube/usercube/user-guide/set-up/single-roles-catalog-creation/category-creation/categorycreation_test_v602.png)

For rules, click on __Access Rules__ on the home page in the __Configuration__ section.

![Home Page - Access Rules](/static/img/product_docs/usercube/usercube/user-guide/set-up/categorization/classification/home_rules_v602.png)

Select the type of rule that you want to check, and find the rules you created with the right parameters.
