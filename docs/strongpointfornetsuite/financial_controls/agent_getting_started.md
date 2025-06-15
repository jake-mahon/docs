# Getting Started with Agent

Before you set up your Agent controls, determine the roles you require and decide what types of
controls / searches you need.

## Role Examples

|                  |                                                                                                                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Control Owner    | - Defaults to the person that creates the control, but can be changed. - Receives alerts when a violation occurs. - May be a Change Request Approver to Pre-approve / Authorize related changes.        |
| Control Assignee | - Manages the process risk. - Receives alerts when a violation occurs. - Approves Change Requests to Pre-approve / Authorize related changes.                                                           |
| Process Owner    | - Owns the Process and associated material risk. - Receives alerts when a violation occurs. - Receives periodic control reports. - Approves Change Requests to Pre-approve / Authorize related changes. |

## Control/Search Examples

|                            |                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Record Control             | - Tracks all changes to the record (Customer, Vendor, Employee, Item) - Any changes trigger a violation record / alert.                                                                                                                                                                                                                                                                                  |
| Record Field Control       | - Tracks changes to specified fields in a record. - Changes on the specified fields trigger a violation record / alert.                                                                                                                                                                                                                                                                                  |
| Transactional Data Control | - Tracks changes to transaction records and events - Search types may be Journal entries, Checks, Bills, etc. - This data type can be monitored as a whole (i.e. any changes - additions, modifications, deletions), or specified (e.g. only Journal entries that have been modified after being approved, or journal entries entered and approved by the same user, or list of ad-hoc checks only etc). |
