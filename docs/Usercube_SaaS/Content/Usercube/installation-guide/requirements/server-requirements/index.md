---
sidebar_position: 22
title: Server
---

# Server

This section identifies software requirements for Identity Manager's server.

## License Key

The server requires a license key provided by Netwrix Identity Manager (formerly Usercube). See the [Application Settings](../../../integration-guide/network-configuration/server-configuration/general-purpose/index "Application Settings") topic for additional information.

## Software

The server is a .NET application.

Running the server requires installing the [Windows hosting bundle for ASP.Net Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/8.0 "Windows hosting bundle for ASP.Net Runtime").

## Hosting

The server can be run as:

* An [Internet Information Services (IIS)](https://www.iis.net/ "Internet Information Services (IIS)") website from the minimal version IIS 10.0 (recommended)
* A [Windows service](https://docs.microsoft.com/en-us/dotnet/framework/windows-services/introduction-to-windows-service-applications "Windows service");
* a stand-alone executable for tests or debugging purposes.

It is recommended to enable the following [Internet Information Services (IIS)](https://www.iis.net/ "Internet Information Services (IIS)") features to host Identity Manager:

* [Windows Authentication](https://docs.microsoft.com/en-us/iis/configuration/system.webserver/security/authentication/windowsauthentication/#how-to-enable-windows-authentication-for-a-web-site-web-application-or-web-service "Windows Authentication")
* [Anonymous Authentication](https://docs.microsoft.com/en-us/iis/configuration/system.webserver/security/authentication/anonymousauthentication#how-to)

## Service Accounts

The installation of the server as part of an Active Directory domain requires the use of an account with sufficient privileges to create a service account on the domain.

The server should be assigned a [custom Windows service account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts "custom Windows service account").

The IIS built-in [application pool identity](https://support.microsoft.com/en-us/help/4466942/understanding-identities-in-iis "application pool identity") should not be used, because it will prevent the custom account from connecting to a distant SQL Server. Hence Netwrix Identity Manager (formerly Usercube) recommends using a domain account.

### Working directory permissions

The agent's service account needs specific permissions presented in the[Create a Working Directory](../../production-ready/working-directory/index "Create a Working Directory") topic as:

* *Read* and *List folder contents* on the working directory;
* *Read & Execute* and *List folder contents* on the `Runtime` directory, usually `C:/Usercube/Runtime`, in order to run the agent executable;
* *Read* and *List folder contents* on the directory for provisioning orders, whose path depends on the `Work` folder's path;
* *Read*, *List folder contents*, and *Write* on the directory for data collection, whose path depends on the `Work` folder's path.

See the [Create a Working Directory](../../production-ready/working-directory/index "Create a Working Directory") and [Application Settings](../../../integration-guide/network-configuration/agent-configuration/appsettings/index "Application Settings") topics for additional information.

Other permissions should be denied.

> **FAQ**: How to set up directory permissions in Windows Server? See the [Install the Server](../../production-ready/server/index "Install the Server") topic for additional information.

### Database permissions

If Windows' authentication is used for SQL Server, then the server should be able to authenticate to SQL Server with its assigned service account. It means that the server's service account needs to be assigned an SQL Server login with the relevant roles, including necessarily either `sysadmin` or `securityadmin`.

See the [Database](../database-requirements/index "Database") and [Install the Server](../../production-ready/server/index "Install the Server") topics for additional information.

## Hostname and DNS

In the case of an on-premises installation, the server needs to be assigned a hostname within the organization's domain. Agents must be able to resolve the server's hostname.

The associated DNS zone needs to be [updated accordingly](https://docs.microsoft.com/en-us/windows-server/networking/core-network-guide/cncg/server-certs/create-an-alias-cname-record-in-dns-for-web1 "updated accordingly").

:::tip
The DNS alias should be written in lowercase in order to comply with as many security rules as possible.
:::

## SSL Certificate

The server requires the use of an SSL certificate in order to perform HTTPS communication with end-users' browsers.

Identity Manager SaaS offering comes with an SSL certificate signed by a trusted certificate authority for the `*.usercube.com` domains. This certificate allows end-users to access the server through the Internet without any further configuration. Using another domain name for the SaaS installation requires providing Netwrix Identity Manager (formerly Usercube) with the corresponding SSL certificate signed by a trusted certificate Authority.

Identity Manager on-premises offering requires the use of an SSL certificate trusted by all the target end-users' browsers. Standard practices use a certificate signed by the target organization's Public Key Infrastructure (PKI) root certificate authority. The on-premise SSL certificate must be set up in IIS.

## Emails

The server needs access to an SMTP server to [Send Notifications](../../production-ready/email-server/index "Send Notifications").

## Encryption and Identity Server Key Pairs

An [RSA-2048 encryption key pair](https://en.wikipedia.org/wiki/Public-key_cryptography "RSA-2048 encryption key pair") is required for:

* Identity Manager's server in order to perform various encryption operations, such as source, configuration, or log file encryptions;
* Identity Manager's Identity Server for end-user authentication purposes.

Such a certificate does not need to be integrated into the target organization's Public Key Infrastructure and does not require an expiration date. They are only relevant to internal and temporary Identity Manager data and can be changed at any time.

An RSA key pair, as in an [X.509](https://fr.wikipedia.org/wiki/X.509 "X.509") public key certificate and a private key, can be stored either:

* As a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12 "PKCS #12") archive (also called [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files "Personal Information Exchange file") or `.pfx` file) stored in the *server*'s host file system. The archive contains both the public key certificate and the private key.
* As a certificate from a Windows' [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-stores "certificate store") identified by *SubjectDistinguishedName* or by *Thumbprint*. The Windows certificate also contains both the public key certificate and the private key. This is the recommended method.

The key pair can be generated with tools such as [OpenSSL](https://www.openssl.org/docs/manmaster/man1/req.html "OpenSSL") or Microsoft's [New-SelfSignedCertificate](https://docs.microsoft.com/en-us/powershell/module/pkiclient/new-selfsignedcertificate?view=win10-ps "New-SelfSignedCertificate") and [pvk2pfx tool](https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/pvk2pfx?redirectedfrom=MSDN " pvk2pfx tool").

## What's Next?

Let's move on to Identity Manager's agent requirements. See the [Agent](../agent-requirements/index "Agent")  topic for additional information.