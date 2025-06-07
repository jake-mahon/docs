# Exchange Mailbox

Use the __Exchange Mailbox__ source to enable the crawling and classification of content stored in a single Exchange mailbox on the on-premises Exchange server or Exchange Online.

__Step 1 –__ In Netwrix Data Classification management console, open the __Sources__ view and click __Add__.

__Step 2 –__ Select __Exchange Mailbox__ source type and in the properties window specify the necessary settings.

## Authentication type: Modern authentication

If you plan to use this authentication type (available only for Exchange Online mailbox processing), specify the following:

| Option | Description |
| --- | --- |
| Authentication type | Select __Modern (Exchange Online)__ |
| Admin Username | Specify the administrative account for the required Exchange Online organization. The user must have a mailbox connected to it in order to crawl Exchange. |
| Tenant ID | Enter the __Tenant ID__ you obtained at [Step 5: Obtain Tenant ID](/docs/product_docs/dataclassification/ndc/configuration/configinfrastructure/azureappexchangeonlinemfa.md#Step-5-Obtain-Tenant-ID). |
| Certificate thumbprint | Enter the certificate thumbprint you prepared at [Step 4: Configure Certificates & secrets](/docs/product_docs/dataclassification/ndc/configuration/configinfrastructure/azureappexchangeonlinemfa.md#Step-4-Configure-Certificates-secrets). |
| Application ID | Enter the app ID you got at application registration at [Step 2: Create and Register a new app in Azure AD](/docs/product_docs/dataclassification/ndc/configuration/configinfrastructure/azureappexchangeonlinemfa.md#Step-2-Create-and-Register-a-new-app-in-Azure-AD) (it can be found in the Azure AD app properties >__Overview__). |

[![exchangeonline_cfg_modern_auth_thumb_0_0](/static/img/product_docs/dataclassification/ndc/admin/sources/exchangemailbox/exchangeonline_cfg_modern_auth_thumb_0_0.png)](/docs/product_docs/dataclassification/resources/images/sources/exchangeonline_cfg_modern_auth.png)

## Authentication type: Basic

If you plan to use this authentication type, you will need to specify the following:

| Option | Description | Comments |
| --- | --- | --- |
| Email Address / Password | __Administrator__ account that has been assigned both:   1. __Impersonation__ right 2. __Discovery Management__ role | See [Configure Microsoft Exchange for Crawling and Classification](/docs/product_docs/dataclassification/ndc/configuration/configinfrastructure/exchange.md) for details on the rights assignment. |

## Other configuration settings

By default, only basic settings are displayed. To view advanced options, click the "wrench" icon at __Settings__ in the bottom.

| Option | Description | Comments |
| --- | --- | --- |
| __Basic settings__ |  |  |
| Mailbox | Mailbox to be crawled. | When using impersonation, the settings can be like the following example:   - Email Address - administrative account granted Impersonation right, e.g. _administrator@cs.com_ - Mailbox  - target mailbox, e.g. _test@cs.com_. |
| Crawl Range | Define what portions of data should be retrieved from the Exchange server:   - Select __Date Range__ to crawl a static set of data within the required interval. - Select __Since__ if you want to periodically re-crawl content from the specified date, taking into account the last crawl date for each object. |  |
| Crawl In-Place Archive | Select this option if you want to crawl Exchange Online in-place archive mailboxes. | Applies to Exchange Online. |
| OCR Processing Mode | Set the processing mode for document images:   - __Disabled__ - document images will not be processed - __Default__ - defaults to the source setting (if configuring a path) or the global setting (if configured on a source) - __Normal__ - process the images with normal quality settings - __Enhanced__ - upscale the images further to allow more accurate results. | The __Enhanced__ mode will provide better accuracy but can lead to longer processing time if the images do not contain text. |
| Source Group | Select the source group (if any). |  |
| Pause source on creation | Select if you want to make other configuration changes before data collection occurs. |  |
| __Advanced settings__ |  |  |
| Build Search Index | Select if you want search index to be created. |  |
| Re-Index Period | Specify how often the source should be checked for changes. Default is __7__ days. | Netwrix recommends using default values. |
| Priority | Set priority for this data source to be crawled. Select the priority level from the list values:   - Highest - High - Normal - Low - Lowest |  |
| Document Type | Specify a value which can be used to restrict queries when utilizing the Netwrix Data Classification search index. |  |
