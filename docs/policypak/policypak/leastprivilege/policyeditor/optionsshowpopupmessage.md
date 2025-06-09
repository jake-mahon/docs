# How does the "Show Pop-Up" message checkbox work along side "Force user re-authenticate" and "Justification text required" checkboxes?

In CSEs 23.6
and later, there are several options you may select:.

![942_1_image-20230602145013-1](/img/product_docs/policypak/policypak/leastprivilege/policyeditor/942_1_image-20230602145013-1.png)

The four cases below illustrate how these work.

Case 1

__Show popup message__ is selected, but neither sub-option are checked.

![942_2_image-20230602145013-2](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication_1.png)

When the application launches, the pop up is presented as shown below.

Text input from the user is optional. The User must at least click __OK__ to continue and launch the application.

![942_3_image-20230602145013-3](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication_2.png)

Case 2

__Show popup message__ and __Justification text required__ are selected, but __Force user re-authenticate__ is not.

![942_4_image-20230602145013-4](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication_3.png)

The pop-up box
appears, and the user must type in something before continuing onward by clicking __OK__.

![942_5_image-20230602145013-5](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication_4.png)

__Case 3__

__Show popup
message__ and __Force user re-authenticate__ is selected, but __Justification text required__ is not.

![942_6_image-20230602145013-6](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication_5.png)

The User is required to re-authenticate, but then when the pop-up occurs, no text input is required by the user.

![942_7_image-20230602145013-7](/img/product_docs/policypak/policypak/leastprivilege/policyeditor/942_7_image-20230602145013-7.png)

__Case 4__

![942_8_image-20230602145013-8](/img/product_docs/policypak/policypak/leastprivilege/understanding_re_authentication_7.png)

The User must
re-authenticate. When the pop-up is shown, the user must type in something before __OK__ is allowed and the application
proceeds.

![942_9_image-20230602145013-9](/img/product_docs/policypak/policypak/leastprivilege/policyeditor/942_9_image-20230602145013-9.png)
