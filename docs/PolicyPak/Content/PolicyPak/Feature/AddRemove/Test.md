---
sidebar_position: 3419
title: Testing Your GPO
---

# Testing Your GPO

Next, make sure your endpoint is in an organizational unit (OU) to which the GPO would apply. Then log on as any user. Run GPupdateto push the computer-side GPO changes. This would normally happen in the background between 90 and 120 minutes later. After the computer gets the GPO, the user is prompted to reboot.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_16.png)

The reboot prompt only occurs because of the setting within the collection. The computer will finish installing or uninstalling the features upon reboot.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_17.png)

Now you can go back and verify those items are added or removed. Below are examples of the final result.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_18.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_19.png)