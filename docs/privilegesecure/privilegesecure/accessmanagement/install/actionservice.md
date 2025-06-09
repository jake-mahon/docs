# Action Service Install

The NPS Action Service is installed on the application server as part of Privilege Secure install. It can also be installed on additional servers. This provides the option to run actions from different locations within an organization.

The NPS Proxy Service installer is in the Extras folder of the ZIP file downloaded from the Netwrix Customer portal. See the [Install Components & Methods](/docs/privilegesecure/privilegesecure/accessmanagement/install/components.md) topic for additional information.

__NOTE:__ Before you begin, the NPS Proxy Service must be registered with a corresponding application server on the server you will be installing the Action Service prior to installation. The Proxy Service is installed as part of the Action Service installation package. See the [Proxy Service Install](/docs/privilegesecure/privilegesecure/accessmanagement/install/proxyservice.md) topic for installation instructions.

Follow the steps to install the NPS Action Service on another server.

_Remember,_ You must configure the Antivirus exclusions according to the [Exclusions for Antivirus (AV) & Endpoint Software](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000Hi8CAE.html) knowledge base article.

__Step 1 –__ Make sure that you have configured the Antivirus exclusions according to the following Netwrix knowledge base article: [Exclusions for Antivirus (AV) & Endpoint Software](https://kb.netwrix.com/5938)

__Step 2 –__ Move the NPS.ActionService.exe installation package to the desktop of the remote server.

__Step 3 –__ Open the NPS.ActionService.exe and the Netwrix Privilege Secure Action Service Setup wizard will open.

![licenseagreement](/img/product_docs/threatprevention/threatprevention/install/licenseagreement.png)

__Step 4 –__ To install the Action Service in an alternate location, click __Options__.

![installlocation](/img/product_docs/activitymonitor/activitymonitor/install/agent/installlocation.png)

__Step 5 –__ Enter the destination folder for installation and click OK.

__Step 6 –__ Read the End User License Agreement and check the I accept the terms in the License Agreement checkbox.

__Step 7 –__ Click Install to begin the installation. The setup wizard displays the installation progress.

![installcomplete](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/install/installcomplete.png)

__Step 8 –__ When the installation is complete, click Close to exit the installer.

The Privilege Secure Action Service is now installed on a remote server.

## Register the Remote Action Service with Privilege Secure

If the Action Service is installed on a remote machine, it must be configured to register with the Privilege Secure server. This configuration is done by supplying the Privilege Secure server and credentials in a command line utility.

Follow the steps to configure the key exchange.

__Step 1 –__ On the application server, run __cmd__ as Administrator.

__Step 2 –__ Type the following commands to export the encryption keys for the secondary:

[Copy](javascript:void(0);)

Encryption Key Export

```
cd C:\Program Files\Stealthbits\PAM\KeyTools  
.\SbPAM.RotateKey.exe export -n keys.exp
```

__Step 3 –__ Take note of the password for the export file.

__CAUTION:__ This temporary password protects the NPS-AM encryption keys during copying. Do not save it to digital media or transmit it with the encryption key package.

__Step 4 –__ Copy the export file to "C:\Program Files\Stealthbits\PAM\KeyTools" on the secondary server.

__Step 5 –__ On the (Action/Scheduler/Siem) service server, run cmd as Administrator.

__Step 6 –__ Type the following commands to import the encryption keys:

[Copy](javascript:void(0);)

Encryption Key Import

```
cd C:\Program Files\Stealthbits\PAM\KeyTools  
.\SbPAM.RotateKey.exe import -n keys.exp
```

__Step 7 –__ Enter the password when prompted.

__Step 8 –__ Delete the export file from both the primary and secondary servers.

The key exchange is now configured.

Follow the steps to configure the Action Service.

__Step 1 –__ Open a command prompt as an administrator.

__Step 2 –__ Change the directory path to the location of the Privilege Secure Action Service. The default path is:

C:\Program Files\Stealthbits\PAM\ActionService\

__Step 3 –__ Run the following command to automatically register the action service. Enter the Admin password when prompted:

- The ```[PrivilegeSecureServer]``` parameter is the Host Name, IP, FQDN or URL
- The default ```[Port]``` parameter is 6500
- The [admin] should be an NPS administrator in "DOMAIN\username" format

ActionService.exe –register -u admin [PrivilegeSecureServer:Port]

- For installations without a trusted https certificate on the Privilege Secure server, the “-I” parameter must be added:

ActionService.exe –register -u admin -I [PrivilegeSecureServer:Port]

- The command prompt will show if the configuration was successful.

__Step 4 –__ Exit the command prompt.

The remote Action Service is now registered with Privilege Secure.
