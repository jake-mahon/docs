# Endpoint Policy Manager and VMware Workspace ONE MDM

__NOTE:__ See [Endpoint Policy Managerand Workspace One (Airwatch) MDM: Deploy Group Policy and Endpoint Policy Manager superpowers today](/docs/policypak/policypak/video/mdm/workspaceone.md) for a video overview of Endpoint Policy Manager and VMware Workspace ONE MDM

__Step 1 –__ To use VMware Workspace ONE (formerly known as AirWatch) with Endpoint Policy Manager, use the Apps & Books section, and click __Add Application__ to add the Endpoint Policy Manager CSE MSI file, Endpoint Policy Manager license MSI file, and Endpoint Policy Manager settings MSI file.

![using_policypak_with_mdm_and_4](/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_4.png)

__Step 2 –__ Choose the designated MSI file. In the example below we are installing the Endpoint Policy Manager CSE.

![using_policypak_with_mdm_and_5](/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_5.png)

__Step 3 –__ The Add Application Wizard should be run three times (not shown) in order to import each file. As you do, specify the following deployment options:

- Install Context should be set to __Device__.
- Install Command should have``` /ARPSYSTEMCOMPONENT=1``` added at the end of its field if you want to hide the MSI from the Control Panel.
- App Delivery Method should be set to __Auto__ so it becomes a forced installation .
- Assignment Groups can be __All Devices__ or __Targeted__, depending on what you need.

![using_policypak_with_mdm_and_6](/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_6.png)

![using_policypak_with_mdm_and_7](/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_7.png)

This is the final result in VMware Workspace ONE:

![using_policypak_with_mdm_and_8](/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_8.png)

__Step 4 –__ As a test, on an example client, perform your MDM enrollment to your VMware Workspace ONE service.
