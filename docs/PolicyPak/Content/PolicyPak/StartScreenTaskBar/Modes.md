---
sidebar_position: 3356
title: Endpoint Policy Manager Task Bar Manager differences between MERGE and REPLACE
  modes
---

# Endpoint Policy Manager Task Bar Manager differences between MERGE and REPLACE modes

## Why do I see duplicate icons on the Taskbar?

In the image below you can see that there are 3 types of items:

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/719_1_image-20200212183953-1.png)

1. Windows default apps to the left (blue circle).
2. Apps pinned by the user in the center (orange triangle).
3. Apps that you pin using the XML file (i.e. policy items) to the right (green square).

"REPLACE" mode removes default pinned apps, but does not remove user pinned apps. In other words, when using the "REPLACE" option if the user has already pinned an application and you choose to pin the same application using Netwrix Endpoint Policy Manager (formerly PolicyPak) Taskbar Manager you will end up with two copies of that application on the Taskbar, one pinned by the user and the other pinned by Endpoint Policy Manager.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/719_3_image-20200212183953-2.png)

More info: 

## Example of what happens when using "REPLACE" Mode:

If we started with the Taskbar layout below:

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/719_5_image-20200212183953-3.png)

Then created a REPLACE PP TBM policy with the following settings:

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/719_7_image-20200212183953-4_834x93.png)

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/719_9_image-20201007144149-1_619x269.png)

**NOTE:** When creating a REPLACE policy you are shown the warning screen below:

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/719_10_image-20200212183953-6_756x226.png)

The result of applying this policy is that All Default Applications not mentioned in the policy are removed, User pinned applications are ignored, then any remaining applications from the PP TBM REPLACE policy are pinned.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/719_12_image-20200212183953-7_500x38.png)

Now, if we edited the same policy and set the REPLACE policy as in the screenshot below:

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/719_14_image-20200212183953-8.png)

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/719_16_image-20200212183953-9.png)

Then applied the policy (remember to logout out and back in after running gpupdate) the result would be:

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/719_18_image-20200212183953-10_541x36.png)

Since 7-Zip was not installed on the target machine, it was ignored, since CMD was pinned by the User it was also ignored. The remaining applications were then removed and the new applications were pinned.

## Example of what happens when using "MERGE" Mode:

If we started with the Taskbar layout below:

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/719_20_image-20200212183953-11_470x38.png)

Then created a MERGE PP TBM policy with the following settings:

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/719_22_image-20200212183953-12_834x93.png)

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/719_24_image-20200212183953-13_618x256.png)

The result of applying this policy would be that only "Chrome" gets added since the other applications (Edge and Internet Explorer) were already present. In MERGE mode, any applications from the PP TBM policy that are already present (pinned) are ignored and then any new applications are pinned.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/StartScreenTaskBar/719_26_image-20200212183953-14_468x38.png)

**NOTE:**  After running gpupdate to apply policy you must logout then back in to receive the new PP TBM policy settings.