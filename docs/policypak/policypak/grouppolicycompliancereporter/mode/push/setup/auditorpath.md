# Specify Auditor Path

__Step 1 –__ In this step, you need to specify the path to run ```PPGPCR.Auditor.exe```. First, you need to share the folder that contains ```PPGPCR.Auditor.exe```. By default, when you install Endpoint Policy Manager GPCR Server the Auditor folder is created within ```c:\ProgramFiles(x86)\PolicyPak\PolicyPak Group Policy Compliance Reporter Server```, as shown in Figure 48. Share that folder as Read::Everyone.

![gpcr_server_with_push_mode_12](/img/product_docs/policypak/policypak/grouppolicycompliancereporter/mode/push/setup/gpcr_server_with_push_mode_12.png)

Figure 48. Sharing the Auditor folder.

__Step 2 –__ Next, in the wizard, specify the UNC path to ```PPGPCR.Auditor.exe```, as shown in Figure 49.

![gpcr_server_with_push_mode_13](/img/product_docs/policypak/policypak/grouppolicycompliancereporter/mode/push/setup/gpcr_server_with_push_mode_13.png)

Figure 49. Entering the UNC path for the auditor EXE.

__NOTE:__ You may copy the auditor EXE and its related DLLs to another server or get them onto endpoints to run locally. If you choose to do this, update the path accordingly.
