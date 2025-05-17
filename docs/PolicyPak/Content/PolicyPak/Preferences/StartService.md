---
sidebar_position: 3104
title: How to enable and start a service using Group Policy Preferences
---

# How to enable and start a service using Group Policy Preferences

**Step 1 –** Create a new GPO for Group Policy Preferences.

**Step 2 –** Select Computer `Configuration > Preferences > Control Panel Settings > Services`.

**Step 3 –**  Right-click on Services and choose `New > Service`.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Preferences/7_1_image-20190916224004-1.png)

**Step 4 –** Under the General tab set the **Startup:** to **Automatic**, then click the ellipsis under Service Name: and select the service you would like to enable.

In this example, I selected the RPC service.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Preferences/7_2_image-20190916224004-2.png)

**Step 5 –** .Under Service action: select **Start service**

**Step 6 –** Under the Recovery tab, select **Restart the Service** for all 3 recovery options, then click **OK**.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Preferences/7_3_image-20190916224005-3.png)

**Step 7 –** Now apply the GPO to the Computer OU where the computers live and where you want this setting, and the next time `GPUPDATE` runs the service will be enabled.