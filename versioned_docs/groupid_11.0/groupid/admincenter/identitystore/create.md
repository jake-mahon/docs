# Create an Identity Store

To perform group and identity management operations in an identity provider using GroupID, the first step is to create an identity store for that provider.

You can create identity stores for the following providers:

- Active Directory
- Microsoft Entra ID
- Generic LDAP
- Google Workspace

To create an identity store, you have to specify an identity provider and its connection details.

After creating an identity store, you must configure certain settings for it. These configurations are discussed in the [Configure an Identity Store](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure.md) topic.

What do you want to do?

- [Create an Identity Store for Active Directory](#Create-an-Identity-Store-for-Active-Directory)
- [Create an Identity Store for Microsoft Entra ID](#Create-an-Identity-Store-for-Microsoft-Entra-ID)
- [Create an Identity Store for Generic LDAP](#Create-an-Identity-Store-for-Generic-LDAP)
- [Create an Identity Store for Google Workspace](#Create-an-Identity-Store-for-Google-Workspace)

## Create an Identity Store for Active Directory

In Admin Center, click __Identity Stores__ in the left pane.

On the __Identity Stores__ page, click __Create Identity Store__ in the top right corner.

On the __Create Identity Store__ page, use the __Store Type__ drop-down list to select an identity provider to create an identity store for.  
This list displays the supported providers. By default, Active Directory is selected. Fields on this page vary,
depending on the provider you select.

Enter a name for the identity store in the __Name__ box.

In the __Domain Name__ box, enter the fully qualified name of the Active Directory domain you want to create the identity store for.

In the __Service Account__ box, enter the username of a service account or a group managed service account (gMSA) to connect to Active Directory.

- __For a service account:__ The service account must have sufficient privileges on the provider to facilitate group and identity management operations using GroupID. The minimum permissions the service
  account requires for Active Directory are discussed in the [Service Account for Active Directory and Exchange](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/moreinfo/adserviceaccount.md) topic.
- __For a gMSA:__ If you provide a service account with ‘$’ as its last character (as in MyAdminAccounts$), GroupID entertains it as a Group Managed Service Account (gMSA). To use a gMSA to connect
  an identity store to Active Directory, make sure the gMSA is configured properly and has sufficient permissions. See the [gMSA for Active Directory](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/moreinfo/gmsarequirements.md) topic.

In the __Service Account Password__ box, enter the service account password.  
Skip this box for a gMSA.

Select the __SSL Enabled__ check box if the directory server is LDAP over SSL enabled.

NOTE: GroupID 11 supports LDAPS; however, the Replication Service will still connect to the domain controller via the LDAP 389 port. Hence, both LDAP and LDAPS protocols must be enabled on the domain controller.

Click __Create Identity Store__. The __Replicate Identity Store__ message is displayed. Select:

- __Later:__ replicates all the objects to Elasticsearch at the next due replication time as per the replication settings.
- __Replicate Now:__replicates all the objects to Elasticsearch now.

The identity store is available on the __Identity Stores__ page. You can specify different configurations for it.

## Create an Identity Store for Microsoft Entra ID

In Admin Center, click __Identity Stores__ in the left pane.

On the __Identity Stores__ page, click __Create Identity Store__ in the top right corner.

On the __Create Identity Store__ page, use the __Store Type__ drop-down list to select an identity provider to create an identity store for.  
This list displays the supported providers. Select _Microsoft Azure_.

Enter a name for the identity store in the __Name__ box.

From the __Cloud__ drop-down list, select the cloud where your Microsoft Entra ID tenant exists.

In the __Domain Name__ box, enter the fully qualified name of the Microsoft Entra ID domain you want to create the identity store for.

Specify the path to the PFX certificate in the __PFX Certificate__ box. For that, click __Choose File__ and browse for the file. Select it and click __Open__.  
As a prerequisite, the PFX certificate must be generated on the GroupID server and exported to this machine for upload.

In the __PFX Certificate Password__ box, enter the password that was created while exporting the PFX certificate.

In the __Registered Application ID on Azure Active Directory__ box, enter the application ID assigned to the GroupID application when you registered it in Microsoft Entra Admin Center.

In the __Registered Client Secret on EntraID__ box, provide the client secret value generated against the certificate uploaded to Microsoft Entra Admin Center while registering the GroupID application.

If you bind a custom domain with your Microsoft Entra ID tenant and create an identity store for Microsoft Entra ID using the credentials of that custom domain, then you must provide the name of the primary domain in the __Primary Domain Name__ box, so that the _write_ operations are not affected.

Click __Create Identity Store__. The __Replicate Identity Store__ message is displayed. Select:

- __Later:__ replicates all the objects to Elasticsearch at the next due replication time as per the replication settings.
- __Replicate Now:__replicates all the objects to Elasticsearch now.

The identity store is available on the __Identity Stores__ page. You can specify different configurations for it.

NOTE: Microsoft’s throttling policy restricts an application (such as GroupID) to create a maximum of 3 concurrent sessions with Microsoft Entra ID. With this in view, GroupID allows only one active session at any given time, which is used by Data service
and Replication service.

## Create an Identity Store for Generic LDAP

Create a Generic LDAP identity store to connect to any LDAP version 3-compliant directory server, such as Sun ONE directory server. This provider does not support dynamic schema detection. The schema included for this provider mostly contains commonly
used fields.

__To create an identity store:__

In Admin Center, click __Identity Stores__ in the left pane.

On the __Identity Stores__ page, click __Create Identity Store__ in the top right corner.

On the __Create Identity Store__ page, use the __Store Type__ drop-down list to select an identity provider to create an identity store for.  
This list displays the supported providers. Select _Generic LDAP_.

Enter a name for the identity store in the __Name__ box.

In the __Hostname__ box, enter the fully qualified domain name or IP address of the machine that hosts the generic LDAP server.

In the __Port Number__ box, enter the port on which LDAP is running. This port is used to communicate with the host machine.

In the __Domain Name__ box, enter the fully qualified name of the domain you want to create the identity store for.

In the __Service Account__ box, enter the fully qualified username of a service account (for example, CN=Admin,CN=Users,DC=Imanami,DC=COM) to connect to _Generic LDAP_. The service
account must have sufficient privileges on the provider to facilitate group and identity management operations using GroupID.

In the __Service Account Password__ box, enter the service account password.

Click __Create Identity Store__. The __Replicate Identity Store__ message is displayed. Select:

- __Later:__ replicates all the objects to Elasticsearch at the next due replication time as per the replication settings.
- __Replicate Now:__replicates all the objects to Elasticsearch now.

The identity store is available on the __Identity Stores__ page. You can specify different configurations for it.

## Create an Identity Store for Google Workspace

In Admin Center, click __Identity Stores__ in the left pane.

On the __Identity Stores__ page, click __Create Identity Store__ in the top right corner.

On the __Create Identity Store__ page, use the __Store Type__ drop-down list to select an identity provider to create an identity store for.  
This list displays the supported providers. Select _Google Workspace_.

Enter a name for the identity store in the __Name__ box.

In the __Service Account__ box, enter the service account name assigned to you when you created your Google Workspace account.

In the __Admin Username__ box, enter the username of an authorized user account to connect to the provider.  
The account must have the _Super Admin_ role in Google Workspace to facilitate group and identity management
operations using GroupID.

In the __API Key__ box, enter the API key generated for your account in Google Workspace.  
To generate the key, see [Create access credentials](https://developers.google.com/workspace/guides/create-credentials).

Specify the path to the p12 key file in the __P12 Certificate__ box. For that, click __Choose File__ and browse for the file. Select it and click __Open__.  
As a prerequisite, the p12 key file for your account must be generated in Google Cloud Console and downloaded to a machine.

Click __Create Identity Store__. The __Replicate Identity Store__ message is displayed. Select:

- __Later:__ replicates all the objects to Elasticsearch at the next due replication time as per the replication settings.
- __Replicate Now:__replicates all the objects to Elasticsearch now.

The identity store is available on the __Identity Stores__ page. You can specify different configurations for it.

__See Also__

- [Service Accounts](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/moreinfo/overview.md)
- [Manage an Identity Store](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/manage.md)
- [Configure an Identity Store](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure.md)
