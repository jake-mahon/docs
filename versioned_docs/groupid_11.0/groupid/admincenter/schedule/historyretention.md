# History Retention Schedule

While configuring history tracking for an identity store, you can choose to keep history records forever in the GroupID database or retain history for a specific period (see the [Configure History Tracking](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/directoryservice/historytracking.md) topic). In case you select the
latter option, the History Retention schedule is auto created for the identity store. This schedule runs on a specified frequency to check if the retention period is over for any history records, and if so, move them from the GroupID database to the
following .csv files:

- __History__ - contains history data of the GroupID portal, Synchronize, GroupID Management Shell, scheduled jobs, and the GroupID mobile app. It also contains history data for the identity store, security roles,
  and workflow configurations.
- __AuditingHistory__ - contains history data of all authentication actions performed in GroupID, as logged in Helpdesk history. See the [History in Helpdesk](/versioned_docs/groupid_11.0/groupid/admincenter/helpdesk/history.md) topic.
- __PasswordCenterHistory__ - contains history data of all actions tracked in Helpdesk, except the authentication action. See the [History in Helpdesk](/versioned_docs/groupid_11.0/groupid/admincenter/helpdesk/history.md) topic.
- __AdminCenterHistory__ - contains Admin Center history data. See the [Admin Center History](/versioned_docs/groupid_11.0/groupid/admincenter/general/history.md) topic.

These files are available at the following location on the GroupID server:  
X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\GroupIDDataService\Web\HistoryBin\  
(X is the GroupID installation drive)

History data moved to these files is not longer displayed in GroupID.

NOTE: Admin Center history does not fall in a specific identity store, so its retention mechanism is different. GroupID checks the identity store of the user who performed an action logged in Admin Center history, and archives that record according to the history retention setting of the identity store that user belongs to.

After the History Retention schedule runs, the following information is displayed on the __History__ page in identity store configurations:

![historyretention](/img/versioned_docs/groupid_11.0/groupid/admincenter/schedule/historyretention.png)

You cannot create or delete a History Retention schedule; only update the existing one.

What do you want to do?

- [Update the History Retention Schedule](#update-the-history-retention-schedule)

## Update the History Retention Schedule

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Schedules__ under __Settings__ in the left pane.
4. On the __Schedules__ page, click the plus sign next to __History Retention__. Then click the ellipsis button for the schedule and select __Edit__.
5. On the __Edit Schedule__ page, the schedule name is displayed in the __Schedule Name__ box as read-only.  
   The default name format is: _HistoryRetention\_`<identity store ID>`\_`<identity store name>`_.
6. The __Name Preview__ box displays the schedule name as HistoryRetention; the schedule is displayed with this name in email notifications.
7. In the __Scheduler Service Name__ drop-down list, select a Scheduler service that would be responsible for triggering this schedule. The number of services displayed in the list depend on the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler service. See the [Scheduler Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/schedulerservice.md) topic.
8. The __Triggers__ area displays the default triggering frequency for the schedule.

   - To change a trigger, click __Edit__ for it.
   - To add a new trigger, click __Add Trigger__.

   Follow step 11 in
   the [Create a Group Usage Service Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/groupusageservice.md#create-a-group-usage-service-schedule) topic to manage triggers.
9. Click __Update Schedule__.
10. On the __Schedules__ page, click __Save__.   
    For general schedule info, see the [View the Schedules in an Identity Store ](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/manage.md#view-the-schedules-in-an-identity-store) topic.

See Also

- [Schedules](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/overview.md)
