# History in GroupID

In GroupID, history is tracked for:

- **Admin Center -** Actions performed in Admin Center, such as creating identity stores, SMS
  gateway accounts, changes to notification templates, and more.
- **Helpdesk -** Helpdesk-specific actions, such as account unlock and enrollment.
- **Identity store configurations -** Changes made to identity store configurations, including
  changes to security roles and workflows.
- **Identity store objects -** Modifications made to objects in an identity store, such as creating
  objects, updating attributes for an object, etc. It includes modifications made through:

  - GroupID portal (whether manually, through Synchronize jobs. or changes to object entitlements)
  - GroupID Management Shell cmdlets
  - GroupID mobile app
  - GroupID Admin Center (actions performed by schedules only)
  - GroupID APIs

Enabling history tracking

History for Admin Center and helpdesk is tracked by default and you cannot disable it.

However, history for identity store configurations and objects is disabled by default. You can
enable it for an identity store as well as choose to track all or specific actions. See the
[Configure History Tracking](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
topic.

Where is history displayed?

- History for Admin Center, helpdeak, and identity store configurations is displayed in Admin
  Center, each displayed on separate pages.
- History for identity store objects is displayed in the GroupID portal.

History Retention

The _history retention_ setting for an identity store enables you to choose whether you want to keep
history data forever or for a specific period. See the
[Retain Complete History Data](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md#retain-complete-history-data)
and
[Retain History for a Specific Period](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md#retain-history-for-a-specific-period)
topics. Your desired setting applies to all history tracked for the respective identity store,
including that tracked for helpdesk and Admin Center.

NOTE: Actions tracked under Admin Center history are independent of an identity store. In this case,
history retention settings apply to a history item in the context of the identity store selected by
the user to log into Admin Center to perform that action.  
**Example:** UserA selects IdentityStoreA to sign into Admin Center and creates an SMS gateway
account. This user then selects IdentityStoreB to sign into Admin Center and creates a GroupID
portal. Both actions are logged in Admin Center history. However, history retention setting of
IdentityStoreA will apply to the SMS gateway account creation action and that of IdentityStoreB will
apply to the GroupID portal creation action.

Event Logging

In addition to history tracking, GroupID provides event logging, which includes file logging and
Windows logging for GroupID clients and services. See the
[Event Logging](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
topic.

**See Also**

- [Admin Center History](/docs/directorymanager/11.0/administration/admin-center/index.md)
- [History in Helpdesk](/docs/directorymanager/11.0/administration/help-desk/index.md)
- [Identity Store History](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
  (for identity store configurations, workflows, and security roles)
- [History](/docs/directorymanager/11.0/user-guide/portal/index.md) (for directory objects)

# History Retention Schedule

While configuring history tracking for an identity store, you can choose to keep history records
forever in the GroupID database or retain history for a specific period (see the
[Configure History Tracking](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
topic). In case you select the latter option, the History Retention schedule is auto created for the
identity store. This schedule runs on a specified frequency to check if the retention period is over
for any history records, and if so, move them from the GroupID database to the following .csv files:

- **History** - contains history data of the GroupID portal, Synchronize, GroupID Management Shell,
  scheduled jobs, and the GroupID mobile app. It also contains history data for the identity store,
  security roles, and workflow configurations.
- **AuditingHistory** - contains history data of all authentication actions performed in GroupID, as
  logged in Helpdesk history. See the
  [History in Helpdesk](/docs/directorymanager/11.0/administration/help-desk/index.md) topic.
- **PasswordCenterHistory** - contains history data of all actions tracked in Helpdesk, except the
  authentication action. See the
  [History in Helpdesk](/docs/directorymanager/11.0/administration/help-desk/index.md) topic.
- **AdminCenterHistory** - contains Admin Center history data. See the
  [Admin Center History](/docs/directorymanager/11.0/administration/admin-center/index.md) topic.

These files are available at the following location on the GroupID server:  
X:\Program Files\Imanami\GroupID
11.0\GroupIDDataService\Inetpub\GroupIDDataService\Web\HistoryBin\  
(X is the GroupID installation drive)

History data moved to these files is not longer displayed in GroupID.

NOTE: Admin Center history does not fall in a specific identity store, so its retention mechanism is
different. GroupID checks the identity store of the user who performed an action logged in Admin
Center history, and archives that record according to the history retention setting of the identity
store that user belongs to.

After the History Retention schedule runs, the following information is displayed on the **History**
page in identity store configurations:

![historyretention](/img/versioned_docs/directorymanager_11.0/directorymanager/admincenter/schedule/historyretention.webp)

You cannot create or delete a History Retention schedule; only update the existing one.

What do you want to do?

- [Update the History Retention Schedule](#update-the-history-retention-schedule)

## Update the History Retention Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click the plus sign next to **History Retention**. Then click the
   ellipsis button for the schedule and select **Edit**.
5. On the **Edit Schedule** page, the schedule name is displayed in the **Schedule Name** box as
   read-only.  
   The default name format is: _HistoryRetention_`<identity store ID>`_`<identity store name>`_.
6. The **Name Preview** box displays the schedule name as HistoryRetention; the schedule is
   displayed with this name in email notifications.
7. In the **Scheduler Service Name** drop-down list, select a Scheduler service that would be
   responsible for triggering this schedule. The number of services displayed in the list depend on
   the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler
   service. See the
   [Scheduler Service](/docs/directorymanager/11.0/configuration/services/index.md)
   topic.
8. The **Triggers** area displays the default triggering frequency for the schedule.

   - To change a trigger, click **Edit** for it.
   - To add a new trigger, click **Add Trigger**.

   Follow step 11 in the
   [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#create-a-group-usage-service-schedule)
   topic to manage triggers.

9. Click **Update Schedule**.
10. On the **Schedules** page, click **Save**.  
    For general schedule info, see the
    [View the Schedules in an Identity Store ](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#view-the-schedules-in-an-identity-store)
    topic.

See Also

- [Schedules](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)
