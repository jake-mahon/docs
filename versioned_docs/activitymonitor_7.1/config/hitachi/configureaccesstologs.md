# Configure Access to HNAS Audit Logs on Activity Agent Server

Follow the steps to configure access to the HNAS audit logs on the Windows server hosting the Activity Monitor activity agent.

__Step 1 –__ On the Windows computer, go to Run and type ```compmgmt.msc```.

__Step 2 –__ In the right-hand panel, select More Actions > Connect to another computer.

__Step 3 –__ In the Select Computer dialog box, enter the IP Address for EVS for HNAS and then click OK.

__Step 4 –__ In the Computer Management window, go to Computer Management > System tools > Shared Folders > Shares.

__Step 5 –__ Select the Security tab and click Advanced.

__Step 6 –__ In the Advanced Security Settings dialog box, select the Audit tab. Click Add or Edit to select the users and groups to be audited and add the desired user or group.

__Step 7 –__ Select All for Type, and Full Control for Basic permissions.

Once access has been configured on both the Hitachi device and the Activity Agent server, it is time to configure and enable monitoring with the Activity Monitor Console.
