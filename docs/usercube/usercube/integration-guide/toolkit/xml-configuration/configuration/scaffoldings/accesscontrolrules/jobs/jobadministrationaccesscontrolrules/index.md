# Job Administration Access Control Rules

Scaffolding to access the job administration page. This page is accessible from the administration part in dashboard of the user interface.

![Job Execution](/static/img/product_docs/usercube/usercube/user-guide/set-up/synchronization/home_jobexecution_v602.png)

## Examples

```

  <JobAdministrationAccessControlRules Profile="Administrator"/>

```

## Properties

| Property | Details |
| --- | --- |
| Profile   required | __Type__    String   __Description__   Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Job_Jobs_Job" DisplayName_L1="Administrator - Management for Job" DisplayName_L2="Administrator - Gestion des Job" EntityType="Job" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/Job/Query" />  <Entry CanExecute="true" Permission="/Jobs/Job/Update" /></AccessControlRule>

```
