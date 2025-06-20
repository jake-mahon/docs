# Access Certification

The documentation is not yet available for this page and will be completed in the near future.

# Jobs with Errors

Usercube is able to send notification emails when a job ends with an error. The notification email
is sent to the user who has the necessary rights and the permission.

See the
[ Native Notifications ](/docs/identitymanager/6.1/automation/notifications/native-notifications.md)
and
[ Profiles & Permissions ](/docs/identitymanager/6.1/access-control-security/profiles-permissions/index.md)
topics for additional information.

# Native Notifications

Usercube provides native notifications for usual cases, for example role review, provisioning
review, access certification, manual provisioning, etc.

## Overview

Usercube natively sends notifications for:

- password reset to the users whose passwords are reset;
- access certification to the users selected as reviewers;
- [manual provisioning](/docs/identitymanager/6.1/automation/notifications/native-notifications.md)
  , provisioning review and role review to the users who own a profile with the permissions to
  perform the corresponding actions;
- jobs that finished in state completed/errored/aborted/blocked/warning to the users who own a
  profile with the corresponding permissions.

**Concerning the notifications sent via permissions:**

In order to receive the notifications, a profile must have the full permission path. Having a
(great-)parent permission will not enable notifications for all child entities.

For example, the permission `/ProvisioningPolicy/PerformManualProvisioning/Directory_User` allows a
profile to perform manual provisioning with `Directory_User` as the source entity type, and receive
the corresponding notifications. On the contrary, the permission
`/ProvisioningPolicy/PerformManualProvisioning/` allows a profile to perform manual provisioning for
all entity types, but not receive the corresponding notifications.  
[See the list of all permissions](/docs/identitymanager/6.1/access-control-security/profiles-permissions/permissions-reference.md).

Each permission can be configured in an
[access control entry](/docs/identitymanager/6.1/configuration-reference/xml-configuration/access-control-config.md)
so that the corresponding notification is disabled.

All notifications are built based on cshtml templates. The templates for native notifications can be
found in `/Runtime/NotificationTemplates`.

The templates for native notifications can be adjusted to specific needs through the XML tag
[`NotificationTemplate`](/docs/identitymanager/6.1/configuration-reference/xml-configuration/notification-config.md).

[See how to customize native notifications](/docs/identitymanager/6.1/automation/notifications/custom-notifications.md).

# Manual Provisioning

Usercube natively sends notifications concerning manual provisioning.

## Overview

### Notification Trigger

The notifications are sent after a `FulfillTask` with a connection based on the
[`Ticket/identitymanager`](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md)
package.

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
[access control entry](/docs/identitymanager/6.1/configuration-reference/xml-configuration/access-control-config.md)
so that notifications are disabled.

# Password Reset

The documentation is not yet available for this page and will be completed in the near future.

# Provisioning Review

The documentation is not yet available for this page and will be completed in the near future.

# Role Review

The documentation is not yet available for this page and will be completed in the near future.
