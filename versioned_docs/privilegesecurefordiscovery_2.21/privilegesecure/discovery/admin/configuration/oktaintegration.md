# Okta SSO and MFA Integration

Okta SSO and MFA Integration

# Okta SSO and MFA Integration

This articles covers integrating Privilege Secure with Okta SSO.

## Prerequisites

- Admin access to Privilege Secure and Okta
- Okta Active Directory Agent Installed

- [https://help.okta.com/en/prod/Content/Topics/Directory/ad-agent-new-integration.htm](https://help.okta.com/en/prod/Content/Topics/Directory/ad-agent-new-integration.htm)

## Okta: Add distinguishedName Attribute to Okta Users

If distinguishedName attribute is already configured for Okta users, skip this section.

- Login to the Okta Admin page
- Go to Directory > Profile Editor

    - Click on Okta > User (default)

![mceclip2.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip2.png)

Click on +Add Attribute on the Profile Editor

![mceclip3.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip3.png)

Click on +Add Attribute on the Profile Editor.

Example settings, adjust as required for environment:

![mceclip4.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip4.png)

## Okta: Active Directory (AD) Mappings

Directory > Profile Editor

On the desired domain, click Mappings

![mceclip1.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip1.png)

Under ‘`<domain>` to Okta User’ scroll down and set “appuser.dn” for “dn”

![mceclip5.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip5.png)

(removed section to compact this image for display)

![mceclip6.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip6.png)

Save and apply mappings.

## Okta: Import AD Users to Retrieve distinguishedName Attribute

Navigate to directory to import .

- ![mceclip7.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip7.png)

Click the Import Now button.

![mceclip8.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip8.png)

Full Import.

- ![mceclip9.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip9.png)

This can take a few minutes to complete, do not refresh page. Example status and results:

![mceclip10.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip10.png)

- ![mceclip18.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip18.png)

Assign any new users appropriately and confirm, example:

![mceclip13.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip13.png)

## Okta (Optional): Test Authentication with AD Credentials

**![mceclip14.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip14.png)**

Scroll down to bottom

![mceclip15.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip15.png)

![mceclip16.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip16.png)

## Okta: Add Privilege Secure Application

![mceclip19.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip19.png)

![mceclip20.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip20.png)

![mceclip21.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip21.png)

Note in the example below

- The URL format is: `https://<Privilege Secure URL>/api/login/`
- The "Audience URI" should be the base URL only, leave off "/api/login/"

![mceclip23.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip23.png)

**NOTE:** An ‘Application username’ may be required by the Okta environment.

- ![mceclip26.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip26.png)

**NOTE:** user.dn may not appear in drop down list, it can be manually entered.

- Click Next button to continue.
- Provide answer to Feedback question and Finish.
- Configure Sign On

![mceclip28.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip28.png)

Settings

![mceclip37.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip37.png)

User authentication policy  Examples uses "Any two factors" ploicy.

![mceclip29.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip29.png)

## Okta: Assign Okta People/Groups to Privilege Secure Application

**![mceclip31.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip31.png)**

![mceclip32.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip32.png)

## Okta: Retrieve SAML/SSO Information for Privilege Secure

**![mceclip33.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip33.png)**

**![mceclip34.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip34.png)**

## Privilege Secure: Enter SAML/SSO Information

![blobid2.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_blobid2.png)

![blobid3.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_blobid3.png)

## Enable SSO in Privilege Secure and Login Example

At the bottom of the Configure → Server -> SAML Configuration Panel, enable or disable SSO when
appropriate:

- When logging into Privilege Secure, you will either be automatically directed to Okta for
  authentication, or presented with a Privilege Secure SSO Login Screen Example:

![mceclip36.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360048120774_mceclip36.png)

- Click [SSO Login] button to log in via Okta.
