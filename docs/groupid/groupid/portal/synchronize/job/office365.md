# Office 365 Subscription

While creating or editing mail enabled objects through a Synchronize job, Directory Manager provides you the facility to sync or deprovision subscriptions from Office 365 messaging provider.

## Sync Office 365 subscription in a Synchronize job

While creating or editing a Synchronize job (mailbox-enabled user) you can sync subscriptions from Office 365 messaging provider.

On the __Object, Fields and Mapping__ page:

1. Click __Add Messaging Provider__ and select __Office 365__ from the drop down list.
2. Enter domain name in which the mail server resides in the __Domain Name__ box.
3. Type the user name of an authorized user account on the mail server in the __User name__ box.
4. Type the application id in __Application ID__ box.
5. Enter password of the user mentioned in the User name field in the __Password__ box.
6. Enter __Tenant ID__ in the box. Tenant ID is __a globally unique identifier (GUID)__ that
   is different than your organization name or domain.
7. Enter client secret in the __Client Secret__ box.
8. Click __Sync Again__.

   The name of mail server(s) in the given environment populates in the __Server Name__ list, select your required mail server from the list.
9. Click __Save__.
10. On the __Selected Fields__ section, the following Office 365 specific fields are selected by default in the __Selected Fields__ box:

    - Sam Account Name
    - Display Name
    - First Name
    - Common Name (CN)
    - Last Name
    - Password
    - LicenseAssignment
    - User logon name
    - UsageLocation
    - Alias
11. Select __Field Mapping.__ You have to transform the following fields to sync subscriptions of Office 365:

    - LicenseAssignment
    - User logon name
    - UsageLocation
    - Password
12. On the __Field Map(s)__ section, click the __Transform__ button against the:

    1. the __LicenseAssignment__ field.

       1. On the __Transform__ dialog box, select _Static - assign a static value_ from the __Set the destination field to__ box.
       2. Select check box(es) of the required subscription(s) from the list of subscriptions displayed.
       3. Click __Transform__.
    2. the __User Logon Name__ field.

       1. On the __Transform__ dialog box, select _Script -write a Visual Baisc.Net script to assign a value programmatically_ from the __Set the destination field to__ box.
       2. Click __Edit Script__ to edit the script to append the user logon name with Office 365 domain name.

          By default, it displays: DTM.Result = DTM.Source("userPrincipalName") script.

          Modify it with the attributes you want for the user logon part and add domain name. For example:

          ```
           DTM.Result = DTM.Source("First")&DTM.Source("Last")&"@groupid.onmicrosoft.com"
          ```
       3. To test the script, click __Test Script__ from __Field Options__ dropdown.
       4. On the __Script Tester__ window click Run Script button to populate the test results in the __Test Result__ box. Close the __Script Editor__ to return to the __Transform__ dialog box.
       5. Click __Transform__.
    3. the __UsageLocation__ field.

       1. On the __Transform__ dialog box, select _Static - assign a static value_ from the __Set the destination field to__ box.
       2. In the __Static text__ box, enter 2-letter country name abbreviation such as US for United States.
       3. Click __Transform__.
    4. the __Password__ field.

       1. On the __Transform__ dialog box, select _Static - assign a static value_ from the __Set the destination field to__ box.
       2. Click [Auto-Generate Unique, Complex Passwords](/docs/groupid/groupid/portal/synchronize/transformation/autogenerateuniquepassword.md).
       3. On the Password Complexity Options dialog box, enter 10 in the __Password Length__ box.
       4. Clear the __Special symbols__ check box.
       5. Click __Transform.__
    5. Continue with the rest of the pages of the wizard to complete the job.

## Deprovision Office 365 subscription in a Synchronize job

To delete a subscription in an existing job, double click the required job. __Edit job__ wizard opens.

1. Click __Next__ until you reach on the __Filed Map(s)__ page of the __Edit job__ wizard.
2. Click the __Transform__ button against the: the __LicenseAssignment__ field.

   1. On the __Transform__ dialog box, select _Static - assign a static value_ from the __Set the destination field to__ box.
   2. Select check box(es) of the required subscription(s) you want to remove from the list of subscriptions displayed.
   3. Select the Deprovisioning check box.
   4. Click __Transform__.
3. Click __Finish__ or click __Next__ if you want to modify a setting on any rest of the pages of the __Edit Job__ wizard.
