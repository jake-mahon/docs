# Threat Details Page

The Threat Details page provides details on the selected threat. View the details for a threat by
selecting the threat from the list on the [Threats Page](/docs/threatmanager/3.0/operations/threat-details/viewing-threats.md) and clicking View Details.

![threatdetails](/img/product_docs/threatmanager/threatmanager/administration/configuration/threatdetails.webp)

The top of the page displays a Threat Overview box, Threat Activity diagram, and an Evidence box.

The Threat Overview box that contains the following information:

- Description – Displays the threat type, the user account that generated the threat, a description
  of the threat activity and the host against which the threat occurred
- Threat Level – The relative severity level, or risk level, of the threat
- Threat Detected – The date and timestamp for the threat
- Definition – The threat definition is a detailed explanation of the threat providing insight into
  why the incident is a potential risk

The Threat Activity diagram contains a diagram that displays the flow of the threat activity.

![threatactivity](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/threatactivity.webp)

The Evidence box below the Threat Activity diagram provides specific information about the threat.

The Threats page displays three buttons in the top right corner:

![evidencebox](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/evidencebox.webp)

- Unassigned – If the threat has not been assigned to an owner, the button will display as
  Unassigned. If a user has been assigned to an owner, the button will display the username. Click
  it to open the Workflow Window where assigned user and/or status can be updated.
- Set Status – If no status is set for the threat the button will display as _Set Status_. If a
  status has been set for the threat then this button displays the status of the threat. Click it to
  open the Workflow Window, where assigned user and/or status can be updated.
- Threat Response – Click to open the Threat Response Window and designate the playbook to response
  to the threat.

## Workflow Window

The Workflow window displays the owner of a threat, or provides settings to assign an owner to a
threat.

![Workflow window](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/workflow.webp)

The Workflow window contains the following configuration settings:

**NOTE:** The information displayed on this page is dependent upon the type of threat selected.

- _(Optional)_ Assigned To – Displays the user currently assigned to the threat. Assign or edit the
  Assigned User using the drop-down list. The list populates with users granted access to the
  console on the User Access page of the System Settings interface. See the User Access Page topic
  for additional information.
- Set Status – Select a status for the threat from the drop-down list:

  - Open – Default status for new threats
  - Under Investigation – Threats that are currently under or pending investigation by an
    administrator
  - Closed - Resolved – Legitimate threats that have been contained or dealt with
  - Closed - False Positive – Behavior that has been incorrectly identified by Threat Manager as a
    threat

    **NOTE:** Abnormal behavior threat detection will be influenced by false positives. Marking
    abnormal behavior threats as False Positive will reduce the sensitivity of the abnormality
    detection for this perpetrator.

- _(Optional)_ Comment – Add a comment to the threat
- Ignore future threats of this type by (user) – Select this checkbox to ignore threats of this type
  from the selected user
- Submit – Click to update the workflow

In the Threat Activity Diagram, click the user to view the [User Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md) page. Click
the host to view the [Host Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md) page.

hhhhh

## Threat Response Window

The Threat Response window contains the following configuration options:

![Threat Response window](/img/product_docs/threatmanager/threatmanager/administration/configuration/threatresponse.webp)

- Select Playbook – Select a playbook for the threat response
- Description – Description of the playbook that has been selected
- Status – The state of the playbook
- Last Executed – When the playbook was last executed

The Threat Details Overview contains the following tabs:

- Event Details Tab
- Related Threats Tab
- Related Activity Tab
- History Tab

## Event Details Tab

The Event Details tab shows details for the selected threat.

![eventdetails](/img/product_docs/threatprevention/threatprevention/reportingmodule/investigations/eventdetails.webp)

- Time Stamp – The exact date and time when the event occurred
- Target – The specific object, resource, or entity that was the focus of the event
- Perpetrator – The user or service account that initiated the event
- Successful – Indicates whether the action associated with the event was successfully completed
  True if the operation was successful. False if the operation failed
- Blocked – Indicates whether the operation was prevented by a security measure, such as a Netwrix
  agent True if the operation was blocked by a Netwrix agent. False if not blocked.
- Operation – Type of operation performed
- Client – The device, IP address, or host that initiated the event
- Description – A summary of the event

Use the Search icon to search for data in the table. Click the + icon in the table to view
additional details about a threat. Click the Export CSV button to export the current rows displayed
on the page into a CSV file. Click the Export All button to export all data returned into a CSV
file.

## Related Threats Tab

The Related Threats tab lists other threats generated by the same user that may be related to the
threat listed in the Event Details tab.

![relatedthreats](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/relatedthreats.webp)

The Related Threats table has the following columns:

- Time Stamp – Time that the threat was detected
- Threat – Type of threat detected
- Status – Workflow status of the threat: Open, Under investigation, Closed - Resolved, or Closed -
  False Positive
- View Details – Click View Details to view the details page for the related threat

Use the Search icon to search for data in the table.

## Related Activity Tab

The Related Activity tab lists activity by the selected user that may be related to the threat.

![relatedactivity](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/relatedactivity.webp)

- Time Stamp – The exact date and time when the event occurred
- Target – The specific object, resource, or entity that was the focus of the event
- Perpetrator – The user or service account that initiated the event
- Successful – Indicates whether the action associated with the event was successfully completed
  True if the operation was successful. False if the operation failed
- Blocked – Indicates whether the operation was prevented by a security measure, such as a Netwrix
  agent True if the operation was blocked by a Netwrix agent. False if not blocked.
- Operation – The type of activity performed
- Client – The device, IP address, or host that initiated the event
- Description – A summary of the event

Use the Search icon to search for data in the table. Click the + icon in the table to view
additional details about a threat. Click the Export CSV button to export the current rows displayed
on the page into a CSV file. Click the Export All button to export all data returned into a CSV
file.

## History Tab

The History tab lists updates made to the threat in the Update box and provides a section to add
comments.

![history](/img/product_docs/threatprevention/threatprevention/admin/policies/history.webp)

The History table has the following columns:

- Add Comments – Type any desired comments in the box and click Add Comment
- Time Stamp – Exact date and time when the status was updated.
- Message – Displays the content of the comments entered by users or the system
- User – The name of the user who entered the comment

# Threats Page

The Threats page is where end-users and analysts investigate possible threats in their environment.
This page displays an historical timeline of the detected threats and advanced filtering that allows
users to find threats with ease.

## All Threats

The Threats section contains a bar chart and a pie chart. The Threats bar chart displays the number
of each type of threat by date range increments of one week, over a 13-week time span. The Threats
pie chart displays the total number of threats by type of threat.

![threatspage](/img/product_docs/threatmanager/threatmanager/administration/threatspage.webp)

Hover over the bar chart or pie chart to view the number of threats by threat type.

## Historical Events

The Historical Events section provides a drop-down menu to select threats for a specific date range.
Threats can also be filtered by specifying a timeframe. A predefined time span can also be selected
from the menu options in the right pane.

![historicalevents](/img/product_docs/threatmanager/threatmanager/administration/historicalevents.webp)

These threats are displayed in a list format below the Historical Events section.

## Threats List

The Threats list is displayed below the Historical Events section.

![threatlist](/img/product_docs/threatmanager/threatmanager/administration/threatlist.webp)

The list displays threats that have a threat level of Low, Medium, High, or Audit for the selected
timeframe. Each threat in the list contains a link which opens the
[User Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md) or the [Group Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md) and a
host link which opens the [Host Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md). In addition, threats have an
Edit button which opens the Edit Threats window. The View Details button opens the
[Threat Details Page](/docs/threatmanager/3.0/operations/threat-details/viewing-threats.md).

## Filter Threats

The left pane of the page, below Historical Events, lists filters that can be selected and applied
to display the threats. The filters listed are based on the threat types detected. Each filter is a
collapsible section that can be hidden or expanded using the arrow. To clear any currently-selected
filters, click the **Clear Filters** button.

### Type

The Type section displays the threat types which can be selected for filtering. This list of threats
to filter by is dynamic, depending upon the type of threats detected. See the following topics for
additional information:

- [Active Directory Threats](/docs/threatmanager/3.0/reference/threat-types/active-directory-threats.md)
- [Entra ID Threats](/docs/threatmanager/3.0/reference/threat-types/entra-id-threats.md)
- [File System Threats](/docs/threatmanager/3.0/reference/threat-types/file-system-threats.md)
- [General Threats](/docs/threatmanager/3.0/reference/threat-types/general-threats.md)

### Level

The Level section displays the threat types which can be selected for filtering. Levels are assigned
or configured on the [Threat Detection Page](/docs/threatmanager/3.0/administration/threat-management/threat-detection.md).

### Tags

The Tags section contains any tags associated with threats that are currently in the filtered time
range.

#### Sensitive Data

Sensitive Data tags are displayed in threats containing sensitive data when Access Analyzer and the
Sensitive Data Discovery Add-on are installed in addition to Threat Manager. When installed with the
Sensitive Data Discovery Add-on, Access Analyzer scans for sensitive data using File System
Sensitive Data Discovery Auditing. See the
[Netwrix Access Analyzer (formerly Enterprise Auditor) Integration](/docs/threatmanager/3.0/administration/integrations/netwrix-products.md)
topic for additional information. See the File System Solution topic in the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
additional information on Access Analyzer Sensitive Data Discovery capabilities.

When a threat event contains sensitive data, a Sensitive Data tag is displayed next to the threat:

![threatsensitivedatafilter](/img/product_docs/threatmanager/threatmanager/administration/threatsensitivedatafilter.webp)

To view the type of sensitive data contain in a threat, click View Details on the threat containing
a Sensitive Data tag. The type of sensitive data is displayed in the Sensitive Data column.

The following tables contain a Sensitive Data column:

- Event Details
- Related Activity
- Activity Details

Host

Filter on a host by selecting the checkbox next to the host or entering a host name in the search
box.

User

Filter on a user by selecting the checkbox next to the user or entering a user name in the search
box.

Status

The Status section may contain the following filters:

- Open – Default status for new threats
- Under Investigation – Threats that are currently under or pending investigation by an
  administrator
- Closed - Resolved – Legitimate threats that have been contained or dealt with
- Closed - False Positive – Behavior that has been incorrectly identified by Threat Manager as a
  threat

  **NOTE:** Abnormal behavior threat detection will be influenced by false positives. Marking
  abnormal behavior threats as False Positive will reduce the sensitivity of the abnormality
  detection for this perpetrator.

Assignee

The Assignee section provides the ability to filter by user. Select one or more users.

- Unassigned – Threat does not have a user assigned
- Assigned to me – Threat is assigned to the logged in user

## Edit Threats

Threats can be edited to assign a user, set a status, or ignore future threats of a specified type
using Threat Manager’s Incident Detection Response (IDR) workflow.

Follow the steps to edit a threat.

**Step 1 –** Select a threat from the list and click Edit. The Workflow window opens.

![editthreats](/img/product_docs/threatmanager/threatmanager/administration/editthreats.webp)

**Step 2 –** Enter the following information:

- (Optional) Assigned To – Select a user who has a role assigned via the User Access page on the
  System Settings interface to assign to a threat to. See the User Access Page topic for additional
  information.
- Set Status – Select the status for the threat from the drop-down list. Options include:

  - Open – Default status for new threats
  - Under Investigation – Threats that are currently under or pending investigation by an
    administrator
  - Closed - Resolved – Legitimate threats that have been contained or dealt with
  - Closed - False Positive – Behavior that has been incorrectly identified by Threat Manager as a
    threat

    **NOTE:** Abnormal behavior threat detection will be influenced by false positives. Marking
    abnormal behavior threats as False Positive will reduce the sensitivity of the abnormality
    detection for this perpetrator.

- (Optional) Comment – Add a comment to the threat
- Ignore future threats of this type by [domain\user]

**Step 3 –** Click Submit to save the changes.

Threats can also be edited from the [Threat Details Page](/docs/threatmanager/3.0/operations/threat-details/viewing-threats.md).
