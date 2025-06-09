# Moving passwords

## What happens when records are moved?

Data can be moved within Netwrix Password Secure to another organisational structure. This does not necessarily have to be linked to a change in permissions (the effects are described separately below). Moving records without changing the permissions mainly has effects on the filtering or search functions for records.

## How do you move a record?

The (marked) records are moved either via the ribbon or via the context menu that is accessed using the right mouse button.

![moving password](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwords/moving_passwords_1-en.png)

Multiple records can also be marked and moved. The selected permissions are then valid for all records in this case.

### Required permissions

No special user rights/settings are required in order to move records. The “move” right for the record is the only deciding factor.

![required permissions](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwords/moving_passwords_2-en.png)

## Effects on existing permissions

![effects on existing permissions](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwords/moving_passwords_3-en.png)

- __Retain permissions__: The permissions for the record are not changed by moving it and are retained
- __Overwrite permissions__: The permissions for the record are overwritten by the target OU
- __Extend permissions__: The existing permissions are extended to include the permissions for the target OU

__CAUTION:__ From a technical perspective, all rights will be removed from the record when overwriting the permissions. The permissions will then be applied to the record in accordance with the rights template or inheritance from organisational structures. It is important to note here that it is theoretically possible to remove your own rights to the record! The rights change will only be carried out if at least one user retains the right to issue permissions as a result. Otherwise, the rights change will be cancelled with a corresponding message.
