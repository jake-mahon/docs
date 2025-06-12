# Installer

To install GroupID, you have to run the following tools in the given order:

- __[Preparation Tool](/versioned_docs/groupid_11.0/groupid/install/installer/preparationtool.md)__ - Detects and instals the prerequisite software and Windows features that GroupID requires.

- __[Installation Tool](/versioned_docs/groupid_11.0/groupid/install/installer/install.md)__ - Installs GroupID.

- __[Configuration Tool](/versioned_docs/groupid_11.0/groupid/install/configure/configure.md)__ - Configures GroupID services, database, and other components.

## GroupID Installation Package

The GroupID installation package consists of:

- GroupID 11 Prerequisites Tool (file folder)
- GroupID <_version #_> (file folder)

## Who can install GroupID

Before installing GroupID, make sure that the logged-in user is a member of the local Administrators group on that machine.

NOTE: (1) There should be a dedicated server for GroupID.  
(2) Do not install GroupID on the domain controller.  
(3) Do not install GroupID and Microsoft Exchange Server on the same machine.

## Installation Cases

Choose one of the four installation cases for GroupID 11:

- __Case # 1__: GroupIDID 11 to co-exist with GroupID 10 on the same machine

- __Case # 2__: GroupID 11 to co-exist with GroupID 10.0 / 9.0 in the same environment
- __Case # 3__: In-place installation of GroupID 11 on the same machine
- __Case # 4__: In-place installation of GroupID 11 in the environment

The GroupID 11 installation and configuration process is the same for all four cases. You must create a copy of the database being used with the previous GroupID version and bind the copy with GroupID 11.

Next, run the Upgrade wizard to make the copied database compatible with GroupID 11. Once upgraded, the database schema changes, making it incompatible with the previous GroupID version.

NOTE: When GroupID 11 co-exists with a previous GroupID version (case # 1 and 2), the two must have separate databases. Data is not replicated between these databases.

NOTE: This section does not apply to a fresh GroupID installation.

See Also

- [Preparation Tool](/versioned_docs/groupid_11.0/groupid/install/installer/preparationtool.md)
- [Installation Tool](/versioned_docs/groupid_11.0/groupid/install/installer/install.md)
- [Configuration Tool](/versioned_docs/groupid_11.0/groupid/install/configure/configure.md)
