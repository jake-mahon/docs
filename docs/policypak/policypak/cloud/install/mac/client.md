# What are the step by step instructions to install the MacOS Client for Endpoint Policy Manager Cloud manually?

![888_1_image001_950x671](/static/img/product_docs/policypak/policypak/cloud/install/mac/888_1_image001_950x671.png)

__Step 1 –__ First download the MacOS Client for Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud as seen here.

__Step 2 –__ Download the Endpoint Policy Manager Cloud PFX file like what's seen here (requires a password) and keep the file and password handy.

![888_2_image002_950x256](/static/img/product_docs/policypak/policypak/cloud/install/mac/888_2_image002_950x256.png)

__Step 3 –__ Next, double-click on the installer to run. When the installer finishes, the Endpoint Policy Manager command will be installed for all users.

![888_3_image_10_950x461](/static/img/product_docs/policypak/policypak/cloud/install/mac/888_3_image_10_950x461.png)

__Step 4 –__ After installation completes you will be asked to "Open Preferences" like what's seen here.

![888_4_image_11_950x745](/static/img/product_docs/policypak/policypak/cloud/install/mac/888_4_image_11_950x745.png)

__Step 5 –__ Select Privacy, then Unlock, and then grant Endpoint Policy Manager access to the Disk like what's seen here.

![888_5_image_12_950x864](/static/img/product_docs/policypak/policypak/cloud/install/mac/888_5_image_12_950x864.png)

At this point the MacOS Client for Endpoint Policy Manager Cloud is installed, but it is not yet enrolled in Endpoint Policy Manager Cloud.

__Step 6 –__ Using the SUDO command, register the machine in Endpoint Policy Manager Cloud with the certificate you downloaded earlier.

1. Open a terminal window
2. Enter the following command

    ```sudo policypak cloud-register --certificate /path/to/certificate.pfx --password 'certificate_password' ```

   Where:  
   ``` /path/to/certificate.pfx``` - the folder in which the certificate was downloaded.

   "certificate\_password" - the password that was added when exporting the certificate. Export from step 3.

__Step 7 –__ After completing the operation, the message "```Registered: YES``` " should appear in the terminal window.

![888_6_image_13_950x238](/static/img/product_docs/policypak/policypak/cloud/install/mac/888_6_image_13_950x238.png)

Now the ```PolicyPak``` command is registered and available to use, but it must be run as root (or under sudo.)

![888_7_image_14_950x292](/static/img/product_docs/policypak/policypak/cloud/install/mac/888_7_image_14_950x292.png)

__Step 8 –__ Sync with Endpoint Policy Manager Cloud with the command

```sudo policypak sync```

When you see Synchronized: Yes you are ready to make rules in Endpoint Policy Manager Cloud.

![888_8_image_15_950x267](/static/img/product_docs/policypak/policypak/cloud/install/mac/888_8_image_15_950x267.png)

You should see your Mac in the MacOS | All group like what's seen here.

![888_9_image_16_950x511](/static/img/product_docs/policypak/policypak/cloud/install/mac/888_9_image_16_950x511.png)
