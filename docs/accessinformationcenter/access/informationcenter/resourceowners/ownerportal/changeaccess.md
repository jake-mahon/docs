# Change Resource Access Wizard

The __Change Access__ button on the Owner portal opens the Change Resource Access wizard for the selected resource. You can make ad hoc changes to resource access when this feature is enabled for the resource by the Ownership Administrators.

![Change Resource Access wizard showing 1. Select Change page](/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/ownerportal/selectchangeadd.png)

This wizard has four pages, but you will only be directed to the pages applicable to your selection on the first page:

- 1. Select Change — Choose between adding access for a new user and changing access for an existing user
- 2. Add Access — Select new user and identify access level. See the [Add Access](#Add-Access) topic for additional information.

  - New users can be imported in bulk from a CSV file. See the [Import Users CSV File](#Import-Users-CSV-File) topic for additional information.
- 3. Change Access — Select users and indicate a new access level. See the [Change Access](#Change-Access) topic for additional information.
- 4. Add Notes — Enter notes that will be included in the notification sent to the user (if selected) and recorded with the historical record of this change

## Add Access

Follow the steps to add new user access to the selected resource.

__Step 1 –__ Select the desired resource in the Owner portal and click __Change Access__. The Change Resource Access wizard opens.

![Change Resource Access wizard showing 1. Select Change page](/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/ownerportal/selectchangeadd.png)

__Step 2 –__ On the Select Change page, select the __Add access for a new user__ option. If selected, the __Notify users about their change in access__ option will send an email to the users who have been granted access to the resource. Click __Next__.

![Change Resource Access wizard showing 2. Add Access page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/access/rolebased/addaccess.png)

__Step 3 –__ On the Add Access page, indicate the new users. Entering a name or email address in the search field to find and select users from Active Directory, which populate in a drop-down menu as you type. You can also import a list of users by clicking __Import__, navigating to the CSV file, and clicking __Open__ to select the file. See the [Import Users CSV File](#Import-Users-CSV-File) topic for additional information.

__NOTE:__ All users in the list will be given the same level of access. Use the __Remove__ button to remove a selected user from the list.

__Step 4 –__ When the user list is complete, select the desired access level from the drop-down menu.

- For File System or SharePoint resources – The options available are dependent upon how the Ownership Administrator configured the resource. Options may include __Read__, __Modify__, and __Full Control__.
- For groups – The only option available is __Member__, which means to grant membership in the group

__Step 5 –__ Click __Next__ to continue. The wizard advances to the Add Notes page.

![Change Resource Access wizard showing the 4. Add Notes page](/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/ownerportal/addnotesadd.png)

__Step 6 –__ On the Add Notes page, optionally enter the following information:

- Notes for this change — Enter any useful tracking information or description explaining the reason for the change
- Temporary Access — To grant only temporary access, check the box, click __Set Date__, and select an expiration date. The user will be automatically removed from the resource after the expiration date.

__Step 7 –__ Click __Next__. The Access Information Center will begin to process the updates.

_Remember,_ Notes are included in the notification sent to the user (if selected) and recorded with the historical record of this change.

![Change Resource Access wizard completed updates message](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.png)

__Step 8 –__ The action status displays on the page. When the update has completed (100%), click __Finish__. The Change Resource Access wizard closes.

__NOTE:__ If an error is reported on the Commit page, it indicates the access changes could not be made. Reach out to the Ownership Administrator. If an existing request is pending, approve the request on the Pending Requests tab of the Access Requests page via the __Access Requests__ link on the Actions panel.

The access changes that completed successfully can be viewed in the History tab of the Access Requests page via the __Access Requests__ link on the Actions panel.

### Import Users CSV File

A CSV file can be created to import a list of users.

![Example CSV File for adding user access imports](/img/product_docs/threatprevention/threatprevention/admin/configuration/systemalerting/importfile.png)

The CSV file must contain one user per row. Use the NTAccount [Domain\SamAccountName] format for the user name, for example ```NWXTECH\JSmith```.

## Change Access

Follow the steps to change or remove access for the selected resource.

__Step 1 –__ Select the desired resource in the Owner portal and click __Change Access__. The Change Resource Access wizard opens.

![Change Resource Access wizard with the 1. Select Change page with Change access for an existing user option selected](/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/ownerportal/selectchangechange.png)

__Step 2 –__ On the Select Change page, select the __Change access for an existing user__ option. If checked, the __Notify users about their change in access__ option will send an email to the users having access to the resource changed. Click __Next__.

![Change Resource Access wizard 3. Change Access page](/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/ownerportal/changeaccess.png)

__Step 3 –__ On the Change Access page, select the users from the list and click __Select__. Use the Windows ctrl-left-click key command to select multiple users. The __View Selections__ button shows a count of selected users and opens the Users selected for access change panel listing the selections.

__Step 4 –__ When the user selection list is complete, select the desired access level from the drop-down menu.

- For File System or SharePoint resources – The options available are dependent upon how the Ownership Administrator configured the resource. Options can include __Read__, __Modify__, and __Full Control__.
- For groups – The only option available is __None__, which means to remove group membership.

__Step 5 –__ Click __Next__ to continue.

![Change Resource Access wizard 4. Add Notes page](/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/ownerportal/addnoteschange.png)

__Step 6 –__ On the Add Notes page, optionally enter any useful tracking information or description explaining the reason for the change. Click __Next__. The Access Information Center will begin to process the updates.

_Remember,_ Notes are included in the notification sent to the user (if selected) and recorded with the historical record of this change.

![Change Resource Access wizard completed updates message](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.png)

__Step 7 –__ The action status displays on the page. When the update has completed (100%), click __Finish__. The Change Resource Access wizard closes.

__NOTE:__ If an error is reported on the Commit page, it indicates the access changes could not be made. Reach out to the Ownership Administrator. If an existing request is pending, process the request on the Pending Requests tab of the Access Requests page via the __Access Requests__ link on the Actions panel.

The access changes that completed successfully can be viewed in the History tab of the Access Requests page via the __Access Requests__ link on the Actions panel.
