---
sidebar_position: 3378
title: Apply Mode or "Apply Once and Drift"
---

# Apply Mode or "Apply Once and Drift"

You can also create policies that will enforce a given file association one time so that users can then drift from your configuration and choose their own application.

**NOTE:** For a video on applying policies only once, see [Endpoint Policy Manager File Associations Manager: Apply once (and drift)](../Video/FileAssociations/ApplyOnce)").

Let's create a file association policy on the User side so that Adobe Acrobat Reader is the assigned application for all its associated files.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/FileAssociations/About PolicyPak File Associations_27.png)

Notice that you get a popup message alerting you that user-side file and protocol associations are ignored on Endpoint Policy Manager CSE versions older than 20.2.2361.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/FileAssociations/About PolicyPak File Associations_28.png)

You can then choose all of the possible file types for Adobe Acrobat Reader.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/FileAssociations/About PolicyPak File Associations_29.png)

Next choose the **Apply once (for policies)** option.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/FileAssociations/About PolicyPak File Associations_30.png)

Once the policy has been enforced one time, users can then drift away from the deployed configuration to make their own choices.

You can use this Apply once and drift approach for a single policy as well. Simply go to **Add** > **New Policy** and click the **Apply** drop down menu and select **Once**.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/FileAssociations/About PolicyPak File Associations_31.png)