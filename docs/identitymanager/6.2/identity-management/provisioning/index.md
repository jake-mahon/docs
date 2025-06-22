# Manual Provisioning

Identity Manager natively sends notifications concerning manual provisioning.

## Overview

### Notification Trigger

The notifications are sent after a `FulfillTask` with a connection based on the
[ Manual Ticket ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) package.

### Notification Recipients

The notifications are sent to the users who own a profile with the following permission:
`/Custom/ProvisioningPolicy/PerformManualProvisioning/{entityType_identifier}` where
`{entityType_identifier}` is the source entity type.

In order to receive the notifications, a profile must have the full permission path. Having a
(great-)parent permission will not enable notifications for all child entities.

For example, the permission `/ProvisioningPolicy/PerformManualProvisioning/Directory_User` allows a
profile to perform manual provisioning with `Directory_User` as the source entity type, and receive
the corresponding notifications. On the contrary, the permission
`/ProvisioningPolicy/PerformManualProvisioning/` allows a profile to perform manual provisioning for
all entity types, but not receive the corresponding notifications.

The permission can be configured in an
[Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
so that notifications are disabled.

# Provisioning

See how to anticipate changes due to provisioning thanks to
[ Thresholds ](/docs/identitymanager/6.2/identity-management/provisioning/provisioning-thresholds.md).

See how to implement and perform [Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md).

# Provisioning

This section describes different entities that manages the process of granting, changing, or
removing user permissions to systems, applications and databases based on the security policy.

- [Automation Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- Bulk Change
- [ Category ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Composite Role ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [Composite Role Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Context ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Context Rule ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Indirect Resource Rule ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Mining Rule ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [Policy](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Record Section ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Resource Classification Rule ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Resource Correlation Rule ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Risk ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Role Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Single Role ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [Single Role Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

# Provision Automatically

How to make Identity Manager automatically write to the managed systems.

## Overview

In the lifecycle of a resource (entitlement assignment, resource creation, resource update, etc.),
automated provisioning is used to minimize human intervention and trust Identity Manager with role
model enforcement in external systems.

### Provisioning states

In an assignment request's lifecycle, provisioning automation implies skipping the `Transmitted`
state as Identity Manager no longer waits for a user to make changes anymore. For this reason, an
assignment request goes through the following provisioning states:

![Provisioning State Schema](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/automatic-provisioning/provauto_states_v523.webp)

## Participants and Artifacts

At this point, integrators should have all the elements they need to operate.

| Input                                                                                                                                                                                  | Output                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [ Review Provisioning ](/docs/identitymanager/6.2/reference/index.md) (required) Automated provisioning [Create a Connection](/docs/identitymanager/6.2/reference/index.md) (required) | Updated managed systems |

## Implement Automated Provisioning

automated provisioning is performed through a connection using a
[ References: Packages ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) for
fulfilling external systems.

## Perform Automated Provisioning

There is no procedure to perform automated provisioning, for it is automatic and thus handled by
Identity Manager in daily jobs.

Make sure that the task used to compute and generate provisioning orders was launched after the
request (or the provisioning review, if any), through the complete job in the **Job Execution**
page.

![Home Page - Job Execution](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

## Verify Automated Provisioning

In order to verify the process:

1. Select a test user in the directory, accessible from the home page.

   ![Home Page - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Follow the [ Request Entitlement Assignment ](/docs/identitymanager/6.2/reference/index.md)to make a
   change in one of their permissions, which involves automated provisioning.
3. Perform automated provisioning and check in Identity Manager that the change was effectively
   made.

# Provision

How to write to an externally managed system.

**A word about terminology** — Let's clarify the concept of writing to a managed system.

There are two notions involved:

- Fulfillment — writing to a managed system, manually or automatically
- Provisioning — writing automatically as provisioning is automated fulfillment

But in everyday conversation, in the interface and in this documentation, we use the term
provisioning instead of fulfillment.

## Overview

When modeling your connectors, you had to decide what data you wanted Identity Manager to manage
within the external systems. You configured your connectors, and among other things you chose the
appropriate connections and packages, to manage identities and their entitlements by writing
directly to the managed systems. This is done through said connectors' provisioning capabilities.
See the [ Model the Data ](/docs/identitymanager/6.2/reference/index.md) and
[Create a Connection](/docs/identitymanager/6.2/reference/index.md) topics for
additional information.

When changes are performed on identity data, entitlements or the role model inside Identity Manager,
provisioning orders are generated in order to actually write said changes to the external systems.
These changes can be written automatically or manually. Manual provisioning is used to involve
humans and make them act on the external systems, instead of Identity Manager. Automatic
provisioning is used to minimize human intervention and trust Identity Manager with role model
enforcement in external systems. See the [ Provision Manually ](/docs/identitymanager/6.2/identity-management/provisioning/index.md) and
[ Provision Automatically ](/docs/identitymanager/6.2/identity-management/provisioning/index.md)topics for additional information.

### Provisioning states

Identity Manager handles provisioning by assigning a provisioning state to assignment requests.

Here is the list of provisioning states and their description:

| Provisioning state  | Description                                                               |
| ------------------- | ------------------------------------------------------------------------- |
| 0—None              | Used for Identity Manager's internal computation.                         |
| 1—Pending           | The order is ready for provisioning but not sent to the agent.            |
| 2—Transmitted       | The agent has collected this order but no feedback has been received yet. |
| 3—Errored           | The agent returned errors.                                                |
| 4—Verified          | The order is provisioned in the synchronized data.                        |
| 5—Awaiting Approval | The order is blocked until a review is performed.                         |
| 6—Inactive          | The order is blocked as it is considered as useless (order in the past).  |
| 7—Error             | The role model threw an exception while evaluating the order.             |
| 8—Executed          | The agent returned OK.                                                    |

These states are detailed with their transitions on the individual pages specific to provisioning
review, manual provisioning and automated provisioning. See the
[Entitlement Assignment](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)
and [ Review Provisioning ](/docs/identitymanager/6.2/reference/index.md) topics for additional information.

### Provisioning review

For security purposes, provisioning orders sometimes need to be reviewed before being propagated to
the managed system. Then, a user with the right entitlements accesses the **Provisioning Review**
page. Users can either approve provisioning orders that will then be unblocked and finally
propagated, or they can decline orders that will subsequently be ignored. See the
[ Configure a User Profile ](/docs/identitymanager/6.2/reference/index.md)topic for additional
information.

The review prior to the provisioning of entitlement assignments is usually performed based on the
resource type of given identities. For example, the assignment of sensitive entitlements will
require a review before being provisioned, whereas basic rights can be assigned at once. Therefore,
resources must be carefully classified beforehand. See the
[ Classify Resources ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of managed systems.

| Input                                                                                                                   | Output             |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Connector's data model (required) Classified resources (required) Provisioning Rules (required) Role catalog (required) | Provisioned system |

See the [ Model the Data ](/docs/identitymanager/6.2/reference/index.md),
[ Classify Resources ](/docs/identitymanager/6.2/reference/index.md),
[ Create a Provisioning Rule ](/docs/identitymanager/6.2/reference/index.md), and
[ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md) topics for
additional information.

## Perform Provisioning

In order to perform the provisioning you have to:

- Choose whether to adjust your resource types to implement provisioning review
- Choose whether to adjust your connections to implement manual and/or automated provisioning

## Verify Provisioning

In order to verify the process:

![Home Page - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

**Step 1 –** Select a test user in the directory, accessible from the home page.

**Step 2 –** Follow the manual assignment workflow to make a change in one of their entitlements,
which involves the type of provisioning that you want to test.

![View Permissions Tab](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

**Step 3 –** Check the provisioning state of the requested entitlement at every step, in the user's
**View Permissions** tab.

![Provisioning State Schema](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/prov_stateschema_v523.webp)

Whether your provisioning workflows trigger provisioning review, or whether they trigger manual or
automated provisioning, below is the global state schema.

# Provision Manually

How to use Identity Manager to manually write to the managed systems.

## Overview

In the lifecycle of a resource (entitlement assignment, resource creation, resource update, etc.),
manual provisioning is used to make humans intervene and act on the external systems, instead of
Identity Manager.

### Provisioning states

In its lifecycle, an assignment request goes through the following provisioning states:

![Provisioning State Schema](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/manual-provisioning/provmanual_states_v523.webp)

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of managed systems as
write permissions are required.

| Input                                                                                                                                                                               | Output                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [ Review Provisioning ](/docs/identitymanager/6.2/reference/index.md) (required) Manual provisioning [Create a Connection](/docs/identitymanager/6.2/reference/index.md) (required) | Updated managed systems |

## Implement Manual Provisioning

Manual provisioning is performed through a connection using the
[ Manual Ticket ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).
Besides, for a resource to be manually provisioned, the corresponding resource type must be
configured with the manual connection set to `Provisioning Connection` in the **Fulfill Settings**.

## Perform Manual Provisioning

Perform manual provisioning by proceeding as follows:

1. Ensure that the task to compute or generate provisioning orders was launched after the request
   (or the provisioning review, if any), through the complete job in the **Job Execution** page.

   ![Home Page - Job Execution](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

   ![Manual Provisioning Screen](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/manual-provisioning/provmanual_page_v603.webp)

2. Access the manual provisioning orders page by clicking on the entity type that you want to manage
   in the **Manual Provisioning** section.

   ![Home Page - Manual Provisioning](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/manual-provisioning/home_manualprovisioning_v523.webp)

3. Choose a line to handle the corresponding provisioning order.
4. Creation, edition and deletion orders follow the same process: read Identity Manager's
   suggestions and create, edit or delete the appropriate resource directly in the managed system
   (outside Identity Manager).

   ![Creation Provisioning Order](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/manual-provisioning/provmanual_createresource_v522.webp)

   ![Creation Provisioning Order](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/manual-provisioning/provmanual_editresource_v522.webp)

5. Choose to confirm or report an error.

### Use bulk provisioning

Several orders can be provisioned simultaneously by clicking on **Bulk Provision**.

![Bulk Provisioning](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/manual-provisioning/provmanual_bulk_v603.webp)

## Verify Manual Provisioning

In order to verify the process:

1. Select a test user in the directory, accessible from the home page.

   ![Home Page - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Follow the [ Request Entitlement Assignment ](/docs/identitymanager/6.2/reference/index.md) to make a
   change in one of their permissions, which involves manual provisioning.
3. Perform manual provisioning and check the provisioning state of the requested entitlement at
   every step, in the user's **View Permissions** tab.

![View Permissions Tab](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

4. Check in your managed system that the change was effectively made.
