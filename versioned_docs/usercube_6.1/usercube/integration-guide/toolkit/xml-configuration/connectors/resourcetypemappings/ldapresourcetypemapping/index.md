# LdapResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<LdapResourceTypeMapping Identifier="AD_Entry_NominativeUser" Connection="ADExportFulfillment" PasswordResetSetting="ToManager" DefaultObjectClass="user" RDNAttributeIdentifier="CN" UsePermissiveModify="true" UseTreeDelete="false">  <Property Property="dn" IsDNProperty="true" />  <Property Property="parentdn" IsParentProperty="true" />  <Property Property="cn" IsRDNProperty="true" />  <Property Property="userAccountControl" IsUserAccountControlProperty="true" />  <Property Property="memberOf" DataSourceBacklinkColumnName="member" />  <Property Property="Categories" MultiValueSeparator=";" /></LdapResourceTypeMapping>

```

### Multiple default object classes

The following example configures a whole set of settings for the ```LDAP_Entry_NominativeUser``` resource type, including several default object classes.

```

<ResourceTypeMapping Identifier="LDAP_Entry_NominativeUser" DefaultObjectClass="inetOrgPerson
organizationalPerson" ... />

```

## Properties

| Property | Details |
| --- | --- |
| Connection   required | __Type__    String   __Description__   Identifier of the corresponding connection. |
| DefaultObjectClass   required | __Type__    String   __Description__   Default object class used by the provisioner, for example ```person```, ```organizationalPerson```, ```user```, etc.   __Note:__ multiple default object classes are separated with ```<br/>```. |
| RDNAttributeIdentifier   required | __Type__    String   __Description__   Identifier of the RDN attribute used by the provisioner. |
| PasswordResetSetting   optional | __Type__    String   __Description__   Identifier of the corresponding password reset setting. |
| UsePermissiveModify   default value: false | __Type__    Boolean   __Description__   ```true``` to use [LDAP's permissive modify control](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ldap/ldap-server-permissive-modify-oid). |
| UseTreeDelete   default value: false | __Type__    Boolean   __Description__   ```true``` to use the control option that enables deleting all the sub-trees within a directory via a single deletion request. |
