---
sidebar_position: 7694
title: Install Remote Desktop Monitor Service  on Target RDP Hosts
---

# Install Remote Desktop Monitor Service on Target RDP Hosts

The Netwrix Privilege Secure Remote Desktop Monitor service needs to be installed on the target host that users will establish RDP connections to via an Access Policy session. Run the **NPS.TSMon.exe** on the target host to install and enable this service. The EXE file is located in the Extras folder of the Privilege Secure installation download ZIP file.

The Windows event activity that occurs during an RDP session is then displayed and is searchable within the [Live Session Viewer Window](../Admin/Dashboard/Window/LiveViewer "Live Session Viewer Window") and the [Replay Viewer Window](../Admin/Dashboard/Window/ReplayViewer "Replay Viewer Window") with keystroke details, which are monitored and recorded without this service.

Follow the steps to install the Remote Desktop Monitor service.

**Step 1 –** Copy the **NPS.TSMon.exe** file to the target host.

*Remember,* this file is in the Extras folder of the Privilege Secure installation download extracted ZIP file.

**Step 2 –** Run the EXE file. The Netwrix Privilege Secure Terminal Services Monitor Setup window opens.

**Step 3 –** Check the I agree to the license terms and conditions box.

*Remember,* it is a best practice to read the terms before agreeing to them.

**Step 4 –** Click Install.

**Step 5 –** When the installation has completed successfully, click Close. The Netwrix Privilege Secure Terminal Services Monitor Setup window closes.

**Step 6 –** Open Services (`services.msc`) to verify the Netwrix Privilege Secure Remote Desktop Monitor service is installed and enabled with Automatic Startup Type and Log On As Local System.

The service is now listening for terminal services connections.

**NOTE:** It is necessary for the Record Proxy Sessions option to be enabled on the connection profile for the associated access policy. See the [Connection Profiles Page](../Admin/Policy/Page/ConnectionProfiles "Connection Profiles Page") topic for additional information.