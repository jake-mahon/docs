# Apply Additional Classification

You can instruct the program to apply one or more additional classifications to the processed document. This workflow action is called __Manual Classification__ and can be configured via the __Advanced__ UI window.

Alternatively, you can configure a workflow action that permanently removes all existing classifications on a document and disables future auto-classification for it.

[![workflow_actions_man_classify_thumb_0_0](/img/product_docs/dataclassification/ndc/admin/workflows/advancedwindow/workflow_actions_man_classify_thumb_0_0.png)](/docs/dataclassification/resources/images/workflows/workflow_actions_man_classify.png)

To apply additional classification:

In the __Add Action__ dialog, from the __Action Type__ list select __Manually Classify__ under __Classification__, then configure the necessary terms as described below.

__NOTE:__ The terms you select must belong to a single taxonomy / termset.

To remove all classifications:

In the __Add Action__ dialog, from the __Action Type__ list select __Remove Classifications__ under __Classification__.

[To configure terms](#To-configure-terms)

1. In the __Select Term__ field, click the tag icon.
2. In the __Details__ dialog, specify filter settings to use when filtering out the documents:
   1. __Taxonomy__ - select what classification taxonomy from the existing ones should be used.
   2. __All Terms__ - select this option if you want to filter by all terms in the taxonomy. If this option is cleared, then after selecting the necessary taxonomy, you will be presented the list of its terms. Select the one you plan to use for filtering.

   __NOTE:__ Multiple selection is not supported: to configure several filter values, you should repeat this procedure for each filter value you need.

   3. __Include Children__ - select this option if needed.
3. Finally, click __OK__ to save the settings and close the dialog.

__NOTE:__ The additional classification will not trigger other workflows or affect the source item[See Classifications for more information.](/docs/dataclassification/ndc/admin/taxonomies/classifications.md)
