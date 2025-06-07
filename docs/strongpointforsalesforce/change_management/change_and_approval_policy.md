# Change and Approval Policy

The Advanced Change Management system uses a set of policy records called Change and Approval Policies.

Change and Approval Policies define:

- The level of change management required for a given change (for example, ApexClass modification vs. a report).
- The level of approval required and the participants in that approval process.

When Change Requests are created, Platform Governance for Salesforce analyzes the impacted customizations and processes. It identifies the Change Policy that applies based on the IT risk from the Customization Record and the process risk from the Process Records.

The Change and Approval Policy also determines the change level required for any detected changes to be compliant. This ensures that even changes that do not go through the planned change management process are analyzed against the policy for compliance.

For example, a company may have multiple policies:

1. A __Default Policy__ that applies to any customization or process without a specific policy. This generally requires that scripted changes go through a relatively high level of review compared to non-scripted changes.
2. A __Controls Policy__ that specifically applies to key reports and controls listed on the policy that need very specific approval to modify and ensures there are no changes without a proper audit review.
3. A __Custom Object Policy__ to manage Custom fields and object.

Once in place, policies remind users of the level of change management required as well as monitors the changes that do occur and raises alerts to IT by custom reports if there are any change violations.

## Change Process Overview

Platform Governance for Salesforce automatically detects any changes to the customizations in your system and log them. The system finds the relevant Change/Approval Policy and determines the change level required for compliance. It then looks for the relevant change record. For example, if it determines that a script changed and a Full Software Development Lifecycle was required for compliance, it looks for an approved Deployment Record. If it does not find one, it flags the change as non-compliant. An alert is sent to the Object owners notifying them of the non-compliant change.

1. __Detect the Change__: [Automated Scanner](/docs/product_docs/strongpointforsalesforce/installing_strongpoint/setting_up_initial_scan.md) must be enabled forPlatform Governance for Salesforce to detect a change.
2. __Log the Change__: creates a Change Log.
3. __Locate the Relevant Policy__: locates the correct policy for the object.
4. __Locate the Relevant Change Record__: determines if the change needs a Change Request.
5. __Determine if the Change is Compliant__:

   - If Platform Governance for Salesforce finds the appropriate Change Request or if the change is __Log Only__, it marks the change as compliant and attaches the Change Log to the Change Record.
   - If Platform Governance for Salesforce determines the change is non-compliant (does not fall under the relevant policy) it send an alert to IT and Object Owners to investigate the change and document what needs to be done to make the change compliant.
6. __Change Reporting and Resolution__: Platform Governance for Salesforce provides predefined [reports](/docs/product_docs/strongpointforsalesforce/change_management/change_management_reports.md) you can review as part of your regular Change Management Process.
