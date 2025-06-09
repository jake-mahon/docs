# Similarity Rule

Similarity Rule

# Similarity Rule

The Similarity rule rejects passwords that are similar to a user's current password. Password similarity may indicate that a user is serializing their passwords. For example, "password1", "password2", "password3". Password serialization allows an attacker to guess the new password.

![Similarity Rule](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/similarity.png)

Select the __Similarity__ check box to enable the Similarity rule.

Select __Current password__ to apply the similarity rules the user's existing password. The Password Policy Enforcer client must be installed on the user's machine to enforce this rule.

Select __User display name__ to reject passwords that are similar to a user's Active Directory display name (full name for local accounts).

Select __User logon name__ to reject passwords that are similar to a user's logon name (user name).

For each option enabled, set the rules:

Set __Character substitution__ to __Yes__ to reject passwords that rely on character substitution to comply with this rule.

Set __Words typed backward__ to __Yes__ to additionally test passwords with their characters reversed. Enabling bi-directional analysis stops users from circumventing this rule by reversing the order of characters in their password. For example, a user may enter "drowssapdloym" instead of "myoldpassword".

Set a __Tolerance__ value to specify the maximum number of matching characters that Password Policy Enforcer allows before rejecting a password. For example, the two passwords "old__passwd__" and "new__passwd__" contain six consecutive matching characters (shown in bold type). Password Policy Enforcer rejects the new password if the tolerance is five (or lower), and accepts it if the tolerance is six (or higher).


