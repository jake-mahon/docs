---
sidebar_position: 2948
title: Setting Advanced Configuration
---

Filter: 

* All Files

Submit Search

# Setting advanced configuration

**Advanced SharePoint Configuration** allows you to define which content within the SharePoint site collection will be crawled and to specify metadata mapping settings.

To open the Advanced SharePoint Configuration window:

1. Select the required SharePoint source in the list of **Sources**.
2. Click the multi-cog (**Advanced Configuration**) icon for it.

The following option tabs are available:

* Entity Configuration, where you can do the following:
  * Include / Exclude an entity (subsite/list)
  * Define custom metadata mappings per entity (see [Understanding custom metadata mappings](#HIW_custom_metadata_mapping))
* Source Defaults—Allow you to specify the default custom metadata mapping for the site collection.
* Configuration Viewer—Use this simple XML view to examine the raw configuration.

[![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/sharepointadvancedsourceconfiguration_thumb_0_0.png)](../../../Resources/Images/sharepointadvancedsourceconfiguration.png)

### Understanding custom metadata mappings

Custom metadata mappings allows the user to map specific SharePoint fields to internal indexed fields. There are two types of mapping:

* **Content Field Mappings** - The fields which listed as **Content Fields** will be extracted and indexed when the site collection is crawled.
* **Special Field Mappings** (Including *Date* fields) - These mappings allow you to make use of the advanced filtering options available in the core search index. You can map any of the available SharePoint fields to some of the internal fields. For example, you can configure a SharePoint date field to be mapped into the "*Last Modified*" value, allowing results to be retrieved only if they are within a certain date range.

Mappings will be applied first as configured on the list-level settings, then the subsite-level settings, and finally, the source-level settings. Thus, in the absence of a list level configuration, the collector service will automatically use the mappings configured at the subsite level (or global level, if there is no subsite configuration).

Mappings operate on a *Defaults* basis (described later in this section.)