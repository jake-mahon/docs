# Password Policy Client

The Password Policy Client helps users to choose a compliant password. Detailed information is provided if their new password is rejected.

The Password Policy Client is optional. If it is not installed, the [Similarity Rule](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/similarity_rule.md) can not be enforced. Users only see the default Windows error message if their password is rejected, not the detailed help they receive from the Password Policy Client.

![the_password_policy_client](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/the_password_policy_client.jpg)
  
![the_password_policy_client_1](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/the_password_policy_client_1.jpg)

The Password Policy Client displays the password policy during a password change so that users can see the policy while they choose their password. The Password Policy Client also displays a detailed rejection message to explain why a password was rejected. Both these messages are customizable.

__NOTE:__ The Password Policy Client does not modify any Windows system files. It also does not send passwords or password hashes over the network.
