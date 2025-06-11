# Converting entries

An important element for the __Discovery Service__ is the __Conversion Wizard__. It processes the discovered __entries__ and then creates corresponding __passwords__ and __Password Resets__.

The __Conversion Wizard__ is started in the Start ribbon and it is also possible to switch here to the __System Tasks__.

![ribbon](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/converting_entries/converting_entries_1-en.webp)

After the __Discovery Service Task__ has been successfully executed, the entries are available in the __Discovery Service__. Further processing of the entries is then carried out using the __Conversion Wizard__.
For processing in the __Conversion Wizard__, the network is scanned for the following types:

1. Discovered type: Service
2. Discovered type: Active Directory user
3. Discovered type: User account

!! hint
Only those __services are recorded__ to which at least one __AD user__ or __user account__ can be assigned! Only __AD users__ and __user accounts__ to which __at least one service__ can be assigned are recorded.

## Execution

In the __Discovery Service__ table, the user selects the entries for which he wants to add a __Password Reset__ or __password__. The user then clicks on the __Conversion Wizard__ and the __Discovery Service Conversion Wizard__ opens for further editing.

![data selection](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/converting_entries/converting_entries_2-en.webp)

1. A __Discovery Service Task__ first needs to be selected. This determines the context in which the new data will be created (for a new __Password Reset__, the __password for the domain administrator__ for the task will be used as the executing user. In addition, only those __Discovery Service Task entries__ that are also discovered by the entered __Discovery Service Task__ will be used for the conversion).
2. The discovered entries will be displayed in this column with the __services__ for which the user has been entered.
3. This column shows the __discovered type__ for the entry.
4. This column shows already existing passwords in Netwrix Password Secure that match the discovered __Active Directory user__ or __user account__. It is possible to select here which password can be used when creating a __Password Reset__ (it is then used as the only password linked to the Password Reset). Alternatively, these passwords can also be newly created.

NOTE: Logically, __every root node__ corresponds to __one user__ and all of its associated data (e.g. services). A __Password Reset__ is created later for __every user__ and its associated data.

The following image shows the options __add new password__ or retain __existing password__.

![associated password](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/converting_entries/converting_entries_3-en.webp)

In addition, the __organisational unit__ in which the existing password is located is displayed.

## Settings

The __Password Reset__ is configured in the __Settings Ribbon__.

![reset setting](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/converting_entries/converting_entries_4-en.webp)

The __settings__ will be described in more detail below:

1. The organisational unit in which the __Password Reset__ should be created is entered here. In addition, a template for the rights inheritance can be entered here.
2. The __responsible user__ for the __password__ is entered here. A special tag can be set here.
3. Adding a __Password Reset__
   Option 1: __Do you also want to add a Password Reset?__ Adds a __Password Reset__ If __option 1__ is not selected, the following options are not displayed.
4. Setting for executing a __Password Reset__
   Option 2: __(Execute Password Resets immediately after they are created)__ means that the __Password Reset__ will be executed as soon as you click on __Finish__.
5. The __responsible user for the Password Reset__ is entered here.
6. Various __triggers for the Password Reset__ can be selected here.

__CAUTION:__ After clicking on __Finish__, the __Password Resets__ will be __immediately executed__ and the __passwords changed!__. This also applies to __Windows passwords!__

If option 1: __Do you also want to add a Password Reset?__ is not selected, \*steps 4, 5 and 6 are not displayed for configuration.

![password reset option](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/converting_entries/converting_entries_5-en.webp)

NOTE: After clicking on __Finish__, one or more __passwords will be created__ but __no corresponding Password Resets will be created!__

## Assignment (Active Directory user)

In the __Assignment (Active Directory user)__ Ribbon, the discovered data for the __Discovery Service entries__ is transferred to a password form.

The following images shows the __Assignment (Active Directory user)__ Ribbon

![Assignment (Active Directory user)](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/converting_entries/converting_entries_6-en.webp)

### Description

1. An __Existing form__ can be selected or a __New form__ with names can be added
2. The __discovered properties__ are displayed here
3. The __properties__ are \*assigned to the form fields here

### "Existing form" selected

![Assignment of the form field](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/converting_entries/converting_entries_7-en.webp)

### Procedure

1. An __Existing form__ is selected here
2. The __assignment__ to the fields is carried out here
   Important assignments are __Type: General__ and __Type: Password Reset__. An amendment can be carried out here

### "New form" selected

![New Form](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/converting_entries/converting_entries_8-en.webp)

### Converting Procedure

1. A name for the __New form__ needs to be entered here
2. The discovered entries are __automatically__ assigned as standard
   Important assignments are __Type: General__ and __Type: Password Reset__. An amendment can be carried out here

### Summary

A brief overview of the actions that will be carried out with the added configuration is displayed in the __Summary__ Ribbon. These actions will then be carried out if you click on __Finish__.

![summary](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/converting_entries/converting_entries_9-en.webp)

## Confirmation prompt

An important aspect of Netwrix Password Secure V8 is the __security__ of passwords on systems. In the __Discovery Service__, a __security measures__ is thus triggered at the __last step__ for creating __Password Resets__.
If the option __Execute Password Resets immediately after they are created__ is used in the configuration, the __selected passwords__ are immediately changed after clicking on __Finish__.

__CAUTION:__ __If you are not paying careful attention, this could have inconvenient consequences.__

__Security level 1:__
An __Important note__ is displayed in the __Summary__ after clicking on __Finish__.

__CAUTION:__ __Please observe the note and read it through carefully!__

An __Overview__ of which actions will be carried out is displayed for the user together with this note. The user can then still decide to __Cancel__ the process.
If you click on __OK__, an __additional confirmation warning__ will be displayed.

![important note](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/converting_entries/converting_entries_10-en.webp)

__Security level 2:__

Another __confirmation prompt__ highlights that it is important to understand what you are about to do. It will no longer be possible to reverse the actions afterwards!

__CAUTION:__ __Last chance to cancel the execution!__

![securtiy warning](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/converting_entries/converting_entries_11-en.webp)

After __entering the displayed number__ and __confirming with OK__, the process is __executed immediately__ and the __Password Resets__ are carried out and the __associated passwords changed__.
