---
sidebar_position: 4098
title: What if I want to unlicense specific components via ADMX or Endpoint Policy
  Manager Cloud?
---

# What if I want to unlicense specific components via ADMX or Endpoint Policy Manager Cloud?

There are three ways to unlicense an individual component.

## 1 — When using Group Policy Objects to license Endpoint Policy Manager

See [How to Un-License any Endpoint Policy ManagerComponent via ADMX or Endpoint Policy Manager Cloud](../../Video/License/Unlicense "How to Un-License any Endpoint Policy Manager Component via ADMX or Endpoint Policy Manager Cloud") for additional information on this topic.

**NOTE:** You need to first install the Endpoint Policy Manager ADMX files as seen in [Troubleshooting with ADMX files](../../Video/Troubleshooting/ADMXFiles "Troubleshooting with ADMX files").

The basic gist is that you'll be using Group Policy to deliver a setting which un-licenses a specific component like this.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/Unlicnese/188_1_zxcxvxvxv.jpg)

## 2 — When using Endpoint Policy Manager Cloud

You can deliver the same setting via Endpoint Policy Manager Cloud as an Admin Template entry. Find the Endpoint Policy Manager Admin Templates, then find the setting.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/Unlicnese/188_3_ertyetyur.jpg)

Once enabled, the component will be de-activated.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/Unlicnese/188_5_zzsgdfhfghjk.jpg)

When you unlicense via ADMX you can test your results with the `PPUPDATE` command. The expected result should be similar to this example, where you can see the license is valid, but the component (in this case Browser Router) is prevented from being licensed by a policy.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/Unlicnese/188_7_img-2_950x649.png)