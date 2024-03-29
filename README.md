# Bay Area County COVID 19 Dashboard Mobile Application
Developed an Android and iOS COVID Dashboard to list the total COVID cases by city in a particular Bay Area County, updates/deletes user's inputted Test Results, take a Daily Symptom Survey, display Health Badge, provides COVID 19 Resources, and presents Q&amp;A discussion.

<img src="images/HomePageCovid.png" alt="HomePageCovid" width="300"/>

**Main.js and OptionList.js**     
&emsp;&emsp;&emsp;- Uses Stack Navigator                                                                                                                      
&emsp;&emsp;&emsp;- Stack Navigator provides a way for your app to transition between screens                                                                        
&emsp;&emsp;&emsp;- Each new screen is placed on top of a stack                                                                                                   
&emsp;&emsp;&emsp;- Navigates between the Main COVID Dashboard Screen and other options                                                                           
&emsp;&emsp;&emsp;- Options include COVID Statistics, Symptom Survey Questions, Health Badge Report, Q&A Discussion                                                    

**CityList.js and CityCard.js and DetailList.js**     
&emsp;&emsp;&emsp;- Uses the COVID-19 data for all the cities from Alameda County Open Data                                                                            
&emsp;&emsp;&emsp;- Provides a list of all cities in Alameda County                                                                                                    
&emsp;&emsp;&emsp;- Navigates to each city location to obtain detailed statistics                                                                                       
&emsp;&emsp;&emsp;- Navigates between the City Screen and other options                                                                           
&emsp;&emsp;&emsp;- Provides total covid cases, age group most affected, and total deaths  

<img src="images/CitiesList.png" alt="CitiesList" width="300"/>
<img src="images/CovidCasesResults.png" alt="CovidCasesResults" width="300"/>

**ResultTracker.js and ResultTrackerCard.js**     
&emsp;&emsp;&emsp;- Allows a user to enter their test result and add to history screen                                                                                 
&emsp;&emsp;&emsp;- User can also delete a test result from their history screen                                                                        
&emsp;&emsp;&emsp;- ResultTrackerCard.js is used to display the text provided by the user                                                                               
&emsp;&emsp;&emsp;- Uses one of the Hooks provided by React called useState                                                                       
&emsp;&emsp;&emsp;- Unique and responsive card style implemented                                 

**Guidance.js and Resources.js and SurveyQuestions.js**     
&emsp;&emsp;&emsp;- Guidance.js screen which provides the Q&A portion of the app                                                                               
&emsp;&emsp;&emsp;- Provides the most common questions regarding COVID-19                                                                                               
&emsp;&emsp;&emsp;- Resources.js screen which provides the COVID-19 resources                                                                                     
&emsp;&emsp;&emsp;- SurveyQuestions.js screen where users take a symptom survey check                                                                           
&emsp;&emsp;&emsp;- All questions are answered and submit btn is pressed, user is navigated to the previous screen       

<img src="images/HealthSurvey.png" alt="HealthSurvey" width="300"/>
<img src="images/ResourcesPage.png" alt="ResourcesPage" width="300"/>

**HealthBadge.js and HealthBadgeColor.js and HealthBadgeColorPos.js**     
&emsp;&emsp;&emsp;- Contains screen where a user shares there COVID-19 test result                                                                   
&emsp;&emsp;&emsp;- Positive or Negative Button will navigate to the appropriate screen                                                                                 
&emsp;&emsp;&emsp;- Displays a GREEN screen when the COVID-19 test result is NEGATIVE                                                                                   
&emsp;&emsp;&emsp;- Displays a RED screen when the COVID-19 test result is POSITIVE          

<img src="images/CovidNegative.png" alt="CovidNegative" width="300"/>
<img src="images/CovidPositive.png" alt="CovidPositive" width="300"/>

