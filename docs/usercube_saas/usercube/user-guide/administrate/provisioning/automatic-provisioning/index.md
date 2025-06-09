# Provision Automatically

How to make Identity Manager automatically write to the managed systems.

## Overview

In the lifecycle of a resource (entitlement assignment, resource creation, resource update, etc.), automated provisioning is used to minimize human intervention and trust Identity Manager with role model enforcement in external systems.

### Provisioning states

In an assignment request's lifecycle, provisioning automation implies skipping the ```Transmitted``` state as Identity Manager no longer waits for a user to make changes anymore. For this reason, an assignment request goes through the following provisioning states:

![Provisioning State Schema](/img/product_docs/usercube/usercube/user-guide/administrate/provisioning/automatic-provisioning/provauto_states_v523.png)

## Participants and Artifacts

At this point, integrators should have all the elements they need to operate.

| Input | Output |
| --- | --- |
| [ Review Provisioning ](/docs/usercube_saas/usercube/user-guide/administrate/provisioning/provisioning-review/index.md) (required)   Automated provisioning to [Create a Connection](/docs/usercube_saas/usercube/user-guide/set-up/connect-system/connection-creation/index.md) (required) | Updated managed systems |

## Implement Automated Provisioning

automated provisioning is performed through a connection using a [
References: Packages
](/docs/usercube_saas/usercube/integration-guide/connectors/references-packages/index.md) for fulfilling external systems.

## Perform Automated Provisioning

There is no procedure to perform automated provisioning, for it is automatic and thus handled by Identity Manager in daily jobs.

Make sure that the task used to compute and generate provisioning orders was launched after the request (or the provisioning review, if any), through the complete job in the __Job Execution__ page.

![Home Page - Job Execution](/img/product_docs/usercube/usercube/user-guide/set-up/synchronization/home_jobexecution_v602.png)

## Verify Automated Provisioning

In order to verify the process:

1. Select a test user in the directory, accessible from the home page.

   ![Home Page - Directory User](/img/product_docs/usercube/usercube/user-guide/set-up/configure-workflows/home_directoryuser_v523.png)
2. Follow the manual assignment workflow through [
   Request Entitlement Assignment
   ](/docs/usercube_saas/usercube/user-guide/administrate/manual-assignment-request/index.md) to make a change in one of their permissions, which involves automated provisioning.
3. Perform automated provisioning and check in Identity Manager that the change was effectively made.
