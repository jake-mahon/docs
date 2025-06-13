# EX\_Mailbox\_SDD Job

The EX\_Mailbox\_SDD job locates sensitive data found in mailboxes in the Exchange environment.

Special Dependency

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

  - See the [Sensitive Data Discovery Add-On Installation](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sensitivedatadiscovery/overview.md) topic for additional information

  __NOTE:__ Though the job is visible within the console, it requires an additional installer package before data collection occurs.

## Queries for the EX\_Mailbox\_SDD Job

The EX\_Mailbox\_SDD job uses the EWSMailbox Data Collector.

![Queries for the EX_Mailbox_SDD Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/sensitivedata/collection/mailboxsddquery.png)

The following query is included in the EX\_Mailbox\_SDD job:

- Exchange Sensitive Data Discovery – Collects potentially-sensitive data from mailboxes

  - Set to search all mailboxes. It can be scoped.
  - Default sensitive data criteria includes:

    - Birth Records
    - Credit Cards
    - Passwords
    - Tax Forms
    - US SSN
- See the [Configure the EWSMailbox Data Collector for the EX\_Mailbox\_SDD Job](#configure-the-ewsmailbox-data-collector-for-the-ex_mailbox_sdd-job) topic for additional information

### Configure the EWSMailbox Data Collector for the EX\_Mailbox\_SDD Job

The Exchange Sensitive Data Discovery query has been preconfigured to run with the EWSMailbox Data Collector to scan for sensitive data.

Follow the steps to configure the scope of the EWSMailbox Data Collector:

__Step 1 –__ Navigate to the __Exchange__ > __7. Sensitive Data__ > __0. Collection__ > __EX\_Mailbox\_SDD__ > __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, select the __Exchange Sensitive Data Discovery__ query and click__Query Properties__. The Query Properties window opens.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__. The EWS Mailbox Data Collector Wizard opens.

__CAUTION:__ Do not make changes to other wizard pages as they have been pre-configured for the purpose of this job.

![EWS Mailbox Data Collector Wizard Mailbox scope settings page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/sensitivedata/collection/mailboxscopesettings.png)

__Step 4 –__ To scope the query for specific mailboxes, navigate to the Scope page. The query is configured by default to target __All mailboxes__. Change the Mailboxes to be queried to __Select mailboxes from list.__See the [EWSMailbox: Scope](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/scope.md) topic for additional information.

![EWS Mailbox Data Collector Wizard Scope select page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/sensitivedata/collection/mailboxscopeselect.png)

__Step 5 –__ To retrieve available mailboxes, click __Retrieve__ on the Scope Select page. Select the desired mailboxes and click __Add__. See the [EWSMailbox: Scope Select](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/scopeselect.md) topic for additional information.

![EWS Mailbox Data Collector Wizard SDD Options page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/sddoptions.png)

__Step 6 –__  To enable storage of discovered sensitive data, navigate to the SDD Options page. Sensitive data matches can be limited to reduce storage space. See the [EWSMailbox: SDD Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/sddoptions.md) topic for additional information.

__NOTE:__ By default, discovered sensitive data strings are not stored in the Enterprise Auditor database.

![EWS Mailbox Data Collector Wizard Criteria page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/criteria.png)

__Step 7 –__ To modify criteria, navigate to the Criteria page. Add or remove criteria as desired. See the [EWSMailbox: Criteria](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/criteria.md) topic for additional information.

- (Optional) To create custom criteria, see the [Sensitive Data Criteria Editor](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/overview.md) topic for additional information

![EWS Mailbox Data Collector Wizard Filter page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/sensitivedata/collection/mailboxfiltersettings.png)

__Step 8 –__ To filter the scan to specific mailbox folders, navigate to the Filter page. Include or exclude folders and attachments as desired. See the [EWSMailbox Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/overview.md) topic for additional information.

- To modify the threshold for message size, set the __Limit message size to__ value as desired. The default is 2000 KB.
- To modify the threshold for large attachment size, set the __Limit attachment size to__ value as desired. The default is 2000 KB.

![EWS Mailbox Data Collector Wizard Results page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/sensitivedata/collection/mailboxresults.png)

__Step 9 –__ Navigate to the Results page to select which properties are gathered based on category. See the [EWSMailbox: Results](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/results.md) topic for additional information.

__NOTE:__ By default, all categories are selected under sensitive data.

__Step 10 –__ Navigate to the Summary page, click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window

The job now applies the modification to future job executions.

## Analysis Tasks for the EX\_Mailbox\_SDD Job

View the analysis task by navigating to the __Exchange__ > __7.Sensitive Data__ > __EX\_Mailbox\_SDD__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the EX_Mailbox_SDD Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/sensitivedata/collection/mailboxsddanalysis.png)

The following analysis task is selected by default:

- AIC Import - Exchange SSD – Imports Exchange sensitive data to the Access Information Center
