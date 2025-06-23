---
title: sms gateway
sidebar_label: sms-gateway
description: Directory Manager 11.0 documentation for sms gateway with configuration details, usage instructions, and implementation guidance.
---

# ISmsGateway.AccountId

Gets or sets the account ID for connecting with the SMS gateway.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string AccountId { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The value of the account ID.

**Remarks**

The account ID may not be required for every SMS gateway. If required, use this property to get or
set its respective value. This property can also contain any other identification number that a
gateway needs for authenticating a connection.

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ISmsGateway.Clone

Returns a clone object of the **ISMSGateway** interface.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
ISmsGateway Clone();
```

**Return Value**

Type: Imanami.PublicInterfaces.ISmsGateway

The clone object.

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ISMSGateway Members

To define a custom gateway, a list of ISMSGateway members that you must implement are listed below:

- [ISmsGateway.AccountId](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ISmsGateway.Clone](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ISmsGateway.Password](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ISmsGateway.ProxyDomain](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ISmsGateway.ProxyHostName](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ISmsGateway.ProxyPassword](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ISmsGateway.ProxyPort](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ISmsGateway.ProxyUsername](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ISmsGateway.SendShortMessage](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ISmsGateway.TestConnection](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ISmsGateway.TestCredentials](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ISmsGateway.TestProxy](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ISmsGateway.Url](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ISmsGateway.UserId](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

- ShortMessage
  ([ShortMessage class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md))

  - [ShortMessage.AccessCode](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
  - [ShortMessage.MaxLength](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
  - [ShortMessage.Message](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
  - [ShortMessage.PhoneNumbers](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
  - [ShortMessage.ReferenceId](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
  - [ShortMessage.Validate](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

- SendSmsMessageResult
  ([SendSmsMessageResult class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md))
  - [SendSmsMessageResult.ExceptionMessage](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
  - [SendSmsMessageResult.Message](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
  - [SendSmsMessageResult.Success](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ISmsGateway.Password

Gets or sets the password of the user account registered with the SMS gateway provider.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string Password { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The value of the password.

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ISmsGateway.ProxyDomain

Gets or sets the domain name or IP address of the proxy server.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string ProxyDomain { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The domain name or IP address of the proxy server.

**Remarks**

If communication with the SMS gateway is through a proxy server, this property can be used to set
the domain name or IP address of that proxy server.

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ISmsGateway.ProxyHostName

Gets or sets the host name of the proxy server.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string ProxyHostName { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The host name of the proxy server.

**Remarks**

If communication with the SMS gateway is through a proxy server, you can use this property to
provide the host name of the proxy server.

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ISmsGateway.ProxyPassword

Gets or sets the password of the user account that will be used for connecting to the proxy server.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string ProxyPassword { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The password of the proxy account.

**Remarks**

Use this property if your proxy server requires a user name and password for connecting to it.

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ISmsGateway.ProxyPort

Gets or sets the port number used by the proxy server.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string ProxyPort { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The port number.

**Remarks**

If communication with the SMS gateway is through a proxy server, you can use this property to set
the port number the proxy server uses.

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ISmsGateway.ProxyUsername

Gets or sets the user name for connecting to the proxy server.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string ProxyUsername { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The user name of the proxy account.

**Remarks**

Use this property if your proxy server requires a user name and password for connecting to it.

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

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

Type: Imanami.directorymanager.DataTransferObjects.DataContracts.SMS.ShortMessage

The object defining the message elements including the target mobile phone numbers.

**Return Value**

Type: Imanami.directorymanager.DataTransferObjects.DataContracts.SMS.SendSmsMessageResult

The object containing the message delivery status and exception details.

See Also

- [ShortMessage class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [SendSmsMessageResult class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# SendSmsMessageResult class

Returns the message delivery status (success or failure) and exceptions (if any) that occur while
sending the text message to the target mobile phone numbers.

Following is a list of its members with description:

- [SendSmsMessageResult.ExceptionMessage](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [SendSmsMessageResult.Message](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [SendSmsMessageResult.Success](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

| Member                    | Description                                                                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ExceptionMessage property | Gets the exception message if one occurs while sending the text message.                                                                                                                                                              |
| Message property          | Returns the [ShortMessage class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) object processed by the [ISmsGateway.SendShortMessage](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) method. |
| Success property          | Returns a boolean value indicating whether the text message is successfully sent to the target mobile phone numbers.                                                                                                                  |

**See Also**

- [ISMSGateway Members](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# SendSmsMessageResult.ExceptionMessage

Gets the exception message if one occurs while sending SMS.

**Namespace:** Imanami.directorymanager.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.directorymanager.DataTransferObjects.dll

**Syntax**

```
public string ExceptionMessage
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The exception details.

See Also

- [SendSmsMessageResult class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# SendSmsMessageResult.Message

Returns the
[ShortMessage class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
object processed by the
[ISmsGateway.SendShortMessage](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
method.

**Namespace:** Imanami.directorymanager.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.directorymanager.DataTransferObjects.dll

**Syntax**

```
public ShortMessage Message;
```

**Return Value**

Type: Imanami.directorymanager.DataTransferObjects.DataContracts.SMS.ShortMessage

Object containing elements of the text message.

See Also

- [SendSmsMessageResult class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ShortMessage class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# SendSmsMessageResult.Success

Returns a boolean value indicating whether the text message is successfully sent to the target
mobile phone numbers.

**Namespace:** Imanami.directorymanager.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.directorymanager.DataTransferObjects.dll

**Syntax**

```
public bool Success;
```

**Return Value**

Type: [System.Boolean](http://msdn.microsoft.com/en-us/library/system.boolean.aspx)

True if the message is delivered successfully.

See Also

- [SendSmsMessageResult class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ShortMessage.AccessCode

Gets or sets the confirmation code that will be sent to registered mobile phone users.

**Namespace:** Imanami.directorymanager.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.directorymanager.DataTransferObjects.dll

**Syntax**

```
public string AccessCode { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The confirmation code.

See Also

- [ShortMessage class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ShortMessage class

ShortMessage is a DTO (Data Transfer Object) class that defines the elements of the text message.

Following is a list of its members with description:

- [ShortMessage.AccessCode](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ShortMessage.MaxLength](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ShortMessage.Message](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ShortMessage.PhoneNumbers](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ShortMessage.ReferenceId](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ShortMessage.Validate](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

| Member                                                                                                  | Description                                                                                                                   |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [ShortMessage.AccessCode](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) property   | Gets or sets the confirmation code that will be sent to registered mobile phone users.                                        |
| [ShortMessage.MaxLength](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) property    | Defines the maximum length of an SMS message.                                                                                 |
| [ShortMessage.Message](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) property      | Gets or sets the supporting message text that will be sent to registered mobile phone users along with the confirmation code. |
| [ShortMessage.PhoneNumbers](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) property | Gets or sets the list of phone numbers to send the message to.                                                                |
| [ShortMessage.ReferenceId](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) property  | Gets or sets the reference ID for the text message.                                                                           |
| [ShortMessage.Validate](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) method       | Validates various elements in an SMS message, such as message length and phone number.                                        |

**See Also**

- [ISMSGateway Members](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ShortMessage.MaxLength

Defines the maximum length of an SMS message.

**Namespace:** Imanami.directorymanager.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.directorymanager.DataTransferObjects.dll

**Syntax**

```
public int MaxLength = 160
```

**Return Value**

Type: [System.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32?view=net-8.0)

The maximum length.

**Remarks**

This property stores the maximum length of an SMS message. If you send a message more than this
length, the message is split in two or more pieces and the user is charged for each piece. Most, if
not all, gateways will automatically split the message. You can increase this limit but it may cost
more from the gateway.

See Also

- [ShortMessage class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ShortMessage.Message

Gets or sets the supporting message text that will be sent to registered mobile phone users along
with the confirmation code.

**Namespace:** Imanami.directorymanager.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.directorymanager.DataTransferObjects.dll

**Syntax**

```
public string Message { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The message text.

See Also

- [ShortMessage class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ShortMessage.PhoneNumbers

Gets or sets the list of mobile phone numbers to send the message to.

**Namespace:** Imanami.directorymanager.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.directorymanager.DataTransferObjects.dll

**Syntax**

```
public List<string> PhoneNumbers { get; set; }
```

**Return Value**

Type:
[](http://msdn.microsoft.com/en-us/library/system.string.aspx)[System.Collection.Generic.List(of T)](http://msdn.microsoft.com/en-us/library/6sh2ey19.aspx)

A list of mobile phone numbers.

See Also

- [ShortMessage class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ShortMessage.ReferenceId

Gets or sets the reference ID for the text message.

**Namespace:** Imanami.directorymanager.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.directorymanager.DataTransferObjects.dll

**Syntax**

```
public string ReferenceId { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The reference ID for the text message.

See Also

- [ShortMessage class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ShortMessage.Validate

The Validate method validates the following:

- Message length should not be zero.
- Message length should not be greater than what is specified in the MacLength property.
- PhoneNumbers must be provided.
- PhoneNumber should be valid.

**Namespace:** Imanami.directorymanager.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.directorymanager.DataTransferObjects.dll

**Syntax**

```
public bool Validate(IValidationDictionary validationDictionary)
```

**Return Value**

Type: [System.Boolean](http://msdn.microsoft.com/en-us/library/system.boolean.aspx)

True if all validation checks are passed.

See Also

- [ShortMessage class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ISmsGateway.TestConnection

Tests your connection with the SMS gateway.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
bool TestConnection();
```

**Return Value**

Type: [System.Boolean](http://msdn.microsoft.com/en-us/library/system.boolean.aspx)

True if a connection is established with the SMS gateway.

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ISmsGateway.TestCredentials

Tests the credentials for communicating with the SMS gateway for validity.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
bool TestCredentials();
```

**Return Value**

Type: [System.Boolean](http://msdn.microsoft.com/en-us/library/system.boolean.aspx)

True if the credentials are valid.

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ISmsGateway.TestProxy

Tests the proxy settings.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
bool TestProxy();
```

**Return Value**

Type: [System.Boolean](http://msdn.microsoft.com/en-us/library/system.boolean.aspx)

True if the proxy settings are valid.

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ISmsGateway.Url

Gets or sets the URL that the SMS gateway provides for sending messages.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string Url { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The address for sending messages.

**Remarks**

Some SMS gateways provide URLs for you to send your message parameters. The web component (typically
a web service) deployed at that URL then transmits the message to the intended recipients. If this
is the case with your SMS gateway provider, you can use this property to specify that URL.

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# ISmsGateway.UserId

Gets or sets the user name of the account registered with the SMS gateway provider.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

[Copy](<javascript:void(0);>)

```
string UserId { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The value of the user name.

**See Also**

- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# Implement and Deploy a Custom SMS Gateway

You can integrate with additional SMS gateways using the Custom Gateway API. After creating a
gateway, you can add an account for it. See the
[Create an SMS Gateway Account](/docs/directorymanager/11.0/configuration/services/sms-gateway.md#create-an-sms-gateway-account)
topic.

What do you want to do?

- [Implement a Custom SMS Gateway](#implement-a-custom-sms-gateway)
- [Deploy a Custom SMS Gateway](#deploy-a-custom-sms-gateway)

## Implement a Custom SMS Gateway

1. Define a class that implements the **ISMSGateway interface** which is defined in the
   **Imanami.PublicInterfaces** namespace (_Imanami.PublicInterfaces.dll_). The core method for
   dispatching text messages makes use of objects that are defined in the
   **Imanami.directorymanager.DataTransferObjects.DataContracts.SMS** namespace
   (_Imanami.directorymanager.DataTransferObjects.dll_).  
   The DLLs for both the namespaces are available at the GroupID installation directory. A list of
   **ISMSGateway members** that you must implement are discussed in the following table:

   | Member                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                   |
   | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | [ISmsGateway.SendShortMessage](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) method | Takes as input the [ShortMessage class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) object, which defines elements of the text message, sends messages to the target recipients, and returns the [SendSmsMessageResult class](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) object, which contains  message delivery status and exception details |
   | [ISmsGateway.TestCredentials](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) method  | Returns a boolean value indicating whether the credentials for communicating with the SMS gateway are valid.                                                                                                                                                                                                                                                                                  |
   | [ISmsGateway.TestConnection](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) method   | Returns a boolean value indicating whether the connection with the SMS gateway is established successfully.                                                                                                                                                                                                                                                                                   |
   | [ISmsGateway.TestProxy](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) method        | Returns a boolean value informing whether the given proxy setting are valid.                                                                                                                                                                                                                                                                                                                  |
   | [ISmsGateway.Clone](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) method            | Returns the member-wise clone of the ISMSGateway interface.                                                                                                                                                                                                                                                                                                                                   |
   | [ISmsGateway.AccountId](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) property      | Gets or sets the account ID for connecting to the SMS gateway.                                                                                                                                                                                                                                                                                                                                |
   | [ISmsGateway.Password](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) property       | Gets or sets the password of the user name assigned by the SMS gateway provider.                                                                                                                                                                                                                                                                                                              |
   | [ISmsGateway.Url](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) property            | Gets or sets the URL that the SMS gateway provides for sending messages.                                                                                                                                                                                                                                                                                                                      |
   | [ISmsGateway.UserId](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) property         | Gets or sets the user name assigned to you by the SMS gateway provider.                                                                                                                                                                                                                                                                                                                       |
   | [ISmsGateway.ProxyHostName](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) property  | Gets or sets the host name of the proxy server.                                                                                                                                                                                                                                                                                                                                               |
   | [ISmsGateway.ProxyPort](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) property      | Gets or sets the port number used by the proxy server.                                                                                                                                                                                                                                                                                                                                        |
   | [ISmsGateway.ProxyUsername](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) property  | Gets or set the user name for connecting to the proxy server.                                                                                                                                                                                                                                                                                                                                 |
   | [ISmsGateway.ProxyPassword](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) property  | Gets or sets the password of the user account that will be used for connecting to the proxy server.                                                                                                                                                                                                                                                                                           |
   | [ISmsGateway.ProxyDomain](/docs/directorymanager/11.0/configuration/services/sms-gateway.md) property    | Gets or sets the domain name or IP address of the proxy server.                                                                                                                                                                                                                                                                                                                               |

2. Reference **System.ComponentModel.Composition**  
   (_System.ComponentModel.Composition.dll_).

   This namespace is required as the **ISMSGateway** is built on top of Microsoft Extensibility
   Framework (MEF) and at the core uses it for most of its functionality.

## Deploy a Custom SMS Gateway

After you have implemented all members of the **ISMSGateway** interface for your custom SMS gateway,
you must add to it the metadata for the MEF's importing interface. This metadata contains basic
attributes that define the custom gateway assembly.

### Adding the MEF Exporting Interface

The following example code shows how to set the SMS gateways basic, defining attributes. You must
add these attributes before the class definition.

```
namespace ClickatellCustomSMSGateway 
{
/// Exporting interface of ISMSGateway 
[Export(typeof(ISmsGateway))] 
/// The syntax of initializing the meta data attributes 
// [SMSGatewayMetadataAttribute ( AccountIdRequired=Is Account ID required by the SMS Gateway? Possible values can be true or False, 
// Description = "a description of the Custom SMS Gateway", 
// Name="Name by which the SMS Gateway should appear in GroupID Management Console", 
// PasswordRequired= Does the SMS Gateway require a password for connecting with it? Possible values can be true or False, 
// UserIdRequired=Does the SMS Gateway require a user ID for connecting with it? Possible values can be true or False,      
// UrlRequired=Does the SMS Gateway expose some URL for sending text messages? Possible values can be true or False, 
// ProxyDomainRequired=Does a proxy domain require for communicating with the SMS Gateway? Possible values can be true or False,      
// ProxyHostNameRequired=Is proxy host name required for connecting with the proxy server? Possible values can be true or False, 
// ProxyPasswordRequired=Does the proxy server require a password for connecting with it? Possible values can be true or False,      
// ProxyPortRequired=Does the port number required for connecting with the proxy server? Possible values can be true or False, 
// ProxyUsernameRequired=Does the proxy server require a user name for connecting with it? Possible values can be true or False,,      
// URL="The address provided by SMS gateway for sending messages. If no URL is required by the SMS gateway, provide an empty string like """)]
/// Meta data attributes initialization 
[SMSGatewayMetadataAttribute ( AccountIdRequired=false, Description = "Clickatell SMS Gateway",Name="Clickatell",PasswordRequired=true, UserIdRequired=true,UrlRequired=true,ProxyDomainRequired=false,ProxyHostNameRequired=false,      ProxyPasswordRequired=false,ProxyPortRequired=false, ProxyUsernameRequired=false,URL="http://api.clickatell.com/http/sendmsg?")] 
Class ClickatellCustomSMSGatewayBasic : ISMSGateway 
{
...
...
...
}
}

```

### Register your Custom SMS Gateway with GroupID

1. On the GroupID server, go to:  
   X:\Program Files\Imanami\GroupID
   11.0\GroupIDDataService\Inetpub\GroupIDDataService\Web\SMSGateways\  
   (X represents the GroupID installation drive).
2. Create a new folder here using the name that was specified for the **Name** SMS gateway meta data
   attribute.
3. Compile and generate the DLL file for your custom SMS gateway.
4. Restart IIS services by typing the following command in the **Run** dialog box:  
   _iisreset_

If the SMS gateway is successfully registered, it will get listed in the **Gateway Type** list (on
the **Create SMS Gateway** page) for selection when creating an SMS gateway account.

**See Also**

- [SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [ISMSGateway Members](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# Manage SMS Gateway Accounts

You can create one or more SMS gateway accounts in GroupID and link an account with an identity
store. You can also set an account as the default account, so that it is automatically linked to an
identity store created thereafter.

GroupID supports several SMS gateway providers. You can also use the Custom Gateway API to integrate
with an unsupported provider.

What do you want to do?

- [Create an SMS Gateway Account](#create-an-sms-gateway-account)
- [Modify an SMS Gateway Account](#modify-an-sms-gateway-account)
- [Set an SMS Gateway Account as Default](#set-an-sms-gateway-account-as-default)
- [Test SMS Gateway Account Connection](#test-sms-gateway-account-connection)
- [Link an SMS Gateway Account to an Identity Store](#link-an-sms-gateway-account-to-an-identity-store)
- [Delete an SMS Gateway Account](#delete-an-sms-gateway-account)

## Create an SMS Gateway Account

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.
2. On the **SMS Gateways** page, do either of the following:

   - Click **Setup SMS Gateway** - This button is displayed when no gateway account exists in
     GroupID.
   - Click **Create SMS Gateway** - This button is displayed when one or more gateway accounts have
     been created in GroupID.

   The **Create SMS Gateway** page is displayed.

3. Enter a name for the gateway account in the **Name** box.
4. In the **Gateway Type** drop-down list, select an SMS gateway provider.  
   The list includes the gateways that GroupID supports and any custom SMS gateways that you have
   written. Selecting a gateway type displays the gateway URL, which is the web service address the
   SMS gateway uses for sending text messages.
5. Enter an account ID for the gateway type in the **Account ID** box.
6. Enter the username and password for the account in the **User Name** and **Password** boxes.
7. To communicate with the SMS gateway through a proxy server, click **Show Proxy Options**. This
   displays some additional fields for entering proxy settings. Enter the following proxy
   information:

   - **Proxy User Name** - the proxy user name, if required by the proxy server.
   - **Proxy Password** - the password for the user name.
   - **Description** - a description of the proxy connection.
   - **Proxy Domain** - the domain name or IP address of the proxy server.
   - **Proxy Host Name** - the host name of the proxy server.
   - **Proxy Port** - the port number the proxy uses.

8. Test the account settings:

   1. Click **Test Connection**.
   2. In the **Test SMS Gateway Connection** dialog box, enter a mobile phone number for receiving
      a test message. Use International format, with no spaces or special characters. For example:
      18588123169, 447079692712, 923225867987.
   3. Click **OK** to send the message to the mobile number.

9. Select the **Set as default account** check box to link this gateway account with the identity
   stores created from this point forward.
10. Click **Create SMS Gateway** to create the gateway account.

## Modify an SMS Gateway Account

You can update the details of an SMS gateway account, such as its name and the credentials used to
connect to the gateway.

**To modify an account:**

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.  
   The **SMS Gateways** page is displayed with a list of the SMS gateway accounts that you have
   created.
2. To update a gateway account, click **Edit** for it in the **Actions** column.
3. On the **Edit SMS Gateway** page, update the required details. Refer to step 3 and onwards in the
   [Create an SMS Gateway Account](#create-an-sms-gateway-account) topic for details.

## Set an SMS Gateway Account as Default

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.  
   The **SMS Gateways** page is displayed with a list of the SMS gateway accounts that you have
   created.
2. Click **Edit** for a gateway account in the **Actions** column.
3. On the **Edit SMS Gateway** page, select the **Set as default account** check box to set this
   gateway account as default, which means that it will be linked with the identity stores created
   hereafter.
4. Click **Save SMS Gateway**.

## Test SMS Gateway Account Connection

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.  
   The **SMS Gateways** page is displayed with a list of the SMS gateway accounts that you have
   created.
2. Click **Test Connection** for a gateway to test whether GroupID can successfully send text
   messages through it.
3. In the **Test SMS Gateway Connection** dialog box, enter a mobile phone number for receiving a
   test message. Use International format, with no spaces or special characters. For example:
   18588123169, 447079692712, 923225867987.
4. Click **OK** to send the message to the mobile number.

## Link an SMS Gateway Account to an Identity Store

See the
[Link an SMS Gateway Account to an Identity Store](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md#link-an-sms-gateway-account-to-an-identity-store)
topic.

## Delete an SMS Gateway Account

You can delete an SMS gateway account that is not linked with any identity store.

**To delete an account:**

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.
2. On the **SMS Gateways** page, click **Delete** for a gateway account to delete it.
3. One of the following happens:

   - If the gateway account is not linked with an identity store, a message is displayed, asking
     you to confirm its deletion. Clicking **Delete** will delete the account.
   - If the gateway account is linked with an identity store, GroupID will not allow you to delete
     it.

See Also

- [SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)

# SMS Gateway

In GroupID, an SMS gateway account is required for:

- SMS verification for multifactor authentication, second factor authentication, and Second Way
  Authentication. GroupID uses an SMS gateway account to send verification codes to the users’
  mobile numbers.
- Sending new passwords and password reset links to the users’ mobile numbers by the helpdesk users,
  when they reset end users’ passwords using the Helpdesk node in Admin Center.

The SMS gateway can be any third-party service provider capable of sending text messages to mobile
phone numbers.

GroupID supports these SMS gateways:

- Bulletin.net
- Nexmo
- RedOxygen

To use a gateway not in this list, write your own custom gateway using GroupID's Custom Gateway API.

For a gateway, you can set up as many gateway accounts as required and then link a gateway account
to an identity store.

**See Also**

- [Manage SMS Gateway Accounts](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/configuration/services/sms-gateway.md)
- [Authentication Policy](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
