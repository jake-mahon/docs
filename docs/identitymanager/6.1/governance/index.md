# How-Tos

These guides will help you perform various governance actions with practical step-by-step
procedures.

- #### [Review Prolonged Entitlements](/docs/identitymanager/6.1/governance/index.md)
  Allow a manager to review the permissions prolonged by a grace period.

# Review Prolonged Entitlements

This guide shows how to allow a manager to review the permissions prolonged by a grace period.

## Overview

Consider an entitlement given via a role which is defined with a grace period. Consider that this
role is assigned automatically to some users by a rule of the role model. If this rule changes and
the users are supposed to lose the role, then they keep it for the time defined by the
[grace period](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md),
and the role's workflow state switches from `Automatic` to `Prolonged`. Then a manager must access
these entitlements in the **Role Review** screen, to either approve or decline the role
prolongation.

## Assign the Right to Review Prolonged Entitlements

The right to review prolonged entitlements is given by adding the appropriate `AccessControlRule` on
a profile. A profile should get the right to review prolonged entitlements given for both single and
composite roles. Technically speaking, we need to create one access control rule for assigned single
roles, and another one for assigned composite roles. In this case we give access to the workflow
state 27 which is the workfow state `Prolonged` linked with the grace period.

```

 <AccessControlRule Profile="GracePeriodManager" EntityType="AssignedCompositeRole" Identifier="Manager_GracePeriod_CompositeRole" DisplayName_L1="Manager - Review Grace Period"> <Filter Binding="WorkflowState" Value="27"/> <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User"/> </AccessControlRule> <AccessControlRule Profile="GracePeriodManager" EntityType="AssignedSingleRole" Identifier="Manager_GracePeriod_SingleRole" DisplayName_L1="Manager - Review Grace Period"> <Filter Binding="WorkflowState" Value="27"/> <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User"/> </AccessControlRule>

```

# Governance

Usercube's governance features intend to provide tools that control assignments of entitlements and
measure IGA policies efficiency. Control over the assignments is achieved by designing a role model,
automating assignments, using the risk management module, and performing certification campaigns.
Measuring policies efficiency is enabled by reporting and auditing capabilities.

Reporting, access certification campaigns and risk management are three important tools that
complete the governance arsenal.

## Reporting

With reporting features, stakeholders can measure the effect of IGA policies on the assignment
landscape and adjust if needed. Governance also helps produce audit-ready reports. You can start to
set up governance features relatively early in your Usercube journey and measure your progress from
the very start.

Usercube puts users in control of their reporting. Rich features, such as the query module, help
produce custom reports that can be used to check the assignment policy results, or gather
information for an audit.

## Access Certification Campaigns

A certification campaign is a recurring event, scheduled for example every week, month or year,
during which managers review their team members' entitlements. Sensitive assignments are then kept
or removed.

Certification campaigns are the best way to make sure past assignment decisions are still in the
best interest of the organization. They can be a good way to mitigate a lack of automation in your
assignment decisions concerning, for example, movers or leavers.

Usercube's certification module also helps managers produce accurate reports that they can present
to an auditor.

[Learn how to configure certification campaigns](/docs/identitymanager/6.1/governance/access-certification/index.md).

## Risk Management

The risk management module provides tools for identifying entitlement assignments that pose a
security risk. The module facilitates the analysis and mitigation of different kinds of risks such
as Segregation of Duties (SoD) or High Privilege. Risks can be used to identify sensitive
assignments that should be reviewed first during a certification campaign.

[Learn how to configure risks](/docs/identitymanager/6.1/governance/risks.md).
