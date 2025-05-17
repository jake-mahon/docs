---
sidebar_position: 3608
title: Firefox AppSet
---

# Firefox AppSet

This document will help you to understand how to use the AppSet named "Mozilla Firefox 23.0". This AppSet works for Firefox 23 and later but only works with Firefox ESR, and not the regular version. For more details on this see: 

Only use this document after you have read and worked through Book 3: Application Settings Manager and have successfully tested "Winzip 14," or an example application. Some features are only available when you have a Netwrix Endpoint Policy Manager (formerly PolicyPak) client-side extension (CSE) which supports the feature. Inside the AppSet, we've noted when a feature requires a specific CSE version.

**NOTE:** The Endpoint Policy Manager "About Config" AppSets are still valid and available and should be used for settings within Firefox's About:config.

Additionally, if you were using any of the other main Firefox AppSets created by Endpoint Policy Manager, those are now deprecated and are no longer to be used. These AppSets include:

* Mozilla Firefox 21 AppSet
* Mozilla Firefox ESR 24/24.1 AppSet
* Mozilla Firefox ESR 17 AppSet
* Mozilla Firefox Plug-In Example AppSet

For information on how to migrate from any of these old Firefox AppSets to the Firefox 23 AppSet, see the section title "Migrating to the Firefox 23 AppSet" in this document.

This AppSet is no different than other AppSets, in that it can be placed into Local, Shared or Central storage. (See Book 3: Application Settings Manager for details.) Once placed into the storage location, it will be available as seen in Figure 1.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/Preconfigured/Firefox/About This Document and the.png)

Figure 1. The Endpoint Policy Manager Mozilla Firefox Pak.

The AppSet may be used on the User or Computer side just like all other AppSets. However, Firefox lockdown features are ONLY available on the COMPUTER side, and therefore we recommend using the Firefox AppSet on the Computer side.