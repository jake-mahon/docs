# ShortMessage class

ShortMessage is a DTO (Data Transfer Object) class that defines the elements of the text message.

Following is a list of its members with description:

- [ShortMessage.AccessCode](accesscode.md)
- [ShortMessage.MaxLength](maxlength.md)
- [ShortMessage.Message](message.md)
- [ShortMessage.PhoneNumbers](phonenumbers.md)
- [ShortMessage.ReferenceId](referenceid.md)
- [ShortMessage.Validate](validate.md)

| Member | Description |
| --- | --- |
| [ShortMessage.AccessCode](accesscode.md) property | Gets or sets the confirmation code that will be sent to registered mobile phone users. |
| [ShortMessage.MaxLength](maxlength.md) property | Defines the maximum length of an SMS message. |
| [ShortMessage.Message](message.md) property | Gets or sets the supporting message text that will be sent to registered mobile phone users along with the confirmation code. |
| [ShortMessage.PhoneNumbers](phonenumbers.md) property | Gets or sets the list of phone numbers to send the message to. |
| [ShortMessage.ReferenceId](referenceid.md) property | Gets or sets the reference ID for the text message. |
| [ShortMessage.Validate](validate.md) method | Validates various elements in an SMS message, such as message length and phone number. |

__See Also__

- [ISMSGateway Members](../overview.md)
