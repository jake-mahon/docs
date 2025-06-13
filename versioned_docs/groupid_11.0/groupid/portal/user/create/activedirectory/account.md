# Account page

(of Create User and Create Mailbox wizards)

Use this page to specify basic account info, such as the user's first name, last name, login ID and the UPN suffix.

1. Click __Browse__ next to the __Container__ box to select a container to create the user in.

   This field would be read-only if the administrator has predefined a container for creating new users.
2. Enter the user's __First Name__, __Iitials__, and __Last Name__ in the respective boxes.
3. The wizard uses the provided information to populate the __Full Name__, __Display Name__, __User logon name__, and __User logon name (pre-windows 2000)__ boxes. You can modify this information, if
   required.

   The pre-Windows 2000 user logon name cannot exceed 24 characters. This name is used for logging on to computers running Windows 95, Windows 98, or Windows NT.

   The logon name is the user ID the user w ill use to log into the identity store.
4. The __UPN Suffix__ box displays the UPN suffix for the user account. This is the name of the domain the connected identity store is running on. An example of a UPN suffix can be 'mydomain.com'.

   When a domain user account is created, the complete domain account comprises of a user logon name followed by '@' and then the domain name.
5. Click __Next__.

__See Also__

- [Create an AD User](/versioned_docs/groupid_11.0/groupid/portal/user/create/activedirectory/user.md)
- [Create an AD Mailbox](/versioned_docs/groupid_11.0/groupid/portal/user/create/activedirectory/mailbox/mailbox.md)
