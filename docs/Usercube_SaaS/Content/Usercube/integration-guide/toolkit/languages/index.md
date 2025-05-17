---
sidebar_position: 72
title: Languages
---

# Languages

Some configuration string must be specified in multiple languages. For this, the name of the corresponding XML attribute is suffixed by `_L1`, `_L2`,... `_L8`. For example, the property *DisplayName* of an [Entity Type](../xml-configuration/metadata/entitytype/index "EntityType") can be specified in English and French:

```
    ...


```
Languages list must be specified by [Language](../xml-configuration/metadata/language/index "Language") elements.

```
  

```
The code is a combination of an ISO 639 two-letter lowercase culture code associated with a language and an ISO 3166 two-letter uppercase subculture code associated with a country or region.