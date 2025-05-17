---
sidebar_position: 5972
title: "GroupPolicy:\_Category"
---

# GroupPolicy: Category

On the GroupPolicy Data Collector Category page, select the required query category to be executed.

![Group Policy Data Collector Wizard Category page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/GroupPolicy/Category.png "Group Policy Data Collector Wizard Category page")

The available categories are:

* Group Policy Objects – Retrieves the GPO’s list in the domain and where each is linked
* Policies State – Provides the ability to return information on configured policies and policy parts from the individual policies which have been selected

  * For example, selecting **Account Policies** > **Policy Password** will result in **Account Policies** > **Policy Password** being returned for the targeted domains
* Policies State for all GPOs – Provides the ability to return information on selected policy parts from all policies within the domain

  * For example, selecting **Account Policies** > **Password Policy** will result in **Password Policy** being returned for all policies in the targeted domains
* Local policies – Returns effective security policies in effect at the individual workstation