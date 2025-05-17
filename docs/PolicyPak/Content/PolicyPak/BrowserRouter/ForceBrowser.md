---
sidebar_position: 3121
title: How can I use Endpoint Policy Manager Browser router to force people to always
  use the SAME browser?
---

# How can I use Endpoint Policy Manager Browser router to force people to always use the SAME browser?

First, choose a common page to start each browser on, for example google.com, or a corporate home page.

Then configure each browser to open this page every time it is started. You simply use Netwrix Endpoint Policy Manager (formerly PolicyPak) **Application Settings Manager** (not Endpoint Policy Manager Browser Router) to set the following values.

Firefox

![](../../../../../static/images/PolicyPak/Content/Resources/Images/BrowserRouter/48_1_image001.png)

Chrome

![](../../../../../static/images/PolicyPak/Content/Resources/Images/BrowserRouter/48_2_image002.png)

![](../../../../../static/images/PolicyPak/Content/Resources/Images/BrowserRouter/48_3_image003.png)

Internet Explorer

![](../../../../../static/images/PolicyPak/Content/Resources/Images/BrowserRouter/48_4_image004.png)

Create a Policy that always opens a specific browser when a specific page is requested, for example, the home page configured above.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/BrowserRouter/48_5_image005.png)

In this example,when Firefox or Internet Explorer is started, Browser Router will immediately close that browser and open Chrome.