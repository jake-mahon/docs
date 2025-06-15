# Transfer-DirectReports

Use the **Transfer-DirectReports** commandlet to transfer direct report(s) in the connected identity
store. Specify manager who will approve this transfer.

NOTE: You can perform this function in directory as per your role and permissions.

## Syntax

```
Transfer-DirectReports
-DirectReports <string[]>
-Manager <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameters

- DirectReports
- Manager

Example

The following command transfers two direct reports to Manager Robin.

```
Transfer-DirectReports -DirectReports "F Jafar","azram" -Manager "Robin"
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [User Lifecycle Commands ](/versioned_docs/groupid_11.0/groupid/managementshell/userlifecycle/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)
