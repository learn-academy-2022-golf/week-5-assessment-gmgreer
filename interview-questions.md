# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: Super pulls in the values that you want the new class to inherit.

Researched answer: Super looks for a method of the same name in the parent class, this can be pulled down multiple times. Super can be called with or with out arguments. 

Super without parentheses has implicit arguments and will pass any arguments given to a child class to the parent possibly causing bugs if unintended. Add parentheses if you have any methods on the parent of the same name that you don't want to receive those implicit arguments.

Super can only be used inside of a method. 

2. What is a gem?

Your answer: A gem is a packet created by somebody that performs a specific task or tasks. It is a snippet of code that can be used as a tool in your own code. 

Researched answer: Each gem has a name, version, and platform. Inside each gem is the Code including tests and supporting utilities, documentation, and gemspec. Each gem follows a standard structure which I will not get into here but I did read it I promise. The gemspec is the information about the gem itself such as the name, version, description, authors and homepage

3. What is a relational database? Are there other kinds of databases?

Your answer: Relational databases are databases that can hold complex relationships with different tables and data sets.  Yes there are other kinds of databases but I do not know them. I think SQL databases are generally relational databases. I am not sure but I think some of the JSON styled databases such as Mongo may not be considered relational though they can certainly hold relationships.

Researched answer: A relational database is divided into rows and columns. Each row in the tables is a record with a unique ID or key. The columns hold the attributes of the data. With this if two different tables hold the same key such as a user or customer id then one can connect the information of one table to another allowing them to be relational. 

There are non relational databases, and MongoDB is one of them. These types of databases have some advantages. They can hold large amounts of data with little structure. They are more scalable and flexible to changing requirements. Have the ability to capture all types of data including unstructured data.

4. What are primary keys? Why are they important?

Your answer: Each table has only one primary key, this must be a unique value that will not be repeated. These are the foundation of the relational database and allow for the relational structure. Examples of a primary key may be a unique customer or user id.

Researched answer: Primary keys are the unique link to related information in different tables that also have the same primary key. Social security number could be a great example if there was a huge database and social security numbers were the primary key for many different data types such as military record, driving record, health record, prison record, court record, so on and so forth on could pull in all these related databases and get a huge amount of information quickly with just the primary key.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: POST, GET, PUT, PATCH, DELETE.
Create = POST
Read = GET
Update = PUT, PATCH
Delete = Delete

Researched answer: POST creates something on the database like a username and password if somebody is creating an account.
Read can GET the information with a GET request to the server. Maybe to show the users picture after they login.
Update with a PUT replaces the old data with the new even if some of that data is blank. This is bad if you are just changing a password and you don't send all of the other information about the user up in the PUT it will just replace all those other values as well. while a PATCH will send instructions to the sever to only update the single field given.
Delete DELETES but not really. Usually you keep a record of the deleted data because big companies don't throw data away. This is called a soft delete and just flags the data as deleted without actually deleting it. You can do a hard delete though with data that has no value.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: Representational state transfer is a web architecture style. This is just the communication between HTTP verb/path combinations and CRUD. What was explained earlier.

2. Ruby on Rails: This is a full stack framework that is incredibly easy to use and deploy.

3. Database migrations: Migrating data from one database to another.

4. Params: The things in a function that the function will then use to return data. (param) => console.log(param) Oh, Params not paramaters ha. Anyway Params are what are used to pass information through url requests. Like http://something.com/thing/this. The this might be the param that is passed into a function that does something or tells the client what to retrieve from the backend. If the this was a user id or user name for example then the backend could retrieve this and give back all the users information. Used in apis to get information from the server.

5. ERB: ERB or  embedded ruby is html with ruby embedded. Something like JSX. The rails system will evaluate the file to add content based on the ruby and spit out a pure html file for rendering.
