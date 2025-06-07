# Windows File System Target Actions

The following actions target Windows File System.

## Delete File

This action deletes the file associated with the threat.

![deletefile](/static/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/deletefile.png)

- Credential – Select a credential profile that contains valid Active Directory credentials. Credential profiles are configured on the [Integrations Interface](/docs/product_docs/threatmanager/threatmanager/administration/configuration/integrations/overview.md). If not specified, the action will be run as the credentials of the Action Service.

## Revert Permission Change

The Revert Permission Change action reverts a permission change on an Active Directory Object.

![revertpermissionchange](/static/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/revertpermissionchange.png)

- Credential – Select a credential profile that contains valid Active Directory credentials. Credential profiles are configured on the Integrations Interface. If not specified, the action will be run as the credentials of the Action Service.

See the [Integrations Interface](/docs/product_docs/threatmanager/threatmanager/administration/configuration/integrations/overview.md) topic for additional information.

## Save File Hash

This action saves the file hash to the properties of the threat.

![savefilehash](/static/img/product_docs/threatmanager/threatmanager/administration/playbooks/action/savefilehash.png)

- Credential – Select a credential profile that contains valid Active Directory credentials. Credential profiles are configured on the [Integrations Interface](/docs/product_docs/threatmanager/threatmanager/administration/configuration/integrations/overview.md). If not specified, the action will be run as the credentials of the Action Service.
