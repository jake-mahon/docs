---
sidebar_position: 6837
title: GPO Setting Changes Event Type
---

# GPO Setting Changes Event Type

The GPO Setting Changes event type generates events based on rules for specified (or all) GPOs, to report what setting(s) in a GPO are modified.

The event filters for the GPO Setting Changes event type are:

* AD Group Policy Object Changes
* AD Perpetrator
* Advanced Filter

![Policy window - GPO Setting Changes Event Type](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/EventType/GPOSettingChanges.png "Policy window - GPO Setting Changes Event Type")

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated like an "ALL" for that filter set.

## AD Group Policy Object Changes Filter

Use the AD Group Policy Object Changes filter to set the scope of the policy to monitor specific GPOs.

![Policy window - AD Group Policy Object Changes filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/ADGroupPolicyObjectChanges.png "Policy window - AD Group Policy Object Changes filter")

In the Operations section, select the **All** checkbox to include all operations or select specific operations:

* Create
* Delete
* Modify

In the Group Policy Objects section, scope to specific GPOs:

* Watch All Group Policy Objects – Includes all GPOs
* List – Scopes to the specified GPOs

  * The **Add** (+) button opens the [Select Active Directory Group Policy Objects Window](Window/SelectActiveDirectory/GroupPolicyObjects "Select Active Directory Group Policy Objects Window").
  * The Remove (x) button deletes the selected item(s) from that box.

## AD Perpetrator Filter

Use the AD Perpetrator filter for monitoring to set the scope of the policy to only monitor specific security principals committing changes or to exclude specific security principals committing changes from being monitored.

![Event Type - AD Perpetrator Monitoring filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/ADPerpetratorMonitoring.png "Event Type - AD Perpetrator Monitoring filter")

Use the buttons in the Include Perpetrators, Include Collections, Exclude Perpetrators, and Exclude Collections areas to edit the lists.

* The Perpetrators Add (+) button opens the [Select Active Directory Perpetrators Window](Window/SelectActiveDirectory/Perpetrators "Navigates to the Select Active Directory Perpetrators selection window. ").
* The Collection button opens the [List of Collections Window](../../Configuration/CollectionManager/ListCollections "Navigates to the List of Collections section of the Collection Manager menu window. ") to the appropriate Collection category.
* The Remove (x) button deletes the selected item(s) from that box.

**NOTE:** To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](../../Configuration/CollectionManager/Dynamic "Navigates to the Dynamic Collections section of the Collection Manager menu window. ") topic for additional information.

Sub Tree

![Sub-Tree option in event type filters](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/SubTree.png "Sub-Tree option in event type filters")

When contexts are added, a Sub-Tree checkbox displays. Check it to apply the filter to the parent and all child contexts. Uncheck it to apply the filter to the listed context only.

## Advanced Filter

Use the Advanced Filter to include or exclude attribute conditions for GPO setting changes.

![Policy window - Advanced Filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/AdvancedGPO.png "Policy window - Advanced Filter")

Filter statements can be added to the Include condition and Exclude condition boxes. The filter uses pre-defined logical and comparison operators to create filter criteria for the scan. You can add conditions to a filter statement. Conditions can be singular or grouped by a logical operator.

Logical Operator

The logical operator is displayed as left aligned red text. To change the logical operator, click on it to open a menu with the following options:

* And
* Or
* Not And
* Not Or

Add icon (+)

To apply more filters to the set or start a new group of filters, click the **Add** (+) icon. A new row is inserted that displays a column (attribute), a comparison operator, and a Value box.

Column Selection

The selected column is displayed in blue text. Click on it to open a menu with all available columns from the GPO Setting Changes Recent Events data grid.

Comparison Operator

The comparison operator is displayed in green text. To change it, click on it to open a menu with options that associate with the data in the GPO Setting Changes Recent Events data grid.

Filter Criteria

Specify a filter criteria into the  textbox.