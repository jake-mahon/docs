---
sidebar_position: 3757
title: Why am I prompted about a Digitally Signed Driver for Endpoint Policy Manager
  CSE (and how do I work around it)?
---

# Why am I prompted about a Digitally Signed Driver for Endpoint Policy Manager CSE (and how do I work around it)?

When installing the Netwrix Endpoint Policy Manager (formerly PolicyPak) CSE, you get the following message, even though all Endpoint Policy Manager files are digitally signed:

```
"Windows requires a digitally signed driver … PPProcessFilter.sys "
```
![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Install/351_1_sdgghjl.png)

Install the KB 3033929 Windows 7 update from Microsoft for[https://www.microsoft.com/en-us/download/details.aspx?id=46148](https://www.microsoft.com/en-us/download/details.aspx?id=46148 "Microsoft - Security Update for Windows 7 for x64-based Systems") or[https://www.microsoft.com/en-us/download/details.aspx?id=46078](https://www.microsoft.com/en-us/download/details.aspx?id=46078 "Microsoft - Security Update for Windows 7 for 32 bit (KB3033929)").

This will enable Windows 7 to honor 256-hash signed files.

As you can see here, all Endpoint Policy Manager files are signed with SHA256.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Install/351_2_image002.jpg)