# Unix: Parsing

The Parsing Configuration page configures the columns to return from the remote command and the parameters used to parse that output into those columns.

![Unix Data Collector Wizard Parsing Configuration page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/unix/parsing.png)

The configurable options are:

- Parse Columns – Select the checkbox to enable the parsing parameters options

  - Delimiter – Specify the delimiter
  - Ignore duplicate delimiters – Check the checkbox to enable
  - Delimiter Type – Select one of the following options:

    - Split on any delimiter character
    - Split on entire delimiter string
    - Split on delimiter regular expression
  - Handle additional delimited fields by – Select one of the following options:

    - Ignoring them
    - Inserting them as the last column in additional rows
    - Including them in the last column
- Columns – Use the buttons to add or remove columns

  - __Add__ – Opens the New Column window. Enter a new column name and click __OK__.
  - __Remove__ – Removes the selected column

Click __Next__ to continue the setup, or __Back__ to return to the previous page.
