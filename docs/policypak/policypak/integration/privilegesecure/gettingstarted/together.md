# Getting Started: Netwrix Privilege Secure + Endpoint Policy Manager

__NOTE:__ See the [Netwrix Privilege Secure and the NPS/Endpoint Policy Manager Client](../../../video/leastprivilege/integration/privilegesecureclient.md) video for an overview of Netwrix Privilege Secure + Endpoint Policy Manager better together.

The first policy type to enable theNetwrix Privilege Secure server and Endpoint Policy Manager client integration is a new Least Privilege Manager Global Policy. The three steps below cover a basic configuration.

__Step 1 –__ Enable Netwrix Privilege Secure.

__Step 2 –__ Enable certificate bypass. This is required if you have not yet set up certificates between the client and the server. This setting is recommended for testing but not for production. See the [Netwrix Privilege Secure for Access Management Documentation](https://helpcenter.netwrix.com/category/privilegesecure_accessmanagement) for additional information on Netwrix Privilege Secure certificates and how to deploy them.

__Step 3 –__ Specify the Netwrix Privilege Secure server URL and port. See the [Netwrix Privilege Secure for Access Management Documentation](https://helpcenter.netwrix.com/category/privilegesecure_accessmanagement) for additional information on which port is used. 6500 is the default port.

Other settings in the Global Netwrix Privilege Secure pane are optional and self explanatory.

![getting_started_netwrix_privilege](../../../../../../static/img/product_docs/policypak/policypak/integration/privilegesecure/gettingstarted/getting_started_netwrix_privilege.webp)

Next, you’ll create a Endpoint Policy Manager rule like you did earlier to perform an operation.

Remember:

- The Endpoint Policy Manager part is about matching on an application or process.
- The Netwrix Privilege Secure part is about matching on the Activity type (and name.)

With Endpoint Policy Manager performing the work, you can Elevate an application (if needed), or simply perform the brokering back to the Netwrix Privilege Secure server.

On the __Least Privilege Manager – Configure Netwrix Privilege Secure Access Policy__ page you can check the checkbox and configure the setting for __Resource Based Policy__ or __Credential Based Policy__.

![getting_started_netwrix_privilege_1](../../../../../../static/img/product_docs/policypak/policypak/integration/privilegesecure/gettingstarted/getting_started_netwrix_privilege_1.webp)
