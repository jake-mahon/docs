# ISmsGateway.AccountId

Gets or sets the account ID for connecting with the SMS gateway.

__Namespace:__ Imanami.PublicInterfaces

__Assembly:__ Imanami.PublicInterfaces.dll

__Syntax__

```
string AccountId { get; set; }
```

__Return Value__

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The value of the account ID.

__Remarks__

The account ID may not be required for every SMS gateway. If required, use this property to get or set its respective value. This property can also contain any other identification number that a gateway needs for authenticating a connection.

__See Also__

- [Implement and Deploy a Custom SMS Gateway](../implementcustom.md)
