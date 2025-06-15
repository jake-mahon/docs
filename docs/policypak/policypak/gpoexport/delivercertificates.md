# Can I use Endpoint Policy Manager Cloud to deliver certificates ?

It is possible to configure __Security Settings__ > __Public Key Policies__ as shown in this example, by following thse steps:

__Step 1 –__ Create a real GPO.

![663_1_q10-img-1](../../../../static/img/product_docs/policypak/policypak/cloud/security/580_1_q10-img-1.jpg)

__Step 2 –__ Export it using PP Settings Manager to an XML. See the [Endpoint Policy ManagerCloud: How to deploy Microsoft Group Policy Settings using Endpoint Policy Manager Cloud](../video/cloud/deploy/grouppolicysettings.md) topic for additional information.

__Step 3 –__ Uplaod it to Endpoint Policy Manager Cloud. This would make the specified cert Trusted Root CA on the target machines.

__NOTE:__ It is not possible to deploy (example), a ``` .PFX ``` file, which is basically a cert + private key. This is also not possible with Group Policy itself.

In summary, anything that's in __GP Security Settings__ > __Public Key Policies__ is also possible once you export, then deploy using PPCloud or Netwrix Endpoint Policy Manager (formerly PolicyPak) MDM.

Inside the exported XML you can see the certificate embedded like this and ready for use.

![663_2_q10-img-2](../../../../static/img/product_docs/policypak/policypak/cloud/security/580_2_q10-img-2.jpg)
