# Role Mining

Role mining aims to reduce the cost of entitlement management by automating entitlement assignments,
via the analysis of existing assignments. See the
[ Automate Assignments ](/docs/identitymanager/saas/role-management/role-assignment/index.md) topic for
additional information.

## Overview

After the role catalog is established, the
[ Compute Role Model Task ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
is able to assign single roles to users according to their attributes which are used as assignment
criteria.

> For example, in the AD, entitlements are given through group membership. Integrators create a
> navigation rule to assign each group to the users who have the corresponding single role. Then,
> the Compute-RoleModel task is able to assign single roles to users according to their existing
> group membership.
>
> In addition to group membership, the assignment of an entitlement to users could also depend on
> users' attributes like their location, position title, etc.

Now that users received their roles, the role mining tool can analyze these assignments and deduce
[Single Role Rule](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md) which will
assign single roles to certain users matching given criteria.

![Schema - Role Mining](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_schema.webp)

Role mining is a Machine Learning process. It is a statistic tool used to emphasize the dimensions
that constitute the key criteria for existing role assignments. See the
[ Conforming Assignments ](/docs/identitymanager/saas/role-management/role-assignment/conforming-assignments.md)topic for
additional information. It detects the most probable links between identities dimensions and their
roles in order to suggest the appropriate entitlement assignment rules.

> For example, suppose that 80% of Netwrix Identity Manager (formerly Usercube) workers in
> Marseilles have access to an application "App". Then, role mining is most likely to recognize the
> working site as a relevant dimension, and suggest to create a rule that gives the "App" access to
> users whose site is Marseilles.

Role mining being a statistic tool based on existing entitlement assignments, it appears useless if
the role model contains fewer than 2,000 role assignments. Then, start by reinforcing the
[ Create Roles in the Role Catalog ](/docs/identitymanager/saas/role-management/index.md).

### Technical Principles

Role mining works through
[ Mining Rule ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md) that Identity Manager
applies with the
[ Get Role Mining Task ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md).

### Entitlement differentiation with rule types

Mining rules can be configured to generate:

1. automatic rules, i.e. rules which assign roles automatically with or without a validation;
2. suggested rules, i.e. rules which don't assign roles directly, but suggest them during an
   entitlement request for a user.

   ![Suggested](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_suggested_v602.webp)

You can generate both automatic and suggested rules for the same role, with different precision
levels and different approval workflows.

> Consider an organization where an unknown ratio of users have a given role. Using the precision
> settings, we can create a mining rule to generate automatic assignment rules when the ratio is
> above 95% and a second mining rule to generate suggested assignment rules when the ratio is
> between 75% and 95%.
>
> ![Rule Types](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_ruletype.webp)

You can also differentiate entitlements according to their sensitivity, for example require
additional reviews following the request of a sensitive entitlement:

![Rule Types - Sensitivity](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_ruletype-sensitivity.webp)

The automation of entitlement assignments according to sensitivity brings greater confidence in
basic entitlements assignment which won't need to be certified anymore. Thus, automation lets
certification campaigns focus on more sensitive entitlements.

Role mining should be performed first for automatic rules as they are stricter precision-wise. Thus,
automatic rules should always have priority over suggested rules (via the `Priority` setting).

### Impact on users' entitlements

Consider that all users from a given organization have a given role. Then role mining will create a
single role rule to assign automatically this role to any user of this organization. Then users'
entitlements remain unchanged:

![Impact Example - Use Case 1](/img/product_docs/identitymanager/identitymanager/integration-guide/role-mining/rolemining_impact_usecase1.webp)

Now consider that half of users in the organization have the role. Then role mining will not
generate a role assignment rule. Then users' entitlements remain unchanged:

![Impact Example - Use Case 2](/img/product_docs/identitymanager/identitymanager/integration-guide/role-mining/rolemining_impact_usecase2.webp)

Starting from the previous example, consider now that users progressively request the role. As long
as the ratio is below a given threshold, then role mining will not generate a role assignment rule.
Then users' entitlements remain unchanged:

![Impact Example - Use Case 3](/img/product_docs/identitymanager/identitymanager/integration-guide/role-mining/rolemining_impact_usecase3.webp)

Starting from the previous example, consider now that users continue requesting the role. As soon as
the ratio is above the threshold, then role mining will create a single role rule to assign
automatically this role to any user in the organization. Then a few users are going to get the
entitlement:

![Impact Example - Use Case 4](/img/product_docs/identitymanager/identitymanager/integration-guide/role-mining/rolemining_impact_usecase4.webp)

Starting from the previous example, consider now that, as a result of a reorganization or an access
certification for example, some users do not have the role anymore. If the ratio is below the
threshold, then role mining will remove the single role rule. If the role (or its policy) is
configured with a grace period, users who need the role will not lose it. Then users' entitlements
remain unchanged:

![Impact Example - Use Case 5](/img/product_docs/identitymanager/identitymanager/integration-guide/role-mining/rolemining_impact_usecase5.webp)

## Perform Role Mining

See the
[ Perform Role Mining ](/docs/identitymanager/saas/role-management/role-mining.md) for
additional information.

### Simulation

Be aware that you can configure the
[ Get Role Mining Task ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
to generate role assignment rules either directly or in a [Simulation](/docs/identitymanager/saas/role-management/simulation.md).

Simulating the results of role mining allows a knowledgeable user to analyze the impact of role
mining on the role model, before applying them.

![Schema - Role Mining](/img/product_docs/identitymanager/identitymanager/integration-guide/role-mining/rolemining_simulation.webp)

The simulation tool gives another point of view on the role model as it emphasizes the changes.

![Schema - Role Mining](/img/product_docs/identitymanager/identitymanager/integration-guide/role-mining/rolemining_simulationresults.webp)

Identity Manager recommends simulating role mining before applying the results.

# Perform Role Mining

How to use role mining to suggest role assignment rules based on existing assignments, in order to
push the [ Automate Assignments ](/docs/identitymanager/saas/role-management/role-assignment/index.md) wall further.

## Overview

After the role catalog is established, the Compute Role Model Task task is able to assign single
roles to users according to their attributes which are used as assignment criteria.

> For example, in the AD, entitlements are given through group membership. Integrators create a
> navigation rule to assign each group to the users who have the corresponding single role. Then,
> the
> [ Compute Role Model Task ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
> is able to assign single roles to users according to their existing group membership.
>
> In addition to group membership, the assignment of an entitlement to users could also depend on
> users' attributes like their location, position title, etc.

Now that users received their roles, the role mining tool can analyze these assignments and deduce
[Single Role Rule](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
which will assign single roles to certain users matching given criteria.

![Schema - Role Mining](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_schema.webp)

Role mining is a Machine Learning process. It is a statistic tool used to emphasize the
[Single Role Rule](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
that constitute the key criteria for existing role assignments. It detects the most probable links
between identities dimensions and their roles in order to suggest the appropriate entitlement
assignment rules.

> For example, suppose that 80% of NETWRIX workers in Marseilles have access to an application
> "App". Then, role mining is most likely to recognize the working site as a relevant dimension, and
> suggest to create a rule that gives the "App" access to users whose site is Marseilles.

Role mining being a statistic tool based on existing entitlement assignments, it appears useless if
the role model contains fewer than 2,000 role assignments. Then, start by reinforcing the Role
Catalog. See
the[ Create Roles in the Role Catalog ](/docs/identitymanager/saas/role-management/index.md)
topic for additional information.

### Technical Principles

Role mining works through
[ Mining Rule ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
that Identity Manager applies with the
[ Get Role Mining Task ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md).

### Entitlement differentiation with rule types

Mining rules can be configured to generate:

1. automatic rules, i.e. rules which assign roles automatically with or without a validation;
2. suggested rules, i.e. rules which don't assign roles directly, but suggest them during an
   entitlement request for a user.

   ![Suggested](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_suggested_v602.webp)

You can generate both automatic and suggested rules for the same role, with different precision
levels and different approval workflows.

> Consider an organization where an unknown ratio of users have a given role. Using the precision
> settings, we can create a mining rule to generate automatic assignment rules when the ratio is
> above 95% and a second mining rule to generate suggested assignment rules when the ratio is
> between 75% and 95%.
>
> ![Rule Types](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_ruletype.webp)

You can also differentiate entitlements according to their sensitivity, for example require
additional reviews following the request of a sensitive entitlement:

![Rule Types - Sensitivity](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_ruletype-sensitivity.webp)

The automation of entitlement assignments according to sensitivity brings greater confidence in
basic entitlements assignment which won't need to be certified anymore. Thus, automation lets
certification campaigns focus on more sensitive entitlements.

Role mining should be performed first for automatic rules as they are stricter precision-wise. Thus,
automatic rules should always have priority over suggested rules (via the `Priority` setting).

See more details about role mining.

## Participants and Artifacts

At this point, integrators should have all the elements they need to operate.

| Input                   | Output            |
| ----------------------- | ----------------- |
| Role Catalog (required) | Single role rules |

See the[ Create Roles in the Role Catalog ](/docs/identitymanager/saas/role-management/index.md)
topic for additional information.

## Create a Mining Rule

Create a mining rule by proceeding as follows:

1. On the home page in the **Configuration** section, click on the **Role Mining** button.

   ![Home page - Connectors](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/role-mining/home_rolemining_v60.webp)

   You will see all existing mining rules.

2. Click on the addition button at the top right and fill in the fields.

   ![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

   ![New Mining Rule](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_miningrule_v602.webp)

   - `Policy`: [Create a Policy](/docs/identitymanager/saas/role-management/role-assignment/evaluate-policy.md) in which the mining rule exists.
   - `Entity Type`:
     [Create an Entity Type](/docs/identitymanager/saas/identity-management/entity-model.md) on which
     the mining rule is applied, i.e. the entity type targeted by role mining's entitlement
     analysis.
   - `Category`:
     [ Create a Category ](/docs/identitymanager/saas/role-management/index.md)
     containing the roles targeted by role mining's analysis.
   - `Include roles with specific validations`: includes in role mining's analysis the roles
     requiring zero and/or one and/or two and/or three validations.
   - `Exclude Role from Mining`: ignores the specified roles during the mining process triggered by
     the next mining rules (in terms of priority).
   - `Rule Policy`: [Create a Policy](/docs/identitymanager/saas/role-management/role-assignment/evaluate-policy.md) in which the single role
     rules will be generated.

     Netwrix Identity Manager (formerly Usercube) recommends using a policy dedicated to role
     mining in order not to remove existing assignment rules.

   - `Rule Type`: type of the generated single role rules, which defines the type of role
     assignment that can be: `Suggested` so that the resource type is listed among suggested
     permissions in the permission basket of users matching the criteria during an entitlement
     request, suggested assignments must be selected manually to be requested; or `Automatic` so
     that the resource type is automatically assigned to users matching the criteria; or
     `Automatic but with validation` so that the resource type is listed in the permission basket
     of new workers, these assignments can still be modified.
   - `Priority`: priority order of the mining rule. Identity Manager applies mining rules one after
     the other in descending order.
   - `Minimum Precision`: minimum authorized percentage of correct role assignments, considering
     both the roles that are assigned to users who should have them, and the roles that are not
     assigned to users who should not have them.

     NETWRIX recommends around 99.5%, to be lowered when working on a sensitive application
     and/or a large user population, and vice versa.

   - `Maximum Allowed False Positives`: maximum authorized percentage of false positive
     assignments, i.e. roles that are assigned to users who should not have them.

     NETWRIX recommends around 1%, to be lowered when working on a sensitive application and/or a
     large user population, and vice versa.

   **Enlarge the number of managed entitlements by tolerating errors:**

   Automation reduces the error rate by avoiding human mistakes. Errors can still occur such as
   "[false positives](https://en.wikipedia.org/wiki/Binary_classification)", i.e. users receiving
   inappropriate entitlements, and thus creating security issues. However, experience shows that a
   slight error tolerance in role mining can highly benefit automation.

3. Click on **Create** and see a line added on the rules page.
4. Click on **Simulate** to perfom role mining in a simulation. See
   the[ Perform a Simulation ](/docs/identitymanager/saas/role-management/simulation.md) topic for additional information.

   ![Role Mining Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_launchjob_v602.webp)

   If you need to bypass the simulation process, clicking on **Launch** will perform role mining
   and apply its results directly. NETWRIX recommends always performing role mining in simulation.

## Impact of Modifications

Assignment rules can sometimes give to users an entitlement that they had already received manually.
Hence, new assignment rules can imply redundancies between the entitlements assigned manually and
approved, and those calculated by a rule and assigned automatically.

Netwrix Identity Manager (formerly Usercube) recommends
[Remove Redundant Assignments](/docs/identitymanager/saas/role-management/role-assignment/index.md) after any assignment rule
is created or updated.

## Verify Role Mining

In order to verify the process, access the rule list from the home page.

![Home - Access Rules](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

Select **Single Roles** and check that the single role rules are created with the right parameters.
