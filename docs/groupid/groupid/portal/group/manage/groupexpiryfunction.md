# Group Expiry Functions

You can expire, renew or delete a group using Directory Manager portal. You can change expiry policy of a group and attest an expiring group, if required.

## Expire a group manually

Follow the steps to expire a group manually.

1. On the left navigation bar, click __Groups__ and then select the __My Groups__, __My Memberships__, or __My Expiring Groups__ tab.

   You can also [Directory Search](/docs/groupid/groupid/portal/search/search.md) the group you want to expire.
2. On the page displayed, select the required group and click __Expire__ on the toolbar.

NOTE: Note the following:

- When you try to manually expire a group with the expiry policy set to ‘Never Expire’, an error message is displayed, informing you that the group cannot be expired.
- When you manually expire a group with an expiry policy other than ‘Never Expire’, the group expires and is moved it to the [My Expired Groups](/docs/groupid/groupid/portal/group/myexpiredgroups.md) page.
- A group without an expiry policy will not expire.

  Directory groups that are created outside of Directory Manager do not have an expiry policy.

  In Directory Manager, you cannot distinguish groups with an expiry policy from group without an expiry policy because groups without an expiry policy are displayed with "Never Expire' set as policy.

If expired groups are not renewed within a specific period (set by the Directory Manager administrator in the Group Lifecycle policy for the identity store), they are logically deleted when the period ends. See Group life cycle job.

Logically deleted groups are moved to the [My Deleted Groups](/docs/groupid/groupid/portal/group/mydeletedgroups.md) page with the “Deleted_” prefix added to their names.

## Change the expiry policy for a group

When a group is created, it has its expiry policy set to 'Never Expire'. You can change this policy as required.

The Group Life Cycle job expires groups according to their respective expiry policies and moves them to the [My Expired Groups](/docs/groupid/groupid/portal/group/myexpiredgroups.md) page.

1. [Directory Search](/docs/groupid/groupid/portal/search/search.md) the group you want to change the expiry policy for.
2. Select this group on the __Search Results__ page and click __Properties__ on the toolbar.

   The group's [Group Properties](/docs/groupid/groupid/portal/group/properties/overview.md) page is displayed with the __General__ tab in view.
3. From the __Expiration Policy__ list, select the duration that the group would remain active for, starting today. The group expires when the period ends.

   If you select the _Other_ option from the list, two boxes are displayed under the Expiration Policy box. First, select an option (Days, Months, or Years) from the second list. Then enter a value for the selected option in the first box. The
   group will remain active for the duration you specify here.

   The __Expiration Date__ box displays the group's expiry date after you save the changes.
4. Click __Save__.

NOTE: If the Directory Manager administrator has specified this action for review, your changes will not take effect until verified by an approver. See [Requests](/docs/groupid/groupid/portal/request/overview.md).

## Attest an expiring group

See [Attest an Expiring Group](/docs/groupid/groupid/portal/group/manage/attestation.md).

## Renew an expired group

To use an expired group again, you can renew it. On renewal, the group becomes active again and its expiry policy is re-applied to it, starting from the date of renewal.

In the Group Life Cycle policy, the administrator can specify a period for retaining expired groups in the directory. If a group is not renewed within this period, the Group Life
Cycle job automatically deletes it from the directory.

1. On the left navigation bar, click __Groups__ and then select the __My Groups__ tab.
2. Go to __My Expired Groups__ tab and select the required group and click __Renew__ on the toolbar.
3. Click __OK__ to confirm the renewal.
