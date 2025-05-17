---
sidebar_position: 725
title: Hierarchy in Configuration Files
---

# Hierarchy in Configuration Files

Every configuration's element falls under the  `urn:schemas-usercube-com:configuration` namespace. Element `` is the root element of each configuration file.

```
    ...


```
Each configuration element matches to an entry in the database. Detailed description of the element can be found in the Data model. See the [XML Configuration Schema](../xml-configuration/index "XML Configuration Schema") topic for additional information.

For example, the structure of the `` element can be found in the [Connectors](../../connectors/index "Connectors") topic.

In some case, the element name will not match directly the data model type name.

For example, the element `` in the following XML fragment is a [Access Control Rule](../xml-configuration/access-control/accesscontrolrule/index "AccessControlRule") item in the database.

```
    

```