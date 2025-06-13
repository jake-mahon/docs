# Compute a Navigation Property

How to define [navigation rules](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md#navigation-rules) and/or [query rules](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md#query-rules) to compute and provision the values of navigation properties for target resources based on source resources.

## Overview

Sources are usually identities, and targets are usually accounts from the managed systems.

Here, we are going to compute the values of [navigation properties](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/index.md#navigation-properties) for the target resources used in entitlement management, based on source resources. We are going to [provision](/versioned_docs/usercube_6.1/usercube/user-guide/administrate/provisioning/index.md) these properties, i.e. write them to the managed system.

The right tools for the job are navigation and query rules.

A navigation property's value can be computed by a navigation rule or a query rule, assigning a given resource from the entity type pointed by the navigation property (which can be the target entity type itself). Let's call this entity type the "other" one.

- A navigation rule assigns a fixed resource, which is chosen from among the "other" entity type's resources during the rule's creation. The assigned resource is the same for all impacted accounts. __Use a navigation rule when a given resource must be assigned, regardless of users' attributes.__
- A query rule assigns a resource from the "other" entity type too. However, the resource is chosen according to a query via a C# expression with conditions, based on the attributes of the source objects (usually users). Hence, contrary to a navigation rule, a query rule can assign a different resource for each impacted account, based on the attributes of the account's owner. __Use a query rule when there is the need to use variables from among users' attributes to select the resource to assign.__

![Schema - Scalar Rule](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_schemanavigation.png)

> A __navigation rule__ could add the AD group ```SG_APP_SQL``` to the ```memberOf``` navigation property to all AD nominative accounts provided that the user has the single role ```SQL Server Administration```.

> A __query rule__ could compute the value of the ```department``` navigation property for ServiceNow nominative accounts (entity type ```ServiceNow_User```), with a query from among resources from the ```ServiceNow_Department``` entity type, where the name of the resource would match the display name of the organization specified for the user (owner of the ServiceNow account).
>
> We need here to query the ```ServiceNow_Department``` entity type in order to find the right department to update the value of ```department```, which is specific to each ServiceNow account.
>
> Thus, each user owning a ServiceNow account will see the value of ```department``` in their account updated with the resource from ```ServiceNow_Department``` which corresponds to the department specified for this user.

> Another __query rule__ could compute the ```parentdn``` attribute for AD nominative accounts, with a query from among AD entries, where the ```dn``` attribute of the resource would match a complex expression based on the user's (owner of the AD account) presence state, employee type, location, etc.
>
> We need here to query the ```AD - Entry``` entity type in order to find the right dn to update the value of ```parentdn```, which is specific to each AD nominative account.
>
> Thus, each AD nominative account will have the value of its ```parentdn``` set according to its owner's attributes (presence state, employee type, location, etc.).

The application of a navigation rule can depend on the assignment of a [single role](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/index.md), and/or user [dimensions](/versioned_docs/usercube_6.1/usercube/integration-guide/role-assignment/conformingassignmentcomputation/index.md#dimensions).

A query rule does not use criteria as it is designed to compute a given navigation property for all existing resources in a given resource type. However, in case of several query rules on a same property, the application of a query rule depends on its [confidence rate](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/classification/index.md#confidence-rate) and the corresponding priority it receives compared to other query rules.

While both navigation and query rules compute navigation properties, the value of one navigation property should be computed by either navigation or query rules, not both.

In Usercube, a navigation property has two "sides", one for each linked element.
  
For example in the AD, the group membership of a user is represented by the properties ```member``` for groups (containing a list of users) and ```memberOf``` for users (containing a list of groups).  
However, some managed systems only have one of these two sides.
  
The AD only uses ```member``` from among groups' properties. Users do not have a ```memberOf``` property.  
But, as Usercube uses and links both sides, it is able to "translate" the information, so that the corresponding navigation property, which actually exists in the managed system, is modified by the navigation/query rule.
  
Usercube assigns an entitlement to a user by assigning a group-membership to an account. Thus we can create a navigation rule which adds a group to the ```memberOf``` property of given accounts. Usercube will update the ```member``` property of groups accordingly (in Usercube), and then provision the ```member``` property of said groups in the AD, adding the impacted accounts.

A navigation rule will trigger the creation of a target resource for all impacted source resources (so all users), which are not yet correlated with a resource of this resource type.
  
A query rule does not create resources, and only computes the navigation properties of existing resources.

## Guidelines

### Expression code must not contain too much data

Once configured, a rule is a complicated object to modify. Therefore, you must keep business data in the resource and out of the expression. It is easier to change data than to change a rule.

> For example, consider an organization that manages email addresses according to the site with ```.fr``` for France and ```.be``` for Belgium.
>
> A working option could be to write an expression with a condition ```if``` on the site to assign the domain name. However, if the organization expands and needs to consider an additional country, then the rule requires change in the expression code.
>
> A better solution is to change the identity data model by adding a field ```Domain Name``` to describe the object ```Site```, and to be used in the rule expression. In this case, if there is an additional country, then a new field is added in the data model for ```Site``` and ```Domain Name```. Thus, the rule expression remains simple by using the new objects, for example ```Email = FirstName + "." + LastName + "@" + Company + "." + DomainName```.

### Priority between navigation/query rules

It means that:

- several rules computing the same property with different criteria should not coexist;
- the only reason to have several rules to compute a single property is when changing the property value over time, via [time offsets](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md#time-offsets).

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the application users, entitlements and data model.

| Input | Output |
| --- | --- |
| [Categorization](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/index.md) (required) | Navigation rules     Query rules |

## Create a Navigation Rule

Fill an entity type with a navigation rule by proceeding as follows:

1. Click on __Access Rules__ on the home page in the __Configuration__ section.

   ![Home - Access Rules](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/classification/home_rules_v602.png)
2. In the dropdown menu at the top left, choose the source entity type for the future navigation rule.

   ![Entity Type Choice](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.png)
3. Click on the __Navigations__ tab and on the addition button at the top right corner.

   ![Addition Icon](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/classification/iconadd_v602.svg)
4. Fill in the fields.

   ![Create a Navigation Rule](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/role-manual-creation/singlerolescatalog_createnavrule_v602.png)

   - ```Join```: navigation property from the target entity type, whose value is to be impacted.
   - ```Resource```: resource from the entity type pointed by the ```Join```, which is to be added to the ```Join``` property.
   - ```Navigation denied```: option that forbids the resource assignment.
   - ```Offset of effective date```: time period that defines the actual effective date for property computation according to the value's start and/or end date.

     > For example, account activation and deactivation can be managed according to the start and/or end dates.
   - __Criteria__: conditions that, if met, trigger the rule application.
   > [Our example](#Our-example) would look like:
   >
   > ![Scalar Rule Example](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_examplenav_v602.png)
5. Click on __Create__ and see a line added on the rules page.

## Create a Query Rule

Fill an entity type with a query rule by proceeding as follows:

1. Click on __Access Rules__ on the home page in the __Configuration__ section.

   ![Home - Access Rules](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/classification/home_rules_v602.png)
2. In the dropdown menu at the top left, choose the source entity type for the future query rule.

   ![Entity Type Choice](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.png)
3. Click on the __Queries__ tab and on the addition button at the top right corner.

   ![Addition Icon](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/classification/iconadd_v602.svg)
4. Fill in the fields.

   ![Create Query Rule](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_queryrule_v522.png)

   Once the ```Resource Type``` is provided, more fields appear.

   ![Query Rule Fields](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_queryrulefields_v602.png)

   - __Target Object__ > ```Property to fill```: navigation property from the target entity type, whose value is to be impacted.
   - __Target Object__: property (or expression of properties) from the entity type pointed by the ```Property to fill```, which will be the value of the ```Property to fill``` if it matches the source object. Can be defined by a property path and/or an [expression](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md).
   - __Source Object__: property (or expression of properties) from the source entity type, which TODO:. Can be defined by a property path and/or an [expression](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md).
   - ```Offset of effective date```: time period that defines the actual effective date according to the value's start and/or end date. An offset of effective date can be useful for some attributes. For example, account activation and deactivation can be managed according to the start and/or end dates.
   - ```Confidence Rate```: rate expressing the confidence in this link, and its priority order. [See the detailed explanation](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/classification/index.md#See-the-detailed-explanation).
   > [Our examples](#Our-examples) would look like:
   >
   > ![Query Rule Example](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_examplequery_v602.png)
   >
   > ![Query Rule Example 2](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_examplequerybis_v602.png)
5. Click on __Create__ and see a line added on the rules page.

## Impact of Modifications

Any modification in a navigation or query rule is taken into account when launching the role model computation task, in the __Resource Types__ frame of the corresponding connector's overview page, via __Jobs__ > __Compute Role Model__.

![Resource Type Jobs](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.png)

This task applies the rules and computes new properties. Therefore, if a given rule's criterion is modified, then all corresponding assignments are computed again. If a resource was created automatically for an identity through a navigation rule (and its criteria), and if the user's criteria do not comply with the new version of the rule, then the corresponding resource is automatically deleted.

A modification in a provisioning rule can trigger the removal of a resource only on the Usercube side. There are several barriers to cross before said resource is removed from the managed system.

[Simulations](/versioned_docs/usercube_6.1/usercube/user-guide/optimize/simulation/index.md) are available in order to anticipate the changes induced by a creation/modification/deletion in navigation and query rules.

## Verify Rule Creation

In order to verify the process:

1. On the corresponding connector's overview page, in the __Resource Types__ frame click on __Jobs__ > __Compute Role Model__ to apply all rules.

   ![Resource Type Jobs](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.png)
2. Review [unauthorized accounts](/versioned_docs/usercube_6.1/usercube/user-guide/administrate/non-conforming-assignment-review/unauthorized-account-review/index.md) (on the __Resource Reconciliation__ screen) and [roles](/versioned_docs/usercube_6.1/usercube/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/index.md) (on the __Role Reconciliation__ screen) to help check query rules: if there are numerous properties to be reconciled following the same pattern, then there may be a rule that needs to be changed.
