---
sidebar_position: 3557
title: Create Policy
---

# Create Policy

You can use the Endpoint Policy Manager Cloud in-cloud editors to create many types of policies (XML data files), with more types becoming available all the time.

**CAUTION:** You must be licensed for the policy type for it to take effect. If you are not licensed for the policy type, the editor will enable you to create the policy but you will be unable to link it to any groups.

For the items which do not have in-cloud editors, you must use the steps described in the **[Upload XML Data File](Upload "Upload XML Data File")** section. In this case, you must create the policy on-prem first, then export and upload it manually.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_18_625x627.png)

The goal is to make the in-cloud editors as user-friendly as possible and closely resembling the on-prem editors. below you have the RDP Manager on-prem editor.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_19_624x352.png)

Below is an example of the in-cloud editor of the same policy type.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_20_498x384.png)

We cannot detail all the editors here, but we will explore one more important one, the Microsoft Admin Templates editor. To use this editor, select it from the top-level list, then select **+ Policy**. You will see pre-installed ADMX templates for Chrome, Edge, Office (32-bit and 64-bit), Endpoint Policy Manager, and Windows 10. Endpoint Policy Manager keeps these up to date for you.

Video: To see how to use in-cloud ADMX settings maintained by Endpoint Policy Manager, watch this video: [Endpoint Policy ManagerCloud: Use in-cloud ADMX settings maintained by Endpoint Policy Manager for Windows, Office, Chrome and more](../../../Video/Cloud/ADMXSettings "Endpoint Policy Manager Cloud: Use in-cloud ADMX settings maintained by Endpoint Policy Manager for Windows, Office, Chrome and more").

However, you may also upload your own ADMX templates for your own applications. To learn how to do that, see the "File Box" section later in this guide.

Using the Admin Templates editor is a lot like using the familiar on-prem Group Policy editor. Once you find the setting you want, just select it.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_21_624x373.png)

Next, specify the state and any other available options.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_22_625x441.png)

Additionally, to learn how to use the in-cloud Microsoft Security Settings editors, we recommend this video: [Endpoint Policy Manager Cloud and Security Settings (More examples)](../../../Video/Cloud/SecuritySettings)").

One sub-editor type for Microsoft Security Settings is the Restricted Groups Editor. You can learn how to use this editor in this video: [Endpoint Policy Manager Cloud: Restricted Groups Editor](../../../Video/Cloud/Restricted Groups Editor "Endpoint Policy Manager Cloud: Restricted Groups Editor").

To learn how to use the in-cloud Microsoft Group Policy Preferences editors, we recommend this video: [Endpoint Policy Manager Cloud + GPPrefs (More examples)](../../../Video/Cloud/Preferences)").