# Google Cloud Platform

In this section, we outline the integration of Endpoint Protector into your Google Cloud Platform (GCP) environment. While Endpoint Protector is not available among default images, this guide provides a straightforward process for obtaining and deploying it. You will upload a custom image, create a Virtual Machine Instance, and configure the necessary settings to enable Endpoint Protector. Follow the steps below to successfully deploy Endpoint Protector within your Google Cloud infrastructure.

## Obtaining and Downloading the GCP Image

Endpoint Protector is not available from the default images on the Google Cloud Platform. To obtain it, follow the process described below:

__Step 1 –__ Download the Endpoint Protector image from the link provided by your Endpoint Protector Representative. If this image has already been obtained, you can skip this step.

__Step 2 –__  To upload the Endpoint Protector image to the Google Cloud Platform, navigate to the [Cloud Storage Browser page](https://console.cloud.google.com/projectselector2/storage/browser?pli=1&supportedpurview=project) on the Google Cloud Platform Console and create a bucket.

![Creating a bucket](/img/product_docs/endpointprotector/endpointprotector/configuration/googlecloudplatform/createbucket.png)

__Step 3 –__ Provide the necessary information (i.e., Name, Storage Class, Location), then click __Create__.

![Naming the bucket](/img/product_docs/endpointprotector/endpointprotector/configuration/googlecloudplatform/namebucket.png)

__Step 4 –__ Once the bucket is created, upload the Endpoint Protector image file received from Endpoint Protector.

__NOTE:__ The upload can take several hours, depending on the size of the compressed image and the speed of the network connection.

![Uploading Endpoint Protector image to the bucket](/img/product_docs/endpointprotector/endpointprotector/configuration/googlecloudplatform/uploadimage.png)

__Step 5 –__ After the Endpoint Protector image has been uploaded to Google Cloud Storage, navigate to the Images page on the Google Cloud Platform Console.

__Step 6 –__ Set the Source to __Virtual disk (VMDK, VHD)__ and select __Go to new image import__.

![New Image Import](/img/product_docs/endpointprotector/endpointprotector/configuration/googlecloudplatform/newimageimport.png)

__Step 7 –__ When prompted, enable the required API.

__Step 8 –__ In the GCP search bar, type __Migrate to Virtual Machines__ and select it.

__Step 9 –__ Go to the Targets tab and click __Add a target project__.

![Add a target project](/img/product_docs/endpointprotector/endpointprotector/configuration/googlecloudplatform/targetproject.png)

__Step 10 –__ Select the project and Click __Add__.

![Selecting Target Project](/img/product_docs/endpointprotector/endpointprotector/configuration/googlecloudplatform/addtargetprojects.png)

__Step 11 –__ Navigate to the __Image Imports__ tab and click __Create image__.

- Provide a name for the image.
- Set __Source Cloud Storage file__ (.vmdk).
- Select the __Region__.
- Enable __Skip OS adaptation__.
- Click __Create__.

![Creating an Image](/img/product_docs/endpointprotector/endpointprotector/configuration/googlecloudplatform/createanimage.png)

__Step 12 –__ Once the process is complete, navigate to the __Images__ page and locate the newly created disk image. Click on it to view its details.

![Create Instance](/img/product_docs/endpointprotector/endpointprotector/configuration/googlecloudplatform/images.png)

__Step 13 –__ Click __Create Instance__ and select the newly created disk image as the boot disk.

__Step 14 –__ Configure the instance settings based on your environment’s requirements, such as machine type, network settings, and storage.

__Step 15 –__ Complete the setup process and verify that the instance is functioning as expected.
