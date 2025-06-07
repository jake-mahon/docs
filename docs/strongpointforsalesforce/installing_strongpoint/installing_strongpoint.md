# Install Platform Governance for Salesforce

Platform Governance for Salesforce is installed with package installation file sent to you by our customer success team. To install:

1. Click on the install URL, if installing in the sandbox, replace the initial portion of the URL with [http://test.salesforce.com](http://test.salesforce.com)
2. Select __Install for Admins Only__
3. Click __Install__
![install1](/static/img/product_docs/strongpointforsalesforce/installing_strongpoint/install1.jpg)

The installation runs in the background. An email notification is sent to you when the installation is complete.

## Configure Platform Governance for Salesforce

The following items are needed:

- Create a __Connected App__ to generate and extract the Salesforce __Consumer Key__ and the Salesforce __Consumer Secret Key__
- Your Salesforce __username__, __password__ and __authentication token__

1. Open Salesforce __Setup__ > __Apps__ > __App Manager__
2. Click __New Connected App__
3. Select __Create a Connected App__ and click __Continue__
4. Under __Basic Information__ enter the required fields:

- __Connected App Name__: __Netwrix Platform Governance__
- __API Name__: __Netwrix\_Platform\_Governance__
- __Contact E-mail__

5. Click __API (Enable OAuth Settings)__ to expand the section.
6. Set __Call Back URL__ to __[https://localhost.com](https://localhost.com)__
7. Set __Selected OAuth Scopes__ to __Full access (full)__

   ![Setting for Connected App](/static/img/product_docs/strongpointforsalesforce/integrations/connected_app.png)

   __The Require Proof Key for Code Exchange (PKCE) Extension for Supported Authorization Flows__ should not be checked.
8. Click __Save__. __Netwrix Platform Governance__is now listed under __Custom Apps__.
9. Click on __Netwrix Platform Governance__.

   ![configure-1](/static/img/product_docs/strongpointforsalesforce/installing_strongpoint/configure-1.png)
10. Click __Manage Consumer Details__. You must verify your identity before you can proceed.
11. Copy the __Consumer Key__ and the __Consumer Secret Key__.
12. Open the Salesforce App Launcher.
13. Locate and select __Netwrix Lightning__.
14. Click __I Accept__ for the EULA.

__Next Step:__ [Using the Getting Started Wizard](/docs/product_docs/strongpointforsalesforce/installing_strongpoint/using_getting_started_wizard.md)
