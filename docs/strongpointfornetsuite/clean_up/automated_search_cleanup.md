# Automated Search Clean Up

The Automated Search Clean Up feature runs as scheduled, or on demand, using custom rules to find and manage Saved Searches. Accumulated searches contribute to inefficiency in NetSuite accounts.

Review the [Automated Search Clean Up Considerations](/docs/strongpointfornetsuite/clean_up/automated_search_cleanup_considerations.md) prior to using this feature.

Saved Searches are powerful customizations used throughout NetSuite and interconnected to other customizations. As user-created Saved Searches proliferate, NetSuite accounts become inefficient and overall performance degrades. This rules-based tool provides administrators the ability to identify and archive Saved Searches and keep NetSuite accounts organized, easy to understand, and improve efficiency and performance. Archived searches can be restored with limitations.

The __Automated Search Clean Up__ tool has two operating modes:

- __Automatic__ - scheduled automated search cleanup that runs continuously and completes within 14 days.
- __Run Now__ - adhoc run of automated search cleanup that triggers once and completes within 7 days of notifying owners and users. If you choose to not send notifications, searches are archived immediately.

These searches are excluded from clean up:

- Searches from managed bundles
- Searches from 3rd party bundles
- Searches with script/script deployment dependencies, workflow dependencies, field/data sourcing dependencies, and documented integration dependencies
- Searches with role dependencies
- Searches with group dependencies
- Agent control searches
- Searches with Change/Approval Policy requiring a Change Record
- Search record types not in Suitescript Supported Records

Menu options are available to access the rules and lists:

- Search Clean Up Rules
- Search Clean Up Status
- Archived Searches
- Retained Searches
- Searches To Be Archived

## Search Clean Up Rules

Search Clean Up rules are created by the administrator and used to locate Saved Searches matching the rule criteria. Search Clean Up rules are used for both Automatic and Run Now.

To create or edit rules, access __Strongpoint__> __Automated Search Clean Up__ > __Search Clean Up Rules__

![autocleanup](/img/product_docs/strongpointfornetsuite/clean_up/autocleanup.webp)

- __Name__ is the assigned name for the __Search Clean Up Rule Record__.
- __Rule Owner(s)__ is the administrator or owners for the rule record.
- __Description__ is the purpose of the rule record. An informative description helps administrators easily maintain and identify rules.
- __Notify Search Owners Prior to Archive__ check to send email to search owners prior to archive. Default is checked.
- __Notify Search Users Prior to Archive__ check to send email to search users prior to archive. Default is checked.
- __Notify Supervisor for Inactive Owners__ check to send email to an inactive owner's supervisor. Default is checked.
- __Automatic__ is used to include the rule in the automated search. This option is not available until the __Preview__ function has been used.
- __Inactive__ check to exclude this Search Clean Up Rule from the automated search.
- __Filter Summary__ displays all of the current filters for the rule.
- __Notes__ displays information about the Search Clean Up for this rule.

__Schedule__

This section is available when __Automatic__ is checked.

![autocleanupscheduler](/img/product_docs/strongpointfornetsuite/clean_up/autocleanupscheduler.webp)

- __Weekly Event__: check and enter the __Repeat__ frequency to schedule clean up weekly.
- __Monthly Event__: check and enter the __Repeat__ frequency to schedule clean up monthly.
- __Yearly Event__: check to schedule a yearly run.
- __Next Run Date__: this field is populated by the system, and cannot be edited. The date is added when the schedule is saved.
- __End By__: pick a date to stop running automatic clean up.
- __No End Date__: check to never stop the scheduled clean up.

__Basic Filters__

- __Search Name__ filters searches to clean-up by name. Filter operator is _startswith_ and the wildcard _%_ may be used. Default is blank.  
   Example: _Custom % Search%_ returns all searches with a name starting with '_Custom_ ' followed by any character and the name must contain '_Search_' such as _Custom Inventory Detail Search_.
- __Search ScriptID__ filters searches to clean-up by ID. Filter operator is _startswith_ and the wildcard _%_ may be used. Default is blank.  
   Example: _%testing_ returns all searches with an ID containing the word '_testing_' such as _customsearch_testing_1_.
- __Months Since Date Last Used, Retained/Restored__ filters searches by the last run date of the search or the restore/retain date, whichever is the most recent. Searches that have been used, restored, or retained within the specified timeframe are excluded from the search. Default is __6__ months.
- __Exclude Private Searches__ excludes searches set as __Private__ by search owners. Default is checked.
- __Exclude Scheduled Searches__ excludes searches set to run on a schedule. Default is checked.
- __Exclude Searches That Send Triggered Emails__ excludes searches that send scheduled results reports. Default is checked.
- __Exclude Searches Less Than A Month Old__ excludes new searches that have not been run. Default is checked.
- __Exclude Searches Available As Sublist__ excludes searches available as a sublist in a Record. Default is checked.

__Advanced Filters__

- __Search Owner(s)__ filters searches by matching selected owners or if __Exclude Owner(s)__ is checked, to exclude matching owners for the rule. Multiple owners can be selected. Default is blank and unchecked.
- __Owner's Department(s)__ filters searches by matching departments to the rule or if __Exclude Department(s)__ is checked, to exclude matching departments for the rule. Multiple departments can be selected. Default is blank and unchecked.
- __Owner's Subsidiary__ filters searches by matching subsidiaries to the rule or if __Exclude Subsidiary__ is checked, to exclude matching subsidiaries for the rule. Multiple subsidiaries can be selected. Default is blank and unchecked.
- __Inactive Owner(s)__ filters searches by matching inactive owners. Default is blank.
- __All Inactive Owners__ filters searches by all inactive owners. Default is unchecked. A maximum of 1000 inactive users are loaded. A warning is displayed if there are additional inactive users.

__Excluded Searches From Preview__

Lists any searches excluded after the __Preview__ function is used.

### Rule Preview

The __Preview__ function provides a quick method to mark Saved Searches to be retained or to included for clean up. The Run Now feature begins an immediate run for the rule.

1. Administrators can click __Preview__ on an Search Clean Up Rule. __Preview__ displays the rule, filters and conditions.
2. Review the Search List.  
    Check __Include__ to trigger a final notification email to be sent to the owner/user.  
    Check __Retain Search__ to keep the search.
3. Click Run Now to begin a Search Clean Up for the rule.
4. Click __Confirm__.
5. After previewing, you can click __Automatic__ on the Search Clean Up Rule to include the rule for automatic searches.

![cleanup_preview](/img/product_docs/strongpointfornetsuite/clean_up/cleanup_preview.webp)

### Run Now

This option immediately begins an Search Clean Up using the current rule.

If a Saved Search matches the Clean Up Rule:

1. Summary notification of all the matching saved searches is sent to the rule owner.
2. Immediate notice to all search owners and search users with their searches that are about to be archived. Notifications include a __Retain this Search__ link. A __Preview__ link is available for the user to view the Search.
3. If the __Retain Search__ link is not used and the Saved Search has not been used, final notifications are sent to all search owners and search users seven calendar days after the __Run Now__ option was used. The notification includes the date the search is to be archived.
4. If the __Retain Search__ link is not used and the Saved Search has not been used by the archive date:

   - Saved Search is archived.
   - Archive notifications are sent to rule owner and all search owners/users.
   - Search is added to administrator's Archived Searches list.
   - Summary notification of all auto-archived searches are sent to the rule owner.

## Automated Run Workflow

__Automated Search Clean Up__ runs continuously comparing searches to all rules marked __Automatic__. Administrators receive weekly summary information containing: __identified searches__, __retained searches__, __scheduled to be archived searches__ and __archived searches__.

1. When a Saved Search matches a Clean Up Rule:

   - Notification is emailed to the rule owner. The Saved Search is also included in the summary notification to the rule owner.
   - Notifications are sent the first closest Sunday since the rule was marked __Automatic__.
   - Notification is emailed to the search owners unless __Notify Search Owners Prior to Archive__ is turned off for the rule.
   - Notification is emailed to the search users unless __Notify Search Users Prior to Archive__ is turned off for the rule.
   - All email notifications include a __Retain this Search__ link. A __Preview__ link is available for the user to view the Search.
   - Saved Search is added to the __Automated Search Clean Up__ > __Searches To Be Archived (Auto)__ list.
2. If the __Retain Search__ link is not used and the Saved Search has not been used, second notifications are sent the following Sunday after the first notification date. The notification includes the date the search is to be archived.
3. If the __Retain Search__ link is not used and the Saved Search has not been used by the archive date:

   - Saved Search is archived.
   - Archive notifications are sent to rule owner and all search owners/users.
   - Search is added to administrator's Archived Searches list.

![cleanup_tab](/img/product_docs/strongpointfornetsuite/clean_up/cleanup_tab.webp)

## Search Clean Up Status

Open __Strongpoint__> __Search Auto Clean Up__ > __Search Clean Up Status__ to view current status.

- __Job Type__: __Run Now__ or __Automatic__.
- __Status__:  
  __Pending__ - initial status for the run.  
  __Pending Notification__ - searches have been identified, no notifications sent.  
  __In Notice Period__ - at least one notification has been sent.  
  __Processing__ - search is being auto-archived.  
  __Completed__ - all identified searches have been archived, and email sent to rule owner and administrator.  
  __Canceled__ - __Automatic__ checkbox was turned off for the rule.

![cleanup_status](/img/product_docs/strongpointfornetsuite/clean_up/cleanup_status.webp)

Click __Notification Tracker__ on the __Notifications__ tab to launch the tracker.

![cleanup_notifications_tab](/img/product_docs/strongpointfornetsuite/clean_up/cleanup_notifications_tab.webp)

### Notification Tracker

Accesses all of the communications and history for search clean ups. You can list all notifications sent by rule or by the job. Provides traceability between the clean up rules, clean up jobs, and email notifications.

![cleanup_notification_tracker](/img/product_docs/strongpointfornetsuite/clean_up/cleanup_notification_tracker.webp)

## Retaining a Search

Notification emails contain a link to __Retain this search__ for each listed search or __Retain All__ to keep all of them. Use the __Preview__ link to view each Search.

![cleanup_warning](/img/product_docs/strongpointfornetsuite/clean_up/cleanup_warning.webp)

__Retain this search__ prevents archiving an individual search. The __Retain Search__ form is displayed so you can add the __Reason for Retaining__ the search. Click __Save and Exit__ when complete.

![Provide a reason to retain an individual search](/img/product_docs/strongpointfornetsuite/clean_up/clean_up_retain_search.webp)

__Retain All__ opens a page where you can provide the __Reason__ to retain each search. Check the Apply box for each search. When finished, click __Retain Search__.

![Retain All dialog to provide retention Reason](/img/product_docs/strongpointfornetsuite/clean_up/clean_up_retain_all.webp)

The Retain process:

- Updates the __Date Last Used, Retained/Restored__ to the current date.
- Adds the search to the __Automated Search Clean Up__ > __Retained Searches__ report. The __Search Retain Reason__ is shown on this report.
- Notifies the owners/users the search will be retained.

## Auto Archiving a Search

If search owners or users do not click on __Retain this search__ in the email notifications, the search is archived. The Archive process:

- Archives the search.
- Adds the search to the __Automated Search Clean Up__ > __Archived Searches__ report.
- Marks Customization record for the search __Inactive__.
- A __Restore__ button is added to the __Clean Up__ tab on the customization record for the search.
- Auto Archive notifications are sent to the rule owner and administrators. A __Restore__ link is included in the email.

## Restoring an Auto Archived Search

A NetSuite Administrator can restore an auto archived search with some limitations. Open the __Clean Up__ tab of the Customization record for the search or the report __Automated Search Clean Up__ > __Archived Searches__. Click __Restore__. Or use the __Restore__ link in the email sent to the rule owner and administrators.

- Search is restored with limitations. Restored searches have a different internal ID from their original version, resetting the audit trail.
- Updates the __Date Last Used, Retained/Restored__ to the current date.
- Adds the search to the __Automated Search Clean Up__ > __Retained Searches__ list.

![cleanup_restore](/img/product_docs/strongpointfornetsuite/clean_up/cleanup_restore.webp)

### Limitations to Restoring Auto Archived Searches

Items from the __Criteria__ and __Results__ tabs are restored with the exception of __Public__ searches with the __Period__ filter. Auto archiving does not occur with __Private__ searches with the __Period__ filter, as they cannot be deleted or archived.

The following check boxes on the Search form are not restored if they were checked:

- Available as List View
- Available as Dashboard View
- Available as SubList View
- Available for Reminders
- Show in Menu

Items from the following tabs on the Search form are not retained when an auto archived search is restored:

- Highlighting
- Available Filters
- Audience
- Email
- Audit Trail: the restored search is assigned a new Internal ID. The audit trail only contains entries for the new Internal ID.

![Search form](/img/product_docs/strongpointfornetsuite/clean_up/limitation_restoring_searches.webp)
