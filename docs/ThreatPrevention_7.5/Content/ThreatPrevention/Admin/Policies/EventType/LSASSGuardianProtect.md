---
sidebar_position: 6843
title: "LSASS Guardian \u2013 Protect Event Type"
---

# LSASS Guardian – Protect Event Type

Based on policy rules, the LSASS Guardian – Protect event type can prevent processes not ‘white listed’ from accessing LSASS by preventing the Write, Read and/or Create Thread operations. An event is generated for each prevented access attempt with details about the process and as it’s attempted versus actual access allowed.

The event filters for the LSASS Guardian – Protect event type are:

* AD Perpetrator
* Domains/Servers
* Processes
* Open Process Flags

![Policy window - LSASS Guardian – Protect Event Type](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/EventType/LSASSProtect.png "Policy window - LSASS Guardian – Protect Event Type")

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated like an "ALL" for that filter set.

**CAUTION:** Lockdown/blocking policies with blank filters result in everything being locked down or blocked.

***RECOMMENDED:*** Add exclusion process filters for undesired processes that make changes to LSASS, e.g. third-party malware applications.

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

## Domains/Servers Filter

Use the Domains/Servers filter to set the scope of the policy to specific domains and/or servers or to exclude specific domains and/or servers.

![Event Type - Domains/Servers Monitoring filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/DomainsServersMonitoring.png "Event Type - Domains/Servers Monitoring filter")

Use the buttons in the Include and Exclude areas to edit the lists.

* The Add (+) buttons open the [Select Domains and Servers Window](Window/SelectDomainsServers "Navigates to the Select Domains and Servers selection window. ").
* The Collection button opens the [List of Collections Window](../../Configuration/CollectionManager/ListCollections "Navigates to the List of Collections section of the Collection Manager menu window. ") to the appropriate Collection category.
* The Remove (x) button deletes the selected item(s) from that box.

**NOTE:** To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](../../Configuration/CollectionManager/Dynamic "Navigates to the Dynamic Collections section of the Collection Manager menu window. ") topic for additional information.

## Processes Filter

Use the Processes filter to set the scope of the policy to only lockdown specific processes or exclude specific processes from being locked down.

***RECOMMENDED:***  Add undesired processes that make changes to LSASS, e.g. third-party malware applications, to the Allow list.

![Policy window - Processes filter](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/ProcessesProtect.png "Policy window - Processes filter")

Select the **Block** or **Allow** option button and then edit the list.

Type the process in the textbox. Use the buttons above the box to edit the list.

* The **Add** (+) button adds a textbox to the list to add an additional process.
* The Remove (x) button deletes the selected item(s) from that box.

**CAUTION:** Leave this filter blank:

* While you can select to **Block** processes, it is *not recommended* for locking down LSASS. Adding a process block filter will limit the policy to only block that process. Unknown malicious processes would not be blocked by the policy.
* While you can select to **Allow** processes, it is possible that a malicious process could be renamed to the same as an “allowed” process. Therefore, the malicious process would not be blocked.

## Open Process Flags Filter

Use the Open Process Flags filter to set the scope of the policy for requested handles that would maliciously impact LSASS.

![](../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/Filters/OpenProcessFlagsMonitoring.png)

Check the box to select the process flag(s) to be removed from the LSASS handle that is returned to the requesting process.

* PROCESS\_VM\_WRITE – Select this checkbox to write to memory in a process
* PROCESS\_CREATE\_THREAD – Select this checkbox to create a thread
* PROCESS\_VM\_READ – Select this checkbox to remove the read flag
  * Among other things, this would prevent the creation of an LSASS dump file by Task Manager or other processes.

***RECOMMENDED:*** Leave these filters enabled. Do not deselect these options.

**NOTE:** LSASS Guardian Protect does not fully block an operation like other lockdown policies. It allows the handle request to complete, but the handle returned will have the specified flags removed.