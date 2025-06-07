# Netwrix Integrations Page

The Netwrix Integrations page provides the ability to configure access to the data in other Netwrix products. At present, only Netwrix Threat Prevention is supported. This enables Recovery for Active Directory to pull object data from the integrated product and tie it with that same object's data in Recovery for Active Directory. Users can then view the audit history and activity data coming from Threat Prevention for objects on the [Active Directory Page](/docs/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/overview.md).

Click __Configuration__ in the left pane. Then click the __Netwrix Integrations__ tab on the Configuration page to open the Netwrix Integrations page.

![Netwrix Integrations page](/static/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/configuration/integrations.png)

Follow the steps to configure access to the data of a Netwrix product.

__Step 1 –__ On the Netwrix Integrations page, use the Auditing Product Integration drop-down menu to select a product for integration. The menu displays the supported Netwrix products, namely Netwrix Threat Prevention.

__Step 2 –__ In the SQL Server field, enter the IP address or the server name of the SQL server where the Threat Prevention database resides.

__Step 3 –__ Select the option button for __Windows authentication__ or __SQL authentication__ to set the authentication mode.

- Windows authentication uses the credentials provided on the Netwrix Recovery Server Configuration page of the Recovery for Active Directory Setup wizard. See the [Install the Application](/docs/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/install/application.md) topic for additional information.
- For SQL Server authentication, provide SQL credentials in the Account and Password fields. The account requires Read permissions on the Threat Prevention database.

__Step 4 –__  Click __Test__ to test the connection. A message is displayed to indicate if the test succeeded or failed.

__Step 5 –__ Recovery for Active Directory users do not have access to audit data in Threat Prevention; hence they cannot view it in Recovery for Active Directory. For this reason, you must specify the account(s) that have access to Threat Prevention. Only the users that log into Recovery for Active Directory with any of the specified accounts will be able to fetch and view audit and activity data from Threat Prevention for domain objects.

- Click the Add account access button to add an account. The Add Account Access wizard is displayed.

  ![Add Account Access wizard - Account page](/static/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/configuration/account.png)
- Enter a user's first or last name, display name, sAMAccountName, or group name in the __Search__ field. As you type, the system will find matches in Active Directory and display the results. Select the desired user and click __Next__.

  ![Add Account Access wizard - Confirm page](/static/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/confirm.png)
- The Confirm page displays a summary of the settings you provided on the pages of the wizard. Use the Back button to return to a previous page and change any setting. Click __Complete__ to finish the wizard.

The added account is displayed under Account on the Netwrix Integrations page. See the [Integration with Threat Prevention](/docs/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/overview.md#Integration-with-Threat-Prevention) topic for additional information.

__Step 6 –__ Click __Save__.

Integration settings with a Netwrix product are now configured.
