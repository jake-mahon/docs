---
title: Add Authentication Connector
sidebar_label: authentication connectors
description: Administrative configuration and management features for Privilege Secure PAM solution including user management, policies, and security settings.
---

# Add Authentication Connector

Follow the steps to add an authentication connector to the console.

**Step 1 –** Navigate to the **Configuration** > **Authentication** page.

**Step 2 –** In the Connectors list, click the **Plus** icon.

![addauthentication](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/addauthentication.webp)

**Step 3 –** Enter the following information:

- Authentication Connector Name – Displays the name of the authentication connector
- Connector Description (Optional) – Enter a brief description to identify the service account
- Connection Type – Indicates the type of authentication

**NOTE:** Once the Connection Type is selected, additional fields become available. The available
fields will change depending on the selection.

**Step 4 –** Enter the information from the applicable authentication connector provider. See the
[Authentication Page](/docs/privilegesecure/4.2/administration/configuration/authentication/authentication-settings.md) section for detailed descriptions of the fields.

- For OpenID Connect, open the
  [OpenID Connect Configuration Wizard](/docs/privilegesecure/4.2/administration/configuration/authentication/openid-connect.md)
- For SAML, open the [SAML Configuration Wizard](/docs/privilegesecure/4.2/administration/configuration/authentication/saml-configuration.md)

See the [OpenID Connect Authentication](/docs/privilegesecure/4.2/administration/configuration/authentication/openid-connect.md)
appendices for additional information on how to configure third party Authentication Connectors.

**Step 5 –** Click **Save** to create the new authentication connector.

The new authentication connector is added to the Connectors list.
