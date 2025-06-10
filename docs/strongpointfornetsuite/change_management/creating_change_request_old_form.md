# Creating a Change Request with the Old Form

These are the steps to create a Change Request using the old form. Refer to [Creating a Change Request](/docs/strongpointfornetsuite/change_management/creating_change_request.md) for the new form. Refer to [Setting Preferred Forms](/docs/strongpointfornetsuite/customizations/setting_preferred_forms.md) for information on designating your preferred Change Request form.

Before making any changes, it is important to understand the scope of the planned change, potential impacts and the level of change required.

To do this, in your __production__ account:

1. Open __Strongpoint__ > __Change Management Tools__ > __Change Request__ > __New__
2. Fill in the following fields in the __Main__ section of the change request:

   - __Name__: Add a name to the change request.
   - __Change Type__: Add the kind of change you want to make. ( For categorization purposes.)
   - __Owner__: Add who created the change request.
   - __External Change Request Number (optional)__: Add a number of the change request in any external change tracking system.
   - __External Link (optional)__: Add a link to any external record relevant to the change such as an external change management record.
   - __Completion Status (optional)__: Add the stage of completion for the change request.
   - __Parent Change Request (optional)__: link to other change requests.

   ![changerequestmain1](/img/product_docs/strongpointfornetsuite/change_management/changerequestmain1.webp)
3. Fill in the following fields in the __Scope__ section of the change request:

   - __Change Overview__: Add a summary of the desired change.
   - To add customizations you can use the Customization field and/or the Proposed Customization field or you can add the Affected Bundle ID:
     - __Customizations__: Use this field if you are changing objects that already exist in your account. (Can be used in conjunction with proposed customizations.)
     - __Proposed Customizations__: Use this field when you are adding customizations that do not yet exist in your account. You can add multiple Script IDs by separating them with commas. (Can be used in conjunction with customizations that already exist.)
     - __Affected Bundle ID__: If you are using a bundle to move objects from sandbox to production, use this field to add the bundle ID.

   ![scope-1](/img/product_docs/strongpointfornetsuite/change_management/scope-1.webp)

   ![scope-3](/img/product_docs/strongpointfornetsuite/change_management/scope-3.webp)
4. __Save__ the Change Request.
5. In the upper right hand corner, see the __Change Control Level Required__ and choose either:

- __Log Only__: you are planning on changing only Saved Searches that have no dependencies, so they are safe to change.
- __Change Request:__ you are planning on changing objects that require approval to change.

6. Click on __Impact Analysis__. This will show you how objects are connected to other things.
7. Scroll down to the bottom of the page and click on the __Impact Analysis__ tab.This shows you which customization record(s) can or cannot be safely modified as well as customizations that are inactive. You see a list of the customization record(s) that have been included, and warnings for impacted customization record(s) that need to be investigated before you make a change.

   ![impactanalysissubtab](/img/product_docs/strongpointfornetsuite/change_management/impactanalysissubtab.webp)

If you want to see if the change would have an impact in your sandbox, you can also create a change request in your sandbox account.
