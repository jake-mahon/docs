# What's New

The following information highlights the new and enhanced features introduced in this Netwrix
Activity Monitor8.0.

## Activity Monitor v8.0

New: Platform Support for CTERA

- CTERA Edge Filer Integration — Expands security monitoring with enhanced visibility to CTERA Edge
  Filer systems, now supported in Netwrix Activity Monitor.
- Server Message Block (SMB) Event Tracking — Monitors successful and failed file system activity,
  including files, directories, and alternate data streams. Detects unauthorized access or data
  manipulation. (Fully supported in Netwrix Threat Manager)
- Permission Change Reporting — Tracks changes to permissions, including added or removed rights and
  trustees, to maintain compliance and strengthen data access control.
- Automatic Auditing Configuration — Streamlines auditing setup with automated configurations to
  ensure consistency, minimize manual errors, and enhance security across platforms.
- Multitenant Configuration Support — Enables efficient security management for multiple tenants
  with scalable, flexible monitoring tailored to diverse organizational needs.

See the [CTERA Activity Auditing Configuration](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/other-storage.md) topic for additional
information.

**NOTE:** For Netwrix Access Analyzer (formerly Enterprise Auditor) users, these capabilities will
be integrated in a future release.

New: FPolicy Persistent Store Enhancements

- FPolicy Persistent Store for Performance Boost — Enhances performance and resilience by decoupling
  client IO from FPolicy reporting. Events are stored on disk before transmission, reducing latency
  and ensuring reliable event processing during network delays.
- Simplified Persistent Store configuration —Supports the automatic creation of persistent storage
  volumes to reduce setup complexity and improve storage efficiency for high-volume event data,
  without requiring additional permissions.

See the [Configure FPolicy](/docs/activitymonitor/8.0/platform-configuration/storage-platforms/netapp-configuration.md) topic for additional
information.

New: Improved Microsoft Office Filtering Accuracy

- Enhanced Monitoring Capabilities — Provides precise insights into activity on the latest Microsoft
  Office versions.
- Optimize Threat Detection — Eliminates irrelevant noise while focusing on potential threats across
  Windows, NetApp ONTAP, Dell Isilon/PowerScale, Dell PowerStore, and now CTERA Edge Filer systems.

New: REST API Enhancements

- Expand Integration Capabilities — Unlocks enhanced integrations by leveraging access to a broader
  range of performance counters and statistics for hosts and outputs.
- Tailor Security Solutions — Supports custom use cases and tailors security solutions with expanded
  API capabilities.

See the [REST API](/docs/activitymonitor/8.0/integrations/rest-api/api-reference.md) topic for additional information.
