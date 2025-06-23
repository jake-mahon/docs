---
title: user properties azure
sidebar_label: user-properties-azure
description: Directory Manager 11.0 documentation for user properties azure with configuration details, usage instructions, and implementation guidance.
---

# User properties - Contact Info tab

Use this tab to view or update the contact information of the user/mailbox.

**Street address**

The street address of the user's office.

**City, State or province, ZIP or postal code, Country or region**

The city, state, zip code, and country where the office of this user is located.

**Office**

The office number of the user.

**Mobile**

The cell phone number of the user.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# User properties - Directory Role tab

This tab displays the role assigned to the user/mailbox in Microsoft Entra ID. If required, you can
change the role or modify the permissions assigned to the current role.

Roles are: Global Administrator, Limited Administrator, and User.

**Directory Roles**

Displays the role assigned to the user on the Microsoft Entra Admin Center.

To change the user role, click the down arrow for the new role you want to assign, and then select
the check boxes for the role privileges for assignment.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# User properties - Identity tab

Use this tab to view or update the general information for a user and mailbox in a Microsoft Entra
ID based identity store.

**Display name**

The name of the user as it is displayed in the GroupID portal.

**Username**

The login ID of the user.

**First name**

The first name of the user.

**Last name**

The last name of the user.

**User type**

The user type assigned to the user in Microsoft Entra ID, such as _Member_ or _Guest_.

- **Member**: This value indicates an employee of the host organization and a user in the
  organization's payroll. For example, this user expects to have access to internal-only sites. This
  user would not be considered an external collaborator.
- **Guest**: This value indicates a user who isn't considered internal to the company, such as an
  external collaborator, partner, customer, or similar user. Such a user wouldn't be expected to
  receive a CEO's internal memo, or receive company benefits, for example.

NOTE: The User Type has no link to the user login function, the directory role of the user, and so
on. It simply indicates the user's relationship to the host organization and allows the organization
to enforce policies that depend on this property.

**Object ID**

The unique ID assigned to the object in Microsoft Entra ID.

**Alias**

The email alias of the user.

**Email**

The email address of the user.

**Account is enabled**

This check box is selected by default, indicating that the user account is enabled.

Clear it to disable the user account, so that the user cannot log-on with it.

**Usage Location**

The country where the user is located.

The usage location is mandatory for a mailbox and displays the object's geographical location. It
determines what Office 365 licenses and associated features can be assigned to a mailbox based on
geographic availability and laws.

**Photo**

The user's photo.

Click the **Edit** icon to launch the Manage Photo dialog box for uploading a photo. The dialog box
also provides many image editing options, including rotate, crop, flip, and re-size.

**See Also**

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# User properties - Job Info tab

The **Job Info** tab is similar to the
[Object properties - Organization tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
in user properties, with the addition of two fields: **Title** and **Department**.

**Title**

The job title of the user/mailbox.

**Department**

The department in the organization that the user/mailbox works in.

See Also

- [User Properties](/docs/directorymanager/11.0/user-guide/user-management/user-properties.md)

# Overview

You can view and manipulate the properties of directory objects (users and mailboxes) in Microsoft
Entra ID, depending on the permissions the GroupID administrator has granted you.

## User and Mailbox properties

Following is the list of all the properties that Users and Mailbox Users have in an Microsoft Entra
ID based identity store.

- [User properties - Identity tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-azure.md)
- [User properties - Directory Role tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-azure.md)
- [User properties - Job Info tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-azure.md)
- [User properties - Member Of tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
- [Object properties - Email tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
  (for mailbox only)
- [Mailbox properties - Auto Reply tab](/docs/directorymanager/11.0/user-guide/user-management/user-properties-active-directory.md)
  (for mailbox only)
- [Object properties - History tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

**See Also**

- [Working with Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
