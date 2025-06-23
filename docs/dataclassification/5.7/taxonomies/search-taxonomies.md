# Search Documents by Clue

You can search for documents based on the class clues. For that, click on the name of any single
clue in the clue list in the management console (or even any suggested clue), go to the **Search**
tab and configure search settings.

![searchtab](/img/product_docs/dataclassification/ndc/admin/taxonomies/searchtab.webp)

1. Set up the following properties that will be considered a basis for the search:

   - Clue type - select the required value from the **Type** list.
   - Clue itself (clue body) - enter the required keyword or phrase in the **Find** field.

   **NOTE:** [See Classification Rules (Clues) for more information.](/docs/dataclassification/5.7/taxonomies/clues/index.md)

2. To restrict the search further, you can either add a **URL** filter, or add a custom filter by
   clicking **Add custom filter** link. This can be helpful when evaluating the usefulness of a clue
   by quickly examining its usage within the corpus. Consider the following:

   - The URL filter must end on a folder boundary.
   - Use custom filter to specify a number of complex filters: boolean, datetime and numeric.

   **NOTE:** Full description of all filters can be found in the API Reference Guide.

3. To view how recent changes to the term will affect the document classifications, select Show
   document movements. As a result, the “movement” of the document since the last classification
   will be shown. Possible scenarios are:

![movementskey](/img/product_docs/dataclassification/ndc/admin/taxonomies/movementskey.webp)

OR

![documentmovements_thumb_0_0](/img/product_docs/dataclassification/ndc/admin/taxonomies/documentmovements_thumb_0_0.webp)

# Search and Filter Taxonomies

The taxonomies are displayed in a hierarchical structure on the left hand side of the page, allowing
for specific terms to be selected and managed. The dropdown list shows all available taxonomies.

**NOTE:** For the SharePoint Terms, they will be grouped by the SharePoint Term Group.

![treeview](/img/product_docs/dataclassification/ndc/admin/taxonomies/treeview.webp)

Right-clicking the tree view nodes provides a number of management options at both the term and
termset level including:

- Add Child Term
- Rename Term
- Delete Term
- Re-Classify Term
- Re-Classify Tagged
- Pin Term With Children
- Reuse Terms
- Export CSV

You can also drag-and-drop a node from one location on the tree view to another, once you have
dropped the node you can select to either move, copy, or merge the node(s).

Browser rendering restrictions limits the maximum suitable size per level within the tree view at
10,000 terms. Therefore we recommend that the tree view is structured across multiple branches, both
for performance and usability. Once a branch within the taxonomy reaches 10,000 terms the tree view
will cap the returned nodes and log a warning to the event logs.

Review the following for additional information:

- Searching for Taxonomy Terms
- "Sync Enabled" Treeview Filter
- Source Filter

[](#)Searching for Taxonomy Terms

A search facility is provided to locate terms that contains specified text:

Click the magnifying glass icon to the right of the taxonomy dropdown and a new edit box appears
where search text may be entered:

![taxonomysearch](/img/product_docs/dataclassification/ndc/admin/taxonomies/taxonomysearch.webp)

[](#)"Sync Enabled" Treeview Filter

For SharePoint Term Sets the treeview can optionally be filtered to only show terms that are enabled
for synchronisation (configured on the term Settings screen).

This setting is session specific and applicable only to the current user:

![treeviewsyncfilter](/img/product_docs/dataclassification/ndc/admin/taxonomies/treeviewsyncfilter.webp)

[See Taxonomy Settings for more information.](/docs/dataclassification/5.7/taxonomies/configuration/settings.md)

[](#)Source Filter

A filter facility is also provided to restrict all search/browse results to a specific source. Click
the source filter link in the top right of the display, then, select a source:

![sourcefilter](/img/product_docs/dataclassification/ndc/admin/taxonomies/sourcefilter.webp)

The filter setting can be stored for the session, or just maintained for the browser window.
