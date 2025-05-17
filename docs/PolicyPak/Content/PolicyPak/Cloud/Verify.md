---
sidebar_position: 3274
title: Verifying Endpoint Policy Manager Cloud Is Working
---

# Verifying Endpoint Policy Manager Cloud Is Working

We have pre-populated your Endpoint Policy Manager Cloud instance with some Endpoint Policy Manager Cloud XML directives so you can immediately see Endpoint Policy Manager Cloud work. In the example below we show you how Endpoint Policy Manager Cloud downloads XML files and applies them to your Windows machines.

## Endpoint Policy Manager Shortcut Preferences

We have pre-loaded a Group Policy Preferences shortcut item to display a shortcut to [www.policypak.com](http://www.policypak.com/ "www.Endpoint Policy Manager.com") on the desktop for all joined machines. You can see the [www.policypak.com](http://www.policypak.com/ "www.Endpoint Policy Manager.com") icon on the desktop of your client machine immediately after successfully joining Endpoint Policy Manager Cloud.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/PolicyPak Cloud Quickstart_5_624x496.png)

## Endpoint Policy Manager Admin Templates Manager

You can see an example of Endpoint Policy Manager Admin Templates Manager directives by checking out example XML policies for the screen saver. Below you can see three policies affecting the screen saver (rolled up into one XML file directive):

* Set the screen saver to **Ribbons**
* Set the number of minutes for screen saver timeout to 17 minutes
* Set **On resume, display logon screen**

**NOTE:**  **Personalization** window might show **Screen Saver: None**, but in reality you can see that the screen saver is being set in the  **Screen Saver Settings** window.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/PolicyPak Cloud Quickstart_6_624x426.png)

## Endpoint Policy Manager Security Settings Manager

We have pre-populated a Endpoint Policy Manager Security Settings XML file. This file will change the Security Options setting in **Accounts: Rename guest account** by populating and locking the value to **policypakGuest**. To verify this occurred, you need to run an elevated command prompt, then run GPedit.MSC. Then you can go to  **Local Computer** > **Computer Configuration** > **Security Settings** > **Security Options** to see the results.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/PolicyPak Cloud Quickstart_7_499x259.png)

## Endpoint Policy Manager Application Settings Manager

If you pre-loaded WinZip 14.5 as instructed, a Endpoint Policy Manager Application Settings Manager XML data file is pre-populated to demonstrate managing applications. Just run WinZip 14, and you should see the configuration settings.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/PolicyPak Cloud Quickstart_8_499x245.png)

Endpoint Policy Manager Application Settings Manager's WinZip has directives for the Passwords and Cameras tabs, which were pre-populated from an example file in Endpoint Policy Manager Cloud.

## Endpoint Policy Manager Browser Router

If you installed Chrome and Firefox you are welcome to test Endpoint Policy Manager Browser Router. For a very quick test, run Chrome and see the Endpoint Policy Manager Browser Router extension get loaded. Note this pop-up should only happen one time per user. Then, in the search bar, type [www.policypak.com](http://www.policypak.com/ "www.Endpoint Policy Manager.com") and hit enter.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/PolicyPak Cloud Quickstart_9_624x391.png)

When you do, Chrome l automatically closes and IE automatically opens because of the route set in the policy. An example is shown below.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/PolicyPak Cloud Quickstart_10_624x238.png)

## Manually Syncing with PolicyPak Cloud

The final way to verify your client machine's connection to Endpoint Policy Manager Cloud is to run ppcloud /sync. You should get something like what is shown below. Here you can see which groups the computer is a member of.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/PolicyPak Cloud Quickstart_11_624x384.png)

Below you can see which components are licensed and how long each each one is valid.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/PolicyPak Cloud Quickstart_12_468x336.png)

Here you can see which XML data files (directives) are being delivered to this computer.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/PolicyPak Cloud Quickstart_13_468x265.png)

**NOTE:** By default your computer is only a member of two special built-in groups named **All** and **Unassigned**.

These examples show that Endpoint Policy Manager Cloud is working. You are now all set up and ready to create and upload your own directives to Endpoint Policy Manager Cloud.