# Dashboard Guide

Dashboard Guide

# Dashboard Guide

What do these numbers mean? Where do they come from? Let’s find out.  
The queries made to the API are listed here along with which parts of the Dashboard they populate.

![blobid0.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/reporting/360058765294_blobid0.png)

- __Summary | Total Systems Scanned__ (the total part, after the slash, aka denominator)

- The total number of Computer objects that we have in ldap_store
- contrast this number with Summary | Scan Mode Enabled, which is the number of system that we would attempt to scan.

- __Summary | Total Systems Scanned__ (the scanned part, before the slash, aka numerator)

- count of systems that we attempted to scan on this run

- __Scan Performance | Encountered Error__

- count of systems that had a connection error or some other unhandled exception

- __Scan Performance | Scan Completion__
- __Scan Performance | Offline Systems__

- count of systems that were offline at the time of scan

- __Scan Performance | Successful Systems__

- count of systems that were successfully reached and scanned

Systems where we were unable to Verify that the correct host was reached (VerifyHostError) don’t appear to be accounted for in the dashboard.

- __Summary | Inactive Systems__

- Computer objects with a lastLogonTimestamp older than 90 days.

- __Overdue Requests__

- Access requests that are more than 2 minutes overdue (i.e. access requests that marked to be expired more than 2 minutes ago)

- __Failed Hosts__

- Systems that have a lastScan.success set to false. In other words, systems that we could not successfully scan for some reason on the more recent scan attempt.
- Note that systems that are no longer set to be scanned but previously failed to scan are still counted here.
- This should not include systems that have not already been scanned (e.g. systems newly added from ldapsync)

- __Highest Privileged Accounts__

- Users who are able to reach the most systems to gain admin access.
- Descending sort on the FlattenedAdminsUserStats collection

- __LDAP Domains__

- names of all configured LDAP connections

- __High Risk Systems__

- Systems that have the largest number of users who could request admin access.
- Descending sort of the current FlattenedAdmin

- __Summary | Active Sessions__

- number of JITA sessions that are active and the time is ticking down towards expiration.

- __Summary | Scan Mode Enabled__

- number of systems with the scan policy set to true

- __Summary | Protect Mode Enabled__

- number of systems with protect mode set to true.
