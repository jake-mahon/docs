---
sidebar_position: 1417
title: Integration API
---

# Integration API

The Integration API enables external access to Customization and Change Request objects. Third party application are able to integrate via these APIs.

* **Customizations**
* **Change Requests** can be created, updated, retrieved and deleted.
* **ERD** and **Impact Analysis** tools are available.

* [Customizations API](customizations_api "Open Customizations API topic") can be retrieved from your NetSuite account and can be added and removed from your Change Requests.
  Here is the Customization API command:

  * [Get Customizations](get_customizations "Open Get Customizations topic"): Returns customizations based on your filters.
* [Change Request API](change_request_api "Open Change Request API topic") can be created, updated, retrieved and deleted. The ERD and Impact Analysis tools are available.
  Here are the Change Request API commands:

  * [Get Change Request](get_change_request "Open Get Change Request topic"): Returns the change request associated with an External ID.
  * [Add/Update Customizations in a Change Request](add_update_change_request "Open Add/Update Customizations in a Change Request topic"): adds/updates customization and/or proposed customizations.
  * [Delete Customizations in a Change Request](delete_customizations_change_request "Open Delete Customizations in a Change Request topic"): removes customizations and/or proposed customizations.
  * [Get ERD](get_ERD "Open Get ERD topic"): returns ERD URL links for each customization.
  * [Get Impact Analysis](get_impact_analysis "Open Get Impact Analysis topic"): returns the impact analysis data for each customization. Customizations are categorized as *Safe to Modify*, *Not Safe to Modify*, and *Inactive*.
  * [Push Change Request](push_change_request "Open Push Change Request topic"): pushes the external ticket details and creates an equivalent change request.

## Postman Links

Both the Customizations and Change Requests API documentation are published in [Postman](http://postman.com/ "Launch the Postman web site."). You can try out the API commands in the Postman interface.

* [Customizations](https://documenter.getpostman.com/view/30883336/2s9YeABubu "Try Get Customizations") API
* [Change Requests](https://documenter.getpostman.com/view/30883336/2s9YeABubr "Try the Change Request API") API