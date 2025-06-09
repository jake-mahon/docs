# Search

## What is search?

With the help of the search, it is possible to find data stored in the database efficiently according to selected criteria. Basically, there are 2 search modes:

1. Quick search

In the upper right section of the ribbon, there is a search field, which scans the module that is currently open. This is a full-text search that scans all fields and tags except the password field.

![quick search](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/search/installation_with_parameters_41-en.png)

The fast search is closely linked to the [Filter](/docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/filter/filter.md), because search queries are converted directly into one or several content filters. You can also separate search terms using spaces, for example, __Cook Daniel__. Note that this search creates two separate content filters, which are logically linked with “and” +. This means that both words must occur in the data record. The sequence is irrelevant. If the ordering needs to be taken into account, the search term must be enclosed in quotation marks: __“Cook Daniel”__. The search is not case sensitive. No distinction is made between upper and lower case.

NOTE: You can access quick search directly via \* Ctrl + Q\*!

Negations in the quick search

Negations restrict the results to such an extent that certain criteria may not be met. The following example searches for all records that contain the expression \* Delphi , __but not the expression swiss. The notation, which must be entered in the quick search, is: Delphi -swiss__

![quick search](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/search/installation_with_parameters_42-en.png)

2. List search

With the list search in the header of the [List view](/docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/listview/list_view.md), the results of the filter can be searched further. This type of search is available in almost every list. Scans only the currently filtered results. Password fields are not searched. The search is live, so the result is further refined with every additional character that is entered. Automatic “highlighting” takes place in yellow colour.

![list search](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/search/installation_with_parameters_43-en.png)

A direct database query is performed when the filter is executed. The list search only searches within the query already made.

NOTE: The list search is hidden by default and can be activated with “Ctrl + F”
