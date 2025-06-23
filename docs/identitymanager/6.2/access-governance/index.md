---
title: Access Governance Overview
sidebar_label: Access Governance
description: Control entitlement assignments and measure IGA policy efficiency through role models, risk management, certification campaigns, and reporting.
---

# Governance

Identity Manager's governance features intend to provide tools that control assignments of
entitlements and measure IGA policies efficiency. Control over the assignments is achieved by
designing a role model, automating assignments, using the risk management module, and performing
certification campaigns. Measuring policies efficiency is enabled by reporting and auditing
capabilities.

Reporting, access certification campaigns and risk management are three important tools that
complete the governance arsenal.

## Reporting

With reporting features, stakeholders can measure the effect of IGA policies on the assignment
landscape and adjust if needed. Governance also helps produce audit-ready reports. You can start to
set up governance features relatively early in your Identity Manager journey and measure your
progress from the very start.

Identity Manager puts users in control of their reporting. Rich features, such as the query module,
help produce custom reports that can be used to check the assignment policy results, or gather
information for an audit.

## Access Certification Campaigns

A certification campaign is a recurring event, scheduled for example every week, month or year,
during which managers review their team members' entitlements. Sensitive assignments are then kept
or removed.

Certification campaigns are the best way to make sure past assignment decisions are still in the
best interest of the organization. They can be a good way to mitigate a lack of automation in your
assignment decisions concerning, for example, movers or leavers.

Identity Manager's certification module also helps managers produce accurate reports that they can
present to an auditor.

See the [Access Certification](/docs/identitymanager/6.2/access-governance/access-certification/index.md) topic to learn how to configure
certification campaigns.

## Risk Management

The risk management module provides tools for identifying entitlement assignments that pose a
security risk. The module facilitates the analysis and mitigation of different kinds of risks such
as Segregation of Duties (SoD) or High Privilege. Risks can be used to identify sensitive
assignments that should be reviewed first during a certification campaign.

See the [ Risk Management ](/docs/identitymanager/6.2/access-governance/risk-management.md) topic to learn how to configure risks.

# Governance

Identity Manager not only gives the right entitlements to the right identities, but also makes sure
that, over time, every assignment still complies with the configured policy.

## Enforcing the Policy

By reading entitlement data from the managed systems, Identity Manager builds an exhaustive list of
existing assignments for all identities in all managed systems.

Rules and roles define a policy. By definition, assignments not supported by a rule do not comply
with the policy. These assignments are identified as non-conforming in order to be acted upon by
knowledgeable users who can decide whether the assignment is warranted, such as security officers.

![Non-Conforming Assignments](/img/product_docs/identitymanager/identitymanager/integration-guide/role-assignment/assignments-of-entitlements/governance_nonconforming.webp)

A non-conforming assignment must be reviewed in Identity Manager by a knowledgeable user, and is
therefore:

- either removed if Identity Manager correctly spotted it and the owner should indeed not possess
  this permission;
- or kept as an exception if the configured rules do not apply to this particular case.

## Other Governance Tools

Identity Manager provides a set of governance tools to help enforce the policy, like access
certification campaigns, risk management or reporting.

## Next Steps

Let's read some [ Use Case Stories ](/docs/identitymanager/6.2/reference/index.md).

## Learn More

Learn more on [Governance](/docs/identitymanager/6.2/access-governance/index.md).

Learn more on how to [ Generate Reports ](/docs/identitymanager/6.2/reference/index.md).

Learn more on
[ Perform Access Certification ](/docs/identitymanager/6.2/reference/index.md).

Learn more on how to [ Manage Risks ](/docs/identitymanager/6.2/reference/index.md).
