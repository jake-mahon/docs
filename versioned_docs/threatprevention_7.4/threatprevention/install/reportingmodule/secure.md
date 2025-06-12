# Secure the Reporting Module Console

To support HTTPS, do the following:

- Import an SSL certificate to the Netwrix Threat Manager Reporting Module server
- Configure the StealthDEFEND Web Service and the StealthDEFEND Active Directory Service with a certificate thumbprint and a new port value

## Locate and Import the SSL Server Certificate

Complete the steps to create or obtain a certificate and import it.

__Step 1 –__  Create or obtain an SSL Server certificate for the Netwrix Threat Manager Reporting Module server and import it into the Windows Certificate LocalMachine Personal store on the Netwrix Threat Manager Reporting Module server machine.

__CAUTION:__  Be very careful with the encoding of the thumbprint especially when copy/pasting the thumbprint from certmgr.msc. This can often cause encoding issues so ensure ANSI encoding when editing the configuration files discussed in this topic.

__Step 2 –__  
Copy the thumbprint of the certificate as you will need to utilize it while editing the configuration files.

## Web Service Configuration File

Follow the steps to configure the Web Service Configuration file.

__Step 1 –__  
Open the Web Service configuration file on the Netwrix Threat Manager Reporting Module server.

C:\Program Files\STEALTHbits\StealthDEFEND\WebService\appsettings.json

__Step 2 –__  
Append the __WebService__ and __ADService__ sections to the end of the file. Remember to add a trailing comma after the ```“EncryptRecording”:false``` line.

```
{  
    "Jwt":  {  
                "CertificateFile":  "C:\\ProgramData\\Stealthbits\\StealthDEFEND\\WebService\\jwtsign.pfx",  
                "CertificatePassword":  "CertificatePassword",  
                "CertificateThumbprint":  "",  
                "Version":  2  
            },  
    "DataDirectory":  null,  
    "EncryptRecording":  false,  
    "WebService":  {  
                       "Port":  8080,  
                       "Certificate":  "CertificateThumbprint",  
                       "RestApiUri":  "https://ThreatManagerServer.Domain.com:8080"  
                   },  
     "ADService":  {  
                   "Host": "localhost",  
                   "Scheme": "https",  
                   "Port": "55556"  
                   }   
}
```

__CAUTION:__ Do not modify the Jwt section of the appsettings.json file.

__Step 3 –__  
In the WebService and ADService sections, ports are set to 8080 and 55556 respectively. Make sure these ports are available on your machine.

__Step 4 –__  
Set the __Certificate__ value to the value of the certification thumbprint you imported previously.

__Step 5 –__  
Set the __RestApiUri__ value to the URL used to access the application (e.g., https://ThreatManagerReportingModuleServer.Domain.com:8080).

__Step 6 –__  
Save the configuration file.

__Step 7 –__  
Restart the Web Service.

__Step 8 –__  
Check the Web Service Log File to ensure the Cert was found and loaded properly. You should see a log file with the output:

```
Found cert with subject % and thumbprint 12345ABCDEF54AED1DB59C349CA4D514628DB4D3
```

## Active Directory Service Configuration File

Follow the steps to configure the Active Directory Service Configuration file.

__Step 1 –__  
Open the Active Directory Service configuration file on the Netwrix Threat Manager Reporting Module server:

C:\Program Files\STEALTHbits\StealthDEFEND\ActiveDirectoryService\appsettings.json

__Step 2 –__  
Append the __WebService__ section to the end of the file. Remember to add a trailing comma after the ```“EncryptRecording”:false``` line in the file.

```
{  
    "Jwt":  {  
                "CertificateFile":  "C:\\ProgramData\\Stealthbits\\StealthDEFEND\\WebService\\jwtsign.pfx",  
                "CertificatePassword":  "CertificatePassword",  
                "CertificateThumbprint":  "",  
                "Version":  2  
            },  
    "DataDirectory":  null,  
    "EncryptRecording":  false,  
    "WebService":  {  
                   "Port":  55556,  
                   "Certificate":  "CertificateThumbprint"  
                   }  
}
```

__CAUTION:__ Do not modify the Jwt section of the appsettings.json file.

__Step 3 –__  
In the WebService section, the port is set to 55556. Make sure it is available on your machine.

__Step 4 –__  
Set the certificate value to that of the certification thumbprint you imported previously.

__Step 5 –__  
Save the configuration file.

__Step 6 –__  
Restart the Active Directory Service.

__Step 7 –__  
Check the Active Directory Service Log File to ensure the Cert was found and loaded properly. You should see a log file with the output:

```
Found cert with subject % and thumbprint 12345ABCDEF54AED1DB59C349CA4D514628DB4D3
```

The Netwrix Threat Manager Reporting Module Console is now secure.
