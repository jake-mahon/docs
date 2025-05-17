---
sidebar_position: 3857
title: How can I see if an Endpoint Policy Manager Cloud joined computer is syncing
  in the background, even if PPCLOUD /Sync appears to fail?
---

# How can I see if an Endpoint Policy Manager Cloud joined computer is syncing in the background, even if PPCLOUD /Sync appears to fail?

Right now, we realize the Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud Service is going thru some disruptions in service.  This document shows how to determine if background sync'ing is occurring.

A manual sync with Cloud Client 23.5 might fail to operate and present errors like this:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_1_image-20230525200517-1_950x212.png)

A manual PPCLOUD /sync pre-23.5 might look like this on a failed manual sync attempt:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_2_image_950x371.png)

We are actively working on the issues as they come up.

We realize that it may appear that a computer isn't getting any new policies / not sync'ing to the cloud service.However, what is more likely is that these computers are syncing in the background and get updated policies; but you're unable to see this with PPCLOUD /sync. Tip: PPCLOUD /status will show you the details of the policies ON the machine which occurred from the last sync, without attempting to PERFORM a sync.

See below for two sections: one for Endpoint Policy Manager Cloud 23.5 client and one for pre-23.5 client.

**NOTE:**  Only when you see the message "...has been proceeded successfully" is an indication of a truly successful sync and policy update.

## Checking Background Sync'ing for Endpoint Policy Manager Cloud 23.5 Client

To verify for yourself that that background syncs are occurring, when using the Endpoint Policy Manager Cloud 23.5 or client, please turn to the APPLICATION or Endpoint Policy Manager logs where events will be for Endpoint Policy Manager Cloud.

**NOTE:** Future versions of Endpoint Policy Manager Cloud client are slated to have its own event log.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_3_image-20230525200517-2.png)

Here's an example of a machine when syncs happen in the background, across a few log events (from earliest to latest event on an automatic, background sync.)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_4_image-20230525200517-3_950x169.png)

To look at them in order we have…

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_5_image-20230525200517-4_950x172.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_6_image-20230525200517-5_950x161.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_7_image-20230525200517-6_950x184.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_8_image-20230525200517-7_950x179.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_9_image-20230525200517-8_950x217.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_10_image-20230525200517-9_950x199.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_11_image-20230525200517-10_950x226.png)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_12_image-20230525200517-11_950x267.png)

**NOTE:** Only when you see the message "...has been proceeded successfully" is an indication of a truly successful sync and policy update.

## Checking Background Sync'ing for clients BEFORE Endpoint Policy Manager Cloud 23.5

There is less detail in the event logs in previous versions.

On Pre-23.5 machines, you can see similar events like this for success.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_13_image-20230525200517-12_950x586.png)

And like this for failure during a background sync.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_14_image-20230525200517-13_950x437.png)

# Final Thoughts: PPCLOUD /status

In all cases, using Endpoint Policy Manager CLOUD /status will NOT perform a sync but will tell you the final result of policies upon the machine. This is helpful so you can know what the machine's current state actually is. Example with some text removed to save space…

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Cloud/887_15_image-20230525200517-14_950x1022.png)