# ISmsGateway.Url

Gets or sets the URL that the SMS gateway provides for sending messages.

__Namespace:__ Imanami.PublicInterfaces

__Assembly:__ Imanami.PublicInterfaces.dll

__Syntax__

```
string Url { get; set; }
```

__Return Value__

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The address for sending messages.

__Remarks__

Some SMS gateways provide URLs for you to send your message parameters. The web component (typically a web service) deployed at that URL then transmits the message to the intended recipients. If this is the case with your SMS gateway provider, you
can use this property to specify that URL.

__See Also__

- [Implement and Deploy a Custom SMS Gateway](../implementcustom.md)
