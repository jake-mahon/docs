---
sidebar_position: 4211
title: Using Custom Policies
---

# Using Custom Policies

Custom policies are useful in a variety of situations. The most common situation concerns a user who wants to route a website to a browser that isn't Internet Explorer, Edge, Chrome, or Firefox. For instance, Opera and Vivaldi are two browsers you may have installed on endpoints that you want to route to.

**NOTE:** For an overview of using custom policies, see the following video: [Browser Router with Custom Browsers](../../Video/BrowserRouter/CustomBrowsers "Browser Router with Custom Browsers").

You might also want to route websites to virtualized browsers. In this example you can see a virtualized Firefox. To route to virtualized browsers, simply take the icon's launch target and copy it.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_19.png)

Then, using Endpoint Policy Manager Browser Router, make a custom route and paste the target path into the **Custom Browser Path** field.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_20.png)

This technique works for most virtualized browsers such as Microsoft App-V, VMware ThinApp, etc. Note that once a virtualized browser is opened, Endpoint Policy Manager Browser Router cannot route away from those browsers and then back to real browsers. This is because Endpoint Policy Manager Browser Router's helper extensions are not installed in the virtualized browser.