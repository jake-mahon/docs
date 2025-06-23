---
title: security service
sidebar_label: security-service
description: Directory Manager 11.1 documentation for security service with configuration details, usage instructions, and implementation guidance.
---

# Create a Security Service

You can create a Security service in native IIS, remote IIS, and Docker.

What do you want to do?

- Create a Security Service in Native IIS
- Create a Security Service in Remote IIS
- Create a Security Service in Docker
- Launch a Security Service

## Create a Security Service in Native IIS

When you deploy a Security service in native IIS, Directory Manager does the following:

- It creates a directory with the Security service’s name at the following physical path on the
  Directory Manager server, and copies the service files from its template directory to the new
  service directory:  
  X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\  
  (X represents the Directory Manager installation drive)
- It also creates a virtual directory for the service in your desired IIS site.

The Security service runs within a virtual directory in IIS while the service files are physically
located on disk.

**To create a Security service:**

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **Security Service** and click **Next step**.
4. On the **Create GroupID Application** page, make sure the **IIS** tile is selected.
5. In the **Application Name** box, enter a name for the service or use the default name. The
   Security service is displayed with this name in Directory Manager.
6. In the **Deployment Name** box, enter a deployment name for the service. The application name and
   deployment name are displayed on the service card, as shown below:

   ![securityservicecard](/img/product_docs/directorymanager/directorymanager/admincenter/service/securityservice/securityservicecard.webp)

7. In the **IIS Application Name** box, enter an IIS deployment name for the service. This name is
   used to name the service’s directory in IIS and its physical directory under X:\Program
   Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\ on the Directory Manager server.  
   (X represents the Directory Manager installation drive)  
   The IIS application name should be unique for each Security service deployed in IIS.
8. In the **IIS Site** drop-down list, select a website to host the service files.  
   The list displays the websites defined on the local IIS server. GroupIDSite11 is the default
   selection.
9. In the **Data Service** drop-down list, select a Data service to bind to this Security service.  
   A Security service needs a Data service to perform various tasks, such as authentication and
   multifactor authentication.
10. Click **Create Application**.  
    The Security service is created and displayed on the **Security Service** tab.

## Create a Security Service in Remote IIS

You can deploy a Security service within a site in remote IIS. For this, you need to connect with
the Microsoft IIS Administration API running on the remote IIS machine.

When you create a Data service in remote IIS, Directory Manager does the following:

- It creates a virtual directory for the service in a preconfigured site in remote IIS.
- It creates a physical directory for the service in the folder that is mapped to this preconfigured
  site.

The Security service runs within a virtual directory in remote IIS while the service files are
physically located on disk.

To learn about the remote IIS settings and configurations before deploying a service there, see the
[Prerequisites for Deployments in Remote IIS](/docs/directorymanager/11.1/installation/requirements.md) topic.

**To create a Security service:**

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page select **Security Service** and click **Next step**.
4. On the **Create GroupID Application** page, select the **Remote IIS** tile.
5. In the **Application Name** box, enter a name for the service or use the default name. The
   Security service is displayed in Directory Manager with this name.
6. In the **Deployment Name** box, enter a deployment name for the service. The application name and
   deployment name are displayed on the service card.
7. To enter information for **API URL**, **Access Token**, **Username**, **Password**, **IIS
   Application Name**, and **Website**, refer to steps 7-11 in the
   [Create a Portal in Remote IIS](/docs/directorymanager/11.1/configuration/portal-settings.md#create-a-portal-in-remote-iis) topic.
   Replace any reference to the portal with the Security service.
8. In the **Data Service** drop-down list, select a Data service to bind to this Security service.  
   A Security service needs a Data service to perform various tasks, such as authentication and
   multifactor authentication.
9. Click **Create Application**.  
   The Security service is displayed on the **Security Service** tab.

## Create a Security Service in Docker

Directory Manager enables you to deploy a Security service in Docker. For this, you need to connect
with the API running on a Docker deamon in your environment, so that Directory Manager can create a
container for the service there and run the service from within that container.

For an overview on application deployment in Docker, see the
[Prerequisites for Deployments in Docker](/docs/directorymanager/11.1/installation/requirements.md) topic.

NOTE: To host the Security service, Docker daemon should be configured to run Windows containers.

**To create a Security service:**

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **Security Service** and click **Next step**.
4. On the **Create GroupID Application** page, select the **Docker** tile.
5. In the **Application Name** box, enter a name for the Security service or use the default name.
   The service is displayed in Directory Manager with this name.
6. In the **Deployment Name** box, enter a deployment name for the service. The application name and
   deployment name are displayed on the service card.
7. To enter information for **Port**, **Service URL**, and **Container Name**, refer to steps 7-9 in
   the [Create a Portal in Docker](/docs/directorymanager/11.1/configuration/portal-settings.md#create-a-portal-in-docker) topic. Replace
   any reference to the portal with the Security service.
8. In the **Data Service** drop-down list, select a Data service to bind to this Security service.  
   A Security service needs a Data service to perform various tasks, such as authentication and
   multifactor authentication.
9. Click **Create Application**.  
   The Security service is created and displayed on the **Security Service** tab.

## Launch a Security Service

1. In Admin Center, select **Applications** in the left pane.
2. On the **Security Service** tab, click **Launch Application** for a service. The **GroupID
   Applications** page is displayed. Options on this page are discussed in the
   [Access your Applications](/docs/directorymanager/11.1/administration/general-settings.md) topic. Any actions you perform
   will be carried out through the respective Security service.

**See Also**

- [Directory Manage Applications](/docs/directorymanager/11.1/configuration/portal-settings.md)
- [Services](/docs/directorymanager/11.1/administration/services/overview.md)
- [Manage Security Service Settings](/docs/directorymanager/11.1/administration/services/security-service.md)

# Manage Security Service Settings

Security services in Directory Manager are displayed on the **Security Service** tab. A card for a
service displays information such as its name and status.

You can manage several settings for a service, such as:

- Change the name of a service
- Start or stop a service
- Configure file logging for a service
- Delete a service

## View Service Details

Follow the steps to view the service details.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the **Applications** page, click the **Security Service** tab.  
The tab displays the default Security service created while configuring Directory Manager and any
other Security service that you have created. When multiple Directory Manager instances have been
deployed, you will find multiple default Security services on this tab page, as each instance has
its own default Security service. See the
[Elasticsearch Clusters, Nodes, and Directory Manager](/docs/directorymanager/11.1/administration/services/overview.md#elasticsearch-clusters-nodes-and-directory-manager)
topic for additional information.  
For details displayed on a service card, see the table in the
[View Data Service Details](/docs/directorymanager/11.1/administration/services/data-service.md#view-data-service-details) topic.

## Manage Security Service Settings

See the [Manage Data Service Settings](/docs/directorymanager/11.1/administration/services/data-service.md) topic to manage settings for a
Security service, such as deployment and log settings.

## Manage Advanced Settings

If you have created multiple Security services for load balancing and high availability, the
Advanced Settings option enables the services to share session information.

Follow the steps to enable communication between multiple Security services.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Applications page, click the **Security Service** tab.  
The tab displays the default Security service created while configuring Directory Manager and any
other Security service that you have created. When multiple Directory Manager instances have been
deployed, you will find multiple default Security services on this tab page, as each instance has
its own default Security service. See the
[Elasticsearch Clusters, Nodes, and Directory Manager](/docs/directorymanager/11.1/administration/services/overview.md#elasticsearch-clusters-nodes-and-directory-manager)
topics for additional information.  
For details displayed on a service card, see the table in the
[View Data Service Details](/docs/directorymanager/11.1/administration/services/data-service.md#view-data-service-details) topic for additional
information.

Step 3 – Click the **ellipsis button** for a Security service and select **Settings**.

Step 4 – Select **Advanced Settings** under Server Settings.

Step 5 – Enable the **Distributed Cache** toggle button to enable communication among defined
Security services.

Communication between Security services is now enabled.

## Delete a Security Service

Deleting a Security service removes the following:

- **For a native IIS deployment:**

  - The Security service directory under the following location on the Directory Manager server:  
    X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\  
    (X represents the Directory Manager installation drive)
  - The Security service directory from the website in IIS

- **For a remote IIS deployment:**

  - The service's directory in the remote IIS site
  - The service's physical directory under the folder mapped to the remote IIS site

- **For a Docker deployment:**

  The container created in Docker Engine for the Security service

Follow the steps to delete a Security service.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the **Applications** page, click the **Security Service** tab.

Step 3 – Click the ellipsis button for a Security service and select **Delete**.

NOTE: You cannot delete the default Security service. You cannot also delete a Security service that
has been linked with a Directory Manager client, such as the Directory Manager portal.

# Security Service

Admin Center lets you quickly create and deploy a Security service. This web-based service is a
single sign-on implantation for Directory Manager clients. It is responsible for authenticating and
authorizing users on different Directory Manager clients and functionalities in accordance with
their roles. The service also encrypts and decrypts data that Data service stores and fetches from
the Directory Manager database on SQL Server.

You can create multiple Security services; the default service is created while configuring
Directory Manager.

## The Default Security Service

See [The Default Data Service](/docs/directorymanager/11.1/administration/services/data-service.md#the-default-data-service) topic.

At the time of Directory Manager installation, a generic signing key is assigned to the Directory
Manager Security Service. For security reasons, it is recommended that a unique signing key is used
which is specific to your environment. Using Netwrix Directory Manager (formerly GroupID) Signing
Key Utility you can replace the old signing key with a new key. See the
[Signing Key Utility](/docs/directorymanager/11.1/administration/services/security-service.md) topic for additional information.

## Why Create Multiple Security Services?

See the
[Why Create Multiple Data Services?](/docs/directorymanager/11.1/administration/services/data-service.md#why-create-multiple-data-services)
topic while replacing references to Data service with Security service. After defining multiple
Security services, you can enable communication between them. As a result of their communication,
logged in session-related information persists across multiple Directory Manager clients. See the
[Manage Advanced Settings](/docs/directorymanager/11.1/administration/services/security-service.md#manage-advanced-settings) section of the
[Manage Security Service Settings](/docs/directorymanager/11.1/administration/services/security-service.md) topics for additional information.

# Signing Key Utility

This utility was created to remediate the vulnerability described in Netwrix security advisory
ADV-2025-004
([https://security.netwrix.com/Advisories/ADV-2025-004](https://security.netwrix.com/Advisories/ADV-2025-004)).
Running this utility will cause a new customer-specific signing key to be generated and used by the
application. See the Generate a Signing Key section for additional information.

Having generated the customer-specific signing key, your existing schedules will not work as their
authentication mechanism will no longer be considered valid. Therefore, the authentication mechanism
must be updated for schedules as well. See the Update Schedules section for additional information.

In case you are running multiple instances of Directory Manager for load balancing and high
availability, using this utility you can export the newly generated signing key and then import it
to other Directory Manager instances. See the following sections for information on how to export
and import the signing key:

- Export a Signing Key
- Import a Signing Key

## Download the Utility

You can download the Netwrix Directory Manager (formerly GroupID) Signing Key Utility from the
following URLs:

- Pre v11.1 (2.1, 2.2, 2.3, 2.4)

  [https://releases.netwrix.com/products/directorymanager/11.0-Signing-Key-Utility-11.0.0.zip](https://releases.netwrix.com/products/directorymanager/11.0-Signing-Key-Utility-11.0.0.zip)

- For v11.1

  [https://releases.netwrix.com/products/directorymanager/11.1/directorymanager-Signing-Key-Utility-11.1.0.zip](https://releases.netwrix.com/products/directorymanager/11.1/directorymanager-Signing-Key-Utility-11.1.0.zip)

The file is downloaded into a folder as per your browser’s download settings. Unzip the file into a
folder.

## Generate a Signing Key

Using Netwrix Directory Manager (formerly GroupID) Signing Key Utility you can generate a new
signing key.

RECOMMENDED: Generate the new signing key on your Directory Manager server machine.

Follow the steps to generate a new signing key.

Step 1 – At the Windows Command prompt, go to the folder where you have placed the utility.

Step 2 – Type the following command at the prompt:

```
SigningKeyUtility.exe GenerateSigningKey -u “<DB username>” -s “<SQLServer name>” -d “<DB name>” -i
```

Step 3 – Provide the password of SQL server for authentication.

Parameters:

- -u — provide username of the SQL server where your database exists

- -s — provide the name of the SQL server

- -d — provide database name you are using with Directory Manager

- -i — use this parameter if you are using SQL authentication.  
   If you are using Windows authentication, ignore this argument

## Update Schedules

This command will update the signing key information in all the existing schedules for each identity
store, except the Microsoft Entra ID store.

```
SigningKeyUtility.exe UpdateSchedulers -u “<DB username>” -s “<SQLServer name>” -d “<DB name>” -i
```

Parameters

- Use the same parameters given in the Generate a SigningKey section.

## Export a Signing Key

If you are using multiple instances of Directory Manager, then you need to export the newly
generated signing key to other instances of Directory Manager. Type the following command at the
Windows Command prompt to export the signing key in .pfx. encrypted format with a password:

```
SigningKeyUtility.exe ExportSigningKey -o “<Folder location for signingkey export>”
```

Parameters

- -o — provide folder location where the utility will export the signing key

This command will generate a password for the encrypted signing key. Copy it and keep it safe for
later use. The encrypted signing key is saved in the specified folder.

## Import a Signing Key

Copy the newly generated signing key on the required Directory Manager instance. Type the following
command at the Windows Command prompt to import the signing key which is in .pfx encrypted format:

```
SigningKeyUtility.exe ImportSigningKey -n “<Folder location of encryption key>” -p “<Password of encryption key>” -u “<DB username>” -s “<SQLServer name>” -d “<DB name>” -i
```

Provide the password for SQL server authentication.

Parameters

- -n — provide folder location to import the encrypted signing key from

- -p — provide the password to decrypt the signing key

- Use the same parameters given in the Generate a Signing Key section.
