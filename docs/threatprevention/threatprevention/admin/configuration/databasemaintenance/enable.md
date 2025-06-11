# Enable Database Maintenance

Database maintenance can be enabled for all or specific event types, analytics, and/or policies. It can be enabled for any combination of event type data, analytic data, and policy data.

_Remember,_ the Event Type maintenance settings take precedence over Policy maintenance settings where the selected policy employs that event type.

Follow the steps to enable database maintenance.

__Step 1 –__ Click __Configuration__ > __Database__ > __Maintenance__ on the menu. The Database Maintenance window is displayed.

__Step 1 –__ Select the desired tab (Event Type, Analytics, or Policy) and check the __Enabled__ box at the top of the tab.

![Database Maintenance window - Event Type tab](/img/product_docs/threatprevention/threatprevention/admin/configuration/databasemaintenance/enablesettings.webp)

__Step 2 –__ Select a maintenance task (Event Type, Analytic, or Policy). To set the same operation and retention period for multiple tasks, use the __ctrl-left click__ command.

__Step 3 –__ Select either __Move__ or __Delete__ from the Operation drop-down menu.

- The Move operation requires the Archive DB tab to be configured. See the [Archive Data](/docs/threatprevention/threatprevention/admin/configuration/databasemaintenance/archive.md) topic for additional information.

__Step 4 –__ Set the Retention Period value and unit (Day, Week, or Month). This value indicates the age of the data to be kept when the database maintenance job is run. Older data is deleted or moved/archived as indicated by the selected Operation.

__Step 5 –__ Click __Set__.

__Step 6 –__ Check the __Enable__ box to include the tasks in the next database maintenance job. Only those event types, analytics, and/or policies with the Enabled checkbox selected are included in the job execution.

__Step 7 –__ Click __Save__.

The configured maintenance options are displayed in the Operation and Retention Period columns of the table.

Disabling a previously enabled database maintenance task does not remove the configured settings, only prevents that task from being executed in the next run of the database maintenance job.
