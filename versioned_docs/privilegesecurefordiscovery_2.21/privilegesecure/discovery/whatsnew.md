# What's New

What's New 

# What's New

The following information highlights the new and enhanced features introduced in this Netwrix Privilege Secure for Discovery version 2.21.0 release.

## Privilege Secure for Discovery v2.21.0

The following new features were released in v2.21.0.

SSSDv2 Support

- The major feature introduced in this release is the support for SSSD Linux Bridging Version 2. There was an extensive refactor of all the Linux Code to support the way that SSSD Version 2 handles Case Sensitivity for users and groups (both Domain and Local).
- In addition to the default configuration of SSSD Version 2, we also support the alternate case sensitivity option in the /etc/sssd/sssd.conf configuration file where “case_sensitivity” is set to “preserving”.

New DB Index of Queue Documents

- There was a migration introduced to add an index to the MongoDB Queue collection so that there is faster searching of the collection.

## Bug Fix List

See the [Netwrix Privilege Secure for Discovery 2.21 Bug Fix List](https://helpcenter.netwrix.com/bundle/PrivilegeSecureForDiscovery_2.21_ReleaseNotes/resource/Netwrix_PrivilegeSecureForDiscovery_2.21_BugFixList.pdf) PDF for a list of bugs fixed in this version.
