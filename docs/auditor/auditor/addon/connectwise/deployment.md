# Deploy the Add-On

Follow the steps to deploy the Add-On for ConnectWise.

__Step 1 –__ Prepare Auditor for using the add-on:

1. In the Auditor settings, enable Integration API and specify connection port. See the [Integrations](../../admin/settings/integrations.md) topic for additional information.
2. Make sure your monitoring plans set up in Auditor are using Audit Databases to store collected data. See the [Audit Database](../../admin/settings/auditdatabase.md) topic for additional information.

__Step 2 –__ Download the add-on package and copy it to the computer where Auditor Server resides.

__Step 3 –__ Unpack the ZIP archive to a folder of your choice; by default, it will be unpacked to the Netwrix Auditor Add-On for ConnectWise Manage folder.

__Step 4 –__ Run the install.cmd file. It will deploy and enable the Netwrix Auditor __ConnectWise Manage Integration Service__.

__Step 5 –__ Run the ConfigureConnection.exe and follow the steps of the wizard to configure connection and ticketing settings for ConectWise Manage. See the [Configure ConnectWise ](configure.md)topic for additional information.

__Step 6 –__ (optional) To adjust the add-on operation and data flow settings, edit the ITSMSettings.xml file. See the [Operational Settings](operationalsettings.md) topic for additional information.

__Step 7 –__ In Auditor, go to Alerts, select the required alerts, click Edit, and in the Response Action section of the alert properties specify the full path to Netwrix.ITSM.AlertResponseAction.exe file (the add-on component responsible for alert handling), for example, _C:\Addon\ITSM_CW\Netwrix.ITSM.AlertResponseAction.exe_.

## Enabling TLS 1.2 Usage

The add-on supports Transport Layer Security (TLS) 1.2 security protocol. By default, this capability is disabled. To enable it, in the __ConnectWiseSettings.xml__, locate the __`<EnableTls12>`__ parameter and set its value to _TRUE_.
