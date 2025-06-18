# ISmsGateway.SendShortMessage

Sends text messages to the target mobile phone numbers.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
SendSmsMessageResult SendShortMessage(ShortMessage shortMessage);
```

Parameters

**ShortMessage**

Type: Imanami.GroupID.DataTransferObjects.DataContracts.SMS.ShortMessage

The object defining the message elements including the target mobile phone numbers.

**Return Value**

Type: Imanami.GroupID.DataTransferObjects.DataContracts.SMS.SendSmsMessageResult

The object containing the message delivery status and exception details.

See Also

- [ShortMessage class](/docs/groupid/11.1/groupid/admincenter/smsgateway/custom/shortmessage/class.md)
- [SendSmsMessageResult class](/docs/groupid/11.1/groupid/admincenter/smsgateway/custom/sendsmsmessageresult/class.md)
- [Implement and Deploy a Custom SMS Gateway](/docs/groupid/11.1/groupid/admincenter/smsgateway/implementcustom.md)
