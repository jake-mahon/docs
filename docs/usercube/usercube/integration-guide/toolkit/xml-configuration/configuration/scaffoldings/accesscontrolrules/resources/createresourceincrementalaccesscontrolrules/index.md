# Create Resource Incremental Access Control Rules

Generates the access control rule which gives to a profile the permission to query the resources modified incrementally

## Examples

```

  <CreateResourceIncrementalAccessControlRules Profile="Administrator"/>

```

## Properties

| Property | Details |
| --- | --- |
| Profile   required | __Type__    String   __Description__   Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Resource_Incremental" DisplayName_L1="Administrator Resource Incremental Query" EntityType="Resource" Profile="Administrator">  <Entry CanExecute="true" Permission="/Resources/Incremental/Query" /></AccessControlRule>

```
