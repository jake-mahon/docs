---
sidebar_position: 4095
title: How do I specifically exclude or prevent a component from performing processing
  by modifying the license file?
---

# How do I specifically exclude or prevent a component from performing processing by modifying the license file?

Before you decide you wish to use this method, consider first using the ADMX method to disable specific components. The ADMX method is recommended over hand-editing the license file, and has the same effect. Therefore please consider this method first. See [What if I want to unlicense specific components via ADMX or Endpoint Policy Manager Cloud?](ComponentsCloud)

However, if you wish to hard-unlicense a component via the license file, you may do that inside your Universal License file.

A Universal License file will express all the components you are licensed for. There are two types of Universal Licenses. First identify what kind of universal license you have:

Type 1: Licenses which express specific components you are licensed for. For example:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/Unlicnese/748_1_image-20230820022159-1_950x514.png)

Type 2: Licenses type which express that you are licensed for Enterprise Full and therefore licensed for all components.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/Unlicnese/748_2_image-20230820022159-2_950x364.png)

## How to modify Type 1 Licenses:

When your license expresses the specific components you are licensed for, you will see lines in the license file like this:

```
 
```
And/Or

```

```
To make a specific component stop performing work and processing, you can modify the license for each component you want to affect, like this:

```

```
And/Or

```

```
**NOTE:**  For the last component in the section you need to use: `enabled="false" > instead of enabled="false" />`

For example:

```
 
```
## How to Modify a Type 2 License:

**CAUTION:**  This procedure will only work when the endpoint is running a CSE build later than 23.8. This is not expected to work on CSE 23.6 (which will accept Enterprise Full licenses, but will not accept the `` block. Additionally, only MMC snap-ins 23.8 and later will accept Enterprise Full licenses with the `` block.

First, identify which component(s) you wish to unlicense. [What CSEs are contained within Endpoint Policy Manager, what are their CSE GUIDs, and in what release did they appear?](../../Install/ClientSideExtension/GUIDs "What CSEs are contained within Endpoint Policy Manager, what are their CSE GUIDs, and in what release did they appear?")

For instance, if you wanted to unlicense Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router and also Endpoint Policy Manager Preferences 2.0 you would create an XML block like this

```
   
  
      
  
      
  

```
Then, the final and exact positioning in your Universal Enterprise Full license file would be like what's seen in this example (after the `` closing block.

```
  
  
  Your Company   
  f5bc0afd-0280-495b-bfea-c6812f2361d1  
  2023-03-15  
  2026-03-15  
  false  
    
      
      
    
    
    gp-policies  
    xml-policies  
    mdm-policies  
      
      complete  
      
    
    
      
      
    
  Mw9Fj+XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX==  

```
## Next steps after License XML modification / Import into MMC Console

The license is now ready to deploy via any method, like Group Policy or MSI wrap-up for use with an MDM provider like Intune.

Note that the 23.8 and later MMC is preferred for any modified licenses that you've created. The MMC console will express which components you have placed in the `` blocks.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/Unlicnese/748_3_image-20230820022159-3_950x561.png)

The Group Policy Settings Report will also express this as well.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/Unlicnese/748_4_image-20230820022159-4_950x560.png)

## Result of unlicensing specific component(s):

After the computer picks up the new license (via GPO, MDM, etc.) you can verify via the `PPUPDATE` command if the computer will stop processing that component.

The result of modified components via blocked license can be seen in this example.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/Unlicnese/748_5_image-20230820022159-5_950x814.png)