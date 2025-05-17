---
sidebar_position: 3999
title: I want all the files in a folder to be ALLOWED when SecureRun is used. What
  is the correct syntax?
---

# I want all the files in a folder to be ALLOWED when SecureRun is used. What is the correct syntax?

If you want to allow all files in a folder to be permitted when SecureRun is used, do not use this syntax.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/LeastPrivilege/SecureRun/628_1_img1.jpg)

Instead, if you want to allow all .exe files in the application folder, then you should be using either

%localappdata%\Slack (no wildcard/asterisk) + Folder typelike what's seen here…

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/LeastPrivilege/SecureRun/628_2_img2.jpg)

Or

%localappdata%\Slack\\* + File type

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/LeastPrivilege/SecureRun/628_3_image-20210311160348-2.png)