# Can Microsoft App-V applications work with Endpoint Policy Manager Starts Screen and Taskbar Manager?

Yes. It is tested and should work just like any other registered application. The pre-requisites are the same and we recommend creating GPOs for Netwrix Endpoint Policy Manager (formerly PolicyPak) Starts Screen Manager from the machine where the required App-V package is already installed.

Steps to create App-V icon in Windows Starts Screen via GPO:

__Step 1 –__ Create a GPO and expand Endpoint Policy Manager Starts Screen Manager.

__Step 2 –__ Create Collection, create Group and then right-click and select __Add Desktop Application Tile__.

![808_1_image-20201121192420-1](/img/product_docs/policypak/policypak/integration/808_1_image-20201121192420-1.webp)

__Step 3 –__ Select the __Registered Application (Recommended)__ option and click __Next__.

![808_2_image-20201121192420-2](/img/product_docs/policypak/policypak/integration/808_2_image-20201121192420-2.webp)

__Step 4 –__ Wait for the wizard to discover all registered applications including App-V application packages.

__Step 5 –__ Select the App-V application and verify the path by moving your cursor over the Icon.

![808_3_image-20201121192420-3](/img/product_docs/policypak/policypak/integration/808_3_image-20201121192420-3.webp)

__Step 6 –__ Complete the remaining steps and apply group policy updates on the target machine.

__NOTE:__  The target application path must exist in the client machine.

![808_4_image-20201121192420-4](/img/product_docs/policypak/policypak/integration/808_4_image-20201121192420-4.webp)

__Step 7 –__ Log-off and log back on to see the required Starts Screen items.

![808_5_image-20201121192420-5](/img/product_docs/policypak/policypak/integration/808_5_image-20201121192420-5.webp)
