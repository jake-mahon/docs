# Filter Editor

Use the Filter Editor to create complex filters, filters for hidden columns, or to save and open regularly used filters. Press __CTRL__ + __F__ to open the Filter Editor, or click the __Filter Editor__ button in the lower right corner of the Data Console.

![using_the_data_console_9](/static/img/product_docs/passwordpolicyenforcer/passwordreset/administration/using_the_data_console_9.png)

A filter may contain several conditions. Conditions start with a column name, followed by an operator, and sometimes a value. Column names are shown in green, operators in maroon, and values in blue.

A filter also contains a root node and optionally one or more groups. These are used to include Boolean operators in the filter. Boolean operators are shown in red. Grouped conditions are indented.

The filter in the image above contains the root node, one group, and four conditions. It will show all reset requests in the last fourteen days originating from IP addresses starting with 192.168.115 or 192.168.119.

Click the __Click here to add a new condition__ button to add a new condition to the filter. Click the ellipsis button on the left of each line to add or remove conditions and groups. Click column names, operators, and values to edit them. Most can be selected from a list. Values can also contain the ? and \* wildcard characters.

Click __Save As...__ to save a filter to a file, or __Open...__ to use a saved filter. Click __OK__ to close the Filter Editor and apply the filter.

Some columns are hidden in the Data Console. You can use the Filter Editor to create filters for these columns. For example, the filter in the image below shows all users with an NPR v1 enrollment record.

![using_the_data_console_10](/static/img/product_docs/passwordpolicyenforcer/passwordreset/administration/using_the_data_console_10.png)
