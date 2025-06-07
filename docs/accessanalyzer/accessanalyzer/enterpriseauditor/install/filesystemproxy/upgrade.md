# Upgrade Proxy Service Procedure

When the Access Analyzer Console and File System Solution are upgraded, it is necessary to also upgrade the File System Proxy Service when running Access Analyzer in Proxy Mode as a Service. This upgrade can be done in two ways:

- Automatically – An instant job within the Access Analyzer Console
- Manually – On each server hosting the proxy service

__CAUTION:__ When upgrading the Proxy Service to 11.6 from a previous version for the first time, you must manually uninstall the previous version and follow the [Manual Upgrade](#Manual-Upgrade) steps below. Subsequent 11.6 upgrades can be done using the automatic upgrade option.

__NOTE:__ If you have the old Netwrix Sensitive Data Discovery Add-On installed, you must uninstall it before continuing with this upgrade. For Access Analyzer 12.0, Sensitive Data Discovery is installed as part of the main installation if your license includes it.

## Automatic Upgrade

The __FS\_UpdateProxy__ Job is available through the Instant Job Wizard. This job updates the File System Proxy Service on all servers in the assigned host list. Follow the steps to instantiate this job.

__Step 1 –__ Within the __Jobs__ tree, right-click and select __Add Instant Job__. The Instant Job Wizard window opens.

__Step 2 –__ On the Welcome page, click __Next__.

![FS_UpdateProxy Job in the Instant Job Wizard](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/filesystemproxy/updateproxyinstantjob.png)

__Step 3 –__ On the Instant Job page, locate the __Library Name: File System__ category group. Expand the category and select the __FS\_UpgradeProxy__ Job. Click __Next__.

__Step 4 –__ On the Host Assignment page, select the __Specify individual hosts or host lists__ option and click __Next__.

__Step 5 –__ On the Host Lists page, assign the host lists containing the proxy servers to be updated . Multiple host lists can be added. Click Next.

__Step 6 –__ On the Individual Hosts page, click __Next__.

__Step 7 –__ Review the Summary and click either __Save & Exit__ or __Save & Run Jobs Now__.

The proxy does not update until the job is run. Once successfully ran, the servers in the assigned host lists have been updated.

## Manual Upgrade

Follow the steps on the servers hosting the File System Proxy Service.

![Programs and Features](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/filesystemproxy/uninstall.png)

__Step 1 –__ Navigate to Programs and Features (__Control Panel__ > __Programs__ > __Programs and Features__). Uninstall the previous version of Access Analyzer File System Scanning Proxy.

__Step 2 –__ Install the new version of the File System Proxy Service. See the [File System Proxy Service Installation](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/filesystemproxy/wizard.md) topic for instructions.

The File System Solution can now use the proxy architecture for the latest version of the solution.
