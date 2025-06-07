# Getting Started with Web Policies

Web policies enable you to copy a file from an HTTP source, like Dropbox or Amazon S3.

__NOTE:__ For a video overview of using Endpoint Policy Manager Remote Work Delivery Manager to install software using web-based shares, see [Install software using web-based shares](/docs/product_docs/policypak/policypak/video/remoteworkdelivery/webbasedshares.md).

Web policies provide a specialized functionality that leverages Microsoft Background Intelligent Transfer Service (BITS) to facilitate the efficient transfer of files in the background. Microsoft BITS is a protocol that allows file transfer to start and stop without corrupting the file during the download. So, if you wanted to copy a 2 GB file to a handful of roaming laptop machines, then the BITS protocol works nicely. This is because even if the machines don't download the whole file right away, have very slow connections, or are often totally offline, BITS can handle these scenarios.

__NOTE:__ See [Background Intelligent Transfer Service](https://learn.microsoft.com/en-us/windows/win32/bits/background-intelligent-transfer-service-portal?redirectedfrom=MSDN) for additional information on BITS.

The following is a list of file-based web services that Endpoint Policy Manager has tested for compatibility (there may be others):

- Amazon S3: Compatible
- Dropbox: Compatible
- Azure Blob Services: Compatible
- Google Drive: Not compatible (yet)
- Sharefile: Not compatible (yet)
- OneDrive: Not compatible (yet)

__Step 1 –__ Create a web policy for Endpoint Policy Manager Remote Work Delivery Manager by adding a new policy.

![getting_to_know_policypak_16](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_16.png)

__Step 2 –__ Next, on the Specify the copy source page, add the URL of a file that exists on a compatible web service. In the example below we have a movie file on Amazon S3.

![getting_to_know_policypak_17](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_17.png)

At this point, the file has been validated against the server for full compatibility. Compatibility means that the service reports success in both the Head and Get methods. If the service fails, you will see an error and you are not allowed to continue. If the service reports back as expected, you do not get an error and are able to continue.

__Step 3 –__ You are asked if the file is a single file (which should be copied as a straight file) or a ZIP archive you want to unpack. For this Quickstart, select __File__ and click __Next__.

![getting_to_know_policypak_18](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_18.png)

__Step 4 –__ Select your destination directory and replacement file name.

![getting_to_know_policypak_19](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_19.png)

__Step 5 –__ Complete the remaining pages of the wizard as described earlier. Then, click __Finish__ to see the policy in the editor.

![getting_to_know_policypak_20](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_20.png)

The files should start copying within 10 or 20 seconds. After that, the file size, bandwidth speed, and policy settings regarding BITS usage will determine the final download time.

The success of the web file copy can be seen here:

![getting_to_know_policypak_21](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_21.png)

There is a little more to understanding web policies, which will be explained in the section titled Advanced Web Policies: Unpacking and Using ZIP Archives. There is also a security concern about web policies within GPOs. For more information on this issue, see the section titled Remote Work Delivery Manager Security Concerns.
