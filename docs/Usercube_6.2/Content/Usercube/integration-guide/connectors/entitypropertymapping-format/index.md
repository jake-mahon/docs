---
sidebar_position: 1115
title: 'References: Format for the EntityPropertyMapping'
---

# References: Format for the EntityPropertyMapping

This page lists all available formats for entity properties, in order to help you manage said formats when exporting and fulfilling resources from/to external systems.

The attribute `Format` can be defined in an EntityPropertyMapping to indicate the format of the data in the external system.
It will allow Identity Manager to correctly convert the data to its own format during the export and fulfillment processes.

## Available Formats

### Active Directory / LDAP / OpenLDAP

| Format | Corresponding Property Type | Note |
| --- | --- | --- |
| *Bit::* | String/Int16/Int32/Int64 | When provisioning a bitmask property, for example `userAccountControl`, the format must contain the identifier of the property and the bit to be provisioned, for example `bit:userAccountControl:2`. |
| *Bool* | Bool |  |
| *Byte* | Byte |  |
| *Bytes/Binary* | Bytes/Binary |  |
| *Concat:separator* | String | Mono-valued attribute that may contain multiple values separated by a `` (example: `extensionAttribute15` which requires using `concat:;`) |
| *DateTime/1601Date* | DateTime | [Classic LDAP Dates](https://www.epochconverter.com/ldap "Classic LDAP Dates") and [Generalized DateTimes](https://ldapwiki.com/wiki/GeneralizedTime "Generalized DateTimes") |
| *Double* | Double |  |
| *Guid* | Guid | 32 digits Guid (example: c076e361fa5f428e833939a449ce2db3) |
| *Int16* | Int16 |  |
| *Int32* | Int32 |  |
| *Int64* | Int64/ForeignKey/Option | Some attributes are stored as long integers (*Int64*) even though their name implies that they hold dates, like `accountExpires` and `pwdLastSet` attributes. |
| *MultivaluedText* | String | Multi-valued attribute flattened to a string containing values separated by a `\n`. Its provisioning with a scalar rule requires a specific sorting, see the focus under this table. |
| *RDN* | String | [Relative Distinguished Name](https://ldap.com/ldap-dns-and-rdns/ "Relative Distinguished Name") |
| *SID* | String | [Security Identifiers](https://ldapwiki.com/wiki/ObjectSID "Security Identifiers") |

#### Focus on Bit

Some systems use bitmask properties, i.e. properties containing a set of boolean flags represented by individual bits.

Scalar properties are provisioned by scalar rules, usually changing the whole value of the property. For bitmask properties, changing the whole value often requires an unnecessarily complex expression. Hence, a bitmask property should be modified one bit at a time (bit provisioning). In order to change only one flag without altering the others, a bitmask property must be completed by one fictitious property for each bit to be modified.

Then scalar rules can be created for each single-bit property individually.

:::warning
In a given resource type, there should be scalar rules either for the bitmask property, or for the single-bit "sub-properties", not both.
:::

> For example, we choose to create a property `bit_userAccountControl_2` to represent the second bit of `userAccountControl`.
>
> ![New Property for Bit Provisioning](../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/BitProv_property_V603.png)
>
> XML configuration looks like the following:
>
> ```
>
>         ...
>         ...
> 
>
> ```
When creating a property of bit format:
  
  
- through the UI, there is no need filling the connection column field, because it will be filled automatically once the format fields are filled. A manual value for connection column would be overridden.
  
- through XML configuration, the connection column must be specified manually but there are no additional requirements.

#### Focus on MultivaluedText

To provision a `MultivaluedText` property, the associated scalar rule's source object must return a `string`, where the values are separated by a `\n`. Most of the time, the value of the source object is computed with an expression.

The order of the values within the property is important, because Identity Manager will use the results of the synchronization and of the computation of the scalar rule's expression. Identity Manager compares both results to compute the `Verified` provisioning state if they are found equal. Regarding that fact, if the scalar rule's expression does not compute the `MultivaluedText` with the values in the same order as Identity Manager's synchronization, the property will never be `Verified`.

Netwrix Identity Manager (formerly Usercube) recommends, in the scalar rule's expression, ordering the elements before joining them into a `string` with `myList.OrderBy(e => e, StringComparer.OrdinalIgnoreCase)`, where `myList` is the list of values.

> For example, the scalar rule's C# expression for a `MultivaluedText` can look like:
>
> ```
>
>  { 
>     &quot;SMTP:aemiliee.bulot@contoso.com&quot;,
>     &quot;smtp:aemiliee.bulott@contoso.com&quot;,
>     &quot;smtp:aemiliee.bulot_contoso.com@example.mail.onmicrosoft.com&quot;,
> };
>
> return String.Join(&quot;\n&quot;, myList.OrderBy(e => e, StringComparer.OrdinalIgnoreCase));" />
>
> ```
### ServiceNow

| Format | Corresponding Property Type | Description |
| --- | --- | --- |
| *Bool* | Bool |  |
| *Byte* | Byte |  |
| *Bytes/Binary* | Bytes/Binary |  |
| *DateTime or Date* | DateTime | Date in ServiceNow format |
| *Double* | Double |  |
| *Guid* | Guid | 32 digits Guid (example: c076e361fa5f428e833939a449ce2db3) |
| *Int16* | Int16 |  |
| *Int32* | Int32 |  |
| *Int64* | Int64/ForeignKey/Option |  |

#### Example

In this example, we will export and fulfill the start date of an employee in a ServiceNow instance.

We define an [Entity Model](../../entity-model/index "Entity Model") called `u_startdate` with the **Type**`DateTime` to display it as a date in the UI.

```
ServiceNow Connector.xml
...
   ...

```
To correctly export the start date from ServiceNow, we transform the string received into a string that is readable as a date by Identity Manager. To do so, we must declare in the EntityTypeMapping that we will not receive a simple string, but a string formatted as a `DateTime`.

```
ServiceNow Connector.xml
...
   ...

```
This allows the export of the attribute `u_startdate` as a date in Identity Manager's format.

The fulfillment will use the same format defined in the EntityTypeMapping through the **Binding** declared in the ResourceType.

![Export and Fulfill Data transformation](../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/entitypropertymapping-format-flowchart.png)