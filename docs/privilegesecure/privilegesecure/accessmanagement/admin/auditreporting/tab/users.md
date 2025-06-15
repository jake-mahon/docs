# Users Tab for Access Certification

The Users tab shows the users and groups in the selected access certification task for which the reviewer must certify access entitlement.

![userstab](../../../../../../../static/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/userstab.webp)

The Users table has the following features:

- Search – Searches the table or list for matches to the search string. When matches are found, the table or list is filtered to the matching results.
- Column headers can be resized and sorted by ascending or descending order:

  - Name – Click to open the Users and Groups Details page. See the [User, Group, & Application Details Page](../../policy/page/details/usergroupapplication.md) topic for additional information.
  - User Name – Displays the name of the account
  - Email – Displays the associated email address, if available
  - Type – User or Group
- Add button (Only visible when adding a new task) – Opens the Add Users and Groups window. See the Add Users to Review topic for additional information.

## Add Users to Review

Follow the steps to add users and groups to the access certification task.

__NOTE:__ It is not possible to add or remove users after they have been added.

__Step 1 –__ Navigate to the Audit and Reporting > Access Certification page.

__Step 2 –__ In the Access Certification Task list, select the name of the task and select the Users tab

__Step 3 –__ Click Add to open the Add Users and Groups window.

![addusers](../../../../../../../static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/auditreporting/tab/addusers.webp)

The Add Users and Groups window has the following features:

- Filter by users or groups
- Search – Searches the table or list for matches to the search string. When matches are found, the table or list is filtered to the matching results.
- Available Users/Groups – Shows all users and groups added to the console
- Users & Groups to Add – Shows the users to be added to the access certification task
- Column headers can be sorted in ascending or descending order:

  - Name – Displays the name of the account
  - User Name – SAM Account Name for the user or group
  - User Principal Name – User Principal Name (UPN) of the user or group
  - Email – Displays the associated email address, if available

__Step 4 –__ Filter by Users or Groups, or use the Search feature.

__Step 5 –__ To add a user or group to the access certification task, click a row in the Available Users/Groups table and it is immediately moved to the Users & Groups to Add table.

__Step 6 –__ (Optional) Click a row in the Users & Groups to Add table to move it back to the Available Users/Groups table.

__CAUTION:__ It is not possible to add or remove users after they have been added to the access certification task.

__Step 7 –__ Click Add to add the user(s) and group(s) to the access certification task.

The new user(s) and group(s) are added to the certification task and are shown on the Users Tab for Access Certification.

__NOTE:__ Only the assigned reviewer can interact with the entitlements once the access certification task is created.

The reviewer can now log in to see the access certification task(s) assigned to them and begin the review process. See the [Entitlements Tab for Access Certification](entitlements.md) topic for additional information.
