# Install for User Activity Core Service

By default, the Core Service is installed automatically on the audited computers when setting up auditing in Netwrix Auditor. If, for some reason, installation has failed, you must install the Core Service manually on each audited computer.

Follow the steps to install Netwrix Auditor User Activity Core Service.

__Step 1 –__ On the computer where Auditor Server resides, navigate to _%ProgramFiles% (x86)\Netwrix Auditor\User Activity Video Recording_ and copy the UACoreSvcSetup.msi file to the audited computer.

__Step 2 –__ Run the installation package.

__Step 3 –__ Follow the instructions of the setup wizard. When prompted, accept the license agreement and specify the installation folder.

__Step 4 –__ On the Core Service Settings page, specify the host server (i.e., the name of the computer where Netwrix Auditor is installed) and the server TCP port.

## Install User Activity Core Service with the Command Prompt

Follow the steps to perform a silent installation of the User Activity Core Service with the command prompt.

__Step 1 –__ On the computer where Auditor Server resides,, navigate to _%ProgramFiles% (x86)\Netwrix Auditor\User Activity Video Recording_ and copy the __UACoreSvcSetup.msi__ file to the audited computer or to a file share the target server(s) can access.

__Step 2 –__ Run the following commands on target servers:

- ```CD %PathToInstaller%```
- ```msiexec.exe /i "UACoreSvcSetup.msi" ALLUSERS=1 /qn /norestart /log output.log UAVR_SERVERNAME=%NAServer% UAVR_SERVERPORT=9004```

__Step 3 –__ Replace _%PathToInstaller%_ with the path to the folder you copied the __UACoreSvcSetup.msi__ file.

__Step 4 –__ Replace _%NAServer%_ with the name of your Netwrix Auditor server.
