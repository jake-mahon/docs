---
sidebar_position: 6159
title: "NIS:\_SID Mappings"
---

# NIS: SID Mappings

The SID Mappings page is where the Windows-style SID mappings for the Unix User ID and Group ID are specified. It is a wizard page for the category of:

* Scan NIS User and Groups

![NIS Data Collector Wizard SID Mappings page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/NIS/SIDMappings.png "NIS Data Collector Wizard SID Mappings page")

The default settings work for most environments. Use this page to **Add**, **Edit**, or **Remove** ID Mappings. Multiple entries are allowed. For each range of User ID or Group ID entered, the offset is added to the ID and the resulting SID is the format with `%d` replaced by the ID.