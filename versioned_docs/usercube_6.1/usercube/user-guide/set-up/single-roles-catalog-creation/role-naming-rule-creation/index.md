# Create Roles in Bulk

How to create [role naming rules](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/provisioning/rolemapping/index.md), which create single roles using existing naming conventions from the managed system.

## Overview

A [role naming rule](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/provisioning/rolemapping/index.md) automatically creates single roles and the corresponding navigation rules based on the name of the corresponding entitlements in the managed system.

Role naming rules replace the tedious process of manual role creation. Instead of creating roles individually with their navigation rules, you can use role naming rules to generate roles in bulk and thus faster create the single role catalog.

> For example, consider a naming convention in our organization that states that AD groups have their cn: ```SG_APP_<applicationName>```. Then, we can create a naming rule that indicates that for all AD groups starting with ```SG_APP_```, we create a role that gives the adequate user the corresponding group membership, with ```<applicationName>``` as a name. For example, we have the application Contoso and the group ```SG_APP_Contoso```.

Roles created via role naming rules can still be modified later in the UI, if needed.

A role naming rule, for a given resource type, creates roles and rules only for resources which are not yet linked to a role, nor a navigation rule of this resource type. This implies that:

- role naming rules do not overwrite manual changes;
- role naming rules cannot link more than one resource (so one entitlement) to one role.

If a role naming rule is supposed to create a role that already exists, then a corresponding navigation rule is created only if the existing role has the same policy and category as specified in the role naming rule.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owners who know the application's users, entitlements and data model.

| Input | Output |
| --- | --- |
| [Provisioning Rules](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/provisioning-rule-creation/index.md) (required) | Role naming rule     Single roles    Navigation rules    Categories |

## Create a Role Naming Rule

Create a role naming rule by proceeding as follows:

1. On the home page, click on __Access Rules__ in the __Configuration__ section.

   ![Home Page - Access Rules](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/classification/home_rules_v602.png)
2. In the dropdown menu at the top left, choose the entity type to which the future naming rule will be applied.

   ![Entity Type Choice](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.png)
3. Click on the __Role Naming Conventions__ tab and on the addition button at the top right corner.

   ![Addition Icon](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/classification/iconadd_v602.svg)
4. Fill in the fields.

   ![Create a Naming Rule](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_newrule_v602.png)

   - ```Policy```: [policy](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/provisioning/policy/index.md) in which the rule exists.
   - ```Property```: navigation property which will define the actual entitlement in the future [navigation rule](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/role-manual-creation/index.md#navigation-rule).
   - ```Identifier```: must be unique among rules and without any whitespace.
   - __+ New Rule__: a naming rule is based on the union of [rules](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/provisioning/rolemapping/index.md#rules), themselves based on the intersection of [rule items](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/provisioning/rolemapping/index.md#rule-items). A rule item specifies one of the conditions that will trigger the enforcement of the naming rule.
   - ```Where Expression```: C# expression returning a boolean to condition the application of the rule. [See a full example](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/provisioning/rolemapping/index.md#see-a-full-example).

     NETWRIX recommends using this option only when the options available in the rule items do not suffice.
   - __Single Role__: [single role(s)](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/role-manual-creation/index.md#single-roles) to be created.

     - ```Identifier```: must be unique among roles and without any whitespace. If the defined identifier is already used, then neither the role nor the rule is created. Can be defined by a property path and/or an [expression](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md) (mandatory).
     - ```Name```: will be displayed in the UI to identify the future single role. Can be defined by a property path and/or an [expression](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md).
   - __Category__: [category](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/category-creation/index.md) for the future role(s).

     - ```Identifier```: either matches an existing category and selects it, or doesn't match and therefore a new category is created. Can be defined by a property path and/or an [expression](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md).
     - ```Name```: will be displayed in the UI to identify the category. Ignored if the ```Identifier``` attribute matches an existing category's identifier. Can be defined by a property path and/or an [expression](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md).
     - ``` Parent Identifier```: for a potential parent category. Must match an existing category's identifier. Can be defined by a property path and/or an [expression](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md).
     - ```Default Category```: category for the future role(s) if the category's ```Identifier``` attribute isn't filled in or doesn't compute.
   - ```Role Policy```: [policy](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/provisioning/policy/index.md) in which the future roles exist.
   - ```Approval Workflow```: represents the number of validations required to assign the future role(s).
   - ```Approve Role Implicitly```: needs at least a simple approval workflow. ```Implicit``` mode bypasses the approval step(s) if the person who issues the role request is also the [role officer](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/role-officer-management/index.md). ```Explicit``` refuses said bypass. ```Inherited``` follows the [policy](/versioned_docs/usercube_6.1/usercube/user-guide/optimize/policy-creation/index.md) decision to approve roles implicitly or not.
   - ```Hide in Simplified View```: hides the role from the users' __Simplified View__ in __View Permissions__ dialog. This setting does not apply to roles which are either inferred or have workflow states which require manual action.
   - ```Comment Management on Permission Review```: to change if different from the role policy.
   > Our example would look like:
   >
   > ![Example - Naming Rule](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_example_v602.png)
5. Click on __Create__ and see a line added on the rules page.

## Impact of Modifications

As naming rules are applied only to resources that aren't already linked to a role or a navigation rule, neither deletion nor modification in a naming rule can affect the previously created roles and rules.

## Verify Naming Convention

In order to verify the process:

1. to take the changes into account, on the appropriate connector's overview page click on __Jobs__ > __Apply Naming Conventions__;

   ![Resource Type Jobs](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.png)
2. check that the correct roles and rules were created.

For roles, click on __Access Roles__ on the home page in the __Configuration__ section.

![Home Page - Access Roles](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.png)

Select single roles and find the role(s) you created inside the right category and with the right parameters.

![Access Single Roles](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_testroles_v602.png)

> Our example would look like:
>
> ![Example - Generated Role](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_exampleroleresult_v602.png)

For rules, click on __Access Rules__ on the home page in the __Configuration__ section.

![Home Page - Access Rules](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/classification/home_rules_v602.png)

Select navigation rules and find the rule(s) you created with the right parameters.

![Access Navigation Rules](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_testrules_v602.png)

> Our example would look like:
>
> ![Example - Generated Rule](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_exampleruleresult_v523.png)
