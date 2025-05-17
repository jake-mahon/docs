---
sidebar_position: 4172
title: How-to elevate Windows Defender Firewall in Endpoint Privilege Manager?
---

# How-to elevate Windows Defender Firewall in Endpoint Privilege Manager?

## Option 1:

For detailed steps on how to elevate the Windows Defender Firewall snap-in, replacing
Services.msc with WF.msc, see [How do I elevate MMC snap ins without granting administrative rights?](MMCSnapin "How do I elevate MMC snap ins without granting administrative rights?")

## Option 2:

**Step 1 –** Identify the Windows Defender Firewall CLSID you need to elevate based on the UAC message.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/577_1_image-20230927113514-1_387x437.png)

**Step 2 –** Create a Least Privilege Manager COM Class policy.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/577_2_image-20230927113655-2_403x344.png)

**Step 3 –** Choose the well-known COM Class option from the drop-down.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/577_3_image-20230927113824-3_527x314.png)

**Step 4 –** Select the COM Class needed, then click **Add selected**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/577_4_image-20230927113909-4_724x208.png)

**Step 5 –** Ensure the **Run with elevated privileges** option is selected, then click **Next**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/577_5_image-20230927114034-5_592x320.png)

**Step 6 –** Click **Finish** to save the policy.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/577_6_image-20230927114305-7_599x423.png)