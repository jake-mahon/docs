# Why don't I see Office 2016, Office 2019, or Office 365 icons or tiles using Start Screen Manager?

If you attempt to deliver Microsoft Office tiles using Netwrix Endpoint Policy Manager (formerly PolicyPak) Start Screen Manager, you might find blank tiles
like what is experienced here.

On LTSC machines, you won't see any tiles at all, because there is no Microsoft Edge installed.

![910_1_image001_950x879](/img/product_docs/policypak/policypak/troubleshooting/startscreentaskbar/910_1_image001_950x879.png)

When you click on a tile, you should see some indication of the issue like what's seen here.

![910_2_image002_950x308](/img/product_docs/policypak/policypak/troubleshooting/startscreentaskbar/910_2_image002_950x308.png)

Upon inspection of one of the tiles, you might see the target application shown like this:

![910_3_image003_950x697](/img/product_docs/policypak/policypak/troubleshooting/startscreentaskbar/910_3_image003_950x697.png)

However, the correct details should be entered as follows:

![910_4_image004_950x690](/img/product_docs/policypak/policypak/troubleshooting/startscreentaskbar/910_4_image004_950x690.png)

To get this to work, you should use the Endpoint Policy Manager Start Screen Helper Tool on a machine with the version of Office
2016, 2019, or Office 365 you want to add icons for.

Here's the video on this tool:[Endpoint Policy Manager Start Screen and Taskbar Manager Helper Utility](/docs/policypak/policypak/video/startscreentaskbar/helperutility.md)/

Summary to get Office icons to appear on endpoints:

__Step 1 –__ Get the apps installed on an endpoint.

__Step 2 –__ Use the Helper tool.

__Step 3 –__ Then create the icons from the export the helper tool made.
