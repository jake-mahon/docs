# EasyVistaResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<EasyVistaResourceTypeMapping Identifier="Badge_User_NominativeUser" Connection="EasyVistaManual" TicketSynchroIsNotAvailable="true" RecipientId="EVEmployeeId" CatalogCode="42" UrgencyId="1" ImpactId="2" SeverityId="3" Title="C:/UsercubeDemo/Conf/EasyVista/TitleTemplate.txt" Description="C:/UsercubeDemo/Conf/EasyVista/DescriptionTemplate.txt" />

```

## Properties

| Property | Details |
| --- | --- |
| CatalogCode   required | __Type__    String   __Description__   Code of the catalog. It is possible to define three catalog codes, one for each provisioning action (add, modify, delete) by separating them with ```�```, for example ```42�25�43```. |
| Connection   required | __Type__    String   __Description__   Identifier of the corresponding connection. |
| RecipientId   required | __Type__    String   __Description__   Identifier of the ticket's recipient. |
| Description   optional | __Type__    String   __Description__   File path of the template used for the generation of the ticket description. |
| ImpactId   optional | __Type__    String   __Description__   [Impact](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#impact) of the ticket. |
| SeverityId   optional | __Type__    String   __Description__   [Severity level](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#severity-level) of the ticket. |
| TicketSynchroIsNotAvailable   default value: false | __Type__    Boolean   __Description__   ```true``` to set synchronization as unavailable for this resource type. Once the ticket is closed and the resource is created, updated or deleted, then the assignment's status is directly set to ```Verified```.   __Note:__ only used with the [package for tickets](/versioned_docs/usercube_6.1/usercube/integration-guide/connectors/references-packages/servicenow-ticket/index.md). |
| Title   optional | __Type__    String   __Description__   File path of the template used for the generation of the ticket title. |
| UrgencyId   optional | __Type__    String   __Description__   [Urgency level](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#urgency-level) of the ticket. |
