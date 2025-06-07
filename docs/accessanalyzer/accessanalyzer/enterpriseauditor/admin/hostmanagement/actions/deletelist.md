# Delete List

Use the __Delete List__ option to remove the selected list. This option is available only at an individual host list node.

___RECOMMENDED:___ Before deleting a host list, first ensure it is not assigned to a job.

__Step 1 –__ In the Navigation pane, select the host list to delete and click __Delete List__.

![Confirm dialog box](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/hostmanagement/actions/confirmdeletelist.png)

__CAUTION:__ This action cannot be undone. Click __Cancel__ to stop the deletion.

__Step 2 –__ On the Confirm dialog box, click __OK__ to continue with the deletion.

Access Analyzer checks to see if any hosts within the host list are found in any other static host lists.

![Confirm deletion of orphaned hosts from master host table dialog box](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/hostmanagement/actions/confirmdeletelistmaster.png)

__Step 3 –__  If no hosts are found in any other host list, then Access Analyzer asks if you want to remove the host from the master host table. On the Confirm dialog box, select the desired option.

- Yes – Deletes the specified host from the master host table
- No – Does not delete the specified host from the master host table
- No to All – Does not delete other hosts that are not found in another static host list from the master host table
- Yes to All – Deletes other hosts not found in any other static host list from the master host table

When the operation is complete, the list is no longer visible under the Host Management node in the Navigation pane and it cannot be used to execute jobs against.
