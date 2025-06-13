# Dynamic Source Groups — Google Drive Organization

This section contains information on how to configure Google Drive dynamic source groups. Toggle between Basic and Advanced configuration settings by clicking the icons in the Settings button in the bottom left corner of the page.

![dynamicsourcegroupgd](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/source_groups/dynamicsourcegroupgd.png)

The following options can be configured for File Servers Dynamic Source Groups:

| Option | Description |
| --- | --- |
| Administrator Email | Enter the email for a Google Drive administrator account.  The information entered here cannot be edited once the configurations for this dynamic source group are saved. |
| Crawl Shared Drives | Check the box to enable data collection from shared drives. Uncheck the box to disable this option. |
| Crawl User Drives | Check the box to enable data collection from user drives. Uncheck the box to disable this option. |
| Match Rules | At least one match rule must be included, match rules are Regular expressions, such as:   - ```.*\/mySharedDrive.*``` |
| Detection Period | The Detection Period set here will apply to all SharePoint Online source groups configured under the URL set in the URL text field. Use the slider to change the Detection Period. To disable detection, set the period to __0__ days and __0__ hours. |
| JSON Import | Drag and drop a JSON file containing the service account credentials here, or copy the JSON text to the 'Project ID' field to automatically import the connection settings.  If manually configuring Connection Settings, click the __Show All Configuration Fields__ button. |
| Project ID | If applicable, paste the copied JSON text into the Project ID field to automatically import connection settings. |
| Re-Index Period | The Re-Index Period set here will apply to all SharePoint Online source groups configured under the URL set in the URL text field. Use the slider to change the Re-Index Period. To disable re-indexing, set the period to __0__. |

## Connection Fields

The following information must be provided if manually configuring connection settings:

| Option |
| --- |
| Account Type |
| Private Key ID |
| Private Key |
| Client Email |
| Client ID |
| Authorization URI |
| Token URI |
| Authorization Provider URL |
| Client Certificate URL |
