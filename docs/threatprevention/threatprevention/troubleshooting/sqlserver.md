# Restrict SQL Server Maximum Server Memory

For SQL Server 2012+, it is necessary to restrict the maximum server memory value to 60-70% of the total physical RAM to avoid a situation where SQL Server will starve other applications of memory. Follow the instructions to limit the amount of memory SQL Server uses.

![Microsoft SQL Server Management Studio showing database right-click menu](../../../../static/img/product_docs/threatprevention/threatprevention/troubleshooting/sqlservermanagementstudio.webp)

__Step 1 –__ In Microsoft SQL Server Management Studio, right-click on the SQL Server’s entry in the Object Explorer pane and select __Properties__.

![Server Properties window](../../../../static/img/product_docs/threatprevention/threatprevention/troubleshooting/serverproperties.webp)

__Step 2 –__ On the Memory page of the Server Properties window, modify the __Maximum server memory (in MB)__ value to be 60-70% of the total physical RAM. For example, if the server has 20 GB RAM, then scope the maximum server memory value to 12-14 GB (12000-14000 MB). Then click __OK__ to save the modification.

The SQL Server is now limited in its memory usage. When lowering maximum server memory, the change in the amount of memory being used by SQL server may not be immediately apparent. The SQL Server releases any used memory beyond the newly set maximum gradually.

See the [Best Practices and Troubleshooting](overview.md) topic for additional information.
