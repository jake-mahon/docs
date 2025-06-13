# Commit Active Directory Changes

The Access Information Center can be configured to commit changes to Active Directory (AD) group membership. This is required for the Access Requests and Owner ad hoc changes features. It is optional for the Change Modeling feature and the Resource Reviews workflow.

The Active Directory service account identified on the Active Directory page of the Configuration interface must not only be a domain user but must also have these minimal rights:

- Allow Read Members on the OUs housing the security and distribution groups to be managed through the Access Information Center
- Allow Write Members on the OUs housing the security and distribution groups to be managed through the Access Information Center

When File System or SharePoint resources will be managed through the AIC, it is necessary to configure access groups for those resources in the target environment. An access group provides one of the following access levels to a specific resource: Read, Modify, or Full Control. See the [Access Groups](/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceowners/accessgroups.md) topic for additional information.

__NOTE:__ The Access Information Center can only commit group membership changes to domains it has access to, that is the domain where it resides or domains with a trust that are known to it. Also, the Active Directory service account must have the required permissions for all applicable domains. See the [Multiple Domains](/versioned_docs/accessinformationcenter_11.6/access/informationcenter/admin/configuration/activedirectory.md#Multiple-Domains) topic for additional information.

## Best Practice for Least Privilege

The following steps outline the best practice for enabling the Access Information Center to commit Active Directory group membership changes with a least privileged model:

__Step 1 –__ Create a domain user which is not a member of any group other than Domain Users to be used as the Active Directory service account.

__Step 2 –__ Specify this service account on the Active Directory page of the Configuration interface and check the __Allow this account to make changes to group membership__ option. There are two options for assigning the Active Directory service account:

- Select the __Use the following AD account__ option and provide the account name and password. This is the least privileged model.
- The __Use the account running this service: [domain]\[username]__ option is not a least privilege option, but can be used as the Active Directory service account. See the [Active Directory Page](/versioned_docs/accessinformationcenter_11.6/access/informationcenter/admin/configuration/activedirectory.md) topic for additional information.

___RECOMMENDED:___ The best practice is to create at least two OUs for ease of organization: a security group OU and a distribution list group OU.

__Step 3 –__ Apply delegation to these OUs to grant the minimal rights of __Allow Read Members__ and __Allow Write Members__ to the Active Directory service account.

If access groups assigned for resource management through the Access Information Center do not reside within an OU with the Allow Read Members and Allow Write Members rights delegated to the Active Directory service account, attempting to change Active Directory membership from within the Access Information Center will result in an error message. See the [Service Account Delegation](/versioned_docs/accessinformationcenter_11.6/access/informationcenter/admin/troubleshooting/delegation.md) topic for additional information.
