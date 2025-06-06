---
id: filescontents
title: 'Policy Templates: File Contents'
---

# Policy Templates: File Contents

![PolicyTemplateFileContents](/img/changetracker/admin/PolicyTemplateFileContents.png "PolicyTemplateFileContents")

**Step 1 –** **Polling Frequency**. The default setting is to run a full poll (effectively a new baseline operation) only when the Agent has been restarted e.g., after a reboot but the Agent may be run in a ‘polling-only’ mode. This disables live tracking (the **Tracking Style** attribute for the Tracker should be set to ‘Polling’) and means that the only change detection is performed when the scheduled poll is run. While this loses the benefits of real-time change detection, it can be desirable in sensitive environments where server resource loads need to be minimized under all conditions.

**Step 2 –** **Define Path**. Click **+ Add a Tracked Folder** to add a new folder or path to be tracked.

**Step 3 –** **Tracking Specification**:

- **Tracked File Path – File Hashing**. Selects the Cryptographic Hash Algorithm used to record a DNA Fingerprint for each file – this option will record a secure hash value for the files being tracked and use this as a definitive metric for file integrity.
- **Regular Expression**. If left blank, the entire contents of the file will be recorded and tracked, but using a Regular Expression will focus tracking on contents isolated by the regex, useful if only certain elements of a file contents need to be tracked.
- **RegEx Ignore Case**. If using a Regular Expression this ensures that tracking is case insensitive.