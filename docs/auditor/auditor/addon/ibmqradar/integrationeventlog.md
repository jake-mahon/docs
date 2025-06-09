# Integration Event Log Fields

This section describes how the add-on fills in the Netwrix Auditor __Integration__ event log fields with data retrieved from Activity Records.

The Activity Record structure is described in the [Reference for Creating Activity Records](/docs/auditor/auditor/api/activityrecordreference.md)topic.

| Event log field name | Filled in with value | Details |
| --- | --- | --- |
| Source | __NA____`{Data Source Name}`__  -OR-  __Netwrix \_Auditor\_Integration\_API__ | Depending on _SetDataSourceAsEventSource_ in-script parameter. |
| EventID | __`{Calculated by add-on}`__  -OR-  __0__ | Depending on _GenerateEventId_ in-script parameter (calculation result also depends on _IncludeDataSourceToMakeEventId_ parameter — if _GenerateEventId_ = _True_). |
| Task Category | __`{DataSource ID}`__  -OR-  __1__ | Depending on _SetDataSourceAsEventCategory_ in-script parameter. |

See the [Define Parameters](/docs/auditor/auditor/addon/ibmqradar/parameters.md) topic for additional information.

EventData is filled in with data from the Activity Record fields as follows:

| Entry in EventData | Activity Record field |
| --- | --- |
| DataSource | `{DataSource}` |
| Action | `{Action}` |
| Message | `{Action ObjectType}` |
| Where | `{Where}` |
| ObjectType | `{ObjectType}` |
| Who | `{Who}` |
| What | `{What}` |
| When | `{When}` |
| Workstation | `{Workstation}` |
| Details | `{Details}` |

Details are filled in only if this Activity Record field is not empty.

![eventlogexample_thumb_0_0](/img/product_docs/auditor/auditor/addon/solarwinds/eventlogexample_thumb_0_0.png)
