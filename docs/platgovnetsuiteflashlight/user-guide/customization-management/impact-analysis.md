---
title: Customization Impact Analysis Tools
sidebar_label: Impact Analysis
description: Analyze customization dependencies and impacts with search tools for understanding how changes to fields, scripts, and workflows affect other customizations.
---

# Using Customization Impact Analysis

The Customization Impact Search displays customizations and any impacted customizations. For
example, it shows if a field is used in a script or a search. The Customization Impact Search tool
helps you understand how your customizations are impacted by changes to other customizations.

To access the Customization Quick Search:

1. From the NetSuite main menu, hover over Flashlight -> Customizations and click on Customization
   Impact Search Form.
2. Enter any criteria to filter the results as required.

   ![Impact Analysis Filters](/img/product_docs/platgovnetsuiteflashlight/using_flashlight/impactanalysis_800x422.webp)

3. Click **Submit** to run the report. Each row of the report displays a customization with the
   related dependencies. For example, you can see that a change to a given field in the system will
   have an impact on Scripts and Workflows that use the field.

   ![Impact Analysis Results](/img/product_docs/platgovnetsuiteflashlight/using_flashlight/impactanalysisresults_800x290.webp)

4. Click on **View** to navigate to the customization record to understand the impact and the
   dependencies for each customizations.

# Using Standard Field Impact Analysis

The standard field impact analysis tool enables you to find customizations using standard fields.
The report helps you understand how your customizations are impacted by changes to standard NetSuite
fields.

To access this report:

1. Open **Flashlight** > **Tools** > **Standard Field Impact Analysis**

   ![Standard Field Impact Analysis](/img/product_docs/platgovnetsuiteflashlight/using_flashlight/standardfieldimpactanalysis.webp)

2. You can optionally filter on the following fields:

- **Customization Type**: the type of Customization record that you wish to analyze
- **Standard Field Script ID**: the Script ID for the specific Standard Field that you wish to
  analyze

3. Click **Run** to execute your search.  
   For example, you can easily understand that a change to a given field in the system has an impact
   on Scripts and Workflows that leverage the field.

   ![Standard Field Impact Analysis Results](/img/product_docs/platgovnetsuiteflashlight/using_flashlight/standardfieldimpactanalysisresults_800x261.webp)
