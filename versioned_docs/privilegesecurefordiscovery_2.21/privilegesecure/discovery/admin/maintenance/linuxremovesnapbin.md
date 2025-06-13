# Linux: Remove /snap/bin from PATH

Linux: Remove /snap/bin from PATH

# Linux: Remove /snap/bin from PATH

Vulnerability scans may require that "/snap/bin" be remove from the environment PATH variable.

__Step 1 –__ Remove "/snab/bin" from the PATH in the __/etc/environment__, example:

```
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"  

```

__Step 2 –__ Comment the below section in this file: __/etc/profile.d/apps-bin-path.sh__

```
## Expand $PATH to include the directory where snappy applications go.  
# snap_bin_path="/snap/bin"  
#if [ -n "${PATH##*${snap_bin_path}}" ] && [ -n "${PATH##*${snap_bin_path}:*}" ]; then  
# export PATH=$PATH:$`{snap_bin_path}`  
#fi  

```

__Step 3 –__ Open new SSH session and check PATH with: ```echo $PATH```.
