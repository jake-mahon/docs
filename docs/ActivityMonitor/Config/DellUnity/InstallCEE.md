# Install Dell CEE

Dell CEE should be installed on a Windows or a Linux server. The Dell CEE software is not a Netwrix product. Dell customers have a support account with Dell to access the download.

_Remember,_ the latest version is the recommended version of Dell CEE.

___RECOMMENDED:___ The Dell CEE package can be installed on the Windows server where the Activity Monitor agent will be deployed (recommended) or on any other Windows or Linux server.

Follow the steps to install the Dell CEE.

__Step 1 –__ Obtain the latest CEE install package from Dell and any additional license required for this component. It is recommended to use the most current version.

__Step 2 –__ Follow the instructions in the Dell [Using the Common Event Enabler on Windows Platforms](https://www.dell.com/support/home/en-us/product-support/product/common-event-enabler/docs) guide to install and configure the CEE. The installation will add two services to the machine:

- EMC Checker Service (Display Name: EMC CAVA)
- EMC CEE Monitor (Display Name: EMC CEE Monitor)

___RECOMMENDED:___ The latest version of .NET Framework and Dell CEE is recommended to use with the asynchronous bulk delivery (VCAPS) feature.

After Dell CEE installation is complete, it is necessary to complete the [Unity Initial Setup with Unisphere](/docs/activitymonitor/config/dellunity/setupunisphere.md#Unity-Initial-Setup-with-Unisphere).

## Configure Dell Registry Key Settings

There may be situations when Dell CEE needs to be installed on a different Windows server than the one where the Activity Monitor activity agent is deployed. In those cases it is necessary to manually set the Dell CEE registry key to forward events.

__Step 1 –__ Open the Registry Editor (run regedit).

![registryeditor](/img/product_docs/activitymonitor/config/dellpowerstore/registryeditor.png)

__Step 2 –__ Navigate to following location:

HKEY\_LOCAL\_MACHINE\SOFTWARE\EMC\CEE\CEPP\AUDIT\Configuration

__Step 3 –__ Right-click on __Enabled__ and select Modify. The Edit DWORD Value window opens.

__Step 4 –__ In the Value data field, enter the value of 1. Click OK, and the Edit DWORD Value window closes.

__Step 5 –__ Right-click on __EndPoint__ and select Modify. The Edit String window opens.

__Step 6 –__ In the Value data field, enter the StealthAUDIT value with the IP Address for the Windows proxy server hosting the Activity Monitor activity agent. Use the following format:

StealthAUDIT@[IP ADDRESS]

Examples:

StealthAUDIT@192.168.30.15

__Step 7 –__ Click OK. The Edit String window closes. Registry Editor can be closed.

![services](/img/product_docs/activitymonitor/config/dellpowerstore/services.png)

__Step 8 –__ Open Services (run ```services.msc```). Start or Restart the EMC CEE Monitor service.

The Dell CEE registry key is now properly configured to forward event to the Activity Monitor activity agent.
