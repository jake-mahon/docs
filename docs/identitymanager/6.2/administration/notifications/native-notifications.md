# Access Certification

The documentation is not yet available for this page and will be completed in the near future.

# Jobs with Errors

Identity Manager is able to send notification emails when a job ends with an error. The notification
email is sent to the user who has the necessary rights and the permission.

See the [ Native Notifications ](/docs/identitymanager/6.2/administration/notifications/native-notifications.md) and
[ Profiles & Permissions ](/docs/identitymanager/6.2/administration/security/profiles-permissions.md) topics for additional
information.

# Native Notifications

Identity Manager provides native notifications for usual cases, for example role review,
provisioning review, access certification, manual provisioning, etc.

## Overview

Identity Manager natively sends notifications for:

- Password reset to the users whose passwords are reset;
- Access certification to the users selected as reviewers;
- [ Manual Provisioning ](/docs/identitymanager/6.2/identity-management/provisioning/index.md), provisioning review and role review to the
  users who own a profile with the permissions to perform the corresponding actions;
- Jobs that finished in state completed/errored/aborted/blocked/warning to the users who own a
  profile with the corresponding permissions.

Concerning the notifications sent via permissions:  
In order to receive the notifications, a profile must have the full permission path. Having a
(great-)parent permission will not enable notifications for all child entities.

For example, the permission /ProvisioningPolicy/PerformManualProvisioning/Directory_User allows a
profile to perform manual provisioning with Directory_User as the source entity type, and receive
the corresponding notifications. On the contrary, the permission
`/ProvisioningPolicy/PerformManualProvisioning/` allows a profile to perform manual provisioning for
all entity types, but not receive the corresponding notifications.

See the [References: Permissions](/docs/identitymanager/6.2/administration/security/access-control-rules.md) topic for
additional information.

Each permission can be configured in an
[Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) so
that the corresponding notification is disabled.

All notifications are built based on cshtml templates. The templates for native notifications can be
found in `/Runtime/NotificationTemplates`.

The templates for native notifications can be adjusted to specific needs through the XML tag
[Notification Template](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

See the [ Customize a Native Notification ](/docs/identitymanager/6.2/administration/notifications/custom-notifications.md) for
additional information on how to customize native notifications.

# Password Reset

The documentation is not yet available for this page and will be completed in the near future.

# Provisioning Review

The documentation is not yet available for this page and will be completed in the near future.

# Role Review

The documentation is not yet available for this page and will be completed in the near future.
