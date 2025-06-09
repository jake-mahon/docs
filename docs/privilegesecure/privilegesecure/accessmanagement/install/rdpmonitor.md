# Install Remote Desktop Monitor Service on Target RDP Hosts

The Netwrix Privilege Secure Remote Desktop Monitor service needs to be installed on the target host that users will establish RDP connections to via an Access Policy session. Run the __NPS.TSMon.exe__ on the target host to install and enable this service. The EXE file is located in the Extras folder of the Privilege Secure installation download ZIP file.

The Windows event activity that occurs during an RDP session is then displayed and is searchable within the [Live Session Viewer Window](/docs/privilegesecure/privilegesecure/accessmanagement/admin/dashboard/window/liveviewer.md) and the [Replay Viewer Window](/docs/privilegesecure/privilegesecure/accessmanagement/admin/dashboard/window/replayviewer.md) with keystroke details, which are monitored and recorded without this service.

Follow the steps to install the Remote Desktop Monitor service.

__Step 1 –__ Copy the __NPS.TSMon.exe__ file to the target host.

_Remember,_ this file is in the Extras folder of the Privilege Secure installation download extracted ZIP file.

__Step 2 –__ Run the EXE file. The Netwrix Privilege Secure Terminal Services Monitor Setup window opens.

__Step 3 –__ Check the I agree to the license terms and conditions box.

_Remember,_ it is a best practice to read the terms before agreeing to them.

__Step 4 –__ Click Install.

__Step 5 –__ When the installation has completed successfully, click Close. The Netwrix Privilege Secure Terminal Services Monitor Setup window closes.

__Step 6 –__ Open Services (```services.msc```) to verify the Netwrix Privilege Secure Remote Desktop Monitor service is installed and enabled with Automatic Startup Type and Log On As Local System.

The service is now listening for terminal services connections.

__NOTE:__ It is necessary for the Record Proxy Sessions option to be enabled on the connection profile for the associated access policy. See the [Connection Profiles Page](/docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/page/connectionprofiles.md) topic for additional information.
