# Export Reports

In order to export filtered events, just use the __Report/Export__ button and menu presented. Most fields and settings are self-explanatory but those most likely to need explaining are covered below.

![ReportsExportDisplayOptions](/img/versioned_docs/changetracker_8.0/changetracker/admin/tabs/reportsexportdisplayoptions.png)

These options provide control over the report display options. Where a condensed and simplified report is needed, these options can be unchecked, but generally the tables and analysis charts are useful for identifying sources of change noise.

![ReportsExportScheduleAndEmail](/img/versioned_docs/changetracker_8.0/changetracker/admin/tabs/reportsexportscheduleandemail.png)

Set schedule for start and end time for reporting schedule, with frequency for repeating report delivery.

__Results Delivery__ options include:

- List of recipient emails
- Two different report formats e.g. pdf and csv
- No email if no results, otherwise a reassuring email is always sent, even if there is nothing to report
- Maximum attachment size is a safety measure to prevent sending of, say, a 5TB report

Press the __OK__ button at the bottom of the window when done.

## Permission and Storage Settings Offered by the Event/Report Settings

![ReportsExportPermissionsAndStorage](/img/versioned_docs/changetracker_8.0/changetracker/admin/tabs/reportsexportpermissionsandstorage.png)

Netwrix Change Tracker gives greater control over storage usage. By default, reports generated are retained for a finite period after which they are removed. Typically reports are delivered by email so are stored outside of the DB so it is unnecessary to retain the reports within the DB too. The events within the reports are retained, of course, but the duplicate set of events created for the report are removed.

By default, the originator of the report is provided with visibility of their own reports, but where required, reports can be made visible and/or editable by others.

Press the __OK__ button at the bottom of the window when done!

Report settings, schedules and results can all be seen and edited on the __Reports__ tab. See the [Report Options](/versioned_docs/changetracker_8.0/changetracker/admin/tabs/reportsquerysettingstab.md) topic for additional information.
