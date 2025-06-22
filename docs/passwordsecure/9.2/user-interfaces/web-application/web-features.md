# Application

The following functions are currently available in the **Application module**:

Web & SAML applications:

- Create
- Manage
- Delete

NOTE: A detailed explanation of how to configure SAML can be found in the chapter “Configuration of
SAML”

General functions:

- Notifications
- Duplicate
- Move
- Favorite
- Quick view
- Connect password

NOTE: The Web Application module Applications is based on the client module of the same name
“Applications”. Both modules differ in scope and design, but the operation is almost identical.

# Documents

The following functions are currently available in the **Document module:**

- New  
  New document can be added in the following ways:  
  ◦ Right click -> search  
  ◦ Search via the navigation bar  
  ◦ By Drag & Drop (by dragging the document into the window)

- Open properties
- Update document
- Notifications
- Move
- Favourite
- Quick view
- Export
- Authorizations
- Create external link
- Print
- History

NOTE: The Web Application module **Documents** is based on the client module of the same name
“Documents”. Both modules differ in scope and design, but the operation is almost identical.

# Forms module

The following functions are currently available in the **forms module**:

- Add
- Open
- Delete
- Notifications
- Duplicate
- Favourite
- Quick view
- Permissions
- Print
- Export

NOTE: The Web Application module **forms** is based on the client module of the same name. Both
modules have a different scope and design but are almost identical to use.

# Functional scope

The **Web Application** will act as the basis for a constant enhancement. The current functional
scope will be explained at this point. For the purposes of clarity, the relevant modules will be
described in their own subsections.

#### General functions

- Global settings and User settings
- Global User rights

#### Functions in the individual modules

- [Password module](/docs/passwordsecure/9.2/user-interfaces/web-application/web-features.md)
- [Tag system](/docs/passwordsecure/9.2/user-interfaces/web-application/web-features.md)
- [Organisational structure module](/docs/passwordsecure/9.2/user-interfaces/web-application/web-features.md)
- [Roles module](/docs/passwordsecure/9.2/user-interfaces/web-application/web-features.md)
- [Forms module](/docs/passwordsecure/9.2/user-interfaces/web-application/web-features.md)
- [Notifications](/docs/passwordsecure/9.2/user-interfaces/web-application/web-features.md)
- [Logbook](/docs/passwordsecure/9.2/user-interfaces/web-application/web-features.md)
- [Application](/docs/passwordsecure/9.2/user-interfaces/web-application/web-features.md)
- [Documents](/docs/passwordsecure/9.2/user-interfaces/web-application/web-features.md)

# Logbook

The **logbook module** exists of the following features:

- Filter function
- Quick view

NOTE: The Web Application module logbook is based on the same called client module logbook. Both
modules differ in range and design. However, the handling is almost the same.

Differences to the logbook on the Client:

The following options are not available yet in the **Web Application**. If needed, you can use them
on the Client.

- Documents
- Multifactor authentication
- Report configuration
- Applications
- Password Reset
- Password rules
- Sytem Task

# Notifications

- The **permission module** exists of the following features:
- Filter function
- Seal function
- Mark message as read/unread
- Quick view (use button and space bar)

The Web Application module permissions is based on the same called client module notifications. Both
modules differ in range and design. However, the handling is almost the same.

# Organisational structure module

The following functions are currently available in the **organisational structure module**:

- Adding/editing/deleting/authorizing users / organisational structures
- Notifications
- Drag & Drop
- Filter
- Quick view
- User settings
- User rights
- Changing passwords
- Print

NOTE: The Web Application module organisational structure is based on the client module of the same
name. Both modules have a different scope and design but are almost identical to use.

## AD connection in the Web Application

The Active Directory connection in the Web Application works similiar to the Client. In the chapter
[Active Directory link](/docs/passwordsecure/9.2/core-features/organizational-structure/active-directory-integration.md)
you can find further information.

![Organisational structure WebClient](/img/product_docs/passwordsecure/passwordsecure/configuration/web_applicaiton/functional_scope/organisational_structure/installation_with_parameters_160-en.webp)

The Web Application offers the following functions:

- Import
- Manual synchronisation
- Manage profiles

###### Radius

You can reach the Radius server, if the import is in the Masterkey mode. The Radius server will be
provided in the Active Directory profile and will therefore deliver the possible authentication
methods in future. You will find further informations in the
[RADIUS authentication](/docs/passwordsecure/9.2/security-permissions/authentication/radius-authentication.md)
chapter.

![installation_with_parameters_161](/img/product_docs/passwordsecure/passwordsecure/configuration/web_applicaiton/functional_scope/organisational_structure/installation_with_parameters_161.webp)

###### Predefining rights

To **predefine rights** in the Web Application, the procedure is the same as in the Client.
[Predefining rights](/docs/passwordsecure/9.2/security-permissions/permission-concept/rights-templates.md))

Go to the module organisational structure to choose the organisation unit for which the rights shall
be predefined. Then choose **Predefine rights** in the menu bar.

![installation_with_parameters_162](/img/product_docs/passwordsecure/passwordsecure/configuration/web_applicaiton/functional_scope/organisational_structure/installation_with_parameters_162.webp)

**Creating the first template group:** A modal window will appear after clicking on the icon for
adding a new template group (green arrow) in which a meaningful name for the template group should
be entered.

![installation_with_parameters_163](/img/product_docs/passwordsecure/passwordsecure/configuration/web_applicaiton/functional_scope/organisational_structure/installation_with_parameters_163.webp)

Now you can add the appropriate roles and users.

![installation_with_parameters_164](/img/product_docs/passwordsecure/passwordsecure/configuration/web_applicaiton/functional_scope/organisational_structure/installation_with_parameters_164.webp)

You can add users and roles in different ways:

- Add the appropriate roles and users at the toolbar under **Search and add**.
- Click on the loupe to see all the users and roles.

![installation_with_parameters_165](/img/product_docs/passwordsecure/passwordsecure/configuration/web_applicaiton/functional_scope/organisational_structure/installation_with_parameters_165.webp)

# User management

## How are the users managed in the Web Application?

The user management strongly depends on whether the Active Directory has been connected or not. In
Master Key mode, the Active Directory remains the leading system. In all other modes, the user
administration is carried out via the organisational structure module.

#### Creating local users

When creating new users, you must pay attention to whether it is a **User (Basic View)** or a
**Advanced User (View)**.

![installation_with_parameters_166](/img/product_docs/passwordsecure/passwordsecure/configuration/web_applicaiton/functional_scope/organisational_structure/user_management/installation_with_parameters_166.webp)

# Password module

The **Password Module** currently provides the following functions:

- Create
- Delete
- Edit
- Uncover password
- Quick search
- Add/edit form fields
- Tagged
- Duplicate
- Move
- Quick view (passwords automatically reveal)
- Favorites
- Filter
- Structural filter
- Authorization/edit rights
- Form field authorizations
- Change password undercover
- Password generator with guidelines
- Copy to clipboard
- Open Internet page
- View logbook
- Display seal/visibility protection
- German/English
- Change user password, if “Change password at next login” is active
- Show notifications
- Keyboard navigation  
  ◦ ALT+Q: Quick search  
  ◦ ALT+N: New record  
  ◦ ALT+S: Save in Edit/New View  
  ◦ ALT+DEL: Delete selected record  
  ◦ Arrow up/down in list: Change selection  
  ◦ Right/left arrow in list: Page forward/backward  
  ◦ Enter: Open selected record

- Privacy screen
- Seal
- Print
- Create external link
- History
- Change form
- Export
- WebViewer Export

NOTE: The Web Application module Password module is based on the module of the same name that is
located in the client. Both modules differ in scope and design, but are nevertheless almost
identical in terms of operation.

# Roles module

The following functions are currently available in the **roles module:**

- Add
- Delete
- Notifications
- Favourites
- Quick view
- Permissions
- User rights
- Print

The Web Application module **roles** is based on the client module of the same name. Both modules
have a different scope and design but are almost identical to use.

# Tag system

The tag system currently offers the following functions:

- Add
- Delete
- Edit
