# SendSmsMessageResult class

Returns the message delivery status (success or failure) and exceptions (if any) that occur while sending the text message to the target mobile phone numbers.

Following is a list of its members with description:

- [SendSmsMessageResult.ExceptionMessage](exceptionmessage.md)
- [SendSmsMessageResult.Message](message.md)
- [SendSmsMessageResult.Success](success.md)

| Member | Description |
| --- | --- |
| ExceptionMessage property | Gets the exception message if one occurs while sending the text message. |
| Message property | Returns the [ShortMessage class](../shortmessage/class.md) object processed by the [ISmsGateway.SendShortMessage](../sendshortmessage.md) method. |
| Success property | Returns a boolean value indicating whether the text message is successfully sent to the target mobile phone numbers. |

__See Also__

- [ISMSGateway Members](../overview.md)
