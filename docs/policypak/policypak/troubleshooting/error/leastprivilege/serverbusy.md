# FTK Imager crashes with 'Server Busy' dialog box when "Image Mounting" while running elevated

When attempting to mount an image with an elevated "FTK Imager" application, a "Server Busy" dialogue box will present itself a
moment after starting to browse for the image.

![998_1_image-20240201214648-1](/static/img/product_docs/policypak/policypak/troubleshooting/error/leastprivilege/998_1_image-20240201214648-1.png)

When this appears, the only way to get out of this is to end the task through
Task Manager.

## The Fix

To get around this error, we need to deselect the __Don't elevate
Open/Save__ dialog option when creating the elevation policy for the
application __FTK Imager__. This is selected by default on all new
policies.

![998_2_image-20240201214648-2](/static/img/product_docs/policypak/policypak/troubleshooting/error/leastprivilege/998_2_image-20240201214648-2.png)

This checked by default to prevent users from gaining unauthorized administrative rights through the Open/Save dialog box to their endpoint. Unchecked, you open up the possibility for a knowledgeable operator to gain administrative access to the computer. For more information in this, please refer to this KB video ->[Increase security by reducing rights on Open/Save dialogs](/docs/product_docs/policypak/policypak/video/leastprivilege/bestpractices/opensavedialogs.md)

## Optional

In this case, to limit the rights the end-user could take advantage of, when the Open/Save dialog box option is deselected, changing the Action to __Run with customized token__ allows you to reduce the integrity level of the process, thereby reducing the rights given to the process and, by extension, the end-user.

![998_3_image-20240201214648-3](/static/img/product_docs/policypak/policypak/troubleshooting/error/leastprivilege/998_3_image-20240201214648-3.png)

Under Token, set the Base Token to __Always create and use an elevated token__ and Integrity level to __Medium-plus__. This will allow the application to run as desired, but not give access to the end-user to change system files.

![998_4_image-20240201214648-4](/static/img/product_docs/policypak/policypak/troubleshooting/error/leastprivilege/998_4_image-20240201214648-4.png)
