title: Recovery Console Navigation Guide
sidebar_label: Navigation
description: Guide to navigating the Recovery Console interface including application header, left navigation pane, and available navigation options.

# Navigate the Console

In the Recovery Console, navigation options are displayed in the:

- Application header
- Left navigation pane

![Navigation Options in the Recovery Console](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/navigation.webp)

## Application Header

The application header contains the following icons in the top right corner:

- Help Center – Click the **?** icon to open the
  [](https://helpcenter.netwrix.com/)[Netwrix Technical Knowledge Center](https://helpcenter.netwrix.com/)
  for the Recovery for Active Directory documentation
- User Profile – On clicking the profile icon, the following options are displayed:

  - Manage – Click it to open the MFA page, where you can set up multi-factor authentication for
    your Recovery for Active Directory account. See the
    [Configure Multi-Factor Authentication](/docs/recoveryforactivedirectory/2.6/administration/multi-factor-authentication.md) topic for additional information.
  - Log out – Click it to sign out of the Recovery Console

## Navigation Pane

The navigation pane contains the following links:

- [Active Directory Page](/docs/recoveryforactivedirectory/2.6/domain-recovery/index.md) – The Active Directory page lists the domains
  configured in Recovery for Active Directory. You can perform object rollback and recovery
  operations on this page.
- [Forest Page](/docs/recoveryforactivedirectory/2.6/forest-recovery/index.md) – The Forest page displays your Active Directory forest with its
  domains and domain controllers. Administrators can set up backup configurations for domain
  controllers as well as recover the forest from those backups.
- [Audit Logs Page](/docs/recoveryforactivedirectory/2.6/administration/audit-logging.md) – The Audit Logs page provides an audit trail of the actions performed
  by users in Recovery for Active Directory.
- [Configuration Interface](/docs/recoveryforactivedirectory/2.6/configuration/index.md) – The Configuration interface provides access
  to configure the domains, users and roles, notifications, integrations, data retention policy, and
  licensing for Recovery for Active Directory.

  **NOTE:** Only users with Administrator rights have access to the Configuration interface.

  - [Domains Page](/docs/recoveryforactivedirectory/2.6/configuration/domain-configuration.md) – The Domains page provides a list of the domains
    backed up by Recovery for Active Directory. It displays the backup schedule settings for each
    added domain. You can also add and configure new domains.
  - [Users and Roles Page](/docs/recoveryforactivedirectory/2.6/configuration/user-roles.md) – The Users and Roles page displays the
    accounts with access to Recovery for Active Directory.
  - [Notifications Page](/docs/recoveryforactivedirectory/2.6/configuration/notifications.md) – The Notifications page allows the
    configuration of notifications, which is required for sending an email when a collection
    (backup) job is completed.
  - [Netwrix Integrations Page](/docs/recoveryforactivedirectory/2.6/configuration/integrations.md) – The Netwrix Integrations page
    provides the ability to configure access to the data in other Netwrix products. At present,
    only Netwrix Threat Prevention is supported.
  - [Data Retention Policy Page](/docs/recoveryforactivedirectory/2.6/configuration/data-retention.md) – The Data Retention Policy page
    provides settings for deleting backup data that of domains and domain controllers has aged by
    X number of days, and for deleting backup data for tombstone objects that have been purged.
  - [Licensing Page](/docs/recoveryforactivedirectory/2.6/configuration/licensing.md) – The Licensing page provides an overview of the
    organization's license status and the ability to import a license file.
