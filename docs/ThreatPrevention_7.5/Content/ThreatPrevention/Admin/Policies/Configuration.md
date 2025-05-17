---
sidebar_position: 6768
title: Policy Configuration
---

# Policy Configuration

A Threat Prevention policy has many elements that define the objects and events it monitors or blocks, where it looks in networks, and when it is active. These policy attributes are organized into the following major components:

* [General Tab](General "General Tab")
* [Event Type Tab](EventType/Overview "Event Type Tab")
* [Actions Tab](Actions/Overview "Actions Tab") (Event Consumers)

Each major component has its own tabbed view. A policy requires at least the General tab and Event Type tab to be configured before it properly functions. The Actions tab is optional.

The [Recent Events Tab](RecentEvents/Overview "Recent Events Tab") provides information on the events that have been recently monitored or blocked by the respective policy. These events are also available on the [Investigate Interface](../Investigate/Overview "Investigate Interface").

Through a PowerShell API integration, it is possible to create, edit, delete, and enable policies without opening the Administration Console. See the [PowerShell API Integration](../../API/Overview "PowerShell API Integration") topic for additional information.