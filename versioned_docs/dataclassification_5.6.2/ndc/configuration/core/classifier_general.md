# General Options

The __General__ section contains general classification engine settings, e.g. . By default, only standard options are displayed. To view advanced options, click the screwdriver icon at __Settings__ in the bottom-right corner.

Each option has an associated “__i__” which describes the nature of the setting.

[![core_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/core_thumb_0_0.png)](/versioned_docs/dataclassification_5.6.2/images/config_system/core.png)

__NOTE:__ To view a complete list of the __Config__ settings, click the Details tab. The list also has an indication of the values that have been changed from the default setting.

## General Options

| Option | Description | Comment |
| --- | --- | --- |
| __Standard settings__ |  |  |
| Max Categories | Sets the maximum number of classifications to be allocated to each document.  Possible values:   - up to __256__ — for 32-bit Windows - up to __1024__ — for 64-bit Windows | If a document matches so many categories that the specified value would be exceeded, then the classification service will select the required number of categories based on those that have the highest score.  __NOTE:__ Higher value causes the engine to use more RAM, so it is recommended to use the default setting (unless it is essential that more categories are allocated to each document). |
| Retain Existing Metadata Mode | Specifies how the classification engine should process already existing classification (managed metadata fields). Possible options:   - __Retain if not classified__ — leave existing classification in place if no auto-classification has been generated - __Overwrite__ — clear managed metadata fields | Applies to SharePoint source. |
| Auto-Classification Change Logs | Enables a change log for auto-classification: each "Addition"/"Removal" of a classification against a document will be stored in the database as its classifications change. | Inactive by default. See also Enable Auto-Classification Change Logging. |
| Classifier Threads | The number of background threads used for classification. Default is __0 (auto)__. | We recommend leaving this setting on its default value.  For more information, see this Knowledge Base article: [https://kb.netwrix.com/3863](https://kb.netwrix.com/3863) |
| Classifier Write Threads | The number of threads to be utilised by the Classifier to update source systems during "tagging" operations (i.e. writing classification back to source system). | Each thread can be considered a "user" when considering load on the source system.  For more information, see this Knowledge Base article: [https://kb.netwrix.com/3863](https://kb.netwrix.com/3863) |
| __Advanced settings__ |  |  |
| [![core_classifier_general_tab_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/core/core_classifier_general_tab_thumb_0_0.png)](/versioned_docs/dataclassification_5.6.2/images/config_system/core_classifier_general_tab.png) |  |  |
| Classifier Enabled | Enables / disables the Classifier core component. By default, it is enabled. |  |
| SharePoint EMM No Classify Mode | Possible values:   - __Do not update Deprecated__ (default) — use if you do not want to alter the __Deprecated__ setting in SharePoint EMM - __Update Deprecated__ — select if you want Deprecated setting to be updated |  |
| Subset Trimming Enabled | This setting applies where both primary (single value) and secondary (multi value) fields are added to a document library for the same taxonomy.   - __Off__ (default) — the highest scoring term will be shown in both primary and secondary fields. - __On__ — the highest scoring term will be shown only in the primary field. |  |
| Subset Trimming Threshold | If __Subset Trimming Enabled__ option is ON, this parameter defines the minimum score required to class the highest scoring term as primary. | If no item has a score higher than this threshold, then all terms will show as secondary terms, and the primary term will be empty. |
| Classifier Delay | The sleep time (in milliseconds) between intensive operations, such as storing classification. Default is __1__ ms. |  |
| Regular Taxonomy Backup Frequency | Enables and specifies the frequency of an automated process to create and store a backup of the taxonomy definitions.  You can specify how often the taxonomies will be backed up — daily or weekly. | By default, this option is disabled. |
| Regular Taxonomy Backup Retention | Specifies the length of time to retain automated taxonomy backups (automatic cleanup configuration).  If you have selected to backup the taxonomies, you can specify backup retention (in weeks). |  |
