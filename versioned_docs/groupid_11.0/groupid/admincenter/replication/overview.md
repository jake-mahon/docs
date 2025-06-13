# Elasticsearch and Replication

Searches performed in GroupID are catered through Elasticsearch.

Elasticsearch relies on two services:

- __Elasticsearch Service__ is responsible for searching the Elasticsearch repository and displaying search results when a search is performed through GroupID. If this service stops, Elasticsearch will not work.
- __Replication Service__ is responsible for replicating attributes of the following objects from the provider (such as Active Directory) to Elasticsearch.

  - Group
  - User
  - Contact
  - Computers
  - Organizational Unit

The Replication service only replicates changes that are made to these objects on the directory server. Changes made to these objects using Admin Center, GroupID portal, Management Shell, or the GroupID mobile app, are directly saved in the
Elasticsearch repository and replicated to the GroupID database by the Data service. See the [Data Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/overview.md) topic.

Synchronize directly updates objects in the directory. As soon as objects are provisioned, de-provisioned, or updated in the directory using Synchronize, the Replication service replicates them to Elasticsearch.

Synchronize history is saved to Elasticsearch when Active Directory, Microsoft Entra ID, Generic LDAP, or Google Workspace is the destination provider in the respective Synchronize job. This history is replicated to the GroupID database by the Data
s ervice.

NOTE: The __Recycle Bin__ in the GroupID portal fetches data from the directory server and not from Elasticsearch.

## Replication Settings

In Admin Center, you can specify settings for the Replication service at the global and local levels. Global settings apply to all identity stores in GroupID while local settings are specific to an identity store.

- At the global level, you can schedule the service to run every x minutes to replicate object attributes to Elasticsearch. You can also manually restore object data to Elasticsearch. See the [Manage Global Replication Settings](/versioned_docs/groupid_11.0/groupid/admincenter/replication/settings.md) topic.
- For an identity store, you can specify the object attributes the service should replicate to Elasticsearch. See the [Manage Local Replication Settings](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/replication.md) topic.

NOTE: The Replication service does not replicate excluded domains for an identity store. See the [Exclude an Active Directory Domain from Replication](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/manage.md#Exclude-an-Active-Directory-Domain-from-Replication) topic.

## Replication Service Logs

Logs for the Replication service are stored in the folder for the service on the GroupID server.

To view the logs:

1. Launch IIS on the GroupID server and navigate to:  
   …\Sites\GroupIDSite11\GroupIDReplicationService
2. Right-click this folder and select __Explore__.
3. Locate the __Logs__ folder to read the logs.

Events are logged in a text file. When the file size reaches 100 MB, GroupID archives it in the same directory by replacing the file extension with the suffix .Log.X and then creating a new text file with the original name. X in .Log.X is a number from
1 to 10 representing the archiving order; where ‘1’ denotes the most recent file.

__See Also__

- [Manage Global Replication Settings](/versioned_docs/groupid_11.0/groupid/admincenter/replication/settings.md)
- [Manage Local Replication Settings](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/replication.md)
- [Replication Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/replicationservice.md)
