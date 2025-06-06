---
id: syncserviceinstall
title: Sync Service Installation
---

# Sync Service Installation

The Sync Service is installed as a Windows service. Currently only a single instance of the service is supported. Run the installer executable, following the installer wizard steps in turn.

## Requirements

- Windows Server 2022
- Change Tracker 8

Upgrading Existing Installations

Normally the upgrade process is as simple as running the new installer and clicking next until the end. Previously configured values will be the default values (existing passwords will not be visible).

Version 2.2 is the exception. When upgrading to 2.2 or higher, installations prior to 2.2 must be uninstalled first by using the `unins000` application in `C:\Program Files\\NNT Change Tracker Suite\Gen7SyncService`.

The following folders should then be removed:

- `C:\Program Files\\NNT Change Tracker Suite\Gen7SyncService`
- `C:\Program Data\\NNT\syncservice`

You can then proceed with a normal install.

Replace the contents of the `Gen7SyncService.dll.config` file with the contents of the config file backed up earlier. If no backup is available then enter new configuration during the install wizard.

## Select Components

Under the “ITSM Integration” option, select one ITSM system to integrate with. For brevity this document describes the steps for a ServiceNow setup, but the steps vary little between ITSMs.

![](/img/changetracker/integration/SelectITSM.png)

## Change Tracker Hub Connection

Enter the required configuration values:

![](/img/changetracker/integration/ITSMURL.png)

- In the “Hub Server URL” field, specify the URL for your Change Tracker REST API endpoint, e.g. https://changetracker-server/api

## Authentication

Select which type of authorization to use:

![](/img/changetracker/integration/AuthenticationType.png)

- OAuth2 Client Credentials Flow (provide Client ID / Client Secret of an OAuth application). Use if required by an OAuth application not registered with ServiceNow e.g. Apigee.

## ITSM URLs

Enter the require configuration values:

![](/img/changetracker/integration/ServiceNowConnection.png)

- In the “ServiceNow ITSM Server URL” field, specify the URL for your ServiceNow REST API endpoint, e.g. https://service-now-server/api
- In the “ServiceNow OAuth2 Token URL” field (not applicable if using Basic Authentication), specify the URL for your OAuth2 token endpoint, e.g. https://service-now-server/ oauth_token.do

![](/img/changetracker/integration/ServiceNowCredentials.png)

- In the “ServiceNow OAuth2 Client ID” and “ServiceNow OAuth2 Client Secret” fields (not applicable if using Basic Authentication), enter the Client ID and Client Secret associated with the OAuth application registration.