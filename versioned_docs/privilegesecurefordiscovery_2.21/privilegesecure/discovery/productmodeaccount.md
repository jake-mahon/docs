# Add Privilege Secure Protect Mode Account to Windows Endpoints via GPO

Add Privilege Secure Protect Mode Account to Windows Endpoints via GPO

# Add Privilege Secure Protect Mode Account to Windows Endpoints via GPO

This GPO should never be applied to domain controllers.

## Creating the GPO to Add Privilege Secure

Protect Account to Local Administrators group on Window endpoint. This method uses the Group Policy Preferences (GPP).  In this guide, AddLocalAdmin GPO will be created and linked at in the OU OU.  In a production environment, this would be typically be linked in the appropriate OUs. Optionally, you could add the admins to an existing GPO that is applied to target endpoints.

__NOTE:__ Please note:  This GPO should never be applied to domain controllers.

__Step 1 –__ Open __Group Policy Management__.

__Step 2 –__ Add a GPO in Group Policy Management > Forest: `<domain>` > Domains > `<domain>` > Group Policy Objects. the ___Group Policy Management -> Forest: `<domain>` -> Domains -> `<domain>` -> Group Policy Objects___

- `<domain>` is a placeholder for domain name
- cstest.test used in example below

![mceclip2.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/1500011376402_mceclip2.png)

__Step 3 –__ Type in name of GPO and click __OK__.

__Step 4 –__ In the GPO, navigate to __Computer Configuration__ > __Preferences__ > __Control Panel Settings__ > __Local Users and Groups__.

__Step 5 –__ Right-click __Local Users and Groups__, then click __New__ > __Local Group__.

![mceclip0.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/1500011376402_mceclip0.png)

__Step 6 –__ Make sure that Action is set to __Update__, and select __Administrators (built-in)__ in the Group Name drop-down menu.

![mceclip1.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/1500011376402_mceclip1.png)

__Step 7 –__ Add the Privilege Secure protect account, "s1GPOpush" used as and example account below:

![mceclip4.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/1500011376402_mceclip4.png)

![mceclip6.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/1500011376402_mceclip6.png)

__Step 8 –__ Ensure that the __Delete__ boxes are __not__ checked and then click __OK__.

![mceclip7.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/1500011376402_mceclip7.png)

__Step 9 –__ Close the Group Policy Management Editor for the GPO.

__Step 10 –__ Link GPO to appropriate OUs via drag and drop, or right-click copy and paste.

__NOTE:__ The GPO should never be applied to the domain controllers.

Example linked into OU2:

![mceclip10.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/1500011376402_mceclip10.png)

As seen linked in OU2:

![mceclip12.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/1500011376402_mceclip12.png)

__Step 11 –__ For testing, this can be linked into a OU with a test systems, log into test system and run command line update of the Group Policy with:  ```gpupdate /force```

![mceclip13.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/1500011376402_mceclip13.png)
