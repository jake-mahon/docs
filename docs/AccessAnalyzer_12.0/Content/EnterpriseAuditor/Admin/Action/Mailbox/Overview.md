---
sidebar_position: 5746
title: Mailbox Action Module
---

# Mailbox Action Module

The Mailbox action module allows you to perform bulk operations on Microsoft Exchange mailboxes, for example deleting mailbox content and modifying permissions and delegates.

**CAUTION:** This action module can add, change, or remove permissions and delegates from an environment. Always verify the data and target mailboxes prior to executing any action.

## Mailbox Action Source Table Configuration

All data tables used in Access Analyzer action modules require the presence of certain data columns. In addition, individual action modules including Mailbox may have their own column requirements. The Mailbox action module requires a column containing mailbox names.

## Configuration

Use the New Mailbox Action Wizard to target mailboxes or folders and to define the operation to perform against the selected objects. The wizard has the following pages:

* Welcome
* [Mailbox: Operations](Operations "Mailbox: Operations")
* [Mailbox: Criteria Selection](CriteriaSelection "Mailbox: Criteria Selection")
* [Mailbox: Sampling Host](SamplingHost "Mailbox: Sampling Host")
* [Mailbox: Mailbox Identification](Identification "Mailbox: Mailbox Identification")
* [Mailbox: Folder Identification](FolderIdentification "Mailbox: Folder Identification")
* [Mailbox: Folder Conditions](FolderConditions "Mailbox: Folder Conditions")
* [Mailbox: Message Conditions](MessageConditions "Mailbox: Message Conditions")
* [Mailbox: Message Actions](MessageActions "Mailbox: Message Actions")
* [Mailbox: Permissions](Permissions "Mailbox: Permissions")
* [Mailbox: Affected Mailboxes](AffectedMailboxes "Mailbox: Affected Mailboxes")
* [Mailbox: Trusted Users](TrustedUsers "Mailbox: Trusted Users")
* [Mailbox: Delegate Rights](DelegateRights "Mailbox: Delegate Rights")
* [Mailbox: Summary](Summary "Mailbox: Summary")

The Welcome page gives an overview of the action module. The steps navigation pane contains links to the pages in the wizard, which change based on the operation selected on the Operations page.

![New Mailbox Action Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Action/Mailbox/Welcome.png "New Mailbox Action Wizard Welcome page")

To proceed, click **Next** or use the Steps navigation pane to open another page in the wizard.