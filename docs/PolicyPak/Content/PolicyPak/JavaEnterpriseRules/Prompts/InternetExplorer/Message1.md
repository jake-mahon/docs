---
sidebar_position: 4065
title: IE Message 1
---

# IE Message 1

A user may receive the following Java message when encountering an applet in Internet Explorer:

This webpage wants to run Java™ Platform SE binary' which is not compatible with Internet Explorer's enhanced security features. If you trust this site, you can disable Enhanced Protected Mode for this site and allow the control to run.

This Java message pops-up when you try to access an IE website that has a Java applet on it.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 6 - Java Enterprise Rules Manager Component_manual/Overcoming Java Prompts_3.png)

This message occurs when certain settings are applied manually or with Group Policy, as shown below.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 6 - Java Enterprise Rules Manager Component_manual/Overcoming Java Prompts_4.png)

To remove the prompt when running the Java applet, make the site a Trusted Site in IE. Below you can see how to remove a Java message and make the website a trusted site.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 6 - Java Enterprise Rules Manager Component_manual/Overcoming Java Prompts_5.png)

Another way to remove the message is by using Endpoint Policy Manager Application Settings Manager, as shown below.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 6 - Java Enterprise Rules Manager Component_manual/Overcoming Java Prompts_6.png)

You can also use Endpoint Policy Manager Application Settings Manager to merge your site with the user's.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 6 - Java Enterprise Rules Manager Component_manual/Overcoming Java Prompts_7.png)