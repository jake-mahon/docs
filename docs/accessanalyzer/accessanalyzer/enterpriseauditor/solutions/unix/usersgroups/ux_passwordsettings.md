# UX\_PasswordSettings Job

The UX\_PasswordSettings job provides visibility into user passwords and system password configurations within audited Unix and Linux environments.

## Analysis Tasks for the UX\_PasswordSettings Job

Navigate to the __Unix__ > __1.Users and Groups__ > __UX\_PasswordSettings__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the UX_PasswordSettings Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/unix/usersgroups/passwordsettingsanalysis.png)

The default analysis tasks are:

- Gives information about local user passwords – Creates SA\_UX\_PasswordSettings\_UserDetails table accessible under the job’s Results node
- Gives information about system password settings – Creates SA\_UX\_PasswordSettings\_SystemDetails table accessible under the job’s Results node

In addition to the table and views created by the analysis tasks, the UX\_PasswordSettings job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Local User Passwords | This report outlines password information for each local user on each host | None | This report is comprised of one element:   - Table – Provides details on User Password Settings |
| Password Security Setting | This report lists password security settings for each audited host | None | This report is comprised of one element:   - Table – Provides details on Password Settings |
