---
id: eventsexportreports
title: Export Reports
---

# Export Reports

![ReportsExportDisplayOptions](/img/changetracker/admin/ReportsExportDisplayOptions.png "ReportsExportDisplayOptions")

These options provide control over the report display options. Where a condensed and simplified report is needed, these options can be unchecked, but generally the tables and analysis charts are useful for identifying sources of change noise.

![ReportsExportScheduleAndEmail](/img/changetracker/admin/ReportsExportScheduleAndEmail.png "ReportsExportScheduleAndEmail")

Set schedule for start and end time for reporting schedule, with frequency for repeating report delivery.

**Results Delivery** options include:

- List of recipient emails
- Two different report formats e.g. pdf and csv
- No email if no results, otherwise a reassuring email is always sent, even if there is nothing to report
- Maximum attachment size is a safety measure to prevent sending of, say, a 5TB report

Press the **OK** button at the bottom of the window when done.

![ReportsExportPermissionsAndStorage](/img/changetracker/admin/ReportsExportPermissionsAndStorage.png "ReportsExportPermissionsAndStorage")

Netwrix Change Tracker gives greater control over storage usage. By default, reports generated are retained for a finite period after which they are removed. Typically reports are delivered by email so are stored outside of the DB so it is unnecessary to retain the reports within the DB too. The events within the reports are retained, of course, but the duplicate set of events created for the report are removed.

By default, the originator of the report is provided with visibility of their own reports, but where required, reports can be made visible and/or editable by others.

Press the **OK** button at the bottom of the window when done!