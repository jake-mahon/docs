# Active Directory State-In-Time Reports

Examine the Active Directory state-in-time data on the user account attributes:

- User Accounts - Attributes

To instruct Netwrix Auditor to collect data needed for the report, make sure that **Collect data for
state-in-time reports** option is selected in the corresponding monitoring plan properties. See the
[Settings for Data Collection](/docs/auditor/10.7/monitoring-plans/creating-monitoring-plans.md#settings-for-data-collection)
topic for additional information.

## User Accounts - Attributes

This report shows specific AD attributes for the accounts that meet the specified filtering
criteria. Use this report to discover user accounts with settings that violate company policies or
applicable compliance standards.

Supported object types and attributes are listed in the
[Active Directory](/docs/auditor/10.7/data-sources/active-directory/index.md) topic.

For this report to function properly, you must enable the **Collect data for state-in-time reports**
option for the data source in the monitoring plan settings. See the
[Settings for Data Collection](/docs/auditor/10.7/monitoring-plans/creating-monitoring-plans.md#settings-for-data-collection)
topic for additional information.

### Tips to Work with Report

1. Set desired filters in the report header. See Filters for more information.
2. Select as many Accounts details to show as needed. Selected details are shown in the table view
   for each account that comply filtering criteria.
3. Filter on Sort by to bring important accounts' data to front.
4. Add filters by specific attribute values to narrow your report scope. In this case, the report
   shows only accounts that contains these values. See the Reported Attributes  topic below for more
   information.
5. The report is limited by 2000 records. To view all, create subscription to the report. The
   subscription (email attachment or file uploaded to a file share) will contain complete data.
6. If you have more than 2000 entities within the report scope, sorting might work incorrectly.
   Apply filters to narrow your report scope.

Please consider that if you are going to export the report in .csv format or want to subscribe to
the .csv report, the file will contain the full list of available attributes regardless of which
filters you specified. Note that unseleted attributes have no values.

### Filters

You can narrow your reporting scope using multiple filters. Review the full list of available
filters and values:

- Monitoring plan — name of the monitoring plan set to collect data from the AD domain you need.
- Item — name of the item within your monitoring plan.
- Account details to show — set of AD attributes to display in the report for each account.
- Sort by — list of available sorting parameters.
- Attribute/Value — list of available AD attributes with the ability to provide specific value.
  Review the full list in the Reported Attributes

### Reported Data

For the account(s) you selected using filters, the summary section includes:

- **Total account count** — total number of accounts that meet selected filtering criteria.
- **Enabled accounts** —total number of enabled accounts that meet selected filtering criteria.
- **Disabled accounts** —total number of disabled accounts that meet selected filtering criteria.

#### Reported Attributes

The following account attributes are reported:

| Attribute                     | Description                                                                                                                                                                                                                                                                  | Possible values                                                                                                                                        | Filtering |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| Account                       |                                                                                                                                                                                                                                                                              |                                                                                                                                                        |           |
| Account enabled               | Shows whether an account enabled or not.                                                                                                                                                                                                                                     | Yes No                                                                                                                                                 | +         |
| Account locked                | Shows whether an account locked or not.                                                                                                                                                                                                                                      | Yes No                                                                                                                                                 | +         |
| Canonical name                | Equals the Canonical-Name attribute. See the corresponding Microsoft article for more information: [Canonical-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-canonicalname).                                                                      | Example: _USRegion.OrgName.com/Finance/JDoe_                                                                                                           | +         |
| Display name                  | Equals the Display-Name attribute. See the corresponding Microsoft article for more information: [Display-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-displayname).                                                                            | Example: _John Smith_                                                                                                                                  | +         |
| Logon name (sAMAccountName)   | Equals the sAMAccountName attribute. See the corresponding Microsoft article for more information: [sAMAccountName](https://docs.microsoft.com/en-us/windows/win32/ad/naming-properties#samaccountname).                                                                     | Example: _JSmith_                                                                                                                                      | +         |
| Logon name (UPN)              | Equals the userPrincipalName attribute. See the corresponding Microsoft article for more information: [User-Principal-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-userprincipalname).                                                          | Example: _JSmith@domain.com_                                                                                                                           | +         |
| Parent OU/container           | Shows the path to account's parent object (OU or container)                                                                                                                                                                                                                  | Example: _test.corp.local/UserAccounts/user with all properties_                                                                                       | +         |
| Member of                     | Shows direct AD group membership for the account. The report is limited to 10 groups. To view all groups the account is member of, export the report to .CSV file.                                                                                                           | Example: _Domain Admins, Backup Operators_ Clicking the Expand group membership link opens a detailed report on the user’s effective group membership. | +         |
| Employee details              |                                                                                                                                                                                                                                                                              |                                                                                                                                                        |           |
| First name                    | Shows the first name.                                                                                                                                                                                                                                                        | Example: _John_                                                                                                                                        | +         |
| Last name                     | Shows the last name.                                                                                                                                                                                                                                                         | Example: _Smith_                                                                                                                                       | +         |
| Job title                     | Equals the Title attribute. See the corresponding Microsoft article for more information: [Title attribute (AD Schema)](https://docs.microsoft.com/en-us/windows/win32/adschema/a-title).                                                                                    | Example: _Manager_                                                                                                                                     | +         |
| Department                    | Shows the name for the department in which the user works.                                                                                                                                                                                                                   | Example: _Sales_                                                                                                                                       | +         |
| Telephone number              | Equals the Telephone-Number attribute. See the corresponding Microsoft article for more information: [Telephone-Number attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-telephonenumber).                                                                | Example: _949-555-1234_                                                                                                                                | +         |
| Email address                 | Equals the E-mail-Addresses attribute. See the corresponding Microsoft article for more information: [E-mail-Addresses attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-mail).                                                                           | Email address _Example: JSmith@domain.com_                                                                                                             | +         |
| Manager                       | Shows manager specified for the account.                                                                                                                                                                                                                                     | Display name (default) If empty, the report shows common name.                                                                                         | +         |
| Manager email address         | Equals the manager / mail attribute.                                                                                                                                                                                                                                         | Email address _Example: JSmith@domain.com_                                                                                                             | +         |
| Office                        | Equals the Physical-Delivery-Office-Name attribute. See the corresponding Microsoft article for more information: [Physical-Delivery-Office-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-physicaldeliveryofficename).                           | Example: _London Office_                                                                                                                               | +         |
| Company                       | Equals the Company attribute. See the corresponding Microsoft article for more information: [Company attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-company).                                                                                          | Example: _Corporation_                                                                                                                                 | +         |
| Street address                | Shows address based on the Street-Address and postOfficeBox attributes.                                                                                                                                                                                                      | Example: _The Main Road; 10_                                                                                                                           | +         |
| City                          | Shows the locality, such as the town or city, in the user's address.                                                                                                                                                                                                         | Example: _NewLondon_                                                                                                                                   | +         |
| State/province                | Equals the State-Or-Province-Name attribute. See the corresponding Microsoft article for more information: [State-Or-Province-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-st).                                                                 | Example: _New York_                                                                                                                                    | +         |
| ZIP/postal code               | Equals the Postal-Code attribute. See the corresponding Microsoft article for more information: [Postal-Code attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-postalcode).                                                                               | Example: _61441_                                                                                                                                       | +         |
| Country/region                | Shows the country/region in which the user is located.                                                                                                                                                                                                                       | Example: _Ireland_                                                                                                                                     | +         |
| Security                      |                                                                                                                                                                                                                                                                              |                                                                                                                                                        |           |
| Account cannot be delegated   | Shows whether the account can be delegated or not based on the User-Account-Control attribute. See the corresponding Microsoft article for more information: [User-Account-Control attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-useraccountcontrol). | Yes No                                                                                                                                                 | +         |
| Account expiration date       | Equals the Account-Expires attribute. See the corresponding Microsoft article for more information: [Account-Expires attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-accountexpires).                                                                   | Date                                                                                                                                                   | –         |
| Password age                  | Shows password age for the account based on the Pwd-Last-Set attribute. See the corresponding Microsoft article for more information: [Pwd-Last-Set attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-pwdlastset).                                        | Number of days N/A — if password never set When the filter applied, the report shows above or equal results                                            | +         |
| Password expired              | Shows whether the account has the "_Password expired_" flag set under the AccountControl attribute.                                                                                                                                                                          | Yes No                                                                                                                                                 | +         |
| Password last changed         | Equals the Pwd-Last-Set attribute. See the corresponding Microsoft article for more information: [Pwd-Last-Set attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-pwdlastset).                                                                             | Date                                                                                                                                                   | –         |
| Never – if password never set | +                                                                                                                                                                                                                                                                            |                                                                                                                                                        |           |
| Password never expires        | Shows whether the account has the "_Password never expires_" flag set on the Account tab in properties.                                                                                                                                                                      | Yes No                                                                                                                                                 | +         |
| Password not required         | Shows whether the account has the "_Password not required_" flag set under the AccountControl attribute. Such account may have empty password.                                                                                                                               | Yes No                                                                                                                                                 | +         |
| User cannot change password   | Shows whether the account has the "_User cannot change password_" flag set on the Account tab in properties.                                                                                                                                                                 | Yes No                                                                                                                                                 | +         |
| User must change password     | Shows whether the account has the "_User must change password_" flag set on the Account tab in properties.                                                                                                                                                                   | Yes No                                                                                                                                                 | +         |
| Other                         |                                                                                                                                                                                                                                                                              |                                                                                                                                                        |           |
| Creation date                 | Shows account creation date.                                                                                                                                                                                                                                                 | Date                                                                                                                                                   | –         |
| Days inactive                 | Shows the number of days the account is considered to be inactive.                                                                                                                                                                                                           | Days When the filter applied, the report shows above or equal results                                                                                  | +         |
| Description                   | Contains account description if provided.                                                                                                                                                                                                                                    | Example: _Sales Manager_                                                                                                                               | +         |
| Last logon                    | Shows the date of account's last logon.                                                                                                                                                                                                                                      | Date Never A user's last logon time is updated only once every 9-14 days, so some data may be outdated.                                                | -         |
| Last modified                 | Equals the When-Changed attribute. See the corresponding Microsoft article for more information: [When-Changed attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-whenchanged).                                                                            | Date The Last modified attribute is considered as last object's modification date and not appears immediately. So some data may be outdated.           | –         |
| Logon script path             | Equals the Script-Path attribute. See the corresponding Microsoft article for more information: [Script-Path attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-scriptpath).                                                                               | Example: _C:\Powershellscripts\old scripts\script.ps1_                                                                                                 | +         |
| Recipient type                | Shows recipient type based on the msExchRecipientTypeDetails attribute.                                                                                                                                                                                                      | Mail user User Mailbox                                                                                                                                 | +         |
| Working (logon) hours         | Shows time interval based on the Logon-Hours attribute. See the corresponding Microsoft article for more information: [Logon-Hours attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-logonhours).                                                         | Specified time interval (in hours).                                                                                                                    | –         |

### Related Reports

Clicking the **Account name** link opens the Account Permissions in Active Directory report.

Clicking the **Expand group membership** link opens the Effective Group Membership report for this
account.

### Usage Example

An IT administrators wants to find all user accounts from the OU named _Finance_ that are currently
locked out and disabled with information about their managers to contact them in case of any
questions. This OU is included in the monitoring plan named _Active Directory Monitoring_. They need
to set report filters as follows:

- Monitoring plan: Active Directory Monitoring
- In the "Account details to show" filter, select Manager.
- Attribute 1: Parent OU/container - equals | Value: Domain.com/Finance
- Attribute 2: Account enabled | Value: No
- Attribute 3: Account locked | Value: Yes
- All other filter values can be left default.

A security manager wants to find administrators of the _corp.local_ domain with incorrect password
settings (password not required). Service accounts (_svc_%_) must be skipped in the report. This
domain is included in the monitoring plan named \_Active Directory Monitoring_. He or she needs to
set report filters as follows:

- Monitoring plan: Active Directory Monitoring
- Item: corp.local
- In the "Account details to show" filter, select Member of, Password not required.
- Attribute 1: Member of - equals | Value: Domain Admins
- Attribute 2: Password not required| Value: Yes
- Attribute 3: Logon name (sAMAccountName) - not equal to | Value: svc\_%
- All other filter values can be left default.

# File Servers State-In-Time Reports

This section contains limitations and considerations for File Server State-in-Time reports
generation.

## Limitations

1. For the following File Server State-in-Time reports wildcard _%_ is not supported for the
   "_Object Path_" field:

   - Account permissions
   - Duplicate files
   - Empty folders
   - Excessive Access Permissions
   - Excessive Access Permissions with Account Details
   - Files and Folders by Owner
   - Folder and File Permission Details
   - Folder and File Permissions with Account Details
   - Folder Permissions
   - Folder Permissions with Account Details
   - Folder Summary Report
   - Largest Files
   - Potential Data Owners by Folder
   - Stale Data by Folder
   - Top Owners by Total File Size

2. For the Folder TreeView State-in-Time report, the wildcard _%_ is supported.

# Microsoft Entra ID State-In-Time Reports

To instruct Netwrix Auditor to collect data needed for the report, make sure that Collect data for
state-in-time reports option is selected in the corresponding monitoring plan properties. See
[Create a New Monitoring Plan](/docs/auditor/10.7/monitoring-plans/creating-monitoring-plans.md).

**NOTE:** For Microsoft Entra ID, only the current date snapshot can be used for Reports.

## User Accounts - Attributes

The report shows specific AD attributes for the Microsoft Entra ID (formerly Azure AD) accounts that
meet the specified filtering criteria. Use this report to discover Microsoft Entra ID accounts with
settings that violate company policies or applicable compliance standards.

For this report to function properly, you must enable the Collect data for state-in-time reports
option for the data source in the monitoring plan settings. See the
[Settings for Data Collection](/docs/auditor/10.7/monitoring-plans/creating-monitoring-plans.md#settings-for-data-collection)
topic for more information.

### Tips to Work with Report

1. Set desired filters in the report header. See the Filters topic for more information.
2. Select as many Accounts details to show as needed. Selected details are shown in the table view
   for each account that comply filtering criteria.
3. Filter on Sort by to bring important accounts' data to front.
4. Add filters by specific attribute values to narrow your report scope. In this case, the report
   shows only accounts that contains these values. See the Reported Attributes topic for more
   information.
5. The report is limited by 2000 records. To view all, create subscription to the report. The
   subscription (email attachment or file uploaded to a file share) will contain complete data.
6. If you have more than 2000 entities within the report scope, sorting might work incorrectly.
   Apply filters to narrow your report scope.

### Filters

You can narrow your reporting scope using multiple filters. Review the full list of available
filters and values:

- Monitoring plan — name of the monitoring plan set to collect data from the AD domain you need.
- Time zone — select you time zone.
- Item — name of the item within your monitoring plan.
- Sort by — list of available sorting parameters.
- Account enabled — select whether you want to see disabled accounts or not.
- Department — provide the name of the department if needed.
- Attribute/Value — list of available AD attributes with the ability to provide specific value.

### Reported Data

For the account(s) you selected using filters, the summary section includes:

- Total account count — total number of accounts that meet selected filtering criteria.

- Enabled accounts —total number of enabled accounts that meet selected filtering criteria.
- Disabled accounts —total number of disabled accounts that meet selected filtering criteria.

### Reported Attributes

The following account attributes are reported:

| Attribute (display name in report)       | Microsoft Entra ID attribute mapping        | Possible values                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account enabled                          | accountEnabled                              | Yes/No                                                             | Specifies, whether the user account is enabled or disabled: the "true" value indicates that the account is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Change password on next sign in          | passwordProfile                             | Yes/No                                                             | Specifies the password profile for a user. The password in the profile must satisfy the minimum requirements as specified by the passwordPolicies property. By default, a strong password is required.                                                                                                                                                                                                                                                                                                                                                                                                              |
| Change password on next sign in with MFA | passwordProfile                             | Yes/No                                                             | Specifies the password profile for the user. The password in the profile must satisfy the minimum requirements as specified by the passwordPolicies property. By default, a strong password is required.                                                                                                                                                                                                                                                                                                                                                                                                            |
| City                                     | city                                        | Example: "_London_"                                                | The city where a user is located. Maximum length 128.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Cloud-only                               | onPremisesSyncEnabled                       | Yes/No                                                             | true if this object is synced from any on- premises directory; false if this object was originally synced from any on- premises directory but is no longer synced; null if this object has never been synced from any on-premises directory (default).                                                                                                                                                                                                                                                                                                                                                              |
| Country                                  | country                                     | Example: "_US_"                                                    | The country/region in which the user is located. Example: "US" or "UK". Maximum length 128.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Creation date                            | createdDateTime                             | 1/21/2021 4:08:00 PM                                               | The created date of the user object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Department                               | department                                  | Example: "_Accounting and Finance_"                                | The name for the department in which the user works. Maximum length is 64 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Display name                             | displayName                                 | Example: "_John Smith_"                                            | The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters.                                                                                                                                                                                                                                                                                                                                            |
| First name                               | givenName                                   | Example: "_John_"                                                  | The given name (first name) of the user. Maximum length is 64 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Is licensed                              | –                                           | –                                                                  | –                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Last DirSync time                        | onPremisesLastSyncDateTime                  | Example: _3/20/2021 2:13:00 PM_                                    | M Indicates the last time at which the object was synchronized with the on-premises directory; for example: "2013- 02- 16T03:04:54Z". The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time.                                                                                                                                                                                                                                                                                                                                                                      |
| Last name                                | surname                                     | Example: "_Smith_"                                                 | The user's surname (family name or last name). Maximum length is 64 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Licenses                                 | –                                           | Example: _OFFICE 365 E1_                                           | –                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Manager                                  | manager                                     | Example: "_James\_\_Williams_"                                     | The user or contact that is this user's manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Manager email                            | –                                           | Example: _JWilliams@gmail.com_                                     | –                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Office                                   | physicalDeliveryOfficeName (officeLocation) | Example: _1068_                                                    | The office location in the user's place of business. Maximum length is 128 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Password last change                     | lastPasswordChangeDateTime                  | Example: _4/6/2021 6:17:00 PM_                                     | The time when this Microsoft Entra ID Plans user last changed their password. The date and time information uses ISO 8601 format and is always in UTC time.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Password never expires                   | passwordPolicies                            | Yes/No                                                             | Specifies password policies for the user. This value is an enumeration with one possible value being "DisableStrongPassword", which allows weaker passwords than the default policy to be specified. "DisablePasswordExpiration" can also be specified. The two may be specified together; for example: "DisablePasswordExpiration, DisableStrongPassword".                                                                                                                                                                                                                                                         |
| Phone number                             | businessPhones                              | Example: _+1-202-555-155_                                          | The telephone numbers for the user. Although this is a string collection, only one number can be set for this property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Role membership                          | –                                           | Example: "_Exchange Service Administrator, Company Administrator_" | –                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Sign in names                            | identities                                  | _Example: "user_company.com#EXT#@officenwxqc.onmicrosoft.com"_     | Represents the identities that can be used to sign into this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. https://docs.microsoft.com/en- us/graph/api/resources/objectid entity?view=graph-rest-1.0                                                                                                                                                                                    |
| Strong password required                 | passwordPolicies                            | Yes/No                                                             | Specifies password policies for the user. This value is an enumeration with one possible value being "DisableStrongPassword", which allows weaker passwords than the default policy to be specified. "DisablePasswordExpiration" can also be specified. The two may be specified together; for example: "DisablePasswordExpiration, DisableStrongPassword".                                                                                                                                                                                                                                                         |
| Title                                    | jobTitle                                    | Example: "_Business development manager_"                          | The user's job title. Max length is 128.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| User principal name                      | userPrincipalName                           | Example: "_user_company.com#EXT#@officenwxqc.onmicrosoft.com_"     | The user principal name (UPN) of wxq the user. The UPN is an Internet- style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where the domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization. NOTE: While this property can contain accent characters, they can cause access issues to first-party applications for the user. |
| User type                                | userType                                    | Example: "_Member_"                                                | A string value that can be used to classify user types in your directory, such as "Member" and "Guest".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

# State–In–Time Reports

The state-in-time reports functionality allows generating reports on the system's state at a
specific moment of time in addition to change and activity reports. State-in-time reports are based
on the daily configuration snapshots, and reflect a particular aspect of the audited environment.

This functionality is currently available for the following data sources:

- Active Directory
- Microsoft Entra ID
- File Servers
- Exchange Online
- MS Teams
- Windows Server
- SharePoint
- SharePoint Online
- SQL Server
- Group Policy
- VMware

**NOTE:** The State-in-Time functionality is not available for SQL Server Availability Groups.

To provide data for state-in-time reports, remember to select the **Collect data for state-in-time
reports** option when you configure a monitoring plan for the selected data source. See the
[Settings for Data Collection](/docs/auditor/10.7/monitoring-plans/creating-monitoring-plans.md#settings-for-data-collection)
topic for additional information.

The state-in-time reports are available under the Reports node. Depending on the data source,
navigate to the corresponding subfolder, for example, **Predefined\_\_**>_**\_Active
Directory\_\_**>_**\_Active Directory\_\_**>\_**\_State-in-Time**.

In the report filters, select a monitoring plan you want to generate a report for. To review data
sources and items included in each plan, navigate to the Monitoring Plans section.

![fileshareswindowsservers](/img/product_docs/auditor/auditor/admin/reports/types/stateintime/fileshareswindowsservers.webp)

Each report has a set of filters which help organize audit data in the most convenient way. See the
[View Reports](/docs/auditor/10.7/reporting/report-management/viewing-reports.md) topic for additional information. You can also create a subscription
to any report you want to receive on a regular basis. See the
[Subscriptions](/docs/auditor/10.7/reporting/report-management/report-subscriptions.md) topic for additional information.

By default, state-in-time reports reflect the current state of the data source. If you want to
generate a report to assess your system at a particular moment in the past, you can select the
corresponding snapshot from the Snapshot Date filter.

To be able to generate reports based on different snapshots, ask your Auditor Global administrator
to import historical snapshots to the Audit Database, otherwise only the Current Session option is
available in the drop-down list.

**NOTE:** Importing historical snapshots is not available for Office 365.

When auditing file servers, changes to both access and audit permissions are tracked. To exclude
information on access permissions, contact your Auditor Global administrator or Configurator of this
plan.

## Baseline Reports

Most reports in Windows Server—State-in-Time folder allow you to specify baselines. A _baseline_
defines a certain safe level or state. If a server parameter falls below it, it is a considered a
threat or at least merits your special attention. With baselines specified right in report filters,
you can easily identify servers that are different from your corporate policies or best practices.
Risks are marked with red color and are easy to spot in the report.

![windowsserverinventory_thumb_0_0](/img/product_docs/auditor/auditor/admin/reports/types/stateintime/windowsserverinventory_thumb_0_0.webp)

You can specify baseline values specific to your organization in one of the following ways:

- As a baseline filter value in the report filters. Baselines in the field should be separated by
  commas.

  While inputting text inline is easy, your baseline values will not be preserved for the next
  report generation. You will have to input them every time you generate a report. This method is
  recommended you plan to subscribe to this report.

# Account Permissions in SQL Server

Details the effective permissions that the specified account has on the SQL Server objects of the
selected type. Use this report to review the permissions granted to users through your SQL Server
objects.

![accountpermissionssqlserver_thumb_0_0](/img/product_docs/auditor/auditor/admin/reports/types/stateintime/accountpermissionssqlserver_thumb_0_0.webp)

## Reported data

The report has a summary section with general information on the selected account, and the details
section presented in the table format.

The summary section shows:

- **User account**— name or SID of the account
- **Account type** —possible values:
  - Windows Account
  - Login SQL Authentication
  - DB SQL User with password
- **Job title** —reported for Active Directory users as set in their corresponding attribute. If not
  set, _`<not set>`_ is reported.
- **Total objects count** — total number of objects that this account has access to.

The detailed information under summary includes:

- **Object path** — monitored object path as formatted by Netwrix Auditor in the activity records
  (see '_What_' field in the reports, search results and activity summaries). For example, if
  reporting on the database hosted on selected SQL Server, the path will be as follows:
  _Databases\database_name_.
- **Object type** — monitored object type; for the full list of supported object types, refer to
  [SQL Server](/docs/auditor/10.7/data-sources/databases/sql-server.md) topic.
- **Means granted** —how access permissions were granted to this account, e.g., _Direct permissions_
  or _Server role permissions_.
- **Effective grant** —the effective set of permissions granted to this account on the selected
  object.

## Filters

This report has the following filters:

- **Monitoring plan** — name of the monitoring plan set to collect data from the SQL Server you
  need.
- **Time zone** — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This
  value is filled in automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in
  [SQL Server](/docs/auditor/10.7/monitoring-plans/monitoring-scope.md)
- **Item**— name of the SQL Server instance monitored with selected monitoring plan.
- **Object path** — path to the monitored object, as formatted by Netwrix Auditor in the activity
  records (see '_What_' field in the reports, search results and activity summaries). Wildcard (\*)
  is supported. For example, to report on the database hosted on selected SQL Server, specify the
  path as follows: _Databases\database_name_.
- **Object type**— type of the monitored object that provided data for this report. Possible values:
  _Database_, _Server Instance_.
- **Permissions** —access permissions whose assignment you want to be reported for selected account.
- **Means granted** —how access permissions were granted to this account. You can select _Directly_,
  _Inherited_, or both (default setting).
- **Account type** —possible values: _Windows Account_, _Login SQL Authentication_, _DB SQL User
  with password_.
- **User account**—name or SID of the account whose permission assignments are reported.

## Considerations and limitations

- Reporting for case-sensitive SQL Servers and databases is not supported.
- Permissions for INFORMATION*SCHEMA granted via \_master db* will not be reported.
- The report will not show the RESTORE capability for the database owner.

- When calculating effective rights and permissions, the following will not be considered:

  - Ownership chaining
  - Cross DB ownership chaining
  - Trustworthy database
  - SQL Server agent fixed database roles

## Related reports

- Clicking a Object permissions link opens the
  [Object Permissions in SQL Server](/docs/auditor/10.7/reporting/report-types/state-in-time-reports.md) report.
- Clicking a Means granted link opens the **[SQL Server Means Granted](/docs/auditor/10.7/reporting/report-types/state-in-time-reports.md)** report.

## Usage example

Database administrators in the _Corp_ organization need to discover what kind of permissions a
certain user has on the **SQLSrv01\SQLServer2016** instance. This instance is included in the
monitoring plan named _SQL Servers Monitoring_.

To examine the relevant data, they generated the **Account Permissions in SQL Server** report with
the filters set as follows:

- **Monitoring plan:\_**SQL Servers Monitoring\_
- **Snapshot date:\_**Current Session\_
- **Item:\_**SQLSrv01\SQLServer2016\_
- **User account:** _Corp\Ian.Harris_

The report revealed that this user has access permissions for the master database. To discover how
they were granted, click the link in the **Means granted** field.

# SQL Server Databases

This report lists the properties of databases and database snapshots hosted on the selected SQL
Server instance. Use this report for your SQL Server database inventory.

![sqlserverdatabases_thumb_0_0](/img/product_docs/auditor/auditor/admin/reports/types/stateintime/sqlserverdatabases_thumb_0_0.webp)

## Reported data

For each database, the following information is reported:

- **Database name**
- **Restrict access** mode— as set in the database properties **>Options>State**. Possible values
  are: _Multi_user_ (for _Multiple_), _Restricted_, _Single_. See
  [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-properties-options-page?view=sql-server-ver15)
  for details.
- **State**— as set in the database properties**>Options>State**. See
  [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-states?view=sql-server-ver15)
  for details
- **Size (MB)**
- **Shrink enabled**— as set in the database properties **>Options>Automatic>Auto Shrink**. See
  [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-properties-options-page?view=sql-server-ver15)
  for details.
- **Encryption status**— as set in the database properties **>Options>State**. See
  [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-properties-options-page?view=sql-server-ver15#this-microsoft-article)
  for details.
- **Last full backup date**— local date and time for the audited SQL Server instance.

In some cases, the backup time will be displayed in server ticks.

- **Data file path**— .MDF file path.
- **Log file path**— .LDF file path.

For each database snapshot, the following information is reported:

- **Database snapshot name**
- **Source database name**
- **Restrict access** mode — as set in the database properties at snapshot creation time.
- **State** — as set in the database properties at snapshot creation time.

## Filters

This report has the following filters:

- **Monitoring plan** — name of the monitoring plan set to collect data from the SQL Server instance
  hosting the required database.
- **Item** — name of the item within your monitoring plan, here — SQL Server instance.
- **Time zone** — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This
  value is filled in automatically.
- **Database name** — database to report on. Default is all databases on selected SQL Server
  instance (_%_).

## Considerations and recommendations

Reporting for case-sensitive SQL Servers and databases is not supported.

## Usage example

Database administrators in the _Corp_ organization need to perform an inventory of the
**SQLSrv01\SQLServer2016** instance. This instance is included in the monitoring plan named _SQL
Servers Monitoring_.

To examine the relevant data, they generated the **SQL Server Databases** report with the default
filters.

# SQL Server Means Granted

This report shows accounts with explicit and inherited permissions on the selected SQL Server object
and how those permissions were granted (directly, through role membership, etc.). Use this report to
investigate how permissions are granted.

Supported object types and attributes are listed in the
[SQL Server](/docs/auditor/10.7/data-sources/databases/sql-server.md) section.

To instruct Netwrix Auditor to collect data needed for this report, make sure that **Collect data
for state-in-time reports** option is selected in the monitoring plan properties.

![sqlservermeansgranted](/img/product_docs/auditor/auditor/admin/reports/types/stateintime/sqlservermeansgranted.webp)

## Reported data

The report has a summary section with general information on the selected SQL Server object, and the
details section presented in the table format.

The summary section shows:

- **User account** — name or SID of the account that has permissions on the selected object.

- **Account type** —possible values:
  - Windows Account
  - Login SQL Authentication
  - DB SQL User with password
- **Job title** —reported for Active Directory users as set in their corresponding attribute. If not
  set, _`<not set>`_ is reported.
- **Object path** —path to the monitored object, as formatted by Netwrix Auditor in the activity
  records (see '_What_' field in the reports, search results and activity summaries). For example,
  when reporting on the database hosted on selected SQL Server, the path will be as follows:
  _Databases\database_name_.
- **Object type** — monitored object type; for the full list of supported object types, refer to
  [SQL Server](/docs/auditor/10.7/data-sources/databases/sql-server.md).

The detailed information under summary includes:

- **Means granted** —how access permissions were granted to this account, e.g., _Direct permissions_
  or _Server role permissions_.
- **Granted to**— the security principal to which the access permissions were granted, e.g.
  _sysadmin_.
- **Type**— the security principal type, e.g. _Server role_.
- **Grant** —the set of permissions granted to this account on the selected object by all means.

Covering rules do not need to be applied, since **Grant** permissions are reported automatically
using these rules.

## Filters

This report has the following filters:

- **Monitoring plan** — name of the monitoring plan set to collect data from the SQL Server you
  need.
- **Time zone** — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This
  value is filled in automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in the SQL Server monitoring plan
  documentation.
- **Item**—name of the SQL Server instance monitored with selected monitoring plan.
- **Object path** —path to the monitored object, as formatted by Netwrix Auditor in the activity
  records (see '_What_' field in the reports, search results and activity summaries). Wildcard (\*)
  is supported. For example, to report on the database hosted on selected SQL Server, specify the
  path as follows: _Databases\database_name_.
- **User account**—name or SID of the account that has permissions on the selected object. Default
  is _%_ (all accounts).
- **Account type** —possible values: _Windows Account_, _Login SQL Authentication_, _DB SQL User
  with password_.

## Considerations and limitations

- Reporting is not supported for the following objects:
  - Case-sensitive SQL Servers and databases
  - Read-only Filegroups
  - Contained databases.
- Permissions assigned using **With Grant option** are not reported (see
  [this Microsoft article](https://docs.microsoft.com/en-us/sql/t-sql/statements/grant-object-permissions-transact-sql?view=sql-server-ver15)
  on that means).
- When calculating effective rights and permissions, the following will not be considered:

  - Ownership chaining
  - Cross DB ownership chaining
  - Trustworthy database
  - SQL Server agent fixed database roles

## Usage example

When examining the **Object Permissions in SQL Server** report, database administrators in the
_Corp_ organization discovered that the accounts with Contractor job title has access to the
**SQLSrv01\SQLServer2016** instance. To explore how this could happen, they drilled down to the
**SQL Server Means Granted** report for that account by clicking the link in the **Means granted**
field for that account.

![sqlservermeansgranteddetails](/img/product_docs/auditor/auditor/admin/reports/types/stateintime/sqlservermeansgranteddetails.webp)

# Object Permissions in SQL Server

This report shows a detailed list of the effective permissions that accounts have on the selected
object. Use this report to review who has access to your SQL Server objects.

Supported object types and attributes are listed in the
[SQL Server](/docs/auditor/10.7/data-sources/databases/sql-server.md) section.

![objectpermissionssqlserver_thumb_0_0](/img/product_docs/auditor/auditor/admin/reports/types/stateintime/objectpermissionssqlserver_thumb_0_0.webp)

## Reported data

The report has a summary section with general information on the selected SQL Server object, and the
details section presented in the table format.

The summary section shows:

- **Object path** — monitored object path as formatted by Netwrix Auditor in the activity records
  (see '_What_' field in the reports, search results and activity summaries). For example, if
  reporting on the database hosted on selected SQL Server, the path will be as follows:
  _Databases\database_name_.
- **Object type** — monitored object type; for the full list of supported object types, refer to
  [SQL Server](/docs/auditor/10.7/data-sources/databases/sql-server.md) topic.
- **Total account count** — total number of accounts that have access to this object.

The detailed information under summary includes:

- **User account** —name or SID of the account that has permissions on the selected object.
- **Account type** —possible values:
  - Windows Account
  - Login SQL Authentication
  - DB SQL User with password
- **Means granted** —how access permissions were granted to this account, e.g., _Direct permissions_
  or _Server role permissions_.
- **Job title** —reported for Active Directory users as set in their corresponding attribute. If not
  set, _`<not set>`_ is reported.
- **Effective grant** —the effective set of permissions granted to this account on the selected
  object.

Covering rules do not need to be applied, since **Effective grant** permissions are reported
automatically using these rules.

## Filters

This report has the following filters:

- **Monitoring plan** — name of the monitoring plan set to collect data from the SQL Server you
  need.
- **Time zone** — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This
  value is filled in automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in the
  [SQL Server](/docs/auditor/10.7/monitoring-plans/monitoring-scope.md) topic.
- **Item**—name of the SQL Server instance monitored with selected monitoring plan.
- **Object path** —path to the monitored object, as formatted by Netwrix Auditor in the activity
  records (see '_What_' field in the reports, search results and activity summaries). Wildcard (\*)
  is supported. For example, to report on the database hosted on selected SQL Server, specify the
  path as follows: _Databases\database_name_.
- **Permissions** —access permissions which assignment you want to be reported for the selected
  object.
- **Means granted** —how access permissions were granted to this account. You can select _Directly_,
  _Inherited_, or both (default setting).
- **User account**—name or SID of the account that has permissions on the selected object. Default
  is _%_ (all accounts).
- **Account type** —possible values: _Windows Account_, _Login SQL Authentication_, _DB SQL User
  with password_.
- **Job title (Active Directory)** —reported for Active Directory users as set in their
  corresponding attribute. Default is _%_ (any title).

## Considerations and limitations

- Reporting for case-sensitive SQL Servers and databases is not supported.
- The report will not show the RESTORE capability for the database owner.

- When calculating effective rights and permissions, the following will not be considered:
  - Ownership chaining
  - Cross DB ownership chaining
  - Trustworthy database
  - SQL Server agent fixed database roles
- Some permissions may not be reported correctly due to the known issues. See Release Notes for
  details.

## Related reports

- Clicking a User account link opens the
  [Account Permissions in SQL Server](/docs/auditor/10.7/reporting/report-types/state-in-time-reports.md) report.
- Clicking a Means granted link opens the[SQL Server Means Granted](/docs/auditor/10.7/reporting/report-types/state-in-time-reports.md) report.

## Usage example

Database administrators need to discover who currently has access permissions to **FinReports**
database stored on the **SQLSrv01\SQLServer2016** instance. This instance is included in the
monitoring plan named _SQL Servers Monitoring_.

To examine the relevant data, they need to generate **Object Permissions in SQL Server** report with
the filters set as follows:

- **Monitoring plan:** _SQL Servers Monitoring_
- **Snapshot date:** _Current Session_
- **Item:** _SQLSrv01\SQLServer2016_
- **Object path:** _Databases\FinReports_

All other filter values can be left default.

# SQL Server-Level Roles

This report shows the server-level fixed and custom roles for the selected SQL Server instance,
grouped by role name. The details for each role include its name, type, and a list of the effective
role members and member types. Use this report to control role membership and permissions.

To read more about SQL server-level roles, refer to
[this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/server-level-roles?view=sql-server-ver15).

To instruct Netwrix Auditor to collect data needed for this report, make sure that **Collect data
for state-in-time reports** option is selected in the monitoring plan properties. See Settings for
Data Collection in the monitoring plan documentation.

![sqlserverlevelroles](/img/product_docs/auditor/auditor/admin/reports/types/stateintime/sqlserverlevelroles.webp)

## Reported data

The report has a summary section with general information on the selected SQL Server object, and the
details section presented in the table format.

The summary section shows:

- **Role name**
- **Role type** — _Fixed server role_ or _Custom role_

The detailed information under summary includes the list of effective members for this role, where:

- **Member** — role member name.
- **Member type** —possible values:
  - Windows Account
  - Login SQL Authentication
  - DB SQL User with password

## Filters

This report has the following filters:

- **Monitoring plan** — name of the monitoring plan set to collect data from the SQL Server you
  need.
- **Time zone** — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This
  value is filled in automatically. time zone where Netwrix Auditor server is located, for example,
  UTC-08:00.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in the SQL Server monitoring plan
  documentation.
- **Item**— name of the SQL Server instance monitored with selected monitoring plan.
- **Server-level role** —select the role that you want to explore.
- **Role type** — _Fixed server role_ or _Custom role_.
- **Member**— role member name.

## Considerations and limitations

- Reporting for case-sensitive SQL Servers and databases is not supported.

## Related reports

- Clicking a role member (account) link opens the
  [Account Permissions in SQL Server](/docs/auditor/10.7/reporting/report-types/state-in-time-reports.md) report.

## Usage example

Database administrators in the _Corp_ organization need to discover what fixed server roles a
certain user has on the **SQLSrv01\SQLServer2016** instance. This instance is included in the
monitoring plan named _SQL Servers Monitoring_.

To examine the relevant data, they generated the **SQL Server-Level Roles** report with the filters
set as follows:

- **Monitoring plan:\_**SQL Servers Monitoring\_
- **Snapshot date:\_**Current Session\_
- **Item:\_**SQLSrv01\SQLServer2016\_
- **Server-level role:** %
- **Role type:** Fixed server role
- **Member:\_**Corp\Jim.White\_

# SQL Server State-In-Time Reports

These are reports on the SQL Server state-in-time data, including roles, permissions and other
configuration settings:

- [Account Permissions in SQL Server](/docs/auditor/10.7/reporting/report-types/state-in-time-reports.md)
- [Object Permissions in SQL Server](/docs/auditor/10.7/reporting/report-types/state-in-time-reports.md)
- [SQL Server Databases](/docs/auditor/10.7/reporting/report-types/state-in-time-reports.md)
- [SQL Server Means Granted](/docs/auditor/10.7/reporting/report-types/state-in-time-reports.md)
- [SQL Server-Level Roles](/docs/auditor/10.7/reporting/report-types/state-in-time-reports.md)

To instruct Netwrix Auditor to collect data needed for these reports, make sure that **Collect data
for state-in-time reports** option is selected in the corresponding monitoring plan properties. See
the [Settings for Data Collection](/docs/auditor/10.7/monitoring-plans/creating-monitoring-plans.md#settings-for-data-collection)
topic for additional information. By default, data collection will run daily at 4 AM.

# VMware State-In-Time Reports

These are reports on the VMware vCenter state-in-time data, including account permissions and object
permissions:

- Account Permissions in vCenter
- Detailed Account Permissions in vCenter
- Object Permissions in vCenter

To instruct Netwrix Auditor to collect data needed for these reports, make sure that **Collect data
for state-in-time reports** option is selected in the corresponding monitoring plan properties. See
the [Settings for Data Collection](/docs/auditor/10.7/monitoring-plans/creating-monitoring-plans.md#settings-for-data-collection)
topic for more information.

## Account Permissions in vCenter

Shows vCenter objects that user or group has explicit or inherited permissions on (either granted
directly or through group membership). Use this report to see who has permissions to what and
prevent rights elevation.

Supported object types and attributes are listed in the
[VMware](/docs/auditor/10.7/data-sources/infrastructure/vmware.md) topic.

For this report to function properly, you must enable the **Collect data for state-in-time reports**
option for the data source in the monitoring plan settings. See the
[Settings for Data Collection](/docs/auditor/10.7/monitoring-plans/creating-monitoring-plans.md#settings-for-data-collection)
topic for more information.

### Filters

You can narrow your reporting scope using multiple filters. Review the full list of available
filters and values:

- **Monitoring plan** — name of the monitoring plan set to collect data from the AD domain you need.
- Time zone — is set automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in
  [VMware](/docs/auditor/10.7/monitoring-plans/monitoring-scope.md)
- Item — name of the item within your monitoring plan.
- Inherited — select whether to show inherited permissions or not.
- Role – select the name of the VMware role you want to see in the report.
- User (domain\account) – select a specific user to be displayed in the report.

### Related Reports

- Clicking a Object path link opens the Object Permissions in vCenter report.
- Clicking a Role link opens the detailed report on privileges for the account report.
- Clicking the Defined in link opens the object permissions on vCenter level report.

## Detailed Account Permissions in vCenter

Shows detailed list of privileges that the specified account has on the VMware objects. Use this
report to prevent unnecessary privileges assigned to custom roles.

Supported object types and attributes are listed in the
[VMware](/docs/auditor/10.7/data-sources/infrastructure/vmware.md) topic.

For this report to function properly, you must enable the **Collect data for state-in-time reports**
option for the data source in the monitoring plan settings. See the
[Settings for Data Collection](/docs/auditor/10.7/monitoring-plans/creating-monitoring-plans.md#settings-for-data-collection)
topic for more information.

### Filters

You can narrow your reporting scope using multiple filters. Review the full list of available
filters and values:

- **Monitoring plan** — name of the monitoring plan set to collect data from the AD domain you need.
- Time zone — is set automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in
  [VMware](/docs/auditor/10.7/monitoring-plans/monitoring-scope.md)
- Item — name of the item within your monitoring plan.
- Role – select the name of the VMware role you want to see in the report.
- Object path — path to the monitored object, as formatted by Netwrix Auditor in the activity
  records.
- User (domain\account) – select a specific user to be displayed in the report.
- Inherited — select whether to show inherited permissions or not.

## Object Permissions in vCenter

Shows accounts with explicit or inherited permissions on a specific object in your vCenter (either
granted directly or through group membership). Use this report to see who has permissions to what
and prevent rights elevation.

Supported object types and attributes are listed in the
[VMware](/docs/auditor/10.7/data-sources/infrastructure/vmware.md) topic.

For this report to function properly, you must enable the **Collect data for state-in-time reports**
option for the data source in the monitoring plan settings. See the
[Settings for Data Collection](/docs/auditor/10.7/monitoring-plans/creating-monitoring-plans.md#settings-for-data-collection)
topic for more information.

### Filters

You can narrow your reporting scope using multiple filters. Review the full list of available
filters and values:

- **Monitoring plan** — name of the monitoring plan set to collect data from the AD domain you need.
- Time zone — is set automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in
  [VMware](/docs/auditor/10.7/monitoring-plans/monitoring-scope.md)
- Item — name of the item within your monitoring plan.
- Role – select the name of the VMware role you want to see in the report.
- **Object path** —path to the monitored object, as formatted by Netwrix Auditor in the activity
  records .
- User (domain\account) – select a specific user to be displayed in the report.

### Related Reports

- Clicking a User account link opens the Account Permissions in vCenter report.
- Clicking a Role link opens the detailed report on privileges for the account report.
- Clicking the Defined in link opens the object permissions on vCenter level report.
