---
sidebar_position: 412
title: Configure a Homonym Detection
---

# Configure a Homonym Detection

In this section we configure the homonym search that checks if a resource already exists in the system, preventing duplicates.

## Process

1. Create a homonym entity link, either with a default filter or customized filters
2. Create a display table to display the homonym result *(optional)*
3. Define the part of the workflow form where homonyms must be checked

## Create a Homonym Entity Link

A [Homonym Entity Link](../../../toolkit/xml-configuration/workflows/homonymentitylink/index "Homonym Entity Link") defines a new homonym search to be performed in a workflow form.
It can be defined in different ways.

### With a default filter

```


```
When no filter is defined for the homonym entity link, the search for homonyms is performed according to the homonym control form.
See the [Configure a Homonym Detection](# "Configure a Homonym Detection") topic for additional information.

### With customized filters

[Homonym Entity Link](../../../toolkit/xml-configuration/workflows/homonymentitylink/index "Homonym Entity Link")filters allow to define customized filters for a homonym search.

#### Simple filter

```
    

```
Here, since the default operator is `Equal`, the search for homonyms is performed by comparing the values of the `LastName` and `FirstName` properties with an exact spelling.

*NB: This example matches the default filter that would be computed based on the homonym control example in the section below.*

#### Flexible filter

A filter can be defined to compare the values in an approximate way.

* A flexible operator must be used, such as `FlexibleEqual`, `FlexibleStartWith`, etc.
* A flexible expression must be defined on the comparison property.

1. When the input search value is retrieved directly from the property value

```
    

```
Here, `Property1` is set, so the search for homonyms is performed by comparing the `LastName` value, entered by the user in the workflow form, with the phonetic value of existing resources stored as the `PhoneticLastName` property in the database.

Before performing the comparison, the flexible expression of the comparison property is applied to the input value.

2. When the input search value is deducted

```
        

```
Here:

* In the first filter, `Property1` and `Expression1` are not set, so the search value is computed by applying the expression defined for `ComparisonProperty1` from the input values, eg. `(record.FirstName + &#x27; &#x27; + record.LastName).Appproximate()`.
* In the second filter, `Expression1` is set, so the search value is computed by applying the `Expression1` from the input values. This filter allows checking the homonyms on the reversed full name (to manage the case where the user reverses the first and last name for example).

The search for homonyms is performed by comparing the search values computed based on each filter with the values stored in the database and retrieves all resources that match any of the filters.

#### Filter on a language property

If a filter is set on a language property, the search for homonyms is performed on the property associated to the main language.

```
    

```
Here, the `Name` property is a neutral property associated with two localized properties `Name_en` and `Name_fr`.

If English is the main language, the search for homonyms is performed on the `Name_en` value.

## Create a Display Table *(optional)*

A [Display Table](../../../toolkit/xml-configuration/user-interface/displaytable/index "Display Table") is used to define how a list of the same entity type should be displayed.

By default, the homonyms are displayed using the default display table of the related entity type.

To display homonyms in a different way than the default, a specific display table must be created where the `HomonymEntityLink` attribute is the identifier of the homonym entity link created above.

```

                    

```
See the [Customize Display Tables](../../../ui/how-tos/custom-display-table/index "Customize Display Tables") for additional information.

## Define the Homonym Control in the Workflow Form

The [Form](../../../toolkit/xml-configuration/user-interface/form/index "Form") where the homonyms are to be checked must contain a layout fieldset control where:

* the properties to check are represented;
* the `HomonymEntityLink` attribute is the identifier of the homonym entity link created above.

When the homonym entity link has no filter set and therefore the filter is calculated automatically, the homonym control form must only contain up to 5 controls where `Binding` attribute is defined.
Indeed, a filter can only be defined on up to 5 properties.

```
    
                                            

```