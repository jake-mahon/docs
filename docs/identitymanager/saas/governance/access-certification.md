# Access Certification

The Access Certification module enables chosen end-users to carry out assignment certification
campaigns, which aim to certify assignments of entitlements.

## Overview

The aim of an access certification campaign is to review specific entitlement assignments for
specific identities, in order to certify them and express an audit opinion that justifies their
necessity. So, for all relevant permissions, the idea is to specify if these assignments ought to be
deleted or not.

There are several ways to arrange an access certification campaign. Among others, through filters
you can choose to focus on:

- A certain category of roles
- A certain type of assignment
- Assignments not certified since a certain date
- Assignments presenting a certain level of risk. See the
  [ Manage Risks ](/docs/identitymanager/saas/governance/risks.md) topic for additional
  information.

Identity Manager uses an access certification campaign to define the campaign's scope including:

- The start and end date of the campaign
- The group of entitlement assignments to be certified during the campaign.

### Job for access certification

After the campaign's creation, access certification items are assigned to reviewers (Identity
Manager end-users) by the CreateAccessCertificationJob, composed of the following tasks:

- Identity Manager-Update-AccessCertificationCampaign simply applies the campaign's scope,
  determines which permissions are to be certified, by computing certification orders;
- Identity Manager-Set-AccessCertificationReviewer assigns one review for each access certification
  item to end-users whose profile's scope of responsibility matches the entitlement to be certified;
- Identity Manager-Send-AccessCertificationNotification sends notifications to concerned reviewers.
- Identity Manager-Process-AccessCertificationItems processes the access certification item
  decisions and generates the corresponding deprovisioning orders.

## Set up the Configuration

Configuring the Access Certification module entails:

- Setting up profiles to carry out the certification
- Configuring their scope of responsibility
- Enabling automatic and forwarded assignments of access certification items to end-users

### Campaign creation

At least one Identity Manager profile needs permissions to create campaigns.

Such permission can be granted using the AccessReviewAdministrationAccessControlRules scaffolding.
See the
[ Access Review Administration Access Control Rules ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
topic for additional information.

The administrator profile, created with CreateAdministratorProfile scaffolding, already has these
permissions. See the
[ Create Administrator Profile ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
topic for additional information.

If you are not using the AccessReviewAdministrationAccessControlRules scaffolding, the user cannot
query on dimensions when editing the owner filters, so you need to give the permissions on the
correct contexts:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessControlRule Profile="Administrator" EntityType="Dimension0" Identifier="Administrator_AccessCertificationCampaign_Dimension0" DisplayName_L1="Administrator_AccessCertificationCampaigns">  <Entry Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule>
```

### Profile scope of responsibility

The scope of responsibility of a profile is a set of criteria that defines which assignment of
entitlements this profile will certify. For example, the **Manager** profile is responsible for
reviewing entitlement assignments of identities working in their department.

A profile's scope of responsibility is configured by giving access, with access control rules, to a
specific set of access certification items that match the profile's scope of responsibility
criteria.

The option to display only the **Approve** or **Deny** buttons next to the Access Certification
items can be configured by the administrator on the UI in the **Settings**>**Features**.

##### Example

This example shows how to set the scope of responsibility for the **Manager** profile.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessControlRule Identifier="Manager_AccessCertificationItem_Custom_AccessCertification_AutoAssign_Directory_User"
  DisplayName_L1="Organization Manager - Access certification auto assign"
  EntityType="AccessCertificationItem"
  Profile="Manager">    <Filter Binding="Owner.Directory_User:MainRecord.Organization.Id" Dimension="Organization0" />    ...
</AccessControlRule>
```

The filter indicates that a review with the **Manager** profile can only access items for which the
binding Owner.Directory_User:MainRecord.Organization.Id matches their dimension organization's
value.

This example needs to be completed with either automatic assignment or manual assignment
capabilities.

For certification items to be assigned to a profile, a permission context has to be added to the
access control rule.

### Access certification item assignments

Access certification items can be assigned to end-users via:

- Automatic assignments, computed by the reviewer-setting task when a given profile's scope of
  responsibility matches the entitlement to be certified
- Forwarded assignments, automatically assigned to an end-user, but then manually forwarded to
  another user from the UI

#### Automatic assignments

For a profile to be the target of an automatic assignment of an access certification item, it needs
the `/Custom/AccessCertification/AutoAssigned/{entityTypeName}` permission.

##### Example

This example completes the previous one by adding the automatic assignment capabilities.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessControlRule      Identifier="Manager_AccessCertificationItem_Custom_AccessCertification_AutoAssign_Directory_User"
  DisplayName_L1="Organization Manager - Access certification auto assign"
  EntityType="AccessCertificationItem"
  Profile="Manager">    <Filter Binding="Owner.Directory_User:MainRecord.Organization.Id" Dimension="Organization0" />    <Entry CanExecute="true" Permission="/Custom/AccessCertification/AutoAssigned/Directory_User" /></AccessControlRule>
```

This example enables automatic assignments of access certification items that match the filter to
end-users with the **Manager** profile.

If the filter criterion is matched for several end-users, only one is assigned the certification
item, and this assignment is made randomly. Therefore, in order to have a cleaner reviewing
architecture, it is recommended to carefully set the Filter attributes in the access control rules
so that no two end-users' scope of responsibility overlap.

#### Forwarded assignments

The target profiles need the following `/Custom/AccessCertification/ManualAssigned/{entityTypeName}`
permission.

The example below allows the **Manager** profile to be the target of forwarded assignments.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessControlRule Identifier="Manager_AccessCertificationItem_Custom_AccessCertification_ManualAssign_Directory_User" DisplayName_L1="User - Access certification manual assign" EntityType="AccessCertificationItem" Profile="Manager">    <Entry CanExecute="true" Permission="/Custom/AccessCertification/ManualAssigned/Directory_User" />  </AccessControlRule>
```

There is no filter so the Manager profile can certify all forwarded certification orders for the
Directory_User entity type, regardless of his previously configured scope of responsibility.

It is recommended to have a larger scope for forwarded certification orders than for automatically
assigned ones.

### Certification policy

Scopes of responsibility can also be defined in terms of access certification campaign policy. See
the
[ AccessCertificationCampaignPolicy ](/docs/identitymanager/saas/configuration/xml-configuration/access-certification.md)
topic for additional information.

Assigning an access certification campaign policy to an access certification campaign allows the
creation of campaigns dedicated specifically to one set of reviewers.

The following example creates a new policy named Manager.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessCertificationCampaignPolicy Id="-2" Identifier="Manager" DisplayName_L1="Manager" DisplayName_L2="Responsable"/>
```

It automatically appears on the campaign creation screen, and binds itself to the created campaign:

![Campaign creation screen with policies](/img/product_docs/identitymanager/identitymanager/integration-guide/governance/accesscertification/creation_5.1.6.webp)

To use it, modify the access control rules by adding a filter on the campaign policy. See the
[Access Control Rule](/docs/identitymanager/saas/configuration/xml-configuration/access-control.md)
topic for additional information.

##### Example

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessControlRule
  Identifier="Manager_AccessCertificationItem_Custom_AccessCertification_AutoAssign_Directory_User"
  DisplayName_L1="Organization Manager - Access certification auto assign"
  EntityType="AccessCertificationItem"
  Profile="Manager">    <Filter Binding="Owner.Directory_User:MainRecord.Organization.Id" Dimension="Organization0" />    <Filter Binding="Campaign.Policy.Identifier" Value="Manager"/>    <Entry CanExecute="true" Permission="/Custom/AccessCertification/AutoAssigned/Directory_User" /></AccessControlRule>
```

In this example, the **Manager** profile is only able to certify items for a campaign defined with
the **Manager** policy.

A default policy is already defined. If no filter is set when giving the permission, the policy is
not considered.

### Access certification item processing

Once entitlement assignments have been reviewed (accepted or rejected), the final step is to apply
these decisions with the processing task, eventually denying assignments. This is done through the
UI. See the Access Certification topic for additional information.

The user needs to have the correct permission to launch the item processing:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessControlRule Profile="Administrator" EntityType="AccessCertificationCampaign" Identifier="Administrator_AccessCertificationCampaign_Process" DisplayName_L1="Administrator_AccessCertificationCampaigns">  <Entry Permission="/AccessCertification/AccessCertificationCampaign/Process" /></AccessControlRule>
```

It is also possible to add access control filters when creating the permission set so that users can
only access certain type of campaigns. See the
[Access Control Rule](/docs/identitymanager/saas/configuration/xml-configuration/access-control.md)
topic for additional information.

This permission also is given by the AccessReviewAdministrationAccessControlRules scaffolding. See
the
[ Access Review Administration Access Control Rules ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
topic for additional information.

# Perform Access Certification

How to certify existing access by reviewing a specific range of assigned permissions for auditing
purposes.

## Overview

The aim of an access certification campaign is to review specific entitlement assignments for
specific identities, in order to certify them and express an audit opinion that justifies their
necessity. So, for all relevant permissions, the idea is to specify if these assignments ought to be
deleted or not.

There are several ways to arrange an access certification campaign. Among others, through filters
you can choose to focus on:

- a certain category of roles;
- a certain type of assignment;
- assignments not certified since a certain date;
- assignments presenting a certain level of risk.

Certification campaigns can be
[Access Certification](/docs/identitymanager/saas/governance/access-certification.md) but the
UI described in this guide can be enough on its own. See the
[Access Certification](/docs/identitymanager/saas/governance/access-certification.md) topic for
additional information.

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of auditing because they
know which entitlements need to be reviewed.

| Input                                                                                                                                                                                                         | Output           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Identity repository (required) [ Create Roles in the Role Catalog ](/docs/identitymanager/saas/role-management/index.md)(optional) [ Manage Risks ](/docs/identitymanager/saas/governance/risks.md)(optional) | Certified access |

See the[ Create the Workforce Repository ](/docs/identitymanager/saas/identity-management/index.md)topic
for additional information.

## Perform Access Certification

Perform access certification by proceeding as follows:

1. [ Schedule a Certification Campaign ](/docs/identitymanager/saas/governance/access-certification.md).
2. [ Execute a Certification Campaign ](/docs/identitymanager/saas/governance/access-certification.md).

# Schedule a Certification Campaign

How to create and schedule access certification campaigns, defining their scope.

## Overview

The aim of an access certification campaign is to review specific access and entitlements for
specific identities, in order to certify them and express an audit opinion that justifies their
necessity.

Here, you will learn how to create and schedule a certification campaign, defining its scope via the
filters specifying the reviewers and items to be reviewed.

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of auditing, because they
know what entitlements need to be reviewed.

| Input                                                                                                                                                                                                 | Output                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Identity Repository (required) [Create Roles in the Role Catalog](/docs/identitymanager/saas/role-management/index.md)<br />(optional) [Manage Risks](/docs/identitymanager/saas/governance/risks.md) | Scheduled certification campaign(s) |

See the [Create the Workforce Repository](/docs/identitymanager/saas/identity-management/index.md) topic
for additional information.

## Create a Certification Campaign

Create an access certification campaign by proceeding as follows:

1. Click on **Access Certification Campaigns** in the **Administration** section on the home page.

   ![Home - Access Certification Campaigns](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/home_accesscertificationcampaigns_v602.webp)

2. Click on the addition button at the top right and fill in the fields.

   ![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

   ![New Certification Campaign](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_newcertificationcampaign_v602.webp)

   - `Identifier`: Must be unique among certification campaigns and must not contain whitespace.
   - `Name`: Will be displayed in the UI to identify the campaign.
   - `Start Date`: Date when the campaign begins and becomes visible on the reviewers' **Access
     Certification** screen. The campaign will review access existing at this date; changes after
     this date are not included.
   - `End Date`: Date when the campaign ends.
   - `Target Entity Type`: Entity type targeted by the campaign.
   - `Target Reviewers`: Set of identities responsible for the access review. Available reviewers
     are configured via the
     [Access Certification](/docs/identitymanager/saas/governance/access-certification.md)
     policies.
   - `Target Specificities`:
     [AccessCertificationDataFilter](/docs/identitymanager/saas/configuration/xml-configuration/access-certification.md)
     defines the campaign scope (e.g., by object type, category, approval state). The campaign uses
     the union of all specificities.

     ![Target Specificities](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetspecificities_v602.webp)

     The campaign will target permissions that meet the **intersection (AND)** of all criteria.

     When listing role tags, roles with **any matching tag (OR)** will be included.

   - `Target Owners`: Filters based on identity attributes for those whose access is being
     reviewed. All filters are combined using **intersection (AND)** logic.

     ![Target Owner Filters](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetowners_v602.webp)

     Additional filters may be available depending on the target entity type.

     ![Target Owner Additional Filters](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetownersadditional_v603.webp)

     - `Individual Owner`: A single identity whose access is to be certified.
     - `Active Target`: Identities with a specific property (from `Directory_UserRecord`)
       modified since a given date.

       > Only properties not calculated by Identity Manager can be used to filter the target
       > owners of the certification campaign.

       > The following campaign targets all assigned single roles for two specific users:
       >
       > ![Campaign Example](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_example_v602.webp)

3. Click **Create** to add the campaign to the list.

   ![Campaigns Page](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_newlycreated_v603.webp)

4. Apply changes by clicking **Launch** to run the access certification job.

   The job's logs are available via the **Job Results** button.

   > Example:
   >
   > ![Execute Access Reviews Job](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_job_v522.webp)

## Impact of Modifications

You may modify any field of a certification campaign before its start date. After it starts, only
the name, identifier, and end date can be changed. Campaigns can be deleted at any time.

## Verify Campaign Scheduling

To verify the process, check the **Access Certification Campaigns** page to confirm the campaign’s
parameters are correct.

# Execute a Certification Campaign

How to execute access certification campaigns, i.e. review specific entitlement assignments and
deprovision inappropriate access.

## Overview

The aim of an access certification campaign is to review specific entitlement assignments for
specific identities, in order to certify them and express an audit opinion that justifies their
necessity.

Once certification campaigns are scheduled, the assigned reviewers must decide for all relevant
assignments if they ought to be deleted or not.

## Participants and Artifacts

The execution part should be performed in cooperation with the staff who review access in the
campaign scheduling.  
 The monitoring part should be performed in cooperation with the staff in charge of campaign
scheduling.

| Input                                                                                                           | Output           |
| --------------------------------------------------------------------------------------------------------------- | ---------------- |
| [ Schedule a Certification Campaign ](/docs/identitymanager/saas/governance/access-certification.md) (required) | Certified access |

## Execute Certification

Execute certification by proceeding as follows:

1. Access the ongoing campaigns by clicking on the **Access Certification** section on the home
   page.

   ![Home - Access Certification](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/home_accesscertification_v523.webp)

   On this page, all assignments to be reviewed are listed.

   ![Access Certification](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_accesscertification_v602.webp)

   Each assignment can be commented by clicking on the corresponding icon.

   ![Comment Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconcomment_v522.svg)

2. Choose one of the three possibilities to verify all assignments one by one:

   In order to help reviewers in the decision-making process, each assignment shows a
   recommendation icon, indicating whether said assignment complies with the role model.

   See the icons below this note.

   The Recommended icon indicates that the entitlement has been automatically granted according to
   the security policy. You can approve it because it is compliant.  
   The Not Recommended icon indicates that the entitlement does not comply with the security
   policy. It is recommended to refuse it, unless the user really needs it.

   An absence of any icon indicates that the entitlement does not comply with the security policy.
   However, it has been manually granted or denied. Thus there is no recommendation, please review
   this entitlement carefully.

   ![Recommendation Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconrecommendation_v522.svg)

   ![Discouragement Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_icondiscouragement_v522.svg)

   - Either click on the approval icon to confirm that this entitlement is necessary for this
     identity.

   ![Approval Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconapproval_v522.svg)

   - Or click on the decline icon to confirm that this entitlement is not necessary for this
     identity.

   ![Decline Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connection-creation/certifcampaign_icondecline_v522.svg)

   - Or click on the three dots icon to highlight that this entitlement is not part of your scope
     of responsibility and forward it to the adequate person.

   ![Forward Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconforward_v522.svg)

3. Click on **Confirm Decisions** on the left of the page.

   If you've made an erroneous decision, exiting the page before confirming offers the possibility
   to quit without saving and start over from the last confirm.

## Monitor a Certification Campaign

Existing certification campaigns are listed on the page accessible via the **Access Certification
Campaigns** button on the home page in the **Administration** section.

![Home - Access Certification Campaigns](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/home_accesscertificationcampaigns_v602.webp)

![Campaigns Page](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_campaigns_v602.webp)

### Get reports

A **Download** button is available for each campaign. It downloads a CSV report that lists all the
entitlement assignments to be reviewed, the corresponding reviewers and their decisions.

![Report Example](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_decisions_v522.webp)

### Send notifications

The notification icon on the line of a given campaign offers the possibility to send reminder
notifications to the staff who has not finished processing the campaign.

### Generate provisioning orders

Once entitlement assignments have been reviewed, the final step is to apply these decisions.

An **Apply Decisions** button is available for each campaign. It shows all the decisions made in the
campaign. The campaign administrator can then decide to actually apply said decisions and generate
the appropriate provisioning orders for deprovisioning unjustified entitlements. Said orders will be
considered during the next provisioning job.

![Apply Decisions](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_applydecisions_v602.webp)

# Review Orphaned and Unused Accounts

How to remediate license and security issues caused by orphaned and/or unused accounts.

## Overview

The review of unused and orphaned accounts is essential to solve security and license management
issues. Orphan accounts are without an owner, while unused accounts remain open without any
activity.

### Orphaned accounts list

A list of all orphaned accounts can be found on some entity type pages. Said pages can be accessed
through the menu items on the left of the home page, in the **Connectors** section.

![Home - Entity Types](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_entitytypes_v602.webp)

These entity type pages can be configured via XML to customize all displayed columns and available
filters, especially the **Orphan** filter that spots uncorrelated resources, and the **Owner /
Resource Type** column that shows the owner of each resource. See
the[ Create Menu Items ](/docs/identitymanager/saas/configuration/index.md) topic for
additional information on customization.

![Owner / Resource Type Column](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/reporting/orphan_entitytype_v523.webp)

In the **Orphan** field, select **Yes** to see all existing resources without an owner.

In addition, filters can be configured in the reporting module to list orphaned accounts. See the
[ Generate Reports ](/docs/identitymanager/saas/governance/reporting/index.md) topic for additional information. Choose to display
**User** and **AD User** (nominative) with a filter on void user's display names.

**NOTE:** Some accounts are considered orphaned because of an error in the account data or
assignment rule.  
For an entity that is never the target of a resource type, the concept of an orphan does not apply
because the **Owner / Resource Type** column will be hidden.  
When using a display table to display these entities, use
DisplayTableDesignElement``({{< relref "/integration-guide/toolkit/xml-configuration/user-interface/displaytable#properties" >}}) `"table"``
or `"adaptable"`.

### Unused accounts list

The way to identify activity in a managed system is highly dependent on said system. Thus, activity
identification cannot be generalized, and the absence of activity in accounts isn't recognizable
with the configuration as is. Integrators must configure a specific property fulfilling this
purpose.

For example in the AD, we can compute a Boolean property **isUnused** based on other AD accounts'
properties. Below is an example that you can use and adjust to your specific configuration:

Here we write an expression for isUnused based on the bits of userAccountControl, the value of
**accountExpires** and the value of LastLogonTimeStamp:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<EntityPropertyExpression Identifier="AD_Entry_isUnused"Expression="C#:resource:
if (resource.userAccountControl == null) {
   return false;
     }
if ((int.Parse(resource.userAccountControl) &amp; 2) != 0) {      
return false;
    }
 if (resource.accountExpires != null &amp;&amp; resource.accountExpires != 
&quot;0&quot; &amp;&amp; resource.accountExpires !=
&quot;9223372036854775807&quot; &amp;&amp;
Usercube.Expressions.Functions.UtilExpressions.ParseSince1601Date(resource.accountExpires)
&lt; DateTime.UtcNow) {      
return false;      
}
  
return ((resource.lastLogonTimestamp == null) ||
(Usercube.Expressions.Functions.UtilExpressions.ParseSince1601Date(resource.lastLogonTimestamp)
&lt; DateTime.UtcNow.AddMonths(-6);
  " EntityType="AD_Entry" Property="isUnused" />
```

Once this "unused" property is created, a list of all unused accounts can be displayed thanks to the
filters in the query module, based on said property. See the
[ Generate Reports ](/docs/identitymanager/saas/governance/reporting/index.md) topic for additional information.

The previous example about the AD's **isUnused** property can be complemented in the query module by
displaying this property alongside users' **EmployeeId**.

![Query of Unused Accounts](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_unusedquery_v602.webp)

## Participants and Artifacts

At this point, integrators should have all the elements they need to operate as indicated in the
table below.

| Input                                                                                             | Output                               |
| ------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [ Categorize Resources ](/docs/identitymanager/saas/connectors/configuration/index.md) (required) | Removed orphaned and unused accounts |

## Review an Orphaned Account

Review an orphaned account by proceeding as follows:

![Home Page - Resource Reconciliation](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/home_resourcereconciliation_v523.webp)

**Step 1 –** Go to the **Resource Reconciliation** page, accessible from the corresponding section
on the home page.

![Resource Reconciliation Page](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/unauth_unauthorizedaccounts_v602.webp)

**Step 2 –** Select **Unauthorized account** as the **Workflow State**. Orphaned accounts are those
appearing with no owner.

**Step 3 –** Choose the default resource view or the property view with the top right toggle.

**Step 4 –** Click on the line of an account without an owner.

![Select Owner](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_revieworphans_v602.webp)

In the following example, the nominative AD account linked to the email address
nathan.smith@acme.com has no owner.

You can **Select owner** from the list by clicking on the check box.

![Owners List](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_revieworphans-owners_v602.webp)

**Step 5 –** Answer the following questions in order to understand the situation.

- Has the account been used recently?
- Why is it orphan?
- Who is it supposed to belong to?
- If it is a service account, is it useful? Has it been used recently?

  - A used account must be connected to its rightful owner
  - An unused account must be deleted

- If this account belongs to a person, is the user still in the organization or did they leave?

  - If the owner has left for more than XXX (time period defined by the security officer's rules),
    the account must be deleted
  - If the owner has left for less than XXX, the account must be connected to its owner and
    deactivated.
  - If the owner is still in the organization, the account must be connected to its owner. Is
    there a rule to change?

**NOTE:** We said that useful service accounts must be connected to their owners due to the fact
that an orphaned account cannot be certified. .See the
[ Perform Access Certification ](/docs/identitymanager/saas/governance/access-certification.md) topic for additional information.
But a service account must not be linked to a person, for the departure of said person from the
company may trigger the loss of the service account.  
This is why we create identities with **Application** as their **UserType**, each
application-identity linked to a person supposed to manage it. Thus,service accounts must be
connected to application identities, themselves owned by people. That way, if the owner of the
application leaves, the application-identity is not deleted, and the service accounts it owns are
not deprovisioned.

See the schema below this note.

![Schema - Service Accounts](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_serviceaccounts.webp)

**Step 6 –** Select the appropriate owner or no owner at all, according to the previous analysis.

_Remember,_ decisions must be made with caution as they cannot be undone.

**NOTE:** When binding an orphaned account to an existing owner, properties might need to be
reconciled.

**Step 7 –** Click on **Confirm Account Deletion** or **Authorize Account** according to the
previous decision.

By taking the necessary steps the orphan account will be delete or authorized.

### Use property view

By default, non-conforming assignments are listed by resource. It is possible to click on a resource
and then access the list of all unreconciled properties for said resource.

![Resource View](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_resourceview_v523.webp)

It can be helpful to have the non-conforming assignments regrouped by property, as some of the
changes can be similar, so very likely to be validated by the same user. This is why a property view
can be enabled by clicking on the **Property View** toggle at the top right corner.

Once enabled, select a resource type to display all unreconciled properties linked to said resource
type. In addition, select a property to display only the unreconciled properties linked to said
resource type and property.

![Property View](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_propertyview_v603.webp)

The review process is the same with both views. However with property view, reviewers don't click on
a given line, but choose a decision directly on the left of the property line.

![Bulk Reconcile](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_bulkreconcile_v603.webp)

In addition, using property view enables bulk reconciliation to approve the proposed values or keep
the current values for several resources simultaneously.

## Verify Review

In order to verify the process, check that the line for your reviewed item has been removed from the
**Resource Reconciliation** screen.

![View Permissions Tab](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

In addition, if you reconciled an orphaned account with an owner, check the user's permissions to
see said account.
