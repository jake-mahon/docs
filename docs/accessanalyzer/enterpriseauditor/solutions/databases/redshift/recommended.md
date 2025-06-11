# Recommended Configuration for the Redshift Solution

The Redshift Solution is configured to inherit settings from the global Settings node. However, it is best practice to assign the host list and the Connection Profile at the data collection level, the 0.Collection Job Group. Once these are assigned to the job group, it can be run directly or scheduled.

Dependencies

This job group does not have dependencies.

Targeted Host(s)

The Redshift Job Group has been configured to inherit the host list assignment from the collection group level.

The host list assignment should be assigned under the __Redshift__ > __0.Collection__ > __Settings__ > __Host List Assignment__ node. The __Local host__ box is checked by default.

Connection Profile

The SQL Data Collector requires a specific set of permissions. See the Permissions section for necessary permissions. The account used can be either an Active Directory account or a SQL account. Once the account has been provisioned, create a custom Connection Profile containing the credentials for the targeted environment. See the [SQL Custom Connection Profile & Default Dynamic Host List](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/sql/configurejob.md) topic for additional information.

The Connection Profile should be assigned under the __Redshift__ > __0.Collection__ > __Settings__ > __Connection__ node. It is set to __Use the Default Profile__, as configured at the global settings level. However, since this may not be the Connection Profile with the necessary permissions for the assigned hosts, click the radio button for the __Select one of the following user defined profiles__ option and select the appropriate Connection Profile drop-down menu.

See the [Connection](/docs/accessanalyzer/enterpriseauditor/admin/settings/connection/overview.md) topic for additional information.

Schedule Frequency

This job group can be scheduled to run as desired.

Run Order

The 0.Collection Jobs must be run first and in order. The other Redshift sub-job groups can be run in any order, together or individually, after running the 0.Collection Job Group.

___RECOMMENDED:___ Run the solution at the top level.
