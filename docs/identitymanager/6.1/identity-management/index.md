# Identity Management

Identity management is about creating a repository of identities (all kinds of identities) along
with the entitlements that they need to work. One of the main purposes of an IGA tool is to help
create the identity repository, and to keep it up-to-date with identities' lifecycles within the
company.

"Identities' lifecycles" mean any Joiners, Movers and Leavers (JML) process, i.e. staff changes,
i.e. any user's onboarding, position modification and offboarding.

[See more information on the identity repository](/docs/identitymanager/6.1/identity-management/identity-repository.md).  
[See how Usercube handles the Joiners, Movers and Leavers (JML) process](/docs/identitymanager/6.1/identity-management/joiners-movers-leavers/index.md).

Identities in Usercube are mostly humans, both internal and external workers, but can also be
applications, bots, service accounts, or anything.

Identities are stored in the database as
[resources](/docs/identitymanager/6.1/core-concepts/resources.md), which helps
with Usercube's internal mechanisms, for example to
[modelize identities with entity types](/docs/identitymanager/6.1/core-concepts/entity-model.md).

Additional interesting parts of identity management are:

- the synchronization of identity changes through several repositories, for example both Usercube
  and the AD;
- the provisioning of identity properties directly to the connected systems, based on the
  computation of the
  [role model](/docs/identitymanager/6.1/core-concepts/role-model.md).

[See more information about synchronization](/docs/identitymanager/6.1/automation/synchronization/index.md).  
[See more information about provisioning](/docs/identitymanager/6.1/identity-management/provisioning/index.md).
