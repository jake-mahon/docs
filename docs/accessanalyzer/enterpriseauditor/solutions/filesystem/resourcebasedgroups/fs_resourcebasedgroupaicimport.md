# FS\_ResourceBasedGroupAICImport Job

The FS\_ResorceBasedGroupsAICImport Job imports resources and access groups from the FS\_ResoureBasedGroup Job into the Netwrix Access Information Center. This job assigns ownership in the Access Information Center and then assigns resource groups. This step is required if it is desired to change access through entitlement reviews, self-service, or for publishing resources to IAM.

## Recommended Configurations for the FS\_ResourceBasedGroupsAICImport Job

Dependencies

- The __FS\_ResourceBasedGroups__ job must be successfully run prior to running this job
- The __.Active Directory Inventory__ > __1-AD\_Scan__ job must be successfully run prior to running this job
- The __File System__ > __0.Collection__ > __1-FSAA System Scans__ job must be successfully run prior to running this job
- The __File System__ > __0.Collection__ > __2-FSAA Bulk Import__ job must be successfully run prior to running this job

Targeted Hosts

None

Schedule Frequency

This job group can be scheduled to run as desired. Throughout this document reference to executing a job refers to either manual execution or scheduled execution, according to the needs of the organization. See the [Scheduling the Resource Based Groups Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/resourcebasedgroups/overview.md#scheduling-the-resource-based-groups-job-group) topic for additional information.

History Retention

Not supported

Workflow

__Step 1 –__ Run the following jobs:

- FS\_ResourceBasedGroups
- .Active Directory Inventory > 1-AD\_Scan
- File System > 0.Collection > 1-FSAA System Scans
- File System > 0.Collection > 2-FSAA Bulk Import

__Step 2 –__ Run the FS\_ResourceBasedGroupsAICImport job.

- See the [Run the FS\_ResourceBasedGroupsAICImportJob](#run-the-fs_resourcebasedgroupsaicimportjob) topic for additional information

__Step 3 –__ Review the newly-created resource based groups in the AIC.

- See the [Review the New Resource Based Groups in the AIC](#review-the-new-resource-based-groups-in-the-aic) topic for additional information

## Run the FS\_ResourceBasedGroupsAICImportJob

Now that the target environment follows a Resource Based Groups model, the new resources can be imported into the Access Information Center. Follow the steps to import the new resources into the AIC Ownership Workflow.

__CAUTION:__ It is important to run the .Active Directory Inventory Job Group and __File System__ > __0. Collection__ Job Group again so that the AD and permissions changes are captured by Access Analyzer.

__Step 1 –__ Run the __.Active Directory Inventory__ Job Group and __FileSystem__ > __0.Collection__ Job Group again.

__Step 2 –__ Right click the __FS\_ResourceBasedGroupsAICImport__ job and select __Run Job__.

The newly created resource based groups are imported to the AIC. The Owner and Access Groups have been assigned to the resources by the import process. The AIC can now be used to manage these resources through Entitlement Reviews, Ad hoc owner changes, and the Self Service access portal.

## Review the New Resource Based Groups in the AIC

Use the Access Information Center __Manage Resource Ownership__ to review the imported resources. These resources with the assigned reviewers will now be in the Manage Owners table on the Resource Owners interface. The next step is to confirm ownership through the Entitlement Review workflow and the Self-Service Access Requests workflow. See the Resource Review and Access Requests topics in the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter) for additional information.
