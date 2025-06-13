# Carbon Black

Carbon Black

# Carbon Black

## Overview

The Carbon Black integration is available from Privilege Secure version 2.8 and later. This allows machines to be protected and access elevated with out direct line of site. Privilege Secure integrates to the Carbon Black end point and is able to perform these tasks without the need for the end machine being on the domain.

Follow the steps to configure Carbon Black integration.

__Step 1 –__ Login to Carbon Black Cloud.

__Step 2 –__ Next the API access needs to be granted to Privilege Secure. This is done using the API Access under Settings within Carbon Black Cloud and click the API Access details under settings.

![image.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/edr/360061787514_image_105x410.png)

Note the ORG KEY at the top left.

![Screen_Shot_2021-03-02_at_6.36.07_PM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_6.36.07_pm_267x140.png)

__Step 3 –__ Create two API Keys: One is Live Response API and one is the Device API.

## Access Level Creation

Follow the steps for access level creation.

__Step 1 –__ First, a specific access level for one of these keys must be created.

__Step 2 –__ Click the __Access Levels__ selection in the top left.

![Screen_Shot_2021-03-02_at_7.06.12_PM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.06.12_pm_375x183.png)

__Step 3 –__ The Add Access Level button should be clicked to start the creation of the custom access level.

![Screen_Shot_2021-03-02_at_7.06.55_PM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.06.55_pm.png)

__Step 4 –__ Enter the details to identify the new Access Level.

![Screen_Shot_2021-03-02_at_7.04.16_PM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.04.16_pm.png)

__Step 5 –__ The following access level items should be selected - CHECK THE POLICY IS NEEDED OR NOT XXXX\*\*\*\*\*\*\*\*

![Screen_Shot_2022-02-11_at_11.04.26_AM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/edr/360061787514_screen_shot_2022-02-11_at_11.04.26_am.png)

__Step 6 –__ Click the __Save__ button to save the custom access level.

## API Keys Creation

Follow the steps to create API keys.

__Step 1 –__ Click the Add API Key button in the top right corner.

![Screen_Shot_2021-03-02_at_6.42.09_PM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_6.42.09_pm.png)

__Step 2 –__ Enter the details for the Live Response API.

![Screen_Shot_2021-03-02_at_6.48.23_PM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_6.48.23_pm_417x412.png)

__Step 3 –__ Click __Save__ and note the API ID and API Secret Key.

![Screen_Shot_2021-03-02_at_6.51.34_PM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_6.51.34_pm_323x185.png)

__Step 4 –__ Create a second API Key using the custom access level previously created.

![Screen_Shot_2021-03-02_at_7.15.12_PM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.15.12_pm_428x421.png)

__Step 5 –__ Click __Save__ and again the API ID and Secret Key should be noted.

![Screen_Shot_2021-03-02_at_6.51.34_PM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_6.51.34_pm_323x185.png)

## Privilege Secure Configuration

Follow the steps for configuration.

__Step 1 –__ To set up Privilege Secure to use the integration created with Carbon Black, the Server Configuration page should be accessed within Privilege Secure.

![Screen_Shot_2021-03-02_at_7.20.53_PM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.20.53_pm_486x402.png)

__Step 2 –__ Complete the Carbon Black EDR Integration panel with the details noted for the APIs created in Carbon Black Cloud.

![Screen_Shot_2021-03-02_at_7.22.31_PM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.22.31_pm.png)

__Step 3 –__ Test the connection and a successful response should be returned.

![Screen_Shot_2021-03-02_at_7.24.15_PM.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.24.15_pm.png)
