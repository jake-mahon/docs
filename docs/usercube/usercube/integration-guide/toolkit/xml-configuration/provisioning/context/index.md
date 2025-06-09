# Context

A context is the result of the combination of all identity-related entities, for example personal data, contracts or positions, so that all dimension values contained in a given context are valid for a given user on a given period of time.

Contexts define the resources' scopes of responsibility. They are used during provisioning to simplify the application of the role model's rules based on dimensions.

See the [
Identity Lifecycle: Joiners, Movers and Leavers
](/docs/usercube/usercube/integration-guide/identity-management/joiners-movers-leavers/index.md) for additional information about context generation.

## Properties

| Property | Details |
| --- | --- |
| Automatic   default value: false | __Type__    Boolean   __Description__   Specifies the automatic assignments. |
| D0   optional | __Type__    Int64   __Description__   Dimension0 identifier, specifies the scope in which the assignment is restricted. Going from 0 to 127. |
