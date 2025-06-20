# Plugins for Additional Actions

In addition to the common workflow actions provided out-of-the-box, you can set up additional
actions using the plugins. Either use sample plugins from the vendor, or create your own custom
plugins. Plugins should be stored in the dedicated folder, under _C:\Program
Files\ConceptSearching\Plugins_.

The following sample plugins (implemented as DLLs) can be provided upon request:

- FTP Migration action
- Http Save Files action
- Twitter action
- SQL Lookup

To search for the plugins within default location, go to the **Plugins** tab and click Detect
Plugins.

Click the Enable link to enable selected plugins.

![workflowplugins_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/workflows/workflowplugins_thumb_0_0.webp)

To modify workflow action implemented by a plugin, go to the **Configs** tab and click **Action
Configs** on the left.

# Understanding Workflows

A workflow allows you to configure an automated action that will be performed on a document,
following a classification decision. For example:

- Send an email message to personnel in charge
- Move or copy a document from one location to another, and many others.

To set up a workflow, you need to do the following:

- Specify conditions, defining the classification decisions that this workflow will act upon.
- Configure rules that will trigger your workflow actions.

- Select actions that will take place when one or more rule conditions are met.

Looking for real-life use cases and walk through examples? Check out Netwrix training materials. Go
the[ Netwrix website](https://www.netwrix.com/data_remediation_workflows.html) to find out how you
can easily reduce the exposure of your sensitive data.

See next:

- [Managing Workflows](/docs/dataclassification/5.6.2/workflows-automation/workflow-management/creating-workflows.md)
- [Workflow Actions](/docs/dataclassification/5.6.2/workflows-automation/workflow-actions/file-actions.md)
