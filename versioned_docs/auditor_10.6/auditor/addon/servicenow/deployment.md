# Deploy the Service

Follow the steps to deploy the service.

__Step 1 –__ Locate the add-on folder on the computer where the Auditor Server resides.

__Step 2 –__ Run the __install.cmd__ file. The file deploys and enables the Auditor __ITSM Integration Service__.

__NOTE:__ Stop and then restart the service every time you update any of configuration files.

## Configure Integration Service to Use Proxy

If you are using a proxy to provide access to the Internet, consider that the Auditor ITSM Integration Service will need some additional configuration for proxy server to be detected properly. The reason is that this service runs under the __LocalSystem__ account (non-interactive), which requires proxy settings to be specified manually. See the following Microsoft article for additional information: [HTTP proxy.](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/automatic-proxy-detection)

Follow the step to configure integration service settings.

__Step 3 –__ Navigate to the add-on folder (default name is _Netwrix_Auditor_Add-on_for_ITSM_) and select the __Netwrix.ITSM.IntegrationService.exe.config__ service configuration file.

__NOTE:__ If Auditor ITSM Integration Service is running, stop it before modifying configuration file.

__Step 4 –__ Open this XML file for edit and add the following section:

<system.net>

<defaultProxy>

<proxy

proxyaddress="http://<ip_address>:<port>"

usesystemdefault="True"

autoDetect="False" />

</defaultProxy>

</system.net>

Here:

| Parameter | Description |
| --- | --- |
| proxyaddress | Specify default proxy address and connection port, e.g.,  _http://172.28.13.79:8080_ |
| usesystemdefault | Set to __True__ to allow Internet Explorer proxy settings to be overwritten with custom settings. |
| autoDetect | Set to __False__. |

__Step 5 –__ Start the Auditor ITSM Integration Service.
