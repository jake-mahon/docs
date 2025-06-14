# Install the Server

__NOTE:__ If you are a SaaS client this topic does not apply. You can skip directly to end user authentication. See the Set up End-User Authentication topic for additional information.

Identity Manager Server can be installed on the same workstation as the database or on a separate workstation. If Identity Manager is installed on a separate workstation, it requires the SQL PowerShell components to function properly.

Please make sure that the server requirements are met before going further. See the [Server](/docs/usercube_saas/usercube/installation-guide/requirements/server-requirements/index.md) topic for additional information.

## Server Working Directory

The server executable is beeing been extracted to the working directory as ```Usercube-Server.exe``` and ```Usercube-Server.dll``` and will enable a user or IIS to run the Identity Manager Server. See the [
Create a Working Directory
](/docs/usercube_saas/usercube/installation-guide/production-ready/working-directory/index.md) topic for additional information.

## Set up the License Key

The license key provided by Identity Manager must be set up in the __appsetting.json__ > __License attribute__. See the [Application Settings](/docs/usercube_saas/usercube/integration-guide/network-configuration/server-configuration/general-purpose/index.md) topic for additional information.

## Create an IIS Website

It is recommended to run the Identity Manager Server as an IIS website.

To install the Identity Manager Server as a Windows service, please jump to Install the Server as a Windows Service. See the Install the Server topic for additional information.

Adding the Identity Manager Server as an IIS website can be achieved with the [Internet Information Services (IIS) Manager](https://www.iis.net) which can be launched with the ```INETMGR.MSC``` command. You need to have an IIS 10.0 or greater.

An IIS website must be created using the [Microsoft guide](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-8.0) and the following parameters:

- Site name: ```Usercube<Organization>``` is the recommended naming convention
- Physical path — ```/<working directory>/Runtime```
- Type — ```http```
- IP address — ```All unassigned```
- Port & Hostname — To access the Identity Manager Server and the UI. Use the hostname and port that has been reserved for Identity Manager.

During installation, the following information guides some of your choices:

- The Identity Manager Server uses an in-process hosting model
- Identity Manager Server's ```web.config``` can be found in the ```Runtime``` folder
- The Identity Manager Server uses .NET

After creation, the following settings are recommended:

- __Application Pool__ > ```Usercube<Organization>``` > __Advanced Settings__ > __General__ > Start Mode set to ```AlwaysRunning```;
- __Application Pool__ > ```Usercube<Organization>``` > __Advanced Settings__ > __Process Model__ > Idle Time-out (minutes) set to ```0``` and Load User Profile set to ```True```;
- __Application Pool__ > ```Usercube<Organization>``` > __Recycling__ > Regular time intervals set to ```0```.

  Recycling the application pool creates a discontinuation in the connection between server and agent, which can disrupt some of Identity Manager's features such as the job scheduler. IIS already recycles the application pool at each setting change, thus Netwrix Identity Manager (formerly Usercube) recommends not using periodic recycling.

The following is mandatory:

- __Application Pool__ > ```Usercube<Organization>``` > __Advanced Settings__ > __General__ > .NET CLR Version > ```No Managed Code```

![IIS Settings](/img/product_docs/usercube/usercube/installation-guide/production-ready/server/iis_settings.webp)

An SSL Certificate should also be set to the IIS Server to perform HTTPS communication with end-users.

## Hosting Bundle

You need to install the dotnet hosting bundle (version 8.0 or higher) to be able to run dotnet application.

## Select a Server Identity

The Identity Manager Server, through the IIS Website, should be assigned a service account with the relevant permissions.

### Create the service account

This section requires using an Active Directory account with sufficient privileges to create service accounts on the domain.

To create a service account you need to perform the following steps:

__Step 1 –__ Log on to a Windows server in the target domain environment. You should use an account with the necessary permissions to create new domain accounts.

__NOTE:__ The target domain is the domain where SQL Server is installed.

__Step 2 –__ Access the _Active Directory User and Computers_ tool with the command ```dsa.mc```.

__Step 3 –__ Select the target domain and Click on __Users__. From the users list, right-click to select __New__ > __User__.

__Step 4 –__ Choose a mnemonic _First Name_ for the Identity Manager Server, as for example ```UsercubeContosoServer```, and click __Next__.

_Remember,_  the down-level log on name in the format ```DOMAIN/userName```,.as for example ```CONTOSO/UsercubeContosoServer```.

__Step 5 –__ Set a password and remember it for later, check the boxes __User cannot change password__ and __Password never expires__.

This newly created service account is a domain account and will be used as an IIS identity.

__NOTE:__ You can go further and use Managed Service Account to avoid dealing with the service account password update yourself and let Windows worry about it. This feature requires installing Identity Manager on Windows Server 2016 or later, and using an Active Directory with a forest level set to Windows Server 2016 or later.

### Set an IIS identity

The following implies that a custom service account has already been created for the Identity Manager Server.

To set an IIS identity you need to perform the following steps:

__Step 1 –__ Open the IIS Manager (```INETMGR.MSC```) and then the __Application Pools__ node underneath the machine node.

__Step 2 –__ Select the ```Usercube/<Organization>``` application pool and right-click and select __Advanced Settings__.

__Step 3 –__ In the __Process Model__ section, on the __Identity__ list item, click on the three dots to open the __Application Pool Identity__ dialog.

__Step 4 –__ Select the __Custom Account__ radio button and click on __Set__ and enter the previously created Service Account credentials:

- User name in the format ```DOMAIN/userName``` that you have previously written down
- Password, previously remembered

__Step 5 –__ Click __OK__. You're all set.

The Identity Manager Server IIS site will now use this identity to access the database and the working directory.

## Set-up Permissions

The Server permissions include the database and working directory.

### Set- up the database permissions

The service account used by the Server to access the database needs the following database-level roles in SQL Server:

- ```Public```
- ```Dbowner```

And the ```Administer bulk operations``` server-level role.

This guide will show you how to perform these operations using SQL Server Management Studio:

__Step 1 –__ Open SQL Server Management Studio (SSMS) and log in to access the server on which runs the Identity Manager Database with an account member of the __sysadmin__ or __securityadmin__ server-level role.

![New Login](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/newlogin.webp)

__Step 2 –__ Expand the __Security__ and __Login__ nodes, and look for the Identity Manager service account in the list.

If you cannot find the service account click on the __Login__ node, right-click and select __New__ > __Login__.

__Step 3 –__ On the __General__ page, enter the service account login name in the down-level logon format, such as ```CONTOSO/UsercubeContosoServer```.
If you're not sure about the correct spelling of your service account or domain, you can search for it using the search window. From the __Login__ node, right-click and select __New login__ > __Login name__ > __Search__.

__Step 4 –__ Choose either__Windows authentication__ if you chose to connect the server to the database with a Windows service account (Integrated Security=SSPI in the connection string) or a __SQL Server authentication__ for a SQL Server account (if you set up the connection string with a login/password). In the SQL case, fill in the same password in the form as in the connection string. You should now see the newly created login in the Login list.

__Step 5 –__ From the __Login__ node, right-click the newly created login and select __Properties__ then go to the __Server Roles__ page on the left and make sure __public__ is checked.

__Step 6 –__ Go to __User Mapping__and make sure ```Usercube/<Organization/>``` is checked (top panel), as well as __db\_owner__ and __public__ (bottom panel).

![Bulk](/img/product_docs/usercube/usercube/installation-guide/production-ready/server/bulk.webp)

__Step 7 –__ Right-click the __Server__ root node and select __Properties__, and in the __Permissions__ tab, select the service account or group name.

__Step 8 –__ Grant the __Administer bulk operations__ permission. and confirm with __OK__.

Identity Manager Server now has the required permissions to access the database.

### Set the working directory permissions

The Identity Manager Server needs specific permissions on the working directory to run, read synchronization output, and write provisioning orders. See the [Server](/docs/usercube_saas/usercube/installation-guide/requirements/server-requirements/index.md) topic for additional information.

Up to four folders have to be considered:

- The working directory
- The runtime directory, usually ```C:/Usercube<Organization>/Runtime```
- The data collection directory, usually ```C:/Usercube<Organization>/Temp```
- The provisioning orders directory, usually ```C:/Usercube<Organization>/Temp``` (same as for the data collection directory).

See the [
Create a Working Directory
](/docs/usercube_saas/usercube/installation-guide/production-ready/working-directory/index.md) and [Application Settings](/docs/usercube_saas/usercube/integration-guide/network-configuration/agent-configuration/appsettings/index.md) topics for additional information.

The following steps can be performed for each of the relevant directories.

First, let's check what permissions the service account already has.

To do so go to the working directory parent folder, right-click the working directory, select __Properties__ and then select __Security__.

From there, you have two choices.

The Identity Manager Server service account that was chosen previously:

- Already has or belongs to a group that already has the needed permissions. There is nothing more to do
- Is missing one of the needed permissions and you need to perform the steps underlined below:

  __Step 1 –__ Click on __Edit__ and then on __Add__.

  ![Object Names](/img/product_docs/usercube/usercube/installation-guide/production-ready/server/enter-the-object-names-to-select.webp)

  __Step 2 –__ In the __Enter the object names to select__ textbox, enter the service account name in the down-level log on format, such as ```CONTOSO/UsercubeContosoServer```, then click __OK__.

  __Step 3 –__ Select the newly added user name in the __Group or user names__ panel at the top of the window.

  __Step 4 –__ Check the __Allow__ column for the relevant permissions. Check the __Deny__ column for the others, and then __OK__.

The working directory permissions are all set.

The same steps have to be performed on the runtime, the data collection and the provisioning orders directories. See the [
Create a Working Directory
](/docs/usercube_saas/usercube/installation-guide/production-ready/working-directory/index.md) and [Application Settings](/docs/usercube_saas/usercube/integration-guide/network-configuration/agent-configuration/appsettings/index.md) topics for additional information.

## Encryption and Authentication Key Pairs

The Identity Manager Server requires an RSA-2048 encryption key pair to perform various encryption operations, such as source, configuration, or log file encryptions. Identity Manager's Identity Server also needs an RSA-2048 authentication key pair for end-user authentication purposes.

These certificates don't need to be integrated into the target organization's Public Key Infrastructure (PKI) and don't require an expiration date. They're only relevant to specific Identity Manager temporary data and can be changed at any time.

Each RSA key pair, as in an [X.509](https://en.wikipedia.org/wiki/X.509) public key certificate and a private key, can be stored one of two ways:

- As a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive (also called Personal Information Exchange file or ```.pfx``` file) stored in the Server's host file system. The file contains both the public key certificate and the private key.
- As a certificate from a Windows' certificate store identified by SubjectDistinguishedName or by Thumbprint. The Windows certificate also contains both the public key certificate and the private key. This is the recommended method.

The key pairs can be generated with tools such as [OpenSSL](https://www.openssl.org/docs/manmaster/man1/req.html) or Microsoft's [New-SelfSignedCertificate](https://docs.microsoft.com/en-us/powershell/module/pkiclient/new-selfsignedcertificate?view=win10-ps), and [pvk2pfx tool](https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/pvk2pfx?redirectedfrom=MSDN).

Here's an example showing how to generate a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive (```UsercubeContoso.pfx```) bundling a public key certificate (```usercubecontoso.cert```) and an RSA-2048 private key (```usercubecontoso.key```) with OpenSSL, with a 50-year expiration date:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
1.  
openssl req -x509 -newkey rsa:2048 -keyout usercubecontoso.key -out usercubecontoso.cert -days 18250  
2.   
openssl pkcs12 -export -out UsercubeContoso.pfx -inkey usercubecontoso.key -in usercubecontoso.cert  

```

Public key certificates can also be bought from trusted certificate providers and bundled with a private key into a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive using step __2__ in the frame above.

### Generate and use an encryption key pair

This is the key pair used to perform various encryption operations, such as source, configuration, or log file encryptions.

__Step 1 –__ Generate a key pair using the OpenSSL method.

__Step 2 –__ Store the key pair as a ```.pfx``` file or use the Windows [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-view-certificates-with-the-mmc-snap-in#certificate-store) (recommended).

__Step 3 –__ Link the generated certificate to Identity Manager.

### Generate and use an identity server key pair

This is the key pair used by the Identity Server for end-user authentication purposes.

__Step 1 –__ Generate a key pair using the OpenSSL method.

__Step 2 –__ Store the key pair as a .```pfx``` file or use the Windows [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-view-certificates-with-the-mmc-snap-in#certificate-store) (recommended).

__Step 3 –__ Link the generated certificate to Identity Manager.

#### Certificate as a plain file

The following parameters are used to link the file to Identity Manager in the ```IdentityServer``` section.

[PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive can be password protected, hence the ```X509KeyFilePassword``` attribute.

Storing a ```.pfx``` file password in plain text in a production environment is strongly discouraged. The password should always be encrypted using the Usercube-Protect-CertificatePassword tool. See the [
Usercube-Protect-CertificatePassword
](/docs/usercube_saas/usercube/integration-guide/executables/references/protect-certificatepassword/index.md) topic for additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
appsettings.json  
{  
  ...  
  "IdentityServer": {  
      "X509KeyFilePath": "./UsercubeContoso.pfx",  
      "X509KeyFilePassword": "eff@%fmel/"  
  }  
  ...  
}
```

#### Certificate in the certificate store

The certificate can be stored in the certificate store instead of the file system. This is the recommended method.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
appsettings.json  
{  
  ...  
  "IdentityServer": {  
      "X509SubjectDistinguishedName":"UsercubeContoso",  
      "X509StoreLocation": "LocalMachine",  
      "X509StoreName": "AuthRoot"  
    }  
  ...  
}
```

## Connect the Server to the Database

Now that the Identity Manager Server has been provided with a service account with the right permissions, let's finalize the setup.

The connection between the Server and the Database requires choosing an authentication method: [Windows Authentication](https://docs.microsoft.com/en-us/sql/relational-databases/security/choose-an-authentication-mode?view=sql-server-ver15#windows-authentication) or SQL Server authentication. See the [
Connection to the Database
](/docs/usercube_saas/usercube/integration-guide/network-configuration/server-configuration/database-connection/index.md) and [
Usercube-Protect-CertificatePassword
](/docs/usercube_saas/usercube/integration-guide/executables/references/protect-certificatepassword/index.md) topics for additional information. Windows authentication will require the IIS identity to be set to the custom Windows service account used to log in to the Identity Manager's Windows Server session. SQL authentication will work with both the _built-in_ app pool identity and a custom service account. This authentication method will write the login and password directly in the connection string.

```Runtime/appsettings.json``` is a technical configuration file that enables you to set up the connection between the Server and the Database through the ConnectionString attribute. See the [Network Configuration](/docs/usercube_saas/usercube/integration-guide/network-configuration/index.md) topic for additional information.

The connection string is set up in the ```Runtime/appsettings.json``` configuration file which can be edited with any text editor, such as [Notepad++](https://notepad-plus-plus.org/downloads/).

If the SQL Server is hosted on Azure, you should use the AzureCredentials setting before going further.

In the```Runtime/appsettings.json``` file, find or write the ```ConnectionString``` attributes following the examples shown below:

The first example sets a connection string using the Windows authentication (```Integrated Security=SSPI```) to connect, on a local SQL Server system (```source=.```), to the ```UsercubeContoso``` database. See the

The service account used by the Server to access the Database is either:

- A Windows account if the connection string was set up using ```Integrated Security=SSPI```.
- A SQL Server account if the connection string was set up with a login/password.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
  
appsettings.json  
{  
...  
"ConnectionString": "data source=.;Database=UsercubeContoso;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"  
...  
}  

```

The second example sets a connection string using the SQL Server authentication. ```CONTOSO/UsercubeContosoServer``` has been set as the Identity Manager Server IIS website identity.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
  
appsettings.json  
{  
...  
"ConnectionString": "data source=.;Database=Usercube;User Id=CONTOSO/UsercubeContosoServer;Password=myPassword;Min Pool Size=10;encrypt=false;"  
...  
}  

```

___RECOMMENDED:___ SQL Server authentication stores plain text credentials in the configuration file. This is strongly discouraged. To avoid storing plain text credentials, you should always strive to use Windows authentication or encrypt sensitive setting values such as the connection string.

## SSL Certificate

The Identity ManagerServer requires the use of an SSL Certificate trusted by all the target end-users' browsers. The standard setup is to use a certificate signed by the target organization's PKI root Certificate Authority and import the certificate into the end-user's Windows Store.

This can be achieved using the [Microsoft Management Console (MMC)](https://en.wikipedia.org/wiki/Microsoft_Management_Console). See the [View certificates with the MMC](https://learn.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-view-certificates-with-the-mmc-snap-in) for additional information.

## DNS

Your organization's DNS needs to be updated according to the requirements indicated in Hostname and DNS. See the [Server](/docs/usercube_saas/usercube/installation-guide/requirements/server-requirements/index.md) topic for additional information.

## Test Your Installation

In order to test your installation you must:

__Step 1 –__ Make sure the IIS site is running.

__Step 2 –__ Go to the following URL with a browser: ```<hostname>:<port>/hc``` with the hostname and port set up in Create an IIS website. See the Install the Server topic for additional information.

__Step 3 –__ The Identity Manager Server is trying to access the Database. If it succeeds, the message __Healthy__ should be displayed in the browser.

## Configure the Starting Mode in IIS (optional)

This step is important if the scheduler is enabled. IIS starts the Identity Manager Server only if an incoming http request is made on the server and the scheduler is not launched until the Identity Manager Server is started. Because of that, you need to carefully set up the starting mode of IIS to force the starting of the Identity Manager Server.

The Identity Manager Server warm up is done using the ```<applicationInitialization>``` element in the web.config file, the configuration is described in the [Microsoft documentation](https://learn.microsoft.com/en-us/iis/get-started/whats-new-in-iis-8/iis-80-application-initialization).

You need to:

- Enable the __Application Initialization__ feature
- Modify the __applicationHost.config__ file to set the __startMode__ of the application pool as __AlwaysRunning__. You also need to set the preloadEnabled of your application set to true. It is advised to backup the __applicationHost.config__ file when doing this step to prevent mistakes.
- Double check that the following section is set in your web.config file, in the section system.webServer:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
<applicationInitialization doAppInitAfterRestart="true">  <add initializationPage="/"></applicationInitialization>  

```

Once done, you need to check that the configured jobs are launched via the Identity Manager's scheduler without having to manually issue a request on the Identity Manager Server.

If this is not correctly configured, any restart of your IIS or application pool could prevent jobs from being launched.

## Set up End-User Authentication

The next step consists in setting up one or more authentication methods for end-users. You may choose one or several external authentication providers among the following:

- [OpenId Connect](https://openid.net/connect/)
- [WS-Federation](http://docs.oasis-open.org/wsfed/federation/v1.2/ws-federation.html)
- [OAuth](https://tools.ietf.org/html/rfc6749)
- [SAML2](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html)
- [Integrated Windows Authentication (IWA)](https://docs.microsoft.com/en-us/aspnet/web-api/overview/security/integrated-windows-authentication)

Everything you need to know about setting up authentication is provided in the Technical Configuration Guide. See the [
End-User Authentication](/docs/usercube_saas/usercube/integration-guide/network-configuration/server-configuration/end-users-authentication/index.md) topic for additional information.

## What's Next?

Install the Agent is the next step of the process. See the [
Install the Agents](/docs/usercube_saas/usercube/installation-guide/production-ready/agent/index.md) topic for additional information.
