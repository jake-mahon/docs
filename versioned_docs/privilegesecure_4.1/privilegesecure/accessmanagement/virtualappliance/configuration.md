# Configuration

Follow the steps below to configure your virtual appliance with Netwrix Privilege Secure.

__Step 1 –__ Read and accept the EULA in the License terms page.

__Step 2 –__ Specify a password for the built-in administrator account. The password should comply to the following criteria:

- More than 20 characters long
- Not shared with any other account
- Well-protected in a physical or software manner (e.g., with a secure password manager)

__Step 3 –__ Re-enter the password.

__Step 4 –__ Click __Finish__.

__Step 5 –__ Log in to the virtual machine.

__Step 6 –__ The Windows PowerShell will start ad automatically run the configuration script.

Press any key to read the license agreement and then press __Y__ to accept it.

You will be prompted to configure the virtual machine. Press Enter and follow the steps listed in the table below:

|  |  |
| --- | --- |
| Rename the virtual machine | Specify a new name for the virtual machine (e.g.,NPSAM-Server). Consider the following:   - The name should be no longer than 15 characters - It may contain letters (a-z, A-Z), numbers (0-9), and hyphens (-). However, it cannot contain numbers only. - Spaces and periods (.) are not allowed |
| Add additional input languages | - Select __Y__ if you want to specify additional input languages - Select __N__ to proceed with English |
| Configure network | - Select __Y__ to configure network settings automatically using DHCP server - Select __N__ to configure required parameters manually. In this case, you will have to specify IP settings manually. |
| Join computer to the domain or workgroup | - Select __N__ for Workgroup — this is a recommended scenario for domain or workgroup Netwrix Privilege Secure server. - Select __Y__ for domain and specify FQDN (e.g., corp.local ). Then enter the domain administrator's name and password.   __NOTE:__ As a security product, it is critical to ensure that access to the Netwrix Privilege Secure server is limited and controlled. As a security best practice, we strongly recommend that the virtual appliance is not joined to a domain. Otherwise, engage secure practices to ensure that domain administrator access to the virtual appliance is controlled and limited through group policy settings. See the next section for security best practices. |

__Step 7 –__ When finished, you will be prompted to reboot the virtual machine for the changes to take effect.

__Step 8 –__ Login to the virtual machine and ensure date/time/time-zone are set correctly, and that DNS is properly configured (forward and reverse lookup) to resolve all Active Directory domains and network resources that are to be managed by Netwrix Privilege Secure.
