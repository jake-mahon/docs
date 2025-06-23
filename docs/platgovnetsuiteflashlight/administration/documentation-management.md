---
title: Documenting Your NetSuite Account
sidebar_label: Documentation Management
description: Complete guide to the spider process for documenting NetSuite customizations, from initial kick-off to ongoing automated documentation maintenance.
---

# Documenting your Account

While NetSuite is flexible and powerful, your account can quickly become out-of-sync and cluttered
with unused or undocumented customizations. Flashlight documents your account using our spidering
process. Flashlight's spider creates a searchable database of your customizations and displays them
visually. This gives you:

- Rapid results in a few days, or faster, with minimal impact on system performance.
- Complete catalog of all custom fields, scripts, forms, reports, records, workflows and templates.

Once the spider is kicked off, your account is documented over the next 3-5 days with minimal impact
on system performance. If you have concerns about your script thread capacity or you have only one
thread then we recommend that you kick-off the spider on a Friday evening.

## Spider Kick-Off

Flashlight's spider documents your account by analyzing all customizations in the system. Here is
how to kick off your first spider:

1. Open **Flashlight** > **Tools** > **Spider**.

   ![mainmenu](/img/product_docs/platgovnetsuiteflashlight/getting_started/mainmenu.webp)

2. If you are receive a NetSuite alert about segment preferences, you need to set the **Number of
   Rows in List Segments** in your account so that the spider can function properly. Refer to
   [Configuring your Account](/docs/platgovnetsuiteflashlight/getting-started/initial-setup.md) for details. Do not update this field while
   the spider is running. Once you are ready, start your spider.

   ![spider_800x368](/img/product_docs/platgovnetsuiteflashlight/getting_started/spider_800x368.webp)

3. Set the following fields:

   - Set **Update or Respider** to **Respider All Records - SLOW.**
   - Set **Select a Record Type** to **All**

   These values are required to document the entire account for the first time.

4. Click **Start Spider**. The gears start spinning to indicate the spidering process is running.
   The initial indexing process takes approximately 25 - 40 minutes. The indexing status is
   displayed at the bottom of the screen. You can see the specific customizations being processed
   and documented. Once the indexing is complete, you can close this window. From this point
   forward, Flashlight's scheduled scripts take care of the remaining documentation process over the
   next 3 - 5 days.  
   A confirmation email is sent when the spider is complete. The notification includes instructions
   on how to use your system documentation to manage your customizations and to keep your account
   running smoothly.

NOTE: During the initial indexing process, you must keep this window open, do not switch roles, do
not switch accounts and do not logout until the gears stop spinning, otherwise the process stops and
you must restart the spider.  
Internet connection issues can also interrupt the indexing process. If the indexing continues over
an hour with no progress, you must restart the spider.

## How To Video

Watch this video to see Flashlight in action.

|     |
| --- |
|     |
