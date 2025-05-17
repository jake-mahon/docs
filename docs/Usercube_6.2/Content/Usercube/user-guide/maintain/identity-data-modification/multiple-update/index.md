---
sidebar_position: 1228
title: Update Multiple Identities
---

# Update Multiple Identities

How to perform a same change in data for several identities simultaneously.

:::note
This part is not about changing the data model, but data itself.
:::

## Overview

When a same change is needed by a high number of users, then Identity Manager provides a UI workflow to perform this change for all selected identities simultaneously.

> For example, if a whole department in the company is moved to a new working site, then all users working in said department must have their `Site` attribute updated.

## Participants and Artifacts

Given users' data can be updated occasionally by their managers, but most often by the HR department.

| Input | Output |
| --- | --- |
| Identity repository (required) New identity data (required) | Updated identity repository |

See the [Create the Workforce Repository](../../../set-up/initial-identities-loading/index) topic for additional information.

## Update

Perform multiple updates by proceeding as follows:

1. Click on **Multiple Updates**, accessible from the directory on the home page.

   ![Home Page - Multiple Updates](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Home_multipleUpdates_V523.png)
2. Follow the workflow's instructions to perform the change, assign new entitlements if needed, and send the request.

   ![Multiple Updates Form](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/DataModif_multipleForm_V602.png)

   :::note
If the workflow has been configured in this way, the update request may require a review. In this case, sending the request triggers the display of said request on the My Tasks screen for the reviewer, while the state of the request is pending. In this case, the requested updates will be displayed in Identity Manager only after the request has been reviewed.
   :::

   ![Request - Review Pending](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/DataModif_reviewPending_V523.png)

## Verify Data Update

In order to verify the process:

* Check manually a sample in the `User` directory accessible from the home page. You should verify at least your own sheet and the sheets assigned to your hierarchy.

  ![Home - Directory User](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Home_directoryUser_V523.png)
* Check that every organization still has a manager. Organizations are accessible in the `Department` directory on the home page.

  ![Home - Directory Department](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Home_directoryDepartment_V523.png)

  ![List of Departments](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/InitialLoad_departments_V602.png)

  :::note
If the system contains numerous organizations, it is also possible to list them with their managers through the Query module.
  :::
* Create reports with indicators, for example, on the number of workers per type or per organization (through Identity Manager's predefined reports, the Query module or Power BI), to ensure that Identity Manager's content sticks to reality. See the [Generate Reports](../../../administrate/reporting/index) topic for additional information.