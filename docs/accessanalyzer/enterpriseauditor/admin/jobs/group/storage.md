# Storage Node

At the job group level, the Storage node identifies the Storage Profile assigned for the job group. All Storage Profiles are created at the global level (__Settings__ > __Storage__). See the [Storage](../../settings/storage/overview.md) topic for additional information.

![Job Group Storage Settings](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/storage/storage.webp)

By default, all job groups are set to inherit the __Use Default Profile__ option from the global level or a parent job group. If it is necessary for a job group to send data to a different database, the Storage Profile must already exist at the global level. Select the __Use This Profile__ radio button and choose the non-default Storage Profile from the drop-down menu.

Selecting the __Set all the child objects to inherit these settings__ option forces inheritance of this setting to all sub-groups and jobs within the job group. When enabled, this option overrides any custom settings configured for the child objects.
