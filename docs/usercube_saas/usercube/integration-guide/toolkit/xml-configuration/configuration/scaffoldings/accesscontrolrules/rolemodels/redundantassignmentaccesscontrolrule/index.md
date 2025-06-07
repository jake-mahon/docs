# Redundant Assignment Access Control Rule

Generates the permissions to access the __Redundant Assignment__ page, to analyze and remove redundant assignments.

Gives access to a shortcut on the dashboard to access this page.

![Redundant Assignments](/static/img/product_docs/usercube/usercube/user-guide/optimize/assignment-automation/remove-redundant-assignments/home_redundantassignments_v602.png)

## Examples

The following example gives to the ```Administrator``` profile the permissions to access the __Redundant Assignment__ page and perform redundant-assignment related actions.

```

  <RedundantAssignmentAccessControlRule Profile="Administrator"/>

```

## Properties

| Property | Details |
| --- | --- |
| Profile   required | __Type__    String   __Description__   Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_RedundantAssignment" DisplayName_L1="Administrator_RedundantAssignment" EntityType="Policy" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RedundantAssignment" /></AccessControlRule>

```
