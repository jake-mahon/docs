# CompositeRoleRule

A composite role rule assigns a composite role to users who match given criteria.

## Examples

The following example declares a new rule to give the composite role "HR_Accounting" to all the "FCT0008" users.

```

    <CompositeRoleRule Role="HR_Accounting" D1="FCT0008" Policy="Default" />    <CompositeRoleRule Role="HR_Accounting" D1="FCT0008" Type="Suggested" Policy="Default" />

```

## Properties

| Property | Details |
| --- | --- |
| D0   optional | __Type__    Int64   __Description__   Value to match for the dimension ```D0``` (up to ```D127```) to trigger the rule. For example, considering that ```D0``` corresponds to users' countries, then set ```D0``` to ```France``` to assign the composite role to users whose country is ```France```. |
| IsDenied   default value: false | __Type__    Boolean   __Description__   ```true``` to forbid the assignment instead of applying it. |
| L0   default value: false | __Type__    Boolean   __Description__   ```true``` to activate inheritance for ```D0``` (up to 127). |
| ParentRole   optional | __Type__    Int64   __Description__   Identifier of a composite role that users must have to trigger the rule. |
| Policy   required | __Type__    Int64   __Description__   Identifier of the policy that the rule is part of. |
| Role   required | __Type__    Int64   __Description__   Identifier of the composite role to be assigned. |
| Type   default value: 0 | __Type__    RuleType   __Description__   Type of the rule.   ```0``` - __Required__: the role is automatically assigned to users matching the criteria.   ```1``` - __RequestedAutomatically__: the role is listed in the permission basket of new workers, these assignments can still be modified. For existing workers, the rule's type is ```Suggested```.   ```2``` - __Suggested__: the role is listed among suggested permissions in the permission basket of users matching the criteria during an entitlement request, suggested assignments must be selected manually to be requested. |
