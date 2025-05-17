---
sidebar_position: 3088
title: Exporting Collections
---

# Exporting Collections

In Appendix A:[Using Endpoint Policy Manager with MDM and UEM Tools](../MDM/UEMTools "Using Endpoint Policy Manager with MDM and UEM Tools"), you can learn how to use the Netwrix Endpoint Policy Manager (formerly PolicyPak) Exporter to wrap up Endpoint Policy Manager directives and deliver them using Endpoint Policy Manager Cloud, an MDM service, or a non-Group Policy method such as MEMCM, KACE, and so on.

**NOTE:** For a video demonstrating the use of Endpoint Policy Manager Remote Work Delivery Manager with Endpoint Policy Manager MDM see [Copy files and keep them up to date with your MDM service](../Video/RemoteWorkDelivery/MDM "Copy files and keep them up to date with your MDM service").

Remember that Endpoint Policy Manager Remote Work Delivery Manager policies can be created and exported on the User side or Computer side. In the example below you can see an export from the User side.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 13 - Remote Work Delivery Manager_manual/Exporting Collections.png)

Choosing this option from the User side will allow the user to export the policy or collection for later use with Endpoint Policy Manager Cloud or an MDM service.

Below you can see an Export of Endpoint Policy Manager Remote Work Delivery Manager XML from the Computer side.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 13 - Remote Work Delivery Manager_manual/Exporting Collections_1.png)

Choosing this option from the Computer side will allow the user to export the Policy or collection for later use with Endpoint Policy Manager Cloud or an MDM service.

Here are some helpful tips to decide which side to use:

* When you export a user-side policy and deploy it using Endpoint Policy Manager Cloud or MDM, it will apply to every user on the machine (like switched mode).
* When you export a computer-side policy (which affects the system) and deploy it using Endpoint Policy Manager Cloud or MDM, it will apply to the computer as System.
* When you export a computer-side policy (which affects all users on the machine), and deploy it using Endpoint Policy Manager Cloud or MDM, it will apply to every user on the machine (like switched mode).

**NOTE:** See [Deploying Endpoint Policy Managerdirectives without Group Policy (Endpoint Policy Manager Exporter Utility)](../Video/MDM/ExporterUtility)") for additional information on how to export policies and use Endpoint Policy Manager Exporter

Note that exported collections or policies maintain any Item-Level Targeting set within them. If you've used items that represent Group Membership in Active Directory, then those items will only function when the machine is domain-joined.