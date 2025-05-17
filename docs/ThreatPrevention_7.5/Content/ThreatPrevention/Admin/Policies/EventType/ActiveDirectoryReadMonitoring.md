---
sidebar_position: 6830
title: Active Directory Read Monitoring Event Type
---

# Active Directory Read Monitoring Event Type

The Active Directory Read Monitoring event type reports on a user's accessing or reading specific security-related Active Directory attributes. Active Directory processes a high volume of 'Read' requests. This event type is not designed to capture all or a majority of the 'Read' activity.

The event filters for the Active Directory Read Monitoring event type are:

* Domains/Servers
* AD Classes
* AD Objects
* AD Context
* AD Perpetrator
* AD Attributes
* Hosts (from)
* Rule Preview

![Policy window - Active Directory Read Monitoring Event Type](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/EventType/ADReadMonitoring.png "Policy window - Active Directory Read Monitoring Event Type")

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated like an "ALL" for that filter set.

**CAUTION:** This event type monitors all specified domain controller Read events. Use this event type with significant filters or else it can adversely impact overall system performance and significantly increase the size of the Event Database. Limit the policy to specific attributes in order to avoid overwhelming the database with a high volume of unnecessary events.

## Domains/Servers Filter

Use the Domains/Servers filter to set the scope of the policy to specific domains and/or servers or to exclude specific domains and/or servers.

![Event Type - Domains/Servers Monitoring filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/DomainsServersMonitoring.png "Event Type - Domains/Servers Monitoring filter")

Use the buttons in the Include and Exclude areas to edit the lists.

* The Add (+) buttons open the [Select Domains and Servers Window](Window/SelectDomainsServers "Navigates to the Select Domains and Servers selection window. ").
* The Collection button opens the [List of Collections Window](../../Configuration/CollectionManager/ListCollections "Navigates to the List of Collections section of the Collection Manager menu window. ") to the appropriate Collection category.
* The Remove (x) button deletes the selected item(s) from that box.

**NOTE:** To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](../../Configuration/CollectionManager/Dynamic "Navigates to the Dynamic Collections section of the Collection Manager menu window. ") topic for additional information.

## AD Classes Filter

Use the AD Classes filter to set the scope of the policy to only monitor specific classes within Active Directory or to exclude specific classes from being monitored.

![Policy window - AD Classes filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/ADClasses.png "Policy window - AD Classes filter")

Use the buttons in the Include and Exclude areas to edit the lists.

* The Add (+) buttons open the [Class List Window](Window/ClassList "Navigates to the Class List selection window. ").
* The Collection button opens the [List of Collections Window](../../Configuration/CollectionManager/ListCollections "Navigates to the List of Collections section of the Collection Manager menu window. ") to the appropriate Collection category.
* The Remove (x) button deletes the selected item(s) from that box.

## AD Objects Filter

Use the AD Objects filter to set the scope of the policy to only monitor specific objects in Active Directory or to exclude specific objects from being monitored.

![Policy window - AD Objects filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/ADObjects.png "Policy window - AD Objects filter")

Use the buttons in the Include and Exclude areas to edit the lists.

* The Add (+) buttons open the [Select Active Directory Objects Window](Window/SelectActiveDirectory/Objects "Navigates to the Select Active Directory Objects selection window. ").
* The Collection button opens the [List of Collections Window](../../Configuration/CollectionManager/ListCollections "Navigates to the List of Collections section of the Collection Manager menu window. ") to the appropriate Collection category.
* The Remove (x) button deletes the selected item(s) from that box.

**NOTE:** To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](../../Configuration/CollectionManager/Dynamic "Navigates to the Dynamic Collections section of the Collection Manager menu window. ") topic for additional information.

## AD Context Filter

Use the AD Context filter to set the scope of the policy to only monitor specific contexts (e.g. containers and organizational units) in Active Directory or to exclude specific contexts from being monitored.

![Policy window - AD Context filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/ADContext.png "Policy window - AD Context filter")

Use the buttons in the Include Contexts, Include Collections, Exclude Contexts, and Exclude Collections areas to edit the lists.

* The Context Add (+) button opens the [Select Active Directory Contexts Window](Window/SelectActiveDirectory/Context "Select Active Directory Contexts Window").
* The Collection button opens the [List of Collections Window](../../Configuration/CollectionManager/ListCollections "Navigates to the List of Collections section of the Collection Manager menu window. ") to the appropriate Collection category.
* The Remove (x) button deletes the selected item(s) from that box.

Sub Tree

![Sub-Tree option in event type filters](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/SubTree.png "Sub-Tree option in event type filters")

When contexts are added, a Sub-Tree checkbox displays. Check it to apply the filter to the parent and all child contexts. Uncheck it to apply the filter to the listed context only.

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

## AD Attributes Filter

Use the AD Attributes filter to set the scope of the policy to only monitor specific Active Directory attributes or to exclude specific attributes from being monitored.

![Policy window - AD Attributes Monitoring filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/ADAttributesMonitor.png "Policy window - AD Attributes Monitoring filter")

Use the buttons in the Include and Exclude areas to edit the lists.

* The Attributes Add (+) button opens the [Attribute List Window](Window/AttributeList "Navigates to the Attribute List selection window. ").
* The Collection button opens the [List of Collections Window](../../Configuration/CollectionManager/ListCollections "Navigates to the List of Collections section of the Collection Manager menu window. ") to the appropriate Collection category.
* The Remove (x) button deletes the selected item(s) from that box.

## Hosts (from) Filter

Use the Hosts (from) filter for monitoring to set the scope of the policy to only monitor specific hosts as originators of an event or to exclude specific hosts from being monitored.

![Event Type – Hosts (from) filter](../../../../Resources/Images/ThreatPrevention/Policies/Filters/HostsFrom.png "Event Type – Hosts (from) filter")

Use the buttons in the Include Hosts, Include Collections, Exclude Hosts, and Exclude Collections areas to edit the lists.

* The Hosts Add (+) button opens the [Select Computer Window](Window/SelectComputers "Navigates to the Select Computer Window section").
* The Collection button opens the [List of Collections Window](../../Configuration/CollectionManager/ListCollections "Navigates to the List of Collections section of the Collection Manager menu window. ") to the appropriate Collection category.
* The Remove (x) button deletes the selected item(s) from that box.

**NOTE:** To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](../../Configuration/CollectionManager/Dynamic "Navigates to the Dynamic Collections section of the Collection Manager menu window. ") topic for additional information.

## Rule Preview Filter

The Rule Preview filter displays a summary of the selected filter options. This is primarily used for troubleshooting.

![Event Type - Rule Preview filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/RulePreview.png "Event Type - Rule Preview filter")

The text displayed represents the rules created based on the policy’s selected filters. Each row is a selected filter. Notice the Word Wrap checkox. If checked, a filter statement may cover multiple rows so that all of it is visible.