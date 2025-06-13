# Transfer Ownership

The Transfer Ownership wizard provides a convenient way to:

- Assign ownership to orphan groups.
- Transfer group ownership (including Exchange 2016/2019 additional ownerships) from one recipient to another.

Depending on the number of groups and the amount of available bandwidth between GroupID and the messaging system server (such as Exchange server) or directory server, this process may take several minutes.

## Transfer the ownership of a group

1. In GroupID Portal, from the left pane, select __All Groups__ or __My Groups__ under __Groups__ and select __Transfer Ownership__ option on the top right corner.
2. On the __Containers__ page, click __Browse__ to select an organizational unit, domain, or the entire directory.

   Your selection determines where the wizard searches for the groups to transfer their ownership. The smaller the selection, the less time it takes to carry out the transfer.

   Specify whether to search for groups in sub-containers by selecting or clearing the __Include sub-containers__ check box.

   The scope of this setting varies, depending on the container that you selected in the previous step. The following table explains the actual structures searched when you select the Include sub-containers option:

   | Selected Container | Selecting Include sub-containers |
   | --- | --- |
   | Organizational Unit | Includes the Sub-organizational units in the search for required groups. |
   | Domain | Includes all organizational units and their sub-trees in the search for required groups. |
   | Entire Directory | Searches the entire forest. |

   NOTE: For Active Directory, if the search container is set to Global Catalog and Extension Data is not replicated to the Global Catalog, additional ownership of the groups will not be transferred.
3. Click __Next__.
4. On the __Existing Owner__ page, select one of the following:

   1. __No Owner__: To change the ownership of groups without owner.
   2. __Selected Owner__: To change the ownership of groups managed by a owner. This option includes all groups for which the selected owner is the primary owner, additional owner, or Exchange 2013/2016/2019 additional owner. After
      selecting this option, click __Browse__ and use the __Find__ dialog box to select the required owner.

   Click the __Preview__ button to view the list of groups that match the given criteria for ownership transfer.
5. Click __Next__.
6. On the __New Owner__ page, click __Browse__ to select a new owner using the __Find__ dialog box.
7. Click __Next__.
8. The __Summary__ page displays following details regarding Ownership

   1. __Existing Owner:__ It will display name of the owner who owns that group. In case of the group has no owner, it will display __None.__
   2. __Container:__ It will display the container name you selected in step 2.
   3. __Include Subcontainers:__ It will say __Yes__ if you have selected the __Include Subcontainers__ checkbox and __No__ otherwise.
   4. __New Owner__: It will display the name of new owner that you selected in step 6.
9. Click __Finish__ to complete ownership transfer.
10. The __Transferring ownership__ page displays the transfer progress. Click __Show Details__ to view object name and status.

    The page displays the distinguished names of all groups that
    have been successfully processed and transferred to the new owner. It also displays any errors that were encountered during the process.

__See Also__

- [Group Ownership Functions](/versioned_docs/groupid_11.0/groupid/portal/group/manage/groupownershipfunction.md)
