# Build Role Model Task

Applies the [
Role Mapping
](/docs/usercube/usercube/integration-guide/toolkit/xml-configuration/provisioning/rolemapping/index.md), also named [
Create Roles in Bulk
](/docs/usercube/usercube/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/index.md), i.e. generates single roles and navigation rules based on resources matching a given pattern.

> For example, this task can transform AD groups with a special naming convention into roles.

## Examples

The following example applies all role naming rules linked to the AD connector.

```

<BuildRoleModelTask Identifier="AD_ApplyRoleNamingRules" Connector="AD" DisplayName_L1="AD - Generate Roles/Rules" />

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| Connector   optional | __Type__    String   __Description__   Identifier of the connector whose role mappings / role naming rules are to be applied. |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |
