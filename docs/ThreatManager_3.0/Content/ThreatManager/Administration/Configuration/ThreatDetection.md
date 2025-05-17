---
sidebar_position: 2456
title: Threat Detection Page
---

# Threat Detection Page

The Threat Detection page provides an interface to view and configure threats detected by Threat Manager. This page provides a Threats list and an overview table that provides a status on all threats. Clicking on a threat in the Threats list or the Overview table displays details and configuration options for the threat.

![Threat Detection page](../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Configuration/ThreatDetection/Page.png "Threat Detection page")

Custom threats can also be created on this page.

## Threats Box

The Threats box displays the threats that are pre-configured with Threat Manager and threats created with the Investigation page or through the Custom Threat button. Threats that are crossed out are disabled.

![Threats Box](../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Configuration/ThreatDetection/ThreatsBox.png "Threats Box")

The Threats list divides the threats into sections:

* [Active Directory Threats](../../Threats/ActiveDirectory "Active Directory Threats")
* [Entra ID Threats](../../Threats/EntraID "Entra ID Threats")
* [File System Threats](../../Threats/FileSystem "File System Threats")
* [General Threats](../../Threats/General "General Threats")
* [Threat Detection Page](#Custom "Custom Threats")

Select a threat from the list to display the threat's configuration options to the right of the Threats box.

## Overview Table

The Overview table provides a high-level status of all threats. The table includes the following information:

![This screenshot displays the Overview table on the Threat Detection page.](../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Configuration/ThreatDetection/OverviewTable.png "This screenshot displays the Overview table on the Threat Detection page.")

* Name – The threat name
* Enabled – A green check mark indicates that the threat type is enabled for threat detection. A gray x indicates that the threat type is not enabled for threat detection.
* Level – The relative severity level, or risk level, of the threat. See the [Fine Tune a Threat](ThreatConfiguration "Fine Tune a Threat") topic for additional information.
* Email – A green check mark indicates that email notifications will be sent when the threat is detected. A gray x indicates that emailed notifications are disabled.
* SIEM – A green check mark indicates that threat information will be sent to a SIEM service when the threat is detected. A gray x indicates that forwarding threat information to a SIEM service is disabled.
* Playbook – A green check mark indicates that a Playbook is assigned to the threat. This means that a Playbook will be automatically executed every time a threat of this type is detected.
* Rollup – A green check mark indicates that rollups are enabled. A gray x indicates that rollups are not enabled. See the [Fine Tune a Threat](ThreatConfiguration "Fine Tune a Threat") topic for additional information.
* Exclusions – A green check mark indicates that one or more exclusions are present for this threat type. A gray x indicates that no exclusions are present for this threat. See the [Fine Tune a Threat](ThreatConfiguration "Fine Tune a Threat") topic for additional information.