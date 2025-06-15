# Creating Debugging Logs

To generate debugging logs for a script:

1. Open __Customization__ > __Scripting__ > __Scripts__
2. Set the filter for __Type__, enter the __Name__ and/or __ScriptID__.  
   This example generates logs for an Agent scheduled run:

   1. Filter __Type__ to __Workflow Action__ scripts
   2. Search for Name __Strongpoint Agent Control__ and ScriptID __customscript_flo_send_email_cust_search__
3. Set the deployment log of the script to __DEBUG__

When the error occurs, you can view or download the debugging log:

1. Open __Customization__ > __Scripting__ > __Script Execution Logs__
2. Filter the __Script__. For example, __Strongpoint Agent Control__
3. Filter the __Date__ to the date specified in the error message.
4. Filter the __Log Level__ to __DEBUG__
5. Download the log transcript as a CSV file or to Excel using the buttons on the form.
