---
sidebar_position: 1516
title: Activity Records
---

Filter: 

* All Files

Submit Search

# Activity Records

In Netwrix terms, one operable chunk of information is called the Activity Record. Netwrix Auditor Integration API processes both XML and JSON Activity Records. The Activity Records have the format similar to the following—the exact schema depends on operation (input or output).

| Format | Example |
| --- | --- |
| XML | ```
 ```
```
 ```
```
 ```
```
Who ```
```
Object Type ```
```
Action ```
```
What ```
```
When ```
```
Where ```
```
 ```
```
Unique ID ```
```
Name ```
```
 ```
```
Data source ```
```
 ```
```
Item name (Item type) ```
```
 ```
```
 ```
```
 ```
```
Before Value ```
```
After Value ```
```
Property ```
```
Text ```
```
 ```
```
 ```
```
 ```
```
... ```
```
 ```
|
| JSON | ```
[ ```
```
{ ```
```
"Action": "Action", ```
```
"MonitoringPlan": { ```
```
"ID": "Unique ID", ```
```
"Name": "Name" ```
```
}, ```
```
"DataSource": "Data source", ```
```
"Item": {"Name": "Item name (Item type)"}, ```
```
"DetailList": [ ```
```
{ ```
```
"Before": "Before Value", ```
```
"After": "After Value", ```
```
"PropertyName": "Property", ```
```
"Message": "Text" ```
```
} ```
```
], ```
```
"ObjectType": "Object Type", ```
```
"What": "What", ```
```
"When": "When", ```
```
"Where": "Where", ```
```
"Who": "Who" ```
```
}, ```
```
{...} ```
```
] ```
|

To feed data from a custom audit source to Netwrix Auditor, send a POST request containing Activity Records. [Write Activity Records](../WriteActivityRecords)

## Schema

The Activity Records you want to feed to Netwrix Auditor must be compatible with input schema. The output schema resembles the input schema and can be used to validate Activity Records returned by Netwrix Auditor before further data parsing.

| Format | Schema description |
| --- | --- |
| XML | The file must be compatible with the XML schema. On the computer where Auditor Server resides, you can find XSD file under *Netwrix\_Auditor\_installation\_folder\Audit Core\API Schemas*.  The `ActivityRecordList` root element includes the `ActivityRecord` elements. Each `ActivityRecord` contains values in the `Who`, `When`, `Where`, etc. fields. The `MonitoringPlan` element contains sub-elements such as `Name` and `ID`, the `Item` element contains `Name`. Both `MonitoringPlan` and `Item` are optional for input Activity Records. The `DetailList` element is optional too, it may include one or more `Detail` entries. The `Detail` element may contain sub-elements with values (e.g., before and after values). For input Activity Records, the data source is automatically set to Netwrix API.  minOccurs="0" indicates that element is optional and may be absent when writing data to the Audit Database. |
| JSON | Activity Records are sent as an array collected within square brackets [ ]. Each `ActivityRecord` object is collected in braces {} and contains values in the `Who`, `When`, `Where`, etc. fields. The `DetailList` field is not mandatory, it may include one or more detail. The `Detail` field may contain sub-fields with values (e.g., before and after values). For input Activity Records, the data source is automatically set to Netwrix API. |

## Example

The examples below show an output Activity Record.

|  |
| --- |
| XML |
| ```
 ```
```
 ```
```
 ```
```
Modified ```
```
 ```
```
{42F64379-163E-4A43-A9C5-4514C5A23798} ```
```
Compliance ```
```
 ```
```
Exchange Online ```
```
 ```
```
mail@enterprise.onmicrosoft.com (Office 365 tenant) ```
```
 ```
```
Mailbox ```
```
Shared Mailbox ```
```
2017-03-17T09:37:11Z ```
```
BLUPR05MB1940 ```
```
admin@enterprise.onmicrosoft.com ```
```
 ```
```
 ```
```
1 ```
```
2 ```
```
Custom_attribute ```
```
 ```
```
 ```
```
 ```
```
 ```
|
| JSON |
| ```
[ ```
```
{ ```
```
"Action": "Modified", ```
```
"MonitoringPlan": { ```
```
"ID": "{42F64379-163E-4A43-A9C5-4514C5A23798}", ```
```
"Name": "Compliance" ```
```
}, ```
```
"DataSource": "Exchange Online", ```
```
"Item": {"Name": "mail@enterprise.onmicrosoft.com (Office 365 tenant)"}, ```
```
"ObjectType": "Mailbox", ```
```
"What": "Shared Mailbox", ```
```
"When": "2017-03-17T09:37:11Z", ```
```
"Where": "BLUPR05MB1940", ```
```
"Who": "admin@enterprise.onmicrosoft.com", ```
```
"DetailList": [ ```
```
{  ```
```
"PropertyName": "Custom_Attribute", ```
```
"Before": "1", ```
```
"After": "2" ```
```
} ```
```
] ```
```
} ```
```
] ```
|