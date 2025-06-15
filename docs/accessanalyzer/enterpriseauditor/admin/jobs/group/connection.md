# Connection Node

At the job group level, the __Connection__ node identifies the Connection Profile assigned for the job group. All Connection Profiles are created at the global level (__Settings__ > __Connection__).

![Job Group Connection Settings](../../../../../../static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/connection.webp)

By default, all job groups are set to inherit the __Use Default Profile__ option from the global level or a parent job group. See the [Connection](../../settings/connection/overview.md) topic for additional information.

If the Default Setting is not preferred, select the custom type of connection settings desired below:

- System default

  - For manual or ad hoc job execution, the account logged into the Access Analyzer Console is applied to the target hosts for authentication
  - For scheduled job execution, the account supplied as the Schedule Service account at the __Settings__ > __Schedule__ node is applied to the target hosts for authentication
- Select one of the following user defined profiles

  - Select a pre-configured Connection Profile from the drop-down menu

Selecting the __Set all the child objects to inherit these settings__ option forces inheritance of this setting to all sub-groups and jobs within the job group. When enabled, this option overrides any custom settings configured for the child objects.
