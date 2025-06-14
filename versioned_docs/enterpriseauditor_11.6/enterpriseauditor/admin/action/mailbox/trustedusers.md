# Mailbox: Trusted Users

Use the Trusted Users page to select delegates to add. Users can be added individually or from a server with a mailbox environment. It is a wizard page for the following operations:

- Add Delegates
- Remove Delegates

![New Mailbox Action Wizard Trusted Users page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/mailbox/trustedusers.png)

Select Trusted User delegates using the following options:

- Users found in the following column – Select this option to identify users via a data table column

  - Use the drop-down menu to select a data table column containing either the Mailbox display name or email address
  - Select a data type for the selected field using the following options:

    - Exchange (Direct and Faster) – Connects to Exchange Mailboxes using the following data types:

      - Legacy Exchange DN
      - Display Name
    - Active Directory (Cross-Call and Slower) – Connects to Exchange mailboxes using the Active Directory Data Collector with the following data types:

      - User DN
      - Account Name
      - SID
      - SMTP Email Address
- The list of users – Identifies users in one of the following ways:

  - Click __Select__ to choose from the global address list (GAL)
  - Manually enter a user name and click __Add__. Repeat for additional users.
  - To restore anonymous permissions to folders, enter ```anonymous``` and click __Add__
  - To remove a user, select it and click __Remove__

The following additional options are available for the Remove Delegates operation:

- Remove Permissions for Delegate – Remove Mailbox permissions in addition to removing delegate rights
- Remove Permissions from Child Folders – Removes permissions from child folders

  __NOTE:__ This option is only enabled if the __Remove Permissions for Delegate__ option is selected.
