---
id: auditing
title: Auditing Tab
---

# Auditing Tab

The Auditing tab allows users to modify to modify the Isilon Options setting which was populated with the information entered when the Dell Isilon host is added to the Monitored Hosts list.

![Auditing Tab](/img/activitymonitor/admin/AuditingTab.png "Auditing Tab")

If the connection is successful, discovered access zones appear in the **Available** box. By default, all available access zones are monitored. To monitor specific access zones, use the arrow buttons to move access zones to the **Monitored** box. All activity for this configuration for the host is collected and placed in a single activity log file per day. This is the supported option for integration with StealthAUDIT, which requires all access zones to be monitored from a single configuration.

To have one activity log file per access zone, create multiple output configurations for the Dell Isilon device. Add one access zone to each configuration of the monitored host. When adding an Isilon host for each access zone, the Dell device name will be the same for each configuration, but the **CIFS/NFS server name** must have a unique value.