# Granting Permissions for 'Deleted Objects' Container

Perform this procedure only if the account selected for data collection is not a member of the Domain Admins group.

__Step 1 –__ Log on to any domain controller in the target domain with a user account that is a member of the __Domain Admins__ group.

__Step 2 –__ Navigate to __Start → Run__ and type _"cmd"_.

__Step 3 –__ Input the following command: ```dsacls <deleted_object_dn> /takeownership```

where ```deleted_object_dn``` is the distinguished name of the deleted directory object.

For example: ```dsacls "CN=Deleted Objects,DC=Corp,DC=local" /takeownership```

__Step 4 –__ To grant permission to view objects in the __Deleted Objects__ container to a user or a group, type the following command:

```dsacls <deleted_object_dn> /G <user_or_group>:<Permissions>```

where ```deleted_object_dn``` is the distinguished name of the deleted directory object and``` user_or_group``` is the user or group for whom the permission applies, and ```Permissions``` is the permission to grant.

For example, ```dsacls "CN=Deleted Objects,DC=Corp,DC=local" /G Corp\jsmith:LCRP```

In this example, the user CORP\jsmith has been granted __List Contents__ and __Read Property__ permissions for the __Deleted Objects__ container in the __corp.local__ domain. These permissions let this user view the contents of the __Deleted Objects__ container, but do not let this user make any changes to objects in this container. These permissions are equivalent to the default permissions that are granted to the __Domain Admins__ group.
