---
id: granting-permissions-for-deleted-objects-container
title: "Granting Permissions for 'Deleted Objects' Container"
pagination_label: "Granting Permissions for 'Deleted Objects' Container"
sidebar_label: "Granting Permissions for 'Deleted Objects' Container"
sidebar_position: 69
description: "Learn how to grant permissions for the Deleted Objects container for non-Domain Admin data collection accounts."
---

# Granting Permissions for 'Deleted Objects' Container

Perform this procedure only if the account selected for data collection is not a member of the
Domain Admins group.

**Step 1 –** Log on to any domain controller in the target domain with a user account that is a
member of the **Domain Admins** group.

**Step 2 –** Navigate to **Start → Run** and type _"cmd"_.

**Step 3 –** Input the following command: `dsacls <deleted_object_dn> /takeownership`

where `deleted_object_dn` is the distinguished name of the deleted directory object.

For example: `dsacls "CN=Deleted Objects,DC=Corp,DC=local" /takeownership`

**Step 4 –** To grant permission to view objects in the **Deleted Objects** container to a user or a
group, type the following command:

`dsacls <deleted_object_dn> /G <user_or_group>:<Permissions>`

where `deleted_object_dn` is the distinguished name of the deleted directory object
and` user_or_group` is the user or group for whom the permission applies, and `Permissions` is the
permission to grant.

For example, `dsacls "CN=Deleted Objects,DC=Corp,DC=local" /G Corp\jsmith:LCRP`

In this example, the user CORP\jsmith has been granted **List Contents** and **Read Property**
permissions for the **Deleted Objects** container in the **corp.local** domain. These permissions
let this user view the contents of the **Deleted Objects** container, but do not let this user make
any changes to objects in this container. These permissions are equivalent to the default
permissions that are granted to the **Domain Admins** group.
