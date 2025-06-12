# Linux: Add Sudo User to Ubuntu System

Linux: Add Sudo User to Ubuntu System

# Linux: Add Sudo User to Ubuntu System

### Add Sudo Enabled Service Account on an Ubuntu System

__Step 1 –__ SSH into node. This will have to be done for each node.

__Step 2 –__ Add  user, we’ll use ___example\_user___ and an example user: ```sudo adduser example_user```

__Step 3 –__ Set user password.

__Step 4 –__ You will be prompted for user information. You can fill in or leave all blank.

__Step 5 –__ ```y``` for information correct.

__Step 6 –__ Add the user to the sudo group: ```sudo usermod -aG sudo example_user```

__Step 7 –__ Test sudo for user:

- Switch to user: ```sudo su - example_user```
- Test with simple command:  ```sudo date```
- Enter password

### Optional:  Turn off Password Check

__Step 1 –__ Switch to root user as a failsafe: ```sudo su - root```

__Step 2 –__ Switch back to user you logged in with, replace <username> with name of user : ```su - <username>```

- Now if the /etc/sudoers file is not edited properly, you can 'exit' to root to fix.

__Step 3 –__ ```sudo visudo -f /etc/sudoers```

__Step 4 –__ Add line to bottom: ```example_user ALL=(ALL) NOPASSWD:ALL```

__NOTE:__ Note: If the solution provider has a specific entry they use here, you can use that. This provides passwordless sudo for all commands.

__Step 5 –__ [Ctrl]+x to exit

__Step 6 –__ ```Y``` to save

__Step 7 –__ Hit ```[Enter]``` to write file

__Step 8 –__ Test that sudo still works: ```sudo date```

- If sudo fails, ```exit``` to root
- Go to step 4 and verify added line is correct.
- Without exiting root, switch back to user you logged in with, replace <username> with name of user
- ```su - <username>```
- Test sudo: ```sudo date```

__Step 9 –__ Exit to root with:  ```exit```

__Step 10 –__ Switch to example\_user: ```sudo su - example_user```

__Step 11 –__ Test that sudo works without password: ```sudo date```

__Step 12 –__ Done. Exit out of all terminals.
