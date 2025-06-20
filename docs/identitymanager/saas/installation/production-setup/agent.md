# Install the Agents

Most on-premises installations use an agent integrated with Identity Manager's server. If this is
your case, and the server is already installed, no need to go further. If, on the other hand, you
need separate agents, or if you are installing Identity Manager's agents within Identity Manager's
SaaS offering, this is the way to go.

**NOTE:** Please make sure that Identity Manager's agent requirements are met before going further.
See the[ Agent ](/docs/identitymanager/saas/getting-started/requirements.md) topic for additional information.

## Agent Working Directory

The agent runtime content should be extracted from the runtime archive following the instructions
provided in the [ Create a Working Directory ](/docs/identitymanager/saas/installation/production-setup/working-directory.md) topic.

In the separate agent setup, the agent is usually installed on a different workstation from the
server.

The agent is configured thanks to the appsettings.agent.json file. See the
[appsettings.agent](/docs/identitymanager/saas/configuration/network/agent-settings/appsettings.md)
topic for additional information.

## Create an IIS Website

It is recommended to run the Identity Manager agent as an IIS website.

_Remember,_ to install Identity Manager's agent as a Windows service, see the
[ Agent ](/docs/identitymanager/saas/getting-started/requirements.md) topic for additional information.

Adding Identity Manager's agent as an IIS website can be achieved with the
[Internet Information Services (IIS) Manager](https://www.iis.net/) which can be launched with the
`INETMGR.MSC` command. You need to have an IIS 10.0 or greater.

The Microsoft Documentation provides the
[prerequisites](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-8.0)
and the procedure to
[create a new IIS site](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-8.0#create-a-new-iis-site).

The information needed to go through the creation process are the following:

- Identity Manager's agent uses an in-process hosting model
- Identity Manager's agent uses .NET
- Identity Manager agent's web.config dwells in the runtime directory

  It might require a few modifications to target the agent instead of the server:

  **Step 1 –** Open web.config with a text editor.

  **Step 2 –** Change the arguments and stdoutLogFile attributes of the `<aspNet>` element as
  indicated below:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<aspNetCore processPath="<dotnet>" arguments="<./identitymanager-Agent.dll>" stdoutLogEnabled="<false>" stdoutLogFile="<../Temp/stdout-agent.log>" hostingModel="<inprocess>">
```

- When creating the website, enter the following data:

  **Step 1 –** Site name: Identity Manager Agent`<Organization>` is the recommended naming
  convention

  **Step 2 –** Physical path: /`<agent working directory>`/Runtime

  **Step 3 –** Type: http

  **Step 4 –** IP address: All unassigned

  **Step 5 –** Port & Hostname: To access Identity Manager's agent. Use the hostname and port that
  has been reserved for Identity Manager.

After creation, the following settings are recommended:

- **Application Pool** > **Identity Manager `<Organization>`** > **Advanced Settings** >
  **General** > **Start Mode** set to AlwaysRunning;
- **Application Pool** > `Identity Manager <Organization>` > **Advanced Settings** > **Process
  Model** > **Idle Time-out** (minutes) set to 0 and Load User Profile set to True;
- **Application Pool** > **Identity Manager `<Organization>`** > **Recycling** > Regular time
  intervals set to 0.

  Recycling the application pool creates a discontinuation in the connection between server and
  agent, which can disrupt some of Identity Manager's features such as the job scheduler. IIS
  already recycles the application pool at each setting change, thus Netwrix recommends not using
  periodic recycling.

The following is
[mandatory](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-8.0#mandatory):

- **Application Pool** > **Identity Manager `<Organization>`** > **Advanced Settings** >
  **General** > **.NET CLR Version** > **No Managed Code**

![IIS Settings](/img/product_docs/identitymanager/identitymanager/installation-guide/production-ready/server/iis_settings.webp)

This sums up IIS settings.

## Hosting Bundle

You need to install the
[dotnet hosting bundle](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) (version 8.0 or
higher) to be able to run dotnet application.

## Select an Agent Identity

The agent, through Identity Manager's server IIS Website, should be assigned a service account with
the relevant permissions. See the [ Agent ](/docs/identitymanager/saas/getting-started/requirements.md) topic
for additional information.

You can either:

- Use the built-in application pool identity and grant this identity the right permissions. See the
  Install the Agents topic for additional information.
- Use a custom Windows service account with the right permissions and use it as an IIS identity for
  Identity Manager's agent IIS Website

### Check default behavior

Usually, creating an IIS application pool, such as the one within which Identity Manager's server
website runs, triggers the creation of a service account `IIS APPPOOL/<apppool_name>` (where
`<apppool_name>` is the application pool name) known as an application pool identity. It is
associated with the IIS website. This account is granted basic group membership that should enable
it to access what it needs.

For more information about IIS identities, visit the
[Microsoft Documentation](https://support.microsoft.com/en-us/help/4466942/understanding-identities-in-iis).

Building on this default behavior, the default Application Pool Identity is usually granted the
necessary permissions for Identity Manager's server to operate.

Before going further, you should check the following points:

**Step 1 –** Find the group membership of `IIS APPPOOL\<apppool_name>`.

**Step 2 –** Check the permissions on the working directory. Right-click the working directory and
select Security. The group section should contain one of the `IIS APPPOOL/<apppool_name>` groups,
namely Users. And,

**Step 3 –** If the built-in application pool identity has been created but does not have the right
permissions, you can follow the steps outlined in Install the Agents section to fix it. Go back to
the section to make sure that the built-in application pool identity is effectively used by Identity
Manager's server IIS Website.

**Step 4 –** If you would rather use a custom service account instead of the built-in application
pool identity, start with Install the Agents.

**Step 5 –** If you're not sure what to do, follow the procedure below, starting with Install the
Agents.

Once the steps indicated above are completed you can carry on with setting an IIS Identity.

### Set an IIS Identity

If you want to use the built-in application pool identity created with the application pool, you can
use
the[ Microsoft documentation](https://docs.microsoft.com/en-us/iis/manage/configuring-security/application-pool-identities).

If you would rather use a custom service account created for Identity Manager's agent, follow the
procedure below.

The following implies that a
[custom service account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts)
has already been created for Identity Manager's agent. See
the[Install the Server](/docs/identitymanager/saas/installation/production-setup/server.md) topic for additional information.

Follow the steps below to set an IIS identity and note that these are the same for the server:

**Step 1 –** Open the IIS Manager (`INETMGR.MSC`).

**Step 2 –** Open the **Application Pools** node underneath the machine node.

**Step 3 –** Select the Identity ManagerAgent/`<Organization>` application pool.

**Step 4 –** Right-click and select **Advanced Settings**.

**Step 5 –** In the **Process Model** section, on the **Identity** list item, click on the three
dots to open the **Application Pool Identity** dialog.

**Step 6 –** Select the **Custom Account** radio button and click on **Set**.

**Step 7 –** Enter the Service Account credentials.

**Step 8 –** Click **OK**. You're all set.

Identity Manager's server IIS site will now use this identity to access the database and the working
directory.

## Set the Agent Permissions

Identity Manager's agent needs specific permissions on its working directory to run, write
synchronization output and read provisioning orders. See the
[Server](/docs/identitymanager/saas/getting-started/requirements.md) topic for additional information.

Up to four folders have to be considered:

- the working directory
- the runtime directory, usually `C:/identitymanager<Organization>/Runtime`
- the data collection directory, usually `C:/identitymanager<Organization>/Temp`
- the provisioning orders directory, usually `C:/identitymanager<Organization>/Temp` (same as for the data
  collection directory).

See the[ Create a Working Directory ](/docs/identitymanager/saas/installation/production-setup/working-directory.md) and
[Application Settings](/docs/identitymanager/saas/configuration/network/agent-settings/appsettings.md)
topics for additional information.

Further check the permissions of the service account and perform the steps for each of the relevant
directories:

**Step 1 –** Go to the working directory parent folder.

**Step 2 –** Right-click the working directory.

**Step 3 –** Select **Properties**.

**Step 4 –** Select **Security**.

The agent service account selected in the previous step can either:

- have the necessary permissions or it belongs to a group that does, so no further action is
  required
- is missing one of the permissions

To fix the missing permissions follow the steps:

**Step 1 –** Click on **Edit**.

**Step 2 –** Click on **Add**.

**Step 3 –** In the **Enter the object names to select** textbox, enter the service account name in
the down-level logon format. For example, if you chose the built-in application pool identity, this
would be `IIS APPPOOL/identitymanagerAgent<Organization>`.

**Step 4 –** Click on **OK**.

**Step 5 –** Select the newly added user name in the Group or user names panel at the top of the
window.

![Object Names](/img/product_docs/identitymanager/identitymanager/installation-guide/production-ready/server/enter-the-object-names-to-select.webp)

**Step 6 –** Check the **Allow** column for the relevant permissions. Check the **Deny** column for
the others. See the[Server](/docs/identitymanager/saas/getting-started/requirements.md) topic for additional
information.

**Step 7 –** Click **OK**.

The working directory permissions are all set.

The same steps have to be performed on the runtime, the data collection and the provisioning orders
directories. See the[ Create a Working Directory ](/docs/identitymanager/saas/installation/production-setup/working-directory.md) and
[Application Settings](/docs/identitymanager/saas/configuration/network/agent-settings/appsettings.md)
topics for additional information.

## Name the Agent

Every agent is assigned a name. This name will be used in the UI to differentiate agents for the
end-user, and in the XML configuration to assign connectors to specific agents.

In the appsettings.agent.json file, the **OpenId** > **AgentIdentifier** can be set to any string
except for Local which is already taken by Identity Manager's inner workings. Then the agent set in
the XML configuration must have the same string as identifier.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
"<OpenId">: {
  "AgentIdentifier": "<MyAgent>"
  }
```

With the following configuration:

```
<Agent Identifier="<MyAgent>" DisplayName_L1="<My Agent>" 
URI="<https://contoso.com>" />
```

## Connect the Agent to the Managed Systems

The Runtime/appsettings.agent.json file is a technical configuration file that will enable you set
up the connection between the agent and the target managed systems. See the
[appsettings.agent](/docs/identitymanager/saas/configuration/network/agent-settings/appsettings.md)
topic for additional information.

Every agent is associated with an appsettings.agent.json file.

The integration team should communicate the list of the managed systems to be connected to the
agent, together with their configuration.

Here is an example of appsettings.agent.json connecting an agent to an Active Directory and an SAP
server.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
  ...
  "Connections": {
    "ADExport": {
        "Servers": [
          {
           "Server": "<paris.contoso.com>",
           "BaseDN": "<DC=paris,DC=com>"
          }
        ],
        "AuthType": "<Basic>",
        "Login": "<Login>",
        "Password": "<Password>",
        "Filter": "<(objectclass=*)>",
        "EnableSSL": "<true>"
    }
    "<SAPExportFulfillment>": {
        "Server": "<serverUrl>",
        "Login": "<login>",
        "Password": "<password>"
    }
  }
}
```

_Remember,_ storing sensitive managed system data in configuration files, such as login/password
pairs, is strongly discouraged. Sensitive data should be protected by one of the credentials
protection methods. See the[Connectors](/docs/identitymanager/saas/connectors/index.md) topic for
additional information.

## Encryption Key Pair

Identity Manager's agent needs an
[RSA key pair](https://en.wikipedia.org/wiki/Public-key_cryptography) to perform various encryption
operations, such as source, configuration, or log file encryptions.

An RSA key pair, as in an [X.509](https://fr.wikipedia.org/wiki/X.509) public key certificate and a
private key, can be stored one of two ways:

- As a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive (also called
  [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files)
  or .pfx file) stored in the server's host file system. The file contains both the public key
  certificate and the private key.
- As a certificate from a Windows'
  [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store)
  identified by SubjectDistinguishedName or by Thumbprint. The Windows certificate also contains
  both the public key certificate and the private key. This is the recommended method.

The key pair can be generated with tools such as
[OpenSSL](https://www.openssl.org/docs/manmaster/man1/req.html) or Microsoft's
[New-SelfSignedCertificate](https://learn.microsoft.com/en-us/powershell/module/pki/new-selfsignedcertificate?view=windowsserver2022-ps)
and
[pvk2pfx tool](https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/pvk2pfx?redirectedfrom=MSDN).

Here's an example showing how to generate a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12)
archive (`<UsercubeContoso.pfx>`) bundling a public key certificate
(`<Identity Manager contoso.cert>`) and a private key (`<usercubecontoso.key>`) with OpenSSL, with a
50-year expiration date:

**Step 1 –** Enter the following command:

```
openssl req -x509 -newkey rsa:1024 -keyout usercubecontoso.key -out usercubecontoso.cert -days 18250
```

**Step 2 –** Enter the following command:

```
openssl req -x509 -newkey rsa:1024 -keyout usercubecontoso.key -out usercubecontoso.cert -days 18250
```

Public key certificates can also be bought from trusted certificate providers and bundled with a
private key into a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive using step 2 in the
frame above.

The certificate has to be linked to Identity Manager via EncryptionCertificate in the
appsettings.agent.json file.

See the
[Application Settings](/docs/identitymanager/saas/configuration/network/agent-settings/appsettings.md)
topic for additional information about configuration parameters.

### Certificate as a plain file

The following parameters are used to link the file to Identity Manager in EncryptionCertificate.

[PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive can be
[password protected](https://www.openssl.org/docs/man1.1.0/man1/openssl.html#password-protected),
hence the X509KeyFilePassword attribute.

Storing a `.pfx` file password in plain text in a production environment is strongly discouraged. It
should always be encrypted using the Usercube-Protect-CertificatePassword tool. See the
[ Usercube-Protect-CertificatePassword ](/docs/identitymanager/saas/automation/executables/protect-certificate-password.md)
topic for additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
  ...
  "<EncryptionCertificate>": {
      "<File>": "<./identitymanagerContoso.pfx>",
      "<X509KeyFilePassword>": "<adefe$/izih>"
  }
  ...
}
```

### Certificate in the certificate store

The certificate can be stored in the certificate store instead of the file system. This is the
recommended method.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
  ...
  "<EncryptionCertificate>": {
      "<DistinguishedName>":"<UsercubeContoso>",
      "<StoreLocation>": "<LocalMachine>",
      "<StoreName>": "<AuthRoot>"
  }
  ...
}
```

## Connect the Agent to Server

The connection to Identity Manager's server can be configured through:

- The applicationUri attribute in the Runtime/appsettings.agent.json file has to be set to Identity
  Manager's server URL

- OpenIdClients and DefaultOpenIdClient must be used to set the agent's credentials to connect to
  the server; See the
  [appsettings.agent](/docs/identitymanager/saas/configuration/network/agent-settings/appsettings.md)
  and[ OpenIdClient ](/docs/identitymanager/saas/configuration/xml-configuration/access-control.md)
  topics for additional information.

Their content should be provided by the integration team, in relation to the OpenIdClient tag in the
applicative configuration. See
the[ OpenIdClient ](/docs/identitymanager/saas/configuration/xml-configuration/access-control.md)
topic for additional information.

The following example shows an appsettings.agent.json file that sets an agent to connect to Identity
Manager's server (`https://identitymanagerserver.contoso.com`) with the OpenId client identifier `<Job>`
and the password `<secret>`, stored in the OpenIdClients list which also contains the "admin/secret"
login/password pair.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
{
    ....
    "ApplicationUri": "<https://identitymanagerserver.contoso.com>",
    "OpenIdClients": {
        "Job": "<secret>",
        "Admin": "<secret>"
     },
    "DefaultOpenIdClient": "<Job>"
}
```

_Remember,_ storing plain text passwords in configuration files is strongly discouraged. Sensitive
passwords should be encrypted.

## Install the Agent as a Windows Service

Installing Identity Manager's agent as a Windows service instead of an IIS website is mostly useful
when using IIS is rendered moot by another system. For example, using a reverse proxy in front of
Identity Manager's agent.

To install Identity Manager's agent as a service in Windows server, use the following command:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
sc.exe create Usercube binpath= "<Usercube-Agent.exe --service>" displayname= "<Usercube Agent>" start= auto obj= "<DOMAIN\USER>" password= "<PASSWORD>"
```

_Remember,_ make sure to include a space between each parameter's equal sign (=) and the parameter
value.

## Configure the Starting Mode in IIS (optional)

This step is important if the scheduler is enabled. IIS starts Identity Manager's agent only if an
incoming http request is made on the server and the scheduler is not launched until Identity
Manager's agent is started. Because of that, you need to carefully set up the starting mode of IIS
to force the starting of Identity Manager's agent.

Identity Manager's agent warm up is done using the `<applicationInitialization>` element in the
web.config file, the configuration is described
[here.](https://docs.microsoft.com/en-us/iis/get-started/whats-new-in-iis-8/iis-80-application-initialization)

You need to:

**Step 1 –** Enable the Application Initialization feature

**Step 2 –** Modify the applicationHost.config file to set the startMode of the application pool as
AlwaysRunning. You also need to set the preloadEnabled of your application set to true. It is
advised to backup the applicationHost.config file when doing this step to prevent mistakes.

**Step 3 –** Double check that the following section is set in your web.config file, in the section
system.webServer:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<applicationInitialization doAppInitAfterRestart="<true>">  
<add initializationPage="</>">
</applicationInitialization>

```

Once done, you need to check that the configured jobs are launched via the Identity Manager's
scheduler without having to manually issue a request on Identity Manager's agent.

If this is not correctly configured, any restart of your IIS or application pool could prevent jobs
from being launched.

## What's Next?

The last step in the installation process is setting up an Email server. See the
[ Send Notifications ](/docs/identitymanager/saas/installation/production-setup/email-server.md) topic for additional information.

# Install the Production Agent

This guide shows how to install an agent separated from the server, for production environment. See
the [ Architecture ](/docs/identitymanager/saas/identitymanager/introduction-guide/architecture/index.md)topic for additional
information.

## Overview

Like all agents, the production agent aims to extract data from a given managed system, and transmit
said data to the Identity Manager server. If necessary, the agent also enables the managed system's
provisioning according to the orders computed by the Identity Manager server. See the
[ Architecture ](/docs/identitymanager/saas/identitymanager/introduction-guide/architecture/index.md) topic for additional
information.

Identity Manager solution can use several agents, each of them manages a given system. This section
is about installing the agent managing the production environment.

Once agents are configured in addition to the default one provided by SaaS, you need to think about
what agent to choose during each
[ Create the Connector ](/docs/identitymanager/saas/connectors/how-to/create-connectors/index.md)declaration. The
appropriate agent has access to the managed system.

## Requirements

Ensure that all
[ Agent ](/docs/identitymanager/saas/getting-started/requirements.md)requirements can be
met before starting the installation of the production agent.

Requirements for the agent installation can change over the course of the project, according to the
project purpose.

### Encryption certificates

Ensure that your encryption certificates are valid by checking their: expiration date; signatory;
key size exceeding 2048; sha256 and not sha-1.

### Server Manager

Ensure that the device used for the installation has the Server Manager program.

## Participants and Artifacts

Integrators should have all the elements they need to operate.

| Input                                                                                          | Output           |
| ---------------------------------------------------------------------------------------------- | ---------------- |
| [ Agent ](/docs/identitymanager/saas/getting-started/requirements.md) prerequisites (required) | Production agent |

## Install the Production Agent

Install the production agent by proceeding as follows:

1. [ Create a Working Directory ](/docs/identitymanager/saas/installation/production-setup/working-directory.md)
   and make sure it contains the folders: `Mails`; `Sources`; `Temp`; `Work`.
2. [ Configure the Agent's Settings ](/docs/identitymanager/saas/configuration/network/agent-settings/appsettings.md) via the `web.config`,
   `appsettings.json` and `appsettings.agent.json` files.
3. Configure the local server to [ Install IIS via Server Manager ](/docs/identitymanager/saas/installation/production-setup/agent.md).
4. [ Configure the Pool and Site ](/docs/identitymanager/saas/installation/production-setup/agent.md) via IIS.
5. [ Set the Working Directory's Permissions ](/docs/identitymanager/saas/installation/production-setup/agent.md).
6. [ Finalize the Installation ](/docs/identitymanager/saas/installation/production-setup/agent.md).

## Verify Agent Installation

In order to verify the process:

- make sure the website is accessible from IIS by clicking on **Browse** (in the menu on the right),
  and from your browser;
- if logs are enabled, then stop the pool to make sure that no error is thrown;
- perform from a local device agent-side actions such as sending test emails, reading and/or writing
  inside working folders, or launching/scheduling agent-side tasks.

# Configure the Pool and Site

This guide shows how to configure the application pool and website via IIS.

## Overview

IIS provides a platform for hosting and managing websites.
[See more details](https://learn.microsoft.com/fr-fr/iis/get-started/introduction-to-iis/introduction-to-iis-architecture).

To install the production agent, a website must be created and configured correctly, as part of an
application pool.

This page describes the optimal configuration in IIS to prepare the production agent's installation.

## Configure the Application Pool and Site

Configure the application pool and site by proceeding as follows:

1. Open IIS and remove the default site and pool.

   IIS can usually be found in Windows' search menu, or from Server Manager by accessing the
   **Tools** menu.

   ![IIS: Step 1](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis1.webp)

2. Right-click on **Application Pools** to add a new pool named `Usercube`.

   ![IIS: Step 2](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis2.webp)

3. Right-click on **Sites** to add a new site named `Usercube<Organization>`, make sure that the
   selected application pool is `Usercube` and set the `path` field to the `Runtime` folder.

   ![IIS: Step 3](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis3.webp)

4. Right-click on the application pool to open its advanced settings and make sure that the
   following parameters are set as such:

   ![IIS: Step 4](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis4.webp)

   ![IIS: Step 5](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis5.webp)

5. Make sure that IIS contains an SSL certificate, by accessing the home page of IIS server and
   double-clicking on **Server Certificates**.

   If the certificate is not ready yet, generate an auto-signed certificate.

   ![IIS Server Certificate: Step 1](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_servercertificate1.webp)

   If the certificate is not there yet, import it by clicking on **Import** in the right-side menu,
   and specify the certificate's path and password.

   ![IIS Server Certificate: Step 2](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_servercertificate2.webp)

6. Add the certificate's URL to the site by right-clicking on the site, selecting **Edit Bindings**
   and clicking on **Add**, then choosing `https` as type, `443` as port, specifying the server's
   URL (without the `https` part) as host name, and finally selecting the server certificate.

   ![IIS Server Certificate: Step 3](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_servercertificate3.webp)

   Click on **OK**.

   If the server's certificate is not available at this point, then make sure it was correctly
   imported in the previous step.

## Next Steps

To continue, [ Set the Working Directory's Permissions ](/docs/identitymanager/saas/installation/production-setup/agent.md).

# Set the Working Directory's Permissions

This guide shows how to assign to the pool the right permissions on the working directory.

## Overview

For Identity Manager to work correctly, the pool of the production agent must be configured with
specific permissions on the working directory.

This page describes the optimal configuration of the pool's permissions on the working directory to
prepare the production agent's installation.

## Set the Working Directory's Permissions

Set the working directory's permissions by proceeding as follows:

1. Right-click on the working directory, for example `C:/identitymanager`, to select **Properties**, and in
   the **Security** tab, click on **Advanced**.

   ![Working Directory Properties: Step 1](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties1.webp)

2. In the **Permissions** tab, click on **Add**, and in the pop-up window click on **Select a
   principal**.

   ![Working Directory Properties: Step 2](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties2.webp)

3. Click on **Locations** to choose the current computer, and in the text area enter
   `iis apppool/identitymanager` (`Usercube` being the name of the previously created pool).

   ![Working Directory Properties: Step 3](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties3.webp)

   An error at this point should come either from a mistake in the pool's name or in the selected
   location.

4. Click on **OK** and make sure that only the **Read and execute**, **List folder contents** and
   **Read** permissions are selected.

   ![Working Directory Properties: Step 4](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties4.webp)

5. Click on **OK** in the windows until they are all closed.
6. Right-click on the `Temp` folder to select **Properties**, and in the **Security** tab, click on
   **Edit**.

   ![Temp Folder Properties: Step 1](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_foldersproperties1.webp)

7. Select the user corresponding to the pool and give them `Full control`.

   ![Temp Folder Properties: Step 2](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_foldersproperties2.webp)

8. Click on **OK** in the windows until they are all closed.
9. Repeat the last few steps (those concerning the `Temp` folder) to apply them to the `Work` and
   `Mails` folders.

## Next Steps

To continue, [ Finalize the Installation ](/docs/identitymanager/saas/installation/production-setup/agent.md)in a few steps.

# Finalize the Installation

This guide shows how finalize the installation of the agent.

## Overview

This page describes the last few steps that the production agent needs for Identity Manager to run
correctly.

## Finalize the Installation

Finalize the installation of the agent by proceeding as follows:

1. Install
   [Windows' hosting bundle for ASP.Net Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).

   If the bundle was installed before
   [ Configure the Pool and Site ](/docs/identitymanager/saas/installation/production-setup/agent.md), then IIS might not display the
   AspNetCore module and Identity Manager will not run. In this case, relaunch the bundle's
   installation executable to perform a repair.

2. When using a proxy, adjust the configuration accordingly. See the
   [ Reverse Proxy ](/docs/identitymanager/saas/installation/reverse-proxy.md)topic for additional
   information.

## Next Steps

To continue, follow the instructions to verify the agent's installation. See the
[ Install the Production Agent ](/docs/identitymanager/saas/installation/production-setup/agent.md) topic for additional information.

# Install IIS via Server Manager

This guide shows how to configure the local server to install IIS via Server Manager.

## Overview

When running on Windows Server, Server Manager makes available parameters to configure the local
server at will.
[See more details](https://learn.microsoft.com/en-us/windows-server/administration/server-manager/manage-the-local-server-and-the-server-manager-console).

This page describes the optimal configuration of the local server to install IIS in order to prepare
the production agent's installation.

## Install IIS via Server Manager

Install IIS via Server Manager by proceeding as follows:

1. Open the Server Manager program and click on **Add roles and features**.

   ![Server Manager: Step 1](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager1.webp)

2. Click on **Next**, then in **Installation Type** make sure that **Role-based or feature-based
   installation** is selected and click on **Next**.

   ![Server Manager: Step 2](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager2.webp)

3. In **Server Selection** tick **Select a server from the server pool** and click on **Next**.

   ![Server Manager: Step 3](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager3.webp)

4. In **Server Roles** tick **Web Server (IIS)**.

   ![Server Manager: Step 4](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager4.webp)

5. In **Features** select **Remote Server Administration Tools** > **Role Administration Tools** >
   **AD DA and AD LDS Tools** > **AD DS Tools** > **AD DS Snap-Ins and Command-Line Tools**.

   ![Server Manager: Step 5](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager5.webp)

6. In **Confirmation** click on **Install**.

   ![Server Manager: Step 6](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager6.webp)

## Next Steps

To continue,[ Configure the Pool and Site ](/docs/identitymanager/saas/installation/production-setup/agent.md)and website via IIS.
