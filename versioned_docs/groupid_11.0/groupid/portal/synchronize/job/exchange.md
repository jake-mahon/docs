# Exchange Subscription

While creating or editing mail enabled objects through a Synchronize job, GroupID provides you the facility to sync or deprovision subscriptions from Office 365 messaging provider.

What do you want to do?

- [Sync Exchange subscriptions](#Sync-Exchange-subscriptions)

## Sync Exchange subscriptions

While creating or editing a Synchronize job (mailbox-enabled user) you can sync subscriptions from Exchange messaging provider.

On the __Object, Fields and Mapping__ page:

1. In the __Messaging Provider__ drop-down list, select the __Exchange__ version that you want to use.
2. Enter the domain name where the mail server resides in the __Domain__ name box.
3. Enter the username and password of an authorized user account on the mail server in the __Username__ and __Password__ boxes.
4. Set Exchange server priority.

   With Microsoft Exchange as the messaging provider, the __Server Name__ column in the __Server Status & Priority__ area lists the mail servers
   in the environment. By default, GroupID randomly assigns the highest priority to a server. You can change its priority level and set the priority for other servers.

   If your required server is not listed, click __Sync Again__.

   1. In the __Server Status and Priority__ section, select the check box for the server you want to specify or change the priority for.

      GroupID checks the availability
      of the server and displays its status as _Online_ (available) or _Offline_ (unavailable) in the __Status__ column.
   2. In the __Priority__ box, select a priority level for the server, with ‘1’ representing the highest priority.
5. Click __Save__.

__See Also__

- [Create a Job](/versioned_docs/groupid_11.0/groupid/portal/synchronize/job/create.md)
- [Create a Job Collection
  ](/versioned_docs/groupid_11.0/groupid/portal/synchronize/collection/create.md)
- [Transform](/versioned_docs/groupid_11.0/groupid/portal/synchronize/transformation/overview.md)
- [Auto-Generate Unique, Complex Passwords](/versioned_docs/groupid_11.0/groupid/portal/synchronize/transformation/autogenerateuniquepassword.md)
