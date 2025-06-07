# Manage SMS Gateway Accounts

You can create one or more SMS gateway accounts in Directory Manager and link an account with an identity store. You can also set an account as the default account, so that it is automatically linked to an identity store created thereafter.

Directory Manager supports several SMS gateway providers. You can also use the Custom Gateway API to integrate with an unsupported provider.

What do you want to do?

- [Create an SMS Gateway Account](#Create-an-SMS-Gateway-Account)
- [Modify an SMS Gateway Account](#Modify-an-SMS-Gateway-Account)
- [Set an SMS Gateway Account as Default](#Set-an-SMS-Gateway-Account-as-Default)
- [Test SMS Gateway Account Connection](#Test-SMS-Gateway-Account-Connection)
- [Link an SMS Gateway Account to an Identity Store](#Link-an-SMS-Gateway-Account-to-an-Identity-Store)
- [Delete an SMS Gateway Account](#Delete-an-SMS-Gateway-Account)

## Create an SMS Gateway Account

1. In Admin Center, click __SMS Gateway__ at the bottom of the left navigation pane.
2. On the __SMS Gateways__ page, do either of the following:

   - Click __Setup SMS Gateway__ - This button is displayed when no gateway account exists in Directory Manager.
   - Click __Create SMS Gateway__ - This button is displayed when one or more gateway accounts have been created in Directory Manager.

   The __Create SMS Gateway__ page is displayed.
3. Enter a name for the gateway account in the __Name__ box.
4. In the __Gateway Type__ drop-down list, select an SMS gateway provider.  
   The list includes the gateways that Directory Manager supports and any custom SMS gateways that you have written. Selecting a gateway type displays the gateway URL, which is the web service address the SMS gateway uses for sending text messages.
5. Enter an account ID for the gateway type in the __Account ID__ box.
6. Enter the username and password for the account in the __User Name__ and __Password__ boxes.
7. To communicate with the SMS gateway through a proxy server, click __Show Proxy Options__. This displays some additional fields for entering proxy settings. Enter the following proxy information:

   - __Proxy User Name__ - the proxy user name, if required by the proxy server.
   - __Proxy Password__ - the password for the user name.
   - __Description__ - a description of the proxy connection.
   - __Proxy Domain__ - the domain name or IP address of the proxy server.
   - __Proxy Host Name__ - the host name of the proxy server.
   - __Proxy Port__ - the port number the proxy uses.
8. Test the account settings:

   1. Click __Test Connection__.
   2. In the __Test SMS Gateway Connection__ dialog box, enter a mobile phone number for receiving a test message. Use International format, with no spaces or special characters. For example: 18588123169, 447079692712, 923225867987.
   3. Click __OK__ to send the message to the mobile number.
9. Select the __Set as default account__ check box to link this gateway account with the identity stores created from this point forward.
10. Click __Create SMS Gateway__ to create the gateway account.

## Modify an SMS Gateway Account

You can update the details of an SMS gateway account, such as its name and the credentials used to connect to the gateway.

__To modify an account:__

1. In Admin Center, click __SMS Gateway__ at the bottom of the left navigation pane.  
   The __SMS Gateways__ page is displayed with a list of the SMS gateway accounts that you have created.
2. To update a gateway account, click __Edit__ for it in the __Actions__ column.
3. On the __Edit SMS Gateway__ page, update the required details. Refer to step 3 and onwards in the [Create an SMS Gateway Account](#Create-an-SMS-Gateway-Account) topic for details.

## Set an SMS Gateway Account as Default

1. In Admin Center, click __SMS Gateway__ at the bottom of the left navigation pane.  
   The __SMS Gateways__ page is displayed with a list of the SMS gateway accounts that you have created.
2. Click __Edit__ for a gateway account in the __Actions__ column.
3. On the __Edit SMS Gateway__ page, select the __Set as default account__ check box to set this gateway account as default, which means that it will be linked with the identity stores created hereafter.
4. Click __Save SMS Gateway__.

## Test SMS Gateway Account Connection

1. In Admin Center, click __SMS Gateway__ at the bottom of the left navigation pane.  
   The __SMS Gateways__ page is displayed with a list of the SMS gateway accounts that you have created.
2. Click __Test Connection__ for a gateway to test whether Directory Manager can successfully send text messages through it.
3. In the __Test SMS Gateway Connection__ dialog box, enter a mobile phone number for receiving a test message. Use International format, with no spaces or special characters. For example: 18588123169, 447079692712, 923225867987.
4. Click __OK__ to send the message to the mobile number.

## Link an SMS Gateway Account to an Identity Store

See the [Link an SMS Gateway Account to an Identity Store](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/security/smsauthentication.md#Link-an-SMS-Gateway-Account-to-an-Identity-Store) topic.

## Delete an SMS Gateway Account

You can delete an SMS gateway account that is not linked with any identity store.

__To delete an account:__

1. In Admin Center, click __SMS Gateway__ at the bottom of the left navigation pane.
2. On the __SMS Gateways__ page, click __Delete__ for a gateway account to delete it.
3. One of the following happens:

   - If the gateway account is not linked with an identity store, a message is displayed, asking you to confirm its deletion. Clicking __Delete__ will delete the account.
   - If the gateway account is linked with an identity store, Directory Manager will not allow you to delete it.

See Also

- [SMS Gateway](/docs/product_docs/groupid/groupid/admincenter/smsgateway/overview.md)
- [Implement and Deploy a Custom SMS Gateway](/docs/product_docs/groupid/groupid/admincenter/smsgateway/implementcustom.md)
