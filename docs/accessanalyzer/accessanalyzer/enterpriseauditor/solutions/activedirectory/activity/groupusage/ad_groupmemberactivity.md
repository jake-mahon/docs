# AD\_GroupMemberActivity Job

The AD\_GroupMemberActivity Job analyzes the AD actions taken by the effective members of a group. Monitoring authentication can provide a more accurate method of determining staleness than last logons.

## Analysis Tasks for the AD\_GroupMemberActivity Job

Navigate to the __Jobs__ > __Active Directory__ > __6.Activity__ > __Group Usage__ > __AD\_GroupMemberActivity__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

![Analysis Tasks for the AD_GroupMemberActivity Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/groupusage/groupmemberactivityanalysis.png)

The default analysis task is:

- Group Member Activity – Creates the SA\_AD\_GroupMemberActivity\_GroupSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD\_GroupMemberActivity Job produces the follow pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Member Activity | This report identifies actions taken by the members of each group within your environment. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of one element:   - Table – Displays group member activity |

### Configure the Group Member Activity Analysis Task

Customizable parameters enable you to set the values used to include the SIDs for admin groups during this job’s analysis. The parameters can be customized and are listed in a section at the bottom of the SQL Script Editor. Follow the steps to customize an analysis task’s parameters.

__Step 1 –__ Navigate to the __Active Directory__ > __6.Activity__ > __Group Usage__ > __AD\_GroupMemberActivity__ > __Configure__ node and select __Analysis__.

![Group Member Activity analysis task configuration](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/groupusage/groupmemberactivityanalysisconfiguration.png)

__Step 2 –__ In the Analysis Selection view, select the Group Member Activity analysis task and click on __Analysis Configuration__. The SQL Script Editor opens.

__CAUTION:__ Do not change any parameters where the Value states ```Created during execution```.

![Group Member Activity Analysis Task in the SQL Script Editor](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/groupusage/groupmemberactivitysqlscripteditor.png)

__Step 3 –__ In the parameters section at the bottom of the editor, find the Value column. Select the cell for the temporary table called #admingroups, and click __Edit Table__ to modify the value.

- The new value should include SIDs for admin groups to be considered administrative groups beyond the default admin groups.

__Step 4 –__ Click __Save and Close__ to finalize the customization and close the SQL Script Editor window.

The analysis task now includes custom parameters for the updated values.
