# Form

A form contains a set of input fields (called controls) to be filled by a user, in a structured way. A form must have a form type to be displayed and used in the UI. A form without a type can be called in another form.

## Examples

The following example shows a form called ```Directory_UserRecord_View``` that involves resources from the entity type ```Directory_UserRecord``` to collect personal data and contract information via some structured fields to fill.

```

<Form Identifier="Directory_UserRecord_View" EntityType="Directory_UserRecord">
    <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset">        <Control DisplayName_L1="Full Name" OutputType="LayoutRowset">            <Control Binding="LastName" />            <Control Binding="FirstName" />        </Control>        <Control Binding="Mail" ColumnSize="8" />    </Control>    <Control DisplayName_L1="Contract" OutputType="LayoutFieldset">        <Control Binding="EmployeeId" />        <Control Binding="ContractStartDate" />        <Control Binding="ContractEndDate" />        ...
    </Control>

</Form>

```

### Display settings

#### Hide the "Access Permissions" tab

When ```HideRoles``` is set to ```true```, then the __Access Permissions__ tab is not accessible.

![Access Permissions](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/user-interface/form/form_hideroles_v603.png)

#### Adjust the request type

When ```WorkflowRequestType``` is set to ```Self```, then the finalization step looks like:

![WorkflowRequestType = Self](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/user-interface/form/form_requesttypeself_v603.png)

When ```WorkflowRequestType``` is set to ```Helpdesk```, then the finalization step looks like:

![WorkflowRequestType = Helpdesk](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/user-interface/form/form_requesttypehelpdesk_v603.png)

#### Display records in a table

![RecordTable Example](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/user-interface/form/form_recordtable_v603.png)

## Properties

| Property | Details |
| --- | --- |
| Activity   optional | __Type__    Int64   __Description__   Defines the linked activity template. |
| ActivityState   optional | __Type__    Enumeration   __Description__   Defines the linked activity state template. |
| AddRowLabel\_L1   optional | __Type__    String   __Description__   Defines the "add row" button label when using WorkflowUpdateSeveralRecordsEntityForm. |
| EntityType   required | __Type__    Int64   __Description__   Represents the linked entity type. |
| FormTitle\_L1   optional | __Type__    String   __Description__   Title of the form in language 1 (up to 16). |
| FormType   default value: Auto | __Type__    FormType   __Description__   Represents the linked form type. |
| HideRecordAddButton   default value: false | __Type__    Boolean   __Description__   ```true``` to hide the button used to add a new record. |
| HideRecordRemoveButton   default value: false | __Type__    Boolean   __Description__   ```true``` to hide the button used to remove an existing record. |
| HideRoles   default value: false | __Type__    Boolean   __Description__   ```true``` to hide the __Access Permissions__ tab. |
| Identifier   required | __Type__    String   __Description__   Unique identifier of the form. |
| IsDefaultSelfForm   default value: false | __Type__    Boolean   __Description__   Entity type default self form. |
| IsDefaultViewForm   default value: false | __Type__    Boolean   __Description__   Entity type default view form. |
| IsDeleteForm   default value: false | __Type__    Boolean   __Description__   Is a delete form. |
| MainProperty   optional | __Type__    Int64   __Description__   Represents the form main property. |
| MainPropertyLabel\_L1   optional | __Type__    String   __Description__   Defines the main property label text. |
| Menu   optional | __Type__    Int64   __Description__   Defines the linked menu item. |
| RecordEndProperty   optional | __Type__    Int64   __Description__   Defines the workflow end date property. If not specified, the property �EndDate' of the record entity type is considered as RecordEndProperty. |
| RecordFilter   default value: CurrentAndFuture | __Type__    RecordFilter   __Description__   Defines the record display option.   ```0``` - Current: shows current positions.   ```1``` - CurrentAndFuture: shows current and future positions. Recommended.   ```2``` - All: shows past, present and future positions. Not recommended for clarity issues. |
| RecordProperty   optional | __Type__    Int64   __Description__   Defines the workflow record property. |
| RecordSortProperty   optional | __Type__    Int64   __Description__   Defines the workflow sort property. |
| RecordStartProperty   optional | __Type__    Int64   __Description__   Defines the workflow start date property. If not specified, the property �StartDate' of the record entity type is considered as RecordStartProperty. |
| RecordTable   optional | __Type__    Int64   __Description__   Identifier of the display table to be used to display resources' records in a workflow. |
| RemoveRowLabel\_L1   optional | __Type__    String   __Description__   Defines the "remove row" button label when using WorkflowUpdateSeveralRecordsEntityForm. |
| TableTitle\_L1   optional | __Type__    String   __Description__   Defines the table title when using WorkflowUpdateSeveralRecordsEntityForm. |
| WorkflowRequestType   default value: 0 | __Type__    WorkflowRequestType   __Description__   Type of the request of the related workflow.   ```0``` - None.   ```1``` - Self.   ```2``` - Helpdesk.   ```3``` - Administration. |

## Child Element: Control

A form control is an input field to be filled by a user. Controls can be inserted in other controls in order to display the form fields in a structured way.

### Examples

The following example shows a form called ```Directory_UserRecord_View``` that collects first personal data via some controls, and then calls another form ```Workflow_Directory_User_AddRecord_Base``` to collect record information.
In this example is a tree control which defines the relationships between a worker and their managers (N+1 to N+3). The aim is to display in the form (in the UI) the organization chart made of the worker and their managers.

```

<Form Identifier="Directory_UserRecord_View" EntityType="Directory_UserRecord">    <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset">        <Control DisplayName_L1="Full Name" OutputType="LayoutRowset">            <Control Binding="LastName" />            <Control Binding="FirstName" />        </Control>        <Control Binding="Mail" ColumnSize="8" />    </Control>    <Control DisplayName_L1="Contract" OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_AddRecord_Base" />    </Control>
    </Form>

```

### Properties

| Property | Details |
| --- | --- |
| AddedMinutes   optional | __Type__    Int32   __Description__   Add minutes to the date field with this property.   If the value is not defined, the default value is the one defined for the associated display entity property. |
| Binding   optional | __Type__    Int64   __Description__   Identifier of the binding property.   __Note:__ when displaying an organization chart, this binding is meant to represent the first manager level (N+1). In this case, it must be a mono-valued navigation. |
| Binding2   optional | __Type__    Int64   __Description__   Identifier of the binding property used to represent the second manager level (N+2) in the organization chart. It must be a mono-valued navigation. Cannot be used when ```Binding``` is not defined. |
| Binding3   optional | __Type__    Int64   __Description__   Identifier of the binding property used to represent the third manager level (N+3) in the organization chart. It must be a mono-valued navigation. Cannot be used when ```Binding2``` is not defined. |
| ColumnSize   optional | __Type__    Int32   __Description__   Defines the control column size. |
| DefaultValueBinding   optional | __Type__    Int64   __Description__   Automatically sets the value in the control depending on this binding and the selected value in another corresponding picker.   It's only available for controls with picker.   _For example:   ```<Control Binding="Location" DefaultValueBinding="Organization.Manager.MainLocation" />```   After a selection of an organization in another picker in the form, the field location will be automatically set by the main location of the manager of the selected organization._ |
| DisplayName\_L1   optional | __Type__    String   __Description__   Display name of the control in language 1 (up to 16). |
| DisplayTable   optional | __Type__    Int64   __Description__   Identifier of the table. |
| EmbeddedForm   optional | __Type__    Int64   __Description__   Identifier of the form to insert in the control. With this method, one form can be imported to several forms.   __Warning:__ can be used only with ```OutputType``` set to ```TransformImport```. |
| EntityType   optional | __Type__    Int64   __Description__   Represents the linked entity type. |
| ExtensionIdentifier   optional | __Type__    String   __Description__   This property is used to extend the Usercube UI. |
| FilterBinding1   optional | __Type__    Int64   __Description__   Coupled with LinkedBinding1, it allows filtering on a list of items. FilterBinding1 defines the binding that determines the search value. Linked filters are only available for controls with the ```Picker``` InputType. |
| FilterBinding2   optional | __Type__    Int64   __Description__   Coupled with LinkedBinding2, it allows filtering on a list of items. FilterBinding2 defines the binding that determines the search value. Linked filters are only available for controls with the ```Picker``` InputType. |
| HomonymEntityLink   optional | __Type__    Int64   __Description__   Defines the homonym form control. |
| InputType   default value: Inherited | __Type__    Enumeration   __Description__   Input type of the control. |
| IsReadOnly   optional | __Type__    Boolean   __Description__   Is a readonly form control. |
| IsRequired   optional | __Type__    Boolean   __Description__   Is a required form control. |
| LinkedBinding1   optional | __Type__    Int64   __Description__   Coupled with FilterBinding1, it allows filtering on a list of items. LinkedBinding1 defines the binding on which the search will be carried out. Linked filters are only available for controls with the ```Picker``` InputType. |
| LinkedBinding2   optional | __Type__    Int64   __Description__   Coupled with FilterBinding2, it allows filtering a list of items. LinkedBinding2 defines the binding on which the search will be carried out. Linked filters are only available for controls with the ```Picker``` InputType. |
| Name   optional | __Type__    String   __Description__   Identifies the control inside the Form. This is used for translation files when a control cannot be identified by its binding such as for FieldSet. |
| NavigationBinding   optional | __Type__    Int64   __Description__   Defines the binding of the resource on which the user will be redirected when he clicks on an element of a BasicCollection. If not defined, the one defined in DisplayEntityProperty is used. |
| OutputType   default value: Inherited | __Type__    Enumeration   __Description__   Output type of the control. |
| ParentControl   optional | __Type__    Int64   __Description__   Defines the parent form control. |
| PlaceHolderText\_L1   optional | __Type__    String   __Description__   Defines the place holder text. |
| Tile   optional | __Type__    Int64   __Description__   Identifier of the tile. |
