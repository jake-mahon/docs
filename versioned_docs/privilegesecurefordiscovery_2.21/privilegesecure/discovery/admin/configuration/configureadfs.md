# Configure ADFS (Active Directory Federation Services) SSO

Configure ADFS (Active Directory Federation Services) SSO

# Configure ADFS (Active Directory Federation Services) SSO

## ADFS

- On the “Identifiers” section, add Identifier to match the URL of your website (Ex: [https://s1.<company>.com](/versioned_docs/privilegesecurefordiscovery_2.21/discovery))

![mceclip0.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360052376373_mceclip0.png)

- On the “Endpoints” tab, create a SAML POST binding pointing towards the login URL (Ex: [https://s1.<company>.com/api/login)](/versioned_docs/privilegesecurefordiscovery_2.21/discovery)

![mceclip0.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360052376373_mceclip0.png)

In the Claim rules, you have to type in the entries as the required values are not built-in/default to ADFS. Set the Attribute Store to Active Directory, and manually type in __distinguishedName__ in the LDAP Attribute field. In the Outgoing Claim Type field, annually type in __dn__

__NOTE:__ On saving, distinguishedName will be changed to DistinguishedName (starts with capital D), as see in the example below.  It should be entered as a lower case d.

![mceclip1.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360052376373_mceclip1.png)

## Privilege Secure

__Step 1 –__ Navigate to __Configure__ > __Server__.

__Step 2 –__ As Privilege Secure is unable to perform Service Provider initiated (SP-initiated) logon, you must specified an Identity Provider initiated (IdP-intiatied) URL.

- Entrypoint: [https://<ADFS\_URL>/adfs/ls/idpinitiatedsignon.aspx?LoginToRP=https://SecureONE\_URL](https://adfs_url/adfs/ls/idpinitiatedsignon.aspx?LoginToRP=https://SecureONE_URL)
- Issuer: [http://ADFS\_URL/adfs/services/trust](http://adfs_url/adfs/services/trust)
- Issuer Cert: This is the Signing Certificate of your ADFS environment, excluding the headers (---BEGIN CERTIFICATE--- and ---END CERTIFICATE---)
- SSO Enabled: Enabled

## F5 Load Balancing

In order for F5 to work with ADFS a certificate trust must be configured between the the ADFS server and the BIG-IP load balancer, details are listed below:

- [https://support.f5.com/csp/article/K81345433](https://support.f5.com/csp/article/K81345433)

## Troubleshooting

If you are using ADFS as an authentication source and receive a "SAML Assertion Not Yet Valid" while trying to log in, please see:  [Configuring ADFS (Active Directory Federation Services) SSO](/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/configuring_adfs_(active_directory_federation_services)_sso.md)
