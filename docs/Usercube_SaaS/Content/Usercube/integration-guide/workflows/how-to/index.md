---
sidebar_position: 405
title: How To Create a Workflow
---

# How To Create a Workflow

This guide shows how to create a [Workflow](../../toolkit/xml-configuration/workflows/workflow/index "Workflow") through the XML configuration.

## Process

1. Declare a new [Workflow](../../toolkit/xml-configuration/workflows/workflow/index "Workflow") with given activities following Identity Manager's activity templates.
2. Configure the input [Form](../../toolkit/xml-configuration/user-interface/form/index "Form") with the right output type according to the purpose of the workflow.
3. Assign the adequate permissions via an [Access Control Rule](../../toolkit/xml-configuration/access-control/accesscontrolrule/index "Access Control Rule").
4. Add [Menu Item](../../toolkit/xml-configuration/user-interface/menuitem/index "Menu Item").
5. Add [Aspects](../../toolkit/xml-configuration/workflows/aspects/index "Aspects"), according to the purpose of the workflow.
6. Add optional elements if needed: [Workflows](../index "Workflows"); a [Configure a Homonym Detection](configure-homonym-test/index "Configure a Homonym Detection"); a [Customize Display Tables](../../ui/how-tos/custom-display-table/index)different from Identity Manager's default one.

## Examples

You can also find configuration examples for several types of workflow:

* [For Resource Creation (Mono Record)](workflow-create-mono/index)")

  How to create a workflow to create a new resource with a unique record.
* [For Resource Creation (Multi Records)](workflow-create-multi/index)")

  How to create a workflow to create a new resource with several records.
* [For Resource Update (No Record)](workflow-update-resource/index)")

  How to create a workflow to update an existing simple resource, i.e. to update, within a given existing resource, properties that do not involve records.
* [For Resource Update (Mono Record)](workflow-update-mono/index)")

  How to create a workflow to schedule the replacement of the unique record of an existing resource with a new one.
* [For Resource Update (Multi Records)](workflow-update-multi/index)")

  Create a workflow to update an existing resource through its several records.
* [Configure a Homonym Detection](configure-homonym-test/index "Configure a Homonym Detection")

  How to configure the homonym search that checks if a resource already exists in the system, preventing duplicates.