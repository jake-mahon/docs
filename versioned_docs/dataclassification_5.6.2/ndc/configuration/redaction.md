# Redaction

This section contains information on configuring redaction plans and entities. Review the following for additional information:

- [Redaction Plans](#Redaction-Plans)
- [Redaction Entity Groups](#Redaction-Entity-Groups)

[<!-- Image removed: transparent.gif not found -->](javascript:void(0))[Redaction Plans](javascript:void(0))

Redaction plans can be used as an optional migration step to remove specific entities from supported content types. During the migration of a document a migration plan will remove the following entity types (depending on the configuration):

- NLP Entities—Items identified by the NLP entity extraction, such as names or locations
- Regex Entities—Items identified by the Regex classification clues, such as credit card numbers or social security numbers

  - Specific clues can be skipped as part of a redaction plan by specifying Excluded Clues, such as: “VISA” or “SSN” (matched to the term name)
- Custom Entities—Any custom words or phrases associated with the plan.

Masking based redaction will ensure that a specified number of start / end characters will be retained from each redacted value.

![configredactionplans](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/configredactionplans.png)

[<!-- Image removed: transparent.gif not found -->](javascript:void(0))[Redaction Entity Groups](javascript:void(0))

Entity Groups can be used to add redaction entities to specific groups.

![redactionentitygroups](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/redactionentitygroups.png)

[<!-- Image removed: transparent.gif not found -->](javascript:void(0))[Redaction Entities](javascript:void(0))

Entities can be used to specify any custom words or phrases that should be removed by a redaction plan.

![configredactionentities](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/configredactionentities.png)
