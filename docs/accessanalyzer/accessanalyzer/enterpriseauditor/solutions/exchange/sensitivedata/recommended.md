# Recommended Configurations for the 7. Sensitive Data Job Group

Dependencies

The following job groups need to be successfully run:

- .Active Directory Inventory Job Group

Targeted Hosts

The 0.Collection Job Group needs to be set to run against:

- Local host

The __0.Collection__ > __EX\_Mailbox\_SDD__ and __0.Collection__ > __EX\_PublicFolder\_SDD__ jobs need to be set to run against the version-appropriate default dynamic host list:

- Exchange 2010 MB Servers
- Exchange 2013 MB Servers
- Exchange 2016 MB Servers
- Exchange 2019 MB Servers

__NOTE:__ Default dynamic host lists are populated from hosts in the Host Master Table which meet the host inventory criteria for the list. Ensure the appropriate host lists have been populated through host inventory results.

Connection Profile

A Connection Profile must be set directly on jobs within the 0.Collection job group. See the [Exchange Web Services API Permissions](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/solutions/exchange/webservicesapi.md) topic for the EX\_PFInfo job requirements.

See the [Connection](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/connection/overview.md) topic for additional information.

Schedule Frequency

This job group has been designed to run as desired.

Query Configuration

The 7. Sensitive Data Job Group is designed to be run with the default query configurations. However, the following queries can be modified:

- __0.Collection__ > __EX\_Mailbox\_SDD__ Job – __Exchange Sensitive Data Discovery__ Query
- __0.Collection__ > __EX\_PublicFolder\_SDD__ Job – __Exchange Sensitive Data Discovery__ Query

No other queries should be modified.

Workflow

__Step 1 –__ Set the host on the EX\_Mailbox\_SDD or EX\_PublicFolder\_SDD job.

__Step 2 –__ Set a Connection Profile on the jobs which run data collection.

__Step 3 –__ Schedule the 7. Sensitive Data job group to run as desired.
