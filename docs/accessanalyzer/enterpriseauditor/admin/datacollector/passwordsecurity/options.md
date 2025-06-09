# PasswordSecurity: Options

The Options page provides format options for returned data.

![Password Security Data Collection Wizard Scan options page](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/options.png)

The configurable scan options are:

- Encrypt communications with Active Directory (SSL) – Enables communication to the domain controller over SSL
- Analyze historical passwords – Scans historical passwords that have been stored in Active Directory

  __CAUTION:__ Enabling the following option will return clear text passwords to be stored in the Access Analyzer database for the following exceptions: __Clear Text Password__, __Potential Keytab Password__, and __Weak Password__ (when leveraging a plaintext password dictionary).
- Return cleartext passwords when possible – Returns stored clear-text passwords to the Access Analyzer database
