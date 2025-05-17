---
sidebar_position: 2957
title: Search Documents by Clue
---

Filter: 

* All Files

Submit Search

# Search Documents by Clue

You can search for documents based on the class clues. For that, click on the name of any single clue in the clue list in the management console (or even any suggested clue), go to the **Search** tab and configure search settings.

![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/searchtab.png)

1. Set up the following properties that will be considered a basis for the search:
   * Clue type - select the required value from the **Type** list.
   * Clue itself (clue body) - enter the required keyword or phrase in the **Find** field.

   **NOTE:**  [See Classification Rules (Clues) for more information.](Clues)
2. To restrict the search further, you can either add a **URL** filter, or add a custom filter by clicking **Add custom filter** link. This can be helpful when evaluating the usefulness of a clue by quickly examining its usage within the corpus. Consider the following:

   * The URL filter must end on a folder boundary.
   * Use custom filter to specify a number of complex filters: boolean, datetime and numeric.

   **NOTE:** Full description of all filters can be found in the API Reference Guide.
3. To view how recent changes to the term will affect the document classifications, select Show document movements. As a result, the “movement” of the document since the last classification will be shown. Possible scenarios are:

![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/movementskey.png)

OR

[![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/documentmovements_thumb_0_0.png)](../../../Resources/Images/documentmovements.png)