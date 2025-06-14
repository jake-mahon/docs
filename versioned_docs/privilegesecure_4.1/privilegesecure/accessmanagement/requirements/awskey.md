# AWS Key Management Service

AWS Key Management Service (AWS KMS) is a managed service that makes it easy for you to create and control the cryptographic keys that are used to protect your data. Organizations using AWS Key Management Service (AWS KMS) can configure Netwrix Privilege Secure to rotate security Keys. The KMS key is not used to encrypt the secret key, but will be used to encrypt the key that is used to encrypt the secret key.

See the [AWS Key Management Service](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html) article for additional information.

When creating an AWS KMS protection key for Netwrix Privilege Secure, start by creating a policy in AWS. There will be multiple configuration steps needed within AWS.

- [Create an AWS Policy](#create-an-aws-policy)
- [Create a User](#create-a-user)
- [Create a Managed Key](#create-a-managed-key)
- [Least Privilege Policy](#least-privilege-policy)

### Create an AWS Policy

Follow the steps to create a policy in AWS.

__Step 1 –__ Log into AWS.

__Step 2 –__ Navigate to the __IAM__ page, and then the __Policies__ page.

__Step 3 –__ Select __Create Policy__.

![Search for KMS Service](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/searchkms.png)

__Step 4 –__ On the Specify permissions page, navigate to the Select a service box and search for the ‘KMS’ service.

![Select KMS option](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/selectkms.png)

__Step 5 –__ Select the __KMS__ option.

![Select Decrypt permission checkbox](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/selectdecryptioncheckbox.png)

__Step 6 –__ Under the Write dropdown menu, locate and select the __Decrypt permission__ checkbox.

![Select Any In This Account](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/selectanyinthisaccount.png)

__Step 7 –__ Under the Resources dropdown menu, select the __Any in this account__ checkbox.

__NOTE:__ This can be limited to a specific key when the key has been created.

![Review and Create the Policy](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/reviewandcreate.png)

__Step 8 –__ Enter a name for the policy and a description (optional).

__Step 9 –__ Save the policy.

The policy is created.

### Create a User

Follow the steps to create a user in AWS.

__Step 1 –__ Navigate to the __IAM__ page, and then the __User__ page.

__Step 2 –__ Select __Create User__.

![Create User Name](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/enterusername.png)

__Step 3 –__ On the Specify user details page, enter a user name. Optionally, select the __Provide user access to the AWS Management Console__ checkbox.

![Select Attach Policies Directly](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/selectattachpoliciesdirectly.png)

__Step 4 –__ In the Permissions options section, select __Attach policies directly__ in the Permission options.

__Step 5 –__ In the Permissions policies section, search for the NPS key policy you previously created and select the checkbox to the left of the policy. Click __Next__.

![Review and Create the User Cofiguration](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/reviewandcreate.png)

__Step 6 –__ On the Review and create window, review the policy configuration and click __Create now__.

![User Security Credentials Tab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/usersecuritycredentialstab.png)

__Step 7 –__ Once the user has been created, select the user and navigate to the __Security credentials__ tab.

__Step 8 –__ Select __Create access key__.

![Select Application Running Outside AWS](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/selectapplicationrunningoutsideaws.png)

__Step 9 –__ Once the creation window opens, select the __Application running outside of AWS__ option.

![Set Tag and Create Key](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/settagcreatekey.png)

__Step 10 –__ Set an optional description tag if required, and then select __Create access key__.

![Copy Access Key](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/copyaccesskey.png)

__Step 11 –__ Once the Key has been created, copy or download the Access key and Secret access key. These keys will be used by Privilege Secure to access the AWS KMS key encryption and decryption functionality.

__Step 12 –__ Click __Done__ when finished.

__NOTE:__ Best practice for use of access keys is to rotate them regularly. __Do not__ delete the AWS user Access Key without rotating the NPS key first.

- __Step 1 –__ Create a new access key.
- __Step 2 –__ Rotate the NPS protect key to use the new access key.
- __Step 3 –__ Delete old access key.

### Create a Managed Key

Follow the steps to create a managed key in AWS.

__Step 1 –__ Navigate to the __Key Management Service__ page.

__Step 2 –__ Select __Customer Managed Keys__.

![Select Create Key](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/selectcreatekey.png)

__Step 3 –__ Select __Create Key__.

![Configure Key Window](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/configurekeywindow.png)

__Step 4 –__ For Key Type, Select __Symmetric__. For Key Usage, select __Encrypt and decrypt__. Click __Next__ to continue.

![Add Alias Key Name](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/addaliaskeyname.png)

__Step 5 –__ Add an Alias for the key. The Description and Tags are optional. Click __Next__ to continue.

![Add Key Admin](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/addkeyadmin.png)

__Step 6 –__ Add a Key Administrator if required.

__NOTE:__ The NPS Key user created earlier does not require administrative permissions at this level.

![Add Key User](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/addkeyuser.png)

__Step 7 –__ Select the checkbox for the the Privilege Secure key user created earlier as a Key user. Click __Next__ to continue.

__Step 8 –__ Review the key configuration and click __Create Key__ to continue.

![ANR Key Completed](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/arnkeycomplete.png)

__Step 9 –__ Click the __Copy__ button from the newly created key, and store the ARN from the details.

The ARN will be used by Privilege Secure to identify the key used for encryption.

### Least Privilege Policy

The IAM policy created earlier can now be edited to limit to only the required key. Follow the steps to create a least privilege policy.

__Step 1 –__ Navigate to the IAM Policies page and select the KMS policy created in earlier steps.

![AIM Policy Permissions Tab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/aimpolicypermissionstab.png)

__Step 2 –__ Select the __Permissions__ tab.

__Step 3 –__ Click the __Edit__ button.

![Policy Editor Window](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/policyeditorwindow.png)

__Step 4 –__ Once the policy editor window opens, switch to the Visual display mode and expand the KMS item dropdown.

![Expand Resources Item](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/expandresourcesitem.png)

__Step 5 –__ Expand the Resources item and remove the selection from __Any in this account__ checkbox.

__Step 6 –__ Click __Add Arn__ to restrict access.

![Add ARN KMS Policy Key](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/addarn.png)

__Step 7 –__ Paste the copied ARN for the NPS key into the bottom box then

__Step 8 –__ Click __Add ARNs__.

![Review and Save Policy Changes](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/reviewandsavepolicychanges.png)

__Step 9 –__ Review configuration and click __Save changes__ to the NPS\_KMS\_Policy.

The policy will now be limited to only the specified KMS key. The KMS is ready to be roated in Privilege Secure. See the [AWS KMS Key Rotation](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/requirements/awskeyrotation.md) topic for additional information.
