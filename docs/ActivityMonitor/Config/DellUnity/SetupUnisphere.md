---
id: setupunisphere
title: Unity Initial Setup with Unisphere
---

# Unity Initial Setup with Unisphere

Follow the steps to configure the initial setup for a Unity device with Unisphere.

- Add CEPA server – This is the server where CEE is installed. It is recommended that this is also the server were the Activity Monitor activity agent is deployed.
- Enable the following events for Post Events.

Required Unity events needed for CIFS Activity:

![NAM Required Events For CIFS](/img/activitymonitor/config/dellunity/EventsCIFS.png "NAM Required Events For CIFS")

Required Unity events needed for NFS Activity:

![NAM Required Events For NFS](/img/activitymonitor/config/dellunity/EventsNFS.png "NAM Required Events For NFS")

**Step 2 –** Enable Events Publishing:

  - NFS Events Publishing – Enabled (required for NFS protocol monitoring)
  - SMB Events publishing – Enabled (required for SMB / CIFS protocol monitoring)

Once Unity setup is complete, it is time to configure and enable monitoring with the Activity Monitor.