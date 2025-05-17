---
sidebar_position: 7331
title: ISmsGateway.SendShortMessage
---

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

* [ShortMessage class](ShortMessage/Class "ShortMessage class")
* [SendSmsMessageResult class](SendSmsMessageResult/Class "SendSmsMessageResult class")
* [Implement and Deploy a Custom SMS Gateway](../ImplementCustom "Implement and Deploy a Custom SMS Gateway")