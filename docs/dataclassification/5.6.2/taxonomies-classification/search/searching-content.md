---
title: Browse
sidebar_label: Searching Content
description: To view the documents classified for each term, click on the Browse tab. This will display a list of documents achieving the minimum score set for... Learn m...
---

# Browse

To view the documents classified for each term, click on the Browse tab. This will display a list of
documents achieving the minimum score set for classification in the term.
[See Classification Rules (Clues) for more information.](/docs/dataclassification/5.6.2/taxonomies-classification/clues/creating-clues.md)

**NOTE:** This list will include the current classification status of each document and any changes
made to the class, since the last classification, are not taken into account.

The document text will be highlighted based upon the clues configured for the term. Highlighting
will include regular expression matches when configured (Config→Query Server→Enable Regex Browse
Highlighting (Advanced)).

**NOTE:** If a new class is selected in the treeview menu, the view will remain in "Browse" mode and
will show the documents for the selected class.

You can use the Browse function to:

- Identify documents that are receiving a score, but are "missing" being classified because they do
  not quite reach the terms threshold. For example, changing the mode to "Near Misses &lt;20%" for a
  term with a threshold of 50, will find any documents that scored 40 or more, but did not reach the
  threshold.
- Identify low scoring documents that are only just reaching the classification threshold. For
  example, changing the mode to "Low Scoring Documents &lt;20%" for a term with a threshold of 50
  will find any documents that scored between 50 and 60.

![browsetab_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/browsetab_thumb_0_0.webp)

To restrict the browsing scope, you can either add a URL filter, or add a custom filter, as well as
select to show document movements. These options are configured in the same way as for
[Search Documents by Clue](/docs/dataclassification/5.6.2/taxonomies-classification/search/searching-content.md).

# Search Index

Netwrix Data Classification uses two mathematical principles to achieve its results:

- Bayesian inference
- Shannon’s information theory

Bayesian inference is used to determine the weightings to be applied to individual words in the
query so that the words that are most useful in identifying the required concepts receive the
highest weightings. Initially, these weightings are based on the relative frequency of query terms
as distributed across the entire index. Where relevance feedback information is available then these
weightings are adjusted to tune the behaviour in favour of documents that are known to be relevant.

Shannon’s information theory is necessary when identifying concepts because the order in which words
appear has a great effect on meaning.

Nevertheless, the vast majority of retrieval systems available today would regard a document
containing all words from a user’s query to be 100% relevant – especially if all of the words are in
close proximity. However, this is much too simplistic an approach for effective concept
identification. For example, just because a sentence contains the words “money” and “order” does not
necessarily mean that the topic is about “money orders”.

Shannon’s information theory states that the more frequently a sequence appears the less
information, or entropy, it contains. Netwrix Data Classification uses this model to compute the
incremental value of compound terms over their lower order components. In this way we are able to
identify the word sequences that convey the most meaning and adjust the standard weightings
accordingly.

# Search and Filter Taxonomies

The taxonomies are displayed in a hierarchical structure on the left hand side of the page, allowing
for specific terms to be selected and managed. The dropdown list shows all available taxonomies.

**NOTE:** For the SharePoint Terms, they will be grouped by the SharePoint Term Group.

![treeview](/img/versioned_docs/dataclassification_5.6.2/ndc/taxonomies/treeview.webp)

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

- [Searching for Taxonomy Terms](#searching-for-taxonomy-terms)
- ["Sync Enabled" Treeview Filter](#sync-enabled-treeview-filter)
- [Source Filter](#source-filter)

## Searching for Taxonomy Terms

A search facility is provided to locate terms that contains specified text:

Click the magnifying glass icon to the right of the taxonomy dropdown and a new edit box appears
where search text may be entered:

![taxonomysearch](/img/versioned_docs/dataclassification_5.6.2/ndc/taxonomies/taxonomysearch.webp)

## "Sync Enabled" Treeview Filter

For SharePoint Term Sets the treeview can optionally be filtered to only show terms that are enabled
for synchronisation (configured on the term Settings screen).

This setting is session specific and applicable only to the current user:

![treeviewsyncfilter](/img/versioned_docs/dataclassification_5.6.2/ndc/taxonomies/treeviewsyncfilter.webp)

[See Taxonomy Settings for more information.](/docs/dataclassification/5.6.2/taxonomies-classification/managing-taxonomies/taxonomy-settings.md)

## Source Filter

A filter facility is also provided to restrict all search/browse results to a specific source. Click
the source filter link in the top right of the display, then, select a source:

![sourcefilter](/img/versioned_docs/dataclassification_5.6.2/ndc/taxonomies/sourcefilter.webp)

The filter setting can be stored for the session, or just maintained for the browser window.

# Search Documents by Clue

You can search for documents based on the class clues. For that, click on the name of any single
clue in the clue list in the management console (or even any suggested clue), go to the **Search**
tab and configure search settings.

![searchtab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/search/searchtab.webp)

1. Set up the following properties that will be considered a basis for the search:

   - Clue type – Select the required value from the **Type** list
   - Clue itself (clue body) – Enter the required keyword or phrase in the **Find** field

   **NOTE:** See the
   [Classification Rules (Clues)](/docs/dataclassification/5.6.2/taxonomies-classification/clues/creating-clues.md)
   topic for additional information

2. To restrict the search further, you can either add a **URL** filter, or add a custom filter by
   clicking **Add custom filter** link. This can be helpful when evaluating the usefulness of a clue
   by quickly examining its usage within the corpus. Consider the following:

   - The URL filter must end on a folder boundary.
   - Use custom filter to specify a number of complex filters: boolean, datetime and numeric.

   **NOTE:** Full description of all filters can be found in the API Reference Guide. You can
   access it by entering http://localhost/NDC/apidocumentation from your NDC server. If the
   originally installed version of NDC is 5.6 or older, the path is
   http://localhost/conceptqs/apidocumentation.

3. To view how recent changes to the term will affect the document classifications, select Show
   document movements. As a result, the “movement” of the document since the last classification
   will be shown. Possible scenarios are:

![movementskey](/img/versioned_docs/dataclassification_5.6.2/ndc/taxonomies/movementskey.webp)

OR

![documentmovements_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/taxonomies/documentmovements_thumb_0_0.webp)
