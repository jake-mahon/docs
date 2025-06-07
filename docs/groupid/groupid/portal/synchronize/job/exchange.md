# Exchange Subscription

While creating or editing mail enabled objects through a Synchronize job, Directory Manager provides you the facility to sync or deprovision subscriptions from Office 365 messaging provider.

## Sync Exchange subscriptions

While creating or editing a Synchronize job (mailbox-enabled user) you can sync subscriptions from Exchange messaging provider.

On the __Object, Fields and Mapping__ page:

Step 1 – In the __Messaging Provider__ drop-down list, select the __Exchange__ version that you want to use.

Step 2 – Enter the domain name where the mail server resides in the __Domain__ name box.

Step 3 – Enter the username and password of an authorized user account on the mail server in the __Username__ and __Password__ boxes.

Step 4 – Set Exchange server priority.

With Microsoft Exchange as the messaging provider, the __Server Name__ column in the __Server Status & Priority__ area lists the mail servers
in the environment. By default, Directory Manager randomly assigns the highest priority to a server. You can change its priority level and set the priority for other servers.

If your required server is not listed, click __Sync Again__.

1. In the __Server Status and Priority__ section, select the check box for the server you want to specify or change the priority for.

   Directory Manager checks the availability
   of the server and displays its status as _Online_ (available) or _Offline_ (unavailable) in the __Status__ column.
2. In the __Priority__ box, select a priority level for the server, with ‘1’ representing the highest priority.

Step 5 – Click __Save__.
