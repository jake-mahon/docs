# Verifying Endpoint Policy Manager Cloud Is Working

We have pre-populated your Endpoint Policy Manager Cloud instance with some Endpoint Policy Manager Cloud XML directives so you can immediately see Endpoint Policy Manager Cloud work. In the example below we show you how Endpoint Policy Manager Cloud downloads XML files and applies them to your Windows machines.

## Endpoint Policy Manager Shortcut Preferences

We have pre-loaded a Group Policy Preferences shortcut item to display a shortcut to [www.policypak.com](http://www.policypak.com/) on the desktop for all joined machines. You can see the [www.policypak.com](http://www.policypak.com/) icon on the desktop of your client machine immediately after successfully joining Endpoint Policy Manager Cloud.

![policypak_cloud_quickstart_5_624x496](/img/product_docs/policypak/policypak/cloud/policypak_cloud_quickstart_5_624x496.png)

## Endpoint Policy Manager Admin Templates Manager

You can see an example of Endpoint Policy Manager Admin Templates Manager directives by checking out example XML policies for the screen saver. Below you can see three policies affecting the screen saver (rolled up into one XML file directive):

- Set the screen saver to __Ribbons__
- Set the number of minutes for screen saver timeout to 17 minutes
- Set __On resume, display logon screen__

__NOTE:__  __Personalization__ window might show __Screen Saver: None__, but in reality you can see that the screen saver is being set in the  __Screen Saver Settings__ window.

![policypak_cloud_quickstart_6_624x426](/img/product_docs/policypak/policypak/cloud/policypak_cloud_quickstart_6_624x426.png)

## Endpoint Policy Manager Security Settings Manager

We have pre-populated a Endpoint Policy Manager Security Settings XML file. This file will change the Security Options setting in __Accounts: Rename guest account__ by populating and locking the value to __policypakGuest__. To verify this occurred, you need to run an elevated command prompt, then run GPedit.MSC. Then you can go to  __Local Computer__ > __Computer Configuration__ > __Security Settings__ > __Security Options__ to see the results.

![policypak_cloud_quickstart_7_499x259](/img/product_docs/policypak/policypak/cloud/policypak_cloud_quickstart_7_499x259.png)

## Endpoint Policy Manager Application Settings Manager

If you pre-loaded WinZip 14.5 as instructed, a Endpoint Policy Manager Application Settings Manager XML data file is pre-populated to demonstrate managing applications. Just run WinZip 14, and you should see the configuration settings.

![policypak_cloud_quickstart_8_499x245](/img/product_docs/policypak/policypak/cloud/policypak_cloud_quickstart_8_499x245.png)

Endpoint Policy Manager Application Settings Manager's WinZip has directives for the Passwords and Cameras tabs, which were pre-populated from an example file in Endpoint Policy Manager Cloud.

## Endpoint Policy Manager Browser Router

If you installed Chrome and Firefox you are welcome to test Endpoint Policy Manager Browser Router. For a very quick test, run Chrome and see the Endpoint Policy Manager Browser Router extension get loaded. Note this pop-up should only happen one time per user. Then, in the search bar, type [www.policypak.com](http://www.policypak.com/) and hit enter.

![policypak_cloud_quickstart_9_624x391](/img/product_docs/policypak/policypak/cloud/policypak_cloud_quickstart_9_624x391.png)

When you do, Chrome l automatically closes and IE automatically opens because of the route set in the policy. An example is shown below.

![policypak_cloud_quickstart_10_624x238](/img/product_docs/policypak/policypak/cloud/policypak_cloud_quickstart_10_624x238.png)

## Manually Syncing with PolicyPak Cloud

The final way to verify your client machine's connection to Endpoint Policy Manager Cloud is to run ppcloud /sync. You should get something like what is shown below. Here you can see which groups the computer is a member of.

![policypak_cloud_quickstart_11_624x384](/img/product_docs/policypak/policypak/cloud/policypak_cloud_quickstart_11_624x384.png)

Below you can see which components are licensed and how long each each one is valid.

![policypak_cloud_quickstart_12_468x336](/img/product_docs/policypak/policypak/cloud/policypak_cloud_quickstart_12_468x336.png)

Here you can see which XML data files (directives) are being delivered to this computer.

![policypak_cloud_quickstart_13_468x265](/img/product_docs/policypak/policypak/cloud/policypak_cloud_quickstart_13_468x265.png)

__NOTE:__ By default your computer is only a member of two special built-in groups named __All__ and __Unassigned__.

These examples show that Endpoint Policy Manager Cloud is working. You are now all set up and ready to create and upload your own directives to Endpoint Policy Manager Cloud.
