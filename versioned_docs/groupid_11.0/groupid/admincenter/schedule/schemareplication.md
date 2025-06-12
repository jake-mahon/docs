# Schema Replication Schedule

An Identity store is built on an identity provider, that could be Active Directory, Microsoft Entra ID, Google Workspace, or Generic LDAP. The Schema Replication schedule replicates the schema of these identity providers to the GroupID database.

Unlike other schedules that exist separately for each identity store, GroupID has only one Schema Replication schedule that serves all identity stores. While the schedule is displayed separately for each identity store, it does not represent separate schedules. So when you run the Schema Replication schedule for an identity store, it replicates the schema for all identity stores in GroupID. And if you terminate it, the process is terminated for all identity stores. Moreover, the schedule runs every time it is triggered from any of the identity stores, be it manually or according to its triggers.

When the Schema Replication schedule runs for the first time, it replicates schema from scratch. In all subsequent runs, it replicates any changes made to the schema. Of this replicated schema, you can choose the object attributes you actually want to use in an identity store. See the [Specify Object Attributes to Replicate](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/replication.md#Specify-Object-Attributes-to-Replicate) topic for details.

NOTE: For Microsoft Entra ID, schema is replicated from the schema file for Graph API v 3.26.0.

The Schema Replication schedule runs in the context of the super admin account in the GroupID provider. You cannot create or delete a Schema Replication schedule; only update the existing one.

What do you want to do?

- [Update the Schema Replication Schedule](#Update-the-Schema-Replication-Schedule)

## Update the Schema Replication Schedule

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click the plus sign next to __Schema Replication__. Then click the ellipsis button for the schedule and select __Edit__.
5. On the __Edit Schedule__ page, the __Schedule Name__ and __Name Preview__ boxes display the name of the schedule as read-only.
6. In the __Scheduler Service Name__ drop-down list, select a Scheduler service that would be responsible for triggering this schedule. The number of services displayed in the list depend on the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler service. See the [Scheduler Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/schedulerservice.md) topic.

   __CAUTION:__ In case of multiple Scheduler services, you must bind the same service with the Schema Replication schedules in all the identity stores.
7. The __Triggers__ area displays the default triggering frequency for the schedule.

   - To change it, click __Edit__ for it.
   - To add a new trigger, click __Add Trigger__.

   Follow step 11 in
   the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic to manage triggers.
8. Click __Update Schedule__.
9. On the __Schedules__ page, click __Save__.   
    For general schedule info, see the [View the Schedules in an Identity Store ](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/manage.md#View-the-Schedules-in-an-Identity-Store) topic.

See Also

- [Schedules](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/overview.md)
