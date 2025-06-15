# How do I configure Security Settings | Public Key Policies using Endpoint Policy Manager Cloud?

Below is an example of how you can configure Security Settings. You start by creating a real GPO:

![580_1_q10-img-1](../../../../../static/img/product_docs/policypak/policypak/cloud/security/580_1_q10-img-1.jpg)

To configure Security Settings, start by opening the Group Policy Management Editor and create a real GPO.

Then export using PP Settings Manager to an XML. [Endpoint Policy ManagerCloud: How to deploy Microsoft Group Policy Settings using Endpoint Policy Manager Cloud](../../video/cloud/deploy/grouppolicysettings.md)

Then, upload it to PPCloud. This would make the specified cert a Trusted Root CA on the target machines.

However, this is not possible is deploing, for example, a .PFX file (which is basically cert + private key). This is not possible with Group Policy itself either.

In summary, anything that's in GP __Security Settings | Public Key Policies__ is also possible once you export, then deploy using PPCloud or Netwrix Endpoint Policy Manager (formerly PolicyPak) MDM.

Inside the exported XML you can see the certificate embedded like this and ready for use.

![580_2_q10-img-2](../../../../../static/img/product_docs/policypak/policypak/cloud/security/580_2_q10-img-2.jpg)
