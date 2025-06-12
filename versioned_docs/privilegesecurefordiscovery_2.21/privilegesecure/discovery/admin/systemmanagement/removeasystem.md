# Remove a System from Privilege Secure

Remove a System from Privilege Secure

# Remove a System from Privilege Secure

This article covers the proper sequence to remove Privilege Secure OAM and protection from a system.

## Windows Systems

__Step 1 –__ Log into Netwrix Privilege Secure for Discovery UI.

__Step 2 –__ Find system using the 'Grant Access' page.

__Step 3 –__ Persist any accounts you want to remain in local Administrators group.

__Step 4 –__ If OAM enabled:

- Set OAM to Unmanaged (if applicable).
- Rescan.
- Copy the last know password for the built-in Administrator account.

__Step 5 –__ Set Protect Mode and Scan Mode to disabled (no need to rescan).

__Step 6 –__ RDP or locally log into system
.

__Step 7 –__ Remove the Privilege Secure service account from local Administrators group.

Privilege Secure now has no access to change local Administrators group.

__NOTE:__ If you just remove the Privilege Secure service account from the system, one or more of the following can result:

- OAM alternate administrator account remains in the system
- The built-in Administrator will remain disabled
- No accounts will be added back into the local Administrators group

## Linux Systems

__Step 1 –__ Log into the Netwrix Privilege Secure for Discovery UI.

__Step 2 –__ Find system using the 'Grant Access' page.

__Step 3 –__ Persist any accounts you want to retain sudo privileges.

__Step 4 –__ Rescan.

__Step 5 –__ Set Protect Mode and Scan Mode to disabled (no need to rescan).

__Step 6 –__ SSH or locally log into system.

__Step 7 –__ Remove sudo privileges for the Privilege Secure service account.

__Step 8 –__ Remove Privilege Secure

Privilege Secure now has no access to this system.
