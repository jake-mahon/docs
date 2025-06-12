# Configure Exchange Online State-in-Time Modern Authentication Manually

This topic contains general requirements for Exchange Online State-in-Time and Auto Audit for mailboxes Modern Authentication, configuration steps, including the ExchangeOnlineManagement PowerShell module installation.

Review the following:

- [Requirements for Exchange Online Modern Authentication](#requirements-for-exchange-online-modern-authentication)
- [Install the ExchangeOnlineManagement PowerShell Module](#install-the-exchangeonlinemanagement-powershell-module)
- [Configure Exchange Online Modern Authentication Manually](#configure-exchange-online-modern-authentication-manually)

## Requirements for Exchange Online Modern Authentication

General Requirements

- Windows Management Framework for your OS: [Windows Management Framework 5.1](https://www.microsoft.com/en-us/download/details.aspx?id=54616)
- .NET Framework 4.7.1 and above: [Download .NET Framework 4.7.1](https://dotnet.microsoft.com/download/dotnet-framework/net471)

__NOTE:__  If you have the FIPS option enabled you should proceed to Manual Exchange Online pre-configuration. See the [Configure Exchange Online Modern Authentication Manually](#configure-exchange-online-modern-authentication-manually)section for additional information.

Follow the steps to enable Exchange Online Auto Audit for mailboxes with Modern Authentication (automatic mode).

__Step 1 –__ Install the ExchangeOnlineManagement Powershell module and dependencies (Nget package provider). Refer to the following Microsoft article for more information: [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/en-us/powershell/exchange/exchange-online-powershell-v2?view=exchange-ps).

__Step 2 –__ Generate the self-signed certificate.

__Step 3 –__ Install the certificate to the _CurrentUser/My certificate_ folder for the Local System account.

__Step 4 –__ Install the certificate to the Microsoft Entra ID cloud application

## Install the ExchangeOnlineManagement PowerShell Module

This section will be helpful for any case below:

- You encountered errors related to the ExchangeOnlineManagement PowerShell module
- You have the FIPS policy enabled
- You want to install the module manually

Follow the steps to install the module.

__Step 1 –__ Install the Windows Management Framework for your OS: [Windows Management Framework 5.1](https://www.microsoft.com/en-us/download/details.aspx?id=54616)

__Step 2 –__ Install __Nuget Package Provider__ version 3.1 and above. Open __Windows PowerShell__ and execute the following command:

```
Install-PackageProvider Nuget -MinimumVersion 2.8.5.201 -Scope AllUsers
```

__Step 3 –__ Install the  ExchangeOnlineManagement Powershell module. Open __Windows PowerShell__ and execute the following command:

```
Install-Module ExchangeOnlineManagement
```

Review the following Microsoft technical article for more information: [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/en-us/powershell/exchange/exchange-online-powershell-v2?view=exchange-ps)

See next: [Configure Exchange Online Modern Authentication Manually](#configure-exchange-online-modern-authentication-manually)

__NOTE:__ If you encountered errors executing the ```Install-PackageProvider``` cmdlet try to force PowerShell into TLS 1.2 mode and try again:

```
[System.Net.ServicePointManager]:SecurityProtocol = [System.Net.SecurityProtocolType] 'Ssl3 , Tls12'
```

__NOTE:__ If you getting _"No match was found for the specified search criteria..."_ message on the ```Install-Module ExchangeOnlineManagement``` execution, try to register default repository:

```
Register-PSRepository -Default
```

## Configure Exchange Online Modern Authentication Manually

If you encountered errors from Netwrix Auditor during the automatic configuration of the certificate, complete the following steps.

__Step 1 –__ In Netwrix Auditor, find your Exchange Online monitoring plan.

__Step 2 –__ Click Update to force data collection.

If the error still persists, or you want to pre-configure the work with certificate, follow the instructions below:

Follow the steps to install a certificate.

__Step 1 –__ Get your certificate or generate a self-signed certificate. The name must be _Netwrix_Auditor_MFA_`<your_tenant_name>`_

__Step 2 –__ Save the certificate to the _CurrentUser/My certificate_ folder for the Local System account.

__Step 3 –__ Upload the certificate to the application selected in your monitoring plan or configure it automatically with Netwrix Auditor.

Follow the steps to generate a self-signed certificate.

__Step 1 –__ Open Windows PowerShell as an Administrator and run the following commands:

```
# Create certificate  
$mycert = New-SelfSignedCertificate -DnsName "example.com" -CertStoreLocation "cert:\LocalMachine\My" -NotAfter (Get-Date).AddYears(1) -KeySpec KeyExchange  
# Export certificate to .pfx file  
$mycert | Export-PfxCertificate -FilePath mycert.pfx -Password $(ConvertTo-SecureString -String "your_password" -Force -AsPlainText)  
# Export certificate to .cer file  
$mycert | Export-Certificate -FilePath mycert.cer
```

__Step 2 –__ Replace the ```DnsName ```parameter value with your certificate name (Netwrix_Auditor_MFA_`<your_tenant_name>`).

Follow the steps to install the certificate to the CurrentUser/My certificate folder.

__Step 1 –__ Download [PsExec](https://docs.microsoft.com/en-us/sysinternals/downloads/psexec) to run Windows PowerShell session under the LocalSystem account;

__Step 2 –__ Run Windows PowerShell as an Administrator, navigate to to PsExec.exe installation directory (use the 'CD' command), if necessary, and run the following command:

```
.\PsExec.exe -i -s powershell.exe
```

__Step 3 –__ Verify that you are logged in as a Local System account. Run the following command:

```
whoami
```

__Step 4 –__ Import the certificate. Run the following command:

```
Import-PfxCertificate -FilePath `<path to your certificate>` -CertStoreLocation   
'Cert:\CurrentUser\My' -Password (ConvertTo-SecureString -String "your_password" -AsPlainText -Force)
```

Where ```path_to_certificate``` is the full path to the certificate file.

You can also install the certificate with the '.cer' extension to the Microsoft Entra ID Portal or Netwrix Auditor will set it automatically during establishing a PowerShell connection with Exchange Online.
