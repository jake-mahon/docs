# New Object Policy

The New Object policy applies when role members create directory objects using the Directory Manager portal or Management Shell. Use this policy to:

- Limit role members to create new directory objects in the OUs they reside in respectively.

  OR
- Specify one or more OUs to limit object creation to those. Separate OUs can be specified for different object types.

You can specify one or more OUs for an object type. For example, you can specify OUA and OUB for Group objects and OUC for Mailbox objects, so that role members can create groups in OUA and OUB, and mailboxes in OUC.

By default, or when no OU is set for an object type, role members can select any OU in the identity store to create objects of that type. For example, when no OU is specified for the User object, role members can create user objects in any OU in the
identity store.

NOTE: (1) When a user has multiple roles in an identity store with a different New Object policy for each role, then the policies configured for all roles apply to the user. Hence, a user with three roles - where a different OU for the Group object is specified
for each role - can create groups in any of the three OUs.  
(2( The New Object policy does not apply to a Microsoft Entra ID identity store.

What do you want to do?

- [Limit Object Creation to the OU the User Resides in](#Limit-Object-Creation-to-the-OU-the-User-Resides-in)
- [Restrict Role Members to Create Objects in Specific OUs](#Restrict-Role-Members-to-Create-Objects-in-Specific-OUs)
- [Remove an OU](#Remove-an-OU)

## Limit Object Creation to the OU the User Resides in

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Security Roles__ under __Settings__ in the left pane.
4. On the __Security Roles__ page, click __Edit__ for a security role.
5. On the __Edit Security Role__ page, click __Specify policies for the members__ in the __Policies__ area.
6. On the __Add Policies__ pane, click the __New Object__ tab.
7. Select the __Users can create objects only in their own container__ check box to limit role members to create directory objects in the organizational unit they reside in respectively.  
   Selecting this option disables the remaining options on the tab.
8. Click __OK__.
9. On the __Edit Security Role__ page, click __Update Security Role__.
10. On the __Security Roles__ page, click __Save__.

NOTE: When role members create a new object, the _Container_ option shows the distinguished name of the OU the logged-in user resides in as read-only.

## Restrict Role Members to Create Objects in Specific OUs

You can specify one or more containers for an object type (say Group) to restrict role members to create group objects in those container(s) only.

__To specify OU(s) for object creation:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Security Roles__ under __Settings__ in the left pane.
4. On the __Security Roles__ page, click __Edit__ for a security role.
5. On the __Edit Security Role__ page, click __Specify policies for the members__ in the __Policies__ area.
6. On the __Add Policies__ pane, click the __New Object__ tab.
7. Click __Add__ and select an object type to specify the container(s) for.
8. On the __Add Container__ dialog box, select one or more containers where role members can create the particular objects. Then click __Add__. The container(s) are displayed
   with the name of the respective object type.
9. You can choose to set a container for all object types. Click the __Copy__ button for a container and then click __Yes__ on the __Copy Container__ message box. The container is displayed with all object types.
10. Click __OK__.
11. On the __Edit Security Role__ page, click __Update Security Role__.
12. On the __Security Roles__ page, click __Save__.

NOTE: When role members create a new object, the _Container_ option shows the containers specified for the respective object type. The user can select the desired container to create the object there. When one container
is specified, the _Container_ option displays its distinguished name as read-only.

## Remove an OU

You can remove a container to prevent role members from creating objects in it. When you remove all containers for an object type, role members can create the particular objects in any container in the directory.

__To remove a container:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Security Roles__ under __Settings__ in the left pane.
4. On the __Security Roles__ page, click __Edit__ for a security role.
5. On the __Edit Security Role__ page, click __Specify policies for the members__ in the __Policies__ area.
6. On the __Add Policies__ pane, click the __New Object__ tab.
7. For each object type, the allowed containers are listed with it.

   - Click __Remove__ for a container to remove it.
   - Click __Remove All__ for an object type
     to remove all containers for it.
8. Click __OK__.
9. On the __Edit Security Role__ page, click __Update Security Role__.
10. On the __Security Roles__ page, click __Save__.

__See Also__

- [Security Roles](/docs/product_docs/groupid/groupid/admincenter/securityrole/overview.md)
- [Security Role Policies](/docs/product_docs/groupid/groupid/admincenter/securityrole/policy/overview.md)
