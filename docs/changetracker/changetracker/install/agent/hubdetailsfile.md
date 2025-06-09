# HubDetails.xml File

The Agent configuration settings are controlled by the Hub during operations but the initial registration necessitates a basic config file for registration with the Hub.

The __HubDetails.xml__ file includes some details unique to your deployment of Change Tracker , hence it requiring your intervention to make sure settings are as needed.

The key tags within the file are as follows:

![AgentHubDetailsFile](/img/product_docs/changetracker/changetracker/install/agent/agenthubdetailsfile.png)

_Remember,_ an unencrypted password means the Agent didn’t initialize and suggests a bad installation or .NET Framework issue – remember the Agent on Windows requires .NET Framework V3.5, Linux/Solaris requires the latest NNT Mono runtime. Gen 7 Agent also supports additional nodes – NamePrefix, NameSuffix.

\*The Thumbprint uniquely identifies the Web Server certificate, see the Microsoft [How to: Retrieve the Thumbprint of a Certificate](https://msdn.microsoft.com/en-us/library/ms734695(v=vs.110).aspx) article for more information.

__Step 1 –__ Open __IIS__.

__Step 2 –__ Select the server from the list on the left hand side.

__Step 3 –__ Select __Server Certificates__.

__Step 4 –__ Double click your certificate in the list to open the certificates permissions.

__Step 5 –__ Open the __Details__ tab.

__Step 6 –__ Scroll to the bottom of the list and highlight the __Thumbprint__ field.

__Step 7 –__ The thumbprint value will then be displayed – transpose this to your __HubDetails.xml__ file.

The next step is to check that there is network connectivity to the Hub URL from the Agent’s host.

__NOTE:__ Where the Change Tracker Hub has been installed on a Windows/IIS platform then the Hub URL will be https://192.168.1.36.
