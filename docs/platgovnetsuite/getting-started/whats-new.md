---
title: What's New in Platform Governance
sidebar_label: What's New
description: Latest updates and new features in Platform Governance for NetSuite including version 7.6 enhancements and NetSuite 2025.1 compatibility updates.
---

# What's New

## New Netwrix Community!

All Netwrix product announcements have moved to the new Netwrix Community. See announcements for
Platform Governance for NetSuite in the
[Platform Governance for NetSuite](https://community.netwrix.com/c/142) area of our new community.

## Netwrix Strongpoint for NetSuite 7.6

January 22, 2025

Netwrix is pleased to announce the general availability of Netwrix Strongpoint for NetSuite 7.6
available for pre-release on January 15th, 2025. To ensure you are using the latest version in all
accounts, update the Strongpoint bundle in your sandboxes as we are unable to push updates to them.
The upgrade to your production account will be implemented during off-peak hours starting January
22nd.

**Enhancement: Code Update to Support NetSuite 2025.1 Removal of the Ext JS Library.**

Strongpoint for NetSuite updates all of the scripts and bundles to be compatible with the NetSuite
2025.1 release. The NetSuite release removes the unsupported Ext JS Library. Refer to
[https://suiteanswers.custhelp.com/app/answers/detail/a_id/31709#subsect_0529105001](https://suiteanswers.custhelp.com/app/answers/detail/a_id/31709#httpssuiteanswerscusthelpcomappanswersdetaila_id31709subsect_0529105001)
for more information about the 2025.1 release.

## SoD 1.7

January 22, 2025

**Enhancement: Code Update to Support NetSuite 2025.1 Removal of the Ext JS Library.**

The SoD 1.7 bundle is available in conjunction with Netwrix Strongpoint for NetSuite 7.6. To ensure
you are using the latest version in all accounts, update the SoD bundle in your sandboxes after
updating to Strongpoint for NetSuite 7.6 as we are unable to push updates to them. The upgrade to
your production account will be implemented during off-peak hours starting January 22nd. If you are
an Enterprise Customer, we will push the SoD 1.7 bundle.

|                                            |                      |                                       |
| ------------------------------------------ | -------------------- | ------------------------------------- |
| Spider                                     | New Schedule         | Previous Schedule                     |
|                                            | Once a day, Off peak | Every 8 hours                         |
| Search                                     | Once a day, Off peak | Every 3 hours if a change is detected |
| Negative Deployment                        | Once a day, Off peak | Every time a change is detected       |
| Script Deployment                          | Once a day, Off peak | Every 8 hours                         |
| Negative Workflow                          | Once a day, Off peak | Every time a change is detected       |
| Workflow                                   | Once a day, Off peak | Every 8 hours                         |
| Role                                       | Once a day, Regular  | Once a day                            |
| Custom Record/Custom Field                 | Once a day, Regular  |                                       |
| Standard Record/Custom Field               | Once a day, Regular  | Every 6 hours                         |
| Custom List                                | Once a day, Regular  | Once a day                            |
| Subsidiary / Department / Class / Location | Once a day, Regular  | Once a day                            |
| Custom Segment                             | Once a day, Regular  | Once a day                            |
| Email Template                             | Once a day, Regular  | Once a day                            |
| Form Level Script                          | Once a day, Regular  | Once a day                            |
| Generic Negative Spider (for each type)    | Once a day, Regular  | Once a day                            |
