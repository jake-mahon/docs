---
sidebar_position: 4180
title: Elevating Control Panel Applets
---

# Elevating Control Panel Applets

Endpoint Policy Manager can also be used to elevate situations within Windows itself. Select **Add** > **New Control Panel Applet Policy** from the drop-down menu.

![A screenshot of a computer

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Rules/Elevating Control Panel Applets.png)

Next, consider a situation in which a Standard User may need access to the Device Manager and the Disk Defragmenter Control Panel applets. Make two policies (going through the wizard twice). The first time choose **Device Manager** first, as shown here. Next, select **Run with elevated privileges** as the action.

![A screenshot of a computer

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Rules/Elevating Control Panel Applets_1.png)

The second time you run through the wizard, choose **Optimize Drives**,.

![A screenshot of a computer

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Rules/Elevating Control Panel Applets_2.png)

The result of having gone through the wizard twice is the two MMC entries shown here.

![A screenshot of a calendar

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Rules/Elevating Control Panel Applets_3.png)

At this point, GPupdate can be run and tested on the endpoint. You should bypass the UAC prompt and be prompted for Device Manager and the Disk Defragmenter, as shown here.

![A screenshot of a computer

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/Rules/Elevating Control Panel Applets_4.png)