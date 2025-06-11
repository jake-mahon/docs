# Using Agent Lookback

_[Agent Lookback](#Agent-Lookback)_ gives __Enterprise__ license customers the capability to run an agent control from a specified past date through the current date. The control is run in single day batches, simulating a daily run.

The Agent Lookback is accessed from the Customization record for the control.

1. Open __Strongpoint__ > __Financial Controls__ > __Controls__.
2. __Edit__ the control to run.
3. Open the __Controls__ tab.

   ![New Agent Lookback](/img/product_docs/strongpointfornetsuite/financial_controls/agent_lookback.webp)
4. Set __Control Type__ to __Lookback Control__ or __Lookback Control with Admin Verification__.
5. Click __Go to Record__.
6. In the __Filter__ drop down, select __User Fields__. Select a date such as __Date Created__. The first date in the filter becomes the lookback start date.
7. Add the details and click __Set__.
8. Click __Add__ .
9. Click __Save__.
10. The __Lookback Start Date__ and __Lookback Next Date__ are now populated on your Customization record.
11. __Save__ the customization record. The Lookback agent runs single day batches for the specified dates.

### Lookback Run

Administrators can initiate and cancel Lookback Runs from the __Controls__ tab on a Customization record. The control search must have at least one date filter set to be used by the Lookback run. Controls cannot be grouped by run.

![Schedule or initiate a Lookback run.](/img/product_docs/strongpointfornetsuite/financial_controls/lookback_run.webp)

- __Run Status__ is the status of the last run:

  - __In Queue__ set when the __Initiate Run__ box is checked
  - __Processing__ run in progress.
  - __Done__ the last run is complete.
  - __Cancelled__ administrator has clicked __Cancel Run__ (view) or unchecked the __Initiate Run__ box (edit).
- __Last Action__ displays the last user action.
- __Start Date__ is the beginning date to use for the lookback run. Future dates are not allowed.
- __End Date__ is the ending date for the lookback run. Future dates are not allowed.
- __Next Date__ is a reference field displaying the last lookup date of the lookback run.

The Lookback run checks for existing Control logs to avoid log duplication. The Control record, Agent Incident Data, Agent Incident Employee and Change Data table are all used as criteria to detect duplication. Duplicates can occur if the search changed between the Lookback date parameters and the Lookback Run date.

### Lookback Run History

The __Lookback Run History__ tab is available on the __Controls__ tab on a Customization record.

![View the Lookback Run history.](/img/product_docs/strongpointfornetsuite/financial_controls/lookback_run_history.webp)

### Lookback Run Incidents

You can filter your Control Incidents reports by setting __Log Origin__ in the report __Filters__. __Agent Lookback Run__ is available as a filter option.

![Filter Incident Results on Lookback Run](/img/product_docs/strongpointfornetsuite/financial_controls/lookback_run_incidents.webp)
