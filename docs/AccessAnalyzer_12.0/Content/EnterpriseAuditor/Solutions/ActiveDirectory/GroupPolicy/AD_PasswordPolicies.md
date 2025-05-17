---
sidebar_position: 5297
title: AD_PasswordPolicies Job
---

# AD\_PasswordPolicies Job

The AD\_PasswordPolicies Job identifies fine-grained domain password policies that are stored within the Password Settings Container. Fine-Grained password policies allow AD administrators to apply different password policies within a single domain.

## Query for the AD\_PasswordPolicies Job

The AD\_PasswordPolicies Job uses the LDAP Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_PasswordPolicies Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/GroupPolicy/PasswordPoliciesQuery.png "Query for the AD_PasswordPolicies Job")

The query for this job is:

* Fine-grained Policies – Targets one domain controller per domain known to Access Analyzer to return fine-grained password policies

  * See the [LDAP Data Collector](../../../Admin/DataCollector/LDAP "LDAP Data Collector") topic for additional information

## Analysis Task for the AD\_PasswordPolicies Job

Navigate to the **Active Directory** > **4.GroupPolicy** > **AD\_PasswordPolicies** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Task for the AD_PasswordPolicies Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/GroupPolicy/PasswordPoliciesAnalysis.png "Analysis Task for the AD_PasswordPolicies Job")

The default analysis tasks are:

* Determine fine-grained password policy details – Creates the SA\_AD\_PasswordPolicies\_Details table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the AD\_UserDelegation Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Fine-Grained Password Policies | This report highlights fine-grained password policies on all targeted domain controllers. | None | This report is comprised of one element:   * Table – Provides details on fine-grained password policy details |