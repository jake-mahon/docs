# Microsoft Entra ID Single Sign-On

The Access Information Center can be configured to use Microsoft Entra ID Single Sign-On (SSO). When configured, users are directed to the Microsoft Entra ID login page, and can log in using their existing Entra credentials.

__NOTE:__ If enabled, only Microsoft Entra ID SSO can be used for logging in. Other accounts, including the default administrator account, cannot be used.

The following is required to use Microsoft Entra ID SSO:

- SSL must be enabled
- The on-premise Active Directory must be synced with Microsoft Entra ID

To enable Microsoft Entra ID SSO, you must first create a registered application in Microsoft Entra ID, and then configure the Access Information Center to use it.

## Configure an Application in Microsoft Entra ID

An application must be registered for the Access Information Center with your Microsoft Entra ID tenant and be configured with the necessary single sign-on settings. Follow the steps to create and configure the application.

__Step 1 –__ Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

__Step 2 –__ On the left navigation menu, navigate to __Identity__ > __Applications__ > __Enterprise Applications__. On the top toolbar, click App registrations and then __Create your own application__.

__Step 3 –__ On the Create your own application page, enter a name for your application and select the __Integrate any other application you don't find in the gallery__ option. Click __Create__ to finish creating the application.

__Step 4 –__ In your application, go to __Manage__ > __Single sign-on__. Select __SAML__ as the single sign-on method.

__Step 5 –__ On the Set up Single Sign-On with SAML page, click __Edit__ on the Basic SAML Configuration section. Add your Identifier and Reply URL, and then click __Save__.

- As the Identifier, enter ```https://<FQDN of AIC>:<port number>```, for example:

  ```
  https://app0190.train90.local:481
  ```
- As the Reply URL, enter ```https://<FQDN of AIC>:<port number>/v2/federation```, for example:

  ```
  https://app0190.train90.local:481/v2/federation
  ```

__Step 6 –__ Next, click __Edit__ on the Attributes & Claims section. The four claims in the table below are required. For each of these, click __Add new claim__, enter the information from the table, and then click __Save__.

| Name | Namespace | Source attribute |
| --- | --- | --- |
| windowsaccountname | http://schemas.microsoft.com/ws/2008/06/identity/claims | user.onpremisessamaccountname |
| name | http://schemas.xmlsoap.org/ws/2005/05/identity/claims | user.displayname |
| sid | http://schemas.xmlsoap.org/ws/2005/05/identity/claims | user.onpremisessecurityidentifier |
| upn | http://schemas.xmlsoap.org/ws/2005/05/identity/claims | user.onpremisesuserprincipalname |

Once configured they should show under Additional claims as below:

![Claims configured](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/entraidssoclaims.png)

__Step 7 –__ In the __Manage__ > __Users and groups__ section for your application, add any required users or groups to give permission to access the application.

The application is now configured with the necessary settings. The next step is to enable the use of Microsoft Entra ID SSO in the Access Information Center config file.

## Enable in the Access Information Center Config File

To enable Microsoft Entra ID SSO for the Access Information Center, the config file needs to be updated with values from Microsoft Entra ID. Follow the steps to enable the SSO.

_Remember,_ Enabling Entra ID SSO requires SSL to be enabled. If this was not done during the installation, then you must manually configure it. See the [Securing the Access Information Center](/docs/accessinformationcenter/access/informationcenter/installation/secure.md) topic for additional information.

__Step 1 –__ Open the ```AccessInformationCenter.Service.exe.config``` file in a text editor, such as Notepad. The file is located in the Access Information Center installation directory:

…\Program Files\STEALTHbits\Access Information Center

![Parameters in the config file](/img/product_docs/accessinformationcenter/access/informationcenter/admin/additionalconfig/configfileentrasso.png)

__Step 2 –__ Locate the __WsFederationMetaData__, __WsFederationRealm__, and __WsFederationReply__ parameters in the config file. If these are not present, then manually add them to your config file as follows:

```
    <add key="WsFederationMetadata" value="" />  
    <add key="WsFederationRealm" value="" />  
    <add key="WsFederationReply" value="" />
```

__NOTE:__ For new installations of the Access Information Center these parameters are already in the config file. If you have upgraded from a previous version, then you need to manually add them as the config file is retained during an upgrade to maintain the existing settings.

__Step 3 –__  Add the required values for the parameters from your Microsoft Entra ID application:

- WsFederationMetaData – Metadata markup for describing the services provided

  - This value can be retrieved from your application in Microsoft Entra ID: __Manage__ > __Single sign-on__ > __SAML Certificates__ > __App Federation Metadata Url__
- WsFederationRealm – Maps to the application identifier to Microsoft Entra ID

  - This value can be retrieved from your application in Microsoft Entra ID: __Manage__ > __Single sign-on__ > __Basic SAML Configuration__ > __Identifier__
- WsFederationReply – This is the endpoint for the configured relying party trust

  - This value can be retrieved from your application in Microsoft Entra ID: __Manage__ > __Single sign-on__ > __Basic SAML Configuration__ > __Reply URL__

For example:

```
    <add key="WsFederationMetadata" value="https://login.microsoftonline.com/4a728f3b-1234-5678-90ab-cdef13246789/federationmetadata/2007-06/federationmetadata.xml?appid=5d3f1a2e-9876-5432-10ba-fedcba098765" />  
    <add key="WsFederationRealm" value="https://app0190.train90.local:481" />  
    <add key="WsFederationReply" value="https://app0190.train90.local:481/v2/federation" />
```

__Step 4 –__ Save and close the file.

__Step 5 –__ Navigate to Services (```services.msc```). Restart the Netwrix Access Information Center service.

The Access Information Center has been enabled for Microsoft Entra ID single sign-on.
