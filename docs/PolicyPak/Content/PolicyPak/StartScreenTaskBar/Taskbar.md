---
sidebar_position: 3347
title: Quick Start - Taskbar Manager
---

# Quick Start - Taskbar Manager

Now you're ready to create Netwrix Endpoint Policy Manager (formerly PolicyPak) Taskbar policies.

**NOTE:** For a video overview of Taskbar Manager, see [[Endpoint Policy Taskbar Manager: Quick Demo](../Video/StartScreenTaskBar/DemoTaskbar)](https://www.policypak.com/products/policypak-start-screen-manager).

Like the Endpoint Policy Manager Start Menu policies, Endpoint Policy Manager Taskbar Manager policies also must reside within collections.

**Step 1 –** First, find the Taskbar Manager for Windows 10 node within the User | Endpoint Policy Manager nodes in the Group Policy Editor. Then right-click to open the Taskbar Manager to create your first Endpoint Policy Manager Taskbar Manager collection, as shown in Figure 28.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 11 - Start Screen and Taskbar Manager for Windows 10_manual/Quickstart Taskbar Manager.png)

Figure 28. The Endpoint Policy Manager Taskbar Manager Collection Editor.

**Step 2 –** For this Quickstart, we recommend you set the Action field to "Replace." For reference, the Action field values are the following:

* Merge: Will keep and maintain OS defaults and anything a user has manually pinned to the Taskbar while adding your new items.
* Replace: Will remove OS defaults and anything a user has manually pinned while replacing with your new items.

**Step 3 –** Next, within the collection, you can add items like those shown in Figure 29.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 11 - Start Screen and Taskbar Manager for Windows 10_manual/Quickstart Taskbar Manager_1.png)

Figure 29. Adding universal (UWP) or desktop application policies.

**Step 4 –** You can add any registered application using the same process you used earlier in the "Adding Desktop Applications" section. For this Quickstart, select Adobe Reader. Then add a UWP application. For testing purposes, you should select Calculator or Alarms & Clock. When you do, you'll see the two items inside the Endpoint Policy Manager Taskbar Manager collection shown in Figure 30.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 11 - Start Screen and Taskbar Manager for Windows 10_manual/Quickstart Taskbar Manager_2.png)

Figure 30. Taskbar policies are contained within collections.

**Step 5 –** On the endpoint, run GPUpdate and then log off and log on again to get the policy settings. The result can be seen in Figure 31.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 11 - Start Screen and Taskbar Manager for Windows 10_manual/Quickstart Taskbar Manager_3.png)

Figure 31. Policy settings applied after using PolicyPak Taskbar Manager "Replace" mode.

Since "Replace" mode was used, all Taskbar defaults have been removed and the settings you selected are implemented.

This ends the Endpoint Policy Manager Start Screen & Taskbar Manager Quickstart sections. Next, we'll dive into more detail about the Endpoint Policy Manager Start Screen & Taskbar Manager.