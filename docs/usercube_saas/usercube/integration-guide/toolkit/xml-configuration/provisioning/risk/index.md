# Risk

A risk defines a security threat triggered by the assignment of one or more entitlements to an identity. A risk is linked to risk rules, each of which can trigger the risk.

## Properties

| Property | Details |
| --- | --- |
| Description\_L1   optional | __Type__    String   __Description__   Message that describes the risk. It will be displayed during the manual request of a risk-triggering entitlement. |
| DisplayName\_L1   required | __Type__    String   __Description__   Display name of the risk in language 1 (up to 16). |
| EntityType   required | __Type__    Int64   __Description__   Identifier of the entity type targeted by the risk. |
| ExemptionPolicy   default value: Warning | __Type__    RiskExemptionPolicy   __Description__   Behavior of Identity Manager during the manual request of a risk-triggering entitlement.   ```0``` - Warning: a message is displayed and the request can be continued or cancelled.   ```1``` - Blocking: a message is displayed and the whole request must be cancelled.   ```2``` - Approval required: the request will need an additional approval. A message is displayed and the request can be continued or cancelled. |
| Identifier   required | __Type__    String   __Description__   Identifier of the risk. |
| Level   default value: 0 | __Type__    Byte   __Description__   Risk score on a scale from 0 to 100. The higher the level, the higher the risk. |
| Policy   required | __Type__    Int64   __Description__   Identifier of the policy in which the risk exists. |
| Remediation\_L1   optional | __Type__    String   __Description__   Message that describes the way to solve the risk. It will be displayed during the manual request of a risk-triggering entitlement. |
| RiskType   default value: SoD | __Type__    RiskType   __Description__   Nature of the situation described by the risk.   ```0``` - Segregation of Duties: threat due to the conjunction of two or more entitlements for an identity. A risk rule must contain at least two rule items.   ```1``` - High Privileges: threat due to the assignment of one or more highly sensitive entitlements. A risk rule must contain at least one rule item. |

## Child Element: Rule

A risk rule is a set of risk rule items. The intersection of all rule items triggers the assignment of a risk to an identity, depending on the identity's entitlements.

## Child Element: Item

A risk rule item is a filter that identify risk-triggering resources. The intersection of all rule items in a risk rule triggers the associated risk.

### Properties

| Property | Details |
| --- | --- |
| Property   required | __Type__    Int64   __Description__   Property (scalar or navigation) that represents the risk-triggering entitlement. |
| Resource   optional | __Type__    Int64   __Description__   Identifier of the resource assigned to ```Property```, if navigation, that triggers the risk. |
| ResourceType   required | __Type__    Int64   __Description__   Identifier of the resource type targeted by the risk analysis. |
