# Created passwords

After clicking on **Finish**, the **passwords** and the **Password Resets** (in accordance with the
selected options) are created for the entries. A **password** and a **Password Reset** are explained
in the following example.

## Password

![password list](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/created_password/created_passwords_1-en.webp)

1. The name of the created password
2. General data about the password
3. Data about the password created from the form (existing or new)

## Password Reset

Another password is created in the **Password Reset module** and is required for an associated
**Password Reset**.

![password reset list](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/created_password/created_passwords_2-en.webp)

Points 1-7 are described below:

1. The name of the Password Reset
2. Overview of the password
3. General
4. The data for the trigger are displayed here
5. The scripts for the passwords to be changed are displayed here
6. The associated password that will be reset using the Password Reset
7. The validity is shown here (if one has been entered)

This data can then be used to create a **Password Reset** for the user for the discovered
**Discovery Service entry**. The **Password Reset** is activated via the corresponding trigger that
has been set.

# Deleting entries

After creating an automatic **Password Reset** via the **Conversion Wizard**, the data is no longer
required and can be deleted. The discovered entries have a **link** to the relevant **Discovery
Service Task** that was executed and can be found and displayed using the filter function.

## Deletion process

The discovered data in the **Discovery Service** cannot simply be deleted and removed from the
**Discovery Service entries**. As the entries have a **link to the Discovery Service Task**, it is
necessary to delete the discovered entries via the **Discovery Service Task** that was created. If
entries were discovered using a joint **Discovery Service Task**, it is not possible to simply
delete them. This is the case if two different users have carried out a scan on the same area. If
you delete one of the two **Discovery Service Task**, only the entries that had a single link to
this **Discovery Service Task** will be deleted. The entries for the other **Discovery Service
Task** will be retained and must be deleted via the associated **Discovery Service Task**. You can
find out which **Discovery Service Task** found a particular entry by selecting the entry via the
**Conversion Wizard**.

![Conversion Wizard.](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/deleting_entries/deleting_entries_1-en.webp)

## Deleting entries by changing the settings in the System Task

If the IP range for an existing **Discovery Service Task** is changed and the **Discovery Service
Task** is then executed for this new IP range, the previously discovered entries from the previous
executed **Discovery Service Task** will be deleted from the **Discovery Service**. If you want to
carry out a **Discovery Service Task** for a different IP range, you should create a new **Discovery
Service Task**. This will prevent any already discovered entries from being deleted. However, if the
existing entries are no longer required, you can delete them by using the same **Discovery Service
Task** with a different IP range.

1. Task B only scans the IP address: 192.168.150.1
2. Only the entries for the IP address 192.168.150.1 are discovered
3. Task A is changed and now scans the IP address:192.168.150.2
4. Result:
5. Only the entries from the IP address 192.168.150.2 are discovered
6. Entries for IP address 192.168.150.1 are deleted
7. Exception:
8. Task B scans the IP address: 192.168.150.1
9. The same entries for IP address 192.168.150.1 are discovered as for 1.
10. A new scan using Task A with a different IP address 192.168.150.2 will not delete the data from
    Task B

NOTE: The **Password Resets** and **passwords** created using the **Conversion Wizard** are not
deleted when the **Discovery Service Tasks** are deleted.

# Discovered entries

The entries for the **Discovery Service** are discovered using a **Discovery Service Task**. It can
take some time for all the data on the systems for the entered IP network to be collected. This can
be easily recognized by the **blue arrow** symbol on the **Discovery Service Task** and a
corresponding message is also shown in the General display. Once the **Discovery Service Task** has
been completed, the data will be shown in the **Discovery Service module**.

![new discovery service task](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_1-en.webp)

The **Discovery Service Task** needs to be carefully configured. The configurable sections are
described below.

1. **Discovery Service Task**: Display of the status: this can be updated in the preview and logbook
   using the F5 button. Red hand: Deactivated Blue arrow: Activated and being executed Boxes:
   Corresponds to the assigned tag
2. **General**: The latest information about the **Discovery Service Task** is shown here. A
   **message** will be shown to indicate an active **Discovery Service Task**.
3. **Overview**: Current data for the **Discovery Service Task** about its progress and subsequent
   executions are shown here.
4. **Logbook**: The **logbook** can be found in the **footer** of the **Discovery Service Task**.
   The latest activities carried out by the **Discovery Service Task** are shown here.

NOTE: The **data** is **not kept up-to-date while the task is being executed** and does not always
show the latest status. Therefore, the data should be regularly **updated** using the **F5 button**!

## Using the Discovery Service entries

The successful execution of a **Discovery Service Task** is a requirement for the **Discovery
Service entries**. The discovered data is listed in table form in the **Discovery Service module**
and can be correspondingly organized using the **Discovery Service System Task** filter.

![discovery service entries](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_2-en.webp)

In this section, the **Discovery Service entries** that were discovered by the **Discovery Service
Task** and selected for the **Conversion Wizard** are displayed.

## Multiple selection of Discovery Service entries

If multiple entries are selected for a **Password Reset**, a corresponding number of **passwords**
and **Password Resets** need to be added in the **Conversion Wizard**. Depending on the entries
selected (service, Active Directory user, user account), it is necessary to carry out corresponding
**assignments** in the **Conversion Wizard** for the **passwords**.

![Discovery service conversion wizard ](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_3-en.webp)

Every line must be connected to a **password** in the end. Therefore, it is necessary to carry out
an assignment process in the **Conversion Wizard** for every entry.

![Discovery service conversion wizard ](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_4-en.webp)

For **Active Directory users**, it is possible to assign an existing **password**.

NOTE: The subsequent process is carried out in the same way as when only one **Discovery Service
entry** is selected.

## Filter settings

A good filter is required for processing the discovered data. A **filter that has been adapted for
this purpose** is available for processing the entries in the **Discovery Service module**. The
options in the **filter** are described below:

![Filter for discovered data](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_5-en.webp)

Description of the **filter with the special options for the Discovery Service entries**:

1. **Discovered type**: The discovered entries can be filtered here according to their type.
2. **Discovered system is resettable**: Indicates whether a Password Reset can be created from the
   discovered data.
3. **Relevance**: Grading the importance of the discovered system. A high relevance means that
   multiple services have been discovered for an Active Directory user or user account. Less
   important: Exactly one service was found Important: Two to nine services were found Very
   important: 10 or more services were found If a Password Reset has already been created, the
   relevance is downgraded to less important.
4. **Transferred as password**: Indicates whether a password can be created via the Conversion
   Wizard
5. **Transferred as Password Reset**: Indicates whether a Password Reset can be created via the
   Conversion Wizard
6. **Discovery service system tasks**: The entries are filtered here based on the System Task.
