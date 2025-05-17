---
sidebar_position: 3127
title: Exporting Collections
---

# Exporting Collections

Advanced Concepts explains how to use the Endpoint Policy Manager Exporter to wrap up any Endpoint Policy Manager directives and deliver them using Microsoft Endpoint Manager (SCCM and Intune), KACE, your own MDM service, or Endpoint Policy Manager Cloud.

To export a policy for later use using Endpoint Policy Manager Exporter or Endpoint Policy Manager Cloud, follow thee steps:

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_47.png)

**Step 1 –** Right-click the collection or the policy and select **Export to XML**. This enables you to save an XML file for later use.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_48.png)

Choose a policy and select Export to XML.

**NOTE:** Exported collections or policies maintain any Item-Level Targeting that is set. Endpoint Policy Manager Browser Router policies are always contained within collections, even if you export one single policy. In other words, a collection is automatically created at the time of export if you export a single policy.