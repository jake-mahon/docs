---
sidebar_position: 2968
title: Import a Taxonomy
---

Filter: 

* All Files

Submit Search

# Import a Taxonomy

To import an existing taxonomy go to the Global Settings tab, select Add and then choose one of the import options:

* SharePoint—The URL should be set to any site collection within the farm or tenancy, such as: https://netwrix.sharepoint.com. The supplied credentials must have access to both the site collection specified, as well as the termstore (preferably as a term store administrator).
* Upload—Imports an XML file directly into the SQL database, large taxonomies will be imported by the background services.
* Load—Certain taxonomies are provided out-of-the-box these can be fully used as part of the product or simply used as a reference for regular expression and metadata clues.

![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/addtaxonomies.png)

[Merge SQL Taxonomies](#)

SQL taxonomies also be easily merged / updated from the Global Settings page. Select the Update link for the taxonomy that you wish to update to load the taxonomy merge wizard:

![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/mergesqltaxonomyupdatelink.png)

Predefined taxonomies can be updated from the latest built-in definition or from an XML file in the standard taxonomy format:

[![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/mergesqltaxonomystage1_thumb_0_0.png)](../../../Resources/Images/mergesqltaxonomystage1.png)

The merge operation will automatically add any new terms, update the clues of existing terms, and when enabled delete terms that no longer exist in the new taxonomy definition.

[![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/mergesqltaxonomystage2_thumb_0_0.png)](../../../Resources/Images/mergesqltaxonomystage2.png)

Custom clues can be retained by selecting the option Retain custom clues. When enabled any clues not defined as Predefined will be retained. The Predefined flag can be viewed by selecting the "i" icon for a clue to display the following dialog:

![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/cluelabelreference.png)

Any predefined taxonomies that have been previously loaded will show an asterisk indicator when an update is available (post upgrade):

![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/mergesqltaxonomypredefinedindicator.png)

**NOTE:** The merge operation relies on matching the source definition to the destination definition - utilising the Term Id (GUID). If there are no matching ids then the merge operation will be automatically stopped. In this case the taxonomy should be deleted - and re-imported.

[Merge SharePoint Taxonomies](#)

SharePoint taxonomies can be merged with the use of the TermStoreManager tool (please see the associated user guide available via documentation downloads).

[Backup/Delete Taxonomies](#)

Existing taxonomies can be managed via the Global Settings tab:

[![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/taxonomyglobalsettings_thumb_0_0.png)](../../../Resources/Images/taxonomyglobalsettings.png)

Taxonomies can be exported as XML regardless of the taxonomy type, as well as removed. When removing SharePoint Term Set registrations the source Term Set remains intact - all that is removed is a link to the Term Store.

[Compare Taxonomy definitions](#)

User can compare current XML taxonomy definition (terms, clues, etc) to an updated/older definition. Comparison matches on the GUID of each term in the source/destination and ignores term movements. The following types of changes are detected: Term additions, term deletions, clue additions, clue deletions, and clue updates.

Do the following:

1. On the **Global Settings** tab, go to **Taxonomies**, select the one you need and click **Compare**.
2. In the **Compare** dialog, select what taxonomy definition to compare to:
   * To compare with the latest predefined definition, click **Yes**.
   * Otherwise, click **No** and browse to the required **comparison file**, i.e. the one that current taxonomy definition will be compared to.
3. Click **Compare** and wait for the process to complete. Examine the results.

[Bulk Updates](#)

The taxonomy update wizard allows large repetitive changes to be made to taxonomies in bulk. The wizard can be used to:

* Add Clues—Create a default standard clue, a default metadata clue, or simply define the clue template to be used.
* Update Clues—Update or replace text within the clue text and reference, adjust the score (statically or by percentage), set the local/predefined flags for each clue.
* Delete Clues—Remove specific/matching clues.

The wizard is started run by right-clicking a node within the treeview and selecting "Perform Bulk Update". Updates can be performed across the whole taxonomy by right-clicking the root node or scoped to a particular branch by right-clicking the top node of the intended branch:

![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/bulkupdatetreeview.png)

The wizard will then walk you through performing the update. Each update will allow you to restrict the scope of your change by specifying:

* Filters—filters for which terms/clues you wish to update (based on score, clue text, etc).
* Descendants Limit—specify how many levels down the update should process within the tree.
* Exclusions—specific terms to exclude from the update.

The update can either be performed immediately or in "report-only" mode. When report-only mode is used the scope of changes will be specified to the end-user—the end-user can then choose to commit the update which will perform the changes (or, leave the update if the scope was incorrect).

[![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/bulkupdate_thumb_0_0.png)](../../../Resources/Images/bulkupdate.png)

All updates, report-only or otherwise, can be found under the "Bulk Updates" tab. Updates are queued and processed in the background with the results exposed through this interface.

## Managing Term Sets

To manage the term set, select the taxonomy you need, then in the taxonomy tree browse to the required term set and click the **Term Management** tab on the right.

[![](../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/Taxonomies/Term_Management_thumb_0_0.png)](../../../Resources/Images/Taxonomies/Term_Management.png)

Then you can work with the tabs you need, including Search, Browse and Working Set tabs.

Review the following for additional information:

* [Classifications](Classifications)
* [Calculations](Calculations)