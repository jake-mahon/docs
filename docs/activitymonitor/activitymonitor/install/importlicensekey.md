# Import License Key

The Activity Monitor comes with a temporary 10-day license. Uploading a new license key or importing a Access Analyzer key can be done from the Activity Monitor Console. If the Activity Monitor Console is installed on a server where Access Analyzer has already been installed, it reads the license information from the Access Analyzer installation directory.

Follow the steps to import a license key file.

![Activity Monitor Installation with Trial License](/img/product_docs/activitymonitor/activitymonitor/install/triallicense.webp)

__Step 1 –__ Click the `__Licensed to: <Trial User>__` hyperlink in the lower-left corner of the Console. Alternatively, click the __View License__ link in the yellow warning bar at the top. The License Information window opens.

![Trial License Information](/img/product_docs/activitymonitor/activitymonitor/install/triallicenseinfo.webp)

__Step 2 –__ Click Load New License File and navigate to where the key is located. A Windows file explorer opens.

![Open Dialog Box to load New License File](/img/product_docs/activitymonitor/activitymonitor/install/loadlicense.webp)

__Step 3 –__ Select the ```.lic``` file and click Open. The selected license key is then read.

![Activity Monitor License Information](/img/product_docs/activitymonitor/activitymonitor/install/licenseinfo.webp)

__Step 4 –__ In the License Information window, click __Apply__ to import the License Key.

![Activity Monitor with License](/img/product_docs/activitymonitor/activitymonitor/install/licenseadded.webp)

__Step 5 –__ The organization's license key is now imported into the Activity Monitor. The Console returns to the Agents tab and is ready to deploy activity agents.

__NOTE:__ License keys are crafted for companies based on their preference for Active Directory, Microsoft Entra ID (formerly Azure AD), File System, SharePoint, and SharePoint Online monitoring. Any environment that is omitted from the license has its corresponding features disabled.

Once a key has expired, the Console displays an Open License File… option for importing a new key. Once a new key is loaded, the Console returns to the Agents tab.
