---
title: Configuring subsite and list processing
sidebar_label: Sharepoint Server
description: The Entity Configuration tab displays configuration for the site collection. You can navigate to the subsites/lists to configure their settings.... Learn mor...
---

# Configuring subsite and list processing

The **Entity Configuration** tab displays configuration for the site collection. You can navigate to
the subsites/lists to configure their settings.

![sharepointadvancedentities_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/sharepointadvancedentities_thumb_0_0.webp)

- The Include column for each entity contains an indicator (tick or cross) showing whether the
  container is configured for crawling.
- The **Has Config?** column contains an indicator showing whether custom metadata mappings have
  been defined for the entity.
- The **Exclude** link in the last column allows you to exclude the selected list / subsite from
  crowling. For excluded entities, this column contains the **Include** link.

**NOTE:** Excluding the entity will not automatically remove content from the index. If content has
already been crawled, then it should be manually deleted via the QS; alternatively, you can
re-collect content source data.

When new content is defined for crawling (i.e. included), a re-index operation should be performed.

- The **Edit** link allows you to modify settings for the selected list or subsite. See below for
  details.

[<!-- Image removed: transparent.gif not found -->List Configuration](<javascript:void(0)>)

1. To modify list/library settings, select it and click Edit.
2. In the properties window, configure **Content Fields** and **Special Field mapping** as needed.
   You can use the dropdown lists/selectors to search for and assign SharePoint fields to the
   appropriate mappings.

Consider the following:

- In the absence of a list level configuration the collector will automatically use the subsite
  level mapping (on a field by field basis).
- In the absence of a list level configuration the appropriate source defaults will automatically be
  used.

[<!-- Image removed: transparent.gif not found -->Subsite Configuration](<javascript:void(0)>)

1. To modify subsite settings, select the subsite and click Edit.
2. In the properties window, configure **Content Fields** and **Special Field mapping** as needed.
   You can use the dropdown lists/selectors to search for and assign SharePoint fields to the
   appropriate mappings.

Consider the following:

- In the absence of a subsite level configuration the collector will automatically use the source
  level mappings (on a field by field basis).
- Content fields cannot be configured at the subsite level.

# Reviewing SharePoint Dashboard

The SharePoint dashboard is similar to the main reporting dashboard, with the results filtered to
SharePoint types. See Review Dashboards for more information on the reporting dashboard.

To open the SharePoint dashboard:

1. In the main window, click **SharePoint** tab.
2. Select **Dashboard** on the left.

Here you can examine:

- **Index size** diagram that shows index size for various entities (subsites, libraries, etc.)
- **Classification coverage** diagram that identifies the percentage of content that has had
  classifications applied, and the percentage that has not.

<!-- Image removed: sharepointdashboard.webp not found -->

# Setting advanced configuration

**Advanced SharePoint Configuration** allows you to define which content within the SharePoint site
collection will be crawled and to specify metadata mapping settings.

To open the Advanced SharePoint Configuration window:

1. Select the required SharePoint source in the list of **Sources**.
2. Click the multi-cog (**Advanced Configuration**) icon for it.

The following option tabs are available:

- Entity Configuration, where you can do the following:
  - Include / Exclude an entity (subsite/list)
  - Define custom metadata mappings per entity (see
    [Understanding custom metadata mappings](#understanding-custom-metadata-mappings))
- Source Defaults—Allow you to specify the default custom metadata mapping for the site collection.
- Configuration Viewer—Use this simple XML view to examine the raw configuration.

![sharepointadvancedsourceconfiguration_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/sharepointadvancedsourceconfiguration_thumb_0_0.webp)

### Understanding custom metadata mappings

Custom metadata mappings allows the user to map specific SharePoint fields to internal indexed
fields. There are two types of mapping:

- **Content Field Mappings** - The fields which listed as **Content Fields** will be extracted and
  indexed when the site collection is crawled.
- **Special Field Mappings** (Including _Date_ fields) - These mappings allow you to make use of the
  advanced filtering options available in the core search index. You can map any of the available
  SharePoint fields to some of the internal fields. For example, you can configure a SharePoint date
  field to be mapped into the "_Last Modified_" value, allowing results to be retrieved only if they
  are within a certain date range.

Mappings will be applied first as configured on the list-level settings, then the subsite-level
settings, and finally, the source-level settings. Thus, in the absence of a list level
configuration, the collector service will automatically use the mappings configured at the subsite
level (or global level, if there is no subsite configuration).

Mappings operate on a _Defaults_ basis (described later in this section.)

# SharePoint

This section contains information on how to configure tagging of your SharePoint content, exclude a
site from being processed, define custom configuration to your subsite, and other configuration
procedures.

In this article, we will cover:

- [Configuring Tagging](/docs/dataclassification/5.6.2/data-sources/managing-sources.md)
- [Setting advanced configuration](/docs/dataclassification/5.6.2/data-sources/sharepoint/sharepoint-server.md)
- [Configuring subsite and list processing ](/docs/dataclassification/5.6.2/data-sources/sharepoint/sharepoint-server.md)
- [Configuring defaults](/docs/dataclassification/5.6.2/data-sources/sharepoint/sharepoint-templates.md)
- [Managing list of exclusions](/docs/dataclassification/5.6.2/data-sources/managing-sources.md)
- [Reviewing SharePoint Dashboard](/docs/dataclassification/5.6.2/data-sources/sharepoint/sharepoint-server.md)
- [Working with SharePoint templates](/docs/dataclassification/5.6.2/data-sources/sharepoint/sharepoint-templates.md)

# SharePoint

The SharePoint section allows for one or more site collections to be queued for processing that
share the same set of crawling credentials.

The following versions of SharePoint are supported: 2010, 2013, 2016, 2019 and SharePoint Online.

If you wish to make other configuration changes before collection of the source occurs ensure you
tick the checkbox Pause source on creation.

![addsharepoint](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/sharepoint/addsharepoint.webp)

Complete the following fields:

| Option                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SharePoint URL        | - The root of the site collections to be added, by clicking the “(Multiple Urls)” link you can add multiple SharePoint Site Collections to be crawled against the same credentials.                                                                                                                                                                                                                                                                                                                                     |
| Username              | Enter username in the following formats: DOMAIN\USERNAME and USERNAME@DOMAIN.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Write Classifications | Enables synchronization of classifications back to the SharePoint managed metadata fields. The written classifications will be subject to the classification configuration for the site collection.                                                                                                                                                                                                                                                                                                                     |
| OCR Processing Mode   | Select documents' images processing mode: - Disabled – documents' images will not be processed. - Default – defaults to the source settings if configuring a path or the global setting if configured on a source. - Normal – images are processed with normal quality settings. - Enhanced – upscale images further to allow more.                                                                                                                                                                                     |
| Re-Index Period       | Specifies how often the source should be checked for changes. The number specifies the period in days. **NOTE:** Netwrix Data Classification monitors site collections to detect when a document is added/modified. These will then be queued for reprocessing. The source will still be checked for changes based on the re-index period in case any updates are not received. [See Manage Sources and Control Data Processing for more information.](/docs/dataclassification/5.6.2/data-sources/managing-sources.md) |
| Document Type         | Specify a value which can be used to restrict queries when utilizing the Netwrix Data Classification search index.                                                                                                                                                                                                                                                                                                                                                                                                      |
