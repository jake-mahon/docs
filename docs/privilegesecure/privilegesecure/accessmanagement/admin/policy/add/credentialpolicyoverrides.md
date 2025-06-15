# Add Credential Policy Override

Follow the steps to add Credential Policy Override to the Privilege Secure Console.

__Step 1 –__ Navigate to the Policy > Credentials > Credential Policy Overrides page.

__Step 2 –__ In the Credential Policy Overrides list, click the Plus icon.

![Adding a credential policy override](../../../../../../../static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/addcredentialpolicyoverride.webp)

__Step 3 –__ Enter or select the following information:

- Name — Displays the name of the credential
- Description — Description of the policy
- Scheduled Change Policy — Select a previously added schedule policy from the drop-down list. How often the credentials for a managed account are changed (credential rotation). See the [Credentials Dashboard](../../dashboard/credentials.md) and [Schedule Policies Page](../page/schedulepolicies.md) topic for additional information.
- Verification Schedule — How often to verify the credentials for managed accounts on the resources defined by the selected platform. See the [Credentials Dashboard](../../dashboard/credentials.md) topic for additional information on managed accounts.

__Step 4 –__ Click Save to create the new credential policy override.

![cpopageaddcredentials](../../../../../../../static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/cpopageaddcredentials.webp)

__Step 5 –__ With the new Credential Policy Override selected, click the __Add Credentials__ button to open the Add Credentials window. See the [Add Credentials to a Policy Override](../window/credentials/addcredentials.md#add-credentials-to-a-policy-override) topic for additional information.

![Add credential to Credential Policy Override Window](../../../../../../../static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/addcredentialtocpowindow.webp)

__Step 6 –__ Select the checkbox for the credential and click __Add__ to save the credential to the Credential Policy Override.

__NOTE:__ In order for an account to be added to add credentials window, a credential must be managed with a method of __Automatic__. Only one account can be added to a Credential Policy Override at a time. See the [Manage Internal Service Accounts](../window/credentials/manageinternalserviceaccount.md) topic for additional information.

The account is added to the console and is shown in the Credential Policy Overrides list.
