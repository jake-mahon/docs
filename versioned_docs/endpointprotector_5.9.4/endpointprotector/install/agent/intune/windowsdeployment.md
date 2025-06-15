# Windows Deployment

To deploy the Endpoint Protector MSI package for Windows using Intune, follow these steps:

__Step 1 –__ Open and log in to Endpoint Protector;

__Step 2 –__ Go to the System Configuration, Client Software and download the Windows Endpoint Protector MSI package;

![Downloading the Windows Endpoint Protector MSI Package](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/msipackagedownload.png)

__CAUTION:__ When deploying the .msi package, delete the information contained in the brackets as well as the underscore that precedes it - EPPClientSetup.5.6.3.1_x86_64.msi

![A black text on a white background

Description automatically generated](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/msipackage.png)

__Step 3 –__ Go to the Microsoft Endpoint Manager admin center and sign in;

__Step 4 –__ Go to Apps from the left-hand side menu, and on the Apps Overview page, select the Windows platform;

![Apps Overview Page](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/appsoverview.png)

__Step 5 –__ On the Windows App page, click Add, select the Line of business app type, and then click Select;

![Selecting the Line of business app type](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/apptype.png)

__Step 6 –__ Click Select app package file and from the right-hand side, select the Endpoint Protector MSI file and click OK;

![Selecting Endpoint Protector Package file ](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/apppackagefile.png)

__Step 7 –__ On the App information page, fill in the mandatory fields and then click Next:

- Name – add Endpoint Protector and optional, the package version (Endpoint Protector 5.7.3.6)
- Description – click Edit Description and add installation details
- Publisher – add NetwrixLtd.
- Command-line argument – add the following command line in the text box

  - WSIP="EPP_server_IP" WSPORT="443" /q REBOOT=ReallySuppress

![App information page to add information. ](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/addapp.png)

__Step 8 –__ On the Assignments page, in the Requirement section, select the group for which you want to deploy the Endpoint Protector client and then click Next;

![Selecting the group for which you want to deploy the Endpoint Protector Client](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/assignmentspage.png)

__Step 9 –__ On the Review + create page, click Create - this will start the Endpoint Protector MSI package upload.

![Initiating the Endpoint Protector Package MSI upload](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/reviewpage.png)
