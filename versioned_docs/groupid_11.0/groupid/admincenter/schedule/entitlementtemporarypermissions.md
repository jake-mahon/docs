# Entitlement Temporary Permissions Schedule

An Entitlement Temporary Permissions schedule is automatically created for an identity store when:

- A server is added for permission analysis on the __Entitlement__ page in an Active Directory identity store. See the [Manage File Servers](/versioned_docs/groupid_11.0/groupid/admincenter/entitlement/ad/manage.md) for additional information on adding a server.

  Or
- A SharePoint site is added for permission analysis on the __Entitlement__ page in a Microsoft Entra ID identity store. See the [Manage SharePoint Sites](/versioned_docs/groupid_11.0/groupid/admincenter/entitlement/entraid/manage.md) topic for additional information on adding a SharePoint site.

The Entitlement Temporary Permissions schedule updates the temporary permissions granted to objects on shared files and folders residing on file servers (for Active Directory), and the document libraries in SharePoint sites (for Microsoft Entra ID). This is how it works:

- Administrators and other users can set a start and end date to grant certain permission(s) temporarily to an object on shared resources, such as file shares and document libraries in a SharePoint site.
- They can also set a start and end date to revoke certain permission(s) temporarily for an object on shared resources, such as file shares and document libraries in a SharePoint site.
- The Entitlement Temporary Permissions schedule temporarily grants and revokes permissions for an object on the specified dates.

Let’s assume that the Entitlement Temporary Permissions schedule is scheduled to run once a week, say Mondays. If temporary permissions are to be granted to an object on file server share for three days - Wednesday till Friday, it will not happen. This is
because the Entitlement Temporary Permissions schedule did not run on the specific days for temporary permissions update. Make sure that the schedule is set to run at a frequency that meets your temporary permission requirements.

The Entitlement Temporary Permissions schedule runs in the context of the following accounts:

- For file servers, the schedule runs in the context of the service account defined for the identity store. In case you specify a different account for a file server, the schedule runs in the context of the changed account. See the [Connect to a File Server Using a Different Account](/versioned_docs/groupid_11.0/groupid/admincenter/entitlement/ad/manage.md#Connect-to-a-File-Server-Using-a-Different-Account) topic.
- For a SharePoint site, the schedule runs in the context of the account you specified to connect to the SharePoint admin site. In case you specify a different account for a site, the schedule runs in the context of the changed account. See the [Connect to a Site Using a Different Account](/versioned_docs/groupid_11.0/groupid/admincenter/entitlement/entraid/manage.md#Connect-to-a-Site-Using-a-Different-Account) topic.

You cannot create or delete an Entitlement Temporary Permissions schedule; only edit the existing schedule.

What do you want to do?

- [Follow the steps to udpate the Entitlement Temporary Permissions schedule.](#Follow-the-steps-to-udpate-the-Entitlement-Temporary-Permissions-schedule)

## Update the Entitlement Temporary Permissions Schedule

Follow the steps to udpate the Entitlement Temporary Permissions schedule.

Step 1 – In Admin Center, click __Identity Stores__ in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select __Edit__.

Step 3 – Click __Schedules__ under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign next to Entitlement Temporary Permissions. Then click the ellipsis button for the schedule and select __Edit__.

Step 5 – On the Edit Schedule page, the Schedule Name and Name Preview boxes display the name of the schedule as read-only. The name format is _Entitlement\_`<the name of the machine the schedule is created on>`\_ TemporaryPermission_.

Step 6 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be responsible for triggering this schedule. The number of services displayed in the list depend on the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler service. See the [Scheduler Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/schedulerservice.md) topic.

Step 7 – The __Triggers__ area displays the default triggering frequency for the schedule.

- To change a trigger, click __Edit__ for it.
- To add a new trigger, click __Add Trigger__.

Step 8 – Follow step 11 in
the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic to manage triggers.

Step 9 – After making the changes, click __Update Schedule__.

Step 10 – On the Schedules page, click __Save__.  
For general schedule info, see the [View the Schedules in an Identity Store ](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/manage.md#View-the-Schedules-in-an-Identity-Store)topic.

See Also

- [Schedules](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/overview.md)
