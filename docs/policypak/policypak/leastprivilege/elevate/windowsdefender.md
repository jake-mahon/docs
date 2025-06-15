# How-to elevate Windows Defender Firewall in Endpoint Privilege Manager?

## Option 1:

For detailed steps on how to elevate the Windows Defender Firewall snap-in, replacing
Services.msc with WF.msc, see [How do I elevate MMC snap ins without granting administrative rights?](mmcsnapin.md)

## Option 2:

__Step 1 –__ Identify the Windows Defender Firewall CLSID you need to elevate based on the UAC message.

![577_1_image-20230927113514-1_387x437](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/elevate/577_1_image-20230927113514-1_387x437.webp)

__Step 2 –__ Create a Least Privilege Manager COM Class policy.

![577_2_image-20230927113655-2_403x344](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/elevate/577_2_image-20230927113655-2_403x344.webp)

__Step 3 –__ Choose the well-known COM Class option from the drop-down.

![577_3_image-20230927113824-3_527x314](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/elevate/577_3_image-20230927113824-3_527x314.webp)

__Step 4 –__ Select the COM Class needed, then click __Add selected__.

![577_4_image-20230927113909-4_724x208](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/elevate/577_4_image-20230927113909-4_724x208.webp)

__Step 5 –__ Ensure the __Run with elevated privileges__ option is selected, then click __Next__.

![577_5_image-20230927114034-5_592x320](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/elevate/577_5_image-20230927114034-5_592x320.webp)

__Step 6 –__ Click __Finish__ to save the policy.

![577_6_image-20230927114305-7_599x423](../../../../../static/img/product_docs/policypak/policypak/leastprivilege/elevate/577_6_image-20230927114305-7_599x423.webp)
