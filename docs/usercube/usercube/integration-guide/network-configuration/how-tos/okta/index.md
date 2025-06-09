# Configure Okta

This guide shows how to configure the OIDC to set up the authentication to Identity Manager.

## Create the Application

On the Okta dashboard:

![Add Application](/img/product_docs/usercube/usercube/integration-guide/network-configuration/how-tos/okta/okta_addapplication.png)

__Step 1 –__  Select the __Applications__ section and click on the __Add Application__ button.

![Create New App](/img/product_docs/usercube/usercube/integration-guide/network-configuration/how-tos/okta/okta_createnewapp.png)

__Step 2 –__ Then click on the __Create New App__ button.

![Create Native App](/img/product_docs/usercube/usercube/integration-guide/network-configuration/how-tos/okta/okta_createnativeapp.png)

__Step 3 –__ Select the platform __Native app__. The only sign-on method is the OpenID Connect.
Click on __Create__.

__Step 4 –__ In __General Settings__, name your Application.
You can also add a logo.

__Step 5 –__ In the __Configure OpenID Connect__ section, enter the connection redirection URL in the part: __Login redirect URLs__. To find out this URL, just take the URL of the Identity Manager application and add ```/signin-oidc```.
The Identity Manager disconnection redirection URL is also necessary. To construct it, take Identity Manager's URL again and, at the end, add ```/signout-callback-oidc```.

__NOTE:__ The __Logout redirect URLs__ section is marked as optional but it is mandatory for Identity Manager.

![Save Application](/img/product_docs/usercube/usercube/integration-guide/network-configuration/how-tos/okta/okta_saveapplication.png)

## Configure the Client Credentials

The client secret in Identity Manager is required for the OIDC connection. You must therefore configure this OIDC connection option in the application.
In the Application Dashboard, click on __Edit__ in the __Client Credentials__ section.
Select the option __Use Client Authentication__ and save the changes.

![Client Credentials](/img/product_docs/usercube/usercube/integration-guide/network-configuration/how-tos/okta/okta_clientcredentials.png)

## Configure the Application Settings

In the __Application__ section, check the box __Implicit (Hybrid)__ so that the connection with Identity Manager can operate correctly. __Allow ID Token with implicit grant type__ is optional.

![Application Section](/img/product_docs/usercube/usercube/integration-guide/network-configuration/how-tos/okta/okta_applicationsection.png)

## Configure the appsettings.json

To successfully configure the OpenId protocol, you can refer to the dedicated section in the detailed guide. See the [
End-User Authentication](/docs/usercube/usercube/integration-guide/network-configuration/server-configuration/end-users-authentication/index.md) for additional information.

Below is an illustrative example of how to set up your `appsettings.json` file.

Code attributes enclosed with <> need to be replaced with a custom value before entering the script in the command line.

```
appsettings.json  
                {  
                ...  
                "OpenId": {  
                "Enabled": true,  
                "Okta": {  
                "AuthenticationScheme": "Okta Authentication",  
                "Authority": "https://your-domain.okta.com/oauth2/default",  
                "ClientId": "Your Client ID",  
                "ClientSecret": "Your Client Secret",  
                "DisplayName": "Okta Display Name",  
                "NameClaimType": "https://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn",  
                "SaveToken": true  
                }  
                }  
                }  
            
```
