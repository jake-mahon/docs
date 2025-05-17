---
sidebar_position: 7351
title: ShortMessage class
---

# ShortMessage class

ShortMessage is a DTO (Data Transfer Object) class that defines the elements of the text message.

Following is a list of its members with description:

* [ShortMessage.AccessCode](AccessCode "ShortMessage.AccessCode")
* [ShortMessage.MaxLength](MaxLength "ShortMessage.MaxLength")
* [ShortMessage.Message](Message "ShortMessage.Message")
* [ShortMessage.PhoneNumbers](PhoneNumbers "ShortMessage.PhoneNumbers")
* [ShortMessage.ReferenceId](ReferenceId "ShortMessage.ReferenceId")
* [ShortMessage.Validate](Validate "ShortMessage.Validate")

| Member | Description |
| --- | --- |
| [ShortMessage.AccessCode](AccessCode "ShortMessage.AccessCode") property | Gets or sets the confirmation code that will be sent to registered mobile phone users. |
| [ShortMessage.MaxLength](MaxLength "ShortMessage.MaxLength") property | Defines the maximum length of an SMS message. |
| [ShortMessage.Message](Message "ShortMessage.Message") property | Gets or sets the supporting message text that will be sent to registered mobile phone users along with the confirmation code. |
| [ShortMessage.PhoneNumbers](PhoneNumbers "ShortMessage.PhoneNumbers") property | Gets or sets the list of phone numbers to send the message to. |
| [ShortMessage.ReferenceId](ReferenceId "ShortMessage.ReferenceId") property | Gets or sets the reference ID for the text message. |
| [ShortMessage.Validate](Validate "ShortMessage.Validate") method | Validates various elements in an SMS message, such as message length and phone number. |

**See Also**

* [ISMSGateway Members](../Overview "ISMSGateway Members")