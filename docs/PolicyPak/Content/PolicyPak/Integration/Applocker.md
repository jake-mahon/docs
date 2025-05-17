---
sidebar_position: 3219
title: Is Endpoint Privilege Manager compatible alongside an existing installation
  of Microsoft Applocker?
---

# Is Endpoint Privilege Manager compatible alongside an existing installation of Microsoft Applocker?

In short, yes. AppLocker will generally take effect in double-click scenarios and be the mechanism that performs blocking the application. This has implications and workarounds if you want to add Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager to an existing Microsoft Applocker deployment.

## Endpoint Privilege Manager Direct Rules

Here is a Endpoint Policy Manager Least Privilege Manager direct rule which would take effect when a user double-clicks an application, like Procmon, which would normally throw a UAC prompt.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Integration/947_1_image-20230714222620-1_950x537.png)

The result is that a double-click of the application is still blocked by Applocker as shown here.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Integration/947_2_image-20230714222621-2_950x527.png)

However, the user may be taught to right-click and **Run with PolicyPak** which will then perform the direct rule operation and elevate the application. An example of the steps can be seen here.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Integration/947_3_image-20230714222621-3_950x565.png)

**NOTE:** The **Apply on demand** checkbox for direct rules will have no effect while Applocker is running.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Integration/947_4_image-20230714222621-4_950x548.png)

## Endpoint Policy Manager Admin Approval and AppLocker

When Endpoint Policy Manager Admin Approval is on, once again, double-click is blocked by Applocker.

However, right-clicking **Run with PolicyPak** provides the Admin Approval prompt. Both Short codes and Long codes work as expected.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Integration/947_5_image-20230714222621-5_950x498.png)

## Endpoint Policy Manager and Self Elevate

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Integration/947_6_image-20230714222621-6_950x693.png)

## Endpoint Policy Manager SecureRun and Microsoft AppLocker

Endpoint Policy Manager SecureRun is different from AppLocker because it can key off the file ownership / SecureRun member.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Integration/947_7_image-20230714222621-7_950x550.png)

When SecureRun™ run alongside Applocker, there is no difference to the statements above, except that you also get all the added benefits of SecureRun. This is not a recommended configuration but it should work. Please consider retiring Applocker and using Endpoint Policy Manager SecureRun. For more in formation on why this is the recommended practice, see [AppLocker Pros, Cons, and Alternatives](https://blog.netwrix.com/2021/12/02/applocker-pros-cons-and-alternatives/ "AppLocker Pros, Cons, and Alternatives").