---
sidebar_position: 4201
title: Using Special Policy Types for Internet Explorer
---

# Using Special Policy Types for Internet Explorer

There are two special policies that may be used only once per collection (see Figure 37 for reference). These policies manage how the Windows 10 Edge browser functions alongside Internet Explorer 11.

**NOTE:** To get an overview of Endpoint Policy Manager Browser Router's special policies for Microsoft Edge, please see [Endpoint Policy Manager and Edge ‘Special' policies](../../Video/BrowserRouter/EdgeSpecial "Endpoint Policy Manager and Edge ‘Special' policies").

The policies are **All intranet to IE** policy and **All Enterprise from Edge to IE** policy.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_36.png)

The **All intranet to IE** policy takes all websites that are already defined in the Intranet zone and ensure that those sites open in Internet Explorer 11 if the user tries to use Microsoft Edge. In other words, once this policy is applied, if a user opens an Intranet site using Edge, it will automatically be routed to Internet Explorer 11.

**All Enterprise from Edge to IE** policy takes all websites that are already defined in the IE Enterprise site list and routes those to Internet Explorer. In other words, once this policy is applied, if a user opens any website within Edge that you've set to Enterprise Mode, it will automatically be routed to Internet Explorer 11.