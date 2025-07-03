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

| Input                                                                                                                                                                                                                                                                                   | Output                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [Create the Workforce Repository](/docs/identitymanager/6.2/user-guide/set-up/initial-identities-loading/index.md) (required)<br />[Create Roles in the Role Catalog](/docs/identitymanager/6.2/user-guide/set-up/single-roles-catalog-creation/index.md) (optional)<br />[Manage Risks](/docs/identitymanager/6.2/user-guide/optimize/risk-management/index.md) (optional) | Scheduled certification campaign(s) |

## Create a Certification Campaign

Create an access certification campaign by proceeding as follows:

1. Click on **Access Certification Campaigns** in the **Administration** section on the home page.

    ![Home - Access Certification Campaigns](/img/product_docs/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/home_accesscertificationcampaigns_v602.webp)

2. Click the addition button at the top right and fill in the fields:

    ![Addition Icon](/img/product_docs/identitymanager/saas/user-guide/set-up/categorization/classification/iconadd_v602.svg)

    ![New Certification Campaign](/img/product_docs/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_newcertificationcampaign_v602.webp)

    - `Identifier`: Must be unique among campaigns, without whitespace.
    - `Name`: Displayed in the UI to identify the campaign.
    - `Start Date`: Determines the access snapshot that will be reviewed. Only permissions existing
      at this date will be included.
    - `End Date`: Campaign deadline.
    - `Target Entity Type`: Entity type the campaign targets.
    - `Target Reviewers`: Identities responsible for the review, configured via
      [Access Certification policies](/docs/identitymanager/6.2/integration-guide/governance/accesscertification/index.md).
    - `Target Specificities`:
      [AccessCertificationDataFilter](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-certification/accesscertificationdatafilter/index.md)
      that define what permissions to include (object type, category, approval state, etc.). The
      campaign scope is a **union** of all specificities.

        ![Target Specificities](/img/product_docs/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetspecificities_v602.webp)

        The campaign targets permissions that meet the **intersection (AND)** of all filters. When
        using role tags, roles with **any** of the listed tags are included (**OR** logic).

    - `Target Owners`: Filters based on identity dimensions. These are combined using **AND** logic.

        ![Target Owner Filters](/img/product_docs/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetowners_v602.webp)

        Additional filters may be available depending on the selected entity type:

        ![Target Owner Additional Filters](/img/product_docs/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetownersadditional_v603.webp)

        - `Individual Owner`: A single identity whose access will be certified.
        - `Active Target`: Identities for which a specific property (from `Directory_UserRecord`)
          was modified since a given date.

            > Only properties **not calculated** by Identity Manager can be used to filter target
            > owners.

            > Example: The following campaign certifies all single roles assigned to two specific
            > users:
            >
            > ![Campaign Example](/img/product_docs/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_example_v602.webp)

3. Click **Create**. The campaign appears in the list.

    ![Campaigns Page](/img/product_docs/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_newlycreated_v603.webp)

4. Click **Launch** to apply the changes and start the certification job.

    Logs for this job are available via the **Job Results** button.

    > Example:
    >
    > ![Execute Access Reviews Job](/img/product_docs/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_job_v522.webp)

## Impact of Modifications

You can modify any field in a certification campaign **before its start date**.  
After it begins, only the name, identifier, and end date can be changed.  
You may delete the campaign at any time.

## Verify Campaign Scheduling

To verify the setup, go to the **Access Certification Campaigns** page and check that the created
campaign has the correct parameters.
