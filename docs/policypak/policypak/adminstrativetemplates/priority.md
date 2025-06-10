# Understanding Priority

Endpoint Policy Manager Admin Templates Manager enables you to put policy directives inside a single GPO and within a single collection. This is most useful when used in conjunction with Item-Level Targeting, as described in the previous section.

![about_policypak_admin_templates_17](/img/product_docs/policypak/policypak/adminstrativetemplates/about_policypak_admin_templates_17.webp)

Here you can see the same policy, __Screen saver timeout__, used three times within the same GPO. However, each policy directive has __Item-Level Targeting__ turned on and specific conditions associated with it.

We recommend using Endpoint Policy Manager Admin Templates Manager in the following ways:

- Create multiple policy directives in a collection within a GPO
- Use Item-Level Targeting to set the conditions
- Set a description about that particular AppSet item (see the next section)

![about_policypak_admin_templates_18](/img/product_docs/policypak/policypak/adminstrativetemplates/about_policypak_admin_templates_18.webp)

Occasionally there can be multiple AppSets that have overlapping settings. In that case, ensure that the delivery of those settings occur in a particular order. As we see above, Endpoint Policy Manager Admin Templates Manager enables you to specify the order policy settings are delivered in.

Policy settings within a GPO are processed in order from lowest to highest.

__NOTE:__ This is the same way Group Policy Preferences performs ordering as well.

![about_policypak_admin_templates_19](/img/product_docs/policypak/policypak/adminstrativetemplates/about_policypak_admin_templates_19.webp)

To change the priority of a particular AppSet, click on it and select ether __Raise Priority__, __Lower Priority__, __Maximum Priority__, or __Minimum Priority__.
