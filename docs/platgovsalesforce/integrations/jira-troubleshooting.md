# Jira Integration Troubleshooting

Jira Integration errors

## Error with Jira Credentials

Error message:

_Please verify your Jira Credentials. Go to_ **Netwrix Dashboard** _>_ **Configurations and Stats**
_>_ **Jira Configuration** _>_ **Credentials**

Solution:

Refer to [Credentials](/docs/platgovsalesforce/administration/platform-configuration.md#credentials) for more
information on entering your credentials.

## Error with Mapping Jira Statuses

Error message:

_Please verify your Jira Credentials. Go to_ **Netwrix Dashboard** _>_ **Configurations and Stats**
_>_ **Jira Configuration** _->_ **Status Mapping**

Solution:

Refer to [Status Mapping](/docs/platgovsalesforce/administration/platform-configuration.md#status-mapping) for more
information on mapping your statuses.

## Error with Salesforce Credentials

Error message:

Please verify Your User Credentials: It may be an Invalid username, wrong password, or invalid
security token.

If you are using Salesforce Authenticator, please update it to the most recent Six-digit code.

Or please verify that the user is not locked.

Solution:

Check the user's information in Salesforce.

## Error with Connected App Key

Error message:

error=invalid_client_id&error_description=client%20identifier%20invalid

Refer to [Access Data with API Integration](/docs/platgovsalesforce/integrations/jira-integration.md#access-data-with-apiintegration) for
more information on setting up the connected app.

## Error with Consumer Secret

Error message:

Please verify the Consumers Secret from the Connected App.

Solution:

Refer to [Credentials](/docs/platgovsalesforce/administration/platform-configuration.md#credentials) for more
information on entering your credentials

## URL Errors

Error message:

error=redirect_uri_mismatch

Solution:

Refer to [Connected App](/docs/platgovsalesforce/integrations/jira-configuration.md#connected-app) Connected App for more
information on setting up the connected app.

# Jira Upload Add On Not Showing

If the Upload add on is not shown on your screen, you are either not a Jira administrator or you
have not checked **Enable development mode**.

To enable development mode:

1. Open Jira.
2. Click **Settings**
3. Click **Enable development mode**

![Jira Enable Development Mode](/img/product_docs/platgovnetsuite/integrations/jira_enable_dev_mode.webp)
