---
sidebar_position: 4174
title: I elevated an application, but drag and drop between the elevated and other
  non-elevated applications isn't working anymore. What can I try?
---

# I elevated an application, but drag and drop between the elevated and other non-elevated applications isn't working anymore. What can I try?

When Netwrix Endpoint Policy Manager (formerly PolicyPak) elevates a process it also changes its Integrity level.

**NOTE:** To learn more about this topic please see the Microsoft article on [What is the Windows Integrity Mechanism?](https://learn.microsoft.com/en-us/previous-versions/dotnet/articles/bb625957(v=msdn.10)?redirectedfrom=MSDN "What is the Windows Integrity Mechanism?")

As such, a newly elevated process may not be able to communicate with a normally running process.

That being said, you can reduce the Integrity level of the process which is running elevated. To do it, instead of selecting **Run with elevated privileges**, choose instead **Run with customized token**.

This enables you to change the Integrity level. You'll want to try Medium-High first, then fall back to Medium or Low, stopping at the first one which works.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/402_1_q3-img-1.jpg)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/402_2_q3-img-2.jpg)