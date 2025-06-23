---
title: API Key Revocation
sidebar_label: api key revocation
description: Documentation for Privilege Secure privileged access management solution covering features, configuration, and usage procedures.
---

# API Key Revocation

API Key Revocation

# API Key Revocation

Beginning with version `1.13.63` the feature has been added which allows the revocation of API keys
via API routes.

Using Postman, craft the following DELETE request:

![Screen_Shot_2019-05-11_at_12.26.44_PM.webp](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360022795274_screen_shot_2019-05-11_at_12.26.44_pm_671x61.webp)

The string of characters after the `/api/v1/api-keys/` represent the "appId" value, which can be
determined by using the default "GET - List Issued API Keys" option included in the default
Privilege Secure Postman collection.

Once the string is submitted, there will be no message in response of a successful revocation. 
However, if there is an attempt to revoke an already revoked key, the following message will be
displayed:

![Screen_Shot_2019-05-11_at_12.27.47_PM.webp](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360022795274_screen_shot_2019-05-11_at_12.27.47_pm_515x76.webp)

**NOTE:** Despite the command using a DELETE route, the actual deletion of API keys is
intentionally **not** available via API routes.
