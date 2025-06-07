# ShortMessage.MaxLength

Defines the maximum length of an SMS message.

__Namespace:__ Imanami.GroupID.DataTransferObjects.DataContracts.SMS

__Assembly:__ Imanami.GroupID.DataTransferObjects.dll

__Syntax__

```
public int MaxLength = 160
```

__Return Value__

Type: [System.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32?view=net-8.0)

The maximum length.

__Remarks__

This property stores the maximum length of an SMS message. If you send a message more than this length, the message is split in two or more pieces and the user is charged for each piece. Most, if not all, gateways will automatically split the message. You can increase this limit but it may cost more from the gateway.

See Also

- [ShortMessage class](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/shortmessage/class.md)
