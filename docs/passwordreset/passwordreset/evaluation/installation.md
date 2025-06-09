# Installation

Installation

# Installation

Password Reset has two server components, and an optional client. See the [Password Reset Client](/docs/passwordreset/passwordreset/evaluation/password_reset_client.md) topic for additional information. Both server components can be installed on one server, or they may be installed on separate servers if your web server is in a DMZ. As the evaluation server is not in a DMZ, we will install both components on one server.

The Web Interface is the component that users interact with. It accepts user requests, encrypts them, and sends them to the Password Reset Server. The Password Reset Server is the component that performs requests on behalf of users. It receives requests from the Web Interface, checks the user's credentials, and performs the requested task if the credentials are valid.

![installing_npr](/img/product_docs/passwordreset/passwordreset/evaluation/installing_npr.png)

You only need one Windows 2008 to 2019 server for the evaluation. The server can be a domain controller or a member server.

Follow the steps below to install Password Reset on the server.

__Step 1 –__ Start the Password Reset Setup wizard (APR330.exe).

__Step 2 –__ Click __Next__.

__Step 3 –__ Read the license agreement. Click __I accept the terms of the license agreement__. Click __Next__ if you accept all terms.

__Step 4 –__ Click __Next__, then click __OK__ to install IIS, if asked.

__Step 5 –__ Enter __aprsvc__ in the User Name field.

__Step 6 –__ Enter a secure password in the Password field.

__Step 7 –__ Click __Next__ three times.

__Step 8 –__ Wait for Password Reset to install, then click __Finish__.

__NOTE:__ The Setup wizard creates the aprsvc account and adds it to the Domain Admins group. You can remove the account from the Domain Admins group and grant the required permissions later. See the [Securing Password Reset](/docs/passwordreset/passwordreset/administration/securing_password_reset.md) topic of the Password Reset Administrator's Guide for additional information.

[Open topic with navigation](/docs/default.md#open-topic-with-navigation)
