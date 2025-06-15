# Mailbox Action Module

The Mailbox action module allows you to perform bulk operations on Microsoft Exchange mailboxes, for example deleting mailbox content and modifying permissions and delegates.

__CAUTION:__ This action module can add, change, or remove permissions and delegates from an environment. Always verify the data and target mailboxes prior to executing any action.

## Mailbox Action Source Table Configuration

All data tables used in Access Analyzer action modules require the presence of certain data columns. In addition, individual action modules including Mailbox may have their own column requirements. The Mailbox action module requires a column containing mailbox names.

## Configuration

Use the New Mailbox Action Wizard to target mailboxes or folders and to define the operation to perform against the selected objects. The wizard has the following pages:

- Welcome
- [Mailbox: Operations](operations.md)
- [Mailbox: Criteria Selection](criteriaselection.md)
- [Mailbox: Sampling Host](samplinghost.md)
- [Mailbox: Mailbox Identification](identification.md)
- [Mailbox: Folder Identification](folderidentification.md)
- [Mailbox: Folder Conditions](folderconditions.md)
- [Mailbox: Message Conditions](messageconditions.md)
- [Mailbox: Message Actions](messageactions.md)
- [Mailbox: Permissions](permissions.md)
- [Mailbox: Affected Mailboxes](affectedmailboxes.md)
- [Mailbox: Trusted Users](trustedusers.md)
- [Mailbox: Delegate Rights](delegaterights.md)
- [Mailbox: Summary](summary.md)

The Welcome page gives an overview of the action module. The steps navigation pane contains links to the pages in the wizard, which change based on the operation selected on the Operations page.

![New Mailbox Action Wizard Welcome page](../../../../../../static/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

To proceed, click __Next__ or use the Steps navigation pane to open another page in the wizard.
