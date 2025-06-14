# ScimResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<ScimResourceTypeMapping Identifier="CyberArk_Shadow_NominativeUser" DefaultObjectClass="Users" Connection="SCIMCyberArkExportFulfillment">    <Property Property="CyberArk_id" IsDNProperty="true" /></ScimResourceTypeMapping>

```

## Properties

| Property | Details |
| --- | --- |
| Connection   required | __Type__    String   __Description__   Identifier of the corresponding connection. |
| DefaultObjectClass   optional | __Type__    String   __Description__   Default object class used by the provisioner, for example ```person```, ```organizationalPerson```, ```user```, etc.   __Note:__ multiple default object classes are separated with ```<br/>```. |
