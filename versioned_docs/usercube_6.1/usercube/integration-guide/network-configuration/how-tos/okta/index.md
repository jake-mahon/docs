# Configure Okta for Usercube Authentication

This guide shows how to configure the OIDC to set up the authentication to Usercube.

## Create the Application

On the Okta dashboard, select the __Applications__ section.
Click on the __Add Application__ button.

![Add Application](/img/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/how-tos/okta/okta_addapplication.png)

Then click on the __Create New App__ button.

![Create New App](/img/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/how-tos/okta/okta_createnewapp.png)

Select the platform "Native app". The only sign-on method is the OpenID Connect.
Click on __Create__.

![Create Native App](/img/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/how-tos/okta/okta_createnativeapp.png)

In __General Settings__, name your Application.
You can also add a logo.

In the __Configure OpenID Connect__ section, enter the connection redirection URL in the part: __Login redirect URLs__. To find out this URL, just take the URL of the Usercube application and add: "/signin-oidc".
The Usercube disconnection redirection URL is also necessary. To construct it, take Usercube's URL again and, at the end, add: "/signout-callback-oidc".

The __Logout redirect URLs__ section is marked as optional but it is mandatory for Usercube.

![Save Application](/img/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/how-tos/okta/okta_saveapplication.png)

## Configure the Client Credentials

The client secret in Usercube is required for the OIDC connection. You must therefore configure this OIDC connection option in the application.
In the Application Dashboard, click on __Edit__ in the __Client Credentials__ section.
Select the option __Use Client Authentication__ and save the changes.

![Client Credentials](/img/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/how-tos/okta/okta_clientcredentials.png)

## Configure the Application Settings

In the __Application__ section, check the box __Implicit (Hybrid)__ so that the connection with Usercube can operate correctly. __Allow ID Token with implicit grant type__ is optional.

![Application Section](/img/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/how-tos/okta/okta_applicationsection.png)

## Configure the appsettings.json

In the __authentication__ section of your appsettings file, the __OpenId__ section must be configured with the following information:

- ClientId: __Client ID__ found in the Okta __Client Credentials__ section
- ClientSecret: __Client secret__ found in the Okta __Client Credentials__ section
- Authority: __Okta Domain__ found in the Okta __General Settings__ section
- SaveToken: True

```
appsettings.json
{
  ...
  "OpenId": {
    "Enabled": true,
    "Okta": {
      "AuthenticationScheme": "Okta authentication",
      "DisplayName": "Okta authentication",
      "ClientId": "Client ID",
      "ClientSecret": "Client secret",
      "Authority": "Okta Domain",
      "SaveToken": true
    }
  }
}

```
