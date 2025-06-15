# Nasuni Edge Appliance Access & Sensitive Data Auditing Configuration

It is necessary to generate an API Key Name and Passcode for each on-premise Nasuni Edge Appliance and cloud filer.

## Nasuni Filer Management Interface

Follow the steps to generate a Nasuni API Access Key in the Nasuni Filer Management Interface.

__Step 1 –__ Within the __Configuration__ menu, under __USERS & SECURITY__, select API Access Keys. The API Access Keys page opens.

__Step 2 –__ Click Add API Key button. The Add API Key window opens.

__Step 3 –__ Enter a Name for thekey; for example, the name of the application.

__Step 4 –__ Click Create Key.

__Step 5 –__ In the Successfully Generated API Key window, copy the Key Passcode.

Both the Key Name and the Key Passcode are required for each Nasuni Edge Appliance and cloud filer. They are used as the credentials in the Access Analyzer Connection Profile for 0-FS_Nasuni Job.

__NOTE:__ Nasuni API key names are case sensitive. When providing them, ensure they are entered in the exact same case as generated.

See the Nasuni [Management Console Guide](https://nasuni.my.salesforce.com/sfc/p/#management-console-guide) documentation for additional information.

## Nasuni Management Console

Follow the steps to generate a Nasuni API Access Key in the Nasuni Management Console.

__Step 1 –__ Click Filers and select API Keys from the menu on the left. The Filer API Access Key Settings page opens.

__Step 2 –__ Click New API Key button. The Add API Access Key window opens.

__Step 3 –__ From the Filer drop-down menu, select the desired Nasuni Edge Appliance. Then enter a Name for the key; for example, the name of the application.

__Step 4 –__ Click Add API Key.

__Step 5 –__ A message appears which includes the Key Passcode; copy the Key Passcode.

Both the Key Name and the Key Passcode are required for each Nasuni Edge Appliance and cloud filer. They are used as the credentials in the Access Analyzer Connection Profile for 0-FS_Nasuni Job.

__NOTE:__ Nasuni API key names are case sensitive. When providing them, ensure they are entered in the exact same case as generated.

See the [Nasuni Management Console Guide](https://nasuni.my.salesforce.com/sfc/p/#nasuni-management-console-guide) documentation for additional information.

## Nasuni Best Practices for Access Auditing

Nasuni is a hybrid NAS where actively-used data is stored on a Nasuni Edge appliance while the authoritative copy of all files and meta data is stored in private or public cloud object storage platforms by the UniFS® global file system, and there are egress fees associated with transferring data between the two. In order to minimize these egress fees and optimize scan performance, it is recommended to deploy a dedicated Nasuni Edge Appliance with all shares to be scanned by Access Analyzer mounted, and the Access Analyzer console server, in the same region where the authoritative copy resides.

See the [External Auditing and Nasuni Best Practices](https://nasuni.my.salesforce.com/sfc/p/#external-auditing-and-nasuni-best-practices) documentation for additional information.
