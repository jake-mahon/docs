---
sidebar_position: 6842
title: FSMO Role Monitoring Event Type
---

# FSMO Role Monitoring Event Type

The FSMO Role Monitoring event type generates events based on policy rules when domain controllers acquire or relinquish specified FSMO (Flexible Single Master Operation) roles.

The event filters for the FSMO Role Monitoring event type are:

* FSMO Operations
* FSMO Roles
* Domains/Servers
* AD Perpetrator
* Rule Preview

![Policy window - FSMO Role Monitoring Event Type](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/EventType/FSMORoleMonitoring.png "Policy window - FSMO Role Monitoring Event Type")

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated like an "ALL" for that filter set.

## FSMO Operations Filter

Use the FSMO Operations filter to capture events when a domain controller is assigned a FSMO role or when a FSMO role is seized from a domain controller.

![Policy window - FSMO Operations filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/EventType/FSMOOperations.png "Policy window - FSMO Operations filter")

Select the **All** checkbox to generate events when a domain controller acquires or relinquishes a FSMO role.

On selecting it, both the Acquire and Relinquish checkboxes are automatically checked.

* Check the **Acquire** checkbox to generate events when a domain controller acquires a FSMO role.
* Check the **Relinquish** checkbox to generate events when a domain controller relinquishes a FSMO role.

## FSMO Roles Filter

On the FSMO Roles filter, specific FSMO role assignments for a domain controller are selected to be monitored.

![Policy window - FSMO Roles filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/EventType/FSMORoles.png "Policy window - FSMO Roles filter")

Check the **All** checkbox to include all FSMO roles for monitoring or select specific roles:

* Forest – Select this checkbox to include the following FSMO roles that function at the forest level

  * Schema Master
  * Domain Naming Master
* Domain – Select this checkbox to include the following FSMO roles that function at the domain level

  * PDC Emulator
  * RID Master
  * Infrastructure Master

See the Netwrix [Understanding the Five FSMO Roles and Their Impact on Active Directory](https://blog.netwrix.com/2021/11/30/what-are-fsmo-roles-active-directory/ "Understanding the Five FSMO Roles and Their Impact on Active Directory") article for additional information.

## Domains/Servers Filter

Use the Domains/Servers filter to set the scope of the policy to specific domains and/or servers or to exclude specific domains and/or servers.

![Event Type - Domains/Servers Monitoring filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/DomainsServersMonitoring.png "Event Type - Domains/Servers Monitoring filter")

Use the buttons in the Include and Exclude areas to edit the lists.

* The Add (+) buttons open the [Select Domains and Servers Window](Window/SelectDomainsServers "Navigates to the Select Domains and Servers selection window. ").
* The Collection button opens the [List of Collections Window](../../Configuration/CollectionManager/ListCollections "Navigates to the List of Collections section of the Collection Manager menu window. ") to the appropriate Collection category.
* The Remove (x) button deletes the selected item(s) from that box.

**NOTE:** To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](../../Configuration/CollectionManager/Dynamic "Navigates to the Dynamic Collections section of the Collection Manager menu window. ") topic for additional information.

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

## Rule Preview Filter

The Rule Preview filter displays a summary of the selected filter options. This is primarily used for troubleshooting.

![Event Type - Rule Preview filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/RulePreview.png "Event Type - Rule Preview filter")

The text displayed represents the rules created based on the policy’s selected filters. Each row is a selected filter. Notice the Word Wrap checkox. If checked, a filter statement may cover multiple rows so that all of it is visible.