# Policy Templates: FIM File Integrity

File System Integrity Monitoring is crucial for security and most Security Policies/Standards e.g. PCI DSS, mandate use of this control. Netwrix Change Tracker will monitor and alert on any file or folder change – a new file appearing, such as a Trojan being added to the System 32 folder, or an application hack/modification will be detected and alerted.

![ConfigTemplatesFIMFiles](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/policytemplates/configtemplatesfimfiles.png)

- __Polling Frequency__ – The default setting is to run a full poll (effectively a new baseline operation) only when the Agent has been restarted e.g. after a reboot but the Agent may be run in a ‘polling-only’ mode. This disables live tracking (the __Tracking Style__ attribute for the Tracker should be set to _Polling_) and means that the only change detection is performed when the scheduled poll is run. While this loses the benefits of real-time change detection, it can be desirable in sensitive environments where server resource loads need to be minimized under all conditions.
- __Define Path__ – Click __+ Add a Tracked Folder__ to add a new folder/path to be tracked. Change Tracker provides a range of tokens (conceptually similar to the Windows Environment Variables) so that template definitions can be universally applied even if the OS Installation volumes used are different, e.g. OS installed onto D: rather than C:

  ```%SYSDIR% = \Windows\System32```

  ```%WINDIR%\SysWOW64 = \Windows\SysWOW64```

  ```%PROGRAMFILES% = \Program Files```

  ```%PROGRAMFILES(x86)% = \Program Files (x86)```
- Tracking Specification:

  - __Tracked Folder – File Hashing__ – Selects the Cryptographic Hash Algorithm used to record a DNA Fingerprint for each file – this option will record a secure hash value for the files being tracked and use this as a definitive metric for file integrity.
  - __File/Folder Name Matching__ – __System files recursive__ will limit tracking to \*.exe, \*.dll, \*.sys, \*.drv files for this folder and any sub-folders. __All files__ will track all files with or without an extension.
  - __Tracking Style__ – See point 1 regarding Poll Period, options are tracking only, polling and tracking or poll only.
  - __Tracked Attributes__ – Options are:

    - __File Attributes__ – Excluding contents only

      __NOTE:__ Contents tracking is defined under the __File Contents__ tab
    - __Folder/Directory Attributes__ – Only or All File and Folder Attributes. Default is to use File Attributes only as tracking changes at the Folder level in Windows may sometimes give spurious events due to the way in which the Windows file system behaves.
  - __File Hashing__ – Selects the Cryptographic Hash Algorithm used to record a ‘DNA Fingerprint’ for each file – this option will record a secure hash value for the files being tracked as a definitive metric for file integrity. Options are:

    - None
    - MD5
    - SHA1
    - SHA256
    - SHA384
    - SHA512.

In fact, all significant attributes for each file are tracked and any change to any attribute will be detected. The secure hash checksum provides a __DNA Fingerprint__ of a file, such that, in the case of a Trojan, even if the Trojan file is made to look identical to a legitimate system file, it will still be identified as being a changed file.

Exclusions are configured in a similar manner to the inclusive tracking above.

__NOTE:__ For Advanced Options: see [Appendix B](/versioned_docs/changetracker_8.0/changetracker/admin/matchrules/filefolderrules.md#Appendix-B) for more information.
