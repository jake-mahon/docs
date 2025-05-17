---
sidebar_position: 3799
title: Checking the Event Viewer
---

# Checking the Event Viewer

Endpoint Policy Manager logs events to Windows Event log. In the Event Viewer | Application and Services Log | Endpoint Policy Manager look for Endpoint Policy Manager k Java Rules Manager Client events. Specifically, Event 8021 will show the XML used to write the Java Rules, as shown in Figure 34.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 6 - Java Enterprise Rules Manager Component_manual/Troubleshooting PolicyPak_5.png)

Figure 34. Event 8021 shows the XML used to write the Java Rules.

Event Forwarding, which is built into Windows, can be set up. Information on Event Forwarding is demonstrated here: .