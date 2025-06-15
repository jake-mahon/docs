# Policy Configuration

A Threat Prevention policy has many elements that define the objects and events it monitors or blocks, where it looks in networks, and when it is active. These policy attributes are organized into the following major components:

- [General Tab](general.md)
- [Event Type Tab](eventtype/overview.md)
- [Actions Tab](actions/overview.md) (Event Consumers)

Each major component has its own tabbed view. A policy requires at least the General tab and Event Type tab to be configured before it properly functions. The Actions tab is optional.

The [Recent Events Tab](recentevents/overview.md) provides information on the events that have been recently monitored or blocked by the respective policy. These events are also available on the [Investigate Interface](../investigate/overview.md).

Through a PowerShell API integration, it is possible to create, edit, delete, and enable policies without opening the Administration Console. See the [PowerShell API Integration](../../api/overview.md) topic for additional information.
