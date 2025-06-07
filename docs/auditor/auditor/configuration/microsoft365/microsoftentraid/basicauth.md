# Using Basic Authentication with Microsoft Entra ID

With basic authentication, your Microsoft Entra ID organization will be accessed on behalf of a user. You will need to provide user name and password in the monitored item properties. Auditor will use this account to access the Microsoft Entra ID organization, automatically create an Microsoft Entra ID app with required permissions, and perform initial data collection. For that, the user account will need an administrative role in the cloud-based infrastructure.

Further permission assignment will depend on the data you plan to collect:

- To collect activity data including __logon attempts__, the administrative role is required, as well as the Premium Plan license.
- To collect activity data without logons, the privileged role can be revoked from the specified account after the initial data collection. Ongoing audit data collection will leverage Microsoft APIs access permissions granted to Microsoft Entra ID app and, therefore, requires no tenant-level administrative permissions.

## Required Roles and Permissions

| To... | Requirement | Comment |
| --- | --- | --- |
| Create Microsoft Entra ID application, run initial data collection, and perform Auditor upgrade from previous version | Any of the following role combinations:   - Application Administrator & Privileged Role Administrator  OR - Cloud Application Administrator & Privileged Role Administrator  OR - _Global Admin_ | Prepare a user account and specify it in the monitored item properties. See the and [Microsoft Entra ID](/docs/product_docs/auditor/auditor/configuration/microsoft365/microsoftentraid/overview.md) topics for additional information. |
| Collect audit data, including _Successful Logons_ and/or _Failed Logons_ | - _Security Reader_ OR - _Security Administrator_ OR - _Application Administrator_ OR - _Cloud Application Administrator_ OR - _Global Administrator_ | To assign the non-privileged role, see |
| Collect audit data (without logons) | Any of the following roles:   - _Security Reader_ OR - _Application Administrator_ OR - _Cloud Application Administrator_ OR - _Global Admin_ | Assign the role you need, as explained above. |

## Assigning a Privileged Role for Microsoft Entra ID and Office 365

When configuring a monitored item for Microsoft Entra ID (formerly Azure AD) or Office 365 auditing with basic authentication, specify a data collecting account that has sufficient privileges in Microsoft Entra ID. This account should be able to create a dedicated application in your Microsoft Entra ID domain. Depending on your requirements and company policies, you can select one of the following approaches:

- Assign a privileged role (for example, _Application Administrator_ & _Privileged Role Administrator_) to the account, then revoke it after the application creation and initial data collection, and assign a less-privileged role to this account (for example, _Security Reader_).
- Use the account with a privileged role on a regular basis. Any additional role assignments will not be necessary in this case. If you select this method, contact your security administrator to avoid violations of security policies in your organization.

__NOTE:__ If you previously used a non-privileged account for Microsoft Entra ID data collection in your Netwrix Auditor, consider that after the upgrade you will have to perform the role assignment procedure again, selecting one of these approaches. Until then, data collection will not be performed.

Follow the steps to assign a privileged role to the account.

__Step 1 –__ Sign in to Microsoft Entra ID portal using your Microsoft account.

__Step 2 –__ Select Microsoft Entra ID on the left.

__Step 3 –__ Select the account that you want to use as data collecting account, or create a new user.

__Step 4 –__ Make sure you have disabled multi-factor authentication for this account.

__Step 5 –__ Expand Directory role and select the role you need (for example, Global admin or any other privileged role).

_Remember,_ In Microsoft Graph API, Microsoft Entra ID Graph API, and Microsoft Entra ID PowerShell, the Global admin role is identified as Company Administrator.

__Step 6 –__ Click OK.

__Step 7 –__ In Auditor, create a monitoring plan for auditing Microsoft Entra ID and specify this account with this privileged role on the Specify the account for collecting data step.

__Step 8 –__ Wait until initial data collection completes.

__Step 9 –__ Open Microsoft Entra ID portal and remove the privileged role from the account.

__Step 10 –__ Assign a less-privileged role to this account.

A less privileged role has now been assigned to the account.

## Assigning 'Security Administrator' or 'Security Reader' Role

To audit _Successful_ and/or _Failed Logons_ in Microsoft Entra ID, the Security Administrator or Security Reader role is required. Follow the steps to assign the role you need:

__Step 1 –__ Sign in to [Microsoft Entra ID portal](https://portal.azure.com/) using your Microsoft account.

__Step 2 –__ Select Microsoft Entra ID portal on the left.

__Step 3 –__ Navigate to Roles and administrators.

__Step 4 –__ Click the Security administrator or Security Reader role.

__Step 5 –__ Click Add member and select the account that you want to assign the role to.

Refer to the following Microsoft article: [Microsoft Entra built-in roles](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-assign-admin-roles) for additional information on the Administrator role permissions.
