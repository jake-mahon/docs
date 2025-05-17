---
sidebar_position: 3417
title: Creating Policies within Collections
---

# Creating Policies within Collections

Double-click to go into your collection, where you can now create policies. Go to **Add** > **New Policies**. Once there you are prompted by the Endpoint Policy Manager Feature Manager for Windows wizard.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_3.png)

Here you can select an install rule, an uninstall rule, or a mixed rule.

* Install Rule provides a method to install features or optional features.
* Uninstall Rule provides a method to uninstall features or optional features.
* Mixed Rule provides methods both installing and uninstalling.

For this example, select **Install Rule**, which brings you to the **Select package type** page.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_4.png)

The next screen allows you to turn on Windows features. Select the items you want, such as .Net Framework 3.5 (either, both, or neither of the sub-options) as well as the Telnet Client. Additionally you should take note of some special items:

* Supported on - Explains which versions of Windows 10 and Windows Server this item will apply to.
* Feature details - Explains which features depend on the selected feature (and will automatically be installed), as well as whether a reboot is required or possible.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_5.png)

Click **Next** to continue. Then, click on **Add policies to the existing collection**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_6.png)

In The Policies settings window shows which policy items you are about to create. You can optionally add Item-Level Targeting to any item, so that item will only be installed when the conditions are true. In the example below you can see that the Telnet Client will only be installed on portable computers.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_7.png)

**NOTE:** You do not need to add Item-Level Targeting for this example, it is just shown here for future reference.

The final page of the wizard displays:.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_8.png)

Click **Finish**. Thee two items are added to your collection.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_9.png)

Now, repeat the process again, this time selecting:

* **Install Rule**
* **Windows Optional Feature**

The **Turn Windows optional features ON** page appears. **Select** **Graphics Tools**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_10.png)

Scroll down and find the RSAT category and select **RSAT: Group Policy Management Tools**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_11.png)

Continue, leaving the remainder of the default settings. You can see the policies added to the collection.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_12.png)

Now, let's remove some features and optional features.

We will add more policies, this time selecting:

* **Uninstall rule**
* **Windows Features**

Select the items to uninstall, like Microsoft XPS Document Writer and SMB 1.0.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_13.png)

Click **Next** through the remainder of the wizard, accepting the defaults.

Run through the wizard one more time, selecting:

* **Uninstall Rule**
* **Windows Optional Feature**

Then you can select to turn off XPS Viewer.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_14.png)

Click **Next** through the remainder of the wizard, accepting the defaults.

At this point you should have seven policies.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Feature/Quickstart Adding and Removing_15.png)