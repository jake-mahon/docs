---
id: installcee
title: 'Install & Configure Dell CEE'
---

# Install & Configure Dell CEE

*Remember,* the latest version is the recommended version of Dell CEE.

***RECOMMENDED:*** The Dell CEE package can be installed on the Windows server where the Activity Monitor agent will be deployed (recommended) or on any other Windows or Linux server.

Follow the steps to install the Dell CEE.

**Step 1 –** Obtain the latest CEE install package from Dell and any additional license required for this component. It is recommended to use the most current version.

**Step 2 –** Follow the instructions in the Dell [Using the Common Event Enabler on Windows Platforms](https://www.dell.com/support/home/en-us/product-support/product/common-event-enabler/docs "Using the Common Event Enabler on Windows Platforms") guide to install and configure the CEE. The installation will add two services to the machine:

- EMC Checker Service (Display Name: EMC CAVA)
- EMC CEE Monitor (Display Name: EMC CEE Monitor)

***RECOMMENDED:*** The latest version of .NET Framework and Dell CEE is recommended to use with the asynchronous bulk delivery (VCAPS) feature.

See the [CEE Debug Logs](/Config/DellUnity/Validate.md#cee-debug-logs "CEE Debug Logs") section for information on troubleshooting issues related to Dell CEE.

After Dell CEE installation is complete, it is necessary to [Connect Data Movers to the Dell CEE Server](#connect-data-movers-to-the-dell-cee-server "Connect Data Movers to the Dell CEE Server").

There may be situations when Dell CEE needs to be installed on a different Windows server than the one where the Activity Monitor activity agent is deployed. In those cases it is necessary to manually set the Dell CEE registry key to forward events.

**Step 1 –** Open the Registry Editor (run regedit).

![](/img/activitymonitor/config/dellcelerravnx/RegistryEditor.png)

**Step 2 –** Navigate to following location:

HKEY_LOCAL_MACHINE\SOFTWARE\EMC\CEE\CEPP\AUDIT\Configuration

**Step 3 –** Right-click on **Enabled** and select Modify. The Edit DWORD Value window opens.

**Step 4 –** In the Value data field, enter the value of 1. Click OK, and the Edit DWORD Value window closes.

**Step 5 –** Right-click on **EndPoint** and select Modify. The Edit String window opens.

**Step 6 –** In the Value data field, enter the StealthAUDIT value with the IP Address for the Windows proxy server hosting the Activity Monitor activity agent. Use the following format:

StealthAUDIT@[IP ADDRESS]

Examples:

StealthAUDIT`@192`.168.30.15

**Step 7 –** Click OK. The Edit String window closes. Registry Editor can be closed.

![](/img/activitymonitor/config/dellcelerravnx/Services.png)

**Step 8 –** Open Services (run services.msc). Start or Restart the EMC CEE Monitor service.

The Dell CEE registry key is now properly configured to forward event to the Activity Monitor activity agent.

## Connect Data Movers to the Dell CEE Server

The `cepp.conf` file contains information that is necessary to connect the Data Movers to the Dell CEE server. An administrator must create a configuration file which contains at least one event, one pool, and one server. All other parameters are optional. The `cepp.conf` file resides on the Data Mover.

**NOTE:** Do not use a # charter.

**Step 2 –** Create or retrieve the `cepp.conf` file.

If there is not a `cepp.conf` file on the Data Mover(s), use a text editor to create a new blank file in the home directory named `cepp.conf`. The following is an example command if using the text editor 'vi' to create a new blank file:

$ vi cepp.conf

> If a `cepp.conf` file already exists, it can be retrieved from the Data Movers for modification with the following command:

$ server_file [DATA_MOVER_NAME] -get cepp.conf cepp.conf

**Step 3 –** Configure the `cepp.conf` file. For information on the `cepp.conf` file, see the Dell [Using the Common Event Enabler for Windows Platforms](https://www.dellemc.com/en-us/collaterals/unauth/technical-guides-support-information/products/storage-3/docu48055.pdf "Opens the Using the Common Event Enabler for Windows Platforms article in a new window") guide instructions on how to add parameters or edit the values or existing parameters.

**NOTE:** The information can be added to the file on one line or separate lines by using a space and a "\"" at the end of each line, except for the last line and the lines that contain global options: `cifsserver`, `surveytime`, `