# Migrate the Enterprise Manager Server

Follow the steps to move the Threat Prevention7.4 Enterprise Manager to a different server when using default certificates.

__CAUTION:__ Do not remove the Enterprise Manager from the current machine until the migration process is complete.

__Step 1 –__ Install the Enterprise Manager to the new machine. See the [Application Server Install](/versioned_docs/threatprevention_7.4/threatprevention/install/application.md) topic for additional information.

_Remember,_ point to the existing SQL Server for the NVMonitorData and NVConfig databases on the Database Login Information page of the wizard during installation.

After the installation completes, go to the Services console (services.msc) on the new machine and stop the Threat Prevention Enterprise Manager service.

__Step 2 –__ Copy the following files from the original “Certsinfo” folder to the new “Certsinfo” folder.

```...\Netwrix\Netwrix Threat Prevention\SIEnterpriseManager\CertsInfo```

- Ca-crt.pem
- Ca-key.pem
- Em-crt.pem
- Em-key.pem

Then, follow these steps to migrate the “secret.dpapi” file (do not copy).

1. On the original Enterprise Manager machine: “SecretMgr.exe –e myOutFile”

   SecretMgr.exe is located in the installation folder of the Enterprise Manager and you can run it from Command Prompt. "myOutFile" is an example of a user supplied name for the file created by SecretMgr.exe.

   By default, "myOutFile" is created at ```C:\Windows\SysWOW64```.

   __NOTE:__ SecretMgr.exe knows to look for the ```\certsinfo\Secret.dpapi``` folder and file.
2. Manually copy “myOutFile” on the new Enterprise Manager machine in a secure way.
3. On the new Enterprise Manager machine: “SecretMgr.exe –i myOutFile”

   SecretMgr.exe is located in the installation folder of the Enterprise Manager and you can run it from Command Prompt. Use it to import "myOutFile".

__Step 3 –__ Start the Threat Prevention Enterprise Manager service on the new machine.

__Step 4 –__ On the original Enterprise Manager machine, launch the Administration Console and follow these steps to update the Enterprise Manager info for each Agent.

1. Click __Agents__ in the left pane to open the [Agents Interface](/versioned_docs/threatprevention_7.4/threatprevention/admin/agents/overview.md).
2. Right-click an Agent in the grid and select __Update Agent Settings__. You can also select multiple Agents and right-click to select the Update Agent Settings option for them.

   The Select Computers window opens. Click __Next__.
3. On the Set Options window, enter the IP address/name of the new Enterprise Manager in the IP Address/Name field and click __Next__.
4. Verify that the update task completes for each Agent successfully.

At this point, the Agents should get displayed in the Administration Console on the new Enterprise Manager machine.

__NOTE:__ If you cannot use the Administration Console on the original Enterprise Manager machine, then on each machine where the Agent is deployed, you can manually edit the “SIWindowsAgent.exe.config” file to update the following entry with the IP address or name of the new Enterprise Manager.  
Example: <add key="managerAddress" value="192.168.189.135:3741"/>  
You will find the SIWindowsAgent.exe.config file at: ```…\Netwrix\Netwrix Threat Prevention\SIWindowsAgent```

__Step 5 –__ Once all Agents are displayed in the Administration Console on the new Enterprise Manager machine, you can decommission the original Enterprise Manager machine and/or uninstall the Netwrix Threat Prevention server.

__NOTE:__ If Netwrix Threat Prevention is configured to use customer supplied certificates. It is recommended that you uninstall, then re-enroll and re-install all Agents with new certificates. This is because customer supplied certificates usually have the FQDN info of the Enterprise Manager and the new Enterprise Manager machine would typically have a different DNS name. See the [Create Custom Managed Certificates for Each Agent](/versioned_docs/threatprevention_7.4/threatprevention/install/agent/customcert.md) topic for additional information.
