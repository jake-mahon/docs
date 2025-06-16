# Configuration Interface

The Configuration interface provides access to configure the domains, users and roles,
notifications, integrations, data retention policy, and licensing for Recovery for Active Directory.

**NOTE:** Only users with Administrator rights have access to the Configuration interface.

![Domains Page](../../../../../../static/img/product_docs/activitymonitor/activitymonitor/install/agent/domains.webp)

The Configuration interface contains the following pages:

- [Domains Page](domain.md) – The Domains page provides a list of the domains backed up by Recovery
  for Active Directory. It displays the backup schedule settings for each added domain. You can also
  add and configure new domains.
- [Users and Roles Page](roles.md) – The Users and Roles page displays the accounts with access to
  Recovery for Active Directory.
- [Notifications Page](notifications.md) – The Notifications page allows the configuration of
  notifications, which is required for sending an email when a collection (backup) job is completed.
- [Netwrix Integrations Page](integration.md) – The Netwrix Integrations page provides the ability
  to configure access to the data in other Netwrix products. At present, only Netwrix Threat
  Prevention is supported.
- [Data Retention Policy Page](dataretention.md) – The Data Retention Policy page provides settings
  for deleting backup data that of domains and domain controllers has aged by X number of days, and
  for deleting backup data for tombstone objects that have been purged.
- [Licensing Page](licensing.md) – The Licensing page provides an overview of the organization's
  license status and the ability to import a license file.
