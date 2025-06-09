# Automate the Review of Non-conforming Assignments

How to automate the review of non-conforming assignments through automation rules. See the [
Review Non-conforming Assignments
](/docs/usercube_saas/usercube/user-guide/administrate/non-conforming-assignment-review/index.md) and [Automation Rule](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/provisioning/automationrule/index.md) topics for additional information.

## Overview

Non-conforming assignments can't be reviewed entirely automatically because this type of review sometimes needs the intervention of a knowledgeable user. However, automation rules can help by making automatic decisions (in place of the reviewer) on assignments that need to be reviewed after a given waiting period.

This type of rule is useful for example, when integrators intend to:

- Decline all non-conforming assignments after X days to avoid accumulation. The waiting time can be null if they need to delete non-conforming assignments as soon as they are detected;
- Automatically approve or decline discretionary requests if there is no validation after X days;
- Send notifications to validators before declining or approving pending approval assignments;
- Get information in order to deactivate an AD account if it hasn't been used in the past X days, before deleting it.

Integrators must show caution with pending approval assignments because this type of rule could short-circuit the whole approval process.

## Participants and Artifacts

This operation should be performed in cooperation with managers who know the organization and their team's entitlements.

| Input | Output |
| --- | --- |
| Mastered non-conforming assignment review (required)   Categorized accounts (optional) | Automated assignment review |

See the [
Review Non-conforming Assignments
](/docs/usercube_saas/usercube/user-guide/administrate/non-conforming-assignment-review/index.md) and [
Categorize Resources
](/docs/usercube_saas/usercube/user-guide/set-up/categorization/index.md) topics for additional information.

## Create an Automation Rule

Create an automation rule by proceeding as follows:

![Home Page - Access Rules](/img/product_docs/usercube/usercube/user-guide/set-up/categorization/classification/home_rules_v602.png)

__Step 1 –__ On the home page in the __Configuration__ section, click on __Access Rules__.

![Entity Type Choice](/img/product_docs/usercube/usercube/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.png)

__Step 2 –__ In the dropdown menu at the top left, choose the entity type to which the future rule will be applied.

![Addition Icon](/img/product_docs/usercube/usercube/user-guide/set-up/user-profile-assignment/iconadd_v602.png)

__Step 3 –__ Click on the __Automations__ tab and on the addition button at the top right corner.

![New Automation Rule](/img/product_docs/usercube/usercube/user-guide/optimize/non-conforming-assignment-review-automation/reviewautomation_newrulefields_v602.png)

__Step 4 –__ Fill in the fields.

- Decision — Action to be taken on the described assignments.
- Criteria — Conditions that, if met, trigger the rule.  
  Currently, the criteria are used to match the context of an assignment and not the user data.  
  For example, if a single role is assigned based on a specific Department, then the context of the assignment has the information about the Department. In that case, an automation rule having in its dimensions that given Department will match this assignment and could Deny/Accept it.
- However, if a single role is assigned without any context on the Department (for example, a manual assignment with no parameter on the role), the automation rule will never match this assignment.
- __NOTE:__  No context will never be present for non-conforming or pre-existing roles
- Type — Assignment type concerned by the new rule. Once filled, a new field is displayed to select precisely an object from the existing objects belonging to this type.
- Workflow State — Workflow state of the assignments that need a decision.
- Waiting Period — Time period since the last change in the assignments' workflow states.

_Remember,_ in a nutshell, this rule applies Decision to all assignments of Type (and matching all criteria), whose workflow state has been set to Workflow State for more than Waiting Period.

## Impact of Modifications

A modification in an automation rule doesn't impact the assignments affected by the previous version of the rule.

## Verify Review Automation

In order to verify the process:

__Step 1 –__ On the __Role Review__ or __Role Reconciliation__ screen, spot an entitlement assignment.

__Step 2 –__ Create an automation rule matching said assignment.

![Home Page - Job Execution](/img/product_docs/usercube/usercube/user-guide/set-up/synchronization/home_jobexecution_v602.png)

__Step 3 –__ Compute the role model through the complete job on the __Job Execution__ page.

__Step 4 –__ Check on the __Role Review__ page that the assignment's workflow state changed according to the rule's settings.

![New Automation Rule](/img/product_docs/usercube/usercube/user-guide/optimize/non-conforming-assignment-review-automation/reviewautomation_rulemessage_v522.png)

Any role affected by an automation rule shows a specific message on the __Role Review__ page.
