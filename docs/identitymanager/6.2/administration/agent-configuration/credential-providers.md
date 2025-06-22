# Azure Key Vault

## Prerequisites

First, Identity Manager recommends reading:

- [Azure Key Vault's overview documentation](https://docs.microsoft.com/en-us/azure/key-vault/general/overview)
  and [Basic concepts](https://docs.microsoft.com/azure/key-vault/general/basic-concepts);
- How to
  [sign in to Azure and create a vault](https://docs.microsoft.com/en-us/azure/key-vault/general/quick-create-portal#sign-in-to-azure-and-create-a-vault);
- About
  [Azure Key Vault's secrets](https://docs.microsoft.com/en-us/azure/key-vault/secrets/about-secrets)
  because secrets are the data that Identity Manager needs to collect.

## Compatible Settings

Every key from appsettings.agent.json that has a string value can be saved as a secret into
Microsoft Entra ID (formerly Azure AD) Key Vault. See the
[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md) topic for additional information.

Check the examples in connectors' credential protection sections. See the
[ ServiceNow ](/docs/identitymanager/6.2/reference/index.md) topic
for additional information.

## Write Settings to the Vault

After creating the Azure Key Vault, open its page on Azure's portal and
[add a secret](https://docs.microsoft.com/en-us/azure/key-vault/secrets/quick-create-portal#add-a-secret).

The important part of adding a secret in Azure Key Vault is defining its name and value:

- As secrets' names can only contain alphanumeric characters and double dashes (`--`) as separator,
  the keys from the appsettings.agent.json file must contain only alphanumeric characters too;
- Secrets' values are simply the value associated with the key in the JSON file.

For example, for the Active Directory:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
                        appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "ADExport": {
      "Servers": [
        {
          "Server": "<paris.contoso.com>",
          "BaseDN": "<DC=paris,DC=com>"
        },
        {
          "Server": "<marseille.contoso.com>",
          "BaseDN": "<DC=defense,DC=marseille,DC=com>"
        }
      ],
      "AuthType": "<Basic>",
      "Login": "<login123>",
      "Password": "<password123>",
      "Filter": "(objectclass=*)",
      "EnableSSL": "false",
    }
  }
}
                    
```

To save the login to Azure Key Vault, create a secret whose name and value are respectively
`<Connections--ADExport--Login>` and `<login123>`.

To save the second server, create a secret whose name and value are respectively
`<Connections--ADExport--Servers--1--Server>` and `<marseille.contoso.com>`.

_Remember,_ the index of the first element is `<0>`.

This way, values from the Azure Key Vault take priority over the values from the appsettings files.

For example, if Login exists in both Azure Key Vault and appsettings.agent.json, then the value from
Azure Key Vault is used.

## Configure Usercube

Netwrix Identity Manager (formerly Usercube)uses the default Azure credentials to connect to the
vault. Since the implementation of default Azure credential is controlled by Microsoft see the
[Default Azure Credential](https://learn.microsoft.com/en-us/dotnet/api/azure.identity.defaultazurecredential?view=azure-dotnet)
page additional information.

| Name           | Type   | Description                                                                                                                             |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Vault required | String | DNS Name found on the page of the vault in Azure's portal. _Remember,_ usually in the format is `<https://yourVault.vault.azure.net/.>` |

# CyberArk's AAM Credential Providers

This guide shows how to protect sensitive data by connecting Identity Manager to CyberArk's
Application Access Manager (AAM) Credential Providers.

## Data Protection

Identity Manager often needs to connect to [Connectors](/docs/identitymanager/6.2/integration/connectors/index.md) with
credentials that need protection.

By default, the data used to connect to external systems is stored in plain text in the
**Connections** section of the `appsettings.agent.json` file. This is not a secure option.

## CyberArk for Data Protection

CyberArk's Application Access Manager (AAM) Credential Providers, part of the Privileged Access
Security solution, is used to stop storing hard-coded credentials in applications, scripts or
configuration files, and instead store them in CyberArk's vault to be centrally logged and managed.

This way, the company can easily become compliant with potential internal and regulatory
requirements of periodic password replacement, and able to securely monitor privileged access across
all systems, databases and applications.

CyberArk is made of vaults. Inside a vault, safes can be created and owners allocated. Accounts and
files can then be stored in safes accessible by users.

This section explains how Identity Manager retrieves these accounts from CyberArk.

## Prerequisites

CyberArk AAM can be used either with:

- agentless AAM:
  [Central Credential Provider](https://docs.cyberark.com/Product-Doc/OnlineHelp/AAM-CP/11.4/en/Content/CCP/The-Central%20-Credential-Provider.htm?tocpath=Get%20Started%7COfferings%7C_____3#central-credential-provider)
  (works with Web Service using REST);
- agent-based AAM:
  [Credential Provider](https://docs.cyberark.com/Product-Doc/OnlineHelp/AAM-CP/11.4/en/Content/CP%20and%20ASCP/lp_cp.htm?tocpath=Get%20Started%7COfferings%7C_____1#credential-provider)
  (works with C/C++ Application Password SDK).

  Implementing the Credential Provider method requires placing the C/C++ Application Password SDK
  DLL, named `CPasswordSDK.dll` (on 32-bit systems) or `CPasswordSDK64.dll` (on 64-bit systems),
  to the `Runtime` folder of Identity Manager.

Identity Manager supports both AAMs.
[CyberArk's overview](https://docs.cyberark.com/Product-Doc/OnlineHelp/AAM-CP/11.4/en/Content/CCP/The-CyberArk-Application-Identity-Management-Solution.htm?tocpath=Get%20Started%7C_____1#cyberarks-overview)
can help choose which AAM to go to.

See more details about Credential Provider's
[system requirements](https://docs.cyberark.com/Product-Doc/OnlineHelp/AAM-CP/11.4/en/Content/CP%20and%20ASCP/SysReq-Credential-Provider.htm?tocpath=Installation%7CSystem%20Requirements%7C_____1#system-requirements)
and
[installation guide](https://docs.cyberark.com/Product-Doc/OnlineHelp/AAM-CP/11.4/en/Content/CP%20and%20ASCP/installing-the-Credential-Provider.htm?TocPath=Installation%7CCredential%20Provider%7CInstall%20the%20Credential%20Provider%7C_____0#installation-guide).

## Compatible Settings

The following table sums up which keys from `appsettings.agent.json`'s **Connections** section can
be saved to CyberArk:

| Use Case | Possible Key                                   |
| -------- | ---------------------------------------------- |
| Login    | `Login / ApplicationId / ClientId`             |
| Password | `Password / ApplicationKey / ClientSecret`     |
| Address  | `Server / MicrosoftGraphPathApi / ResponseUri` |

Any [Connectors](/docs/identitymanager/6.2/integration/connectors/index.md) using one of these attributes as key can retrieve the
associated value from CyberArk.

> For example,
> [Active Directory](/docs/identitymanager/6.2/integration/connectors/connector-catalog/active-directory.md) can
> retrieve: `Login`; `Password`; `Server`.

## Set Authorization Details

While the application's identifier is required, setting an authentication method and allowed
machines is optional but recommended for security concerns.

### AppID

[See CyberArk's documentation on how to add an application to the vault](https://docs.cyberark.com/Product-Doc/OnlineHelp/AAM-CP/Latest/en/Content/Common/Adding-Applications.htm?tocpath=Administration%7CManage%20applications%7C_____1#see-cyberarks-documentation-on-how-to-add-an-application-to-the-vault).

CyberArk uses for each client application an AppID, i.e. a unique name to identify the application's
permissions to access given safes and stored secrets.

### Authentication

Several
[authentication methods](https://docs.cyberark.com/Product-Doc/OnlineHelp/AAM-CP/Latest/en/Content/Common/Adding-Applications.htm?tocpath=Administration%7CManage%20applications%7C_____1#authentication-methods)
are available to protect the whole system and make sure that Identity Manager actually does the API
calls.

Netwrix Identity Manager (formerly Usercube)recommends:

- Using the certificate's serial number (see below how to configure certificates) when working with
  the agentless AAM - Central Credential Provider;
- Generating a hash with the AIMGetAppInfo utility when working with the agent-based AAM -
  Credential Provider.

### Allowed machines

Finally,
[allowed machines](https://docs.cyberark.com/Product-Doc/OnlineHelp/AAM-CP/Latest/en/Content/Common/Adding-Applications.htm?tocpath=Administration%7CManage%20applications%7C_____1#allowed-machines)
can be added to the safe. This way, the Credential Provider verifies that only applications running
from an authorized machine can access secrets.

### SSL certificate

If IIS is configured with `AIMWebService` set to `Require SSL`, then an SSL certificate must be
provided.

Identity Manager does not require a certificate, so it can be launched without certificate-related
parameters, if CyberArk is configured to allow it.

## Create a CyberArk Account

CyberArk's Password Vault Web Access (PVWA) is meant to enable users to access sensitive data
through accounts in CyberArk, from any local or remote location.

The following procedure requires credentials in order to connect to PVWA.

Create a CyberArk account by
[adding it to the PVWA](https://docs.cyberark.com/Product-Doc/OnlineHelp/AAM-CP/Latest/en/Content/CP%20and%20ASCP/cv_Managing-Single-Accounts.htm?tocpath=Administration%7CCredential%20Provider%7CAccounts%20and%20Safes%7C_____1#adding-it-to-the-pvwa),
defining at least the following properties:

```
| Property Name | Key in appsettings.agent.json |
| ------------- | ------------------------------- |
| Username | Login |
| Address | Server |
| Password | Password |

Netwrix Identity Manager (formerly Usercube) recommends customizing the account's name because it will be used in [

              Connection
              ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) to retrieve this account from the vault.

```

## Assign the Permissions

[See CyberArk's documentation on how to add a safe member](https://docs.cyberark.com/PAS/13.0/en/Content/PASIMP/Safes-add-a-safe-member-ClassicUI.htm?tocpath=Administrator%7CPrivileged%20Accounts%7CAccess%20Control%7CSafes%20and%20Safe%20members%7CClassic%20interface%7C_____3).

In order to assign the permissions to access the application, follow CyberArk's instructions to
[build the environment for the Credential Provider in the PVWA](https://docs.cyberark.com/AAM-CP/13.0/en/Content/CP%20and%20ASCP/Building-CP-Environment.htm).

The aim here is to give the right permissions to:

- the AAM user, by default named `Prov_{Credential Provider machine name}`, meant to enable the
  Credential Provider to authenticate to the vault and retrieve passwords;
- the application, via its AppID.

## Configure Usercube

Connect Identity Manager to CyberArk by adding to the agent's `appsettings.json` file a specific
section.

> For example:
>
> ```
> appsettings.json
>
> {
>   ...
>   "CyberArk": {
>       "UseCyberArkSetting": true,
>       "SafeName": "safeName",
>       "ApplicationId" : "appId",
>       "Server" : "serverUrl",
>       "File": "certificateFilePath",
>       "Password": "certificatePassword",
>       "DistinguishedName": "certificateSubjectDistinguishedName",
>       "Thumbprint": "certificateThumbprint",
>       "StoreName": "certificateStoreName",
>       "StoreLocation": "certificateStoreLocation"
>   },
>   ...
> }
> ```

### Vault settings

| Name                                    | Details                                                                                                                                                                                                                                   |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UseCyberArkSetting default value: False | **Type** Boolean **Description** `True` to enable the CyberArk Provider for Identity Manager.                                                                                                                                             |
| SafeName required                       | **Type** String **Description** Name of the safe containing the [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) used by Identity Manager.                                                |
| ApplicationId required                  | **Type** String **Description** [CyberArk's AAM Credential Providers ](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md) of the application that can access the safe.                                 |
| Server required                         | **Type** String **Description** URL configured for the CyberArk Vault. It is recommended to use HTTPS for security purposes. **Note:** the `Server` attribute is only used with the CyberArk Central Credential Provider (Agentless AAM). |

### Certificate settings

Certificate settings are only used with the Central Credential Provider (agentless AAM). They set
the location of the public key certificate and the private key used by the agent to handle encrypted
network communications with CyberArk.

This information can be set one of two ways:

- As a [Public Key Cryptography Standards (PKCS) #12](https://en.wikipedia.org/wiki/PKCS_12) archive
  (also called
  [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files)
  or `.pfx` file) stored in the _Agent_'s host file system. The archive contains both the public key
  certificate and the private key.
- As a certificate from a Windows'
  [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store)
  identified by _SubjectDistinguishedName_ or by _Thumbprint_. The Windows certificate also contains
  both the public key certificate and the private key.

  Netwrix Identity Manager (formerly Usercube)recommends using Windows' certificate store.

  On the other hand, the PFX file takes priority over Windows' certificate, which means that when
  `File` is specified then the PFX certificate is used, even if the options for Windows'
  certificate are specified too.

  In both ways, missing and/or incorrect settings trigger an error and no certificate is loaded.

#### As a PFX file

> For example:
>
> ```
> appsettings.json
>
> {
>   ...
>   "CyberArk": {
>     "UseCyberArkSetting": true,
>     "SafeName": "safeName",
>     "ApplicationId" : "appId",
>     "Server" : "serverUrl",
>     "File": "C:/UsercubeAgentContoso/contoso.pfx",
>     "Password": "oarjr6r9f00"
>   },
>   ...
> }
> ```

The archive is set using the following attributes:

| Name              | Details                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File required     | **Type** String **Description** [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the host file system.                                                                                                                                                                                                                                                           |
| Password optional | **Type** String **Description** [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password. **Info:** storing a `.pfx` file's password in plain text in a production environment is strongly discouraged. It should always be encrypted using the [ Usercube-Protect-CertificatePassword ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) tool. |

#### As a Certificate in the Windows Store

> For example:
>
> ```
> appsettings.json
>
> {
>   ...
>   "CyberArk": {
>     "UseCyberArkSetting": true,
>     "SafeName": "safeName",
>     "ApplicationId" : "appId",
>     "Server" : "serverUrl",
>     "DistinguishedName": "CN=contoso, OU=Biz, O=Contoso, L=Marseille, S=MA, C=FR",
>     "StoreName": "My",
>     "StoreLocation": "LocalMachine"
>   },
>   ...
> }
> ```

The Windows certificate is set using these attributes:

| Name                       | Details                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DistinguishedName optional | **Type** String **Description** _SubjectDistinguishedName_ of the store certificate. **Note:** required when `Thumbprint` is not specified. |
| Thumbprint optional        | **Type** String **Description** _Thumbprint_ of the store certificate. **Note:** required when `DistinguishedName` is not specified.        |
| StoreLocation required     | **Type** String **Description** Location of the relevant Windows certificate store: `LocalMachine` or `CurrentUser`.                        |
| StoreName required         | **Type** String **Description** Name of the relevant Windows certificate store.                                                             |

## Usercube's CyberArk Vault

Once [CyberArk's AAM Credential Providers ](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md), Identity Manager retrieves the sensitive
values from CyberArk via the `appsettings.cyberArk.agent.json` file.

In this file:

- the keys must follow the same structure as in the **Connections** of the `appsettings.agent.json`
  file;
- the values are the names of the accounts created before.

> The following example saves in CyberArk the credentials for `AD_Export`, with the accounts
> `AdAccount` and `AdServer2`:
>
> ```
> appsettings.cyberArk.agent.json
> {
>   "Connections": {
>     "AD_Export": {
>       "Login": "AdAccount",
>       "Password": "AdAccount",
>       "Servers": [
>         {
>           "Server": "AdAccount"
>         },
>         {
>           "Server": "AdServer2"
>         }
>       ]
>     }
>   }
> }
> ```
>
> Thus, when launching a job via the `AD_Export` connection, Identity Manager gets the values for
> `Login`, `Password` and `Server` from CyberArk, and the others from `appsettings.agent.json`.

After updating `appsettings.cyberArk.agent.json`, the agent must be restarted for the changes to
take effect.

To get a given property's value, Identity Manager reads first the section in
`appsettings.cyberArk.agent.json` for the appropriate connection. Only if the property is not listed
here will Identity Manager read the corresponding section in `appsettings.agent.json` to find it.

Thus, when a property is listed in both appsettings files, the value from the CyberArk vault takes
priority over the one from the usual appsettings file.
