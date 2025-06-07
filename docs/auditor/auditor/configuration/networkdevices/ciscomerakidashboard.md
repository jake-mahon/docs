# Cisco Meraki Dashboard

Before creating a monitoring plan to audit your Cisco Meraki devices, plan for the account that will be used for data collection. See the [Data Collecting Account](/docs/product_docs/auditor/auditor/admin/monitoringplans/dataaccounts.md) topic for additional information. You will provide this account in the monitoring plan wizard.

Changes that are collected with the basic authorization:

- Add/Modify/Remove User
- Configuration
- Successful logon
- Failed logon

Changes that are collected with the API:

- Add/Modify/Remove User
- Configuration

## Configure Cisco Meraki Dashboard Account

Before you start creating a monitoring plan to audit your Cisco Meraki devices, plan for the data collection should meet the requirements listed below. Then you will provide this account in the item.

For Basic Authorization

Since accounts with multi-factor authentication are not supported, you need to create a special cloud account with read-only permissions and disabled multi-factor authentication.

Follow the steps to configure Cisco Meraki Dashboard item.

__Step 1 –__ Sign in to the [Cisco Meraki Dashboard](https://account.meraki.com/secure/login/dashboard_login).

__Step 2 –__ Create a dashboard account as described in the following Cisco Meraki article: [Getting Started](https://documentation.meraki.com/Getting_Started)

__Step 3 –__ Make sure that the read-only permissions assigned to the account. For more information about Meraki permissions, refer to the following Cisco Meraki article: [Managing Dashboard Administrators and Permissions](https://documentation.meraki.com/zGeneral_Administration/Managing_Dashboard_Access/Managing_Dashboard_Administrators_and_Permissions).

__Step 4 –__ Log in to this account and navigate to __My Profile__ at the top of the dashboard.

__Step 5 –__ Find the section labeled SMS authentication.

__Step 6 –__ Make sure that the SMS authentication parameter is set to __OFF__. For more information about authentication, refer to the following Cisco Meraki article: [Two-Factor Authentication](https://documentation.meraki.com/zGeneral_Administration/Other_Topics/Two-Factor_Authentication).

__NOTE:__ This account is for Netwrix Auditor purposes. Do not forget to switch back to your account.

To Collect Data via API Key

To work with multi-factor authentication (MFA) accounts, you need to generate an API key during authorization.

Follow the steps to create an API key for the Meraki Dashboard API.

__Step 1 –__ Log in to your Cisco Meraki Dashboard account.

__Step 2 –__ Click on your username in the top-right corner of the dashboard to open the drop-down menu.

__Step 3 –__ Select __My profile__.

__Step 4 –__ In the __My profile__ page, scroll down to the __API access__ section.

__Step 5 –__ Click on the __Generate new API key__ button. You may be prompted to enter your account password for security verification.

Once generated, the API key will be displayed on the screen. Make sure to copy and save the API key in a secure location, as it won't be displayed again for security reasons.

__NOTE:__ Logons are not collected on the board due to technical limitations from the Meraki API.
