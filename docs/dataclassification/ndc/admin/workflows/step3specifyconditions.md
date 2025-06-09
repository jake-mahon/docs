# Step 3. Specify Conditions for Processing

At this step, you can specify whether workflow actions should be performed with the classified documents only, or with any documents from the content source, etc.

![workflow_step3_condition](/img/product_docs/dataclassification/ndc/admin/workflows/workflow_step3_condition.png)

The following options are available:

- __Any Document__ — with this option selected, the workflow will be applied to all documents in the specified content source
- __Any Classified Document__ — with this option selected, the workflow will be applied to the documents in the specified source if they were tagged by any classification
- __Specific Classification__ — with this option selected, you need to specify whether to apply the workflow to the classified or non-classified documents
  - To process only documents classified by specific classification, select __Classified__ (this will act as including filter)
  - To process only non-classified documents, select __Not Classified__.

  If you have selected any of the __Specific Classification__ variants, you should then specify taxonomy terms that will be applied to filter out the documents for your workflow.
- Document Age - with this option selected, the workflow will be applied to the documents with a certain age requirement.

  You can select property to determine the file age:

  - Last modified date;
  - Last accessed date;

  You can also select the documents to be targeted:

  - Old;
  - New;

  You can also specify what age this workflow targets by populating the field.

[To configure terms](#To-configure-terms)

1. In the __Select Term__ field, click the tag icon.
2. In the __Details__ dialog, specify filter settings to use when filtering out the documents:
   1. __Taxonomy__ - select what classification taxonomy from the existing ones should be used.
   2. __All Terms__ - select this option if you want to filter by all terms in the taxonomy. If this option is cleared, then after selecting the necessary taxonomy, you will be presented the list of its terms. Select the one you plan to use for filtering.

   __NOTE:__ Multiple selection is not supported: to configure several filter values, you should repeat this procedure for each filter value you need.

   3. __Include Children__ - select this option if needed.
3. Finally, click __OK__ to save the settings and close the dialog.

Then verify that configured filters are displayed properly:

- Including filters (i.e. instructing to include documents with classification tag you selected) are colored blue:

![workflow_step3_filter_blue_thumb_0_0](/img/product_docs/dataclassification/ndc/admin/workflows/workflow_step3_filter_blue_thumb_0_0.png)

- Excluding filters (i.e. instructing to include documents without classification tag you selected) are colored red:

![workflow_step3_filter_red_thumb_0_0](/img/product_docs/dataclassification/ndc/admin/workflows/workflow_step3_filter_red_thumb_0_0.png)

If you have selected more than one filter, you will be prompted what logic should be used when applying the filters:

- To apply AND logic (i.e. the document must meet all filtering conditions), select __All__.
- To apply OR logic (i.e. the document must meet any of the filtering conditions), select __Any__.

## Example 1. Include All Files Classified as PDF

For example, you want your workflow to process all PDF files from the selected content source. Do the following:

1. Select __Specific Classification__ option.
2. Select __Classified__.
3. Click the tags icon in the __Select Term__ field on the right.
4. In the __Details__ dialog, from the __Taxonomy__ list select __File Type__.
5. Then from the list of file types select __PDF__ and click __OK__.

![workflow_step3_example_thumb_0_0](/img/product_docs/dataclassification/ndc/admin/workflows/workflow_step3_example_thumb_0_0.png)

After you get back to the wizard, the PDF filter will appear under the __Classified__ option, colored blue (indicating this filter is including).

## Example 2. Exclude HTML and XML Files

For example, you want your workflow to process all classified documents from the selected content source, except HTML and XML files. Do the following:

1. Select __Specific Classification__ option.
2. Select __Not Classified__.
3. Click the tags icon in the __Select Term__ field.
4. In the __Details__ dialog, from the __Taxonomy__ list select __File Type__.
5. Then from the list of file types select __HTML__ and click __OK__.
6. After you get back to the wizard, check that the PDF filter is shown colored red (indicating this filter is excluding).
7. Repeat steps 3-5 for the XML file type.
8. Under the __Require all conditions?__ prompt select __Any__ — for OR logic to be applied, so that any HTML or XML file should be excluded (in other words, the workflow will be applied only to the files not classified as HTML or XML).
9. Finally, click __Next__ to proceed.

![workflow_step3_example2_thumb_0_0](/img/product_docs/dataclassification/ndc/admin/workflows/workflow_step3_example2_thumb_0_0.png)
