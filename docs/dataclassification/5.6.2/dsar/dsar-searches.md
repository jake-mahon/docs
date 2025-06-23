# Manage Search Requests

The **Searches** interface may contain multiple requests. This section contains information on how
to work with searches to address specific tasks.

**NOTE:** To manage the search requests, users require sufficient access rights that are assigned by
the **Super User** (DSAR Administrator). See
[DSAR Roles](/docs/dataclassification/5.6.2/security-administration/user-management/dsar-roles.md) for details on the
available roles, their rights and permissions.

## Customize View

You can filter your requests by status. Select one of the following under Display Status:

- Active – shows all requests with "_Processed_" status (default view).
- Completed – shows all completed requests. Review the
  [View Search Query Results](/docs/dataclassification/5.6.2/dsar/dsar-results.md)
  section for instructions on how to complete your request.
- Canceled – shows all canceled requests. [See Cancel Search for more information.](#cancel-search)
- All – shows all search requests.

In addition to status, a DSAR Manager can filter search requests by owner. Select one of the
following under Owner:

- All – shows search requests submitted by anyone.
- Me – shows all requests submitted by current user.

In addition to filtering capabilities, you can sort search request by any column, e.g., _Percentage
Complete_, _Updated Date_, etc.

## Cancel Search

If a search request is pending, you can cancel it — this will prevent the search terms from being
included in the search when it runs.

To cancel a search request, do the following:

1. In administrative web console, navigate to Data Analysis → DSAR.
2. Locate the Searches tab.
3. Select queued search and click Cancel on the right.

## Template Search

You can use previous searches as a template i.e., clone the parameters of a previous search in order
to minimize the time required to initiate a similar (or identical) search.

To template search request, do the following:

1. In administrative web console, navigate to Data Analysis→DSAR.
2. Locate the Searches tab.
3. Select search and click Template on the right.

A new search window will appear, pre-populated with exactly the same criteria as above.

# Create Search Requests

Search requests are generally batched and run as one (with the scheduled time set by the Super
User/s), as this will deliver maximum performance, minimize impact across the estate and prevent
delays caused by queuing. You can create as many search requests as needed.

To create a search request:

1. In administrative web console, navigate to Data Analysis → DSAR.
2. Locate the Searches tab.
3. Click Add on the right.
4. Complete the following fields:

   | Option             | Description                                                                                                                                                                                                                                                                                                                             |
   | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Case ID            | Enter Case ID. The Case ID is the unique ID given to the request, to allow tracking throughout the process. **NOTE:** If you choose an existing Case ID, you will be prompted to confirm that you want to run another search for the same ID. This will prevent multiple identical searches from being run for the same search request. |
   | Last Name\*        | Enter the last name to associate search results with a particular individual. **NOTE:** The last name alone will be passed as a clue – the first name/s alone will not. The field is not case sensitive.                                                                                                                                |
   | First Name\*       | Enter the first name to associate search results with a particular individual. **NOTE:** The field can be used only in conjunction with the last name.                                                                                                                                                                                  |
   | Email Address      | Enter email address. Email addresses are unique, so if they are identified within a file, it should be deemed relevant to the request. **NOTE:** The field is case-sensitive.                                                                                                                                                           |
   | Reference          | Specify additional references to identify an individual. You can add as many additional parameters as needed. For example: Customer reference, Account reference, Claim reference, Account number, etc.                                                                                                                                 |
   | Enable Date Search | Limit your search by specific date range.                                                                                                                                                                                                                                                                                               |

\* - see Example

**TIP:** After discussion with stakeholders and customers, it has become clear that many subject
access requests (SARs) are initiated as a means of finding specific information (e.g. former
employees looking for a particular email trail, etc.). In this scenario, the data is far easier to
find and collate if the only data retrieved pertains to a specified date range rather than ALL data.

## Example

This example describes the search mechanism for **First name** and **Last name** combination.

A search for First name(s) _John Richard_ with the Last name _Smith_ will be searched for as:

- John R Smith
- John Smith
- John Richard Smith
- J.R. Smith
- J. R. Smith
- Smith, J.
- Smith, J R
- Smith, JR
- Smith

See also:

- [View Search Query Results](/docs/dataclassification/5.6.2/dsar/dsar-results.md)
- [Manage Search Requests](/docs/dataclassification/5.6.2/dsar/dsar-searches.md)
