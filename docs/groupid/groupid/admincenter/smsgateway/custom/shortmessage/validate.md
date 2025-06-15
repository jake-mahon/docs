# ShortMessage.Validate

The Validate method validates the following:

- Message length should not be zero.
- Message length should not be greater than what is specified in the MacLength property.
- PhoneNumbers must be provided.
- PhoneNumber should be valid.

__Namespace:__ Imanami.GroupID.DataTransferObjects.DataContracts.SMS

__Assembly:__ Imanami.GroupID.DataTransferObjects.dll

__Syntax__

```
public bool Validate(IValidationDictionary validationDictionary)
```

__Return Value__

Type: [System.Boolean](http://msdn.microsoft.com/en-us/library/system.boolean.aspx)

True if all validation checks are passed.

See Also

- [ShortMessage class](class.md)
