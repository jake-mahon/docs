# Deploy the Add-On

Follow the steps to deploy the Add-On:

__Step 1 –__ Prepare Auditorfor data processing.

__Step 2 –__ Configure Syslog message forwarding in CyberArk.

__Step 3 –__ Download the Add-On.

__Step 4 –__ Install Add-on.

__Step 5 –__ Configure Add-on parameters

## Prepare Auditor for Data Processing

In Auditor client, go to the Integrations section and verify Integration API settings:

1. Make sure the __Leverage Integration API__ is switched to __ON__.
2. Check the TCP communication port number – default is __9699__.

See the [Prerequisites](/docs/auditor/auditor/api/prerequisites.md) topic for additional information.

By default, activity records are written to _Netwrix\_Auditor\_API_ database which is not associated with a specific monitoring plan.

Optionally, you can create a dedicated monitoring plan in Auditor. In this case, data will be written to a database linked to this plan. Target it at Netwrix API data source and enable for monitoring. Add a dedicated item of _Integration_ type to the plan for data to be filtered by item name. See the [Integration API](/docs/auditor/auditor/api/overview.md) topic for additional information.

In such scenario, you will need to specify this monitoring plan in the _naplan_ and _naplanitem_ attributes of the _`<AcceptList>` ® `<Address>`_ configuration parameters. See the [Add-On Parameters](/docs/auditor/auditor/addon/cyberark/parameters.md) topic for additional information.

## Configure Syslog Message Forwarding in CyberArk

On the CyberArk side, you need to specify the server that will receive Syslog messages from CyberArk, process them and forward to Auditor Server. This will be the add-on installation server (the machine where _SyslogService.exe_ runs).

Follow the steps to configure Syslog message forwarding in CyberArk.

__Step 1 –__ Log in to your CyberArk system.

__Step 2 –__ On the CyberArk server, locate the _%Program Files (x86)%\PrivateArk\Server\Conf_ folder and open the __dbparam.ini__ file for editing.

__Step 3 –__ Go to the __[SYSLOG]__ section and configure the following parameters:

- __SyslogTranslatorFile__ – relative path to __Netwrix.xsl__ file. You will need to create this file manually and copy the content of __SyslogTranslator.sample.xsl__ file into it. This sample file is provided by CyberArk. By default, it is located in the _%Program Files (x86) %\PrivateArk\Server\Syslog_ folder.   
  Place the _Netwrix.xsl_ file there, too, so that default relative path should be _\Server\Syslog_.
- __SyslogServerPort__ – communication port of the syslog server (i.e. add-on installation server). Default is __514__. Note that if you are using Netwrix Auditor for Network Devices, this port may be already in use, and you should provide another one.
- __SyslogServerIP__ - IP address of the add-on installation server.
- SyslogServerProtocol – communication protocol for data transfer between CyberArk system and the add-on. Specify __UDP__ protocol.
- __SyslogMessageCodeFilter__ - IDs of events to forward. The add-on will only collect and process events you specify in this parameter. For the full list of supported events, see [Monitored Events](/docs/auditor/auditor/addon/cyberark/monitoredevents.md). Use comma as a separator.

[![dbparamfile_thumb_0_0](/img/product_docs/auditor/auditor/addon/cyberark/dbparamfile_thumb_0_0.png)](/docs/auditor/resources/images/auditor/addon/cyberark/dbparamfile.png)

__Step 4 –__ Save the __dbparam.ini__ file.

## Download the Add-On

__Step 1 –__ Download the distribution package __Netwrix\_Auditor\_Add-on\_for\_CyberArk\_PAS.zip__.

__Step 2 –__ Unpack it to a folder on the computer where you plan to deploy the add-on.

_Remember,_  deploy the add-on on the same machine with the Auditor Server.

## Install Add-On

Follow the steps to install the Add-On:

__Step 3 –__ Navigate to your add-on package.

__Step 4 –__ Unzip the Add-On to a desired folder.

__Step 5 –__ Run the installation package.

__Step 6 –__ Accept the license agreement and follow the instructions of the setup wizard.

__Step 7 –__ On the __Destination Folder__ step, specify the installation folder (_C:\Program Files (x86)\Netwrix Add-ons\<Add-on name>\_ by default).

__Step 8 –__ Click __Install__.

__Step 9 –__ When done, click __Finish__.

## Configure Add-on Parameters

The configuration wizard opens in the default web browser:

![ConfigurationWizard](/img/product_docs/auditor/auditor/addon/privilegeduserlinux/configwizard.png)

Click __Proceed__ and complete the following fields:

| Option | Description |
| --- | --- |
| Specify General Settings |  |
| Listed UDP port | Specify UDP port for listening incoming events. (__514__ by default). |
| Auditor Endpoint | Auditor Server IP address and port number followed by endpoint for posting Activity Records.  Assumes that the add-on runs on the computer hostingAuditor Server and uses default port _9699_.  If you want to run the add-on on another machine, provide a name of the computer where Auditor Server resides (e.g., _172.28.6.15_, _EnterpriseNAServer_, _WKS.enterprise.local_).  To specify a non-default port, provide a server name followed by the port number (e.g., _WKS.ent erprise.local:9999_).  Do not modify the endpoint part (_/ netwrix/ api_ ) |
| Certificate Thumbprint | Netwrix Auditor Certificate Thumbprint Property. Possible values:   - ```Empty```—Check Auditor certificate via Windows Certificate Store.  - ```AB:BB:CC```—Check Auditor Server certificate thumbprint identifier.  - ```NOCHECK```—Do not check Auditor certificate. Make sure to select this parameter if you plan to specify servers by their IP. |
| Specify Active Directory credentials |  |
| Username | Provide the name of the account under which the service runs. Unless specified, the service runs under the account currently logged on. |
| Password | Provide the password for the selected account. |
| Auditor Monitoring Plan settings |  |
| Auditor Plan | Unless specified, data is written to __Netwrix\_Auditor\_API__ database and is not associated with a specific monitoring plan.  Specify a name of associated monitoring plan in Auditor. In this case, data will be written to a database linked to this plan.  If you select a plan name in the add- on, make sure a dedicated plan is created in Auditor, the Netwrix __API__ data source is added to the plan and enabled for monitoring. Otherwise, the add- on will not be able to write data to the Audit Database. |
| Auditor Plan Item | Unless specified, data is not associated with a specific plan and, thus, cannot be filtered by item name. Specify an item name.  Make sure to create a dedicated item inAuditor in advance. |
| Accept List |  |
| Address | Specify a list of IP addresses of syslog events sources. The service will collect and process events from these sources only.  Events collected from any other source will be ignored. |

Click __Run__ to start collecting data with the Add-On.
