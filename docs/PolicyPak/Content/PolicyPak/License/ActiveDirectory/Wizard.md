---
sidebar_position: 4084
title: The License Tool (LT) isn't permitting me to install License Files (or I am
  using AGPM, GPA, or GPOAdmin.) What should I try?
---

# The License Tool (LT) isn't permitting me to install License Files (or I am using AGPM, GPA, or GPOAdmin.) What should I try?

When you buy Netwrix Endpoint Policy Manager (formerly PolicyPak) On-Prem suite you get licenses for each product in the suite, so you'll have to install multiple licenses.

There are two ways to install licenses: one is using LT, and the other is using any GPO and importing the license (more on this later),

**NOTE:** If youare using AGPM, GPA or GPOAdmin, skip this section and jump to the next section.

## Option 1: Using LT to install licenses.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/ActiveDirectory/69_1_image005.jpg)

If you are encountering problems, first try to copy and paste the license ininstead of browsing for the file. Then click **Validate**  and continue.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/ActiveDirectory/69_2_image0011.png)

## Option 2: Importing a license directly into an existing GPO

Another way to install license files for Endpoint Policy Manager On-Prem suite is to use the License Management node, which is found in two places.

**NOTE:** This tip only works when the Endpoint Policy Manager Admin Console MMC snap in is 759 or later.

**Step 1 –** Go to **Computer Configuration** > **Endpoint Policy Manager**, then right-click **License Management**.

**NOTE:**  This node will NOT appear when using NetIQ GPA!!

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/ActiveDirectory/69_3_image0021.png)

Alternatively, click **Computer Configuration** > Endpoint Policy Manager > **Admin Templates Manager** > **License Management**. This is an alternate way to get to License Management, and which does work for NetIQ GPA).

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/ActiveDirectory/69_4_2015-06-03_2227.png)

**Step 2 –** Then import the licenses received from Endpoint Policy Manager sales.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/ActiveDirectory/69_5_image0071.png)

**Step 3 –** Verify that the licenses are in the GPO by looking at the GPMC settings report:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/ActiveDirectory/69_6_image010.jpg)

**Step 4 –** Finally, link the GPO to where the computers are.

Endpoint Policy Manager doesn't care where USERS are located, only where computersare. In this example, we are linking the GPO to Sales OU, where the GPO will flow downward and hit the computers.

**NOTE:** Endpoint Policy Manager will not work in un-licensed locations. Those must be selected when providing your license request key before your licenses are cut.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/ActiveDirectory/69_7_image011.png)