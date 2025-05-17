---
sidebar_position: 337
title: Sap Resource Type Mapping
---

# Sap Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
    
```
## Properties

| Property | Type | Description |
| --- | --- | --- |
| Connection required | String | Identifier of the corresponding connection. |
| DefaultObjectClass optional | String | Default object class used by the provisioner, for example person, organizationalPerson, user, etc.  Multiple default object classes are separated with 
. |
| PasswordResetSetting optional | String | Identifier of the corresponding password reset setting. |