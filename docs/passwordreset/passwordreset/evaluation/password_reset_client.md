# Password Reset Client

Password Reset Client

# Password Reset Client

The Password Reset Client allows users to securely reset their password or unlock their account from the Windows Logon and Unlock Computer screens. Users click __Reset Password__ to access the Password Reset system.

![the_password_reset_client_1](/img/product_docs/passwordreset/passwordreset/evaluation/the_password_reset_client_1.png)

The Password Reset Client does not modify any Windows system files.

The Password Reset Client is normally deployed with Group Policy, Microsoft System Center Configuration Manager, or some other software deployment tool. It takes about 15 minutes to set up an automated deployment, so we will install the PRC manually for the evaluation.

## Installing the PRC

Follow the steps below to install the PRC.

__Step 1 –__ Click __Start__ > __Netwrix Password Reset__ > __Client Software__.

__Step 2 –__ Double-click __NPRClt330.msi__.

__Step 3 –__ Click __Next__.

__Step 4 –__ Read the license agreement. Click __I accept the license agreement__. Click __Next__ if you accept all the terms.

__Step 5 –__ Click __Next__.

__Step 6 –__ Once the Password Reset Client is installed, click __Finish__.

__Step 7 –__ Click __Yes__ is asked to restart the computer.

You can also install the Password Reset Client on any client computers that are being used for the evaluation.

## Configuring the PRC

The Password Reset Client is normally configured with an Active Directory administrative template. This allows you to centrally configure all computers in the domain. It takes about 15 minutes to set up the Administrative Template, so we will configure the PRC by importing the settings into the registry for the evaluation.

__Step 1 –__ Download the sample configuration from the following link: [https://www.netwrix.com/download/PRC\_Config.zip](https://www.netwrix.com/download/PRC_Config.zip)

__Step 2 –__ Extract __PRC\_Config.reg__ from the .zip file.

__Step 3 –__ Right-click __PRC\_Config.reg__, then click __Edit__.

![the_password_reset_client_1_1](/img/product_docs/passwordreset/passwordreset/evaluation/the_password_reset_client_1_1.png)

__Step 4 –__ Replace __127.0.0.1__ in the .reg file with the IP address or hostname of your evaluation server.

__NOTE:__ If you are only testing the Password Reset Client on the evaluation server, then leave it set to 127.0.0.1. The IP address appears on two lines. You must change both lines.

__Step 5 –__ Press __CTRL__ + __S__ to save your changes, then close __Notepad__.

__Step 6 –__ Double-click __PRC\_Config__ to import the settings into the registry. Click __Yes__ when asked to confirm. Repeat this step on any client computers being used for the evaluation.

__NOTE:__ You must import the configuration settings into the registry whenever you edit PRC\_Config.reg, otherwise the old settings will remain.

## Using the PRC

You can access the Password Reset Client from the Windows Logon and Unlock Computer screens. Click the __Reset password...__ command link to display the Password Reset menu.

[Open topic with navigation](/docs/default.md#Open-topic-with-navigation)
