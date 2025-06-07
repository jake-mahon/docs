# Assign Policies to Users, Groups & Containers

Password Policy Enforcer uses policy assignments to decide which policy to enforce for each user. Domain policies can be assigned to users, groups, and containers (Organizational Units).

Step 1 – In Admin Center, click __Identity Stores__ in the left pane.

Step 2 – On the Identity Stores page, click the __ellipsis__ button for an identity store and select __Edit__.

Step 3 – Click __Configurations__ under Settings in the left pane. Then click __PPE Policies__.
The PPE Policies page is displayed.

Step 4 – Click the __three vertical dots__ icon next to the policy , click __Edit__.

Or

Click on a policy name to open the policy configuration page.

Step 5 – Open the __Users & Groups__ tab.

Assign Policies to Users

Step 6 – When a domain policy is assigned to a user, Password Policy Enforcer stores the user's information in the configuration. The assignment remains valid even if the user is renamed.

1. Click __+Add User__ to add user(s) you want to apply policy on.
2. On the Add Object(s) dialog box, select a container from the __Search Container__ drop down list.
3. By default, the Include Sub-Contaners check box is selected. If you do not want to apply the policy on the users in the sub-containers, uncheck it.
4. Click __Advanced__, to search users using the search fields displayed such as Name, Display Name, First Name, Last Name and so on.
5. Click __Search__. Users matching the given criteria get listed.
6. Click the __Add__ button next to the users name listed on the page.
7. After adding all the required users from the search list, Click __Add__ on the Add Objects dialog box.
8. The selected users get listed in the Users box. You can remove a user from the list by clicking the cross (x) icon next to its name.

Assign Policies to Groups

Step 7 – When a domain policy is assigned to a group, Password Policy Enforcer stores the group's information in the configuration. The assignment remains valid even if the group is renamed. Password Policy Enforcer enforces the policy for all members of the group as well as any nested groups. For example, if the Helpdesk group is a member of the Info Tech group, then any policy assigned to the Info Tech group also applies to the members of the Helpdesk group. If this behavior is not desired, then you can assign a different policy to the Helpdesk group.

1. Click __+Add Group__ to add groups for the policy assignment.
2. On the Add Object(s) dialog box, select a container from the __Search Container__ drop down list.
3. By default, the Include Sub-Contaners check box is selected. If you do not want to apply the policy on the groups in the sub-containers, uncheck it.
4. Click __Advanced__, to search groups using the Name, Display Name, and Description fields.
5. Click __Search__. Groups matching the given criteria get listed.
6. Click the __Add__ button next to the users name listed on the page.
7. After adding all the required groups from the search list, Click __Add__ on the Add Objects dialog box.
8. The selected groups get listed in the Groups box. You can remove a group from the list by clicking the cross (x) icon next to its name.

Assign Policies to Containers

Step 8 – When a policy is assigned to a container, Password Policy Enforcer enforces the policy for all users in the container as well as any child containers. For example, if the Helpdesk and Managers OUs are children of the Info Tech OU, then any policy assigned to the Info Tech OU also applies to the two child OUs. If this behavior is not desired, then you can assign a different policy to a child OU.

NOTE: Different assignment types can be used for a single policy. For example, you may assign users to a policy by both OU and group at the same time.

1. Click __+Add Container__ to add groups for the policy assignment.
2. On the Add Container (s) dialog box, click __+__ to expand the Entire Directory.
3. Select the check box before the domain name to select the entire directory or select desired containers you You can remove a containervfrom the list by clicking the cross (x) icon next to its name.

Step 9 – Click __Update__.

## Policy Assignment Conflicts

A policy assignment conflict occurs when more than one policy is assigned to a user. Password Policy Enforcer can resolve these conflicts and choose one policy for each user.

Password Policy Enforcer first tries to resolve a policy assignment conflict by examining the assignment type. Assignments by user take precedence over assignments by group, which in turn take precedence over assignments by container. For example, if Policy A is assigned to a user by group, and Policy B is assigned to the same user by container, then Password Policy Enforcer enforces Policy A because assignments by group take precedence over assignments by container.

If all the policies are assigned to the user by container, then Password Policy Enforcer enforces the policy that is assigned to the nearest parent container. For example, if Policy A is assigned to the Users OU, and Policy B is assigned to the Users\Students OU, then Password Policy Enforcer enforces Policy B for all users in the Users\Students and Users\Students\Science OUs because it is the policy assigned to the nearest parent container.

If a policy assignment conflict still exists, then Password Policy Enforcer checks the priority of each remaining policy, and enforces the policy with the highest priority. See the Manage Policies topic for a diagrammatic representation of this algorithm.

Click __Test Policy__ and expand the __View log__ to see which policy Password Policy Enforcer enforces for a particular user.
