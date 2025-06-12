# Qumulo Activity Auditing Configuration

The Netwrix Activity Monitor can be configured to monitor activity on Qumulo devices. To prepare Qumulo to be monitored, an account needs to be provisioned and the audit event format may need to be modified.

## Provision Account

Activity Monitor requires an account with the Observers role to monitor a Qumulo cluster. Follow the steps to create a new account in the Qumulo web user interface with the Observers role.

__Step 1 –__ Create a new user in __Cluster__ > __Local Users & Groups__.

__Step 2 –__ Assign the Observers role to the user using __Cluster__ > __Role Management__.

This credential will then be used when configuring the Activity Agent to monitor the Qumulo device.

## Verify Audit Event Format

Qumulo reports audit events in one of two formats: CSV and JSON. While the Netwrix Activity Monitor supports both, the JSON format is recommended as it provides more detail. In particular, it allows the product to distinguish between permission change events and attribute change events, presents granular information for permission changes, and includes user SIDs instead of just usernames. The advanced filtering of Microsoft Office activity also requires the JSON format.

The JSON format for audit events was introduced in Qumulo Core 6.0.1. The new format can be enabled via an SSH session to the Qumulo cluster.

Follow the steps to verify that audit event format and change the format, if needed.

__Step 1 –__ Connect to the Qumulo cluster with SSH.

__Step 2 –__ Execute the following command to log in:

`qq --host <ip-address-of-qumulo> login -u <user-name>`

The command will ask for the password.

__Step 3 –__ Execute the following command to check current format:

qq audit\_get\_syslog\_config

The format will be shown in the __format__ field. The old format is __csv__; the new format is __json__.

__Step 4 –__ Execute the following command to change the format, if needed:

qq audit\_set\_syslog\_config --json

The change willshould be reflected in the __format__ field.
