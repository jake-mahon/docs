# Policy Templates: File Contents

Configuration settings conveyed using config files can be tracked directly using the __File Contents Tracker__. Similarly, to the FIM Tracker, changes can be tracked continuously to give real-time notifications of any changes, or via a periodically scheduled poll. Netwrix Change Tracker supports a regular expression-based data-extraction operation to precisely focus the tracking on salient entries only.

![PolicyTemplateFileContents](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/policytemplates/policytemplatefilecontents.png)

__Step 1 –__ __Polling Frequency__. The default setting is to run a full poll (effectively a new baseline operation) only when the Agent has been restarted e.g., after a reboot but the Agent may be run in a ‘polling-only’ mode. This disables live tracking (the __Tracking Style__ attribute for the Tracker should be set to ‘Polling’) and means that the only change detection is performed when the scheduled poll is run. While this loses the benefits of real-time change detection, it can be desirable in sensitive environments where server resource loads need to be minimized under all conditions.

__Step 2 –__ __Define Path__. Click __+ Add a Tracked Folder__ to add a new folder or path to be tracked.

__Step 3 –__ __Tracking Specification__:

- __Tracked File Path – File Hashing__. Selects the Cryptographic Hash Algorithm used to record a DNA Fingerprint for each file – this option will record a secure hash value for the files being tracked and use this as a definitive metric for file integrity.
- __Regular Expression__. If left blank, the entire contents of the file will be recorded and tracked, but using a Regular Expression will focus tracking on contents isolated by the regex, useful if only certain elements of a file contents need to be tracked.
- __RegEx Ignore Case__. If using a Regular Expression this ensures that tracking is case insensitive.
