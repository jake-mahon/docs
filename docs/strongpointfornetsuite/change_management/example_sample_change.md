# Example: Walkthrough Sample Changes

## New Object Compliant Change with a Change Request

1. Open __Strongpoint__ > __Change Management Tools__ > __Change Request__ > __New__
2. Enter a __Name__ and __Change Overview__.
3. Click __Lookup Customization__. Enter a sample __Name__ and set __Type__ to __Entity Field__.
4. Click __Add Selected Customization__ to add the field as a proposed customization.
5. Click __In Progress__ in the status bar.
6. Click __Save__. The Change Level Required, Current Stage and Change Policy are displayed.
7. For this example, if you are not an __Approver__:

   1. Click __Edit__.
   2. Select yourself as an __Additional Approver__.
   3. Set __Approval Status__ to __Approved__.
   4. Select yourself as __Approved By__.
   5. Click __Save__. The status bar indicates __Approved (Override)__.
  
 If you are an __Approver__:

1. Click __Pending Approval__ in the status bar.
2. Approve and Reject buttons appear for approvers. Click __Approve__.
3. The status bar indicates __Approved__.

## Create the Entity Field

1. Open __Strongpoint__ > __Customizations__ > __Customization__ > __New__
2. Add the __Name__ of your proposed entity field customization.
3. Select __Entity Field__ for __Type__.
4. Click __Save__.
5. Open the __Change Log__ tab to view the change.
6. Check __Customer__ on the __Applies To__ tab.
7. Open __Strongpoint__ > __Change Management Tools__ > __Change Request__
8. Select your __Change Request__ from the list.
9. Click __Respider Now__.

## Create a Compliant Change with a Change Request

1. Change the ____Entity Field____ (for example, apply it to __Vendor__) and click __Save__.
2. Open the Customization Record.
3. Click __ReSpider Now__.
4. Open the __Change Log__ tab to see the changes.
5. Open the Change Request and click __Complete__ in the status bar.

## Create a Non-Compliant Change

This change will be flagged as non-compliant and appear on the report as __Non-Compliant__.

1. Change the __Entity Field__ (for example, apply it to __Project__) and click __Save__.
2. Open the Customization Record.
3. Click __ReSpider Now__.
4. Open the __Change Log__ tab to see the changes.
5. Refresh the Changes Without Bundle Search to see that it is marked as Non-Compliant Yes and the Reason is Change Request.
6. View the __Change Log__.

## Open the Non-Compliant Changes Report

1. Open __Strongpoint__ > __Change Management Reports__ > __Open Non-Compliant Changes__
2. Set the __Date Created__ to __Today__
3. Resolve and close non-compliant change.
