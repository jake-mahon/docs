---
sidebar_position: 7347
title: SendSmsMessageResult class
---

# SendSmsMessageResult class

Returns the message delivery status (success or failure) and exceptions (if any) that occur while sending the text message to the target mobile phone numbers.

Following is a list of its members with description:

* [SendSmsMessageResult.ExceptionMessage](ExceptionMessage "SendSmsMessageResult.ExceptionMessage")
* [SendSmsMessageResult.Message](Message "SendSmsMessageResult.Message")
* [SendSmsMessageResult.Success](Success "SendSmsMessageResult.Success")

| Member | Description |
| --- | --- |
| ExceptionMessage property | Gets the exception message if one occurs while sending the text message. |
| Message property | Returns the [ShortMessage class](../ShortMessage/Class "ShortMessage class") object processed by the [ISmsGateway.SendShortMessage](../SendShortMessage "ISmsGateway.SendShortMessage") method. |
| Success property | Returns a boolean value indicating whether the text message is successfully sent to the target mobile phone numbers. |

**See Also**

* [ISMSGateway Members](../Overview "ISMSGateway Members")