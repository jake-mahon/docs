---
sidebar_position: 1321
title: Resolving Non-Compliant Changes
---

# Resolving Non-Compliant Changes

To access the Open Non-Compliant Changes Report:

1. Open **Strongpoint** > **Change Management Reports** > **Open NonCompliant Changes**  
   The Non-Compliant Changes Report gives you a list of the [Change Logs](using_change_logs "Open Using Change Logs topic"). You can filter the report or sort by the column heads.

   ![](../../../../static/images/enus/Content/Resources/Images/noncompliantreport.png "Non-Compliant Change Report")
   ![](../../../../static/images/enus/Content/Resources/Images/noncompliant_flags.png "NonCompliant Flags")
2. A noncompliant change means something got changed without the required approvals. **View** each change log record to investigate the change, or use the [Mass Update](#Resolvin "Jump to procedure") procedure. You can retroactively attach a change request to a noncompliant change and get the necessary approvals for the change to be compliant.

   1. Create a New [Change Request](creating_change_request "Create or Open a Change Request") or open an existing one.
   2. Set it to **Pending Approval**.
   3. Once it is approved and complete, set the **Status** of the Change Request to **Complete**.
   4. **Edit** the Change Log from the report.
   5. Enter the **Related Change Request**.
   6. Enter the **Related Process Issue** if applicable.
   7. Enter the **Resolution Description**.
   8. Once all changes are made, select **Closed** for the **Status**.
   9. **Save** the Change Log.

## Resolving Open Non-Compliant Changes Using Mass Update

There are occasions where you want to resolve Open Non-Compliant Change Logs without going through each one manually. For example, if your Change and Approval Policy was incorrectly set-up or if it was in place before your Go-Live. For these scenarios Netwrix recommends you create a **Mass Update** to resolve all applicable incidents.

1. Open **Lists** > **Mass Update** > **Mass Updates**
2. Expand **General Updates**
3. Select **Change Log** from the **Custom Records** category.
4. Assign a meaningful **Title of Action**.
5. Set these filters on the **Criteria** tab:

   * **Inactive** is **False**
   * **Noncompliance** is **True**
   * **Status** is **None** of **Closed**, **Under Investigation**
   * **Change Level** is **Change Request**
   * **Date Created** is [*applicable range*]

     ![](../../../../static/images/enus/Content/Resources/Images/mass_update_filters_3.png "Set the Title of Action and the Filters")
6. Open the **Results** tab.
7. Set **Sort By** to **Date Created**
8. Set these Fields:

   * **Date Created**
   * **Status**
   * **Actual Change Date**
   * **Noncompliance**

     ![](../../../../static/images/enus/Content/Resources/Images/mass_update_filters_4.png "Select the Soft By and add Fields to Reults tab")
9. Open the **Mass Update Fields** tab.
10. Check these Fields:

    * **Resolution Description** and add a meaningful description of the Mass Update for **Value**.
    * **Status** and select **Closed** for the **Value**.

      ![](../../../../static/images/enus/Content/Resources/Images/mass_update_filters_5.png "Add the information on the Mass Update Fields tab")
11. **Save** the Mass Update.
12. Open **Lists** > **Mass Update** > **Saved Mass Updates**
13. Select the Mass Update you created.
14. Click Preview and verify the correct reports are included. Modify the Mass Update if needed.
15. Click **Perform Update** to run the update and resolve the applicable noncompliance issues.