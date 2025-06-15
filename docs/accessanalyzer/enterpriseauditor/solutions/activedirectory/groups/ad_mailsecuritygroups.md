# AD_MailSecurityGroups Job

The AD_MailSecurityGroups Job identifies mail-enabled security groups within Active Directory.

## Analysis Tasks for the AD_MailSecurityGroups Job

Navigate to the __Active Directory__ > __1.Groups__ > __AD_MailSecurityGroups__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_MailSecurityGroups Job](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/groups/mailsecuritygroupsanalysis.webp)

The default analysis tasks are:

- Calculate Effective Membership – Creates the SA_AD_MailSecurityGroups_Membership table accessible under the job’s Results node
- Mail Enabled Domain Summary – Creates the SA_AD_MailSecurityGroups_DomainSummary table accessible under the job’s Results node
- Membership Summary – Creates the SA_AD_MailSecurityGroups_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_MailSecurityGroups Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Mail Enabled Security Groups | This report displays summary data for mail enabled security groups. | None | This report is comprised of three elements:   - Stacked Bar Chart – Displays mail enabled security groups per domain  - Table – Provides summary of mail enabled security groups  - Table – Provides summary of mail enabled security groups by domain |
