# Nasuni Edge Appliance Activity Auditing Configuration

Generation of an API Access Key is required for Nasuni activity monitoring. The Nasuni Edge Appliance generates its own audit trail. An API Access Key is used by the Activity Monitor to form a network connection to the appliance. Nasuni will then stream event data to the activity agent. See [Nasuni Support Documentation](https://www.nasuni.com/support/) for additional information.

Configuration Checklist

Complete the following checklist prior to configuring activity monitoring of Nasuni Edge Appliances. Instructions for each item of the checklist are detailed within the following topics.

Checklist Item 1: Generate Nasuni API Access Key

- Generate an API Access Key for each Nasuni Edge Appliance to be monitored through one of the following:

  - Nasuni Filer Management Interface
  - Nasuni Management Console

Checklist Item 2: Activity Monitor Configuration

- Deploy the Activity Monitor activity agent to a Windows proxy server

## Nasuni Filer Management Interface

Follow the steps to generate a Nasuni API Access Key in the Nasuni Filer Management Interface.

__Step 1 –__ Within the __Configuration__ menu, under __USERS & SECURITY__, select API Access Keys. The API Access Keys page opens.

__Step 2 –__ Click Add API Key button. The Add API Key window opens.

__Step 3 –__ Enter a Name for thekey; for example, the name of the application.

__Step 4 –__ Click Create Key.

__Step 5 –__ In the Successfully Generated API Key window, copy the Key Passcode.

Both the Key Name and the Key Passcode are required by the Activity Monitor in order to connect to the Nasuni Edge Appliance. Once the API Key has been generated, it is time to configure and enable monitoring with the Activity Monitor console.

__NOTE:__ Nasuni API key names are case sensitive. When providing them, ensure they are entered in the exact same case as generated.

## Nasuni Management Console

Follow the steps to generate a Nasuni API Access Key in the Nasuni Management Console.

__Step 1 –__ Click Filers and select API Keys from the menu on the left. The Filer API Access Key Settings page opens.

__Step 2 –__ Click New API Key button. The Add API Access Key window opens.

__Step 3 –__ From the Filer drop-down menu, select the desired Nasuni Edge Appliance. Then enter a Name for the key; for example, the name of the application.

__Step 4 –__ Click Add API Key.

__Step 5 –__ A message appears which includes the Key Passcode; copy the Key Passcode.

Both the Key Name and the Key Passcode are required by the Activity Monitor in order to connect to the Nasuni Edge Appliance. Once the API Key has been generated, it is time to configure and enable monitoring with the Activity Monitor console.

__NOTE:__ Nasuni API key names are case sensitive. When providing them, ensure they are entered in the exact same case as generated.
