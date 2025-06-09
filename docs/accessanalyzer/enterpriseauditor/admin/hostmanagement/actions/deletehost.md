# Delete Host(s)

Use the __Delete Host(s)__ option at the __Host Management__ node to permanently delete a host from the master host table, or at an individual host list node to remove the host from the selected list.

## Delete From Host Management Node

Follow the steps to delete a host from the Host Management node.

__Step 1 –__  In the Host Management node, select the host in the data grid and click __Delete Host(s)__ on the Activities pane.

![Confirm dialog box](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/actions/confirmdeletehost.png)

__CAUTION:__ A deletion from the host master table at the Host Management node cannot be undone, as it deletes it from the host management database tables. It also removes the host from any host list to which it has been assigned. Click __Cancel__ to stop the deletion.

__Step 2 –__ A dialog box asks for confirmation of the action. Click __OK__ to proceed with the deletion.

The host is no longer in the master host table.

## Delete From Individual Host List

Follow the steps to delete a host from an individual host list.

__Step 1 –__  In the host list, select the host in the data grid and click __Delete Host(s)__ on the Activities pane.

![Confirm dialog box](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/actions/confirmdeletehost.png)

__Step 2 –__ A dialog box asks for confirmation of the action. Click __OK__ to proceed with the deletion.

Access Analyzer checks to see if the host exists in any other static host lists. If so, the deletion is limited to removing the selected host from the current host list.

![Confirm deletion from master host table dialog box](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/actions/confirmdeletehostmaster.png)

__CAUTION:__ A deletion from the host master table cannot be undone, as it deletes it from the host management database tables.

__Step 3 –__  If the host is not found in another static host list, Access Analyzer asks if you also want to remove the host from the Host Master Table. On the Confirm dialog, select the desired action.

- Click __Yes__ to remove the host from all dynamic host lists and from the host master table
- Click __No__ to remove only the host for the current host list

The host is no longer in the host list.
