# Add Authentication Connector

Follow the steps to add an authentication connector to the console.

__Step 1 –__ Navigate to the __Configuration__ > __Authentication__ page.

__Step 2 –__ In the Connectors list, click the __Plus__ icon.

![addauthentication](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/addauthentication.png)

__Step 3 –__ Enter the following information:

- Authentication Connector Name – Displays the name of the authentication connector
- Connector Description (Optional) – Enter a brief description to identify the service account
- Connection Type – Indicates the type of authentication

__NOTE:__ Once the Connection Type is selected, additional fields become available. The available fields will change depending on the selection.

__Step 4 –__ Enter the information from the applicable authentication connector provider. See the [Authentication Page](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/page/authentication.md) section for detailed descriptions of the fields.

- For OpenID Connect, open the [OpenID Connect Configuration Wizard](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/wizard/openidconnectconfiguration.md)
- For SAML, open the [SAML Configuration Wizard](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/wizard/samlconfiguration.md)

See the [OpenID Connect Authentication](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/integrationdetails/openidconnectauthentication.md) appendices for additional information on how to configure third party Authentication Connectors.

__Step 5 –__ Click __Save__ to create the new authentication connector.

The new authentication connector is added to the Connectors list.
