# Testing Admin Approval

Now log on as a Standard User and try to run an application that requires admin rights, like PowerPointViewer installer, provided there is not a rule in place that will elevate this application. The user is presented with a __Request Code__ (also called a Challenge Code) as shown here.

![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/adminapproval/testing_admin_approval.png)

The user needs to present this __Request Code__, typically over the phone, to an Admin who can create a __Response Code__.

__NOTE:__ If you (the admin) are on the machine, you may use your credentials by clicking the __Approve with alternate Admin Credentials__.

The Admin Approval Tool can be run in three ways:

- As a standalone tool in the Extras folder from the Endpoint Policy Manager download (seen below)
- Directly from a machine where the Endpoint Policy Manager MMC Admin console is installed
- Directly from within a GPO

Here, you can see the Endpoint Policy Manager Least Privilege Manager Admin Approval Tool being run from the Endpoint Policy Manager Extras folder. Running it for the first time on any Admin’s machine requires you to enter in the same secret key from the GPO you used earlier.

![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/adminapproval/testing_admin_approval_1.png)

You can save the secret key in the Registry of this Admin’s machine, secured with his own encrypted password. You could also require that the key cannot be viewed ever again when this tool is run by choosing __Forbidden to view secret key from previous session__.

__NOTE:__ If you ever need to fully reset and start the Endpoint Policy Manager Admin Approval Tool from scratch, simply open the Admin machine from which the tool was run and use regedit.exe to remove the two keys located at ```HKEY_CURRENT_USER\SOFTWARE\PolicyPak``` named ```GlobalSecurityKey``` and ```GlobalSecurityKeyChecksum```.

Once you click __OK__, you’ll be in the main Admin Approval Tool, seen here. Here is where you can accept the Request (Challenge) Code from the user and return a __Response Code__ back. Simply type in the __Request Code__, then pick the option that makes sense. The items you can specify are:

- Reason - Select the reason code (of which several are hardcoded into PolicyPak).
- Uses - Decide if you want the code to be used once, 5 times, 10 times, or an unlimited number of times.
- Apply to child processes - Decide if you want the application to be able to launch child processes as Admin.
- Expires - Choose if this code will expire in 10 minutes, 1 hour, 12 hours, or never.

![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/adminapproval/testing_admin_approval_2.png)

__NOTE:__ The Admin Approval Tool may be branded. See the section __Branding and Customization__ in this guide.

After filling in these options, assign a value to the __Response Code__ and the application will launch.

![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/adminapproval/testing_admin_approval_3.png)

In our example, we specified that the code could be used one time, so if the user tries to rerun the same application, they are prompted again.

Remember that an admin can run the Admin Approval Tool if the Endpoint Policy Manager MMC snap-in is installed.

![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/adminapproval/testing_admin_approval.jpg)

You can also see and launch the Admin Approval Tool from within a GPO, provided you have the secret key inside the GPO, as seen here.

![A computer screen shot of a computer screen

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/adminapproval/testing_admin_approval_4.png)
