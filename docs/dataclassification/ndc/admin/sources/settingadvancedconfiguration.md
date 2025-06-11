# Setting advanced configuration

__Advanced SharePoint Configuration__ allows you to define which content within the SharePoint site collection will be crawled and to specify metadata mapping settings.

To open the Advanced SharePoint Configuration window:

1. Select the required SharePoint source in the list of __Sources__.
2. Click the multi-cog (__Advanced Configuration__) icon for it.

The following option tabs are available:

- Entity Configuration, where you can do the following:
  - Include / Exclude an entity (subsite/list)
  - Define custom metadata mappings per entity (see [Understanding custom metadata mappings](#Understanding-custom-metadata-mappings))
- Source Defaults—Allow you to specify the default custom metadata mapping for the site collection.
- Configuration Viewer—Use this simple XML view to examine the raw configuration.

![sharepointadvancedsourceconfiguration_thumb_0_0](/img/product_docs/dataclassification/ndc/configuration/configinfrastructure/sharepointadvancedsourceconfiguration_thumb_0_0.webp)

### Understanding custom metadata mappings

Custom metadata mappings allows the user to map specific SharePoint fields to internal indexed fields. There are two types of mapping:

- __Content Field Mappings__ - The fields which listed as __Content Fields__ will be extracted and indexed when the site collection is crawled.
- __Special Field Mappings__ (Including _Date_ fields) - These mappings allow you to make use of the advanced filtering options available in the core search index. You can map any of the available SharePoint fields to some of the internal fields. For example, you can configure a SharePoint date field to be mapped into the "_Last Modified_" value, allowing results to be retrieved only if they are within a certain date range.

Mappings will be applied first as configured on the list-level settings, then the subsite-level settings, and finally, the source-level settings. Thus, in the absence of a list level configuration, the collector service will automatically use the mappings configured at the subsite level (or global level, if there is no subsite configuration).

Mappings operate on a _Defaults_ basis (described later in this section.)
