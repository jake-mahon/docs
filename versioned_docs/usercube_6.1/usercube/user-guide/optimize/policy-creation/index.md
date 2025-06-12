# Create a Policy

How to define [policies](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/provisioning/policy/index.md) to organize roles and rules.

## Overview

A [policy](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/provisioning/policy/index.md) is a subgroup of the role model. It defines an ensemble of [roles](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/single-roles-catalog-creation/index.md) and [assignment rules](/versioned_docs/usercube_6.1/usercube/user-guide/optimize/assignment-automation/index.md) that apply to specific identities. So policies are used to handle separately several sets of identities, based on [dimensions](/versioned_docs/usercube_6.1/usercube/integration-guide/role-assignment/conformingassignmentcomputation/index.md#dimensions) with different permissions and workflows.

Integrators must minimize the number of policies because it segments identities, and segmentation implies high maintenance. NETWRIX recommends using one policy per population. A population is a group of people that can be managed following the same rules, role model, workflows, etc. This means, for example, one policy for workers (meaning employees and contractors), another one for partners, another one for clients. But sometimes partners are included in the same policy as workers, it depends on the organization.

Usercube provides a default policy. Only when the project is mature enough should integrators think about creating additional policies.

## Participants and Artifacts

Integrators must have the knowledge of the organization strategy towards identity management.

| Input | Output |
| --- | --- |
| [Resource type](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/resource-type-creation/index.md) (optional) | Policy |

## Create a Policy

Create a policy by proceeding as follows:

1. Access the policies screen by clicking on __Access Policies__ on the home page in the __Configuration__ section.

![Home - Access Policies](/img/versioned_docs/usercube_6.1/usercube/user-guide/optimize/policy-creation/home_accesspolicies_v602.png)

2. Click on __+ New policy__ at the top right corner.

![New Policy](/img/versioned_docs/usercube_6.1/usercube/user-guide/optimize/policy-creation/policycreation_policies_v602.png)

3. Fill in the information fields.

   ![New Policy Fields](/img/versioned_docs/usercube_6.1/usercube/user-guide/optimize/policy-creation/policycreation_newpolicy_v602.png)

   - ```Identifier```: must be unique among policies and without any whitespace.
   - ```Name```: will be displayed in the UI to identify the resource type.
   - ```Provisioning```: allows [provisioning](/versioned_docs/usercube_6.1/usercube/user-guide/administrate/provisioning/index.md) for the policy.
   - ```Simulation```: allows [simulation](/versioned_docs/usercube_6.1/usercube/user-guide/optimize/simulation/index.md) creation for the policy.
   - ```Approve Roles Implicitly```: can be enabled to bypass approval steps if the person who issues a given role request is also the [role officer](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/role-officer-management/index.md).
   - ```Roles can be prolonged without a new approval workflow```: enables the policy's roles and resource types to have their assignment's end dates postponed without any validation.
   - ```Is Managed by External Source```: can be enabled only during policy creation to indicate that its permissions are managed by another IGA tool and are to be ignored by Usercube's role model computation.
   - ```Maximum Duration```: duration (in minutes) after which the policy's roles and resource types will be automatically revoked, if no earlier end date is specified. It impacts only the roles and resource types which are manually assigned after the maximum duration is set. Pre-assigned items are not impacted.
   - ```Grace Period```: duration (in minutes) for which a lost automatic role or resource type is prolonged. A review will be required to validate or decline the entitlement prolongation. Inferred entitlements won't be lost unless the end of the grace period is reached or the prolongation is declined.
   - __Dimensions__: criteria that, if met, trigger the membership of given identities to the policy.

   What we call _another IGA tool_ can be another application or even another version of Usercube.
4. Click on __Create__.

## Verify Policy Creation

In order to verify the process, check that the policy has been added with the right options to the list on the __Access Policies__ page.
