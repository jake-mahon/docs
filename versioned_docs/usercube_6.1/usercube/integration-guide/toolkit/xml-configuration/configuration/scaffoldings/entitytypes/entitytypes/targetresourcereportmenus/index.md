# TargetResourceReportMenus

Creates the Item menu for the entity's report so that it is displayed in the report view.

## Examples

```

  <TargetResourceReportMenus EntityType="LDAP_Entry"/>

```

## Properties

| Property | Details |
| --- | --- |
| EntityType   required | __Type__    String   __Description__   Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<MenuItem Identifier="Reports_Resources_LDAP_Entry" DisplayName_L1="LDAP - Entry" ParentMenuItem="Reports" ReportQuery="Resources_LDAP_Entry" />

```
