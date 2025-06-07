# How to use Scripts Manager to workaround the "PPAppLockdr64.dll is either not designed to run on Windows or it contains an error" message when running Microsoft Remote Assistance (MSRA.exe) and the Endpoint Policy Manager CSE is installed on Windows 10 1903

![280_1_image-20191015113622-1](/static/img/product_docs/policypak/policypak/troubleshooting/applicationsettings/280_1_image-20191015113622-1.png)

__Step 1 –__ Create the Scripts Manager policy in PolicyPak.

__Step 2 –__ Run the Microsoft Group Policy Management Console (GPMC) as a user with the necessary rights (to create and link GPOs at that level) and then create a new GPO and link the GPO at the OU (User Level) or Domain level depending on who needs to receive these settings.

For example:

![280_2_image-20191015113622-4](/static/img/product_docs/policypak/policypak/troubleshooting/applicationsettings/280_2_image-20191015113622-4.png)

2. Next Edit the newly created GPO and expand the User Configuration > PolicyPak > Scripts Manager section.
3. Then click "ADD NEW COLLECTION" to add a new collection, give it any descriptive name you like, then click "OK".

![280_3_image-20191015113622-5](/static/img/product_docs/policypak/policypak/troubleshooting/applicationsettings/280_3_image-20191015113622-5.png)

4. Next, double click on the collection you just created to open the collection.
5. Then right-click anywhere in the right pane and choose "Add > New Policy", (or alternatively click on the "ADD NEW POLICY" button) to create a new policy item within the collection.

![280_4_image-20191015113622-6](/static/img/product_docs/policypak/policypak/troubleshooting/applicationsettings/280_4_image-20191015113622-6.png)

6. The "PolicyPak Scripts Manager Wizard" will then open.
7. At the "On apply action" screen choose "PowerShell script" from the drop down.
8. Then paste the commands below into the scripts body window.

    ```
    Set-ExecutionPolicy-ScopeProcess-ExecutionPolicyBypass-Force  
    Set-ProcessMitigation -Name msra.exe -Enable DisableExtensionPoints
    ```

10. Then check both the "Run script as user" and "With elevated rights" boxes at the bottom left hand of the window and click "Next".
11. Click "Next" to skip the "On revert action" screen.
12. At the "Specify process mode" screen choose "Once or when forced" then click "Save"

__Step 3 –__ Lastly, test the policy.

1. Log in as a domain user within the OU or Domain where the policy is applied and verify under Windows Settings that the custom Exploit Protection settings are present.

![280_5_image-20191015113622-7](/static/img/product_docs/policypak/policypak/troubleshooting/applicationsettings/280_5_image-20191015113622-7.png)

![280_6_image-20191015113622-2](/static/img/product_docs/policypak/policypak/troubleshooting/applicationsettings/280_6_image-20191015113622-2.png)

More Info: How to configure custom Exploit Protection settings under Windows 10 GUI  to resolve this issue.

__Step 1 –__ Use the Windows Search to find "Exploit protection" and open exploit protection settings

__Step 2 –__ Then click "Program settings"

__Step 3 –__ Then click "Add a program to customize", and choose "Add by program name"

__Step 4 –__ Enter "msra.exe" and click "Add"

__Step 5 –__ Scroll down the list of options until you find "Disable extension points"

__Step 6 –__ Check the "Override system settings" and set the slider to "On" as in the image below.

__Step 7 –__ Lastly, click "Apply" to save your changes

![280_6_image-20191015113622-2](/static/img/product_docs/policypak/policypak/troubleshooting/applicationsettings/280_6_image-20191015113622-2.png)
