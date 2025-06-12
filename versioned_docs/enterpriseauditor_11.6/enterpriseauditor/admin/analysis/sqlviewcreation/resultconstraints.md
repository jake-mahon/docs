# SQLViewCreation: Result Constraints

Use the Result Constraints page to impose restraints on the dataset.

![View and Table Creation Analysis Module wizard Result constraints page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/resultconstraints.png)

Select one of the following options to choose if and how much data should be returned:

- Duplicate rows can appear in the result set
- Only unique rows can appear in the result set
- Return only [number] [unit] of the rows – Select this checkbox to specify a numeric value and unit of measurement to return for the rows that appear in the resulting table or view

  - With ties – Include all instances of identical values in the sorted columns with the results. To include only one instance of identical values, do not select this option.. See the [With Ties Example](#with-ties-example) topic for additional information.

    __NOTE:__ This field is enabled by sorting at least one column in the table by value (for SQL, only a sorted column can contain ties). To sort columns, use the __Order By Operation__ field on the Columns page. See the [SQLViewCreations: Columns](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/columns.md) topic for additional information.

## With Ties Example

The following example explains how the __With ties__ option works.

![cid:image027.png@01D4CF75.96F2E110](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/examplefull.png)

Consider a table that has ten rows with one repeating entry under the value column.

![cid:image025.png@01D4CF74.8A56D750](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/examplereduced.png)

If the table is sorted by the value column in ascending order and the __Return only__ option is set to __40 percent__, then there should be four rows visible in the resulting table or view output.

![cid:image026.png@01D4CF74.8A56D750](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/examplereducedwithties.png)

However, if the first three values in the sort column are unique but the fourth value matches the fifth, selecting the __With ties__ option returns the first three rows as well as both the fourth and fifth rows for a total of five rows.

__NOTE:__ If sorting multiple columns, __With ties__ evaluates all sorted columns to determine ties between columns with the same inputs.
