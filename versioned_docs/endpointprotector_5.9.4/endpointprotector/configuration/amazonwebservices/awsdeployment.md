# Launching the EC2 Image

As the Endpoint Protector image has already been shared with you, this process is similar to any other EC2 launch.

Follow the steps to launch the EC2 image.

__Step 1 –__ Go to Services: EC2 and select your region.

__Step 2 –__ Go to Images: AMIs and select the type of the Private image and search for Endpoint Protector.

![Launching AMISs](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/configuration/amazonwebservices/imagesamis.png)

__Step 3 –__ Right-click and select __Launch Instance from AMI__.

![Launching Private Image](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/configuration/amazonwebservices/privateimage.png)

__Step 4 –__ Enter the Name and Create tags as per your policies.

__Step 5 –__ Select an Instance Type.

__NOTE:__ For assistance in selecting the instance type that best suits your needs, customers should submit a support ticket through the [Netwrix Customer Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html).

__Step 6 –__ Select an available key pair or create a new key pair.

If you choose to use a key pair, you may need to share it with our Support Team for certain support requests. Ensure that the key pair is used exclusively for this instance to maintain security. We recommend selecting __Proceed without a Key Pair__ and then clicking __Launch Instances__.

![Launching AMI instances ](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/configuration/amazonwebservices/launchinstance.png)

__Step 7 –__ Configure the Network section.

![Configuring the Network section](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/configuration/amazonwebservices/networksettings.png)

__Step 8 –__ Edit Network Section and provide the following information:

- Select a VPC and a Subnet
- Enable the Auto-assign public IP
- Select Create security group and then provide a name and description
- Remove the existing Inbound rules
- Add two new Inbound security group rules:

  - Type HTTPS, Protocol TCP, Port range 443, Source type Custom, Source 0.0.0.0/0 (mandatory)
  - Type HTTP, Protocol TCP, Port range 80, Source type Custom, Source 0.0.0.0/0 (optional)

![Editing the Network Section ](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/policytemplates/editnetwork.png)

__Step 9 –__ The Storage section does not require any changes.

![Configuring the storage section](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/configuration/amazonwebservices/configurestorage.png)

__Step 10 –__ On the Summary section click __Launch Instance__.

![Summary section ](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/summary.png)

__Step 11 –__ Wait for the instance to start; this might take a few minutes while the Status Checks appear as Initializing.

![Initiating Instance](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/configuration/amazonwebservices/instancestarting.png)
