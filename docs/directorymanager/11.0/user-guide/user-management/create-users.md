# Account page

(of Create User and Create Mailbox wizards)

Use this page to specify basic account info, such as the user's first name, last name, login ID and
the UPN suffix.

1. Click **Browse** next to the **Container** box to select a container to create the user in.

   This field would be read-only if the administrator has predefined a container for creating new
   users.

2. Enter the user's **First Name**, **Iitials**, and **Last Name** in the respective boxes.
3. The wizard uses the provided information to populate the **Full Name**, **Display Name**, **User
   logon name**, and **User logon name (pre-windows 2000)** boxes. You can modify this information,
   if required.

   The pre-Windows 2000 user logon name cannot exceed 24 characters. This name is used for logging
   on to computers running Windows 95, Windows 98, or Windows NT.

   The logon name is the user ID the user w ill use to log into the identity store.

4. The **UPN Suffix** box displays the UPN suffix for the user account. This is the name of the
   domain the connected identity store is running on. An example of a UPN suffix can be
   'mydomain.com'.

   When a domain user account is created, the complete domain account comprises of a user logon
   name followed by '@' and then the domain name.

5. Click **Next**.

**See Also**

- [Create an AD User](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)
- [Create an AD Mailbox](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)

# Create an AD Contact

The GroupID portal enables you to create the 'contact' object in the directory.

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

NOTE: Pages and fields on the Create Contact wizard may vary from those discussed here, since the
administrator can customize the wizard by adding or removing pages and fields.

What do you want to do?

- [Create a contact](#create-a-contact)

## Create a contact

1. In the GroupID portal, click the **Create New** button in the left pane and select **Contact**.

   The **Create Contact** wizard opens to the Account page.

2. On the **Account** page:

   1. Click **Browse** next to **Container** to select a container to create the contact in.

      This field would be read-only if the administrator has pre-defined a container for creating
      new contacts.

   2. Enter the contact's **First Name**, **Initials**, and **Last Name** in the respective boxes.

      The wizard uses this information to populate the **Full Name** and **Display Name** boxes.

   3. Click **Next**.

3. Use the **Exchange** page to mail-enable the contact.
4. On the **Summary** page, review the settings and then click Finish to complete the wizard.

NOTE: If the GroupID administrator has specified the contact creation action for review, your
changes will not take effect until verified by an approver. See the
[Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md) topic.

**See Also**

- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Exchange page

(of Create Mailbox wizard)

1. In the **Alias** box, type an alias for the mailbox.
2. In the **Mailbox Store** list, select a mailbox store to create the user's mailbox on.
3. The **Subscription List** provides the subscriptions offered by Office 365 to a mailbox user.
   Select the check boxes for the subscriptions you want to assign to this mailbox.

   The subscription list is displayed when Office 365 is configured as the messaging provider for
   the identity store.

4. Click **Next**.

**See Also**

- [Create an AD Mailbox](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)

# Create an AD Mailbox

You can create a mailbox using GroupID portal when a messaging provider has been configured for the
identity store.

A mailbox is a user with a mailbox, such as an Exchange mailbox.

NOTE: Pages and fields on the Create Mailbox wizard may vary from those discussed here, since the
administrator can customize the wizard by adding or removing pages and fields.

What do you want to do?

- [Create a mailbox in Active Directory](#create-a-mailbox-in-active-directory)

## Create a mailbox in Active Directory

1. In the GroupID portal, click the Create New button in the left pane and select **Mailbox**.

   The **Create Mailbox** wizard opens to the Account page.

2. On the
   [Account page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   specify basic account info, such as the object's first name, last name, login ID and the UPN
   suffix.
3. On the
   [Password page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   provide a password for the mailbox account and set other password-specific options.
4. On the
   [Exchange page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   set the alias and Office 365 subscriptions.
5. On the
   [Summary Page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   review the settings and then click Finish to complete the wizard.

NOTE: If the GroupID administrator has specified the mailbox creation action for review, your
changes will not take effect until verified by an approver. See the
[Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md) topic.

**See Also**

- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Exchange page

Use this page to create the object as mail-enabled.

1. Make sure that the **Mail-Enabled** check box is selected to create the user as mail-enabled.

   A mail-enabled user is one with an email address.

2. The **Alias** box displays an alias for the user.
3. The **Email Type** displays drop-down list of all the types of email your want to create.
4. In the **Email Address** box, type an email address for the user. GroupID uses this email address
   to send email notifications to the user.
5. Click **Next**.

NOTE: To create a mail-enabled user, a messaging provider (such as Microsoft Exchange) must be
configured for the identity store.  
 If it is not configured, the **Messaging** page is disabled.

**See Also**

- [Create an AD User](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)
- [Create an AD Contact](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)

# Create Active Directory User Objects

In an Active Directory identity stores, you can create the following types of users:

- User
- Mailbox
- Contact

See Also

- [User Management](/docs/directorymanager/11.0/user-guide/user-management/index.md)

# Password page

Provide a password for the user account and set other password-specific options.

1. Type a password for the user account in the **Password** and **Confirm password** boxes.
2. Select the following check boxes to set the security options for the user account:
   - **User must change password at next logon** - to force the user to change the password the
     next time they log into their workstations with the account.
   - **Password never expires** - to prevent the account password from expiring.
   - **Account is disabled** - to disable the account, so that the user cannot log-on with it.
3. Click **Next**.

**See Also**

- [Create an AD User](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)
- [Create an AD Mailbox](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)

# Summary Page

The **Summary** page summarizes the selections you made on the previous pages. Review the settings
before creating the object.

- To make changes, click **Previous** until you reach the required page.
- Click **Finish** to complete the wizard and create the new object.

**See Also**

- [Create an AD User](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)
- [Create an AD Mailbox](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)
- [Create an AD Contact](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)
- [Create Active Directory Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)

# Create an AD User

In GroupID portal, you can create mail-enabled and non mail-enabled users.

NOTE: In a Microsoft Entra ID based identity store, users can only be created as non mail-enabled.
Create a mailbox as an alternative to a mail-enabled user.

NOTE: Pages and fields on the Create User wizard may vary from those discussed here, since the
administrator can customize the wizard by adding or removing pages and fields.

What do you want to do?

- [Create a mail-enabled user in Active Directory](#create-a-mail-enabled-user-in-active-directory)
- [Create a non mail-enabled user in Active Directory](#create-a-non-mail-enabled-user-in-active-directory)

## Create a mail-enabled user in Active Directory

1. In the GroupID portal, click the **Create New** button in the left pane and select **User**.

   The **Create User** wizard opens to the Account page.

2. On the
   [Account page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   specify basic account info, such as the user's first name, last name, login ID and the UPN
   suffix.
3. On the
   [Password page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   provide a password for the user account and set other password-specific options.
4. Use the
   [Exchange page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   to create the user as mail-enabled.
5. On the
   [Summary Page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   review the settings and then click Finish to complete the wizard.

NOTE: If the GroupID administrator has specified the user creation action for review, your changes
will not take effect until verified by an approver. See the
[Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md) topic.

## Create a non mail-enabled user in Active Directory

1. In the GroupID portal, click the **Create New** button in the left pane and select **User**.

   The **Create User** wizard opens to the Account page.

2. On the
   [Account page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   specify basic account info, such as the user's first name, last name, login ID and the UPN
   suffix.
3. On the
   [Password page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   provide a password for the user account and set other password-specific options.
4. On the
   [Exchange page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   clear the **Mail-Enabled** check box to create the user as non mail-enabled. This disables the
   remaining fields on the page.

   A non mail-enabled user does not have an email address.

5. On the
   [Summary Page](/docs/directorymanager/11.0/user-guide/user-management/create-users.md),
   review the settings and then click Finish to complete the wizard.

NOTE: If the GroupID administrator has specified the user creation action for review, your changes
will not take effect until verified by an approver. See the
[Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md) topic.

**See Also**

- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Account page

Use this page to specify basic account info, such as the user's first name, last name, login ID and
the UPN suffix.

1. Click **Browse** next to the **Container** box to select a container to create the user in.
2. Enter the user's first name and last name in the respective boxes.
3. The wizard uses the provided information to populate the **Display Name** and **User logon name**
   boxes. You can modify this information, if required.

   The logon name is the user ID the user will use to log into the identity store.

4. The **UPN Suffix** box displays the UPN suffix for the user account. This is the name of the
   domain the identity store is running on. An example of a UPN suffix can be 'mydomain.com'.

   When a domain user account is created, the complete domain account comprises of a user logon
   name followed by '@' and then the domain name.

5. Click **Next**.

**See Also**

- [Create a Microsoft Entra ID User](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)
- [Create a Microsoft Entra ID Mailbox](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)

# Directory Roles page

Use this page to assign a role and role privileges to the user on the Microsoft Entra Admin Center
portal.

1. The **Directory Roles** drop-down list displays the roles that can be assigned to users on the
   Microsoft Entra Admin Center portal. These are: Global Administrator, Limited Administrator, and
   User.

   Click the down arrow next to a role and select the check boxes for the privileges within that
   role for assignment.

2. Click **Next**.

**See Also**

- [Create a Microsoft Entra ID User](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)

# Exchange page (Create Mailbox wizard)

1. In the **Alias** box, type an alias for the mailbox.
2. From the **Usage Location** list, select a geographical location for the mailbox.

   The usage location determines what Office 365 licenses and associated features can be assigned
   to a mailbox based on geographic availability and laws. This attribute is mandatory when you
   assign subscriptions and licenses to Office 365 mailboxes.

3. In the **Mailbox Store** list, select a mailbox store to create the user's mailbox on.
4. The **Directory Roles** drop-down list displays the roles that can be assigned to mailboxes on
   the Microsoft Entra Admin Center portal. These are: Global Administrator, Limited Administrator,
   and User.

   Click the down arrow next to a role and select the check boxes for the privileges within that
   role for assignment.

5. The **Subscription List** provides the subscriptions offered by Office 365 to a mailbox user.
   Select the check boxes for the subscriptions you want to assign to this mailbox.

   The subscription list is displayed when Office 365 is configured as the messaging provider for
   the identity store.

6. Click **Next**.

**See Also**

- [Create a Microsoft Entra ID Mailbox](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)

# Create a Microsoft Entra ID Mailbox

You can create a mailbox using GroupID portal when a messaging provider has been configured for the
identity store.

A mailbox is a user with a mailbox, such as an Exchange mailbox.

NOTE: Pages and fields on the Create Mailbox wizard may vary from those discussed here, since the
administrator can customize the wizard by adding or removing pages and fields.

What do you want to do?

- [Create a mailbox in an Microsoft Entra ID](#create-a-mailbox-in-an-microsoftentra-id)

## Create a mailbox in an Microsoft Entra ID

1. In the GroupID portal, clickthe **Create New** button and select **Mailbox**.

   The **Create Mailbox** wizard opens to the Account page.

2. On the **Account** page, specify basic account info, such as the object's first name, last name,
   login ID and the UPN suffix.
3. On the **Password** page, provide a password for the mailbox account and set other
   password-specific options.
4. On the **Exchange** page,set the alias and Office 365 subscriptions for the mailbox.
5. On the **Summary** page, review the settings and then click Finish to complete the wizard.

NOTE: If the GroupID administrator has specified the mailbox creation action for review, your
changes will not take effect until verified by an approver. See the
[Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md) topic.

See Also

- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Create Microsoft Entra ID User Objects

In a Microsoft Entra ID identity stores, you can create the following types of users:

- User
- Mailbox

See Also

- [User Management](/docs/directorymanager/11.0/user-guide/user-management/index.md)

# Password page

Provide a password for the user account and set other password-specific options.

1. Type a password for the user account in the **Password** and **Confirm password** boxes.
2. Select the check boxes to set the security options for the user account:

   - **User must change password at next logon** - to force the user to change the password the
     next time they log into their workstations with the account.
   - **Account is enabled** - this check box is selected by default, indicating that the user
     account is enabled.

     Clear it to disable the account, so that the user would not be able to log-on with it.

3. Click **Next**.

**See Also**

- [Create a Microsoft Entra ID User](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)
- [Create a Microsoft Entra ID Mailbox](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)

# Create a Microsoft Entra ID User

In GroupID portal, you can create mail-enabled and non mail-enabled users.

NOTE: In a Microsoft Entra ID based identity store, users can only be created as non mail-enabled.
Create a mailbox as an alternative to a mail-enabled user.

NOTE: Pages and fields on the Create User wizard may vary from those discussed here, since the
administrator can customize the wizard by adding or removing pages and fields.

What do you want to do?

- [Create a user in Microsoft Entra ID](#create-a-user-in-microsoft-entra-id)

## Create a user in Microsoft Entra ID

1. In the GroupID portal, click the **Create New** button in the left pane and select **User**.

   The **Create User** wizard opens to the Account page.

2. On the **Account** page, specify basic account info, such as the user's first name, last name,
   login ID and the UPN suffix.
3. On the **Password** page, provide a password for the user account and set other password-specific
   options.
4. Use the **Directory Roles** page to assign a role and role privileges to the user on the
   Microsoft Entra Admin Center portal.
5. On the **Summary** page, review the settings and then click Finish to complete the wizard.

NOTE: If the GroupID administrator has specified the user creation action for review, your changes
will not take effect until verified by an approver. See the
[Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md) topic.

**See Also**

- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Create User Objects

GroupID Portal enalbles you to create following types of users:

- User
- Mailbox
- Contact

GroupID supports the following identity providers for creating the user objects:

- Active Directory
- Microsoft Entra ID
- Generic LDAP
- Google Workspace

See Also

- [User Management](/docs/directorymanager/11.0/user-guide/user-management/index.md)
- [Create an AD User](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)
- [Create a Microsoft Entra ID User](/docs/directorymanager/11.0/user-guide/user-management/create-users.md)
