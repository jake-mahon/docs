---
sidebar_position: 3054
title: Indexer
---

Filter: 

* All Files

Submit Search

# Indexer

This configuration tab contains the indexing engine settings. Each configuration option has an associated “**i**” which describes the nature of the setting. To view advanced options, click the screwdriver icon at **Settings** on the right.

[![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/config_system/core_indexer_thumb_0_0.png)](../../../Resources/Images/config_system/core_indexer.png)

| Option | Description | Comment |
| --- | --- | --- |
| **General settings** | | |
| Indexer Threads | The number of background threads used for the indexer's processing. Default is *0* (auto). | We recommend leaving this setting on its default value.  For more information, see this Knowledge Base article:  |
| Near Duplicate Detection Enabled | With this option enabled, the Indexer will attempt a fuzzy match to locate near duplicates within the index (as a background action). These can then be reviewed via the **Near Duplicate Detection** report. | By default, duplicate detection will be based purely on an exact match (matching checksum). |
| **Advanced settings** | | |
| Indexer Delay | The sleep time (in milliseconds) between intensive operations (for example, extracting terms).  Default is *1* millisecond. |  |
| Indexer Polling | The sleep time between Indexer batches. | Only utilised when the indexing queue is empty. |
| DocumentID Mapping | Used to map fields into the search index ID references.  Allows for custom queries based on external IDs against the SOAP search API calls. | Theses are ID3 — ID8 |