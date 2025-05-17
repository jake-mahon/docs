---
sidebar_position: 3792
title: How can I tell how a machine is licensed (by GPO, MDM, or XML file), and also
  know for what components it is licensed?
---

# How can I tell how a machine is licensed (by GPO, MDM, or XML file), and also know for what components it is licensed?

You can use the `ppupdate` command line tool to both refresh cached policies and determine the licensing method. When the command is run, you can determine:

1. Methods of licensure (Group Policy, MDM, and/or XML)
2. Legacy License, Universal License, or Enterprise Full (aka Enterprise+) Universal License
3. Start and Expiry Date
4. Which GPO or from which XML file is performing the license
5. Which Components are licensed
6. Which Components are licensed for which Capabilities (for instance Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager Standard vs. Complete).   
   Tip: Enterprise Full licenses always show Complete for all components.
7. When a specific component is expressly disabled via an ADMX policy.
8. When a specific component is expressly disabled via the license file.
9. When a specific computer is licensed via multiple methods.

Some examples below of how a computer could be licensed and the types of output you can expect.

### How can I validate on a few endpoints that I am VALID and won't expire?

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/License/681_1_image-1.png)

A second example, but this one using Enterprise Full (aka Enterprise+) licenses (only valid for CSE versions 23.6 and later):

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/License/681_3_image_950x735.png)

* Use the `PPUPDATE` command which will always show if you are VALID and licensing type.
* Example of a machine getting Universal licenses successfully:

  **NOTE:** Enterprise Full licenses are not honored by pre 23.6 CSEs. You MAY run multiple licenses "side by side" to transition from your original license to Enterprise Full licenses.

Additional Examples for various circumstances are below.

## Example 1: Computer in the name, acts fully licensed for all components. Very useful for testing licensing issues.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/License/681_4_img-01.png)

## Example 2: Completely unlicensed.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/License/681_6_img-02.jpg)

## Example 3: Some items are licensed and not others. Typical when a customer is a Professional Customer and has purchased licenses for SPECIFIC components.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/License/681_8_img-03.jpg)

## Example 4: Licensed by placing the XML file directly upon the machine, and not by GPO.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/License/681_10_img-04.jpg)

## Example 5: When a component is licensed, but expressly disabled by ADMX.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/License/681_12_img-05.jpg)

## Example 6: When a computer is licensed via multiple methods

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/License/681_14_image8_1490x882.png)

## Example 7: When a computer is licensed for SOME components via Endpoint Policy Manager Cloud

**NOTE:** The Expiry date expresses when the computer is required to check-in by to maintain the license; not the actual expiration date of all computers. (That information is only found in Endpoint Policy Manager Cloud Portal.)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/License/681_16_e7_954x1262.png)