---
sidebar_position: 7355
title: Validate Method
---

# ShortMessage.Validate

The Validate method validates the following:

* Message length should not be zero.
* Message length should not be greater than what is specified in the MacLength property.
* PhoneNumbers must be provided.
* PhoneNumber should be valid.

**Namespace:** Imanami.GroupID.DataTransferObjects.DataContracts.SMS

**Assembly:** Imanami.GroupID.DataTransferObjects.dll

**Syntax**

```
public bool Validate(IValidationDictionary validationDictionary)
```
**Return Value**

Type: [System.Boolean](http://msdn.microsoft.com/en-us/library/system.boolean.aspx "System.Boolean")

True if all validation checks are passed.

See Also

* [ShortMessage class](Class "ShortMessage class")