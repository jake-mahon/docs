# Add a Source and Connectors for SharePoint Online

Follow the steps to add a SharePoint Online source and connector(s) to your organization.

__Step 1 –__ Click __Configuration__ in the top bar. The Managed organizations page is displayed, that lists the managed organizations defined in 1Secure.

__Step 2 –__ Click an organization to define a data source and connector(s) for it. The properties page for the organization is displayed with the Sources tab selected by default.

__Step 3 –__ On the Sources tab, click __Add__ to add a source. The Select Data Source (Step 1 of 3) pane is displayed.

![Select Data Source %28Step 1 of 3%29 pane](../../../../../static/img/product_docs/1secure/admin/organizations/sourcesandconnectors/addsources_exchange.webp)

__Step 4 –__ Select __SharePoint Online__ and click Next.

![Configure Source Details %28Step 2 of 3%29 pane](../../../../../static/img/product_docs/1secure/admin/organizations/sourcesandconnectors/configuresourcedetailssharepoint.webp)

__Step 5 –__ On the Configure source details (Step 2 of 3) pane, specify the following settings:

- Source Group – Specify a name for the group to which the data source will belong. Grouping sources, such as computers, allows them to share a common configuration and makes it easier to manage related sources together.
- Tenant ID – The tenant ID of the app registered in Microsoft Entra ID. See the [App Registration and Configuration in Microsoft Entra ID](../../../configuration/entraid/registerconfig.md) topic for additional information.
- Crawl Source – Toggle this option to ON to enable data collection for the source
- Credentials – Displays the crdentials that have already been added, while also providing the option to add new credentials. Netwrix 1Secure uses these credentials to connect to the data source. You can select existing credentials or add new ones. To add new credentials, select __Add new Credentials__ from the drop-down menu or click the __Add__ icon, then specify the following:

  - Client ID – The client ID of the app registered in Microsoft Entra ID. See the [App Registration and Configuration in Microsoft Entra ID](../../../configuration/entraid/registerconfig.md) topic for additional information.
  - Client Secret – The client secret of the app registered in Microsoft Entra ID. See the [App Registration and Configuration in Microsoft Entra ID](../../../configuration/entraid/registerconfig.md) topic for additional information.
  - Download Certificate – For certain connectors, such as SharePoint Online State, authentication requires a certificate instead of a client secret. Download this certificate and then upload it to the app registered in Microsoft Entra ID. See the [Upload a Certificate](../../../configuration/entraid/registerconfig.md#upload-a-certificate) topic for additional information.
  - Display Name – Specify a name you want to show for your credentials. It will be displayed on the Credentials tab of the Managed Organizations page.

__Step 6 –__ Click __Next__.

![Choose New Connector %28Step 3 of 3%29 pane](../../../../../static/img/product_docs/1secure/admin/organizations/sourcesandconnectors/addsourcesharepointonlineconnector.webp)

__Step 7 –__ The Choose new connector (Step 3 of 3) pane lists three connectors for SharePoint Online. Specify the following:

- SharePoint Online Activity – Toggle the __SharePoint Online Activity__ switch to ON to collect and monitor data for this connector. With this, you can generate activity reports on SharePoint Online data. See the [SharePoint Online](../../searchandreports/activity.md#sharepoint-online) topic for additional information.

  - Audit SharePoint Online read access – Select this checkbox to audit the files with read access in SharePoint Online.
- SharePoint Online State – Toggle the __SharePoint Online State__ switch to ON to collect and monitor data for this connector. With this, you can generate state-in-time reports on SharePoint Online data. See the [State In Time Risks Reports](../../searchandreports/stateintime.md) topic for additional information.

  - Collect state-in-time data for personal OneDrives – Select this checkbox to collect state-in-time data for personal OneDrives.

- SharePoint Online Data Classification – Toggle the __SharePoint Online Data Classification__ switch to ON to allow 1Secure to read the documents in order to classify and label them based on the type of data they contain.

  - Run OCR to improve classification of images (increases processing time) – Toggle this switch to ON to use Optical Character Recognition (OCR) to scan images for text, which helps to classify the sensitive data more effectively. Note that this increases the processing time for data classification.
  - In the Sensitive Data Types to Classify area, specify how 1Secure would handle already classified documents and select which sensitive data types to detect as part of classification processing.
  > - Clear Sensitivity Label if not Classified as Sensitive – Toggle this switch to ON to automatically remove sensitivity label from a document that 1Secure detects as mislabeled and not sensitive.
  > - Allow overwriting existing Sensitivity Labels – Toggle this switch to ON to allow 1Secure to overwrite any existing sensitivity label applied to a document (such as when a label was applied manually) with a new label. Toggling OFF this switch indicates that the previously applied label takes precedence.
  > - Allow downgrading of existing Sensitivity Labels (if overwriting enabled) – Sensitivity labels can range from less restrictive to more restrictive, such as Public > Sensitive < Highly Critical. When this switch is toggled ON, it allows 1Secure to overwrite the label for a document, even when this label is less restrictive than the existing one. When toggled OFF, 1Secure will not be able to overwrite the existing label with a less restrictive one, even if overwriting is enabled. For example, if a document is already labeled as "Highly Critical", and 1Secure determines its sensitivity level as "Sensitive", it will not change it.
  > - Select the Enabled checkbox for each data type you want 1Secure to identify and label when classifying scanned documents. For example, you might enable PII but leave PCI DSS unchecked if it is not applicable to your organization. Available data types include CCPA, CMMC, Credentials, Financial Records, GDPR, GDPR Restricted, GLBA, HIPAA, PCI DSS, PHI, and PII. For each enabled data type, select a label from the Sensitivity Label drop-down menu. Once you map a label to a data type, that label will be applied to a document that contains the respective data type.

__Step 8 –__ Click __Finish__.

The SharePoint Online data source and connector(s) have been configured.
