---
sidebar_position: 5863
title: 'SQLViewCreation: Result Constraints'
---

# SQLViewCreation: Result Constraints

Use the Result Constraints page to impose restraints on the dataset.

![View and Table Creation Analysis Module wizard Result constraints page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Analysis/SQLViewCreation/ResultConstraints.png "View and Table Creation Analysis Module wizard Result constraints page")

Select one of the following options to choose if and how much data should be returned:

* Duplicate rows can appear in the result set
* Only unique rows can appear in the result set
* Return only [number] [unit] of the rows – Select this checkbox to specify a numeric value and unit of measurement to return for the rows that appear in the resulting table or view

  * With ties – Include all instances of identical values in the sorted columns with the results. To include only one instance of identical values, do not select this option.. See the [With Ties Example](#With "With Ties Example") topic for additional information.

    **NOTE:** This field is enabled by sorting at least one column in the table by value (for SQL, only a sorted column can contain ties). To sort columns, use the **Order By Operation** field on the Columns page. See the [SQLViewCreations: Columns](Columns "SQLViewCreations: Columns") topic for additional information.

## With Ties Example

The following example explains how the **With ties** option works.

![cid:image027.png@01D4CF75.96F2E110](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Analysis/SQLViewCreation/ExampleFull.png)

Consider a table that has ten rows with one repeating entry under the value column.

![cid:image025.png@01D4CF74.8A56D750](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Analysis/SQLViewCreation/ExampleReduced.png)

If the table is sorted by the value column in ascending order and the **Return only** option is set to **40 percent**, then there should be four rows visible in the resulting table or view output.

![cid:image026.png@01D4CF74.8A56D750](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Analysis/SQLViewCreation/ExampleReducedWithTies.png)

However, if the first three values in the sort column are unique but the fourth value matches the fifth, selecting the **With ties** option returns the first three rows as well as both the fourth and fifth rows for a total of five rows.

**NOTE:** If sorting multiple columns, **With ties** evaluates all sorted columns to determine ties between columns with the same inputs.