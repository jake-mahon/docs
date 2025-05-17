---
sidebar_position: 2844
title: Jira Integration Troubleshooting
---

# Jira Integration Troubleshooting

Jira Integration errors

## Error with Jira Credentials

Error message:

*Please verify your Jira Credentials. Go to* **Netwrix Dashboard** *>* **Configurations and Stats** *>* **Jira Configuration** *>* **Credentials**

Solution:

Refer to [Credentials](../installing_strongpoint/config_and_stats#JiraCredentials) for more information on entering your credentials.

## Error with Mapping Jira Statuses

Error message:

*Please verify your Jira Credentials. Go to* **Netwrix Dashboard** *>* **Configurations and Stats** *>* **Jira Configuration** *->* **Status Mapping**

Solution:

Refer to [Status Mapping](../installing_strongpoint/config_and_stats#JiraStatusMapping) for more information on mapping your statuses.

## Error with Salesforce Credentials

Error message:

Please verify Your User Credentials: It may be an Invalid username, wrong password, or invalid security token.

If you are using Salesforce Authenticator, please update it to the most recent Six-digit code.

Or please verify that the user is not locked.

Solution:

Check the user's information in Salesforce.

## Error with Connected App Key

Error message:

error=invalid\_client\_id&error\_description=client%20identifier%20invalid

Refer to [Access Data with API Integration](jira_integration#Access) for more information on setting up the connected app.

## Error with Consumer Secret

Error message:

Please verify the Consumers Secret from the Connected App.

Solution:

Refer to [Credentials](../installing_strongpoint/config_and_stats#JiraCredentials) for more information on entering your credentials

## URL Errors

Error message:

error=redirect\_uri\_mismatch

Solution:

Refer to [Connected App](jira_walkthrough_example#ConnectedApp) Connected App for more information on setting up the connected app.