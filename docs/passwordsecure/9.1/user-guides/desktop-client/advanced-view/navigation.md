# Client Module

## What are modules?

Netwrix Password Secure can be customized according to the needs of the users. This requirement can
be applied by the user, and can also be applied by administrative users. This means that everyone
gets only those functionalities that are necessary for his special work. The amount of features
required by an administrator differs significantly from those of a normal user. The **modular
structure** of Netwrix Password Secure supports this approach by showing only those specific areas
that should actually be used by the respective user.

![modules](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/client_modules_1-en.webp)

## Visibility of modules

The modules are the gateway to various features of version 8. Similarly to the features, not all
modules have to be made available to all user layers. The **Visibility of modules** can be defined
individually within the user rights.

![user settings](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/client_modules_2-en.webp)

NOTE: The visibility of modules can always be adapted to the needs of individual user groups

## Sorting modules

You can access the “Navigation options” via the three dots found at the bottom right end of the
module displayed in the client. You can also find those modules displayed there that you have
permissions to see in accordance with the visibility settings explained previously but which are
hidden e.g. due to the scaling of the size of the client (Application and Password Reset in the
example).

![sorting modules](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/client_modules_3-en.webp)

The navigation options enable you to define the maximum number of visible elements and also how they
are sorted.

![sorting modules](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/client_modules_4-en.webp)

NOTE: The previously described visibility of the modules is a basic requirement for viewing and
sorting them in the navigation options

# Main menu

## What is the Main menu/Backstage?

All settings that are not linked to a particular module are defined in the Backstage (main menu).
This makes it easy to access the settings at any time and in any module.

![Main menu](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/installation_with_parameters_56-en.webp)

- [Extras](/docs/passwordsecure/9.1/user-guides/administration/extras/password-generator.md)
- [Account](/docs/passwordsecure/9.1/user-guides/administration/account-management.md)
- [General settings](/docs/passwordsecure/9.1/configuration/server-manager/general-settings.md)
- [User settings](/docs/passwordsecure/9.1/user-guides/administration/user-settings.md)
- [User rights](/docs/passwordsecure/9.1/user-guides/administration/user-rights.md)
- [Administration](/docs/passwordsecure/9.1/user-guides/administration/account-management.md)
- [Import](/docs/passwordsecure/9.1/user-guides/administration/export-import/import.md)
- [Export](/docs/passwordsecure/9.1/user-guides/administration/export-import/export-wizard.md)

# List view

## What is the list view?

The list view is located centrally in the Netwrix Password Secure client, and is a key element of
daily work. There are also list views in Windows operating systems. If you click on a folder in
Windows Explorer, the contents of the folder are displayed in a list view. The same is true in
Netwrix Password Secure version 8.

However, instead of folders, the content of the list view is defined by the currently applied
filter. \* This always means that the list view is the result of a filtered filter \*. For the
currently marked record in list view, all existing form fields are output to the reading pane. With
the two tabs “All” and “Favourites, the filter results can be further restricted.

![List view](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_26-en.webp)

At the bottom of the list view, the number of loaded records and the time required for this are
shown.

NOTE: For more than 100 list elements, only the first 100 records are displayed by default. This is
to prevent excessive database queries where the results are unmanageable. In this case, it makes
sense to further refine the filter criteria. By pressing the “All” button in the header of the list
view, you can still manually switch to the complete list.

## Searching in list view

Through the search field, the results found by the filter can be further refined as required. After
you have entered the search term, the results are automatically limited to those records which
correspond to the criteria (after about half a second). The search used for the search is
highlighted in yellow.

![installation_with_parameters_27](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_27.webp)

## Detailed list view

The default view displays only limited information about the records. However, the width of the list
view is flexible and can be adjusted by mouse. At a certain point, the view automatically changes to
the detailed list view, similar to the procedure in Microsoft Outlook. All form fields are displayed

![Table view](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_28-en.webp)

## Favourites

Regularly used records can be marked as favourites. This process is carried out directly in the
[Ribbon](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md).
A record marked as a favourite is indicated with a star in list view.

![Favourite](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_29-en.webp)

You can filter for favourites directly in the list view. For this purpose, simply switch to the
“Favourites” tab

![installation_with_parameters_30](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_30.webp)

#### Othersymbols

Every record displayed in list view has multiple icons on the right. These give feedback in colour
about both the password quality and the
[Tags](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/tags.md)
used. Mouseover tooltips provide more precise details.

![installation_with_parameters_31](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_31.webp)

NOTE: The information visible underneath the password name is taken from the info field for the
associated form and will be explained separately

## Workingwith records

All records that correspond to the filter criteria are now displayed in list view. These can now be
opened, edited, or deleted via the ribbon. Many functions are also available directly from the
context menu. You can do this by right-clicking the record. Multiple selection is also possible. To
do this, simply highlight the desired objects by holding down the Ctrl key.

![installation_with_parameters_32](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_32.webp)

#### Opening and editing data sets

By double-clicking, as with the context menu (right mouse button), all records can be opened from
the list view in a separate tab. Only in this view can you make changes. This detail view opens in a
separate tab, the list view is completely hidden

![editing dataset](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_33-en.webp)

NOTE: Working with data records depends of course on the type of the data record. Whether passwords,
documents or organisational structures: The handling is partly very different. For more information,
please refer to the respective sections on the individual
[Client Module](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md)

# Operation and Setup

## Client structure

The modular structure of the client ensure that the required functionalities are always in the same
place. Although the module selection gives access to the various areas of Netwrix Password Secure,
the control elements always remain at the positions specified for this purpose. This intuitive
operating concept ensures efficient work and a minimum of training time.

![Operation](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/operation-and-setup-1-en.webp)

![Dashboard](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/operation-and-setup-2-en.webp)

1. [Ribbon](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md)

2. [Filter](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/filter-and-search.md)

3. [List view](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md)

4. [Reading pane](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md)

5. [Tags](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/tags.md)

6. [Search](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/filter-and-search.md)

7. [Dashboard and widgets    ](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/dashboard-and-widgets.md)

## TABs

Tabs offer yet another option within the to present related information in a separate area. This tab
navigation enables you to display, quickly access and switch between relevant information. The
results for a filter with specific criteria can thus be retained without the original result being
overwritten

when a new filter is applied. In parallel, detailed information about records can also be found in
their own tabs. It is of course possible to adjust the order of the tabs via drag & drop according
to your individual requirements.

![Dashboard](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/installation_with_parameters_2-en.webp)

#### Standard tab

Depending on the active module, the All passwords tab will be renamed to the corresponding module by
default. (All documents, all forms, etc.)

![Standard tab](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/standard-tab-en.webp)

Although the name suggests that all records in the database are displayed, the records displayed in
list view correspond to the criteria that have been defined in the filter. The tab closes and can be
restored by reusing the filter.

## Client footer information

Independently of the module chosen, various information is displayed in the footer area of the
client. The icons are also provided with a meaningful mouse-over text, which provides additional
information.

- Connection to database
- Feedback in case connection is insecure
- Last name, first name (user name) of the logged-in user

![installation_with_parameters_4](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/installation_with_parameters_4.webp)

## Orientation

It is possible to change the alignment of the following objects:

- [Active Directory link](/docs/passwordsecure/9.1/configuration/authentication/directory-services/active-directory.md)
- [Applications](/docs/passwordsecure/9.1/user-guides/applications/applications-overview.md)
- [Notifications](/docs/passwordsecure/9.1/user-guides/modules/notifications.md)
- [Reports](/docs/passwordsecure/9.1/user-guides/administration/extras/reports.md)
- [Documents](/docs/passwordsecure/9.1/user-guides/modules/documents.md)
- [Forms](/docs/passwordsecure/9.1/user-guides/modules/forms.md)
- [Logbook](/docs/passwordsecure/9.1/user-guides/modules/logbook.md)
- [Organisational structure](/docs/passwordsecure/9.1/user-guides/organizational-structure/managing-users.md)
- [Password Reset](/docs/passwordsecure/9.1/user-guides/password-reset/password-reset-overview.md)
- [Password rules](/docs/passwordsecure/9.1/user-guides/administration/extras/password-rules.md)
- [Roles](/docs/passwordsecure/9.1/user-guides/modules/roles.md)
- [Seal templates](/docs/passwordsecure/9.1/user-guides/administration/extras/seal-templates.md)
- [System tasks](/docs/passwordsecure/9.1/user-guides/administration/extras/system-tasks.md)
- Forwarding Rules
- Profil picture in the reading pane

# Reading pane

## What is the reading pane?

The reading pane on the right side of the client always corresponds to the detailed view of the
selected record in the list view and can be completely deactivated via the ribbon. In addition, you
can configure here the arrangement of the reading pane – either on the right, or underneath the
[List view](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md).

![Reading area](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/readingpane/installation_with_parameters_34-en.webp)

## Structure of the reading pane

The reading pane is divided into two areas:

1. **Details area**
2. Footer area

![installation_with_parameters_35](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/readingpane/installation_with_parameters_35.webp)

1. Details area

Depending on which record you have selected in
[List view](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md),
the corresponding fields are displayed here. In the header, the assigned
[Tags](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/tags.md),
as well as the
[Organisational structure](/docs/passwordsecure/9.1/user-guides/organizational-structure/managing-users.md)
are displayed.

**CAUTION:** It should be noted that the details area cannot be used for editing records! Although
it displays all of the data, editing is only possible if the record has been opened.

2. Footer area

In the footer area of the reading pane, it is possible to display various information for the
currently selected record. The button can be activated via the button provided. It is hidden by
default.

![Footer area](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/readingpane/installation_with_parameters_36-en.webp)

The logbook, linked documents, history, notifications and password resets can be accessed separately
here via the tabs. The individual elements can be viewed with a double-click, as well as by using
the quick view (space bar). Double clicking always opens a separate tab, the quick view merely opens
a modal window

Visibility of the individual tabs within the footer section is secured via separate
[User rights](/docs/passwordsecure/9.1/user-guides/administration/user-rights.md):

![installation_with_parameters_37](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/readingpane/installation_with_parameters_37.webp)

The same options can also be found in the settings. A tab is only displayed if it has been activated
both in the rights and also in the settings. This makes it possible to specify (for example via the
administrator) whether a user is permitted to view the tab or not. The user can then define
themselves which tabs they want to be displayed.

# Ribbon

## What is the ribbon?

The ribbon is the central control element of Netwrix Password Secure Version 8. It is available in
all modules. Netwrix Password Secure is almost always operated via the ribbon in the header area of
the PSR client.

![Ribbon](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/ribbon/installation_with_parameters_5-en.webp)

The features available within the ribbon are dynamic, and are based on the currently available
actions. Various actions can be performed, depending on which object is selected. The module
selected also affects the features that are available in the ribbon. Of course, the most important
actions can also be controlled via the context menu (right mouse button).

![Ribbon - Item](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/ribbon/ribbon-1-en.webp)

This mainly affects the very often used features such as opening, deleting or assigning tags.
However, a complete listing of the possible actions is always only possible directly in the ribbon.
This ensures that the context menu can be kept lean.

## Access to the client main menu (backstage)

The button at the top left of the ribbon provides access to the
[Main menu](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md):

![installation_with_parameters_7](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/ribbon/installation_with_parameters_7.webp)

## Ribbon tabs

There are tabs in the header area of the ribbon that summarize all available operations. By default,
module-independent **Start, View, and Filter** is available. If the footer of the
[Reading pane](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md)
is opened (1), further tabs will be visible in the ribbon (2). These contain, according to the
selection made in the footer, other possible actions.

![Ribbon Tabs](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/ribbon/installation_with_parameters_8-en.webp)

#### Content tabs

Double-clicking on an object in the
[List view](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md)
opens a new tab with its detailed view. Depending on which form field you have selected, the
corresponding content tab opens in the ribbon.

![Content tabs](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/ribbon/installation_with_parameters_9-en.webp)

Depending on the selected form field, further actions are offered in the Content tab. In the
Password field, this is, for example, calling the password generator or the screen keyboard, or the
possibility to copy it to the clipboard.

# Outlook: Advanced View

Curious about how you can manage your team in Netwrix Password Secure?

Learn more about how to …

- Share passwords masked / only for a limited time (i.e. with working students or interns)
- Separately authorize the disclosure of passwords
- View the password quality and monitor all actions in your team
- View the reasons given by your team members for revealing passwords in plain text
- And much more!

Simply contact your IT department for further information on the advanced view of Netwrix Password
Secure.
