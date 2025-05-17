---
sidebar_position: 584
title: Perform Access Certification
---

# Perform Access Certification

How to certify existing access by reviewing a specific range of assigned permissions for auditing purposes.

## Overview

The aim of an access certification campaign is to review specific entitlement assignments for specific identities, in order to certify them and express an audit opinion that justifies their necessity. So, for all relevant permissions, the idea is to specify if these assignments ought to be deleted or not.

There are several ways to arrange an access certification campaign. Among others, through filters you can choose to focus on:

* a certain category of roles;
* a certain type of assignment;
* assignments not certified since a certain date;
* assignments presenting a certain level of risk.

Certification campaigns can be [Access Certification](../../../integration-guide/governance/accesscertification/index) but the UI described in this guide can be enough on its own. See the [Access Certification](../../../integration-guide/governance/accesscertification/index "Access Certification") topic for additional information.

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of auditing because they know which entitlements need to be reviewed.

| Input | Output |
| --- | --- |
| Identity repository (required) [Create Roles in the Role Catalog](../../set-up/single-roles-catalog-creation/index)(optional) [Manage Risks](../../optimize/risk-management/index "Manage Risks")(optional) | Certified access |

See the[Create the Workforce Repository](../../set-up/initial-identities-loading/index "Create the Workforce Repository")topic for additional information.

## Perform Access Certification

Perform access certification by proceeding as follows:

1. [Schedule a Certification Campaign](certification-campaign-scheduling/index "Schedule a Certification Campaign").
2. [Execute a Certification Campaign](certification-campaign-execution/index "Execute a Certification Campaign").