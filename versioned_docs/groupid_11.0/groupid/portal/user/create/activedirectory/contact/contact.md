# Create an AD Contact

The GroupID portal enables you to create the 'contact' object in the directory.

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

NOTE: Pages and fields on the Create Contact wizard may vary from those discussed here, since the administrator can customize the wizard by adding or removing pages and fields.

What do you want to do?

- [Create a contact](#Create-a-contact)

## Create a contact

1. In the GroupID portal, click the __Create New__ button in the left pane and select __Contact__.

   The __Create Contact__ wizard opens to the Account page.
2. On the __Account__ page:

   1. Click __Browse__ next to __Container__ to select a container to create the contact in.

      This field would be read-only if the administrator has pre-defined a container for creating new contacts.
   2. Enter the contact's __First Name__, __Initials__, and __Last Name__ in the respective boxes.

      The wizard uses this information to populate the __Full Name__ and __Display Name__ boxes.
   3. Click __Next__.
3. Use the __Exchange__ page to mail-enable the contact.
4. On the __Summary__ page, review the settings and then click Finish to complete the wizard.

NOTE: If the GroupID administrator has specified the contact creation action for review, your changes will not take effect until verified by an approver. See the [Requests](/versioned_docs/groupid_11.0/groupid/portal/request/overview.md) topic.

__See Also__

- [Directory Search](/versioned_docs/groupid_11.0/groupid/portal/search/search.md)
- [User Properties](/versioned_docs/groupid_11.0/groupid/portal/user/properties/overview.md)
