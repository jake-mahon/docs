---
sidebar_position: 6756
title: Export Policies and Templates Window
---

# Export Policies and Templates Window

You may need to export collections, policies, and templates from the Administration Console and them import them back for certain reasons, such as during a reinstall. The Export Policies and Templates Window enables you to export these items to an XML file.

Follow the steps to export policies and templates:

**Step 1 –** Open the Export Policies and Templates Window in several ways.

* If opened through Tools > Export on the menu, everything is exported.
* If opened via the keyboard shortcut (Alt+X) on the [Policies Interface](../Policies/Overview "Navigates to the Polciies Interface section of the Policy Center topics, ") or [Templates Interface](../Templates/Overview "Navigates to the Templates Interface section of the Policy Center topics. "), it exports only what is within the selection.
* To export only a single policy or template, use the Export option on the right-click menu. See the [Export Policies and Templates Window](../Policies/ExportPoliciesTemplates "Export Policies and Templates Window") topic for additional information.

![Export Policies and Templates Window](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Tools/ExportPoliciesTemplates.png "Export Policies and Templates Window")

**Step 2 –** The Export Policies and Templates window includes the following options.

* Collections
  * Export Collections – Check the box to enable the option buttons:
    * Export All Collections
    * Export Only Collections Used in Policies and Templates
    * Do Not Include Collection Items checkbox – Excludes collection items from the Collection export
* Event Consumers and Alerts
  * Export All Event Consumers and Alerts – Exports all event consumers (actions) and alerts
  * Export Only Event Consumers and Alerts Used in Policies and Templates – Exports only event consumers (actions) and alerts configured on the [Actions Tab](../Policies/Actions/Overview "Navigates to the Actions policy tab. ") of enabled policies
* Options:
  * Notes – Enter any information to be saved with the XML file
  * Encrypt Sensitive Fields – When this checkbox is checked, it enables the Password and Verify Password boxes where you can enter a password to be used as the encryption key

**Step 3 –** When the options are set as desired, click **Export**.

A file is created that contains policy, template, and collection information as per the configured settings. See the [Import Window](Import "Import Window") topic to import this file.