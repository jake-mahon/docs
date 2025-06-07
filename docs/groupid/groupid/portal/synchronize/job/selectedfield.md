# Selected Fields for object types

On the Selected Fields for Object type section, click Add/Edit Fields. You can specify the action to take if the
data or object being exported from the source does not exist at the destination.

1. Select the operation that you want to perform. Click __Create__ to create new objects and __Update__ if you want to update the existing objects.

   - If table provider is the destination, you can enable two-way synchronization.

     - If an object exists in the source but does not exist in the destination, you can select one of the following options:

       - __Create__

         Select this option to create objects at the destination for source objects that have no counterparts in the destination during synchronization.
       - __Skip__

         Ignore items that do not exist on the destination and update only those that do.
     - If an object does not exist in the source but exists in the destination, you can select one of the following options:

       - __Delete__

         Delete such objects from the destination.
       - __Skip__

         Ignore objects at the destination that do not exist at the source.
   - If LDAP-compliant directory server or a phone system is the destination, you can do the following:

     - For LDAP providers such as Active Directory, you can select one or more object types that are synced between the source and destination directories. For other LDAP providers you can create or update objects of a specific type.

       For each object type, you must specify the action to take.

       - __Create__

         Select this option to create objects at the destination for source objects that have no counterparts in the destination during synchronization. You must specify a target container for
         each object type.

         Click the __Container__ button to view of each __Create__ action that you selected in the preceding step, and select one of the following:

         - __Create objects in this container__ - Click __Browse__ to change the displayed destination
           container (specified on the Destination Provider page) or select a new container.
         - __Create objects in the container specified in this source field__- Enter the distinguished name of the container.
         - __Create objects in a container specified in script__ - Click the Edit Script button and write a script that identifies the desired container.
       - __Skip__

         The default selection is to skip items that do not exist on the destination and only update those that do.
     - For phone systems such as a third-party Switchvox provider, you can only select one object type to be synced between the source and destination directories.

       For the selected object type, you must specify the action to take.

       - __Create__

         Select this option to create object at the destination for source object that has no counterparts in the destination during synchronization. You must specify a target container for the selected object type.
       - __Skip__

         Select this option to ignore any source objects that does not exist at the destination during synchronization.
2. Select the fields to be synced. Repeat for each object type desired. Object types listed are based on the source directory that you selected on the previous page.
3. If the destination is not an Active Directory domain, select the names of fields to sync from the list.
4. By default, Synchronize moves selects some fields from the list by analyzing the fields from the source.
5. For the Group object type, clicking _member (sAMAccountName_) displays __Member Key__ list. Select the required
   Active Directory attribute from it to search matching group members in the destination.

   NOTE: A Synchronize job can only create groups at the destination. In order to sync group members, it searches Active Directory for the matching objects based on the Member Key field and adds them to the group membership.
6. To select all the fields, check the __All Fields__ checkbox below.
7. Click __Save__.
