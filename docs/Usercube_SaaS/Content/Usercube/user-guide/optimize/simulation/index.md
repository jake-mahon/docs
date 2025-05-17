---
sidebar_position: 610
title: Perform a Simulation
---

# Perform a Simulation

How to assess the impact of a modification on the role model, including the role catalog, role assignment rules and resource correlation rules, using a dedicated [Create a Policy](../policy-creation/index). See the [Create Roles in the Role Catalog](../../set-up/single-roles-catalog-creation/index), [Automate Role Assignments](../assignment-automation/automate-role-assignment/index)[Correlate Resources](../../set-up/categorization/correlation/index), and [Create a Policy](../policy-creation/index "Create a Policy") topics for additional information.

## Overview

Identity Manager's simulations gather roles and rules which are to be created, modified or deleted, without being inserted in the actual role model straight away. More specifically, a simulation can involve:

* Correlation rules and classification Rule;
* Scalar rules and navigation rules;
* Resource Type rules;
* [Single Role](../../../integration-guide/toolkit/xml-configuration/provisioning/singlerole/index "Single Role") and [Composite Role](../../../integration-guide/toolkit/xml-configuration/provisioning/compositerole/index "Composite Role");
* [Single Role Rule](../../../integration-guide/toolkit/xml-configuration/provisioning/singlerolerule/index "Single Role Rule") and [Composite Role Rule](../../../integration-guide/toolkit/xml-configuration/provisioning/compositerolerule/index "Composite Role Rule").

See the [Correlate Resources](../../set-up/categorization/correlation/index) [Resource Classification Rule](../../../integration-guide/toolkit/xml-configuration/provisioning/resourceclassificationrule/index), and [Resource Type](../../../integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index) topics for additional information.

A simulation can also be created by the [Perform Role Mining](../assignment-automation/role-mining/index) for the automation of role assignments.

Through simulation, integrators can:

1. create, modify or delete roles and rules in a given policy;

   :::note
Only one simulation can be active per policy.
   :::
2. observe via simulation reports the impact on the whole system, i.e. both assignments and provisioning results, before the changes are applied;
3. decide to confirm or cancel changes.

NETWRIX recommends using simulation whenever performing an action (creation/modification/deletion) on the role model.

## Participants and Artifacts

Integrators are able to perform simulation if they master the new role model.

| Input | Output |
| --- | --- |
| Role catalog (optional) Automate Role Assignments (optional) Categorize Resources (optional) | Updated role model |

See the [Create Roles in the Role Catalog](../../set-up/single-roles-catalog-creation/index), [Automate Role Assignments](../assignment-automation/automate-role-assignment/index), and [Categorize Resources](../../set-up/categorization/index) topics for additional information.

## Launch a Simulation

Launch a simulation by proceeding as follows:

1. Access the simulation list by clicking on **Simulations** on the home page, in the **Configuration** section.

   ![Home - Simulations](../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Home_simulations_V600.png)

   ![Simulation List](../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Simulation_list_V602.png)
2. Create a new simulation by clicking on the addition button at the top right corner.

   ![Addition Icon](../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/iconAdd_V602.svg)
3. Fill in the fields.

   ![Simulation List](../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Simulation_new_V602.png)
4. Click on **+ Create**.
5. Perform changes through the **Roles Changes** and **Rules Changes** tabs and the following icons, respectively for addition, modification and deletion:

   ![Edition - Approval Icon](../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/iconAdd_V602.svg)

   ![Recommendation Icon](../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Simulation_iconEdit_V600.svg)

   ![Discouragement Icon](../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Simulation_iconDelete_V600.svg)

   At any time, you can click on the line of a previously made change to access its description, even click on **Cancel** to erase it.

   ![Cancel Change](../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Simulation_cancel_V602.png)
6. Click on **Start** to launch the simulation.

   ![Start Simulation](../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Simulation_start_V602.png)
7. After a few seconds, click on **Refresh** to display the simulation results.
8. Observe the results in the overview and in the Excel report available via the Download button.

   ![Download Icon](../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/iconDownload_V602.svg)

## Shift from Simulation to Production

After all needed changes have been simulated, you can decide to apply or cancel them.

![Apply or Cancel Changes](../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Simulation_decision_V600.png)

Then, the simulation is no longer active.

:::note
Clicking on Apply applies the simulated changes to the role model. You need to launch the
Compute Role Model Task
to observe the actual changes in users' entitlements.
:::

## Impact of Modifications

Once you've applied or canceled the changes of a simulation, said simulation is no longer active. If you still need to simulate changes on the same policy, you can create a new simulation.

Deleting a simulation doesn't impact the role model. It simply undoes the simulated changes which haven't been applied yet.

## Verify Modification

In order to verify the process, check that the roles and rules are created with the right parameters.

For roles, click on **Access Roles** on the home page in the **Configuration** section.

![Home Page - Access Roles](../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Home_roles_V602.png)

Select the type of role that you want to check, and find the roles you created inside the right category and with the right parameters.

![Select Roles](../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/CategoryCreation_test_V602.png)

For rules, click on **Access Rules** on the home page in the **Configuration** section.

![Home Page - Access Rules](../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Home_rules_V602.png)

Select the type of rule that you want to check, and find the rules you created with the right parameters.