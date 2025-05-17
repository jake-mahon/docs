---
sidebar_position: 6824
title: GPO Setting Lockdown Event Type
---

# GPO Setting Lockdown Event Type

The GPO Setting Lockdown event type can prevent all changes against specified GPOs. Note that this is for the entire GPO (file) and not specific settings in the GPO.

The event filters for the GPO Setting Lockdown event type are:

* AD Group Policy Object
* Domains/Servers
* AD Perpetrator

![New Policy window - GPO Setting Lockdown Event Type](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/EventType/GGPOSettingLockdown.png "New Policy window - GPO Setting Lockdown Event Type")

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated like an "ALL" for that filter set.

If setting a filter to “Exclude” a domain from this blocking policy, this setting overrides any ”Block” user filters. This means that in order to block a user, you must not “Exclude” the domain where that user resides.

**CAUTION:** Lockdown/blocking policies with blank filters result in everything being locked down or blocked.

## AD Group Policy Object Filter

Use the AD Group Policy Object filter to set the scope of the policy to lockdown specific GPOs.

![Policy window - AD Group Policy Object filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/ADGroupPolicyObject.png "Policy window - AD Group Policy Object filter")

In the GPO File Operations section, select the **All** checkbox to include all operations or select specific operations:

* Create File
* Delete File
* Modify File

In the Group Policy Objects section, scope to specific GPOs:

* Apply to All Group Policy Objects – Includes all GPOs
* List – Scopes to the specified GPOs

  * The **Add** (+) button opens the [Select Active Directory Group Policy Objects Window](Window/SelectActiveDirectory/GroupPolicyObjects "Select Active Directory Group Policy Objects Window").
  * The Remove (x) button deletes the selected item(s) from that box.

## Domains/Servers Filter

Use the Domains/Servers filter to set the scope of the policy to specific domains and/or servers or to exclude specific domains and/or servers.

![Event Type - Domains/Servers Monitoring filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/DomainsServersMonitoring.png "Event Type - Domains/Servers Monitoring filter")

Use the buttons in the Include and Exclude areas to edit the lists.

* The Add (+) buttons open the [Select Domains and Servers Window](Window/SelectDomainsServers "Navigates to the Select Domains and Servers selection window. ").
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