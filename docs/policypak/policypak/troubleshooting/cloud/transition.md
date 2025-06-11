# How do I transition from Endpoint Policy ManagerCloud to Endpoint Policy Manager Group Policy Edition?

__Step 1 –__ Uninstall the Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud Client on the endpoints.  This will MAINTAIN the Endpoint Policy Manager Client Side Extension .

![585_1_jm-1_900x536](/img/product_docs/policypak/policypak/troubleshooting/cloud/585_1_jm-1_900x536.jpg)

__Step 2 –__ Leave in place -or- Upgrade to the LATEST Endpoint Policy Manager Client Side Extension using SCCM or PDQ Deploy Example: [https://www.policypak.com/video/managing-group-policy-using-Endpoint Policy Manager-and-pdq-deploy.html ](https://www.policypak.com/video/managing-group-policy-using-policypak-and-pdq-deploy.html)

__Step 3 –__ In Endpoint Policy Manager Cloud, you will already have some POLICIES. You can DOWNLOAD the policies from Endpoint Policy Manager Cloud like this. (see below.)

__Step 4 –__ Then in new GPOs, IMPORT the XML policies to the right node in a Endpoint Policy Manager on-prem GPO.

Note that some items might be restricted to COMPUTER or USER side, and may be actively prohibited on the "wrong" side. For those, you will have to recreate the policies.

![585_2_jm-2_900x438](/img/product_docs/policypak/policypak/troubleshooting/cloud/585_2_jm-2_900x438.jpg)
