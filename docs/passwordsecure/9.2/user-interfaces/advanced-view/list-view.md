# Display mode

## What display modes exist?

In addition to the already described [Filter](/docs/passwordsecure/9.2/user-interfaces/advanced-view/search-filter.md), it is possible to switch to structure
view. This alternative view enables you to filter solely on the basis of the organisational
structure. Although this type of filtering is also possible in standard filter view, you are able to
directly see the complete organisational structure in structure view.

NOTE: As there are no longer any folders in Netwrix Password Secure version 9, the structure view
can not mirror all of the functionalities of the folder view in version 7. However, the structure
view has been modelled on the folder view to make the changeover from the previous version easier.

![installation_with_parameters_15](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/filter/displaymode/installation_with_parameters_15.webp)

As you can see, only the organisational structure is visible in this view. This view is the ideal
choice for users who want to work in a highly structural-based manner.

## Relevant options

There are three relevant [User settings](/docs/passwordsecure/9.2/administration/user-management/user-settings.md)
associated with the display mode:

![installation_with_parameters_16](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/filter/displaymode/installation_with_parameters_16.webp)

- **Display mode:** It is possible to define whether the standard filter, structure filter or both
  are displayed. If the last option is selected, you can switch between both views.
- **Jump to filter on quick search:** If you are using structure view, it is possible to define
  whether the system should automatically jump to the standard filter if you click the quick search
  (top right in the client)
- **Display mode status when starting the program:** This setting defines which display mode is
  displayed as default when starting the program.

# List view

## What is the list view?

The list view is located centrally in the Netwrix Password Secure client, and is a key element of
daily work. There are also list views in Windows operating systems. If you click on a folder in
Windows Explorer, the contents of the folder are displayed in a list view. The same is true in
Netwrix Password Secure version 9.

However, instead of folders, the content of the list view is defined by the currently applied
filter. \* This always means that the list view is the result of a filtered filter \*. For the
currently marked record in list view, all existing form fields are output to the reading pane. With
the two tabs “All” and “Favourites, the filter results can be further restricted.

![List view](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_26-en.webp)

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

![installation_with_parameters_27](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_27.webp)

## Detailed list view

The default view displays only limited information about the records. However, the width of the list
view is flexible and can be adjusted by mouse. At a certain point, the view automatically changes to
the detailed list view, similar to the procedure in Microsoft Outlook. All form fields are displayed

![Table view](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_28-en.webp)

## Favourites

Regularly used records can be marked as favourites. This process is carried out directly in the
[Ribbon](/docs/passwordsecure/9.2/user-interfaces/advanced-view/navigation-ribbon.md). A record marked as a favourite is indicated with a star in list view.

![Favourite](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_29-en.webp)

You can filter for favourites directly in the list view. For this purpose, simply switch to the
“Favourites” tab

![installation_with_parameters_30](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_30.webp)

#### Othersymbols

Every record displayed in list view has multiple icons on the right. These give feedback in colour
about both the password quality and the [Tags](/docs/passwordsecure/9.2/operations/tags/tags-overview.md) used. Mouseover tooltips provide
more precise details.

![installation_with_parameters_31](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_31.webp)

NOTE: The information visible underneath the password name is taken from the info field for the
associated form and will be explained separately

## Workingwith records

All records that correspond to the filter criteria are now displayed in list view. These can now be
opened, edited, or deleted via the ribbon. Many functions are also available directly from the
context menu. You can do this by right-clicking the record. Multiple selection is also possible. To
do this, simply highlight the desired objects by holding down the Ctrl key.

![installation_with_parameters_32](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_32.webp)

#### Opening and editing data sets

By double-clicking, as with the context menu (right mouse button), all records can be opened from
the list view in a separate tab. Only in this view can you make changes. This detail view opens in a
separate tab, the list view is completely hidden

![editing dataset](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/listview/installation_with_parameters_33-en.webp)

NOTE: Working with data records depends of course on the type of the data record. Whether passwords,
documents or organisational structures: The handling is partly very different. For more information,
please refer to the respective sections on the individual
[Client Module](/docs/passwordsecure/9.2/user-interfaces/advanced-view/advanced-view-overview.md)
