# AAD\_UserAttributeCompletion Job

The AAD\_UserAttributeCompletion Job identifies which attributes are present within User fields in Microsoft Entra ID, and which ones are blank for a majority of objects. This may indicate accounts within Microsoft Entra ID which are lacking appropriate information.

## Analysis Tasks for the AAD\_UserAttributeCompletion Job

Navigate to the __Jobs__ > __Entra ID__ > __2.Users__ > __AAD\_UserAttributeCompletion__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AAD_UserAttributeCompletion Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/users/userattributecompletionanalysis.png)

The default analysis tasks are:

- Gets details on user attribute completion, by attribute – Creates the AAD\_UserAttributeCompletion\_AttributeDetails table accessible under the job’s Results node
- Gets details on user attribute completion, by user – Creates the AAD\_UserAttributeCompletion\_UserDetails table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD\_UserAttributeCompletion Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| User Attribute Completion | This report identifies which attributes are present within User fields in Microsoft Entra ID, and which ones are blank for a majority of User objects. | None | This report is comprised of three elements:   - Stacked Bar Chart – Displays completeness by attribute - Table – Provides details on users with blank attributes - Tables – Provides details om completeness by attribute |
