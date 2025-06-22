# Advanced filter settings

## Linking filters

The two options for linking the filter criteria are very easy to explain using the example of
[Tags](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/tags.md).
The following options are available:

1. Logical “Or operator”

By default, the filter is active in this mode. In the following example, the user wants to find all
records with at least one of the tags ”**Important**” or ”**Development**”. This also means that
records can either have one of the tags, or both.

![installation_with_parameters_17_839x376](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/advancedfiltersettings/installation_with_parameters_17_839x376.webp)

Due to the colour coding of the tags in the records, it can be seen that the first two records have
one of the tags, while the third one has both tags. However, all three are included in the results.
**At least one filter criterion must be met.**

**2. Logical “And operator”**

This mode is activated directly by the checkbox in the filter. Each filter criterion has its own
checkbox.

![installation_with_parameters_18](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/advancedfiltersettings/installation_with_parameters_18.webp)

![installation_with_parameters_19_822x325](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/advancedfiltersettings/installation_with_parameters_19_822x325.webp)

**In contrast to the “OR link”, the “AND link” must fulfil both criteria**. Accordingly, only those
records that have both the tag **”Important”** and the tag ”Development” are listed in the results
for this example.

## Filter tab in the ribbon

The filter management can also be found in the
[Ribbon](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md).
Here, it is possible e.g. to expand the currently configured filter criteria, save the filter, or
simply clear all currently applied filters.

![installation_with_parameters_20](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/advancedfiltersettings/installation_with_parameters_20.webp)

#### Saving, editing, and deleting filters

In many cases, it is recommended to store defined filters. In this way, it is possible to make
efficient use of filter results from previous searches. The button **“Save filter”** directly
prompts you to assign a meaningful name to this filter. The filter is saved according to the
criteria currently configured in the filter. This filter is now listed in the selection menu and can
now be selected. Note that a selected filter selection is immediately applied to the filter but is
not automatically executed. The filter must be used for this purpose. Both the button in the ribbon,
so also the counterpart in the filter, lead to the same result here.

![Filter settings](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/advancedfiltersettings/advanced-filter-settings-1-en.webp)

Deleting and overwriting existing filters is identical in the procedure. The filter, which has been
marked in the selection field, is always deleted. If an existing filter is to be overwritten, the
name of the filter is retained and is overwritten with the filter criteria currently configured in
the filter.

—————————

#### **Advanced filter**

In the “Extended filter” category you can adjust the filter as desired, eg by adding or removing
filter groups. Clicking on **”Edit filter”** activates the processing mode. You can terminate it
with **”Finish editing”.**

![Filter editing](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/advancedfiltersettings/advanced-filter-settings-2-en.webp)

New filter groups can now be added via the selection field. For this purpose, the desired filter
type is selected (in the example, the filter group is the seal). The process is completed by
**”adding a filter group”.** Newly added filter groups are always placed at the very bottom of the
filter.

In **Edit mode**, the filter view changes, in addition to the possible actions in the ribbon. Use
the arrow buttons to adjust the order of the filter groups. The icons “Plus” and “Minus” can be used
to create additional instances of existing filter groups or to remove existing ones. In the
following example, a content filter was added and all other filter groups removed.

![Filter](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/advancedfiltersettings/advanced-filter-settings-3-en_923x441.webp)

In this example, only the content filter is used – in two instances! \* The “And” link will now
display all records that contain both the word “password” and the phrase “important”. \*

#### Negation of filters

It is often important to be able to negate the filter.

Activation

In the “Extended filter” category you have the possibility to activate the negation:

![allow negation](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/advancedfiltersettings/allow-negation-en.webp)

It is thus possible to refine very precisely filter results even further. This becomes more and more
important when there are a large number of records in the database and the resulting amount of data
is still unmanageable despite the fact that filters has been appropriately defined.

![installation_with_parameters_25_752x412](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/advancedfiltersettings/installation_with_parameters_25_752x412.webp)

Negations are defined directly in the checkbox of an element within a filter group. Without
negations, you can only search e.g. for a tag. Negations make the following queries possible:

”Deliver all records that have the tag “Development” but are not tagged with “Important”!

**CAUTION:** In order to effectively use negations, it is important that “and links” are always
enabled. Otherwise operations with negations cannot be modelled mathematically.

# Display mode

## What display modes exist?

In addition to the already described
[Filter](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/filter-and-search.md),
it is possible to switch to structure view. This alternative view enables you to filter solely on
the basis of the organisational structure. Although this type of filtering is also possible in
standard filter view, you are able to directly see the complete organisational structure in
structure view.

NOTE: As there are no longer any folders in Netwrix Password Secure version 8, the structure view
can not mirror all of the functionalities of the folder view in version 7. However, the structure
view has been modelled on the folder view to make the changeover from the previous version easier.

![installation_with_parameters_15](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/displaymode/installation_with_parameters_15.webp)

As you can see, only the organisational structure is visible in this view. This view is the ideal
choice for users who want to work in a highly structural-based manner.

## Relevant options

There are three relevant
[User settings](/docs/passwordsecure/9.1/user-guides/administration/user-settings.md)
associated with the display mode:

![installation_with_parameters_16](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/displaymode/installation_with_parameters_16.webp)

- **Display mode:** It is possible to define whether the standard filter, structure filter or both
  are displayed. If the last option is selected, you can switch between both views.
- **Jump to filter on quick search:** If you are using structure view, it is possible to define
  whether the system should automatically jump to the standard filter if you click the quick search
  (top right in the client)
- **Display mode status when starting the program:** This setting defines which display mode is
  displayed as default when starting the program.

# Filter

## What is a filter?

The freely configurable filters of the PSR client provide all methods for easy retrieval of stored
data. The filter criteria are always adapted according to the module in which you are currently
located. When you select one or several search criteria, and click on “Apply filter”, the results
will be displayed in the list view. If necessary, this process can be repeated as desired and
further restrictions can be added.

## Relevant rights

The following option is required for editing filters:

**User right**

- Can edit filter

![Filter](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/installation_with_parameters_10-en.webp)

## Who is allowed to use the filter?

The filter is an indispensable working tool because of the possibility to restrict existing results
according to individual requirements. Consequently, all users can use the filter. It is, of course,
possible to place restrictions for filter criteria. This means that the filter criteria available to
individual employees can be restricted by means of
[Authorization and protection mechanisms](/docs/passwordsecure/9.1/web-application/authorization-protection.md).
For example, an employee can only filter for the
[Forms](/docs/passwordsecure/9.1/user-guides/modules/forms.md)
password if he has the read permission for that form.

**CAUTION:** There are no permissions for
[Tags](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/tags.md).
This means that any employee can use any tags. The display order in the filter is determined by the
frequency of use. This process is not critical to security, since tags do not grant any permissions.
They are merely a supportive measure for filtering.

## Application example

Filter without criteria

By selecting the desired criteria and applying the filter using the button of the same name, the set
of all the records corresponding to the criteria is displayed in the list view. If you used the
filter without criteria, you would obtain a list of all records to which you generally have
authorization.

![editing criteria](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/installation_with_parameters_11-en.webp)

As you can see, 133 records are not really manageable. In most situations you will need to reduce
the number of records by adding filters.

**Adding filter criteria**

The filter **organization** can be applied directly to the authorizations to restrict the number of
records according to the authorizations granted. In this case, the logged-on user holds rights for
various areas. However, it would like to see only those records which are assigned to the **Own
passwords** area within the organisational structure. In addition, there should be further
restrictions, which could be formulated as in the following sentence: “Deliver all records from my
own passwords that were created with the form **password** and which contain the expression **2016**
and the tag **Administrator**.

![Adding filter criteria](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/installation_with_parameters_12-en.webp)

As can be seen, the filter delivers the desired results. The extent to which the filter criteria
match the three remaining data sets is assigned in colour.

**CAUTION:** When filtering with several criteria, such as forms, content and tags, all filter
criteria must be complied with. It is therefore a logical “AND operation”. Other possible methods
for linking criteria are described in detail in the Advanced Filter Settings.

**Content filter**

The term \* 2016 \* is part of the description in the \* My Schufa \* record, part of the
description of \* Wordpress 2016 \* and Microsoft Online 2016 . **Since the search** \***”in all
fields”** is activated in the content filter, all three records are also included in the results,
and are displayed in the list view. You can also configure the content filter to search for
expressions in a specific field. The icon next to the expression **”in all fields”** opens the
content filter configuration in a modal window. As can be seen, the content filter has been
configured to only search in the form **password** and then only in the form field **Internet
address:**

![installation_with_parameters_13](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/installation_with_parameters_13.webp)

![Content filter](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/filter/installation_with_parameters_14-en.webp)

It is very easy to abstract, because of the present example, that the filter can be adapted to your
personal requirements. It is thus the most important tool to be able to retrieve data once stored in
the database.

**CAUTION:** The effectiveness of the filter is closely linked to data integrity. Only when data is
kept clean, efficient operation with the filter is ensured. It is important that employees are
trained in the correct handling of the filter tool as well as when creating the records. Workshops
show the best success rate in this context. If you require further information, contact us under
mail to: sales@passwordsafe.de.

# Search

## What is search?

With the help of the search, it is possible to find data stored in the database efficiently
according to selected criteria. Basically, there are 2 search modes:

1. Quick search

In the upper right section of the ribbon, there is a search field, which scans the module that is
currently open. This is a full-text search that scans all fields and tags except the password field.

![quick search](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/search/installation_with_parameters_41-en.webp)

The fast search is closely linked to the
[Filter](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/filter-and-search.md),
because search queries are converted directly into one or several content filters. You can also
separate search terms using spaces, for example, **Cook Daniel**. Note that this search creates two
separate content filters, which are logically linked with “and” +. This means that both words must
occur in the data record. The sequence is irrelevant. If the ordering needs to be taken into
account, the search term must be enclosed in quotation marks: **“Cook Daniel”**. The search is not
case sensitive. No distinction is made between upper and lower case.

NOTE: You can access quick search directly via \* Ctrl + Q\*!

Negations in the quick search

Negations restrict the results to such an extent that certain criteria may not be met. The following
example searches for all records that contain the expression \* Delphi , **but not the expression
swiss. The notation, which must be entered in the quick search, is: Delphi -swiss**

![quick search](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/search/installation_with_parameters_42-en.webp)

2. List search

With the list search in the header of the
[List view](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md),
the results of the filter can be searched further. This type of search is available in almost every
list. Scans only the currently filtered results. Password fields are not searched. The search is
live, so the result is further refined with every additional character that is entered. Automatic
“highlighting” takes place in yellow colour.

![list search](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/operation_and_setup/search/installation_with_parameters_43-en.webp)

A direct database query is performed when the filter is executed. The list search only searches
within the query already made.

NOTE: The list search is hidden by default and can be activated with “Ctrl + F”
