---
sidebar_position: 3894
title: Why don't I see Office 2016, Office 2019, or Office 365 icons or tiles using
  Start Screen Manager?
---

# Why don't I see Office 2016, Office 2019, or Office 365 icons or tiles using Start Screen Manager?

If you attempt to deliver Microsoft Office tiles using Netwrix Endpoint Policy Manager (formerly PolicyPak) Start Screen Manager, you might find blank tiles
like what is experienced here.

On LTSC machines, you won't see any tiles at all, because there is no Microsoft Edge installed.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/StartScreenTaskBar/910_1_image001_950x879.png)

When you click on a tile, you should see some indication of the issue like what's seen here.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/StartScreenTaskBar/910_2_image002_950x308.png)

Upon inspection of one of the tiles, you might see the target application shown like this:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/StartScreenTaskBar/910_3_image003_950x697.png)

However, the correct details should be entered as follows:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/StartScreenTaskBar/910_4_image004_950x690.png)

To get this to work, you should use the Endpoint Policy Manager Start Screen Helper Tool on a machine with the version of Office
2016, 2019, or Office 365 you want to add icons for.

Here's the video on this tool:[Endpoint Policy Manager Start Screen and Taskbar Manager Helper Utility](../../Video/StartScreenTaskBar/HelperUtility)/

Summary to get Office icons to appear on endpoints:

**Step 1 –** Get the apps installed on an endpoint.

**Step 2 –** Use the Helper tool.

**Step 3 –** Then create the icons from the export the helper tool made.