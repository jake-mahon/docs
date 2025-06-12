# Effective Group Membership Event Type

The Effective Group Membership event type generates an event when security principals are added to or removed from specified groups.

The event filters for the Effective Group Membership event type are:

- AD Groups
- AD Perpetrator
- Success

![Policy window - Effective Group Membership Event Type](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/effectivegroupmembership.png)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated like an "ALL" for that filter set.

## AD Groups Filter

Use the AD Groups filter to set the scope of the policy to include groups for effective group membership change monitoring. Selecting a group in this filter scopes the policy to monitor membership of the specified group as well as all its nested groups.

![Policy window - AD Groups filter](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/adgroups.png)

Use the buttons to include Active Directory groups in the list.

- The Add (+) button opens the [Select AD Groups Window](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/window/selectactivedirectory/groups.md).
- The Remove (x) button deletes the selected item(s) from that box.

## AD Perpetrator Filter

Use the AD Perpetrator filter for monitoring to set the scope of the policy to only monitor specific security principals committing changes or to exclude specific security principals committing changes from being monitored.

![Event Type - AD Perpetrator Monitoring filter](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/adperpetratormonitoring.png)

Use the buttons in the Include Perpetrators, Include Collections, Exclude Perpetrators, and Exclude Collections areas to edit the lists.

- The Perpetrators Add (+) button opens the [Select Active Directory Perpetrators Window](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/window/selectactivedirectory/perpetrators.md).
- The Collection button opens the [List of Collections Window](/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/collectionmanager/listcollections.md) to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

__NOTE:__ To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/collectionmanager/dynamic.md) topic for additional information.

Sub Tree

![Sub-Tree option in event type filters](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/subtree.png)

When contexts are added, a Sub-Tree checkbox displays. Check it to apply the filter to the parent and all child contexts. Uncheck it to apply the filter to the listed context only.

## Success Filter

The Success filter is where the policy is set to only monitor successful events, failed events, or both.

![Event Type – Success filter](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/success.png)

Select the radio button for the desired monitoring filter:

- Success – Only monitors successful events
- Failure – Only monitors failed events
- Both Success and Failure – Monitors all events that are within the scope of the respective filters for the event type
