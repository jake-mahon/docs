---
title: sync jobs
sidebar_label: sync-jobs
description: Directory Manager 11.0 documentation for sync jobs with configuration details, usage instructions, and implementation guidance.
---

# Choose Your Job Template

For creating a job, GroupID Synchronize enables you to create a new job based on your setting and
criteria. In addition to that, it also gives you multiple templates to directly create a job from.

**Follow these steps:**

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Create New** and then click **Job**.
3. On the **Choose Your Job Template** page, enter the following job details:

   1. In **Job Name,** write a name for the job you are creating.
   2. In **Job Description**, enter a description for the job.
   3. In **Job Owner (s)** select one or more owners for the job.
   4. To create a new job from the scratch, select **Blank Job**.
   5. To use a pre-defined template, click on the card of one of the following templates:

      - Linked Mailbox Creation in Active Directory
      - Move and Disable Objects in Active Directory
      - Move Objects in Active Directory
      - Sync GAL in Active Directory

**See Also**

- [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)

# Create a Job

Synchronize allows you to move data from one data source to another using a set of sequential
commands that run in the background. The set of commands is called a job. You can create a job from
scratch, from a predefined template, or from a template that you create yourself.

Synchronize provides these predefined job templates:

- Linked Mailbox Creation in Active Directory
- Move and Disable Objects in Active Directory
- Move Objects in Active Directory
- Sync GAL in Active Directory

These job templates represent common business scenarios. You can use these templates or modify them
to create your own custom templates. Templates offer predefined settings, which you can apply to the
new job (except for the source and destination configurations) and modify as required. You can also
create a new job by duplicating and modifying an existing one.

Creating a job from scratch requires that you specify the source and destination resources involved
in the transfer of data. You must also map the fields for the source and destination objects in
which the data transfer takes place.

You can also apply data transformations. A transformation allows you to modify data as it is being
transferred to the destination.

Once you create a job, you can either run it manually or schedule it to run periodically.

You can create templates from existing jobs on-the-fly and reuse their settings in new jobs.

To understand how workflows work with Synchronize jobs, see the
[Synchronize Jobs and Workflows](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md#synchronize-jobs-and-workflows)
topic.

## Create a new job

1. On GroupID Portal, select **Synchronize**on left pane.
2. On the Synchronize portal, click **Create New** and then click **Job**.
3. On the
   [Choose Your Job Template](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
   page, enter the job details and select whether to use a job template or create the job from
   scratch.
4. Click **Next Step**.
5. On the
   [Select Your Source and Destination](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
   page, specify the source and destination providers.
6. Click **Next Step**.
7. On the
   [Objects, Fields and Mapping ](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
   page, map the source and destination fields and apply transformations.
8. On the
   [Schedule Job and Notifications](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
   page, choose a schedule for a job and set up notification settings.

   NOTE: After creating the job, you can modify the schedule for the job and you can also create a
   new schedule.

9. Select **Preview job when finished** checkbox to preview the job.
10. **Review your Changes** before finishing the job.
11. Click **Finish** and create the job.
12. Once you run the job, the job runs if workflow is not configured. If workflow is configured, the
    request gets generated.
13. Generated workflow request will be displayed in the
    [Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md) section for the
    workflow approver(s). If the approver approves the workflow request, the job will execute the
    results.
14. The **Review Job Run** dialog box appears, providing access to run statistics, reports, and logs
    for the last job run.

**See Also**

- [Job Templates](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Manage a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Synchronize Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)
- [Transform](/docs/directorymanager/11.0/user-guide/synchronization/index.md)
- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
- [Sample Transform Scripts](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
- [Sample Container Scripts](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
- [Script](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)

# Exchange Subscription

While creating or editing mail enabled objects through a Synchronize job, GroupID provides you the
facility to sync or deprovision subscriptions from Office 365 messaging provider.

What do you want to do?

- [Sync Exchange subscriptions](#sync-exchange-subscriptions)

## Sync Exchange subscriptions

While creating or editing a Synchronize job (mailbox-enabled user) you can sync subscriptions from
Exchange messaging provider.

On the **Object, Fields and Mapping** page:

1. In the **Messaging Provider** drop-down list, select the **Exchange** version that you want to
   use.
2. Enter the domain name where the mail server resides in the **Domain** name box.
3. Enter the username and password of an authorized user account on the mail server in the
   **Username** and **Password** boxes.
4. Set Exchange server priority.

   With Microsoft Exchange as the messaging provider, the **Server Name** column in the **Server
   Status & Priority** area lists the mail servers in the environment. By default, GroupID randomly
   assigns the highest priority to a server. You can change its priority level and set the priority
   for other servers.

   If your required server is not listed, click **Sync Again**.

   1. In the **Server Status and Priority** section, select the check box for the server you want
      to specify or change the priority for.

      GroupID checks the availability of the server and displays its status as _Online_
      (available) or _Offline_ (unavailable) in the **Status** column.

   2. In the **Priority** box, select a priority level for the server, with ‘1’ representing the
      highest priority.

5. Click **Save**.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)
- [Transform](/docs/directorymanager/11.0/user-guide/synchronization/index.md)
- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)

# Google Workspace Subscription

While creating or editing mail enabled objects through a Synchronize job, GroupID provides you the
facility to sync or deprovision subscriptions from Google Workspace messaging provider.

What do you want to do?

- [Sync Google Workspace subscriptions](#sync-google-workspace-subscriptions)
- [Deprovision existing Google Workspace subscriptions](#deprovision-existing-google-workspacesubscriptions)

## Sync Google Workspace subscriptions

While creating or editing a Synchronize job (mailbox-enabled user) you can sync subscriptions from G
Suite messaging provider.

On the **Object, Fields and Mapping** page:

1. Click **Add Messaging Provider** and select Google Workspace from the drop down list.
2. Enter service account name in the **Service Account** box.
3. Enter admin username in the **Admin Username** box.
4. Specify the location of .P12 key file in the **P12 Certificate Path** box.
5. Click **Sync Again**.

   The name of mail server populates in the **Server Name** list.

6. Click **Save.**
7. On the **Select Fields** page, the following Google Workspace specific fields are selected by
   default in the **Selected Fields** box:

   - First Name
   - familyName
   - Email
   - LicenseAssignemnt
   - Password
   - AppName
   - Sam Account Name
   - Common Name(CN)
   - Display Name

8. Click **Next**.

   You have to transform all the above fields to work them properly with Google Workspace messaging
   provide.

9. On the **Field Map(s)** page, click the **Transform** button against:

   1. the **familyName** field.

      1. On the **Transform** dialog box, select _Join - combine two source fields together_ from
         the **Set the destination field to** box.
      2. Select an attribute from the **First field** list to form a value for the family name
         field.
      3. Provide a separator of your choice in the **Separator** box to separate value of **First
         field** and **Second field**. It is an optional field.
      4. Select an attribute from the **Second field** list to form a value for the family name
         field.
      5. Click **Transform**

   2. the **Email** field.

      1. On the **Transform** dialog box, select _Script -write a Visual Baisc.Net script to
         assign a value programmatically_ from the **Set the destination field to** box.
      2. Click **Edit Script** to edit the script to append the user logon name with Google
         Workspace domain name.

         By default, it displays: DTM.Result = ""

         Modify it with the attributes you want to form email address of the mailbox-enabled
         user. For example:

         ```
          DTM.Result = DTM.Source("First") & "_go_" & DTM.Source("Last")&"@theasp.net"
         ```

      3. To test the script, click **Test Script** from **Field Options** dropdown.
      4. On the **Script Tester** window click Run Script button to populate the test results in
         the **Test Result** box. Close the **Script Editor** to return to the **Transform**
         dialog box.
      5. Click **Transform**.

   3. the **LicenseAssignment** field.

      1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set
         the destination field to** box.
      2. Select check box(es) of the required subscription(s) from the list of subscriptions
         displayed.
      3. Click **Transform**

   4. the **AppName** field.

      1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set
         the destination field to** box.
      2. In the **Static text** box, enter G Suite.
      3. Click **Transform**.

10. Continue with the rest of the pages of the wizard to complete the job.

## Deprovision existing Google Workspace subscriptions

To delete a subscription in an existing job, double click the required job. **Edit job** wizard
opens.

1. Click **Next** until you reach on the **Filed Map(s)** page of the **Edit job** wizard.
2. Click the **Transform** button against the **LicenseAssignment** field.

   1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set the
      destination field to** box.
   2. Select check box(es) of the required subscription(s) you want to remove from the list of
      subscriptions displayed.
   3. Select the **Deprovisioning** check box.
   4. Click **OK**.

3. Click **Finish** or click **Next** if you want to modify a setting on any rest of the pages of
   the **Edit Job** wizard.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)
- [Transform](/docs/directorymanager/11.0/user-guide/synchronization/index.md)
- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)

# Map Fields

When creating a job, you select any of the following destination providers.

- Microsoft Active Directory
- Microsoft Entra ID
- Generic LDAP version 3.0
- Google Workspace
- Microsoft Access
- Microsoft Excel
- Oracle
- ODBC
- Microsoft SQL Server
- Text

Once selected, you can see a specific set of objects that can be created in the destination
providers. Once the object type is selected, there are a set of mandatory attributes that are
required for creating the respective objects.

The tables below show the mandatory attribute for different object types for each provider and what
transformations that need to apply to them while mapping.

Mandatory attributes for User:

| Provider           | Mandatory Attributes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Explanation                                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Active Directory   | cn                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                 |
| givenname          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                 |
| sAMAccountName     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                 |
| sn                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                 |
| password           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                 |
| Microsoft Entra ID | accountenabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | To create disabled users, select False in static transformation. To create enabled users, select True in static transformation. |
| directoryrole      | Every user is assigned a role in Microsoft Entra ID. In static transformation, it will auto-generate all roles in the tenant. Select the one you want to choose.                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                 |
| displayname        | Given the name that appears on Microsoft Entra ID. You can map it with the first name.                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                 |
| givenname          | First name of the user in Microsoft Entra ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                 |
| userprincipalname  | You need to amend the domain name to give the userprincipalname. It is the mandatory key value and is unique for every user. In static transformation, select join to modify the name. Then go to the script transformation and you will see the updated script. [Copy](<javascript:void(0);>) `DTM.Source("First") & "." & DTM.Source("Last") & "@001wrc.onmicrosoft.com"` In the script, add the domain name and generate new userprincipal names for each user based on the join and script transform. |                                                                                                                                 |
| password           | Generate passwords for the users.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                 |

Mandatory attributes for Mail-enabled User:

| Provider         | Mandatory Attributes | Explanation |
| ---------------- | -------------------- | ----------- |
| Active Directory | cn                   |             |
| displayname      |                      |             |
| givenname        |                      |             |
| mailNickname     |                      |             |
| sAMAccountName   |                      |             |
| sn               |                      |             |
| targetAddress    |                      |             |
| password         |                      |             |

Mandatory Attributes for Mailbox-enabled User:

| Provider           | Mandatory Attributes                                                                                                                                                                                                               | Explanation |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Active Directory   | cn                                                                                                                                                                                                                                 |             |
| displayname        |                                                                                                                                                                                                                                    |             |
| givenname          |                                                                                                                                                                                                                                    |             |
| homeMDB            |                                                                                                                                                                                                                                    |             |
| mailNickname       |                                                                                                                                                                                                                                    |             |
| sAMAccountName     |                                                                                                                                                                                                                                    |             |
| sn                 |                                                                                                                                                                                                                                    |             |
| password           |                                                                                                                                                                                                                                    |             |
| Microsoft Entra ID | accountenabled                                                                                                                                                                                                                     |             |
| directoryrole      |                                                                                                                                                                                                                                    |             |
| displayname        |                                                                                                                                                                                                                                    |             |
| givenname          |                                                                                                                                                                                                                                    |             |
| mailnickname       | Same as user principalname. We do not need to update script. It will add domain name itself.                                                                                                                                       |             |
| surname            |                                                                                                                                                                                                                                    |             |
| userprincipalname  |                                                                                                                                                                                                                                    |             |
| password           |                                                                                                                                                                                                                                    |             |
| UsageLocation      | Mailbox-specific. You can apply the static transformation.                                                                                                                                                                         |             |
| LicenseAssignment  | All mailboxes are assigned a license. We assign that license while creation. Select static transformation, it will display all available licenses. You can select any and once user is created they will be assigned this license. |             |

Mandatory Attributes for Mailbox-enabled Contact:

| Provider         | Mandatory Attributes | Explanation |
| ---------------- | -------------------- | ----------- |
| Active Directory | cn                   |             |
|                  | displayname          |             |
|                  | givename             |             |
|                  | mailNickname         |             |
|                  | sn                   |             |
|                  | targetAddress        |             |

Mandatory Attributes for Group:

| Provider                                                                                                                                   | Mandatory Attributes                                                                                                            | Explanation                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Active Directory                                                                                                                           | cn                                                                                                                              |                                            |
| displayname                                                                                                                                |                                                                                                                                 |                                            |
| grouptype                                                                                                                                  |                                                                                                                                 |                                            |
| member (sAMAccountName)                                                                                                                    |                                                                                                                                 |                                            |
| sAMAccountName                                                                                                                             |                                                                                                                                 |                                            |
| Microsoft Entra ID                                                                                                                         | description                                                                                                                     | Text fields that you can map with anything |
| displayname                                                                                                                                | The name that appears in the directory. It will uniquely identify the group. You can also apply transformations.                |                                            |
| grouptype                                                                                                                                  | Go to static transformation, you will get a group-type list. Select any of the following: - Security - Distribution - Office365 |                                            |
| If you add Messaging provider, the group becomes mail-enabled and you will see the following additional mandatory attribute while mapping. |                                                                                                                                 |                                            |
| mailNickname                                                                                                                               | Same as user principalname. We do not need to update the script. It will add domain name itself.                                |                                            |

**See Also**

- [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)
- [Transform](/docs/directorymanager/11.0/user-guide/synchronization/index.md)
- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)

# Objects, Fields and Mapping

On the **Object, Fields and Mappings** page, map the a attributes with source fields.

1. In the **Sync Object Options**, select an object type that you want to either create or update.

   Object types vary depending on the destination provider.

   | Destination Provider | Object Type                                                                                                                                                        | Description                                                                                                      |
   | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
   | Active Directory     | User                                                                                                                                                               | An Active Directory user.                                                                                        |
   | Mail-enabled User    | An Active Directory user with an external e-mail address (requires Exchange 2013 or later).                                                                        |                                                                                                                  |
   | Mailbox-enabled User | An Active Directory user with an Exchange mailbox (requires Exchange 2013 or later).                                                                               |                                                                                                                  |
   | Linked Mailbox       | A mailbox that is accessed by a user in a separate, trusted forest. Linked mailboxes may be necessary for organizations that deploy Exchange in a resource forest. |                                                                                                                  |
   | Contact              | An Active Directory contact.                                                                                                                                       |                                                                                                                  |
   | Group                | An Active Directory group. Members of the group will be synced with, but not created at, the destination.                                                          |                                                                                                                  |
   | Mail-enabled Contact | An Active Directory contact with an external e-mail address (Exchange 2013 or later)                                                                               |                                                                                                                  |
   | Microsoft Entra ID   | User                                                                                                                                                               | A Microsoft Entra ID user.                                                                                       |
   | Mailbox-enabled User | A Microsoft Entra ID user with an external e-mail address (requires Exchange 2013 or later).                                                                       |                                                                                                                  |
   | Group                | A Microsoft Entra IDgroup.                                                                                                                                         |                                                                                                                  |
   | Generic LDAP         | inetOrgPerson                                                                                                                                                      | inetOrgPerson is an object class found in standard Lightweight Directory Access Protocol (LDAP) implementations. |
   | Google Workspace     | User                                                                                                                                                               | A Google Workspace user.                                                                                         |
   | Group                | A Google Workspace group.                                                                                                                                          |                                                                                                                  |

2. The **Add Messaging Provider** option is only available with the mail-enabled objects. Click
   **Add Now** to select a messaging system you want to use with this job. You need to select from
   the two options:

   - **Configure with Destination Provider**

     It displays the messaging provider configured in the destination provider.

   - **Add New Provider**

     It displays the following list of new providers that you can use to create a job.

     - [Google Workspace Subscription](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)

       Add connection details for Google Workspace.

     - [Office 365 Subscription](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)

       Add Connection details for Office 365.

     - [Exchange Subscription](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)

       Add connection details for Exchange.

     - Others

       Add details for any other provider that is not present in the list.

     - None

       Select None if you not want to add any messaging provider.

3. In the **Script Language** section, specify the scripting language you want to use. Select one of
   the following language:

   - [Visual Basic .NET for GroupID](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)
   - Python for GroupID

4. The Global Script Editor allows the script author to extend the functionality of Synchronize by
   authoring scripts in Visual Basic .NET and Python. Before saving a script, the code must be
   verified by compiling the script. Click on **Edit Global Script,**and follow these steps:

   1. Click on **Edit** option from the header of the screen to edit the script. You can perform
      the following action:

      | Actions             | Description                                                                                                              |
      | ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
      | Go To (Ctrl+G)      | Opens the Go To Line dialog box for jumping to a specific line in the editor                                             |
      | Cut (Ctrl+X)        | Copies the current text selection to the clipboard and deletes the selection                                             |
      | Copy (Ctrl+C)       | Copies the current text selection to the clipboard while keeping the selection.                                          |
      | Paste (Ctrl+V)      | Inserts the copied or cut text from the clipboard in the workspace.                                                      |
      | Undo (Ctrl+Z        | Reverses the last change.                                                                                                |
      | Redo (Ctrl+Y        | Re-applies a change reversed using the Undo action.                                                                      |
      | Insert Datetime     | Inserts the current date and time in the editor.                                                                         |
      | Insert File As Text | Opens the Select a text file dialog box that allows you to select a text file from which to insert text into the editor. |

   2. Use the **Tools > Add or remove references** to display various components and DLL libraries
      included in your script.
   3. Click **Import** to import the previously exported script to run the job.
   4. To export the script, click **Export** to save it for future use.
   5. You can also click the **Plus** icon to clear the scripting editor and then copy and paste
      the attached script in the global scripting editor.
   6. To compile the script, click on **Build** and then click **Compile Script**.

      Synchronize will review the code to determine if there are any errors which would prevent
      the code from loading or executing. While compiling your script will verify the code is free
      of syntactical errors, it does not guarantee that the code is free from logical errors. If
      the code is free of syntactical errors, a message box will appear informing the user that
      the code has been successfully compiled. In the event of one or more errors, the user can
      view any problems at the bottom of the screen in the **Errors** section. Double-clicking on
      a given error will position the cursor to the location of the error in the script.

   7. The toolbar displays various actions that you can perform on your script:

      | Icon                                                                                                             | Description                                            |
      | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
      | ![undo](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/synchronize/job/undo.webp)             | Reverses the last change.                              |
      | ![redo](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/synchronize/job/redo.webp)             | Re-applies a change reversed using the Undo action.    |
      | ![indent](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/synchronize/job/indent.webp)         | Increases the indenting of the current text selection. |
      | ![outdent](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/synchronize/job/outdent.webp)       | Decreases the indenting of the current text selection. |
      | ![comment](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/synchronize/job/comment.webp)       | Comments the current text selection.                   |
      | ![uncomment](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/synchronize/job/uncomment.webp)   | Uncomments the current text selection.                 |
      | ![uppercase](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/synchronize/job/uppercase.webp)   | Converts the current text selection to uppercase.      |
      | ![lowercase](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/synchronize/job/lowercase.webp)   | Converts the current text selection to lowercase.      |
      | ![darktheme](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/synchronize/job/darktheme.webp)   | Switch the theme of the script editor to dark.         |
      | ![lighttheme](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/synchronize/job/lighttheme.webp) | Switch the theme of the script editor to light.        |
      | ![selectall](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/synchronize/job/selectall.webp)   | Selects all the text in the editor.                    |

   8. Click **Save** to save the changes made to the script.

5. On the
   [Selected Fields for object types](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
   type section, click **Add/Edit Fields**. You can specify the action to take if the data or object
   being exported from the source does not exist at the destination.
6. Use the **Map Field** section to map the source and destination fields and to apply
   transformations:

   1. In the **Key** column, select at least one field to be a unique identifier.

      Do one of the following:

      - [Map Fields](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)

        In the Source column of each destination item, select the source fields that contribute
        the data for the destination.

      - **Apply a
        [Transform](/docs/directorymanager/11.0/user-guide/synchronization/index.md)**

        In the **Transform** column, click the **More Options** button to open the **Transform**
        [ _field_] dialog box and apply a transformation to the field value before it is saved
        at the destination.

   2. If the source or destination field is multi-valued, set a delimiter from the **Delimiter**
      list.

      This delimiter is used either to separate the values of a multi-valued field at the source,
      or to merge values of a multi-valued field at the destination, depending on the types of
      data sources.

   3. In the **New only** column, select the check boxes for fields to be updated only when
      creating a new object. Fields that are not selected are continually updated. Key fields are
      selected by default as New Only fields as a requirement; you cannot change this selection.

      NOTE: For Microsoft Entra ID objects, primary key fields are:  
       (1) UserPrincipleName attribute for “User/Mailbox” object  
       (2) DisplayName attribute for “Group” object.

   4. Select **Show field reference** check box to view a list of attributes from the schema of the
      source provider.
   5. Click **Next**.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)
- [Transform](/docs/directorymanager/11.0/user-guide/synchronization/index.md)
- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)

# Office 365 Subscription

While creating or editing mail enabled objects through a Synchronize job, GroupID provides you the
facility to sync or deprovision subscriptions from Office 365 messaging provider.

What do you want to do?

- [Sync Office 365 subscription in a Synchronize job](#sync-office-365-subscription-in-a-synchronize-job)
- [Deprovision Office 365 subscription in a Synchronize job](#deprovision-office-365-subscription-in-a-synchronize-job)

## Sync Office 365 subscription in a Synchronize job

While creating or editing a Synchronize job (mailbox-enabled user) you can sync subscriptions from
Office 365 messaging provider.

On the **Object, Fields and Mapping** page:

1. Click **Add Messaging Provider** and select **Office 365** from the drop down list.
2. Enter domain name in which the mail server resides in the **Domain Name** box.
3. Type the user name of an authorized user account on the mail server in the **User name** box.
4. Type the application id in **Application ID** box.
5. Enter password of the user mentioned in the User name field in the **Password** box.
6. Enter **Tenant ID** in the box. Tenant ID is **a globally unique identifier (GUID)** that is
   different than your organization name or domain.
7. Enter client secret in the **Client Secret** box.
8. Click **Sync Again**.

   The name of mail server(s) in the given environment populates in the **Server Name** list,
   select your required mail server from the list.

9. Click **Save**.
10. On the **Selected Fields** section, the following Office 365 specific fields are selected by
    default in the **Selected Fields** box:

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

11. Select **Field Mapping.** You have to transform the following fields to sync subscriptions of
    Office 365:

    - LicenseAssignment
    - User logon name
    - UsageLocation
    - Password

12. On the **Field Map(s)** section, click the **Transform** button against the:

    1. the **LicenseAssignment** field.

       1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set
          the destination field to** box.
       2. Select check box(es) of the required subscription(s) from the list of subscriptions
          displayed.
       3. Click **Transform**.

    2. the **User Logon Name** field.

       1. On the **Transform** dialog box, select _Script -write a Visual Baisc.Net script to
          assign a value programmatically_ from the **Set the destination field to** box.
       2. Click **Edit Script** to edit the script to append the user logon name with Office 365
          domain name.

          By default, it displays: DTM.Result = DTM.Source("userPrincipalName") script.

          Modify it with the attributes you want for the user logon part and add domain name.

          For Example:

          ```
           DTM.Result = DTM.Source("First")&DTM.Source("Last")&"@directorymanager.onmicrosoft.com"
          ```

       3. To test the script, click **Test Script** from **Field Options** dropdown.
       4. On the **Script Tester** window click Run Script button to populate the test results in
          the **Test Result** box. Close the **Script Editor** to return to the **Transform**
          dialog box.
       5. Click **Transform**.

    3. the **UsageLocation** field.

       1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set
          the destination field to** box.
       2. In the **Static text** box, enter 2-letter country name abbreviation such as US for
          United States.
       3. Click **Transform**.

    4. the **Password** field.

       1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set
          the destination field to** box.
       2. Click
          [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md).
       3. On the Password Complexity Options dialog box, enter 10 in the **Password Length** box.
       4. Clear the **Special symbols** check box.
       5. Click **Transform.**

    5. Continue with the rest of the pages of the wizard to complete the job.

## Deprovision Office 365 subscription in a Synchronize job

To delete a subscription in an existing job, double click the required job. **Edit job** wizard
opens.

1. Click **Next** until you reach on the **Filed Map(s)** page of the **Edit job** wizard.
2. Click the **Transform** button against the: the **LicenseAssignment** field.

   1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set the
      destination field to** box.
   2. Select check box(es) of the required subscription(s) you want to remove from the list of
      subscriptions displayed.
   3. Select the Deprovisioning check box.
   4. Click **Transform**.

3. Click **Finish** or click **Next** if you want to modify a setting on any rest of the pages of
   the **Edit Job** wizard.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)
- [Transform](/docs/directorymanager/11.0/user-guide/synchronization/index.md)
- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)

# Schedule Job and Notifications

On **Schedule Job and Notifications**, you can set the schedule on the basis of which the job can
run in future and set the notifications settings for the job.

1. On the **Schedule Job and Notifications** page:

   1. In the **Schedule Job** section, choose an existing job from the drop down list.
   2. In the **Schedule** section, the **Task name** drop down lists the Smart Group Update jobs
      existing in the identity store for the Active Directory domain that is provided as
      destination in this Synchronize job. Select a job that you want to run along with this
      Synchronize job. The selected job will run each time the Synchronize job is run either
      manually or from the Synchronize job scheduler.

      If you are modifying an existing job, you can also a new schedule for the job. Visit
      [Synchronize Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)

2. Set up email notification of job run results:

   1. Select the **Enable** option.
   2. Enter email addresses of notification recipients in **Send notification to the following
      email(s)** box
   3. From the **Send Notification** options, select one of the following notification trigger
      event:

      1. **Always**: Send a notification every time the job  is run, regardless of outcome.
      2. **Records are updated**: Send a notification only when one or more records have been
         updated.
      3. **One or more errors occur**: Send a notification only when errors occur while executing
         the job.
      4. **Job fails**: Send a notification only when a fatal error occurs causing the job to
         fail.

         RECOMMENDED: This step requires that notification settings are already configured in the
         connected identity store. Click Configure Notifications if notifications are not
         configured.

3. Click on **Advanced Settings** to go to **Advanced Setting For the Job** page:

4. Review and test the default query statement shown and modify it, if required on the **Source
   Query** section.

   The Source Query page shows the default query statement generated from the settings you have
   entered into the wizard. Synchronize job uses this query to fetch records from the source
   provider.

5. On the **Destination Query** section, review the default query statement shown and modify it if
   required.

   Like the Source Query page, the Destination Query page shows the default query statement
   generated from the settings you have entered into the wizard. Synchronize job uses this query to
   sync records at the destination provider.

   - In case of Identity store providers, filter criteria will be used, and its data will be
     fetched from elastic search.
   - In case of Data source providers (SQL/Excel/Access), SQL query will be used, and data will be
     fetched directly from the provider.  
      Click Test to preview the results before executing the query. You can click Clear to delete
     the command query.

6. On the **Synchronize Settings** wizard page, configure directory synchronization and job
   scheduling:

   - **Update all records from source**: to synchronize all records from the source to the
     destination. This is limited to Exchange 5.5, Active Directory, SQL Server, or Excel.) each
     time the job runs.
   - **Update only records that have changed**: to synchronize only those records that have changed
     in the source data since the last time the job was run. For this option to apply, your source
     must carry the last updated time stamp of each record.

     The **Select source time stamp** field drop-down box gets enabled when you select the
     **Update only records that have changed** option. From here, select the attribute or field
     in the source that would contain a value for the time stamp.

     NOTE: Synchronizing all fields every time the job runs can be inefficient. If your data
     source has a time stamp field that indicates the last time the row was updated or modified,
     Synchronize can use it to selectively update only the rows that have changed since the last
     time the job was run.

7. Click **Save**.

8. Select **Preview job when finished** checkbox to preview the job.
9. **Review your Changes** before finishing the job.
10. Click **Finish** and create the job.
11. Once you run the job, a workflow request is triggered.
12. Generated workflow request will be displayed in the
    [Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md) section for the
    workflow approver(s). If the approver approves the workflow request, the job will execute the
    results.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)
- [Transform](/docs/directorymanager/11.0/user-guide/synchronization/index.md)
- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)

# Selected Fields for object types

On the Selected Fields for Object type section, click Add/Edit Fields. You can specify the action to
take if the data or object being exported from the source does not exist at the destination.

1. Select the operation that you want to perform. Click **Create** to create new objects and
   **Update** if you want to update the existing objects.

   - If table provider is the destination, you can enable two-way synchronization.

     - If an object exists in the source but does not exist in the destination, you can select
       one of the following options:

       - **Create**

         Select this option to create objects at the destination for source objects that have
         no counterparts in the destination during synchronization.

       - **Skip**

         Ignore items that do not exist on the destination and update only those that do.

     - If an object does not exist in the source but exists in the destination, you can select
       one of the following options:

       - **Delete**

         Delete such objects from the destination.

       - **Skip**

         Ignore objects at the destination that do not exist at the source.

   - If LDAP-compliant directory server or a phone system is the destination, you can do the
     following:

     - For LDAP providers such as Active Directory, you can select one or more object types that
       are synced between the source and destination directories. For other LDAP providers you
       can create or update objects of a specific type.

       For each object type, you must specify the action to take.

       - **Create**

         Select this option to create objects at the destination for source objects that have
         no counterparts in the destination during synchronization. You must specify a target
         container for each object type.

         Click the **Container** button to view of each **Create** action that you selected
         in the preceding step, and select one of the following:

         - **Create objects in this container** - Click **Browse** to change the displayed
           destination container (specified on the Destination Provider page) or select a new
           container.
         - **Create objects in the container specified in this source field**- Enter the
           distinguished name of the container.
         - **Create objects in a container specified in script** - Click the Edit Script
           button and write a script that identifies the desired container.

       - **Skip**

         The default selection is to skip items that do not exist on the destination and only
         update those that do.

     - For phone systems such as a third-party Switchvox provider, you can only select one object
       type to be synced between the source and destination directories.

       For the selected object type, you must specify the action to take.

       - **Create**

         Select this option to create object at the destination for source object that has no
         counterparts in the destination during synchronization. You must specify a target
         container for the selected object type.

       - **Skip**

         Select this option to ignore any source objects that does not exist at the
         destination during synchronization.

2. Select the fields to be synced. Repeat for each object type desired. Object types listed are
   based on the source directory that you selected on the previous page.
3. If the destination is not an Active Directory domain, select the names of fields to sync from the
   list.
4. By default, Synchronize moves selects some fields from the list by analyzing the fields from the
   source.
5. For the Group object type, clicking _member (sAMAccountName_) displays **Member Key** list.
   Select the required Active Directory attribute from it to search matching group members in the
   destination.

   NOTE: A Synchronize job can only create groups at the destination. In order to sync group
   members, it searches Active Directory for the matching objects based on the Member Key field and
   adds them to the group membership.

6. To select all the fields, check the **All Fields** checkbox below.
7. Click **Save**.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)
- [Transform](/docs/directorymanager/11.0/user-guide/synchronization/index.md)
- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)

# Select Your Source and Destination

You must create required identity providers and data sources before creating a job. They are created
in Admin Center under Identity Stores and Data Sources tab respectively. After creating the
providers, you need to specify the providers in **Select Your Source and Destination** page.

Follow these steps to configure the settings for the providers:

1. On the **Select Your Source and Destination** page, do the following:

   - **Your Source**: Specify the data source or identity store from which to move data.
   - **Your Destination**: Specify the data source or Identity store to move data to.

   Provide the following information for the selected providers:

   - Microsoft Active Directory

     Specify a container. To include sub containers, select the checkbox **Include Sub
     Containers**.

     - In case of a source, the job will fetch data from the container.
     - In case of a destination the job will create or update data in the container.

   - Microsoft Entra ID

     Specify a container. To include sub containers, select the checkbox **Include Sub
     Containers**.

     - In case of a source, the job will fetch data from the container.
     - In case of a destination, the job will create or update data in the container.

   - Generic LDAP

     You do not need to provide any additional information for this provider.

   - Google Workspace

     Specify a container. To include sub containers, select the checkbox **Include Sub
     Containers**.

     - In case of a source, the job will fetch data from the container.
     - In case of a destination, the job will create or update data in the container.

   - Microsoft Access

     In the **Table Name** drop-down list, select the table you want to use.

     The list displays the tables in the selected Microsoft Access database.

   - Microsoft Excel

     In the **Select Sheet Name** drop-down list, select the sheet you want to use.

     The list displays the sheets in the selected Microsoft Excel file.

     1. In case of Excel as destination (with Replace file-discard existing content option
        selected on the Destination Provider page of the Job wizard), if any sheet name of the
        Excel file is of two or less character the Synchronize job corrupts all the sheets in
        that Excel file.

     2. In case of Excel as destination (with Delete option selected on the Create Object page of
        the Job wizard), If the Excel file schema is of more than 127 columns the job fails.

   - Oracle

     In the **Table or View** drop-down list, select the database table you want to use.

     The list displays the tables in the Oracle database.

     In case the type column of Oracle database is not set as Datetime then time stamp
     functionality of Synchronize do not work. The given type needs to be converted into Datetime
     explicitly while configuring the Synchronize job.

   - ODBC

     In **Table Name** box, enter the name of the table you want to use.

     Souldn't user select instead of entering the name?

   - Microsoft SQL Server

     In the **Table or View** drop-down list, select the database table you want to use.

     The list displays the tables in the Microsoft SQL Server database.

   - Text Driver/CSV

     You do not need to provide any additional information for this provider.

2. Click **Next Step**.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)
- [Transform](/docs/directorymanager/11.0/user-guide/synchronization/index.md)
- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)

# Manage a Job

After creating a job, you can open a job to edit and change the settings of the job. You can also
rename a job without changing its setting or entirely delete a job. All these actions are easily
accessible through the Actions pane in **All Jobs** page.

What do you want to do?

- [Filter a Job](#filter-a-job)
- [Open a Job](#open-a-job)
- [Run a Job](#run-a-job)
- [Edit a Job](#edit-a-job)
- [Deleting a Job](#deleting-a-job)
- [Preview a Job](#preview-a-job)
- [Schedule a Job](#schedule-a-job)
- [Pin a Job](#pin-a-job)
- [Save as Template](#save-as-template)
- [Duplicate a Job](#duplicate-a-job)
- [View Job Details](#view-job-details)
- [Export a Job](#export-a-job)
- [Import a Job](#import-a-job)
- [Rename a Job](#rename-a-job)

## Filter a Job

You can apply filters on the **All Jobs** page to display only those jobs that match the criteria
set in the **Search Filters** section.

1. On GroupID Portal, select **Synchronize**on left pane.
2. On Synchronize portal, click **All Jobs**.
3. In the **Search Filters** section, select one of the following attributes from the **Attributes**
   list to filter jobs:

   - Name
   - Description
   - Source
   - Destination
   - LastRun
   - Created
   - Modified
   - TimesRun

4. Two more boxes get displayed next to **Attributes** box upon selecting a filter.

   - **Select an Operator** from the first list.
   - Specify a value for the selected operator in the second box.

5. Click **Apply Filter**.

   All the jobs that match the specified criterion are displayed.

## Open a Job

When you open a job to view or change its settings, the **Edit Job** wizard opens, which is
virtually identical to the
[Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md) wizard.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Jobs**.

   Click the job name to launch the **Job Details** wizard.

3. In the **Job Details** wizard, navigate to the page containing the information that you want to
   review or modify.

## Run a Job

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the **Synchronize** portal, click **All Jobs**.
3. In the jobs list, click
   ![option](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/synchronize/manage/option.webp) on the
   job that you want to run and click **Run**.
4. If workflow requests are enabled, the request for running the job will go to the approver. If
   they approve the requests, the job will run. If they deny the requests, you will not be able to
   run the job.
5. The **Review Job Run** dialog box appears, providing access to run statistics, reports, and logs
   for the last job run.
6. Click **Run Job in the Background** to list the job in the **Background** tasks.

## Edit a Job

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **All Jobs**.
3. In the jobs list, click the **three vertical dots** icon on the job that you want to edit and
   click **Edit**.
4. Go through the wizard pages to modify the job as required.
5. Click **Finish** twice to close both wizards.

## Deleting a Job

Deleting a Job removes it from Synchronize. By deleting a Job, you also loose any information about
it, such as its run history.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job that has to be deleted and select **Delete**
   from the menu.

## Preview a Job

Before running a job, you can preview the results and identify if the job consists of any errors.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Preview** from the menu.

## Schedule a Job

To add or update the schedule for a job:

1. On GroupID Portal, select **Synchronize**on left pane.
2. On Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Schedule** from the menu.

   It will take you to the **Schedule and Job Notifications** page of
   [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md). Update
   the schedule and click **Finish** to save the changes.

## Pin a Job

To pin a job to the
[Dashboard](/docs/directorymanager/11.0/user-guide/synchronization/index.md) under the pinned
job card:

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Pin Item** from the menu.
4. The job is displayed on **My Pinned Jobs** card on the
   [Dashboard](/docs/directorymanager/11.0/user-guide/synchronization/index.md).

## Save as Template

You can save a job as a template to use it for future job creation.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Jobs**.
3. Click the **three vertical dots** icon of the job and select **Save as Template** from the menu.
4. On **Template Name Description wizard**, update the name and description and click Save.

   The new template gets listed in the **Job Templates** page.

## Duplicate a Job

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the **Synchronize** portal, click **All Jobs**.
3. In the **Jobs** list, click the **three vertical dots** icon on the job that has to be duplicated
   and click **Duplicate**.
4. Update the **Job name** and **Job Description**.
5. Click **Save**.

## View Job Details

You can view the details of the job by following these steps:

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the **Synchronize** portal, click **All Jobs**.
3. In the **Jobs** list, click the **three vertical dots** icon on the job and click **Job
   Details**.

## Import a Job

You can also import jobs. Only job that have been exported from GroupID Synchronize can be imported
to other machines running GroupID Synchronize.

The import action only requires you to select the location where the exported job resides.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **All Jobs**.
3. Click **Import Jobs** to open the dialog box.
4. Click the **Browse** button to browse to the location where the exported jobs are placed.

   Enter the password in the **Password** box.

   Select the **Rename Job if already exists** checkbox if you do not want multiple jobs with same
   names.

5. Click **Import Job(s)**. The job gets listed with other jobs.

## Export a Job

To export a job collection template, you need to follow these steps:

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **All Jobs**.
3. On the **All Job** page, click the **three vertical dots** icon on the job in the list that you
   want to export and click **Export**.
4. On the **Export Job(s)** wizard, enter the password and export the job.

If you want to export multiple jobs, select all and click **Export Job(s)** from the top right
corner.

## Rename a Job

Renaming a job lets you save a job under a new name and a new description. As you would expect,
renaming a job does not affect its settings.

**Renaming a Job, using shortcut**

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Jobs**.
3. Click the required Job. It takes you to Job creation pages.
4. Go to **Job Details** to rename the job.

   1. In the **Job Name** box, type a new name for the Job.
   2. In the **Description** box, type a new description for the box (optional).

5. Click **Finish** to close the dialog box and save changes.

**Rename a Job, using the Actions menu**

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Jobs**.
3. From the list, select the required Job.
4. On the **Actions** menu, click **Rename**.
5. On the **Rename Job** dialog box:

   1. In the **Job Name** box, type a new name for the Job.
   2. In the **Description** box, type a new description for the box (optional).

6. Click **Save** to close the dialog box and save changes.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Synchronize Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)

# Manage a Job Collection

You can do the following in a job collection:

- **Duplicate a job collection** - select an existing job collection and duplicate it to create a
  new job with the same settings.
- **Remove jobs from a collection** - Suppose you add an existing job to a collection. If this job
  is deleted from the collection, the collection’s copy is deleted while the original continues to
  exist in the All Jobs list.
- **Determine the order of their execution** - specify the order in which jobs run one after
  another.
- **Specify a failure action for each job** - For each job in the collection, you can specify the
  action to take if it fails to run successfully, choosing whether to continue or to abort the
  execution of the remaining jobs in collection.
- **Set up job run notifications** - Email notifications contain a brief numerical summary of the
  objects processed by the job collection and a detailed log of statistics and errors.

  NOTE: Notification settings for individual jobs do not apply when they are run as part of a job
  collection.

What do you want to do?

- [Filter Job Collection](#filter-job-collection)
- [Run a Job Collection](#run-a-job-collection)
- [Create a Job Collection by duplicating an existing one](#create-a-job-collection-by-duplicating-an-existing-one)
- [Change the execution order of individual jobs in a Job Collection](#change-the-execution-order-of-individual-jobs-in-a-job-collection)
- [Edit a Job in a Job Collection](#edit-a-job-in-a-job-collection)
- [Remove a job from a job collection](#remove-a-job-from-a-job-collection)
- [Delete a Job Collection](#delete-a-job-collection)
- [Preview a Job Collection](#preview-a-job-collection)
- [Pin a Job Collection](#pin-a-job-collection)
- [Save as Template](#save-as-template)
- [Rename a Job Collection](#rename-a-job-collection)
- [Export a Job Collection](#export-a-job-collection)
- [Import a Job Collection](#import-a-job-collection)
- [Recent Runs](#recent-runs)

## Filter Job Collection

You can apply filters on the **Job Collections** page to display only those jobs that match the
criteria set in the **Search Filters** section.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **Job Collections**.
3. In the **Search Filters** section, select one of the following attributes from the **Attributes**
   list to filter job collections:

   - Name
   - Description
   - TimesRun
   - NextRun
   - LastRun
   - Created

4. Two more boxes get displayed next to **Attributes** box upon selecting a filter.

   - **Select an Operator** from the first list.
   - Specify a value for the selected operator in the second box.

5. Click **Apply Filter**.

   All the job collections that match the specified criterion are displayed.

## Run a Job Collection

1. On GroupID Portal, click **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collection.**
3. From the list, click the **three vertical dots** icon of the required job collection and click
   **Run Job Collection**.

   The **Run Job Collection** dialog box opens, showing the progress of the of the job collection
   as it runs.

4. **Run Job Collection** dialog box displays overall collection statistics for the run, reports and
   individual logs for each job in the collection.
5. Click **Run Job Collection in the Background** to list the job in the **Background** tasks.

## Create a Job Collection by duplicating an existing one

1. In GroupID Portal, select **Synchronize**.
2. On the Synchronize portal, click **Job Collection**.
3. In the job collection list, click the **three vertical dots** icon on the job collection you want
   to duplicate and select **Duplicate**.
4. Update the **Job name** and **Job Description**.
5. Click Save.

## Change the execution order of individual jobs in a Job Collection

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collection**.
3. In the job collection list, click the required job collection.
4. In the jobs list on **Synchronized Job Collections** page, click the **three vertical dots** icon
   the required job and then click **Move Up** or **Move Down** as needed.
5. Click **Finish**.

## Edit a Job in a Job Collection

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collections**.
3. In the job collections list, click the job collection you want to edit.
4. Click the **three vertical dots** icon the required job and click **Edit**.
5. Go through the wizard pages to modify the job as required.
6. Click **Finish** twice to close both wizards.

## Remove a job from a job collection

You can remove a certain job from your job collection by the following methods:

**Remove a job from a job collection, using Action Menu**

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collections**.
3. In the job collections list, expand the required job collection.
4. **Added Jobs** displays the jobs of that collection.
5. Select See Details.
6. Click the **three vertical dots** icon on the job you want to remove and click **Delete**.

**Remove a job from a job collection, using job collection creation wizard**

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collections**.
3. In the job collections list, click on the required job collection to open **Synchronized Job
   Collection** page.
4. Select the required job and click **Remove**.

## Delete a Job Collection

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collections.**
3. In the job collections list, click the **three vertical dots** icon on the job collection you
   want to delete and click **Delete**.

## Preview a Job Collection

1. On GroupID Portal, click select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collection.**
3. From the list, click the **three vertical dots** icon of the required job collection and click
   **Preview**.

   The **Preview Job Collection** dialog box opens, showing the progress of all the jobs included
   in the job collection.,

4. **Preview Job Collection** dialog box displays overall job collection statistics and reports.

## Pin a Job Collection

To pin a job to the
[Dashboard](/docs/directorymanager/11.0/user-guide/synchronization/index.md) under the pinned
job card:

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Collections**.
3. Click the **three vertical dots** icon of the job collection and select **Pin Item** from the
   menu.
4. The job collection is displayed on **My Pinned Job Collections** section on the
   [Dashboard](/docs/directorymanager/11.0/user-guide/synchronization/index.md).

## Save as Template

You can save a job as a template to use it for future job creation.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **All Collections**.
3. Click the **three vertical dots** icon of the job collection and select **Save as Template** from
   the menu.
4. On **Job Collection Template Name Description wizard**, update the name and description and click
   Save.

   The new template gets listed in the **Job Collection Templates** page.

## Rename a Job Collection

Renaming a job collection lets you save a job collection under a new name and a new description.
Renaming a job collection does not affect its settings.

**Renaming a Job Collection, using shortcut**

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **Job Collection**.
3. Click the required Job Collection. It takes you to Job Collection creation pages.
4. Go to **Job Details** to rename the job.

   1. In the **Job Collection Name** box, type a new name for the Job.
   2. In the Job Collection **Description** box, type a new description for the box (optional).

5. Click **Finish** to close the dialog box and save changes.

**Rename a Job Collection, using the Actions menu**

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **Job Collection**.
3. From the list, select the required Job Collection.
4. On the **Actions** menu, click **Rename**.
5. On the **Rename Job Collection** dialog box:

   1. In the **Job Name** box, type a new name for the Job.
   2. In the Job Collection **Description** box, type a new description for the box (optional).

6. Click **Save** to close the dialog box and save changes.

## Export a Job Collection

To export a job collection, you need to follow these steps:

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **Job Collection**.
3. On the **Job Collection** page, click the **three vertical dots** icon on the job in the list
   that you want to export and click **Export**.
4. On the **Export Job(s)** wizard, enter the password and export the job collection.

If you want to export multiple job collections, select all and click **Export Job(s)** from the top
right corner.

## Import a Job Collection

Only job that have been exported from GroupID Synchronize can be imported to other machines running
GroupID Synchronize.

The import action only requires you to select the location where the exported job resides.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **Job Collection**.
3. Click **Import Jobs** to open the dialog box.
4. Click the **Browse** button to browse to the location where the exported jobs are placed.

   Enter the password in the **Password** box.

   Select the **Rename Job if already exists** checkbox if you do not want multiple jobs with same
   names.

5. Click **Import Job(s)**. The Job collection gets listed with other jobs.

## Recent Runs

1. On GroupID Portal, click **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collections**.
3. From the list, right-click the required job group and click **Recent Runs**.
4. This provides the overall collection statistics, reports and individual logs for each of the jobs
   in the collection for their last run activity.

**See Also**

- [Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)
- [Synchronize Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)

# Job Collection Template

You can create a job collection template either by converting an existing job collection into a job
collection template or by importing a job collection template.

By using a template for creating a new job collection, you can duplicate its job set, execution
order, and failure actions. The run schedule for the collection, however, is not defined in the
template.

A job collection template cannot be modified. Any changes made to it are not saved in the template
but a new job collection is created with the modifications.

Because of the wide variation of possible job combinations, Synchronize does not provide predefined
job collection templates.

What do you want to do?

- [Create a job collection template from a job collection](#create-a-job-collection-template-from-a-job-collection)
- [Import a Job Collection Template](#import-a-job-collection-template)
- [Export a Job Collection Template](#export-a-job-collection-template)
- [Create a Job Collection from a Template](#create-a-job-collection-from-a-template)
- [Rename a Job Collection Template](#rename-a-job-collection-template)
- [Delete a Job Collection Template](#delete-a-job-collection-template)
- [Filter Job Collection Templates](#filter-job-collection-templates)

## Create a job collection template from a job collection

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collections**.
3. In the **Job Collections** view, click
   ![option](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/synchronize/manage/option.webp) on the
   job collection you want to save as a template and click **Save As Template**.
4. Now click **Job Collection Templates** and refresh the page. The newly created job group template
   appears in the **Job Collection Templates** list.
5. If a run schedule has been define for the collection, it does not become part of the template.
   Rather, when you create a job collection from the template, you have to define a run schedule for
   it.

## Import a Job Collection Template

You can also import job collection templates. Only job collection templates that have been exported
from GroupID Synchronize can be imported to other machines running GroupID Synchronize.

The import action only requires you to select the location where the exported template resides.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collections Templates**.
3. Click **Import Jobs** to open the dialog box.
4. Click the **Browse** button to browse to the location where the exported job Collection templates
   are placed. The selected path is displayed in the adjacent box.

   All job collection templates at the given location get listed in the **Name** column.

   The **Description** column shows the description of the job collection template.

   The **Total Jobs** column shows the total number of jobs in the job collection template.

While importing, if a job collection template with the same name already exists on the machine, a
confirmation box is displayed for you to verify the import by replacing the existing template or
saving it as a new one. If you import it as a new template, Synchronize appends a numeric code to
the template name to differentiate it from the existing template.

## Export a Job Collection Template

To export a job collection template, you need to follow these steps:

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collections Templates**.
3. On the **Job Collection Templates** page, click the **three vertical dots** icon on the template
   in the list that you want to export and click **Export**.

If you want to export multiple job collection templates, select all and click **Export Job(s)** from
the top right corner.

## Create a Job Collection from a Template

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collection Templates**.

   For every template listed, the view provides its name, description and the number of jobs it
   contains.

3. On the **Job Collection Templates** page, click the **three vertical dots** icon on the template
   in the list and select **Create from Template**.

   OR

   Double-click the job collection template you want to use for the new job collection.

4. This will launch
   [Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)
   wizard starting from the Job Collection(s) page. Proceed to map the settings stored in the
   template on to the new job collection.

## Rename a Job Collection Template

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collection Templates**.
3. On the **Job Collection Templates** page, click the **three vertical dots** icon on the template
   in the list click **Rename**.
4. On **Rename Job Template Name and Description wizard**, update the name and description and click
   **Save.**

## Delete a Job Collection Template

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Collection Templates**.
3. On the **Job Collection Templates** page, click the **three vertical dots** icon on the template
   in the list that you want to delete and click **Delete**.

## Filter Job Collection Templates

You can apply filters on the **Job Collection Templates** page to display only those job templatess
that match the criteria set in the **Search Filters** section.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **Job Collection Templates**.
3. In the **Search Filters** section, select one of the following attributes from the **Attributes**
   list to filter job collection templates:

   - Name
   - Description

4. Two more boxes get displayed next to **Attributes** box upon selecting a filter.

   - **Select an Operator** from the first list.
   - Specify a value for the selected operator in the second box.

5. Click **Apply Filter**.

   All the job collection templates that match the specified criterion are displayed.

**See Also**

- [Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)
- [Manage a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Synchronize Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)

# Job Templates

Synchronize comes with a set of pre-defined job templates that represent some of the most common
business scenarios in use. You can use these templates as is, modify them to suit your needs, or
create your own custom templates.

Creating a custom template involves saving a job as a template. Therefore, you must first create a
job with commonly used settings before you can save it as a template. You can also create templates
of existing jobs on-the-fly to reuse their settings in new jobs.

What do you want to do?

- [Create a Job Template](#create-a-job-template)
- [Import a Job Template](#import-a-job-template)
- [Export a Job Template](#export-a-job-template)
- [Create a Job from a Template](#create-a-job-from-a-template)
- [Rename a Job Template](#rename-a-job-template)
- [Delete a Job Template](#delete-a-job-template)
- [Filter Job Templates](#filter-job-templates)

## Create a Job Template

1. On GroupID Portal, select **Synchronize** on left pane.
2. On **Synchronize** portal, select **All Jobs**.
3. From the **All Jobs** list, select the job you want to save as a template.
4. Click the **three vertical dots** icon and select **Save as Template**.
5. On **Template Name and Description wizard**, update the name and description and click **Save.**

## Import a Job Template

You can also import job templates. Only job templates that have been exported from GroupID
Synchronize can be imported to other machines running GroupID Synchronize.

The import action only requires you to select the location where the exported template resides.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Templates**.
3. Click **Import Jobs** to open the dialog box.
4. Click the **Browse** button to browse to the location where the exported job templates are
   placed. The selected path is displayed in the adjacent box.

   All job templates at the given location get listed in the **Name** column.

   The **Description** column shows the description of the job template.

   The **Source and Destination** column displays the name of providers.

While importing, if a job template with the same name already exists on the machine, a confirmation
box is displayed for you to verify the import by replacing the existing template or saving it as a
new one. If you import it as a new template, Synchronize appends a numeric code to the template name
to differentiate it from the existing template.

## Export a Job Template

To export a job collection template, you need to follow these steps:

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Templates**.
3. On the **Job Templates** page, click the **three vertical dots** icon on the template in the list
   that you want to export and click **Export**.

If you want to export multiple job templates, select all and click **Export Job(s)** from the top
right corner.

## Create a Job from a Template

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Templates**.

   For every template listed, the view provides its name, description, source, and the destination
   proider.

3. On the **Job Templates** page, click the **three vertical dots** icon on the template in the list
   and select **Create from Template**.

   OR

   Click the job template you want to use for the new job..

4. This will launch
   [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md) wizard.
   Proceed to map the settings stored in the template on to the new job.

## Rename a Job Template

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Job Templates**.
3. On the **Job Templates** page, click the **three vertical dots** icon on the template in the list
   click **Rename**.
4. On **Rename Job Template Name & Description wizard**, update the name and description and click
   **Save.**

## Delete a Job Template

1. On GroupID Portal, select **Synchronize** on left pane.
2. On **Synchronize** portal, select **Job Templates**.
3. On the **Job Templates** list, click the **three vertical dots** icon of the template that you
   want to delete and select **Delete** from the menu.

## Filter Job Templates

You can apply filters on the **Job Templates** page to display only those job templates that match
the criteria set in the **Search Filters** section.

1. On GroupID Portal, select **Synchronize** on left pane.
2. On Synchronize portal, click **Job Templates**.
3. In the **Search Filters** section, select one of the following attributes from the **Attributes**
   list to filter job templates:

   - Name
   - Description
   - Source
   - Destination

4. Two more boxes get displayed next to **Attributes** box upon selecting a filter.

   - **Select an Operator** from the first list.
   - Specify a value for the selected operator in the second box.

5. Click **Apply Filter**.

   All the job templates that match the specified criterion are displayed.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Manage a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Synchronize Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)
