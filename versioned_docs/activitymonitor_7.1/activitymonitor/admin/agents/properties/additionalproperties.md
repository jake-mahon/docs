# Additional Properties Tab

The Additional Properties Tab provides additional configuration options for the agent. The tab varies based on the type of agent selected.

## For Activity Agent

The Additional Properties tab for the Activity Agent has the following configuration options:

![Agent Additional Properties Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/properties/additionalpropertiestab.png)

- Comment – Create an annotation for the agent in the __Comment__ text box. Annotations entered here will appear in the Comment column in the table on the Agents tab.
- Agent's Trace Level – Select a trace level for the agent log from the drop-down list:

  - Same Level as the Console (uses the global level selected in the console)
  - Trace (the most verbose) many collection points and can slow down

    __CAUTION:__ Selecting the __Trace__ option can slow down collection due to the large amount of data points
  - Debug
  - Info (recommended)
  - Warning
  - Error
  - Fatal

In certain situations, the trace logs are not enough to identify issues. Collect extended debugging data (ETW) can be useful for problems related to the following:

- Not getting events
- Missing event attributes
- Getting unexpected events
- High RAM/CPU caused by SBTService
- Issues caused by Antivirus or Backup software

When this is needed, enable the __Collect extended debugging data (ETW) from the Windows driver when the Trace level is activated__ option to diagnose these problems.

__CAUTION:__ Selecting this option collects a large amount of data. Therefore, it is important to enable it only for short periods of time. Otherwise, the trace file may overflow with data.

In general for troubleshooting, start with trace logs. If the root cause of the problem might be a low-level functionality the driver, then the ETW logs must be enabled.

Click __OK__ to commit the modifications. Click __Cancel__ to discard the modifications. The Agent Properties window closes.

## For Linux Agent

The Additional Properties tab for the Linux Agent has the following configuration options:

![Linux Agent Additional Properties Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/properties/linuxagentadditionalpropertiestab.png)

- Comment – Create an annotation for the agent in the __Comment__ text box. Annotations entered here will appear in the Comment column in the table on the Agents tab.
- Agent's Trace Level – Select a trace level for the agent log from the drop-down list:

  - Same Level as the Console (uses the global level selected in the console)
  - Trace (the most verbose) many collection points and can slow down

    __CAUTION:__ Selecting the __Trace__ option can slow down collection due to the large amount of data points
  - Debug
  - Info (recommended)
  - Warning
  - Error
  - Fatal

Click __OK__ to commit the modifications. Click __Cancel__ to discard the modifications. The Agent Properties window closes.
