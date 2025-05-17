---
sidebar_position: 3931
title: I'm getting an error when installing the cloud client which says "An error
  occured when verifying security for the message"
---

# I'm getting an error when installing the cloud client which says "An error occured when verifying security for the message"

Please ensure that the system time on the client system is correct. You can try  to have the computer re-sync its time with an online source.

An example of the error can be seen here:

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Error/Cloud/113_1_dtyeryrtyy.png)

Please follow the following steps

**Step 1 –** Change the timezone to UTC like what is shown here:

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Error/Cloud/20_1_sdgdfhfgnfjfghjfghjfghjfghj.png)

**Step 2 –** Verify the time on the computer is now the same as what is seen [http://www.worldtimeserver.com/current\_time\_in\_UTC.aspx](http://www.worldtimeserver.com/current_time_in_UTC.aspx "Current Time in UTC/GMT")

**Step 3 –** If the computer's time is "off", change it so it matches UTC time.

**Step 4 –** Then join Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud.

**Step 5 –** After join, change timezone to your correct timezone.

**Step 6 –** Verify PPcloud still works with commandline: `ppcloud /sync`