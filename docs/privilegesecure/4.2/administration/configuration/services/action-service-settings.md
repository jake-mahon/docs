# Action Service Settings Page

The Action Service Settings page is accessible from the Navigation pane under Configuration > System
Settings. It shows all action service settings to customize or override action timeout.

![settingspage](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/page/settingspage.webp)

The Action Service Settings page has the following features:

- Description — Description of the policy
- Timeout Override — Check this box to expose the current timeout override option
- Timeout Override (minutes) — Enter a time (in minutes) to customize or override the current action
  service timeout limit

# Action Service

On the Action Services page, view or modify action services.

![Action Service Page](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/servicetype/actionservicepage.webp)

The Action Service page shows details of the selected action service and has the following features:

- Name – Name of the selected action service
- Action Logs Tab
- Action Queue Tab
- Properties Tab

## Action Logs Tab

The Action Logs tab shows the event logs for the action service.

![Action Logs Tab](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/servicetype/actionlogstab.webp)

The Action Logs table has the following features:

- Search – Searches the Name column to match the search string. When matches are found, the table is
  filtered to the matching results.
- The Action Logs table has two buttons:

  - View Logs – View additional log information for the selected action
  - Refresh – Reload the information displayed

- Column headers can be sorted by ascending or descending order:

  - Name – Name of the action processed
  - Resource – The resource the action will run on
  - User – The account associated with the action
  - Status – Shows status information for the action:

    - Complete – Action completed successfully
    - Failed – Action failed

  - Start Time – Indications when the action started
  - End Time – Indications when the action completed

## Action Queue Tab

The Action Queue tab shows the tasks to be executed by the action service.

![Action Queue Tab](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/servicetype/actionqueuetab.webp)

The Action Queue table has the following features:

- Search – Searches the Name column to match the search string. When matches are found, the table is
  filtered to the matching results.
- The Action Queue table has two buttons:

  - View Logs – View additional log information for the selected action
  - Refresh – Reload the information displayed

- Column headers can be sorted by ascending or descending order:

  - Name – Name of the action to be executed
  - Resource – The resource the action will run on
  - User – The account associated with the action
  - Status – Shows status information for the action:

    - Complete – Action completed successfully
    - Failed – Action failed

  - Start Time – Indications when the action started
  - End Time – Indications when the action completed

## Properties Tab

The Properties tab shows additional information about the action service.

![Action Service Properties Tab](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/servicetype/propertiestab.webp)

The Properties table has the following features:

- Column headers can be sorted by ascending or descending order:

  - Name – Property of the Action Service and its host
  - Value – Value of the Action Service / host property
