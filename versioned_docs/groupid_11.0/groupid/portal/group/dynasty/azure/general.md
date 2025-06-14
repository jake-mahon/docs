# General - Microsoft Entra ID

Use this page to specify basic information about the group.

1. Click __Browse__ next to the __Container__ box to select or create the container or organizational unit to create the group in and click __OK__.

   If you want to create a container, click __Create__ and then add container to create the group in. Click __Refresh__ to remove the changes.

   This field will be read-only if the administrator has predefined a container for creating new groups.
2. In the __Group Name__ box, provide a name for the group by selecting a prefix and then entering a name for the group.

   NOTE: The prefix box is displayed if the administrator has defined the prefixes. See the [Set Group Name Prefixes](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/directoryservice/prefixes.md) topic.  
    These prefixes, when
   appended to group names, help standardize the group naming convention across the enterprise.
3. In the __Security__ list, select a security type for the group.
4. Set the group type by selecting an option for __Group Type__.

   - __Security__ - this group will be used for securing public folders, printers and other network resources.
   - __Distribution__ - this group will only be used for email distribution.
   - __Teams__ - this groups is used for manage Microsoft Teams and their associated channels.
   - __Microsoft 365__ - this group will be used to select a set of people to collaborate and use a collection of resources.

   NOTE: If the administrator has predefined a group type, you cannot change it.
5. Enter a description for the group in the __Description__ box.
6. Click __Next__.

__See Also__

- [Create a Microsoft Entra ID Dynasty](/versioned_docs/groupid_11.0/groupid/portal/group/dynasty/azure/createdynasty.md)
