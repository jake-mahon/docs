---
sidebar_position: 4610
title: Manage Google Chrome Bookmarks
---

# Manage Google Chrome Bookmarks

Using Netwrix Endpoint Policy Manager (formerly PolicyPak)'s pre-configured PAK for Google Chrome we can deliver Chrome bookmarks.

* Launch Google Chrome PAK properties
* Select Extras tab and find an option Managed Bookmarks

  ![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Video/ApplicationSettings/Chrome/491_1_gg_900x644.png)
* Insert string as following. Change the URL and Name to reflect your required bookmarks.

  ```
[ { "name": "GP Answers", "url": "gpanswer.com" }, { "name": "PolicyPak", "url":   
  "policypak.com" }, { "name": "Chrome links", "children": [ { "name": "Chromium",   
  "url": "chromium.org" }, { "name": "List of Policies", "url":   
  "http://www.chromium.org/administrators/policy-list-3" } ] } ]
  ```
More Information: Available on this link: 