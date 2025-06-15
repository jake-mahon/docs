# MonitoredContent

You can decrease the Classifier load, targeting it at _monitored content_ only. This means that you can schedule content to be automatically re-classified only when a specific condition or set of conditions are met, or with a minimum time period between runs.

![core_thumb_0_0](../../../../../static/img/product_docs/dataclassification/ndc/configuration/core_thumb_0_0.webp)

__NOTE:__ Each option in this section has an associated “__i__” which describes the nature of the setting.

| Option | Description | Comment |
| --- | --- | --- |
| Monitored Document Indicator | Content will be marked for automatic re-classification if it is tagged with a particular term. | Click on the tag icon to select the term that should be used to identify monitored content. |
| Minimum Reclassification Regularity (days) | Defines the minimum period to be used when re-classifying monitored content: from _1_ to _180_ days, default is __1__ day. | Content will be marked for reclassification if it was last classified prior to the specified regularity period. |

To re-classify content that meets specific conditions:

1. Use tagging. Content will be marked for automatic re-classification if it is tagged with a particular term.
2. In the __Monitored Content__ section of __System Configuration > Core > Classifier__ locate __Monitored Document Indicator__.
3. Click on the tag icon, and in the __Select Term__ dialog specify the term that should be used to identify monitored content:
![core_classifier_mc_terms_thumb_0_0](../../../../../static/img/product_docs/dataclassification/ndc/configuration/core/core_classifier_mc_terms_thumb_0_0.webp)4. When finished, click __Select__, then in the Classifier settings window click __Save__,

To re-classify content with a minimum time period between runs:

1. In the __Monitored Content__ section of __System Configuration > Core > Classifier__ settings window locate __Minimum Reclassification Regularity__.
2. Default reclassification period is 1 day. Use the slider to adjust the value. Content will be marked for reclassification if it was last classified prior to the specified period.
3. Click __Save__.
