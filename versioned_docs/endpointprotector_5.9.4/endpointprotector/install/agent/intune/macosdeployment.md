# macOS Deployment

To deploy the Endpoint Protector package for macOS using Intune, follow these steps:

__Step 1 –__ Open and log in to Endpoint Protector.

__Step 2 –__ Go to the System Configuration, Client Software and download the macOS Endpoint Protector package.

![Downloading the macOS Endpoint Protector package](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/packagedownload.png)

__Step 3 –__ Convert the Endpoint Protector client to an .intunemac file – for more information and procedure, visit the Microsoft Docs portal;

__Step 4 –__ Go to the Microsoft Endpoint Manager admin center and sign in

__Step 5 –__ Go to Apps from the left-hand side menu, and on the Apps Overview page, select the macOS platform;

__Step 6 –__ On the macOS apps page, click Add, select the Line of business app type, and then click __Select__.

![macOS configurations on the Apps Overview page](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/macappsoverview.png)

__Step 7 –__ Click Select app package file and from the right-hand side, select the Endpoint Protector intunemac file, Upload and click __OK.__

![Information about the app package file](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/macaddapp.png)

__Step 8 –__ On the App information page, fill in the mandatory fields and then click __Next__.

- Name – add Endpoint Protector Client
- Description – add Endpoint Protector Client
- Publisher – add Netwrix Ltd.

![Completing Mandatory Fileds under App inforamtion page](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/appinformation.png)

__Step 9 –__ On the Assignments page, in the Required section, select the group for which you want to deploy the Endpoint Protector client and then click __Next__.

![Selecting the group for which you want to deploy the Endpoint Protector client](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/macassignments.png)

__Step 10 –__ On the Review + create page, click Create - this will start the Endpoint Protector package upload.

![Inititating the Endpoint Protector package Download](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/macreviewpage.png)

__Step 11 –__ Go to Devices from the left-hand menu, select macOS, Shell scripts and then click __Add__.

__NOTE:__ Please contact the Customer Support department to provide the script.

![Adding scripts on shell scripts page](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/shellscripts.png)

__Step 12 –__ On the Add script page, fill in the mandatory information and then click __Next__.

- Name (mandatory) – add a name for the script (Post install script)
- Description – add a description for the script

![Completing mandatory inforamtion for Shell Scripts](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/addscript.png)

__Step 13 –__ On the Script settings tab, add the following information and then click Next:

- Upload and select the New Jamf PostInstall script from your computer
- Set the Run script as sign-in user setting to No

![Adding inforamtion on the script settings page](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/scriptsettings.png)

__Step 14 –__ On the Assignments tab, include the groups you prefer (Add groups, all users, or all devices) and then click __Next__.

![Including the groups you prefer](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/includegroups.png)

__Step 15 –__ On the Review + add tab, you can view the script information and click __Add__.

![Viewing the script information](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/agent/intune/scriptinformation.png)
