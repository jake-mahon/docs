# Dynamic Source Groups — SharePoint Online

This section contains information on how to configure SharePoint Online dynamic source groups. Toggle between Basic and Advanced configuration settings by clicking the icons in the Settings button in the bottom left corner of the page.

![dynamicsourcegroupspo](/img/product_docs/dataclassification/ndc/admin/sources/sourcegroups/dynamicsourcegroups/dynamicsourcegroupspo.png)

The following options can be configured for SharePoint Online Dynamic Source Groups:

| Option | Description |
| --- | --- |
| URL | Enter the URL for the SharePoint Online tenant. Entering a tenant here will apply the configurations on the Source Configuration page to all source groups that are created under the tenant. |
| Authentication Type | Credentials — Selecting __Credentials__ enables users to authenticate using username and password credentials  Modern (O365) — Selecting __Modern (O365)__ enables users to authenticate using Tenant ID |
| Match Rules | At least one match rule must be included, match rules are Regular expressions, such as:   - ```https:\/\/example.sharepoint.com\/sites\/.*``` - ```.*\/Personal\/.*``` - ```https:\/\/example-my.sharepoint.com\/.*``` |
| Classification Template | Search for a Classification Template to apply to Dynamic Source Groups |
| Detection Period | The Detection Period set here will apply to all SharePoint Online source groups configured under the URL set in the URL text field. Use the slider to change the Detection Period. To disable detection, set the period to __0__ days and __0__ hours. |
| Re-Index Period | The Re-Index Period set here will apply to all SharePoint Online source groups configured under the URL set in the URL text field. Use the slider to change the Re-Index Period. To disable re-indexing, set the period to __0__. |
