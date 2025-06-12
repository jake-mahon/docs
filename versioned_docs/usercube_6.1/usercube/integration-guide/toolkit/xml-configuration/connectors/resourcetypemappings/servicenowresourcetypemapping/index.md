# ServiceNowResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

Any resource type linked to a ServiceNow connection must be configured with a set of parameters to map the properties in Usercube with those in ServiceNow, for provisioning purposes.

Below is an example of an incident ticket in ServiceNow, where relevant properties (from Usercube's perspective) are emphasized:

![ServiceNow Ticket Example](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/connectors/resourcetypemappings/servicenowresourcetypemapping/servicenow_example.png)

## Examples

```

<ServiceNowResourceTypeMapping Identifier="ServiceNow_Entry_NominativeUser" Connection="ServiceNowExportFulfillment" PasswordResetSetting="ToSelf" DefaultObjectClass="sys_user">
  <Property Property="sys_id" IsDNProperty="true" />
</ServiceNowResourceTypeMapping>

```

## Properties

| Property | Details |
| --- | --- |
| Connection   required | __Type__    String   __Description__   Identifier of the corresponding connection. |
| DefaultObjectClass   optional | __Type__    String   __Description__   Default object class used by the provisioner, for example ```person```, ```organizationalPerson```, ```user```, etc.   __Note:__ multiple default object classes are separated with ```<br/>```. |
| PasswordResetSetting   optional | __Type__    String   __Description__   Identifier of the corresponding password reset setting. |
| TicketAdditionalInformation   optional | __Type__    String   __Description__   Information to add at the end of the description for all tickets created for this resource type.   __Note:__ only used with the [package for tickets](/versioned_docs/usercube_6.1/usercube/integration-guide/connectors/references-packages/servicenow-ticket/index.md). |
| TicketCallerId   optional | __Type__    String   __Description__   Attribute that corresponds to the identifier of the "caller" person in ServiceNow.   __Note:__ required when using the [package for tickets](/versioned_docs/usercube_6.1/usercube/integration-guide/connectors/references-packages/servicenow-ticket/index.md). |
| TicketCategory   optional | __Type__    String   __Description__   Category in which new tickets will be created in ServiceNow for this resource type.   __Note:__ only used with the [package for tickets](/versioned_docs/usercube_6.1/usercube/integration-guide/connectors/references-packages/servicenow-ticket/index.md). |
| TicketImpact   default value: Low | __Type__    TicketImpact   __Description__   Impact of the ticket in ServiceNow: ```Low```; ```Medium```; ```High```.   __Note:__ only used with the [package for tickets](/versioned_docs/usercube_6.1/usercube/integration-guide/connectors/references-packages/servicenow-ticket/index.md). |
| TicketSubCategory   optional | __Type__    String   __Description__   Subcategory in which new tickets will be created in ServiceNow for this resource type.   __Note:__ only used with the [package for tickets](/versioned_docs/usercube_6.1/usercube/integration-guide/connectors/references-packages/servicenow-ticket/index.md). |
| TicketSynchroIsNotAvailable   default value: false | __Type__    Boolean   __Description__   ```true``` to set synchronization as unavailable for this resource type. Once the ticket is closed and the resource is created, updated or deleted, then the assignment's status is directly set to ```Verified```.   __Note:__ only used with the [package for tickets](/versioned_docs/usercube_6.1/usercube/integration-guide/connectors/references-packages/servicenow-ticket/index.md). |
| TicketUrgency   default value: Low | __Type__    TicketUrgency   __Description__   Urgency of the ticket in ServiceNow: ```Low```; ```Medium```; ```High```.   __Note:__ only used with the [package for tickets](/versioned_docs/usercube_6.1/usercube/integration-guide/connectors/references-packages/servicenow-ticket/index.md). |
