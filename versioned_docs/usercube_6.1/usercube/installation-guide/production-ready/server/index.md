# Install the Server

Usercube Server can be installed on the same workstation as the database or on a separate workstation. If you are installing Usercube within the SaaS offering, this section is moot. You can skip directly to [Set up End-User Authentication](#set-up-end-user-authentication).

Please make sure that the [server requirements](/versioned_docs/usercube_6.1/usercube/installation-guide/requirements/server-requirements/index.md) are met before going further.

## Server Working Directory

In [Create a Working Directory](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/working-directory/index.md), the server executable has been extracted to the [working directory](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/working-directory/index.md) as ```Usercube-Server.exe``` and ```Usercube-Server.dll``` and will enable a user or IIS to run the Usercube Server.

## Set up the License Key

The license key provided by Usercube must be set up in the [appsetting.json > License](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/server-configuration/general-purpose/index.md) attribute.

## Create an IIS Website

It is recommended to run the Usercube Server as an IIS website.

To install the Usercube Server as a Windows service, please jump to [Install the Server as a Windows Service].

Adding the Usercube Server as an IIS website can be achieved with the [Internet Information Services (IIS) Manager](https://www.iis.net) which can be launched with the ```INETMGR.MSC``` command. You need to have an IIS 10.0 or greater.

An IIS website must be created using the [Microsoft guide](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-8.0) and the following parameters:

__1.__ Site name: ```Usercube<Organization>``` is the recommended naming convention.

__2.__ Physical path: ```/<working directory>/Runtime```

__3.__ Type: ```http```

__4.__ IP address: ```All unassigned```

__5.__ Port & Hostname: To access the Usercube Server and the UI. Use the hostname and port that has been reserved for Usercube.

During installation, the following information guides some of your choices:

- The Usercube Server uses an in-process hosting model.
- Usercube Server's ```web.config``` can be found in the ```Runtime``` folder.
- The Usercube Server uses .Net.

After creation, the following settings are recommended:

- __Application Pool__ > ```Usercube<Organization>``` > __Advanced Settings__ > __General__ > Start Mode set to ```AlwaysRunning```;
- __Application Pool__ > ```Usercube<Organization>``` > __Advanced Settings__ > __Process Model__ > Idle Time-out (minutes) set to ```0``` and Load User Profile set to ```True```;
- __Application Pool__ > ```Usercube<Organization>``` > __Recycling__ > Regular time intervals set to ```0```.

  Recycling the application pool creates a discontinuation in the connection between server and agent, which can disrupt some of Usercube's features such as the job scheduler. IIS already recycles the application pool at each setting change, thus NETWRIX recommends not using periodic recycling.

The following is [mandatory](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-8.0#mandatory):

- __Application Pool__ > ```Usercube<Organization>``` > __Advanced Settings__ > __General__ > .NET CLR Version > ```No Managed Code```

To sum up IIS settings:

![IIS Settings](/img/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/server/iis_settings.png)

An SSL Certificate should also be [set to the IIS Server](https://docs.microsoft.com/en-US/iis/manage/configuring-security/how-to-set-up-ssl-on-iis) to perform HTTPS communication with end-users.

## Hosting Bundle

You need to install the [dotnet hosting bundle](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) (version 8.0 or higher) to be able to run dotnet application.

## Select a Server Identity

The Usercube Server, through the IIS Website, should be assigned a [service account with the relevant permissions](/versioned_docs/usercube_6.1/usercube/installation-guide/requirements/server-requirements/index.md).

### Create the service account

This section requires using an Active Directory account with sufficient privileges to create service accounts on the domain.

1. Log on to a Windows server in the target domain environment. You should use an account with the necessary permissions to create new domain accounts.

   The target domain is the domain where SQL Server is installed.
2. Access the _Active Directory User and Computers_ tool with the command ```dsa.mc```.
3. Select the target domain.
4. Click __Users__.
5. From the users list, right-click to select __New__ > __User__.
6. Choose a mnemonic _First Name_ for the Usercube Server. Example: ```UsercubeContosoServer```.
7. Remember for later, the down-level logon name in the format ```DOMAIN/userName```. Example: ```CONTOSO/UsercubeContosoServer```.
8. Click __Next__.
9. Choose a password. Remember it for later.
10. Check __User cannot change password__.
11. Check __Password never expires__.

This newly created service account is a domain account and will be used as an IIS identity.

You can go further and use [Managed Service Account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts) to avoid dealing with the service account password update yourself and let Windows worry about it. This feature requires installing Usercube on Windows Server 2016 or later, and using an Active Directory with a forest level set to Windows Server 2016 or later.

### Set an IIS identity

The following implies that a [custom service account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts) has already been created for the Usercube Server.

1. Open the IIS Manager (```INETMGR.MSC```).
2. Open the __Application Pools__ node underneath the machine node.
3. Select the ```Usercube/<Organization>``` application pool.
4. Right-click and select __Advanced Settings__.
5. In the __Process Model__ section, on the __Identity__ list item, click on the three dots to open the __Application Pool Identity__ dialog.
6. Select the __Custom Account__ radio button and click on __Set__.
7. Enter the previously created Service Account credentials:
   - User name in the format ```DOMAIN/userName``` that you have previously written down.
   - Password, previously remembered.
8. Click __OK__. You're all set.

The Usercube Server IIS site will now use this identity to access the database and the working directory.

## Set the Server Permissions

### Set the database permissions

The service account used by the Server to access the database needs the following database-level roles in SQL Server:

- ```public```
- ```dbowner```

And the following server-level role:

- ```Administer bulk operations```

This guide will show you how to perform these operations using SQL Server Management Studio.

1. Open SQL Server Management Studio (SSMS).
2. Log in to access the server on which runs the Usercube Database with an account member of the __sysadmin__ or __securityadmin__ server-level role.
3. Expand the __Security__ node.
4. Expand the __Login__ node.
5. Look for the Usercube service account in the list.
6. If you cannot find the service account:

   - From the __Login__ node, right-click and select __New__ > __Login__.

     ![New Login](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/application/newlogin.png)
   - On the __General__ page, enter the service account login name in the down-level logon format, such as ```CONTOSO/UsercubeContosoServer```.
     If you're not sure about the correct spelling of your service account or domain, you can search for it using the search window. From the __Login__ node, right-click and select __New login__ > __Login name__ > __Search__.
   - Then, choose either__Windows authentication__ if you chose to connect the server to the database with a Windows service account (Integrated Security=SSPI in the connection string) or a __SQL Server authentication__ for a SQL Server account (if you set up the connection string with a login/password). In the SQL case, fill in the same password in the form as in the connection string. You should now see the newly created login in the Login list.
7. From the __Login__ node, right-click the newly created login and select __Properties__.
8. Go to the __Server Roles__ page on the left.
9. Make sure __public__ is checked.
10. Go to __User Mapping__.
11. Make sure ```Usercube/<Organization/>``` is checked (top panel), as well as __db\_owner__ and __public__ (bottom panel).
12. Right-click the __Server__ root node and select __Properties__.
13. In the __Permissions__ tab, select the service account or group name set up or found in Step __6__ or __7__.
14. Grant the __Administer bulk operations__ permission.

    ![Bulk](/img/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/server/bulk.png)
15. Confirm with __OK__.

Usercube Server now has the required permissions to access the database.

### Set the working directory permissions

The Usercube Server needs [specific permissions](/versioned_docs/usercube_6.1/usercube/installation-guide/requirements/server-requirements/index.md) on the working directory to run, read synchronization output, and write provisioning orders.

Up to four folders have to be considered:

- The [working directory](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/working-directory/index.md)
- The [runtime](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/working-directory/index.md) directory, usually ```C:/Usercube<Organization>/Runtime```
- The [data collection](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/agent-configuration/appsettings/index.md) directory, usually ```C:/Usercube<Organization>/Temp```
- The [provisioning orders](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/agent-configuration/appsettings/index.md) directory, usually ```C:/Usercube<Organization>/Temp``` (same as for the data collection directory).

The following steps can be performed for each of the relevant directories.

First, let's check what permissions the service account already has.

1. Go to the working directory parent folder.
2. Right-click the working directory.
3. Select __Properties__.
4. Select __Security__.

From there, you have two choices.

The Usercube Server service account that was chosen in the previous step:

- Already has or belongs to a group that already has the needed permissions. There is nothing more to do.
- Is missing one of the needed permissions:

  1. Click on __Edit__.
  2. Click on __Add__.
  3. In the __Enter the object names to select__ textbox, enter the service account name in the down-level logon format, such as ```CONTOSO/UsercubeContosoServer```.
  4. Click __OK__.
  5. Select the newly added user name in the __Group or user names__ panel at the top of the window.

     ![Object Names](/img/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/server/enter-the-object-names-to-select.png)
  6. Check the ```Allow``` column for the [relevant permissions](/versioned_docs/usercube_6.1/usercube/installation-guide/requirements/server-requirements/index.md). Check the ```Deny``` column for the others.
  7. Apply __OK__.

The working directory permissions are all set.

The same steps have to be performed on the [runtime](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/working-directory/index.md), the [data collection](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/agent-configuration/appsettings/index.md) and the [provisioning orders](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/agent-configuration/appsettings/index.md) directories.

## Encryption and Authentication Key Pairs

The Usercube Server requires an [RSA-2048 encryption key pair](https://en.wikipedia.org/wiki/Public-key_cryptography) to perform various encryption operations, such as source, configuration, or log file encryptions. Usercube's Identity Server also needs an [RSA-2048 authentication key pair](https://en.wikipedia.org/wiki/Public-key_cryptography) for end-user authentication purposes.

These certificates don't need to be integrated into the target organization's Public Key Infrastructure (PKI) and don't require an expiration date. They're only relevant to specific Usercube temporary data and can be changed at any time.

Each RSA key pair, as in an [X.509](https://en.wikipedia.org/wiki/X.509) public key certificate and a private key, can be stored one of two ways:

- As a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive (also called [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files) or ```.pfx``` file) stored in the Server's host file system. The file contains both the public key certificate and the private key.
- As a certificate from a Windows' [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store) identified by _SubjectDistinguishedName_ or by _Thumbprint_. The Windows certificate also contains both the public key certificate and the private key. This is the recommended method.

The key pairs can be generated with tools such as [OpenSSL](https://www.openssl.org/docs/manmaster/man1/req.html) or Microsoft's [New-SelfSignedCertificate](https://docs.microsoft.com/en-us/powershell/module/pkiclient/new-selfsignedcertificate?view=win10-ps)and[pvk2pfx tool](https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/pvk2pfx?redirectedfrom=MSDN).

Here's an example showing how to generate a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive (```UsercubeContoso.pfx```) bundling a public key certificate (```usercubecontoso.cert```) and an RSA-2048 private key (```usercubecontoso.key```) with OpenSSL, with a 50-year expiration date:

                    ```

openssl req -x509 -newkey rsa:2048 -keyout usercubecontoso.key -out usercubecontoso.cert -days 18250

```
                

                    ```

openssl pkcs12 -export -out UsercubeContoso.pfx -inkey usercubecontoso.key -in usercubecontoso.cert

```
                

Public key certificates can also be bought from trusted certificate providers and bundled with a private key into a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive using step __2__ in the frame above.

### Generate and use an encryption key pair

This is the key pair used to perform various encryption operations, such as source, configuration, or log file encryptions.

1. Generate a key pair using the OpenSSL method.
2. Store the key pair as a ```.pfx``` file or use the Windows [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-view-certificates-with-the-mmc-snap-in#certificate-store) (recommended) .
3. Link the generated certificate to Usercube (see [```appsettings.json > EncryptionCertificate```](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/server-configuration/general-purpose/index.md)).

### Generate and use an identity server key pair

This is the key pair used by the Identity Server for end-user authentication purposes.

1. Generate a key pair using the OpenSSL method.
2. Store the key pair as a .```pfx``` file or use the Windows [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-view-certificates-with-the-mmc-snap-in#certificate-store) (recommended).
3. Link the generated certificate to Usercube (see [```appsettings.json > IdentityServer```](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/server-configuration/end-users-authentication/index.md)).

#### Certificate as a plain file

The following parameters are used to link the file to Usercube in the ```IdentityServer``` section.

[PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive can be [password protected](https://www.openssl.org/docs/man1.1.0/man1/openssl.html#password-protected), hence the ```X509KeyFilePassword``` attribute.

Storing a ```.pfx``` file password in plain text in a production environment is strongly discouraged. The password should always be encrypted using the [Usercube-Protect-CertificatePassword tool](/versioned_docs/usercube_6.1/usercube/integration-guide/executables/references/protect-certificatepassword/index.md).

                    ```

                        appsettings.json
{
  ...
  "IdentityServer": {
      "X509KeyFilePath": "./UsercubeContoso.pfx",
      "X509KeyFilePassword": "eff@�%fmel/"
  }
  ...
}
```
                

#### Certificate in the certificate store

The certificate can be stored in the certificate store instead of the file system. This is the recommended method.

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

Now that the Usercube Server has been provided with a service account with the right permissions, let's finalize the setup.

The connection between the Server and the Database requires choosing an [authentication method](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/server-configuration/database-connection/index.md): [Windows Authentication](https://docs.microsoft.com/en-us/sql/relational-databases/security/choose-an-authentication-mode?view=sql-server-ver15#windows-authentication) or [SQL Server authentication](https://docs.microsoft.com/en-us/sql/relational-databases/security/choose-an-authentication-mode?view=sql-server-ver15#sql-server-authentication). Windows authentication will require the IIS identity to be set to the custom Windows service account used to log in to the Usercube's Windows Server session. SQL authentication will work with both the _built-in_ app pool identity and a custom service account. This authentication method will write the login and password directly in the connection string.

```Runtime/appsettings.json``` is a [technical configuration](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/index.md) file that enables you to set up the connection between the Server and the Database through the [ConnectionString](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/server-configuration/database-connection/index.md) attribute.

The connection string is set up in the ```Runtime/appsettings.json``` configuration file which can be edited with any text editor, such as [Notepad++](https://notepad-plus-plus.org/downloads/).

If the SQL Server is hosted on Azure, you should use the [AzureCredentials](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/server-configuration/database-connection/index.md#azurecredentials) setting before going further.

In the```Runtime/appsettings.json``` file, find or write the ```ConnectionString``` attributes following the examples shown below:

The __first example__ sets a connection string using the Windows authentication (```Integrated Security=SSPI```) to connect, on a local SQL Server system (```source=.```), to the ```UsercubeContoso``` database created in [Install the Database](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/database/index.md).

The service account used by the Server to access the Database is either:

- A Windows account if the connection string was set up using ```Integrated Security=SSPI```.
- A SQL Server account if the connection string was set up with a login/password.

appsettings.json
```

{
...
"ConnectionString": "data source=.;Database=UsercubeContoso;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
...
}

```

The __second example__ sets a connection string using the SQL Server authentication. ```CONTOSO/UsercubeContosoServer``` has been set as the Usercube Server IIS website identity.

appsettings.json
```

{
...
"ConnectionString": "data source=.;Database=Usercube;User Id=CONTOSO/UsercubeContosoServer;Password=myPassword;Min Pool Size=10;encrypt=false;"
...
}

```

__SQL Server authentication__ stores plain text credentials in the configuration file. This is strongly discouraged. To avoid storing plain text credentials, you should always strive to use __Windows authentication__ or encrypt sensitive setting values such as the connection string.

## SSL Certificate

The Usercube Server requires the use of an SSL Certificate trusted by all the target end-users' browsers. The standard setup is to use a certificate signed by the target organization's PKI root Certificate Authority and import the certificate into the end-user's Windows Store.

This can be achieved using the [Microsoft Management Console (MMC)](https://en.wikipedia.org/wiki/Microsoft_Management_Console).

1. Open the MMC (__Start__ > __Run__ > __MMC__).
2. Click on __File__ > __Add/Remove Snap In__.
3. Double-click on __Certificates__.
4. Click on __Computer Account.__
5. Click on __Local Computer__ > __Finish__.
6. Click __OK__.

   The Snap-in window closes.
7. Go to __Certificates__ > __Personal__ > __Certificates__.
8. Click __```+```__.
9. Right-click __Certificates__.
10. Go to __All Tasks__ > __Import__.
11. Click __Next__.
12. Click __Browse__.
13. Browse to the SSL Certificate you want to use and click __Next__.
14. Select __Automatically select the certificate store based on the type of certificate.__
15. Click __Finish__ and __OK__.

    The certificate is now visible in __IIS__ > __Server Certificates__.

## DNS

Your organization's DNS needs to be updated according to the requirements indicated in [Hostname and DNS](/versioned_docs/usercube_6.1/usercube/installation-guide/requirements/server-requirements/index.md#hostname-and-dns).

## Test Your Installation

1. Make sure the IIS site is running.
2. Go to the following URL with a browser: ```<hostname>:<port>/hc``` with the hostname and port set up in [Create an IIS website](#create-an-iis-website).
3. The Usercube Server is trying to access the Database. If it succeeds, the message "_Healthy_" should be displayed in the browser.

## Configure the Starting Mode in IIS (optional)

This step is important if the scheduler is enabled. IIS starts the Usercube Server only if an incoming http request is made on the server and the scheduler is not launched until the Usercube Server is started. Because of that, you need to carefully set up the starting mode of IIS to force the starting of the Usercube Server.

The Usercube Server warm up is done using the ```<applicationInitialization>``` element in the web.config file, the configuration is described here:
[https://docs.microsoft.com/en-us/iis/get-started/whats-new-in-iis-8/iis-80-application-initialization](https://docs.microsoft.com/en-us/iis/get-started/whats-new-in-iis-8/iis-80-application-initialization)

You need to:

- Enable the __Application Initialization__ feature
- Modify the __applicationHost.config__ file to set the _startMode_ of the application pool as _AlwaysRunning_. You also need to set the _preloadEnabled_ of your application set to _true_. It is advised to backup the __applicationHost.config__ file when doing this step to prevent mistakes
- Double check that the following section is set in your _web.config_ file, in the section _system.webServer_:

```xml
<applicationInitialization doAppInitAfterRestart="true">
  <add initializationPage="/" />
</applicationInitialization>
```

Once done, you need to check that the configured jobs are launched via the Usercube's scheduler without having to manually issue a request on the Usercube Server.

If this is not correctly configured, any restart of your IIS or application pool could prevent jobs from being launched.

## Set up End-User Authentication

The next step consists in setting up one or more authentication methods for end-users. You may choose one or several external authentication providers among the following:

- [OpenIdConnect](https://openid.net/connect/)
- [WS-Federation](http://docs.oasis-open.org/wsfed/federation/v1.2/ws-federation.html)
- [OAuth](https://tools.ietf.org/html/rfc6749)
- [SAML2](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html)
- [Integrated Windows Authentication (IWA)](https://docs.microsoft.com/en-us/aspnet/web-api/overview/security/integrated-windows-authentication)

Everything you need to know about setting up authentication is provided in the [Technical Configuration Guide](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/server-configuration/end-users-authentication/index.md).

## What's Next?

[Install the Agent](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/agent/index.md) is the next step of the process.
