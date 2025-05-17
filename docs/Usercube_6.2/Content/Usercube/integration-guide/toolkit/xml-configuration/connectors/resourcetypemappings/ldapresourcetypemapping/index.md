---
sidebar_position: 992
title: Ldap Resource Type Mapping
---

# Ldap Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
            
```
### Multiple default object classes

The following example configures a whole set of settings for the LDAP\_Entry\_NominativeUser resource type, including several default object classes.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```

```
## Properties

| Property | Type | Description |
| --- | --- | --- |
| Connection required | String | Identifier of the corresponding connection. |
| DefaultObjectClass required | String | Default object class used by the provisioner, for example person, organizationalPerson, and user, etc.  Multiple default object classes are separated with 
. |
| RDNAttributeIdentifier required | String | Identifier of the RDN attribute used by the provisioner. |
| PasswordResetSetting optional | String | Identifier of the corresponding password reset setting. |
| UsePermissiveModify default value: false | Boolean | True to use [LDAP's permissive modify control](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ldap/ldap-server-permissive-modify-oid). |
| UseTreeDelete default value: false | Boolean | True to use the control option that enables deleting all the sub-trees within a directory via a single deletion request. |