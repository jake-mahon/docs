# AWS KMS Key Rotation

Organizations using AWS Key Management Service (AWS KMS) can configure Netwrix Privilege Secure to rotate security keys. When creating an AWS KMS protection key for Privilege Secure, configuration must start by creating a policy in AWS. Once a AWS policy is created, a connection to the AWS policy can be configured using Privilege Secure Rotate AWS Key tool.

The AWS KMS key is not used to encrypt the secret key, but will be used to encrypt the key that is used to encrypt the secret key.

## Rotate AWS Key

Follow the steps to rotate a AWS KMS Key.

__Step 1 –__ Locate the KeyTools folder in the installation directory.

C:\Program Files\Stealthbits\PAM\KeyTools

__Step 2 –__ Run the ```SbPAM.RotateAwsKey``` executable to launch the Rotate AWS Key wizard.

![AWS Connection Settings](../../../../../static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/requirements/awsconnectionsettings.webp)

__Step 3 –__ Enter the __Access key__ and __Secret key__ created for the AWS user assigned to the AWS KMS key into the AWS Connection settings fields.

__Step 4 –__ Enter the KMS key ARN into the KMS Key field.

__Step 5 –__ Select the appropriate AWS region from the dropdown list.

![AWS Connection Settings Complete](../../../../../static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/requirements/awsconnectionsettingscomplete.webp)

__Step 6 –__ When all fields are completed, click the __Rotate__ button to update all encrypted values in the Privilege Secure system.

The tool will take a few minutes to run (especially on larger systems) and the log window will show the results of the rotation.

__NOTE:__ If the AWS KMS key is rotated, there is no need to rotate the NPS key. Encrypted values will continue to be decrypted and any new encryption will use the updated AWS KMS key. If the AWS user Access Key is rotated it will be necessary to rotate the NPS key to update it to use the new Ids. Best practice for use of access keys is to rotate them regularly. __Do not__ delete the AWS user Access Key without rotating the NPS key first.

- __Step 1 –__ Create a new access key.
- __Step 2 –__ Rotate the NPS protect key to use the new access key.
- __Step 3 –__ Delete old access key.

The KMS Key has been rotated.
