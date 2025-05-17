---
sidebar_position: 3560
title: Upload XML Data File
---

# Upload XML Data File

Video: For an overview of this section, see the following video: [Endpoint Policy Manager Cloud: General Tips about On-Prem to PP Cloud Export](../../../Video/Cloud/Integration/OnPremiseExport "Endpoint Policy Manager Cloud: General Tips about On-Prem to PP Cloud Export").

You can use the **Upload XML Data File** action to create XML data files when you have used an on-prem MMC editor, have exported the policy, and are ready to use the policy in Endpoint Policy Manager Cloud. Most on-prem editors have an **Export as XML** option, which will create an XML file you can save. Otherwise, you can select **View as XML in Notepad**. Once you have the XML file in either format, you're ready for the next step.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_15_624x263.png)

Using the "Upload XML Data File" action in Endpoint Policy Manager cloud, you can then click on "Choose XML Policy File to add..." and select an XML file. Or you can paste in valid formatted text from Endpoint Policy Manager or Microsoft Group Policy Preferences.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_16_624x277.png)

Then you can edit the description and click **Add** to save your policy as an XML data file within Endpoint Policy Manager Cloud.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_17_312x396.png)

Video: We recommend you watch the following video to understand how to export all the various Microsoft Group Policy settings for import into Endpoint Policy Manager Cloud: [Endpoint Policy ManagerCloud: How to deploy Microsoft Group Policy Settings using Endpoint Policy Manager Cloud](../../../Video/Cloud/Deploy/GroupPolicySettings "Endpoint Policy Manager Cloud: How to deploy Microsoft Group Policy Settings using Endpoint Policy Manager Cloud").

Video: We recommend you watch the following video to understand how to export Endpoint Policy Manager settings to Endpoint Policy Manager Cloud: [Endpoint Policy ManagerCloud: How to deploy Endpoint Policy Manager specific settings (using in-cloud editors and exporting from on-prem)](../../../Video/Cloud/Deploy/PolicyPakSettings)").

*Remember,*  after XML data files are uploaded, they do not automatically enforce any settings on users' PCs. In order for settings to be enforced, those XML files should be linked to appropriate computer groups with computers assigned.