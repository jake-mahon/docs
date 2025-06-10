# Discovered entries

The entries for the __Discovery Service__ are discovered using a __Discovery Service Task__. It can take some time for all the data on the systems for the entered IP network to be collected. This can be easily recognized by the __blue arrow__ symbol on the __Discovery Service Task__ and a corresponding message is also shown in the General display. Once the __Discovery Service Task__ has been completed, the data will be shown in the __Discovery Service module__.

![new discovery service task](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_1-en.webp)

The __Discovery Service Task__ needs to be carefully configured. The configurable sections are described below.

1. __Discovery Service Task__: Display of the status: this can be updated in the preview and logbook using the F5 button.
   Red hand: Deactivated
   Blue arrow: Activated and being executed
   Boxes: Corresponds to the assigned tag
2. __General__: The latest information about the __Discovery Service Task__ is shown here. A __message__ will be shown to indicate an active __Discovery Service Task__.
3. __Overview__: Current data for the __Discovery Service Task__ about its progress and subsequent executions are shown here.
4. __Logbook__: The __logbook__ can be found in the __footer__ of the __Discovery Service Task__. The latest activities carried out by the __Discovery Service Task__ are shown here.

NOTE: The __data__ is __not kept up-to-date while the task is being executed__ and does not always show the latest status. Therefore, the data should be regularly __updated__ using the __F5 button__!

## Using the Discovery Service entries

The successful execution of a __Discovery Service Task__ is a requirement for the __Discovery Service entries__. The discovered data is listed in table form in the __Discovery Service module__ and can be correspondingly organized using the __Discovery Service System Task__ filter.

![discovery service entries](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_2-en.webp)

In this section, the __Discovery Service entries__ that were discovered by the __Discovery Service Task__ and selected for the __Conversion Wizard__ are displayed.

## Multiple selection of Discovery Service entries

If multiple entries are selected for a __Password Reset__, a corresponding number of __passwords__ and __Password Resets__ need to be added in the __Conversion Wizard__. Depending on the entries selected (service, Active Directory user, user account), it is necessary to carry out corresponding __assignments__ in the __Conversion Wizard__ for the __passwords__.

![Discovery service conversion wizard ](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_3-en.webp)

Every line must be connected to a __password__ in the end. Therefore, it is necessary to carry out an assignment process in the __Conversion Wizard__ for every entry.

![Discovery service conversion wizard ](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_4-en.webp)

For __Active Directory users__, it is possible to assign an existing __password__.

NOTE: The subsequent process is carried out in the same way as when only one __Discovery Service entry__ is selected.

## Filter settings

A good filter is required for processing the discovered data. A __filter that has been adapted for this purpose__ is available for processing the entries in the __Discovery Service module__. The options in the __filter__ are described below:

![Filter for discovered data](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_5-en.webp)

Description of the __filter with the special options for the Discovery Service entries__:

1. __Discovered type__: The discovered entries can be filtered here according to their type.
2. __Discovered system is resettable__: Indicates whether a Password Reset can be created from the discovered data.
3. __Relevance__: Grading the importance of the discovered system.
   A high relevance means that multiple services have been discovered for an Active Directory user or user account.
   Less important: Exactly one service was found
   Important: Two to nine services were found
   Very important: 10 or more services were found
   If a Password Reset has already been created, the relevance is downgraded to less important.
4. __Transferred as password__: Indicates whether a password can be created via the Conversion Wizard
5. __Transferred as Password Reset__: Indicates whether a Password Reset can be created via the Conversion Wizard
6. __Discovery service system tasks__: The entries are filtered here based on the System Task.
