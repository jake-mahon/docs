---
sidebar_position: 3425
title: Taskbar Manager Settings
---

# Taskbar Manager Settings

Collections are also present (and required) for Endpoint Policy Manager Taskbar Manager. In the Quickstart, we created a collection by right-clicking within Endpoint Policy Manager Start Screen Manager or Endpoint Policy Manager Taskbar Manager and selecting Add | New Collection. To see the collection options, you can right-click on the name of the collection and select "Edit Collection," as seen in Figure 43.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 11 - Start Screen and Taskbar Manager for Windows 10_manual/Collections Policy Settings_10.png)

Figure 43. Editing collections for Taskbar Manager.

The Endpoint Policy Manager Taskbar Manager Pinned Collection Editor can be seen in Figure 44.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 11 - Start Screen and Taskbar Manager for Windows 10_manual/Collections Policy Settings_11.png)

Figure 44. Endpoint Policy Manager Taskbar Manager Pinned Collection Editor options.

The fields inside the Taskbar Manager Pinned Collection Editor are as follows:

* Collection Name: The name of the collection you'll be creating, which isn't displayed on the endpoint.
* Comment: Space for optional comments to be added.
* State: Determines if the collection should apply or not.
* Action: Can be set to "Merge" or "Replace." Selecting "Merge" maintains OS defaults and anything a user has manually pinned to the Taskbar while adding your new items. Selecting "Replace" removes OS defaults and anything a user has manually pinned while replacing them with your new items.
* Use custom advertisement tile: When desktop items are pinned, they must also be contained in a Start Menu advertisement tile. The default behavior can be seen in Figure 45, but this can be changed. If no pinned applications are also in Start Menu groups, then a URL is used as a fallback display. The icon is then simply a URL within an advertised group.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 11 - Start Screen and Taskbar Manager for Windows 10_manual/Collections Policy Settings_12.png)

Figure 45. Pinned desktop icons will appear in the Endpoint Policy Manager Start Screen Manager advertisement group, or a group of your choice.