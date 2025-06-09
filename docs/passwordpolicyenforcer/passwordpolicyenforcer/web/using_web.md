# Launch Password Policy Enforcer Web

The default URL for Password Policy Enforcer Web is: ```http://[server]/ppeweb/```

Where [server] is the name or IP address of the server hosting Password Policy Enforcer Web.

![Web Welcome page](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/web/webwelcome.png)

The default page is called the Welcome page. You can customize the information on this page by editing __en\_default.htm__, or you can bypass this page and send users directly to the Password Change page:

```http://[server]/ppeweb/ppeweb.dll```

You can also include the username and/or domain in the URL:

```http://[server]/ppeweb/ppeweb.dll?username=maryjones&domain=ANIXIS```

___RECOMMENDED:___ Install the SSL Certificate the web server and use the HTTPS protocol if Password Policy Enforcer Web will be used on an unencrypted network. See the [Install an SSL Certificate](/docs/passwordpolicyenforcer/passwordpolicyenforcer/web/securing_web.md#Install-an-SSLCertificate) topic for additional information.

__NOTE:__ A license reminder message is shown occasionally when Password Policy Enforcer Web is used without a license key. Contact Netwrix support if you would like to evaluate Password Policy Enforcer Web without the reminder message.

## Change Password

To change a password with Password Policy Enforcer Web:

__Step 1 –__ Click __Change Password__ on the Welcome page.

![using_ppe_web](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/web/using_ppe_web.png)

__Step 2 –__ Enter a __Username__ and __Domain__, then click __Next__.

![introduction_4](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/web/introduction_4.png)

__Step 3 –__ Enter the __Old Password__, __New Password__, and __Confirm Password__, then click __Next__.

__NOTE:__ Windows increments the bad password count in Active Directory every time a user enters their old password incorrectly. This may trigger a lockout if the Windows account lockout policy is enabled.

## Error Messages

Validation errors are shown in a yellow box below the page instructions. Validation errors are normally caused by invalid user input. They can often be overcome by changing the value of one or more input fields and resubmitting the form.

![using_ppe_web_1](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/web/using_ppe_web_1.png)

Critical errors are shown on their own page. These errors are mostly a result of configuration or system errors. Users can sometimes overcome a critical error by following the instructions in the error message, but most critical errors are beyond the user's control.

![using_ppe_web_2](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/web/using_ppe_web_2.png)

Validation and critical error messages are stored in the HTML templates. You can modify the default messages by editing the templates. See the [Edit HTML Templates](/docs/passwordpolicyenforcer/passwordpolicyenforcer/web/editing_html_templates.md) topic for additional information.
