---
sidebar_position: 3106
title: How to deliver network drive mappings using Group Policy Preferences on the
  computer side
---

# How to deliver network drive mappings using Group Policy Preferences on the computer side

Normally, when you configure network drive mappings using Group Policy Preferences, this is done on the user side since there is no Drive Maps option on the computer side.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Preferences/106_1_img-1.png)

However, there is a way to deliver network drive mappings on the computer side using Group Policy Preferences.

**Step 1 –** Launch the Microsoft Group Policy Management Console (GPMC) as a user with the necessary rights to create and link GPOs at the OU or Domain level.

**Step 2 –** Create a new GPO and link it at the Computer OU Level, or Domain level, depending on which computers need to receive these drive mappings.

**Step 3 –** Edit t the policy and expand `User Configuration > Preferences > Windows Settings > Drive Maps`.

**Step 4 –** Right click on Drive Maps and choose `New > Mapped Drive`

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Preferences/106_2_img-2.png)

**Step 5 –** Create the new drive mapping policy as you would normally, but with one difference: be sure to check **Run in logged-on user's security context (user policy option)** under the Common tab.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Preferences/106_3_img-3.png)

**Step 6 –** Once you have everything configured correctly and the policy item is saved, export the policy item to the desktop. You can just drag it to the desktop.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Preferences/106_4_img-4.png)

**Step 7 –** Once you have successfully exported the policy file to the desktop, go ahead and delete the drive maps policy item under `User Configuration > Preferences > Windows Settings > Drive Maps`.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Preferences/106_5_img-5.png)

**Step 8 –** Now copy the drive map policy (`H_.xml`) from your desktop to a server share that is accessible by all users, who should all have a minimum of READ access to this share.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Preferences/106_6_img-6.png)

**Step 9 –** Expand `Computer Configuration > Preferences > Windows Settings > Files`

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Preferences/106_7_img-7.png)

**Step 10 –** Right-click on **Files** and choose New File, then configure it using the image below as a guide.

* Source = UNC path to the file on the server share (i.e. `\\Server\share\H_.xml`)
* Destination = `%ProgramData%\PolicyPak\XmlData\Computer\H_.XML`

  ![](../../../../../static/images/PolicyPak/Content/Resources/Images/Preferences/106_8_img-8.png)

**Step 11 –** Run `gpupdate` on one of the computers that live in an OU or domain where you applied the policy, to verify that they get the drive mapping.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Preferences/106_9_img-9.png)