# Assigned Profile

An assigned profile allows or denies to a user a scope of responsibility in Identity Manager.

Each assigned profile gives one profile and one profile context to a user. A user can have up to 10 assigned profiles.

For a given user, all the assigned profiles are matched against all the configured access control rules to compute the user's permissions in Identity Manager.

An assigned profile can be assigned explicitly to someone, or generated automatically based on users' data via profile rules.

## Properties

| Property | Details |
| --- | --- |
| AccessState   default value: 0 | __Type__    AccessState   __Description__   Access state ("None"=0, "Requested"=4, "PendingApproval"=8, "PendingApproval1"=9, "PendingApproval2"=10, "Approved"=16, "Declined"=17 and "PolicyApproved"=18). |
| Context   required | __Type__    Int64   __Description__   Identifier of the context. |
| Email   optional | __Type__    String   __Description__   If specified, email address used for notification instead of the user's address. |
| EndDate   default value: 20790606 | __Type__    DateTime   __Description__   Assignment end date. |
| IsDenied   default value: false | __Type__    Boolean   __Description__   Profile denied to the user. |
| Profile   required | __Type__    Int64   __Description__   Identifier of the profile. |
| StartDate   default value: 19000101 | __Type__    DateTime   __Description__   Assignment start date. |
| User   required | __Type__    Int64   __Description__   Identifier of the user. |
