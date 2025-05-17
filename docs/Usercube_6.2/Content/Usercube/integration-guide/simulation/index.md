---
sidebar_position: 689
title: Simulation
---

# Simulation

Simulations aim to assess the impact of a modification in the role model, i.e. any modification of a role or rule, before it is applied.

## Overview

Identity Manager's simulations gather roles and rules which are to be created, modified or deleted, without being inserted in the actual role model straight away. More specifically, a simulation can involve:

* [Resource Correlation Rule](../toolkit/xml-configuration/provisioning/resourcecorrelationrule/index "ResourceCorrelationRule") and [Resource Classification Rule](../toolkit/xml-configuration/provisioning/resourceclassificationrule/index);
* [Resource Type](../toolkit/xml-configuration/provisioning/resourcetype/index) and [Resource Type](../toolkit/xml-configuration/provisioning/resourcetype/index);
* [Resource Type](../toolkit/xml-configuration/provisioning/resourcetype/index "Resource Type") rules;
* [Single Role](../toolkit/xml-configuration/provisioning/singlerole/index "SingleRole") and [Composite Role](../toolkit/xml-configuration/provisioning/compositerole/index "Composite Role");
* [Single Role Rule](../toolkit/xml-configuration/provisioning/singlerolerule/index "SingleRoleRule")and [Composite Role Rule](../toolkit/xml-configuration/provisioning/compositerolerule/index "CompositeRoleRule").

A simulation can also be created by the [Perform Role Mining](../../user-guide/optimize/assignment-automation/role-mining/index "Perform Role Mining") for the automation of role assignments.

Through simulation, integrators can:

1. create, modify or delete roles and rules in a given policy;

   Only one simulation can be active per policy.
2. observe via simulation reports the impact on the whole system, i.e. both assignments and provisioning results, before the changes are applied;
3. decide to confirm or cancel changes.

Netwrix Identity Manager (formerly Usercube) recommends using simulation whenever performing an action (creation/modification/deletion) on the role model.

## Perform a Simulation

See the [Perform a Simulation](../../user-guide/optimize/simulation/index "Perform a Simulation") for additional information.