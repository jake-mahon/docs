---
sidebar_position: 3538
title: What are the step by step instructions to install the MacOS Client for Endpoint
  Policy Manager Cloud manually?
---

# What are the step by step instructions to install the MacOS Client for Endpoint Policy Manager Cloud manually?

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Install/Mac/888_1_image001_950x671.png)

**Step 1 –** First download the MacOS Client for Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud as seen here.

**Step 2 –** Download the Endpoint Policy Manager Cloud PFX file like what's seen here (requires a password) and keep the file and password handy.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Install/Mac/888_2_image002_950x256.png)

**Step 3 –** Next, double-click on the installer to run. When the installer finishes, the Endpoint Policy Manager command will be installed for all users.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Install/Mac/888_3_image_10_950x461.png)

**Step 4 –** After installation completes you will be asked to "Open Preferences" like what's seen here.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Install/Mac/888_4_image_11_950x745.png)

**Step 5 –** Select Privacy, then Unlock, and then grant Endpoint Policy Manager access to the Disk like what's seen here.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Install/Mac/888_5_image_12_950x864.png)

At this point the MacOS Client for Endpoint Policy Manager Cloud is installed, but it is not yet enrolled in Endpoint Policy Manager Cloud.

**Step 6 –** Using the SUDO command, register the machine in Endpoint Policy Manager Cloud with the certificate you downloaded earlier.

1. Open a terminal window
2. Enter the following command

   `sudo policypak cloud-register --certificate /path/to/certificate.pfx --password 'certificate_password'`

   Where:  
    `/path/to/certificate.pfx` - the folder in which the certificate was downloaded.

   "certificate\_password" - the password that was added when exporting the certificate. Export from step 3.

**Step 7 –** After completing the operation, the message "`Registered: YES` " should appear in the terminal window.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Install/Mac/888_6_image_13_950x238.png)

Now the `PolicyPak` command is registered and available to use, but it must be run as root (or under sudo.)

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Install/Mac/888_7_image_14_950x292.png)

**Step 8 –** Sync with Endpoint Policy Manager Cloud with the command

`sudo policypak sync`

When you see Synchronized: Yes you are ready to make rules in Endpoint Policy Manager Cloud.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Install/Mac/888_8_image_15_950x267.png)

You should see your Mac in the MacOS | All group like what's seen here.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Install/Mac/888_9_image_16_950x511.png)