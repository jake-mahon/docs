# Upload XML Data File

Video: For an overview of this section, see the following video: [Endpoint Policy Manager Cloud: General Tips about On-Prem to PP Cloud Export](/docs/policypak/policypak/video/cloud/integration/onpremiseexport.md).

You can use the __Upload XML Data File__ action to create XML data files when you have used an on-prem MMC editor, have exported the policy, and are ready to use the policy in Endpoint Policy Manager Cloud. Most on-prem editors have an __Export as XML__ option, which will create an XML file you can save. Otherwise, you can select __View as XML in Notepad__. Once you have the XML file in either format, you're ready for the next step.

![web_interface_and_controls_15_624x263](/img/product_docs/policypak/policypak/cloud/interface/xmldatafiles/web_interface_and_controls_15_624x263.png)

Using the "Upload XML Data File" action in Endpoint Policy Manager cloud, you can then click on "Choose XML Policy File to add..." and select an XML file. Or you can paste in valid formatted text from Endpoint Policy Manager or Microsoft Group Policy Preferences.

![web_interface_and_controls_16_624x277](/img/product_docs/policypak/policypak/cloud/interface/xmldatafiles/web_interface_and_controls_16_624x277.png)

Then you can edit the description and click __Add__ to save your policy as an XML data file within Endpoint Policy Manager Cloud.

![web_interface_and_controls_17_312x396](/img/product_docs/policypak/policypak/cloud/interface/xmldatafiles/web_interface_and_controls_17_312x396.png)

Video: We recommend you watch the following video to understand how to export all the various Microsoft Group Policy settings for import into Endpoint Policy Manager Cloud: [Endpoint Policy ManagerCloud: How to deploy Microsoft Group Policy Settings using Endpoint Policy Manager Cloud](/docs/policypak/policypak/video/cloud/deploy/grouppolicysettings.md).

Video: We recommend you watch the following video to understand how to export Endpoint Policy Manager settings to Endpoint Policy Manager Cloud: [Endpoint Policy ManagerCloud: How to deploy Endpoint Policy Manager specific settings (using in-cloud editors and exporting from on-prem)](/docs/policypak/policypak/video/cloud/deploy/policypaksettings.md).

_Remember,_  after XML data files are uploaded, they do not automatically enforce any settings on users' PCs. In order for settings to be enforced, those XML files should be linked to appropriate computer groups with computers assigned.
