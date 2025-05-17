---
sidebar_position: 5253
title: FS_DeleteFiles Job
---

# FS\_DeleteFiles Job

The FS\_DeleteFiles job is designed to delete resources from targeted file servers that were previously quarantined and can be deleted.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](../../../../Admin/Jobs/Job/Overview#Parameter_Configuration "Parameter Configuration") topic for instructions on how to edit parameters on a job overview page.

The FS\_DeleteFiles job has the following configurable parameter:

* Number of days without access after which a file is a deletion candidate

See the [Customizable Analysis Tasks for the FS\_DeleteFiles Job](#_Customize_Analysis_Parameters_1 "Customizable Analysis Tasks for the FS_DeleteFiles Job") topic for additional information.

## Analysis Tasks for the FS\_DeleteFiles Job

Navigate to the **FileSystem** > **Cleanup** > **4. Delete** > **FS\_DeleteFiles** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_DeleteFiles Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Cleanup/Delete/DeleteFilesAnalysis.png "Analysis Tasks for the FS_DeleteFiles Job")

The following analysis tasks are selected by default:

* Determine candidates for deletion – Creates the SA\_FS\_Delete\_CandidatesView table accessible under the job’s Results node

  * The threshold for the number of days without access after which a file becomes a candidate for deletion can be configured. See the [Parameter Configuration](#Paramete "Parameter Configuration") topic for additional information.

### Customizable Analysis Tasks for the FS\_DeleteFiles Job

The default values for parameters that can be customized are:

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| Determine candidates for deletion | @DELETE\_THRESHOLD | 180 | Set the number of days without access after which a file becomes a candidate for deletion |

See the [Configure the Customizable Parameters in an Analysis Task](../../../../Admin/Jobs/Job/Configure/AnalysisCustomizableParameters "Configure the Customizable Parameters in an Analysis Task") topic for instructions to modify parameters.

## Action Tasks for the FS\_DeleteFiles Job

Navigate to the **FileSystem** > **Cleanup** > **4. Delete** > **FS\_DeleteFiles** > **Configure** node and select **Actions** to view the action tasks.

**CAUTION:** Do not enable the action unless it is required. Disable the action after execution to prevent making unintended and potentially harmful changes to Active Directory.

![Action Tasks for the FS_DeleteFiles Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Cleanup/Delete/DeleteFilesAction.png "Action Tasks for the FS_DeleteFiles Job")

The following actions are deselected by default:

* Delete files – Deletes files that are listed as candidates for deletion in the FS\_Delete\_CandidatesView table. The threshold for the number of days without access after which a file becomes a candidate for deletion can be configured through the **Determines candidates for deletion** analysis task.

  * See the [Parameter Configuration](#Paramete "Parameter Configuration") topic for additional information