# Language

Represents a configuration entity used to create multilingual application.

## Examples

The following example declares a new language.

```

<Language Code="en-US" IndicatorNumber="1" />

```

## Properties

| Property | Details |
| --- | --- |
| Code   required | __Type__    String   __Description__   Unique identifier of the language (fr-FR, en-US�). |
| IndicatorNumber   required | __Type__    Int32   __Description__   Defines the default language. |
| JsonPath   optional | __Type__    String   __Description__   The original translations file path |
