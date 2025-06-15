# Configure Audit Logs on HNAS

Follow the steps to configure access to the HNAS audit logs on the Hitachi device.

__Step 1 –__ Open a browser and enter the IP Address for HNAS in the address bar to launch the Hitachi Storage Navigator (SN). Enter the username and password.

__Step 2 –__ At the Storage Navigator home page, click File Services.

__Step 3 –__ On the File Services screen, click Enable File Service.

__Step 4 –__ On the Enable File Services screen, verify that the CIFS/Windows service is selected.

__Step 5 –__ On the File Services screen, click File System Security.

__Step 6 –__ Click Switch Mode and set the default file system security mode to Mixed (Windows and UNIX) for all virtual file systems.

__Step 7 –__ Configure the Hitachi NAS Platform audit policy by returning to the File Services page.

__Step 8 –__ Click File System Audit Policies.

__Step 9 –__ Select the correct EVS and click details for the file system to enable auditing.

__Step 10 –__ In the Access via Unsupported Protocols section, select Allow Access (without auditing). In the Audit Log section, set the maximum log file size to a value of at least 8 MB. It is recommended to set it to 16 MB. In the Log roll over policy section, select New. The product does not support the Wrap policy. Click OK to close.

Once access has been configured on the Hitachi device, it is necessary to configure access to the HNAS audit logs on the Windows server. See the [Configure Access to HNAS Audit Logs on Activity Agent Server](configureaccesstologs.md) topic for additional information.
