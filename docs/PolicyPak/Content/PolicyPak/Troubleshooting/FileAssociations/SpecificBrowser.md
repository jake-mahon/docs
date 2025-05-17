---
sidebar_position: 3908
title: How can I associate .HTM files with a specific browser, like Internet Explorer?
---

# How can I associate .HTM files with a specific browser, like Internet Explorer?

You can use Netwrix Endpoint Policy Manager (formerly PolicyPak) File Associations Manager to associate a .HTM file with IE like this.

However, doing this WILL NOT route URLs.

So if you set PPFAM association HTM -> IE and click to some .HTM file in Windows File Explorer (or open it in some third party program) it will be opened with IE.

But note that if you type a URL into, say, the Firefox or Chrome address bar (or follow some hyperlink) to navigate to file://server/site.htm, it will stay in the same browser and not magically open in IE.

![](../../../Resources/Images/Troubleshooting/FileAssociations/672_1_PolicyPak%2520File%2520Associations%2520Manager%2520to%2520associate%2520a%2520HTM%2520file%2520with%2520IE.jpg)