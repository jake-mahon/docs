# Write a Template for a Ticket Connector

This guide shows how to write a template that will be used by a Ticket connector to complete the title and the description of the ticket.
The information which will be written in the ticket will come from the generated provisioning order and from literal strings written in the template.

## Attributes

| Name | Details |
| --- | --- |
| Username | __Type__    String   __Description__   Is the name of the user for which the ticket is created. |
| ResourceType | __Type__    String   __Description__   Is the identifier or the resource type. |
| UsercubeProfileLink | __Type__    String   __Description__   Is the link allowing to access the user profile. |
| AddedLinkedEntities | __Type__    List   __Description__   Is the list of links to add in the system. |
| RemovedLinkedEntities | __Type__    List   __Description__   Is the list of links to remove in the system. |
| DisplayAdd | __Type__    Boolean   __Description__   True if there are any links to add. |
| DisplayRemove | __Type__    Boolean   __Description__   True if there are any links to remove. |
| Entity | __Type__    Dictionary   __Description__   Is the list of values to assign to the resource. |
| ProvisioningOrder.ChangeType | __Type__    String   __Description__   Corresponds to the action of the provisioning order (Added, Deleted, Modified). |
| ProvisioningOrder.Changes | __Type__    Dictionary   __Description__   Is the list of changes. |
| ProvisioningOrder.Resource | __Type__    Dictionary   __Description__   Is the current state of the resource. |
| ProvisioningOrder.Owner | __Type__    Dictionary   __Description__   Is the owner of the resource. |

## Operations

The template uses the [Mustache](https://mustache.github.io/mustache.5.html) syntax.
Several operations are already provided, but you can find more on this [page](https://handlebarsjs.com/guide/builtin-helpers.html).

Identity Manager also provides a way of using conditions with Mustache for the following operations:

- ```>```: superior to
- ```<```: inferior to
- ```==```: equal to
- ```!=```: different from

### Example

```

{{#each ProvisioningOrder.Changes}}
    {{#ifCond this '==' 'INTERNAL'}}
        This account is for an internal employee.
    {{else}}
        This account is for an external employee.
    {{/ifCond}}
{{/each}}

```

This template goes through all the changes provided by the provisioning order. If any one of them meets the condition for an internal employee, we display the internal employee message. Several messages can be shown if several changes meet the condition.

## Template example

```

Please create a resource "{{ResourceType}}" for user {{Username}}.

For more information on the user, see: {{UsercubeProfileLink}}

{{#ifCond ProvisioningOrder.ChangeType '==' 'Deleted'}}
  To delete the account, please contact the IT team.
{{/ifCond}}

{{#each ProvisioningOrder.Changes}}
  This is a change: {{this}}
{{/each}}

The resource must have the following values:
{{#Entity.GetEnumerator}}
	- {{Key}}: {{Value}}
{{/Entity.GetEnumerator}}

{{#DisplayAdd}}
Add the following links:
{{/DisplayAdd}}
{{#AddedLinkedEntities}}
	- {{Name}}
{{#Values.GetEnumerator}}
		- {{Value}}: {{Key}}
{{/Values.GetEnumerator}}
{{/AddedLinkedEntities}}

```
