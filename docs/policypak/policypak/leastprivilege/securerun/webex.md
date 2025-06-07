# How to run WebEx Meeting as regular user when SecureRun is enabled

You need to create a new Least Privilege Manager policy on either the Computer or User side, and then create the following Elevate and Allow policies. The steps below show you how to do this.

![575_1_image-20200826125733-1](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/575_1_image-20200826125733-1.png)

__Step 1 –__ Executable policy for ```Webex.exe``` Elevated by __Signature__ and __File Info__.

__Step 2 –__ Executable policy for ```ATMGR.exe``` Elevated by __Signature__ and __File Info__.

__Step 3 –__ Windows Installer policy for WebEx Desktop App (```WebExApp.msi```) Elevated by __Signature__ and __Product Info__.

__Step 4 –__ Executable policy for ```WebexAppLauncher.exe``` Elevated by __Signature__ and __File Info__.

__Step 5 –__ Executable policy for ```CiscoWebExStart.exe``` Allowed by __Signature__ and __File Info__.

```WebEx.exe``` and``` WebExApp.msi``` are files downloaded when joining or creating a meeting, and are normally downloaded to ```%UserProfile%\Downloads```.

```Atmgr.exe``` can be found after successfully installing WebEx under``` %LocalAppData%\WebEx\WebEx\Meetings```

```WebexAppLauncher.exe```, and ```CiscoWebExStart.exe``` can both be found after successfully installing WebEx under ```%LocalAppData%\WebEx```

Alternatively, download the Guidance XMLs from [https://portal.policypak.com/downloads/guidance,](https://portal.policypak.com/downloads/guidance) then browse to the ```…\Production-Guidance\PolicyPak Least Privilege Manager XMLs``` folder after extracting the contents of the downloaded zip, and import the ```WebEx Elevated by Signature and File Info.xml``` for use in your environment.

## Troubleshooting:

### Method 1:

If WebEx is blocked after using these policy settings, please check in the Netwrix Endpoint Policy Manager (formerly PolicyPak) Event log to see if ```WebEx.exe``` is being blocked by SecureRun due to Publisher being unknown. If it is, you can edit the policy item for``` WebEx.exe``` and uncheck the signature requirement to work around this issue.

![575_3_image-20200826125733-2](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/575_3_image-20200826125733-2.png)

![575_5_image-20200826125733-3](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/575_5_image-20200826125733-3.png)

### Method 2:

Export the intermediate certificate from the ```Webex.exe``` file.

__Step 1 –__ Right-click ```Webex.exe``` file and open Properties

__Step 2 –__ Select the Digital Signature tab and click __Details__.

![575_7_01_321x213](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/575_7_01_321x213.png)

__Step 3 –__ Click __View Certificate__.

![575_8_02_323x239](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/575_8_02_323x239.png)

__Step 4 –__ Click the __Certification Path__ tab and select the second certificate from the chain. Click __View Certificate__.

![575_9_03_319x130](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/575_9_03_319x130.png)

__Step 5 –__ Click on the __Details__ tab and select __Copy to File__.

![575_10_04_243x307](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/575_10_04_243x307.png)

__Step 6 –__ Click __Next__ on the Export Certificate Wizard and select DER encoded binary X.509 (.CER) format.

__Step 7 –__ Finish the export and save the cert file somewhere easily accessible for the next steps.

__NOTE:__ You can also use Endpoint Policy Manager Remote Work Delivery Manager to deliver the certificate file at the desired location of the remote computer. For more information on this issue, please see  Remote Work Delivery Manager > [Knowledge Base](/docs/product_docs/policypak/policypak/feature/overview/knowledgebase.md)

Use Endpoint Policy Manager Scripts Manager to deliver the Certificate in Intermediate Certification Authorities for a Computer.

__NOTE:__  This script must be set up at the Computer Configuration level to work.

__Step 1 –__  Create a new Endpoint Policy Manager Scripts Manager GPO and use the following PowerShell command:

```
#Path variable can be any location that you want. $pathIntermediateCertificate =   
'C:\Temp\Intermediate.cer'$certificateStore = New-Object -TypeName   
System.Security.Cryptography.X509Certificates.X509Store -ArgumentList CA,  
LocalMachine$certificateStore.Open('ReadWrite')$certificateStore.Add($pathIntermediateCertificate)$certificateStore.Close()
```

__Step 2 –__ Wait for the policy refresh and you should see the certificate in the Intermediate Certification Authorities folder

![575_11_05_549x169](/static/img/product_docs/policypak/policypak/leastprivilege/securerun/575_11_05_549x169.png)
