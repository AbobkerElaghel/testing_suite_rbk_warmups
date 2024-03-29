# WarmUps Tests  

### Intro
This repo is for the technical team to expedite and speed up the grading process for the warmUps, also to unify the repo for the warmUps for all cohorts.

### File-Structure 
```
.
├── specialTests -> private file containing special tests
├── tests -> test files for all the warmUps
├── warmUpsSolutions -> warmUp solutions
├── warmUpsStaff -> warmUps for the students
├── .gitignore
├── jest.config.json -> config file for jest
├── package.json
├── package-lock.json
├── README.md
└── test.gif
```
  
### this Repo Contains  
- All the WarmUps.  
- Solutions for all the warmUps.  
- Test file for each warm Up.  
- README.md file that the students should follow, in the first steps, to get them familiar with git workflow.  
  
>***NOTE***: Warm-Ups 1, 16, 24 have a wide context and are not locked to a specific result, Thus,  a test file can't be created for them, and they are best suitable to be tested manually.  
  
# How to use  
1. Clone the repo in your computer.
2. Install the dependencies using npm i.
3. Copy the solution of the student to it's specified file in the warmUpStaff folder.  
4. Navigate to the tests folder and run the specified test for that warmUp by running.
 ```sh  
jest warmUpXX.test.js   
```  
OR you can just Run  
```sh  
npm run testXX  
```  
where X is the number of the warmUp.  
  
## Quick Visualization   
![](./test.gif)  
  
jest will run the tests for you and give you a result of the passing tests and the failing tests.  
  
  
  
>***NOTE***: If you experienced any issue, or you have any type of feedback, please do send it to this email.  
> abobker.elaghel@rbk.tn  
> Your feedback and input are highly appreciated and it is the only way to improve and fortify the quality of the product.  

***Sincerely***,  
***Abobker Elaghel***  
