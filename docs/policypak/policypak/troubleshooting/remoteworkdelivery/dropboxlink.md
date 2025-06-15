# My Dropbox link won't verify in Remote Work Delivery Manager

Dropbox has recently made a change to their service and temporarily blocked our ability to verify the acceptability of the link. This link, however, will continue to work if the policy was previously created, or a verifiable link from another source is substituted during the policy creation process. This article will walk through the process of creating a policy with a verifiable link from another source and manually editing the XML to use the DropBox link.

## Create the Policy

Create the policy to be used as a template

__Step 1 –__ Create and new GPO or open an existing one

__Step 2 –__ Under either Computer or User Configuration, expand "PolicyPak -> App Delivery & Patching Pak" and select "Remote Work Delivery Manager"

![800_1_image-20210602100219-1](../../../../../static/img/product_docs/policypak/policypak/troubleshooting/remoteworkdelivery/800_1_image-20210602100219-1.webp)

__Step 3 –__ Add a "New Web Policy"

__Step 4 –__ Follow the prompts, setting your options as required

__Step 5 –__ On the "Specify the copy source" page, paste in a working link. If you do not have one, this link below can be used. [https://z_deleteme.s3.amazonaws.com/7z.msi](https://z_deleteme.s3.amazonaws.com/7z.msi)

![800_2_image-20210602100219-2](../../../../../static/img/product_docs/policypak/policypak/troubleshooting/remoteworkdelivery/800_2_image-20210602100219-2.webp)

__Step 6 –__ On the "Specify the Copy Destination" page, enter in the directory to copy the file to and set the file name as it should be for the destination file.

![800_3_image-20210602100219-3](../../../../../static/img/product_docs/policypak/policypak/troubleshooting/remoteworkdelivery/800_3_image-20210602100219-3.webp)

__Step 7 –__ If this an application distribution and installation, fill in the appropriate Post-copy and Revert actions

__Step 8 –__ Complete the wizard

## Export and Update the XML

In this next step we need to grab the XML and manually update it with the correct DropBox link.

__Step 1 –__ Export to XML

![800_4_image-20210602100219-4](../../../../../static/img/product_docs/policypak/policypak/troubleshooting/remoteworkdelivery/800_4_image-20210602100219-4.webp)

__Step 2 –__ Open the saved XML file in your text editor

__Step 3 –__ Find the option `<rd:source url=xxx` and replace the value with the correct DropBox link.

Example:

![800_5_image-20210602100219-5](../../../../../static/img/product_docs/policypak/policypak/troubleshooting/remoteworkdelivery/800_5_image-20210602100219-5.webp)

TO

![800_6_image-20210602100219-6](../../../../../static/img/product_docs/policypak/policypak/troubleshooting/remoteworkdelivery/800_6_image-20210602100219-6.webp)

__NOTE:__ by default, when you create a DropBox link it ends with [dl=0]. If it does, it must be changed it to [dl=1] to work. This would normally be done by the application automatically.

__Step 4 –__ If needed alter any other sections that are required that were not previously configured within Netwrix Endpoint Policy Manager (formerly PolicyPak) (e.g. destination, afterApply (post-copy action) or beforeRevert (revert action), then save the file

![800_7_image-20210602100219-7](../../../../../static/img/product_docs/policypak/policypak/troubleshooting/remoteworkdelivery/800_7_image-20210602100219-7.webp)

__Step 5 –__ If importing back into the same server as the originating template, and the policy still exists, on the policy line (usually line 2), find "id" and change at least one of the characters, any one of them will do. Endpoint Policy Manager will not allow the policy to be imported if a policy already exists with the same ID.

![800_8_image-20210602100219-8](../../../../../static/img/product_docs/policypak/policypak/troubleshooting/remoteworkdelivery/800_8_image-20210602100219-8.webp)

__Step 6 –__ Save and close.

The XML can now be imported into your environment – Back into GPO land where it was created, added to an MSI for MDM distribution or imported into the Endpoint Policy Manager Cloud – through the regular means.

__NOTE:__  This policy cannot be altered by either of the Administrative Consoles (On-premise or Cloud). Any changes must be done manually to the XML and re-imported as detailed above.
