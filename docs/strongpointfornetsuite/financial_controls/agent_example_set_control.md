# Example: Set an Agent Control

Here is the process to create a control to monitor changes:

1. Create a Saved Search
2. Create the Customization Record
3. Designate the Customization as a Control

## Create a Saved Search

1. Open __Lists__ > __Search__ > __Saved Searches__ > __New__
2. Select __Employee__ for the __Search Type__
3. Add __Control Employee Purchase Limit and Purchase Approval Limit Control__ for __Search Title__
4. Check __Public__
5. Add filters on the __Criteria__ tab:

   ![Create the Saved Search for the Example](/img/product_docs/strongpointfornetsuite/financial_controls/agent_example1.webp)

   | Select Filter | What to Set | Resulting   Description | Formula To Set |
   | --- | --- | --- | --- |
   | Inactive | Select __No__ | Is false |  |
   | Formula (Numeric) | Select __less than__ for Formula (Numeric)   Enter __0__ for Value | is less than 0 | __\{datecreated\}-\{lastmodifieddate\}__ |
   | System Notes Fields | Select __Field__   Select __any of__   Click __Purchase Approval Limit__   Ctrl-Click __Purchase Limit__ | Is any of Purchase Approval Limit, Purchase Limit |  |
   | System Notes Fields | Select __Date__   Select __on or after__   Select __yesterday__ | is on or after yesterday |  |
   | Field | Summary Type |
   | --- | --- |
   | Name | Group |
   | System Notes: Field | Group |
   | System Notes: Date | Maximum |
   | System Notes: Old Value | Group |
   | System Notes: New Value | Group |
   | System Notes: Set by | Group |
   | Internal ID | Group |
6. Open the __Results__ tab. You can Remove all to clear the defaults. Add the following fields:

   ![Adding the Results columns](/img/product_docs/strongpointfornetsuite/financial_controls/agent_example2.webp)
7. __Save__ the search.
8. Note the assigned __ID__ for your new Search. For example, __customsearch5673__

## Create the Customization Record

You can wait until the next AutoSpider run, or manually create the customization record:

1. Open __Strongpoint__ > __Customizations__ > __Customization__ > __New__
2. Enter information in the required fields:
   - __Custom Form__: Use the __Simplified Form__, or select a different form if you want to add a __Process/Step__, such as __Financial__.
   - __Name__: Best practice is to enter a meaningful __Name__ and __Description__. For this example, __Name__ is the same as the Saved Search:  
     __Control Employee Purchase Limit and Purchase Approval Limit Control__
   - __Type__: Select __Search__
   - __Script ID__: Enter the __ID__ from your Saved Search. For example, __customsearch5673__

     ![Create the Customization for the Example](/img/product_docs/strongpointfornetsuite/financial_controls/agent_example3.webp)
3. __Save__ the customization.
4. Click __Respider Now__  
   Leave the Customization Record open.

### Designate the Customization as a Control

From the customization record:

1. Click __Edit__
2. Open the __Controls__ tab.
3. Check the __Control__ box.
4. Fill in the following fields:

- __Behavior__: Select __Log__.
- __Controlled Process__: If you added a __Process/Step__ when you created the customization, select it here.
- __Risk/Requirement__: Assign or create a new Control Process and Risk Requirement. For example, __1259 Purchase Order Controls__.
- __Control Error/Warning__: warnings or errors are displayed in this box.
- __Cross Match Control__, __Cross Match Field__ and __Cross Match Operator__ can be set to effectively perform a double join to filter your data and eliminate false positives. For example, a script to create an invoice from the user interface is saved to be run as administrator. A user creates the invoice from the interface as part of their work flow. Running a search for administrator-touched transactions causes false positives as the user is not an administrator. Using cross match, the first Saved Search is for all transactions by an administrator. The second Saved Search is an employee search using the administrator role. Cross Match returns the intersection of those two searches, showing only the transactions performed by administrators.
- Check the __Large Control__ box if the expected results for this control are over 1000.
- Set other optional values.

5. __Save__ the record.

   ![Designating the customization as a control](/img/product_docs/strongpointfornetsuite/financial_controls/agent_example4.webp)

The control is triggered as configured and all instances are logged under __Unresolved Control Incidents__, __Resolved Control Incidents__ or __Pre-approved Control Incidents__.
