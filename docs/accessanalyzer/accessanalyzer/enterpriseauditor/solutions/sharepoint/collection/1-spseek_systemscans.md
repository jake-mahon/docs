# 1-SPSEEK\_SystemScans Job

This job is responsible for building the Tier2 SPDLP database repositories, which contain information regarding sensitive content that exists within SharePoint.

## Queries for the 1-SPSEEK\_SystemScans Job

The 1-SPSEEK SystemScans Job uses the SharePoint Access Data Collector for the following query:

![The query for the 1-SPSEEK SystemScans Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/spseeksystemscansquery.png)

The query for the 1-SPSEEK SystemScans Job is:

- SharePoint Scan – Scans SharePoint for sensitive content

### Configure the Query for the 1-SPSEEK\_SystemScans Job

The 1-SPSEEK\_SystemScans Job has been preconfigured to run with the default settings using the SPAA Data Collector category of Scan for Sensitive Content, which is not visible within the SharePoint Access Auditor Data Collector Wizard when opened from within this job.

__CAUTION:__ Users should not change scans in a way that would result in less data being returned on a subsequent scan (i.e. scanning fewer web applications, scanning fewer site collections, or a shallower depth scan). Those resources not included in a subsequent scan are marked as deleted in the Tier 2 database and subsequently removed from the Tier 1 database.

Follow the steps to set any desired customizations.

__Step 1 –__ Navigate to the __Jobs__ > __SharePoint__ > __0.Collection__ > __1-SPSEEK\_SystemScans__ > __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, click __Query Properties__. The Query Properties window displays.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__.

![SharePoint Data Collection Settings](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/datacollectionsettingsspseek.png)

__Step 4 –__ On the [SPAA: SharePoint Data Collection Settings](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/settings.md) page, customize as desired and click __Next__.

![Scan Scoping Options](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/scanscopingoptions.png)

__Step 5 –__ On the [SPAA: Scan Scoping Options](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/scanscopingoptions.md) page, no web applications or site collections have been added. If desired, limit the scope of the scan to specific web applications or site collections. Click __Next__.

![Additional Scoping](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/additionalscopingspseek.png)

__Step 6 –__ On the [SPAA: Additional Scoping](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/additionalscoping.md) page, __Limit scanned depth to:__ is selected with the default set at __2__ levels. Customize this setting as desired and click __Next__.

![Agent Settings](/static/img/product_docs/activitymonitor/activitymonitor/install/agent/windowsagent.png)

__Step 7 –__ On the [SPAA: Agent Settings](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/agentsettings.md) page, use the default settings unless an agent scan mode is desired. Click __Next__.

![DLP Audit Settings](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/dlpauditsettingsspseek.png)

__Step 8 –__ On the [SPAA: DLP Audit Settings](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/dlpauditsettings.md) page, the default setting is to __Don’t process files larger than: 2 MB__ and to __Scan typical documents (recommended, fastest)__. These settings can be customized to adjust for scan time or database size. Click __Next__.

__NOTE:__ The typical documents for this setting are files with the following extensions: .doc, .docx, .msg, .odt, .pages, .rtf, .wpd, .wps, .abw, .bib, .dotx, .eml, .fb2, .fdx, .gdoc, .lit, .sig, .sty, .wps, .wpt, .yml, .tex, .pdf, .csv, .xlr, .xls, .xlsx, .gsheet, .nb, .numbers, .ods, .qpw, .sdc, .wks, .xlsb, .xltm, .xltx, .aws, .fods, .ots, .rdf, .sxc, .uos, .xlsm, .txt

![Select DLP Criteria Page of the SPAA Data Collector Wizard](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/selectdlpcriteriaspseek.png)

__Step 9 –__ On the [SPAA: Select DLP Criteria](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/selectdlpcriteria.md) page, add or remove criteria as desired by either manually selecting criteria or using the __Select All__ and __Clear All__ buttons. Click __Next__. _(Optional)_ To create custom criteria, see the [Sensitive Data Criteria Editor](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/overview.md) topic for additional information.

__CAUTION:__ Do not configure the options on the Results page.

__Step 10 –__ On the Results page, all Available Properties are selected by default. Click __Next__.

__Step 11 –__ On the Summary page, click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window.

If changes were made, the 1-SPSEEK\_SystemScans Job has now been customized.
