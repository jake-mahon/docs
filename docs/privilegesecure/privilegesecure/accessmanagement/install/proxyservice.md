# Proxy Service Install

Logging directly onto managed systems from desktops leaves artifacts that can be compromised and requires ports to be opened into secure networks. A critical element of the Privilege Secure solution is the proxy, which is able to broker the connection between security zones. The application includes an advanced session proxy service for automatic connection to privileged sessions.

The NPS Proxy Service is installed on the proxy server as part of Privilege Secure install. It must also be installed on any server running services for the application, specifically the NPS Action Service, the NPS Scheduler Service, and NPS SIEM Service. This provides the option to run sessions defined in the application from different locations within your organization.

The NPS Proxy Service installer is in the Extras folder of the ZIP file downloaded from the Netwrix Customer portal. See the [Install Components & Methods](/docs/privilegesecure/privilegesecure/accessmanagement/install/components.md) topic for additional information.

Follow the steps to install the NPS Proxy Service on another server that will run services for the application.

_Remember,_ You must configure the Antivirus exclusions according to the [Exclusions for Antivirus (AV) & Endpoint Software](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000Hi8CAE.html) knowledge base article.

__Step 1 –__ Copy the ```NPS.ProxyService.exe``` file to the desktop of the remote server.

__Step 2 –__ Right-click on the installer and select Run as administrator. The Netwrix Privilege Secure Proxy Service Setup wizard opens.

![Netwrix Privileged Secure Proxy Service Setup wizard on the EULA page](/img/product_docs/threatprevention/threatprevention/install/licenseagreement.webp)

__Step 3 –__ On the End User License Agreement page, check the I agree to the license terms and conditions box and click Options.

_Remember,_ it is a best practice to read the agreement before accepting it.

![Netwrix Privileged Secure Proxy Service Setup wizard on the Setup Options page](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/install/setupoptions.webp)

__Step 4 –__ The default installation location for Install Folder is:

```C:\Program Files\Netwrix\Netwrix Privilege Secure Proxy Service```

- To change the default location, click Browse and set a new location.
- When the location is set, click OK.

__Step 5 –__ You will return to the End User License Agreement page. Click Install.

__NOTE:__ The installation process begins and the wizard displays the its Progress. This may take a few moments.

![Netwrix Privileged Secure Proxy Service Setup wizard on the Successfully Completed page](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.webp)

__Step 6 –__ When installation is complete, click Close.

The NPS Proxy Service is now installed on a remote server. You can verify that it is started and set to run automatically in the Services app (```services.msc```).

## Register the Remote NPS Proxy Service

When the NPS Proxy Service is installed on a remote machine, it must be registered with the proxy server.

Example Values

When referring to the NPS Application server, we will use the following example values in our configuration. Replace these values with values that are specific for your environment.

NPS Application Server

- DNS FQDN: nps-app.example.com
- IP Address: 192.168.99.1

NPS Remote Proxy Server

- DNS FQDN: nps-remote.example.com
- IP Address: 192.168.99.2

NPS Application Server

Follow the steps to register the NPS Proxy Service.

__NOTE:__ All commands are executed on the NPS Application Server as administrator.

__Step 1 –__ Validate the existence of the ```sbpam_node.json``` file in the installation directory of both servers. The default location is:

```C:\ProgramData\Stealthbits\PAM\ProxyService```

__NOTE:__ If you are going to use the DNS FQDN to connect from your remote server, you will need to make sure that the FQDN is listed in the ```sbpam_node.json``` file.

__Step 2 –__ Open the JSON file as an administrator (via administrator command prompt) on both servers. The JSON file can be located at ```C:\ProgramData\Stealthbits\PAM\ProxyService\sbpam_node.json```

__CAUTION:__ If this is not the first remote service, do not change the name of your NPS Application Server. If you do, you will need to re-register all the remote proxy servers.

__Step 3 –__ Ensure that the ```"advertise"``` value of the JSON file on each server has the NPS Proxy Server information, if changes are made, ensure they are saved:

```
{  
    "advertise": ["[ Server FQDN]","[ Server IP Address]"],  
    "tag": []  
}
```

For example:

```
{  
    "advertise": ["newyorksrv10.nwxtech.com","192.168.13.172"],  
    "tag": []  
}
```

__NOTE:__ This file references the ```IP```, ```FQDN```, and ```hostname``` of the server you are on, not all servers.

__Step 4 –__ If edits were made, remove the ```sbpam-node.crt``` file from the following location on both servers using the command below as an administrator:

```
del C:\ProgramData\Stealthbits\PAM\tls\certs\sbpam-node.crt
```

__NOTE:__ If you are adding the proxy to an existing mesh, only delete the ```sbpam-node.crt file``` on the new proxy service server.

__Step 5 –__ On the NPS Application Server, run the following command:

```
"C:\Program Files\Stealthbits\PAM\ProxyService\sbpam-proxy.exe" register ca-hash
```

__Step 6 –__ Copy the returned hash value and save it for later, you will need this value when you register your remote service..

Remote NPS Proxy Server

Follow the steps to register the Remote NPS Proxy Service.

__NOTE:__ All commands are executed on the Remote NPS Proxy Server as an administrator.

__Step 1 –__ Validate the existence of the ```sbpam_node.json``` file in the installation directory. The default location is ```C:\ProgramData\Stealthbits\PAM\ProxyService```.

__Step 2 –__ Open the JSON file as an administrator (via administrator command prompt) on both servers.

__Step 3 –__ (Optional) This step is only necessary if FQDN is required for DNS, otherwise do not change and move to step four. Ensure that the ```"advertise"``` value of the JSON file on the remote server has remote proxy server information:

```
{  
    "advertise": ["nsp-remote-proxy.example.com","192.168.99.2"],  
    "tag": []  
}
```

__Step 4 –__ Remove the ```sbpam-node.crt``` file on the remote proxy server using the command below.

```
del C:\ProgramData\Stealthbits\PAM\tls\certs\sbpam-node.crt
```

__Step 5 –__ On the remote proxy server, run the following command from an elevated command prompt:

```
"C:\Program Files\Stealthbits\PAM\ProxyService\sbpam-proxy.exe" register -s [NPS Application Server IP Address] -u [Privilege Secure Admin Account in NT-Style format] -H [Value copied in Step 6 from above ]
```

For example:

```
"C:\Program Files\Stealthbits\PAM\ProxyService\sbpam-proxy.exe" register -s 192.168.99.1 -u nwxtech\ad.john.smith -H eb367841c099c0338cee72ed572c7b5539f68fa215f7598c0ef5dcc067ee729c
```

The Privilege Secure Proxy Service is now registered with the Privilege Secure application.

## SSH for Legacy Cisco Device

If the Cisco device is running with insecure ciphers when the user attempts to connect to an SSH session, the following error message is displayed:

```ssh: handshake failed: ssh: no common algorithm for key exchange; client offered: [curve25519-sha256@libssh.org ecdh-sha2-nistp256 ecdh-sha2-nistp384 ecdh-sha2-nistp521 diffie-hellman-group14-sha1], server offered: [diffie-hellman-group1-sha1]```

Ideally the Cisco device should be upgraded to support secure ciphers. If this is not possible, it is necessary to add additional ciphers to machines with older (insecure) ciphers that need to be managed with SSH. You can “opt-in” by configuring the cipher suites used by the NPS Proxy Service.

Follow the steps to add Cipher information to the NPS Proxy Service.

__Step 1 –__ Open a command prompt as an Administrator.

__Step 2 –__ Change the directory path to the ProxyService folder in the NPS Proxy Service installation directory. The default path is:

```C:\Program Files\Netwrix\Netwrix Privilege Secure Proxy Service\ProxyService```

__Step 3 –__ Run the following command to automatically generate the "sbpam\_ssh" file:

``` .\sbpam-proxy.exe cfg -c sbpam_ssh```

__Step 4 –__ Browse to the location of the newly created file in "ProgramData". The default path is:

```C:\ProgramData\``````Stealthbits``````\PAM\ProxyService```

__Step 5 –__ Copy and paste the following into the "nps\_ssh.json" file.

```
{  
    "listenaddress": "0.0.0.0:4422",  
    "ClientSettings": {  
        "Algorithms": {  
            "KeyExchanges": [  
                "curve25519-sha256@libssh.org",  
                "ecdh-sha2-nistp256",  
                "ecdh-sha2-nistp384",  
                "ecdh-sha2-nistp521",  
                "diffie-hellman-group14-sha1",  
                "diffie-hellman-group1-sha1"  
            ],  
            "Ciphers": [  
                "aes128-gcm@openssh.com",  
                "chacha20-poly1305@openssh.com",  
                "aes128-ctr",  
                "aes192-ctr",  
                "aes256-ctr",  
                "aes128-cbc",  
                "3des-cbc",  
                "aes192-cbc",  
                "aes256-cbc"  
            ]  
        }  
    }  
}
```

This will add the additional Key Exchange ```diffie-hellman-group1-sha1``` and the additional Ciphers ```aes128-cbc```, ```3des-cbc```, ```aes192-cbc```,``` aes256-cbc```, required to make old Cisco Machines work with remote login.
