---
sidebar_position: 6835
title: Active Directory Lockdown Event Type
---

# Active Directory Lockdown Event Type

Based on policy rules, the Active Directory Lockdown event type can prevent a change in Active Directory. Every time a change is prevented, an event with details about the prevented change is generated.

The event filters for the Active Directory Lockdown event type are:

* AD Event
* AD Objects and Containers
* AD Classes and Attributes
* AD Perpetrator
* Hosts (from)
* User Account Control
* Rule Preview

![Policy window - Active Directory Lockdown Event Type](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/EventType/ADLOckdown.png "Policy window - Active Directory Lockdown Event Type")

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated like an "ALL" for that filter set.

**CAUTION:** Lockdown/blocking policies with blank filters result in everything being locked down or blocked.

## AD Event Filter

Use the AD Event filter to select Active Directory events to be monitored or locked down by the policy.

![Policy window - AD Event filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/ADEvent.png "Policy window - AD Event filter")

Check the **All** box to monitor or lockdown all operations, or select specific operations:

* Object Added – The policy monitors for objects being added to Active Directory
* Object Deleted – The policy monitors for objects being deleted from Active Directory
* Object Modified – The policy monitors for Active Directory objects being modified
* Object Moved or Renamed – The policy monitors for Active Directory objects being moved or renamed

If applied to a Lockdown Event Type, the policy both monitors and lockdowns the objects based on the selection.

## AD Objects and Containers Filter

Use the AD Objects and Containers filter to set the scope of the policy to lockdown changes to specific objects or containers within Active Directory or to exclude changes to specific objects or containers from being locked down.

![Policy window - AD Objects and Containers filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/ADObjectsAndContainers.png "Policy window - AD Objects and Containers filter")

Select the **Block** or **Allow** option button and then edit the list.

Use the buttons in the Objects and Containers, Collections of Objects and Containers, and GUIDs areas to edit the lists.

* Objects and Containers area – The Add (+) button opens the [Select Active Directory Contexts Window](Window/SelectActiveDirectory/Context "Select Active Directory Contexts Window").
* Collection of Objects and Containers area – The Collection button opens the [List of Collections Window](../../Configuration/CollectionManager/ListCollections "Navigates to the List of Collections section of the Collection Manager menu window. ") to the appropriate Collection category.
* GUIDs area – The Add (+) button opens the [Select Active Directory Contexts Window](Window/SelectActiveDirectory/Context "Select Active Directory Contexts Window").
* The Remove (x) button deletes the selected item(s) from that box.

**NOTE:** To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](../../Configuration/CollectionManager/Dynamic "Navigates to the Dynamic Collections section of the Collection Manager menu window. ") topic for additional information.

Sub Tree

![Sub-Tree option in event type filters](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/SubTree.png "Sub-Tree option in event type filters")

When contexts are added, a Sub-Tree checkbox displays. Check it to apply the filter to the parent and all child contexts. Uncheck it to apply the filter to the listed context only.

Don’t check object names inside ‘member’ attribute

This checkbox works with the Block option button. It controls the blocking behavior when the change is related to adding members to a group.

* If Unchecked – Blocks attempts to add a user (DN) listed in this filter to a group
* If Checked – Allows a user (DN) listed in this filter to be added to a group

## AD Classes and Attributes Filter

Use the AD Classes And Attributes filter to set the scope of the policy to lockdown changes to specific Active Directory classes and/or attributes, or to exclude changes to specific classes and/or attributes from being locked down.

![Policy window - AD Classes And Attributes filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/ADClassesAttributes.png "Policy window - AD Classes And Attributes filter")

Select the **Block** or **Allow** option button and then edit the list.

Use the buttons in the Classes and Attributes areas to edit the lists.

* Classes area – The Add (+) buttons open the [Class List Window](Window/ClassList "Navigates to the Class List selection window. ").
* Attributes area – The Attributes Add (+) button opens the [Attribute List Window](Window/AttributeList "Navigates to the Attribute List selection window. ").
* The Collection button opens the [List of Collections Window](../../Configuration/CollectionManager/ListCollections "Navigates to the List of Collections section of the Collection Manager menu window. ") to the appropriate Collection category.
* The Remove (x) button deletes the selected item(s) from that box.

**NOTE:** To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](../../Configuration/CollectionManager/Dynamic "Navigates to the Dynamic Collections section of the Collection Manager menu window. ") topic for additional information.

## AD Perpetrator Filter

Use the AD Perpetrator filter for lockdown to set the scope of the policy to lockdown specific security principals committing changes or to exclude specific security principals committing changes from being locked down.

![AD Perpetrator Protect filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/ADPerpetratorProtect.png "AD Perpetrator Protect filter")

Select the **Block** or **Allow** option button and then edit the list.

**NOTE:** For the [Password Enforcement Event Type](PasswordEnforcement "Password Enforcement Event Type"), selecting **Allow** means that this policy will not validate the new passwords for the accounts listed here. Selecting **Block** means that this policy will validate the new passwords for the accounts listed here.

Use the buttons in the Perpetrators and Collections of Perpetrators areas to edit the lists.

* Perpetrators area – The Add (+) button opens the [Select Active Directory Perpetrators Window](Window/SelectActiveDirectory/Perpetrators "Navigates to the Select Active Directory Perpetrators selection window. ").
* Collections of Perpetrators area - The Collection button opens the [List of Collections Window](../../Configuration/CollectionManager/ListCollections "Navigates to the List of Collections section of the Collection Manager menu window. ") to the appropriate Collection category.
* The Remove (x) button deletes the selected item(s) from that box.

**NOTE:** To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](../../Configuration/CollectionManager/Dynamic "Navigates to the Dynamic Collections section of the Collection Manager menu window. ") topic for additional information.

## Hosts (from) Filter

Use the Hosts (from) filter for lockdown to set the scope of the policy to only lockdown specific hosts as originators of an event.

![Policy window - Hosts (from) filter](../../../../Resources/Images/ThreatPrevention/Policies/Filters/HostsFromLockdown.png "Policy window - Hosts (from) filter")

Select the **Block** or **Allow** option button and then edit the list.

* For the [Password Enforcement Event Type](PasswordEnforcement "Password Enforcement Event Type"), selecting **Allow** means that this policy will not validate the new passwords for the accounts listed here. Selecting **Block** means that this policy will validate the new passwords for the accounts listed here.
* For the [Authentication Lockdown Event Type](AuthenticationLockdown "Authentication Lockdown Event Type"), this filter blocks or only allows authentication from the identified host(s).

Use the buttons in the Include Hosts area to edit the list.

* The Hosts Add (+) button opens the [Select Computer Window](Window/SelectComputers "Navigates to the Select Computer Window section").
* The Remove (x) button deletes the selected item(s) from that box.

## User Account Control Filter

Use the User Account Control (UAC) filter to block specific UAC settings by the policy.

![Policy window - User Account Control (UAC) filter](../../../../Resources/Images/ThreatPrevention/Policies/Filters/UserAccountControl.png "Policy window - User Account Control (UAC) filter")

The User Account Control filter displays a list of UAC flags. Choose specific userAccountControl flags from the list using the **Attribute Set** and/or **Attribute Clear** checkboxes. If an attribute is added or removed in Active Directory, it is blocked based on the filter set.

## Rule Preview Filter

The Rule Preview filter displays a summary of the selected filter options. This is primarily used for troubleshooting.

![Event Type - Rule Preview filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/RulePreview.png "Event Type - Rule Preview filter")

The text displayed represents the rules created based on the policy’s selected filters. Each row is a selected filter. Notice the Word Wrap checkox. If checked, a filter statement may cover multiple rows so that all of it is visible.