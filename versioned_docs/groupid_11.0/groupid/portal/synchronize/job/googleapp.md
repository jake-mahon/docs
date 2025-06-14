# Google Workspace Subscription

While creating or editing mail enabled objects through a Synchronize job, GroupID provides you the facility to sync or deprovision subscriptions from Google Workspace messaging provider.

What do you want to do?

- [Sync Google Workspace subscriptions](#sync-google-workspace-subscriptions)
- [Deprovision existing Google Workspace subscriptions](#deprovision-existing-google-workspacesubscriptions)

## Sync Google Workspace subscriptions

While creating or editing a Synchronize job (mailbox-enabled user) you can sync subscriptions from G Suite messaging provider.

On the __Object, Fields and Mapping__ page:

1. Click __Add Messaging Provider__ and select Google Workspace from the drop down list.
2. Enter service account name in the __Service Account__ box.
3. Enter admin username in the __Admin Username__ box.
4. Specify the location of .P12 key file in the __P12 Certificate Path__ box.
5. Click __Sync Again__.

   The name of mail server populates in the __Server Name__ list.
6. Click __Save.__
7. On the __Select Fields__ page, the following Google Workspace specific fields are selected by default in the __Selected Fields__ box:

   - First Name
   - familyName
   - Email
   - LicenseAssignemnt
   - Password
   - AppName
   - Sam Account Name
   - Common Name(CN)
   - Display Name
8. Click __Next__.

   You have to transform all the above fields to work them properly with Google Workspace messaging provide.
9. On the __Field Map(s)__ page, click the __Transform__ button against:

   1. the __familyName__ field.

      1. On the __Transform__ dialog box, select _Join - combine two source fields together_ from the __Set the destination field to__ box.
      2. Select an attribute from the __First field__ list to form a value for the family name field.
      3. Provide a separator of your choice in the __Separator__ box to separate value of __First field__ and __Second field__. It is an optional field.
      4. Select an attribute from the __Second field__ list to form a value for the family name field.
      5. Click __Transform__
   2. the __Email__ field.

      1. On the __Transform__ dialog box, select _Script -write a Visual Baisc.Net script to assign a value programmatically_ from the __Set the destination field to__ box.
      2. Click __Edit Script__ to edit the script to append the user logon name with Google Workspace domain name.

         By default, it displays: DTM.Result = ""

         Modify it with the attributes you want to form email address of the mailbox-enabled user. For example:

         ```
          DTM.Result = DTM.Source("First") & "_go_" & DTM.Source("Last")&"@theasp.net"
         ```
      3. To test the script, click __Test Script__ from __Field Options__ dropdown.
      4. On the __Script Tester__ window click Run Script button to populate the test results in the __Test Result__ box. Close the __Script Editor__ to return to the __Transform__ dialog box.
      5. Click __Transform__.
   3. the __LicenseAssignment__ field.

      1. On the __Transform__ dialog box, select _Static - assign a static value_ from the __Set the destination field to__ box.
      2. Select check box(es) of the required subscription(s) from the list of subscriptions displayed.
      3. Click __Transform__
   4. the __AppName__ field.

      1. On the __Transform__ dialog box, select _Static - assign a static value_ from the __Set the destination field to__ box.
      2. In the __Static text__ box, enter G Suite.
      3. Click __Transform__.
10. Continue with the rest of the pages of the wizard to complete the job.

## Deprovision existing Google Workspace subscriptions

To delete a subscription in an existing job, double click the required job. __Edit job__ wizard opens.

1. Click __Next__ until you reach on the __Filed Map(s)__ page of the __Edit job__ wizard.
2. Click the __Transform__ button against the __LicenseAssignment__ field.

   1. On the __Transform__ dialog box, select _Static - assign a static value_ from the __Set the destination field to__ box.
   2. Select check box(es) of the required subscription(s) you want to remove from the list of subscriptions displayed.
   3. Select the __Deprovisioning__ check box.
   4. Click __OK__.
3. Click __Finish__ or click __Next__ if you want to modify a setting on any rest of the pages of the __Edit Job__ wizard.

__See Also__

- [Create a Job](/versioned_docs/groupid_11.0/groupid/portal/synchronize/job/create.md)
- [Create a Job Collection
  ](/versioned_docs/groupid_11.0/groupid/portal/synchronize/collection/create.md)
- [Transform](/versioned_docs/groupid_11.0/groupid/portal/synchronize/transformation/overview.md)
- [Auto-Generate Unique, Complex Passwords](/versioned_docs/groupid_11.0/groupid/portal/synchronize/transformation/autogenerateuniquepassword.md)
