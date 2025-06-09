# History Node

At the job group level, the History node identifies data retention and log retention periods assigned for the job group.

![Job Group History Settings](/img/product_docs/threatprevention/threatprevention/admin/policies/history.png)

By default, all job groups are set to inherit __Use Default Setting__ option from the global level (__Settings__ > __History__) or a parent job group. See the [History](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/history.md) topic for additional information.

__CAUTION:__ It is important to understand that some pre-configured jobs require history retention while others do not support it. See job group and job descriptions for additional information.

If the Default Setting is not preferred, select the custom type of retention settings desired below:

- Data Retention Period

  - Never retain previous job data
  - Retain previous job data for [number] [time period]
  - Always retain previous job data
- Log Retention Period

  - Retain previous job logs for [number] [time period]

Selecting the __Set all the child objects to inherit these settings__ option forces inheritance of this setting to all sub-groups and jobs within the job group. When enabled, this option overrides any custom settings configured for the child objects.
