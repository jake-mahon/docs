# SIEM Templates Page

The SIEM Templates page is accessible from the Navigation pane under Configuration > SIEM. Privilege Secure can output events to third-party SIEM solutions for reporting, correlation, and notification. The SIEM Templates page determine the format and the nature of the event data.

Two out of the box templates are provided for most common use cases, CEF and LEEF. New templates can be configured according to the requirements of the target SIEM solution, and the specific event data that needs to be sent. Privilege Secure supports 1.0 versions of CEF and LEEF.

![SIEM Templates Page](../../../../../../../static/img/product_docs/threatprevention/threatprevention/admin/configuration/systemalerting/siemtemplates.webp)

## Custom SIEM Templates

Follow the steps to add a custom SIEM template to the Privilege Secure Console.

__Step 1 –__ Navigate to the __Configuration__ > __SIEM__ > __SIEM Templates__ page.

__Step 2 –__ Click the Plus icon.

![Add SIEM Template](../../../../../../../static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/page/siemtemplate.webp)

__Step 3 –__ Enter the following information:

- Template Name — Enter the name for the custom template.
- Description — Description of the policy
- Characters To Escape — Characters that need to be escaped
- Escape Characters — Characters used to escape
- Format — The event data string that will be sent to the SIEM Server is displayed in the Format field. This can be edited directly
- Event Picker — A list of events that can be sent is displayed in a scrollable list. To add events, position the cursor in the Format field and select the green plus icon next to the events you wish to add in the event picker

__Step 4 –__ Click __Save__ to create the new custom SIEM template.

The new custom SIEM template is added to the SIEM templates list.
