# How To Create a Workflow

This guide shows how to create a
[ Workflow ](../../toolkit/xml-configuration/workflows/workflow/index.md) through the XML
configuration.

## Process

1. Declare a new [ Workflow ](../../toolkit/xml-configuration/workflows/workflow/index.md) with
   given activities following Identity Manager's activity templates.
2. Configure the input [Form](../../toolkit/xml-configuration/user-interface/form/index.md) with the
   right output type according to the purpose of the workflow.
3. Assign the adequate permissions via an
   [Access Control Rule](../../toolkit/xml-configuration/access-control/accesscontrolrule/index.md).
4. Add [ Menu Item ](../../toolkit/xml-configuration/user-interface/menuitem/index.md).
5. Add [Aspects](../../toolkit/xml-configuration/workflows/aspects/index.md), according to the
   purpose of the workflow.
6. Add optional elements if needed: [Workflows](../index.md); a
   [ Configure a Homonym Detection ](configure-homonym-test/index.md); a
   [Customize Display Tables](../../ui/how-tos/custom-display-table/index.md)different from Identity
   Manager's default one.

## Examples

You can also find configuration examples for several types of workflow:

- [ For Resource Creation (Mono Record) ](workflow-create-mono/index.md)

    How to create a workflow to create a new resource with a unique record.

- [ For Resource Creation (Multi Records) ](workflow-create-multi/index.md)

    How to create a workflow to create a new resource with several records.

- [ For Resource Update (No Record) ](workflow-update-resource/index.md)

    How to create a workflow to update an existing simple resource, i.e. to update, within a given
    existing resource, properties that do not involve records.

- [ For Resource Update (Mono Record) ](workflow-update-mono/index.md)

    How to create a workflow to schedule the replacement of the unique record of an existing
    resource with a new one.

- [ For Resource Update (Multi Records) ](workflow-update-multi/index.md)

    Create a workflow to update an existing resource through its several records.

- [ Configure a Homonym Detection ](configure-homonym-test/index.md)

    How to configure the homonym search that checks if a resource already exists in the system,
    preventing duplicates.
