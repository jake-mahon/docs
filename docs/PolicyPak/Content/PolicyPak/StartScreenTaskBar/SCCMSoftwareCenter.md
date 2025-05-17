---
sidebar_position: 3349
title: How do I add the SCCM Software Center to the Start Screen or Taskbar?
---

# How do I add the SCCM Software Center to the Start Screen or Taskbar?

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/724_1_hf-936-img-01.png)

The normal shortcut for the SCCM Software Center looks like this; but Netwrix Endpoint Policy Manager (formerly PolicyPak) Start Screen & Taskbar Manager doesn't support this kind of link.

However, you can perform the following steps instead to get the same effect.   
Using Endpoint Policy Manager Start Screen or Endpoint Policy Manager Taskbar Manager, create a link for a Custom application like this…

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/724_3_hf-936-img-02.jpg)

Then, point it toward

`%SYSTEMROOT%\CCM\SCClient.exe page=AvailableSoftware`

Like what's seen here.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/724_5_hf-936-img-03.jpg)

**NOTE:** If you don't like that page, you can pick a page… (NOT TESTED, but should work.) Special keywords can be found at this link. . Finally, take the defaults… and/or change the ShortCut name to suit.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/724_7_hf-936-img-04.jpg)

Final results should look like this…

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/724_9_hf-936-img-05.jpg)