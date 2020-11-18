# warmUps !

# When using RBK machines!
##### Always .. don’t forget to erase Git credentials from RBK machine:

1. **check for the last name and email by the commands:**
```sh
$ git config --global user.name
$ git config --global user.email
```
2. **delete the last credentials for that username and email by the commands:**

```sh
   git config --global --unset user.name "the appeared username"
   git config --global --unset user.email "the appeared email"
```

3. **on windows machines ONLY, delete the credentials by searching the windows search bar for the keyword, credentials in your machine and clicking on the credentials manager, and after that remove the GitHub credentials from your machine (look at the photo below)**
  ![](https://res.cloudinary.com/dwtaamxgn/image/upload/v1605271972/credentials_sqddaq.png)

- 3.1 **on Linux it's not required because you will have to enter the credentials every time you want to push/pull**



## FIRST-TIME WORK 
 __NOTE__ - _make sure you have a GitHub account_ 
 __NOTE__ Set your name and email in the terminal by following these
```sh
git config --global user.name YOUR_GUTHUB_NAME
git config --global user.email YOUR_GUTHUB_EMAIL
```

1. Fork the required warm-up repo (check slack to see link).

2. From your Terminal, clone the _forked_ repo to your local Desktop, (you can find it in your Github repositories).
   git clone https://github.com/UserName/RepoName

3. From your terminal, Navigate to _the forked repo_.
   cd rbktn06-warmups OR just open the terminal inside the forked folder.
   
4. Create a new remote locally by running this command in your terminal:

   git remote add TheRemoteName RepoLinkHere

   example:
   ```sh
   git remote add RBK https://github.com/rbk-org/warmUp
   ```
4. Read the question, solve it, and save.

5. Use git status to check the changed files.
   ```sh
   git status
   ```
6. Stage the changes of the file.
   ```sh
   git add fileName.js
   ```
7. Commit your changes
    ```sh
   git commit -m"YOU_MESSAGE"
   ```
8. Push your code to your GitHub account
    ```sh
   git push origin master
   ```
9. when you execute the command push, you will be instructed to sign in with your account username and password, 
**ON windows** it's only the first time, and the pc will automatically save your credentials for you.
**ON Linux**, you will need to enter your credentials every time you want to push to your repo 

10. share your solution with the administration, from your forked repo in your Github account, select Pull Requests and then click on create a New pull request.

11. STOP. Before you Click to create a pull request for this comparison you must adjust the target branch (aka base branch) to be your username. Once changed, the pull-request heading should look like this:
   _rbk:username ... username:master_


12. Click Send pull request

Daily work

1. IF YOU ARE using our machine DELETE the Warmup folder from the Desktop
2. Check the git conf

If you are using a different machine, repeat the steps mentioned above (without forking again ).

2. Get the new daily warm-up by pulling it from the remote.
   git pull yourRemoteName master
   example: 
    ```sh
   git pull RBK master
    ```

   Note: if you can’t remember your remote name, use the following command to know
    ```sh
   git remote -v 
    ```
3. Read the new warm-up exercise, solve it, and save.
4. Use git status to check the changed files.
    ```sh
   git status
    ```
5. Stage the changes of the file.
    ```sh 
   git add fileName.js
     ```
6. Commit your changes
    ```sh
   git commit -m “yourMessage”
     ```
7. Push your code to your GitHub account
   ```sh
   git push origin master
    ```
 7. share your solution with the administration, from your forked repo in your Github account, select Pull Requests and then click on create a New pull request.
 8. STOP. Before you Click to create a pull request for this comparison you must adjust the target branch (aka base branch) to be your username. Once changed, the pull-request heading should look like this:
   _rbk:username ... username:master_
8. Click Send pull request
9. You are all done.
