# Add Secret Vault

Follow the steps below to add a new secret vault to the console.

**Step 1 –** Navigate to the Policy > Resources page.

**Step 2 –** Click the Plus icon and select New Secret Vault from the drop-down list.

![Add secrete Vault Resource](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/addsecretvault.webp)

**Step 3 –** Enter the following information:

- New Secret Vault Name — Name of the new secret vault
- Platform — Displays the type of platform, which defines the resource.
- Description _(optional)_ —Description of the policy

**Step 4 –** Click **Save**.

A secret vault has been onboarded. See the
[Secret Vault Details Page](/docs/privilegesecure/4.2/administration/resources/platforms/secret-vaults.md) topic for additional information.

**CAUTION:** Next, you will have to manually enter and update credentials for each applicable user.
Credentials are assigned through the Credential-based Access Policy for password release. See the
[Credentials Tab for Credential Based Access Policies](/docs/privilegesecure/4.2/administration/policies/access-policies/add-credentials-to-policy.md)
topic for additional information.

# Secret Vault Details Page

The Secret Vault Details page shows additional information for the selected Secret Vault resource.
This page is opened from any linked resource within the various interfaces.

Secret Vaults are used to store any manually-managed resource, username, or password combination.
Credentials are assigned via Credential Based access policies for password release. See the
[Credentials Tab for Credential Based Access Policies](/docs/privilegesecure/4.2/administration/policies/access-policies/add-credentials-to-policy.md)
topic for additional information.

![Secrete Vault Details Page](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/page/details/seretvaultdetailspage.webp)

The details page shows the following information:

- Name — Displays the name of the resource
- Trashcan icon — Removes the selected resource from being managed by the application. A
  confirmation window will display.
- Platform — Displays the type of platform, which defines the resource
- Description — Description of the policy

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The details page has the following tabs:

- [Accounts Tab for Secret Vault](/docs/privilegesecure/4.2/administration/resources/resource-tabs/users.md)
- [Sessions Tab for Secret Vault](/docs/privilegesecure/4.2/administration/resources/resource-tabs/sessions.md)
- [History Tab for Secret Vault](/docs/privilegesecure/4.2/administration/resources/resource-tabs/history.md)

# Secret Vault Platform Policy Configuration

The Secrete Vault menu displays the configuration options for Windows platforms.

![Secret Vault Platform Configuration](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/page/platforms/secretvault.webp)

Details for the selected platform are displayed on the right side of the page. Below are the
configuration options for a Secret Vault Platform.

- Name — Displays the name of the policy
- Description — Description of the policy

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.
