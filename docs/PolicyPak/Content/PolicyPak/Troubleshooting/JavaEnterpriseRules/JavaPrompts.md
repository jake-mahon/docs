---
sidebar_position: 3800
title: I'm using Endpoint Policy Manager Java Rules Manager, but I still get Java
  prompts when visiting a webpage, or attempting to run a Java applet. What can I
  do?
---

# I'm using Endpoint Policy Manager Java Rules Manager, but I still get Java prompts when visiting a webpage, or attempting to run a Java applet. What can I do?

First, Java Applets work in Internet Explorer and in Firefox. They do not work in Chrome or Microsoft Edge.

Second, there are messages which apply to:

* Firefox AND Internet Explorer (Generic Java messages; which could apply to either browser.)
* Firefox specifically and
* Internet Explorer specifically

### Type 1: Messages for both Firefox and Internet Explorer

If you see a message "Application Blocked by Java Security" (like what is seen below) and you want to automate and work around this message; you can try to add the site to the Java Exceptions Site list.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_1_ppjrm-img-01.png)

The fastest way to automate this is with Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Settings Manager's Java Paks (any of them starting with Java 7 U 25 have this feature). The video is here: [Manage and Lock down Java Site List Exceptions](../../Video/ApplicationSettings/Java/Lockdown).

Other Java prompts you might encounter, which Endpoint Policy Manager Application Settings Manager can overcome are:

* "Java has discovered application components that could indicate a security concern."
* "Your Java Version if out of date"
* "Your Java Version is insecure"
* "Do you want to run this application"

To see exactly how to work around these prompts, see  and look for the KB articles which start with the word "Java:"

### Type 2: Java Messages specifically found in Firefox

When an end user sees a Java applet on a website, they are asked to Activate Java.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_2_ppjrm-img-02.png)

Then they are asked to "Allow Now" or "Allow and Remember".

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_3_ppjrm-img-03.png)

The fastest way to automate "Allow and Remember" for Firefox per website is to read and follow this KB: [Firefox: How do I set "Allow Now", "Allow and Remember" or "Block Plugin" as plug-ins are requested?](../../ApplicationSettings/Preconfigured/Firefox/AllowRemember)

### Type 3: Java Messages Specifically Found in Internet Explorer

IE Message 1:

"This webpage wants to run "Java™ Platform SE binary' which isn't compatible with Internet Explorer's enhanced security features. If you trust this site, you can disable Enhanced Protected Mode for this site and allow the control to run."

The message can be seen below.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_4_ppjrm-img-04.png)

Or this occurs...

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_5_2017-01-23_1038.png)

This message occurs when these items are set manually or with Group Policy:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_6_ppjrm-img-05.png)

The way to remove the prompt when running the Java applet is the make the site a Trusted Site in IE. You can do this manually in IE like this:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_7_ppjrm-img-06.png)

Or using Endpoint Policy Manager Application Settings Manager like this:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_8_ppjrm-img-07.png)

Or use Endpoint Policy Manager Application Settings Manager to merge your site with what the user already has:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_9_ppjrm-img-08.png)

IE Message 2:

"This program will open outside of Protected mode. Interent Explorer's Protected mode helps protect your computer. If you do not trust this website, do not open this program."

Name: icacls.exe  
Publisher: Microsoft Windows

The message can be seen as below:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_10_ppjrm-img-09.png)

You get this specific prompt when these are set manually or via Group Policy / PolicyPak:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_11_ppjrm-img-10.png)

You can automatically make this prompt never occur again (automatically) using Group Policy Preferences:

```
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Internet Explorer\Low Rights\ElevationPolicy\  
{0F31AF05-4595-4736-BEF3-80ABE79E9211}
```
And set the following values:

| Registry | Values | Type |
| --- | --- | --- |
| AppName | REG\_SZ | Icacls.exe |
| AppPath | REG\_SZ | `C:\Windows\SysWOW64` |
| Policy | REG\_DWord | 3 |

Like this:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_12_ppjrm-img-11.png)

Result:You no longer get the prompt for iCacls, but the Java applet will not run.

IE Message 3:

"This program will open outside of Protected mode. Internet Explorer's Protected mode helps protect your computer. If you do not trust this website, do not open this program."

Name: Java SE Runntime Environment 8 Update…  
Publisher: Oracle America, Inc.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_13_ppjrm-img-12.png)

You see this message when these are set like this manually or using Group Policy / PolicyPak:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_14_ppjrm-img-13.png)

You can automatically make this prompt never occur again (automatically) using Group Policy Preferences:

```
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Internet Explorer\Low Rights\ElevationPolicy\{GUID}
```
Where `{GUID}` is GUID for @the latest version of Java on your machine

And set the following values:

| Registry Values | Type | Description | Notes |
| --- | --- | --- | --- |
| AppName | REG\_SZ | jp2launcher.exe |  |
| AppPath | REG\_SZ | `C:\Program Files (x86)\Java\jre1.8.0_111\bin` | Or whatever the path to the latest version of Java is |
| Policy | REG\_DWord | 3 |  |

Like this:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/JavaEnterpriseRules/558_15_ppjrm-img-14.png)

Result: The Java applet is ALLOWED.