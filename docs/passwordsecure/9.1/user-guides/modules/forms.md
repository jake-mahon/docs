# Change form

## Changing forms

It is necessary in some cases to change the form for a record. In these cases, this is mostly to
consolidate existing data or to adapt the form to match changes in the data structure. These
functionalities are available under "Extras/Settings" in the ribbon.

![change form](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/forms/change_form_1-en.webp)

In the following screenshot, you can see the dialogue for "mapping" the form fields from the
previously used form to the new form. In this example, a record that previously belonged to the
"Website" form is being "mapped" to the "Password" form (right).

![change form](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/forms/change_form_2-en.webp)

The drop-down menu allows you to select the target form. The comparison of current and new form
fields is shown in the lower section.

- Fields **marked in green** have already been assigned to the new form
- Fields **marked in red** indicate fields that have not been assigned

### Relevant rights

The following options are required to change forms.

### User right

- Can change form for a password

**CAUTION:** Please note that information could be lost during this process! In the example, this
applies to the fields "Website" and "Information".

## The effects of changes to forms on existing records

In general, changes to forms do not effect existing records. This means that a record that was
created with a certain form will not itself be changed after this form has been adapted/changed. It
remains in its original state. However, there are methods by which changes to forms could be adopted
by existing records. There are two possibilities in this context:

### How to change forms

If you press the "Change form" button (as mentioned in the previous section), the already existing
form will be used by default. If this form has been changed in the meantime, the new form field will
be directly shown and adopted after it is saved.

![New Form](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/forms/change_form_3-en.webp)

### Apply form changes to passwords

The setting "Apply form changes to passwords" makes it possible to force the change to the form to
be adopted. This becomes effective when editing the record! It is immaterial here whether changes
are being made to the record. Simply re-editing and saving the record will cause the adjustment to
the form.

### The following permissions/configuration must exist

- The user that wants to make the change requires the read right to the form
- The "read", "write" and authorize" rights for the record (and the form to be edited) are required.
- Sealed and masked records remain unaffected

## Conclusion

A common feature of both variants is that adjustments to forms cannot be automatically triggered.
Already existing records are thus not automatically adjusted. The adjustment thus needs to be
carried out manually. In the first case, the manual step is to use the function "Change form". In
the second case, it is sufficient to simply edit and save the record.

# Forms

## What are forms?

When creating a new data record, it is always indispensable to query all relevant data for the
intended application. In this context, **Forms** represent templates for the information which have
to be stored. The manageability of existing forms primarily ensures the completeness of the data
which have to be stored. Nevertheless, their use as an effective filter criterion is not to be
ignored! Forms have a lasting impact on working withNetwrix Password Secure v8 and must be managed
and maintained with the necessary care by the administration.

![form module](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/forms/forms_1-en.webp)

## Relevant rights

The following options are required to add new forms.

### User right

- Can add new forms
- Display form module

## Standard forms

Netwrix Password Secure is supplied with a series of standard forms – these should generally cover
all standard requirements. Naturally, it is still possible to adapt the standard forms to your
individual requirements.

![forms](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/forms/forms_2-em.webp)

The associated preview for the form selected in
[List view](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md)
appears in the
[Reading pane](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md).
Both the field name and also the field type are visible.

## Creating new forms

The wizard for creating new forms can be started via the ribbon, the keyboard shortcut "Ctrl + N" or
also the context menu that is accessed using the right mouse button. The same mechanisms can now be
used to create new form fields within the wizard. Depending on the selected field type, other
options are available in the **field settings** section. This will be clearly explained below using
the example of the field type "Password". The sequence in which form fields are requested when
creating new records corresponds to the sequence within the form. This can be adapted using the
relevant buttons in the ribbon.

![Creating new forms](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/forms/forms_3-en.webp)

The following field settings thus appear for the field type "Password": "Mandatory field, reveal
only with reason, check only generated passwords and password policy". These can now be defined as
desired. (**Note**: It is possible to select
[Password rules](/docs/passwordsecure/9.1/user-guides/administration/extras/password-rules.md)
within the field settings; they are defined as part of the options in the main menu)

**CAUTION:** If a form has been created, it can then be selected for use when creating new records.
The prerequisite is that the logged-in user has at least read rights to the form.

## Permissions for forms

In the same way as for other objects (records, roles, documents,…), permissions can also be granted
for forms. On the one hand, this ensures that not everyone can edit existing forms, while on the
other hand, it allows you to make forms available to selective groups. This ensures that clarity is
maintained and that users are not confronted with information that is irrelevant to them. The form
"Credit cards" may be relevant within the accounting department but administrators do not generally
need to use it.

## Configuring the info field

Every record displays other information underneath the obligatory name of the record in list view.
In the following example, the user name is also displayed in addition to the name of the password.
The name of the form is displayed in between in a blue font.

![Configuring the info field](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/forms/forms_4-en.webp)

The name of the record (192.168.150.236) and the form (password) cannot be adjusted – these are
always displayed. The user (Administrator) that is still saved for the record is currently
displayed. This can be configured in the info field for the form. It is thus possible to separately
define for each form what information for a record can be directly seen in list view. In the form
module, the info field is configured by opening the form which has to be edited in editing mode by
double clicking on it and then pressing the \*Configure info field” button in the ribbon.

![Configuring the info field](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/forms/forms_5-en.webp)

This will open a separate tab that enables you to design the info section via drag & drop. The
fields that are available on the right can be "dragged" onto the configuration window on the left.
In the following example, "Start RDP session2 will be made visible in the info section, whereby only
the word "RDP" is assigned a function – namely to start the RDP manager. A preview is shown in the
top section.

![preview form](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/forms/forms_6-en.webp)

The info field for the form is now updated. It is now possible to start the RDP session directly in
the RDP session.

![updated form](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/forms/forms_7-en.webp)

NOTE: The **forms module** is based on the
[Web Application](/docs/passwordsecure/9.1/web-application/web-app-overview.md)
module of the same name. Both modules have a different scope and design but are almost identical to
use.

## Standard form

There are two possible ways to define a standard form.

### Via the “standard form” user setting

![settings form](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/forms/forms_8-en.webp)

### Via the form selection

![default form](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/forms/forms_9-en.webp)
