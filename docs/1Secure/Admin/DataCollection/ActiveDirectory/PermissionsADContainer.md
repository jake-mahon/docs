---
id: permissionsadcontainer
title: "[anchor:kanchor1]Granting Permissions for 'Deleted Objects' Container"
---

Granting Permissions for 'Deleted Objects' Container

# <span id="kanchor1"></span>Granting Permissions for 'Deleted Objects' Container

**Step 2 –** Navigate to **Start → Run** and type *"cmd"*.

**Step 3 –** Input the following command: `dsacls  /takeownership`

where `deleted_object_dn` is the distinguished name of the deleted directory object.

For example: `dsacls "CN=Deleted Objects,DC=Corp,DC=local" /takeownership`

**Step 4 –** To grant permission to view objects in the **Deleted Objects** container to a user or a group, type the following command:

`dsacls  /G :`

where `deleted_object_dn` is the distinguished name of the deleted directory object and `user_or_group` is the user or group for whom the permission applies, and `Permissions` is the permission to grant.

For example, `dsacls "CN=Deleted Objects,DC=Corp,DC=local" /G Corp\jsmith:LCRP`

In this example, the user CORP\jsmith has been granted **List Contents** and **Read Property** permissions for the **Deleted Objects** container in the **corp.local** domain. These permissions let this user view the contents of the **Deleted Objects** container, but do not let this user make any changes to objects in this container. These permissions are equivalent to the default permissions that are granted to the **Domain Admins** group.