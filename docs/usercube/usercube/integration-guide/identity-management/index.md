# Identity Management

Identity management is about creating a repository of identities (all kinds of identities) along with the entitlements that they need to work. One of the main purposes of an IGA tool is to help create the identity repository, and to keep it up-to-date with identities' lifecycles within the company.

"Identities' lifecycles" mean any Joiners, Movers and Leavers (JML) process, i.e. staff changes, i.e. any user's onboarding, position modification and offboarding.

See the [
Identity Repository
](/docs/usercube/usercube/integration-guide/identity-management/identity-repository/index.md) topic for additional information.  
See the [
Identity Lifecycle: Joiners, Movers and Leavers
](/docs/usercube/usercube/integration-guide/identity-management/joiners-movers-leavers/index.md) topic for additional information on how Identity Manager handles the Joiners, Movers and Leavers (JML) process.

Identities in Identity Manager are mostly humans, both internal and external workers, but can also be applications, bots, service accounts, or anything.

Identities are stored in the database as [
Resources
](/docs/usercube/usercube/integration-guide/resources/index.md), which helps with Identity Manager's internal mechanisms, for example to modelize identities with [Entity Model](/docs/usercube/usercube/integration-guide/entity-model/index.md).

Additional interesting parts of identity management are:

- the synchronization of identity changes through several repositories, for example both Identity Manager and the AD;
- the provisioning of identity properties directly to the connected systems, based on the computation of the [
  Role Model
  ](/docs/usercube/usercube/integration-guide/role-model/index.md).

See the [Synchronization](/docs/usercube/usercube/integration-guide/synchronization/index.md) topic for additional information.

See the [Provisioning](/docs/usercube/usercube/integration-guide/provisioning/index.md) topic for additional information.
