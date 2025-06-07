# Resolving Non-Compliant Changes

To access the Open Non-Compliant Changes Report:

1. Open __Strongpoint__ > __Change Management Reports__ > __Open NonCompliant Changes__  
   The Non-Compliant Changes Report gives you a list of the [Change Logs](/docs/product_docs/strongpointfornetsuite/change_management/using_change_logs.md). You can filter the report or sort by the column heads.

   ![Non-Compliant Change Report](/static/img/product_docs/strongpointfornetsuite/change_management/noncompliantreport.png)
   ![NonCompliant Flags](/static/img/product_docs/strongpointfornetsuite/change_management/noncompliant_flags.png)
2. A noncompliant change means something got changed without the required approvals. __View__ each change log record to investigate the change, or use the [Mass Update](#Mass-Update) procedure. You can retroactively attach a change request to a noncompliant change and get the necessary approvals for the change to be compliant.

   1. Create a New [Change Request](/docs/product_docs/strongpointfornetsuite/change_management/creating_change_request.md) or open an existing one.
   2. Set it to __Pending Approval__.
   3. Once it is approved and complete, set the __Status__ of the Change Request to __Complete__.
   4. __Edit__ the Change Log from the report.
   5. Enter the __Related Change Request__.
   6. Enter the __Related Process Issue__ if applicable.
   7. Enter the __Resolution Description__.
   8. Once all changes are made, select __Closed__ for the __Status__.
   9. __Save__ the Change Log.

## Resolving Open Non-Compliant Changes Using Mass Update

There are occasions where you want to resolve Open Non-Compliant Change Logs without going through each one manually. For example, if your Change and Approval Policy was incorrectly set-up or if it was in place before your Go-Live. For these scenarios Netwrix recommends you create a __Mass Update__ to resolve all applicable incidents.

1. Open __Lists__ > __Mass Update__ > __Mass Updates__
2. Expand __General Updates__
3. Select __Change Log__ from the __Custom Records__ category.
4. Assign a meaningful __Title of Action__.
5. Set these filters on the __Criteria__ tab:

   - __Inactive__ is __False__
   - __Noncompliance__ is __True__
   - __Status__ is __None__ of __Closed__, __Under Investigation__
   - __Change Level__ is __Change Request__
   - __Date Created__ is [_applicable range_]

     ![Set the Title of Action and the Filters](/static/img/product_docs/strongpointfornetsuite/change_management/mass_update_filters_3.png)
6. Open the __Results__ tab.
7. Set __Sort By__ to __Date Created__
8. Set these Fields:

   - __Date Created__
   - __Status__
   - __Actual Change Date__
   - __Noncompliance__

     ![Select the Soft By and add Fields to Reults tab](/static/img/product_docs/strongpointfornetsuite/change_management/mass_update_filters_4.png)
9. Open the __Mass Update Fields__ tab.
10. Check these Fields:

    - __Resolution Description__ and add a meaningful description of the Mass Update for __Value__.
    - __Status__ and select __Closed__ for the __Value__.

      ![Add the information on the Mass Update Fields tab](/static/img/product_docs/strongpointfornetsuite/change_management/mass_update_filters_5.png)
11. __Save__ the Mass Update.
12. Open __Lists__ > __Mass Update__ > __Saved Mass Updates__
13. Select the Mass Update you created.
14. Click Preview and verify the correct reports are included. Modify the Mass Update if needed.
15. Click __Perform Update__ to run the update and resolve the applicable noncompliance issues.
