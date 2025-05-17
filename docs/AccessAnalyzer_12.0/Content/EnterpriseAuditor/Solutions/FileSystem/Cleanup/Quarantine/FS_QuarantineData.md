---
sidebar_position: 5249
title: FS_QuarantineData Job
---

# FS\_QuarantineData Job

The FS\_QuarantineData job is designed to quarantine files subject to be cleaned up.

## Action Tasks for the FS\_QuarantineData Job

Navigate to the **FileSystem** > **Cleanup** > **3. Quarantine** > **FS\_QuarantineData** > **Configure** node and select **Actions** to view the action tasks.

**CAUTION:** Do not enable the actions unless they are required. Disable the actions after execution to prevent making unintended and potentially harmful changes to Active Directory.

**CAUTION:** Do not modify the action tasks. The action tasks are preconfigured for this job.

![Action Tasks for the FS_QuarantineData Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Cleanup/Quarantine/QuarantineDataActions.png "Action Tasks for the FS_QuarantineData Job")

The following action tasks are deselected by default:

* Give domain user full control – Gives a specified domain user full control over stale files
* Break inherited permissions – Breaks inherited permissions

Prior to running the FS\_QuarantineData job, it is necessary to select the **Give domain user full control** or **Break inherited permissions** task to perform an action.