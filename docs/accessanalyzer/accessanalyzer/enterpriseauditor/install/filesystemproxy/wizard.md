# File System Proxy Service Installation

The File System Proxy installer is designed to simplify the process of setting up File System Scanning Proxy as a service on the designated proxy server. It is a best practice to use a specifically provisioned domain account as the File System Proxy service account. Follow the steps to install the FSAA service on the targeted proxy servers.

__Step 1 –__ Run the ```FileSystemProxy.exe``` executable. The Netwrix Access Analyzer (formerly Enterprise Auditor) File System Scanning Proxy Setup wizard opens.

![File System Proxy Setup Wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

__Step 2 –__ On the Welcome page, click __Next__ to begin the installation.

![File System Proxy Setup Wizard End-User License Agreement page](/img/product_docs/activitymonitor/activitymonitor/install/eula.png)

__Step 3 –__ On the End-User License Agreement page, select the __I accept the terms in the License Agreement__ checkbox and click __Next__.

![File System Proxy Setup Wizard Destination Folder page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/filesystemproxy/destination.png)

__Step 4 –__ On the Destination Folder page, click __Next__ to install to the default folder or click __Change__ to select a different location. Clicking __Change__ opens the Change destination folder page.

![File System Proxy Setup Wizard Change destination folder page](/img/product_docs/activitymonitor/activitymonitor/install/agent/changedestination.png)

On the Change destination folder page, choose a different destination folder for the installation.

- Look in – Select which folder or sub-folder to complete installation in using the Look in drop-down
- Up one level – Click the Up one level button to select the folder one level above the currently selected one
- Create a new folder – Click to create a new folder for the destination of the installation

Click __OK__ to save changes or click __Cancel__ to return to the Destination Folder page without saving.

![File System Proxy Setup Wizard Configure Service page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/filesystemproxy/configureservice.png)

__Step 5 –__ On the Configure Service page, configure the credential to run the service using the radio buttons. Then, click __Next__.

- Run as LocalSystem – Uses the local system to run the File System Proxy service
- Run as a service account – Uses the provisioned credentials provided in the __User Name__ and __Password__ fields to run the File System Proxy service. Remember, this account must be a local Administrator on the proxy server and have the Log on as a service privilege in the proxy server's Local Security Policy.

![File System Proxy Setup Wizard Ready to install page](/img/product_docs/activitymonitor/activitymonitor/install/ready.png)

__Step 6 –__ On the Ready to install page, click __Install__ to start installation.

![File System Proxy Setup Wizard Completed page](/img/product_docs/activitymonitor/activitymonitor/install/complete.png)

__Step 7 –__ When the installation completes, click __Finish__ to exit the wizard.

__NOTE:__ If the File System Proxy Service is installed on multiple servers, then a custom host list of proxy servers should also be created in Netwrix Access Analyzer (formerly Enterprise Auditor).

Once the File System Proxy Service has been installed on any proxy server, it is necessary to configure the File System Solution certificate exchange method for Proxy Mode as a Service. See the [FSAA Applet Certificate Management Overview](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/certificatemanagement.md) topic for additional information.

## Custom Parameters for File System Proxy Service

The port and priority parameters can be modified for the File System Proxy Service on the registry key:

HKEY\_LOCAL\_MACHINE\SYSTEM\CurrentControlSet\services\StealthAUDITFSAA\ImagePath

- Port parameter – Only needs to be added to the registry key value if a custom port is used. The default port of 8766 does not need to be set as a parameter
  - Append ```-e [PORT NUMBER]``` to the ImagePath key value
- Priority parameter – Can be modified so that the service runs as a background priority, which may be desired if the service has been installed directly on a file server
  - Append ```-r 0``` to the ImagePath key value

  __NOTE:__ If both parameters are added, there is no required order.

  ___RECOMMENDED:___ Stop the Netwrix Access Analyzer (formerly Enterprise Auditor) FSAA Proxy Scanner service before modifying the registry key.

Follow the steps to configure these service parameters.

![Netwrix Enterprise Auditor FSAA Proxy Scanner service in the Services Management Console](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/filesystemproxy/service.png)

__Step 1 –__ After installing the File System Proxy Service, open Services Management Console (```services.msc```). To stop the service, right-click on the Netwrix Access Analyzer (formerly Enterprise Auditor) FSAA Proxy Scanner service and select __Stop__.

![File System Proxy ImagePath registry key in the Registry Editor](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/filesystemproxy/regedit.png)

__Step 2 –__ Open Registry Editor (```regedit```) and navigate to the following registry key:

HKEY\_LOCAL\_MACHINE\SYSTEM\CurrentControlSet\services\StealthAUDITFSAA\ImagePath

__Step 3 –__ Right-click on the __ImagePath__ key and select __Modify__. The Value data was set during installation according to the installation directory location selected.

- Priority set to background priority:
  - Add ```-r 0``` to the end of the path value
- Custom Port:
  - Add ```-e [PORT NUMBER]``` number to the end of the path value

    Example with Port number 1234:

    C:\Program Files (x86)\STEALTHbits\StealthAUDIT\FSAA\StealthAUDITRPC.EXEFSAASrv.DLL -e 1234

    __NOTE:__ The port number needs to be added to the path only if a custom port is used.

__Step 4 –__ Click __OK__ and close Registry Editor.

__Step 5 –__ Return to the Services Management Console and start the Netwrix Access Analyzer (formerly Enterprise Auditor) FSAA Proxy Scanner service. Close the Services Management Console.

![Port number on File System Access Auditor Data Collector Wizard Applet Settings page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/filesystemproxy/dcwizardportnumber.png)

__Step 6 –__ In the Access Analyzer Console, navigate to the __FileSystem__ > __0.Collection__ > __[Job]__ > __Configure__ > __Queries__ node and open the File System Access Auditor Data Collector Wizard. On the Applet Settings wizard page, change the __Port number__ to the custom port.

__NOTE:__ See the [File System Data Collection Configuration for Proxy as a Service](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/filesystemproxy/configuredatacollector.md) section for additional configurations required to run scans in proxy mode as a service.

__Step 7 –__ Repeat the previous step for each of the __FileSystem__ > __0.Collection__ jobs to employ this proxy service.

The custom port identified is now used for communication between the File System Proxy Service and Access Analyzer.
