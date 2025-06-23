---
title: Configuring defaults
sidebar_label: Sharepoint Templates
description: The Source Defaults tab allows you to configure defaults that will be used in the absence of list / subsite configurations. Available options are listed in t...
---

# Configuring defaults

The Source Defaults tab allows you to configure defaults that will be used in the absence of list /
subsite configurations. Available options are listed in the table below.

**NOTE:** To apply the options you set in each section, click the **Save** button in that section.

| Option                                                                                                                                                       | Description                                                                                                                                                                    | Notes                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| **General**                                                                                                                                                  |                                                                                                                                                                                |                                        |
| Re-Index Period                                                                                                                                              | Specify how often the content should be re-re-indexed.                                                                                                                         | Default is every 7 days                |
| Text Patterns                                                                                                                                                | Specify the text patterns to be used.                                                                                                                                          | Default is ALL                         |
| Write classifications?                                                                                                                                       | Select the checkbox if you want to use tagging.                                                                                                                                | See "Configure Tagging" section above. |
| **Date Field Mappings**                                                                                                                                      |                                                                                                                                                                                |                                        |
| Document Date                                                                                                                                                | Assign the internal modified date associated with the document. The selected date will be split into 5 internal fields: _DocYear_, _DocMonth_, _DocDay_, _DocHour_, _DocMins_. |                                        |
| Backup Document Date                                                                                                                                         | You can use the dropdown lists to search for and assign fields to the appropriate mappings.                                                                                    |                                        |
| **Special Field Mappings**                                                                                                                                   |                                                                                                                                                                                |                                        |
| The special field mappings allow you to map any of the available SharePoint fields to some of the internal fields for the purposes of search.                |                                                                                                                                                                                |                                        |
| **Content Field Mappings**                                                                                                                                   |                                                                                                                                                                                |                                        |
| The values configured for each of the default content mappings will be assigned based on the base template of the list (Document Library, Generic List etc). |                                                                                                                                                                                |                                        |

![sharepointadvancedsourceconfiguration_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/sharepointadvancedsourceconfiguration_thumb_0_0.webp)

![sharepointadvancedspecialfieldmappings_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/sharepointadvancedspecialfieldmappings_thumb_0_0.webp)

![sharepointadvancedsourcecontentmappings_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/sharepointadvancedsourcecontentmappings_thumb_0_0.webp)

# Working with SharePoint templates

In SharePoint, a site template is like a blueprint for a site. Creating a site template allows you
to capture your customizations, so that they can be quickly applied to other SharePoint environments
and even use the template as the basis for a business solution.

In Netwrix Data Classification, you may have site collections and want to use the same tagging
configuration for all of them. It allows you to effectively copy and paste the configuration for one
source onto others. First you manually configure one source. Then you save that as a template. Then
you apply that template to other sources.

To get more details about the tagging function, review the
[Configuring Tagging](/docs/dataclassification/5.6.2/data-sources/managing-sources.md)
article.

In this article, we will cover:

- Setting up prerequisites
- Using SharePoint API
- Creating a new template
- Configuring a user account for provisioning
- Viewing auto-provisioned sites

## Setting up prerequisites

As part of configuring tagging, make sure you have set the prerequisites, specified in the
[Configuring Tagging](/docs/dataclassification/5.6.2/data-sources/managing-sources.md)
article.

## Using SharePoint API

You can create templates manually through the Apply Templates UI or you can call APIs (and also
register the site collection if required) so that you can automate NDC integration as part of their
site collection provisioning.

## Creating a new template

To create a template:

1. In Netwrix Data Classification, navigate to Content→ Sources→SharePoint→Templating→Templates.
2. Select Add to add a template.
3. Before adding, create a site collection in SharePoint for referral.
4. Specify the site collection and select Save.
