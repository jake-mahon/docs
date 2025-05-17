---
sidebar_position: 3556
title: Item-Level Targeting and Collections
---

# Item-Level Targeting and Collections

Item-Level Targeting is used in Microsoft Group Policy Preferences and other areas of Endpoint Policy Manager to target or filter where specific items will apply. It is helpful to have some background with on-prem Item-Level Targeting and collections before we talk about in-cloud Item-Level Targeting and collections. We provide an overview on Item-Level Targeting in the next section.

## Item-Level Targeting Overview

You can add on-prem Item-Level Targeting to the following:

* Any Group Policy Preferences item
* Any Endpoint Policy Manager item (policy level)
* Any Endpoint Policy Manager collection

As an example, let's review collections and Item-Level Targeting with Endpoint Policy Manager Least Privilege Manager. A collection enables you to group together Endpoint Policy Manager Least Privilege Manager policies so they can act together. For instance, you might create a collection for East Sales Users and another for West Sales Users. Then, you can perform Item-Level Targeting on the collections you create.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_23_624x220.png)

Item-Level Targeting can also be performed at the policy level.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_24_624x264.png)

The **Edit Item Level Targeting** menu item brings up the **Targeting Editor**. You can select any combination of characteristics you want to test for. Administrators familiar with Group Policy Preferences' Item-Level Targeting will be at home in this interface as it is functionally equivalent.

You can apply one or more targeting items to a policy, which enables targeting items to be joined logically. You can also add targeting collections, which group together targeting items in much the same way parentheses are used in an equation. In this way, you can create a complex determination about where a policy will be applied. Collections may be set to **And**, **Or**, **Is**, or **Is Not**.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_25_624x294.png)

In this example, the Pak would only apply to Windows 10 machines when the machine is portable and the user is in the FABRIKAM\Traveling Sales Users group.

Below are some real-world examples of how you can use Item-Level Targeting:

* Software prerequisites. If you want to configure an application's settings, first make sure the application is installed on the user's computer before configuring it. You can use File Match or Registry Match targeting items (or both) to verify if a specific version of a file or a registry entry is present. (For an example of this, look in the Uninstall registry key.)
* Mobile computers. If you want to deploy settings exclusively for users on mobile PCs, use the **Portable Computer** targeting item filter.
* Operating system version. You can specify different settings for applications based on the operating system version. To do this, create one rule for each operating system. Then filter each rule using the **Operating System** targeting item.
* Group membership. You can link the Group Policy Object (GPO) to the whole domain or organizational unit (OU), but only members within a specific group will pick up and process the rule settings.
* IP range. You can specify different settings for various IP ranges, like different settings for the home office and each field office.

Close the editor when done. You can see that the icon of the policy or collection has changed to orange, which shows that it now has Item-Level Targeting. In other words, none of the items in the policy or collection will apply unless the Item-Level Targeting on the policy or collection evaluates to **True**.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_26_624x163.png)

## Item-Level Targeting with In-Cloud Editors

Now that you have an understanding of Item-Level Targeting and collections, and how they would be used with the on-prem editors, we will explain the equivalent usage within in-cloud editors. Most XML data files (in-cloud policies) can be joined in a collection, to which you could then apply Item-Level Targeting.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_27_499x288.png)

You can also put Item-Level Targeting on a policy itself. Just click the policy and select **Item Level Targeting**.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_28_624x188.png)

In both cases, the in-cloud Targeting Editor appears.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_29_624x389.png)

You can use the in-cloud Targeting Editor to specify conditions when the collection or the policy will perform.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_30_624x168.png)

Once Item-Level Targeting is applied to the policy or the collection, you can see the value in the ILT column change from **No** to **Yes**.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_31_623x127.png)

One final note about Item-Level Targeting within the Endpoint Policy Manager in-cloud editor: although it appears to be possible to edit Item-Level Targeting in two places, that is really not the case. Although there are two Item-Level Targeting buttons, only one is active for the selected collection or policy. The other relates to the entire entity, and is considered the root node. The root node Item-Level Targeting must evaluate to "True" first, and only then will items inside the root node be evaluated for additional policy and collection Item-Level Targeting.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_32_624x277.png)