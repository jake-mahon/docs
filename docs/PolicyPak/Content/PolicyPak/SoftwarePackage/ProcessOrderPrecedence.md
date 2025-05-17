---
sidebar_position: 3338
title: Understanding Processing Order and Precedence
---

# Understanding Processing Order and Precedence

Within a particular GPO (Computer or User side), the processing order is counted in numerical order. This means that lower-numbered collections attempt to process first, and higher-numbered collections attempt to process last. Then, within any collection, each policy is processed in numerical order from lowest to highest.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 17 - PACKManager_manual/Understanding Processing Order.png)

Therefore, you might want to organize your policies such that removal policies come first, since those operations are faster. Then, order the installation policies by length of installation time, with the items with the shortest install times first and the items with the longest install times last.