# LSASS Guardian – Protect Event Type

Based on policy rules, the LSASS Guardian – Protect event type can prevent processes not ‘white listed’ from accessing LSASS by preventing the Write, Read and/or Create Thread operations. An event is generated for each prevented access attempt with details about the process and as it’s attempted versus actual access allowed.

The event filters for the LSASS Guardian – Protect event type are:

- AD Perpetrator
- Domains/Servers
- Processes
- Open Process Flags

![Policy window - LSASS Guardian – Protect Event Type](../../../../../../static/img/product_docs/threatprevention/threatprevention/admin/policies/eventtype/lsassprotect.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated like an "ALL" for that filter set.

__CAUTION:__ Lockdown/blocking policies with blank filters result in everything being locked down or blocked.

___RECOMMENDED:___ Add exclusion process filters for undesired processes that make changes to LSASS, e.g. third-party malware applications.

## AD Perpetrator Filter

Use the AD Perpetrator filter for lockdown to set the scope of the policy to lockdown specific security principals committing changes or to exclude specific security principals committing changes from being locked down.

![AD Perpetrator Protect filter](../../../../../../static/img/product_docs/threatprevention/threatprevention/admin/policies/eventtype/adperpetratorprotect.webp)

Select the __Block__ or __Allow__ option button and then edit the list.

__NOTE:__ For the [Password Enforcement Event Type](passwordenforcement.md), selecting __Allow__ means that this policy will not validate the new passwords for the accounts listed here. Selecting __Block__ means that this policy will validate the new passwords for the accounts listed here.

Use the buttons in the Perpetrators and Collections of Perpetrators areas to edit the lists.

- Perpetrators area – The Add (+) button opens the [Select Active Directory Perpetrators Window](window/selectactivedirectory/perpetrators.md).
- Collections of Perpetrators area - The Collection button opens the [List of Collections Window](../../configuration/collectionmanager/listcollections.md) to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

__NOTE:__ To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](../../configuration/collectionmanager/dynamic.md) topic for additional information.

## Domains/Servers Filter

Use the Domains/Servers filter to set the scope of the policy to specific domains and/or servers or to exclude specific domains and/or servers.

![Event Type - Domains/Servers Monitoring filter](../../../../../../static/img/product_docs/threatprevention/threatprevention/admin/policies/eventtype/domainsserversmonitoring.webp)

Use the buttons in the Include and Exclude areas to edit the lists.

- The Add (+) buttons open the [Select Domains and Servers Window](window/selectdomainsservers.md).
- The Collection button opens the [List of Collections Window](../../configuration/collectionmanager/listcollections.md) to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

__NOTE:__ To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](../../configuration/collectionmanager/dynamic.md) topic for additional information.

## Processes Filter

Use the Processes filter to set the scope of the policy to only lockdown specific processes or exclude specific processes from being locked down.

___RECOMMENDED:___  Add undesired processes that make changes to LSASS, e.g. third-party malware applications, to the Allow list.

![Policy window - Processes filter](../../../../../../static/img/product_docs/threatprevention/threatprevention/admin/policies/eventtype/processesprotect.webp)

Select the __Block__ or __Allow__ option button and then edit the list.

Type the process in the textbox. Use the buttons above the box to edit the list.

- The __Add__ (+) button adds a textbox to the list to add an additional process.
- The Remove (x) button deletes the selected item(s) from that box.

__CAUTION:__ Leave this filter blank:

- While you can select to __Block__ processes, it is _not recommended_ for locking down LSASS. Adding a process block filter will limit the policy to only block that process. Unknown malicious processes would not be blocked by the policy.
- While you can select to __Allow__ processes, it is possible that a malicious process could be renamed to the same as an “allowed” process. Therefore, the malicious process would not be blocked.

## Open Process Flags Filter

Use the Open Process Flags filter to set the scope of the policy for requested handles that would maliciously impact LSASS.

![openprocessflagsmonitoring](../../../../../../static/img/product_docs/threatprevention/threatprevention/admin/policies/eventtype/openprocessflagsmonitoring.webp)

Check the box to select the process flag(s) to be removed from the LSASS handle that is returned to the requesting process.

- PROCESS_VM_WRITE – Select this checkbox to write to memory in a process
- PROCESS_CREATE_THREAD – Select this checkbox to create a thread
- PROCESS_VM_READ – Select this checkbox to remove the read flag
  - Among other things, this would prevent the creation of an LSASS dump file by Task Manager or other processes.

___RECOMMENDED:___ Leave these filters enabled. Do not deselect these options.

__NOTE:__ LSASS Guardian Protect does not fully block an operation like other lockdown policies. It allows the handle request to complete, but the handle returned will have the specified flags removed.
