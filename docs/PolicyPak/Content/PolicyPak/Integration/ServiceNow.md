---
sidebar_position: 3220
title: How can I integrate Endpoint Privilege Manager and Servicenow (or any other
  help desk) via email?
---

# How can I integrate Endpoint Privilege Manager and Servicenow (or any other help desk) via email?

Please consider watching this video before continuing: [Using Email / Long Codes](../Video/LeastPrivilege/LongCodes "Using Email / Long Codes")

Netwrix Endpoint Policy Manager (formerly PolicyPak) doesn't have an API integration with Servicenow, but you can make a nice workflow with Endpoint Policy Manager Least Privilege Manager and ServiceNow or whatever help desk system you are using.

Basically, you configure Endpoint Policy Manager Least Privilege Manager's Email Admin Approval method to go to your inbox of
Servicenow.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Integration/915_1_image002_950x567.png)

Then have someone on your Service desk use the Admin Approval tool to generate the response. Click @ in the tool to automatically create the email. The only thing that needs to be entered in is the TO: field.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Integration/915_2_image003_950x509.png)

Additionally, if you want to give your end-users tips on what to do, you can add URL links which appear like this to
the end user.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Integration/915_3_image004_950x614.png)

Setting this up is as easy as specifying a URL for them to click upon in the Custom message location in the Admin
Approval policy.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Integration/915_4_image005_950x582.png)