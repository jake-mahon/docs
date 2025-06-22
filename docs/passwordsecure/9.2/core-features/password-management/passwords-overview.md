# Passwords

## What are passwords?

In Netwrix Password Secure v8, the data record with the passwords represents the central data
object. The Passwords module provides administrators and users with central access to the passwords
for the purpose of handling this sensitive data that requires protection. Search filters in
combination with color-highlighted tags enable very focussed work. Various approaches can be used to
help apply the desired permissions to objects. Furthermore, the ergonomic structure of the module
helps all users to use Netwrix Password Secure in an efficient and targeted manner.

![Password modul](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwords/passwords_1-en.webp)

## Prerequisite

The following user right is required for adding new passwords:

- **Can add new passwords**

## Module-specific ribbon functions

The ribbon offers access to all possible actions relevant to the situation at all times. Especially
within the "Passwords" module, the ribbon plays a key role due to the numerous module-specific
functions. General information on the subject of the ribbon is available in the relevant section.
The module-specific ribbon functions will be explained below.

![ribbon functions](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwords/passwords_2-en.webp)

### New

- **New password**: New passwords can be added via this icon in the ribbon, via the context menu
  that is accessed using the right mouse button and via the shortcut (Ctrl + N). The next step is to
  select a suitable form.
- **Open**: Opens the object marked in list view and provides further information about the record
  in the reading pane.
- **Delete**: Deletes the object marked in list view. A log file entry is created (see logbook).
- **Reveal**: The function **Reveal** can be used for all records that have a password field. The
  passwords in the reading pane will be revealed. In the example, the passwords have been revealed
  and can be hidden again with the **Hide** button.

![hide password](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwords/passwords_3-en.webp)

### Actions

- **Notifications**: Defining notifications enables a constant flow of information about any type of
  interaction. The issuing of notifications is carried out in the module designed for this purpose.
- **Duplicate**: Duplicating creates an exact copy of the record in a new tab.
- **Move**: Moves the record marked in list view to another organisational structure.
- **Toggle** **Favorite**: The selected record is marked as a favorite. It is possible to switch
  between all records and favorites at any time.
- **Quick view**: A modal window opens for the selected record for 15 seconds and displays all
  available information **including the value of the password**.
- Notifications: A list of all configured notifications

### Permissions

- **Permissions**: The drop-down menu can be used to set both password permissions and also form
  field permissions. This method only allows the manual setting of permissions for data (see

  authorization concept)

- **Password masking**: Masking passwords that need to be protected from unauthorized users is an
  important feature of the security concept in Netwrix Password Secure.
- **Seal**: The multi-eye principle in Netwrix Password Secure is covered in its own section. Seals.

### Clipboard

The clipboard is a key element in the ribbon. This only exists in the "Passwords" module. **Clicking
on the desired form field for a record in the ribbon** will copy it to the clipboard.

![Clipboard](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwords/passwords_4-en.webp)

The message in the style of the "Balloon Tips" in Windows shows that the password has now been saved
in the clipboard for 300 seconds. (Note: the time until the clipboard is cleared is 60 seconds by
default. In the present case, this has been adjusted via the user settings.)

### Start

Conveniently working with passwords is only possible via the efficient usage of automated accesses
via RDP, SSH, general Windows applications or websites. This makes it possible to dispense with
(unsecure) entries via "copy & paste".

- **Open web page**: If an URL is saved in the record, this menu option can be used to directly open
  it.
- **Applications**: If applications have been linked to records, they can be directly opened via the
  "start menu".

### Extras

- **Create external link**: This option creates an external link for the record marked in list view.
  A number of different options can be selected:

![external link](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwords/passwords_5-en.webp)

**CAUTION:** If several sessions are opened on a client, an external link is always called in the
first session.

- **History**: This icon opens the history for those records selected in list view in a new tab. Due
  to the comprehensive recording of historical versions of passwords, it is now possible to compare
  several versions with one another.
- **Print**: This option can be used to open the print function.
- **Export**: It is possible to export all the selected records and also the data defined by the
  filter to a .csv file.
- **Change form**: It is possible to change the form used for individual records. "Mapping" of the
  previous form fields can be directly carried out in the process.
- **Settings**: The password settings are described in a separate section.

NOTE: The password module is based on the module of the same name in the Web Application. Both
modules have a different scope and design. However, they are almost identical to use.

# Revealing passwords

## What is involved in revealing passwords?

Not all information is encrypted by the MSSQL database in Netwrix Password Secure for performance
reasons. Only the password itself (=secret) is encrypted with the help of the used encryption
algorithms and is then saved in the MSSQL database. As access to the MSSQL server is otherwise
secured via access permissions, this process enables the **maximum possible working speed** with a
**unchanged high level of security** through the use of **sophisticated**, **cryptographic
methods**. Revealing passwords describes the mechanism by which a password is made visible to the
user in the client. This process for dealing with passwords very precisely reflects the importance
of data security in Netwrix Password Secure – and this process will thus be described in detail
below.

### Example case

The record "Blogger" has been saved in the database and is visible to the logged-in user. It can
thus be deduced that the user has at least a read right for the record. As can be gathered from the
authorization concept, the user thus also generally has a read right to the password itself. This
means the user can view the value of the password using the "reveal" function.

![Show password](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwords/revealing_passwords_1-en.webp)

## Revealing passwords – diagram

In this context, it is important to note that the word "reveal" does not really accurately describe
this process. It creates the **incorrect** impression that the client already has the password and
only needs to reveal it. However, the processes running in the background until the password are
revealed are much more complex and will thus be described below.

![revealing password diagram](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwords/revealing_passwords_2-en.webp)

### Saving the password on the server

Even though you would assume the opposite, at the start a masked password (\*) is neither available
on the client nor the server in plain text! The password is stored as part of the MSSQL database in
a hybrid encrypted state via the two methods **AES 256** and **RSA**. Accordingly, it is not
currently possible either on the server or the client to view the password. If you mark a record,
the password is not available at all on the client and is encrypted on the server before it is
revealed.

### The encrypted password is requested

Pressing the "reveal"- button triggers the process for requesting the password. A request is sent to
the server to apply for the encrypted password to be released. The server itself does not possess
the required key (private key) to decrypt the password. Therefore, it can only deliver the
**encrypted value**.

### Checking the permissions

Whether the request sent in step 2 is approved is defined in the authorization concept. Once the
request has been received, the server checks whether the user possess the required rights. It also
checks the possible existence of other security mechanisms such as a seal or password masking. If
the necessary requirements for releasing the password have been met, the server now sends the
**encrypted password**. In the same step, a **log file entry** is saved that documents the user’s
access to the password.

### Decrypting the password on the client

The user now has the encrypted password which has been delivered by the server. The user himself
possesses the **private key** required for decrypting the password and can now view the actual
password.
