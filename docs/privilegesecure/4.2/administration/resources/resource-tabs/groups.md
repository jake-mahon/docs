# Groups Tab for Domain

The Groups tab shows information about the domain groups on the selected resource.

![Domain Resource Groups Tab](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/resources/groupsdomain.webp)

The Groups tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Type — Provides options to filter results based on a chosen criterion: Not Enrolled, Can Log In,
  and Admin
- Add to NPS User Role — Onboards the selected account, granting the Privilege Secure User role
- Remove NPS Role — Removes console access from the selected account
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the group
- NPS Role — Indicates the assigned Privilege Secure role
- Group Name (Pre-Windows 2000) — Displays the sAMAccountName for the account
- Description — Description of the policy
- Distinguished Name — Displays the distinguished name of the object

The table columns can be resized and sorted in ascending or descending order.

# Groups Tab for Microsoft Entra ID

The Groups tab for Microsoft Entra ID (formerly Azure AD) shows information about the groups on the
selected resource.

**NOTE:** Groups in hybrid environments will be associated with the on-premises Active Directory
domain resource (if the on-premises domain has been synced by Privilege Secure). This view will show
cloud-only EntraID groups.

![Groups Tab Entra ID](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/resources/groupsazuread.webp)

The table has the following columns:

- Group Name — Displays the name of the group

The table columns can be resized and sorted in ascending or descending order.

# Groups Tab for Host

The Groups tab shows information about the local groups on the selected resource.

![Group Tab for Host Resource](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/resources/groupshost.webp)

The table has the following columns:

- Group Name — Displays the name of the group
- Members — List of accounts with group membership

The table columns can be resized and sorted in ascending or descending order.
