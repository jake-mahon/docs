# Unix Account for User Credentials

The information in this topic applies to __Select Account Type__ > __Unix Account__ in the User Credentials window.

![User Credentials - Unix](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/connection/profile/unixaccount.webp)

The required credentials for the Unix Account are:

- User name – Enter user name
- Password Storage – Application (Uses the configured Profile Security setting as selected at the __Settings__ > __Application__ node. See the [Application](../../application/overview.md) topic for additional information.)
- Password/Confirm

  - If not using a private key, enter the __Password__ and re-type in the __Confirm__ field
  - If using a private key, then the password is not needed. Provide the private key information in the __Use the following private key when connecting__ field.
- Use the following port/ports (CSV) for SSH

  - The SSH port needs to be opened in software and hardware firewalls
  - If desired, select this option and provide the port value
- Use the following private key when connecting

  - This option uses the authentication method of an SSH Private Key
  - Supported Key types:

    - Open SSH
    - PuTTY Private Key
  - If desired, select this option and provide the key value
