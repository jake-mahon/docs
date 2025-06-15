# Host Discovery Queries Activities Pane

The Activities pane provides several options for managing Host Discovery queries.

![Activities pane](../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/activities.webp)

The options are:

- Create Query – Opens the Host Discovery Wizard to create a new query
- Edit Query – Opens the Host Discovery Wizard with the selected query’s configuration
- Delete Query – Deletes the selected query and its generated host list

  - A confirmation window displays. Click __Yes__ to complete the deletion
- Run Query – Begins an immediate execution of the selected query
- Stop Query – Stops the selected query which is currently running

  - No action occurs if the query is __Idle__
- Suspend Query Queue – Removes the selected query from a scheduled queue

  - The Activities pane listing changes to __Resume Query Queue__. Click again to resume scheduled queue.
- Schedule – Opens the Schedule wizard to schedule query execution

  - See the [Schedule](../settings/schedule.md) topic for additional information on the Schedule wizard
- View Host List – Opens the [Host Management](../hostmanagement/overview.md) node directly to the selected query’s generated host list

These options are also available through a pop-up menu accessed by right-clicking on a query. __Create Query__ and __Suspend Query Queue__ are additionally available through a pop-up menu accessed by right-clicking on the __Host Discovery__ node.
