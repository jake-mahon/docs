---
sidebar_position: 3245
title: The Group Policy "Reporting ADM" appears to stop functioning in one GPO. What
  can I do to fix it?
---

# The Group Policy "Reporting ADM" appears to stop functioning in one GPO. What can I do to fix it?

From time to time a GPO's GPMC report might get damaged. An example looks something like this:

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/616_1_img-01.jpg)

To repair this, take the following steps to reset the ADM generation part. In the same GPO... on the side that is giving you a problem:

**Step 1 –** Start out by making a backup of this GPO.

**Step 2 –** Remove the reporting ADM from the SIDE of the GPO which has the issue like this. And press CLOSE. This un-hinges the ADM and forces a re-write.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/616_3_img-02.jpg)

**Step 3 –** When you do, it should all "go wrongly" in the GPMC HTML report. This is GOOD and Don't panic.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/616_5_img-03.jpg)

**Step 4 –** Make & force any change again in the Netwrix Endpoint Policy Manager (formerly PolicyPak) editor. For instance, if the problem was in Endpoint Policy Manager Browser Router ADM report, make any change at all anything at all. For instance, change a policy to something, click OK and then edit it back again, etc.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/616_7_img-04.jpg)

**Step 5 –** We should automatically re-write the whole ADM.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/616_9_img-05.jpg)