---
sidebar_position: 455
title: Usercube-Configuration-Transform
---

# Usercube-Configuration-Transform

This tool applies a series of transformations specified in a JSON file, on the content of a given directory.

## Example

The following example searches all occurrences of `Directory_User` in the files inside `C:/UsercubeDemo/Conf` whose names:

* contain `guest` to replace all occurrences with `Directory_Guest`;
* contain `bot` to replace all occurrences with `Directory_Bot`.

The resulting files are saved in `C:/UsercubeDemo/ConfTransformed`.

```
./Usercube-Configuration-Transform.exe --input "C:/UsercubeDemo/Conf" --output "C:/UsercubeDemo/ConfTransformed" --transformation-file "C:/UsercubeDemo/transformations.json"

```
```
transformations.json

{
    "*guest*": {
        "Directory_User": "Directory_Guest"
    },
    "*bot*": {
        "Directory_User": "Directory_Bot"
    }
}

```
## Arguments

| Argument Name | Details |
| --- | --- |
| --input required | **Type**  String  **Description** Path of the directory on which the transformations are to be applied. |
| --transformation-file required | **Type**  String  **Description** Path of the JSON file that contains the transformations to be applied.  The first half of the following JSON transformation file intends to search all files in the input directory whose names are `filename` (case-insensitively). In those files, any occurrence of `ToBeReplaced` (case-sensitively) is replaced with `Replacement`.  `{  "filename": {  "ToBeReplaced": "Replacement"  },  "partialfilename*": {  "ToBeReplaced2": "Replacement2"  } }`  **Note:** instead of a specific file name, Identity Manager can search for files whose names contain a specific string, using the character `*`. |

|  |  |
| --- | --- |
| --output required | **Type**  String  **Description** Path of the folder where the result will be saved. |