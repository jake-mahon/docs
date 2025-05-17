---
sidebar_position: 5386
title: Box_ExternalUserCollaborations Job
---

# Box\_ExternalUserCollaborations Job

The Box\_ExternalUserCollaborations Job External Users are collaborators from outside your organization. They can be granted the same collaborator access and sharing rights as Managed Users, but there is limited control over the content they own and their security settings.

## Analysis Tasks for the Box\_ExternalUserCollaborations Job

Navigate to **Box** > **1.Activity** > **Forensics** > **Box\_ExternalUserCollaborations** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Box_ExternalUserCollaborations Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Box/Activity/Forensics/ExternalUserCollaborationsAnalysis.png "Analysis Tasks for the Box_ExternalUserCollaborations Job")

The following analysis tasks are selected by default:

* External User Collaboration Details – Creates the Box\_ExternalUserCollaboration\_Details table accessible under the job’s Results node
* External User Collaboration (Last 30 Days) – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box\_ExternalUserCollaborations Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| External User Collaborations | This report identifies high-risk collaborations, highlighting most active collaborations by invites of external users. | None | This report is comprised of two elements:   * Line Chart – Displays last 30 days of external user collaborations * Table – Provides details on external user collaborations |