# Add a User or Group to a Systems' Administrator Account Inventory

Add a User or Group to a Systems' Administrator Account Inventory

# Add a User or Group to a Systems' Administrator Account Inventory

Follow the steps to add an AD User or Group to a Windows or Linux System in Protect Mode.

__NOTE:__ A local administrator account should only be added to protected systems for use cases that require the accounts to be persisted, e.g service accounts.

__Step 1 –__ Locate the system in the __Access__ > __Grant Access__ page.

__Step 2 –__ Click the __+Add__ __Account__ button in the upper right corner of the window.

![mceclip0.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/systemmanagement/10899393268503_mceclip0.png)

__Step 3 –__ Use a string to search for the AD user/group and click on the desired AD user/group.

![mceclip1.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/systemmanagement/10899393268503_mceclip1.png)

__Step 4 –__ __Windows__: Select __Just-In-Time__ or __Persistent__ and either the __Save__ or __Save and add another__ button.

![mceclip2.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/systemmanagement/10899393268503_mceclip2.png)

__Step 5 –__ __Linux__: Select __All Sudo permission allowed__ or __Specify Sudo permissions__.

- If adding a group, all users getting JITA permission for this system from this group will inherit the sudo permissions assigned to the group.
- If specifying specific sudo permission, use sudo file syntax, example provided before editing field.

![mceclip3.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/systemmanagement/10899393268503_mceclip3.png)

__Step 6 –__ Click either the __Save__ or __Save and add another__ button.

## Adding a local User or Group Account to a Windows or Linux System in Protect Mode

A local administrator account should only be added to protected systems for use cases that require the accounts to be persisted, e.g service accounts.

__Step 1 –__ Protect mode JITA is required.  If system in Protect Mode: Deny, change to JITA temporarily to add user and/or group. (Privilege Secure administrator required.)

__Step 2 –__ On the system: Add the local user and/or group to the system:

- Windows – Add to the local Administrators group.
- Linux – Add using ```sudo visudo```

__Step 3 –__ Rescan the system in Privilege Secure.

__Step 4 –__ The local user and or group should now appear in the system's Administrator Account Inventory.

__Step 5 –__ In the systems' Administrator Account Inventory, for the added account, select __Action__ > __Set Persistent__ (Privilege Secure administrator required.)

__Step 6 –__ Rescan the system.

## Bulk Actions

Bulk actions for adding AD users and/or groups to multiple system inventories is currently being developed.

## QuickStart

QuickStart can be used to provision user and/or groups to one or more systems using the Computer Data Sheet, Provision Account column.

For additional information, see the following topics:

- [QuickStart Script](/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/quickstartscript.md)
- [Quickstart Fields Demystified](/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/systemmanagement/quickstartfields.md)

Replicate sudo permissions to one or many systems:

- [Linux: Replicate Sudo Permissions to Many Systems Using QuickStart](/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/systemmanagement/linuxsudopermissions.md)
