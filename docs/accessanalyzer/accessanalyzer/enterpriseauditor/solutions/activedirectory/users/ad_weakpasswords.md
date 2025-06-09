# AD\_WeakPasswords Job

The AD\_WeakPasswords Job analyzes user account password hashes to determine how easily each could be compromised or the likelihood their passwords are known through comparison with compromised password dictionaries and other exceptions. Exceptions include:

- AES Key Missing – Account is set up using older functional AD levels, so has no AES key. These accounts use weaker encryption methods susceptible to brute force attacks.
- Clear Text Password – Account has passwords stored with reversible encryption. See the Microsoft [Store passwords using reversible encryption](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/hh994559(v=ws.11)) article for additional information.
- Default Computer Password – Computer has default computer passwords set
- Delegable Admins – Administrator account is allowed to be delegated to a service
- DES Encryption Only – Account is using Kerberos DES encryption. DES encryption is considered weak as the 56-bit key is prone to brute force attacks. See the Microsoft [AD DS: User accounts and trusts in this domain should not be configured for DES only](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/ff646918(v=ws.10)) article for additional information.
- Empty Password – Account has an empty password
- Kerberos Pre-authentication is not required – Account does not require Kerberos pre-authentication. Kerberos pre-authentication can mitigate against brute force attacks. See the Microsoft [Kerberos Pre-Authentication: Why It Should Not Be Disabled](https://learn.microsoft.com/en-us/archive/technet-wiki/23559.kerberos-pre-authentication-why-it-should-not-be-disabled) article for additional information.
- LM Hash – Account has stored LM hashes. The LM hash is a relatively weak hash that is prone to brute force attacks. See the Microsoft [How to prevent Windows from storing a LAN manager hash of your password in Active Directory and local SAM databases](https://learn.microsoft.com/en-US/troubleshoot/windows-server/windows-security/prevent-windows-store-lm-hash-password) article for additional information.
- Password Never Expires – Account has a password that never expires
- Password Not Required – Account does not require a password
- Weak Historical Password – Account has a historical password that was found in the dictionary
- Weak Password – Account has a password that was found in the dictionary
- Shares Common Password – Account shares a password with another account

## Queries for the AD\_WeakPasswords Job

The AD\_WeakPasswords Job uses the PasswordSecurity Data Collector.

![Query for the AD_WeakPasswords Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/users/weakpasswordsquery.png)

The query for this job are:

- Weak Passwords – Collects password hashes to identify weak passwords

  - See the [PasswordSecurity Data Collector](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/passwordsecurity/overview.md) topic for additional information

### Configure the Weak Passwords Query

The PasswordSecurity Data Collector can be scoped if desired. Follow the steps to modify the query configuration.

__Step 1 –__ Navigate to the job’s Configure node and select Queries.

__Step 2 –__ In the Query Selection view, select the __Weak Passwords__ query and click__Query Properties__. The Query Properties window opens.

__Step 3 –__ Select the Data Source tab, and click __Configure__. The Password Security Data Collector Wizard opens.

![Password Security Data Collection Wizard Scan options page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/users/optionsweakpassword.png)

__CAUTION:__ Read the warning prior to enabling the cleartext password feature.

__Step 4 –__ On the Options page, configure the scan options by enabling communication with the Active Directory via SSL or returning cleartext password entries.

![Password Security Data Collection Wizard Dictionary options page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/users/dictionariesweakpassword.png)

__Step 5 –__ On the Dictionaries page, configure the dictionary options by enabling the Netwrix weak password dictionary or click __Add…__ to upload a custom dictionary with NTLM hashes or plaintext passwords to use during the scan.

- See the [PasswordSecurity: Dictionaries](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/passwordsecurity/dictionaries.md) topic for additional information

__Step 6 –__ Navigate to the Summary page, click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window.

The Weak Passwords query is now configured.

## Analysis Tasks for the AD\_WeakPasswords Job

Navigate to the __Active Directory__ > __2.Users__ > __AD\_WeakPasswords__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_WeakPasswords Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/users/weakpasswordsanalysis.png)

The default analysis tasks are:

- Count of Shared Passwords – Creates the SA\_AD\_WeakPasswords\_Count table accessible under the job's Results node
- Join Active Directory Stats – Creates the SA\_AD\_WeakPasswords\_Details table accessible under the job’s Results node
- Summarize Password Issues – Creates the SA\_SA\_AD\_WeakPasswords\_Summary table accessible under the job's Results node
- Add to AD Exceptions – Creates the SA\_AD\_UserDelegation\_Details table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_UserDelegation Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Weak Passwords Checks | This job identifies accounts in the organization with weak passwords that can be easily decrypted or brute forced. | None | This report is comprised of three elements:   - Bar Chart – Displays password weaknesses  - Table – Provides details on password weaknesses  - Table – Provides details on exceptions and user counts |
