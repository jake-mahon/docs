# General page

Use this page to specify basic information about the group.

1. Click __Browse__ next to the __Container__ box to select or create the container or organizational unit to create the group in and click __OK__.

   If you want to create a container, click __Create__ and then add container to create the group in. Click __Refresh__ to remove the changes.

   This field will be read-only if the administrator has predefined a container for creating new groups.
2. In the __Group Name__ box, provide a name for the group by selecting a prefix and then entering a name for the group.

   NOTE: The prefix box is displayed if the administrator has defined the prefixes. See Group name prefixes.  
   These prefixes, when
   appended to group names, help standardize the group naming convention across the enterprise.
3. The __Name Preview__ is displayed if the prefix list is available and displays a preview of the prefix combined with the group name.
4. The group name is also displayed in the __Group Name (Pre Windows 2000)__ box. Modify it, if required.
5. Select the __Mail Enabled__ check box to create the group as mail-enabled. A mail-enabled group is one with an email address. Members of a mail-enabled group can receive emails.
6. The __Alias__ box displays an alias for creating the group's email address. You can modify the alias, if required.

   If Microsoft Exchange Server is the designated messaging provider for the identity store, then the alias length is limited to 64 characters,
   it does not contain spaces, and it is unique to the forest. For other messaging systems, the alias length must not exceed the number of characters supported by the respective messaging system.

   Also, the alias must not contain characters that are invalid for the configured messaging system.

   The __Alias__ box is displayed if the __Mail Enabled__ check box is selected.
7. Set the group type by selecting an option for __Group Type__.

   - __Security__ - this group will be used for securing public folders, printers and other network resources.
   - __Distribution__ - this group will only be used for email distribution.

   NOTE: If the administrator has predefined a group type, you cannot change it.
8. In the __Group Scope__ list, select a scope for the group.

   - __Domain Local__ - if the group is to contain only users in this domain.
   - __Global Group__ - if the group is to contain users from other domains, but should only be visible within its own domain.
   - __Universal Group__ - if the group is to contain users and groups from any domain and be visible in the Global Catalog.

   NOTE: (1) If the administrator has predefined a group scope, you cannot change it.  
   (2) To create a mail-enabled group (with Exchange 2013/2016/2019 as the messaging provider), you must select __Universal__ as the group scope.
9. In the __Security__ list, select a security type for the group.
10. Enter a description for the group in the __Description__ box.
11. Click __Next__.
