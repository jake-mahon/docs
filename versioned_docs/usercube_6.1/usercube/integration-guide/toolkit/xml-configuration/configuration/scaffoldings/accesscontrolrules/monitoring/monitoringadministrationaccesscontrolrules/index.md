# MonitoringAdministrationAccessControlRules

Generates the access control rule which gives to a profile the permission to query the monitoring screen.

## Examples

```

  <MonitoringAdministrationAccessControlRules Profile="Administrator"/>

```

## Properties

| Property | Details |
| --- | --- |
| Profile   required | __Type__    String   __Description__   Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Monitoring" DisplayName_L1="Administrator_Monitoring" EntityType="Setting" Profile="Administrator">  <Entry CanExecute="true" Permission="/Monitoring" /></AccessControlRule>

```
