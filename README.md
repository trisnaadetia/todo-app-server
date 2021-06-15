# Fancy-Todo

Show Todos
----
  Returns json data all Todos.

* URL

  /todos

* Method:

  GET
  
*  URL Params

    None

* Request Body

    None

* Success Response:

  * Code: 200 <br />
        Content: 
    
        {
            "id": "....",
            "title": "....",
            "description": "....",
            "status": "....",
            "due_date": "....",
            "createdAt": "....",
            "updatedAt": "...."
        }
    
 
* Error Response:

    * Code: 401 <br />
        Content: 
    
        {
            "message": "Unauthorized"
        }
    

    * Code: 500 <br />
    Content: 
    
        {
            "message": _based on error sequelize message_ || "Internal Server Error"
        }
    

----

Create Todos
----
  Returns json new data Todos.

* URL

  /todos

* Method:

  POST
  
*  URL Params

    None

* Request Body

    
    title:string
    description:string
    status:string
    due_date:date
    

* Success Response:

    * Code: 201 <br />
    Content: 
    
        {
            "id": ".....",
            "title": ".....",
            "description": ".....",
            "status": ".....",
            "due_date "......",
            "updatedAt "......",
            "createdAt"......."
        }
    
 
* Error Response:
    * Code: 400 <br />
    Content:

        _based on validation error sequelize:_
        
        {
            "message": [
                "Title must be required",
                "Description must be required",
                "Status must be required",
                "Check your input date",
                "Date must be required and formated date"
            ]
        }
        

    * Code: 500 <br />
    Content:
        
        {
            "message": _based on error sequelize message_ || "Internal Server Error"
        }
        

----

Show Todos By Id
----
  Returns json data Todos based on Id.

* URL

  /todos/:id

* Method:

  GET
  
*  URL Params

    Required:
 
   id=[integer]

* Request Body

    None

* Success Response:

  * Code: 200 <br />
        Content: 
    
        {
            "id": ".....",
            "title": ".....",
            "description": ".....",
            "status": ".....",
            "due_date": ".....",
            "updatedAt": ".....",
            "createdAt": "....."
        }
    
 
* Error Response:
    
    * Code: 401 <br />
        Content: 
    
        {
            "message": "Unathorized"
        }
    

    * Code: 404 <br />
        Content: 
    
        {
            "message": "Error not found"    
        }

    * Code: 500 <br />
        Content:
        
        {
            "message": _based on error sequelize message_ || "Internal Server Error"
        }
    

----

Update Todos By Id
----
  Returns json data Todos updated Based On Id.

* URL

  /todos/:id

* Method:

  PUT
  
*  URL Params

    Required:
 
   id=[integer]

* Request Body

    title:string
    description:string
    status:string
    due_date:string
    

* Success Response:

    * Code: 200 <br />
        Content: 
    
        {
            "id": ".....",
            "title": ".....",
            "description": ".....",
            "status": "....",
            "due_date": ".....",
            "updatedAt": ".....",
            "createdAt": "...."
        }
    
 
* Error Response:

    * Code: 401 <br />
        Content: 
    
        {
            "message": "Unauthorized"
        }
    

    * Code: 400 <br />
        Content:

        _based on validation error sequelize:_

        {
            "message": [
                "Title must be required",
                "Description must be required",
                "Status must be required",
                "Check your input date",
                "Date must be required and formated date"
            ]
        }
         

    * Code: 404 <br />
        Content:
        
        {
            "message": "Error not found"
        }
         

    * Code: 500 <br />
        Content:
        
        {
            "message": _based on error sequelize message_ || "Internal Server Error"
        }
        
----

Patch Todos By Id
----
  Returns json data Todos patched Based On Id.

* URL

  /todos/:id

* Method:

  PATCH
  
*  URL Params

    Required:
 
   id=[integer]

* Request Body

    status:string

* Success Response:

    * Code: 200 <br />
        Content: 
    
        {
            "id": ".....",
            "title": ".....",
            "description": ".....",
            "status": "....",
            "due_date": ".....",
            "updatedAt": ".....",
            "createdAt": "...."
        }
    
 
* Error Response:

    * Code: 401 <br />
        Content: 
    
        {
            "message": "Unauthorized"
        }
    

    * Code: 400 <br />
        Content:

        _based on validation error sequelize:_

        {
            "message": [
                "Status must be required"
            ]
        }
         

    * Code: 404 <br />
        Content:
        
        {
            "message": "Error not found"
        }
         

    * Code: 500 <br />
        Content:
        
        {
            "message": _based on error sequelize message_ || "Internal Server Error"
        }
        
----

Delete Todos
----
  Return json information delete.

* URL

  /todos/:id

* Method:

  DELETE
  
*  URL Params

    Required:
 
   id=[integer]

* Request Body

    None

* Success Response:

  * Code: 200 <br />
        Content: 
    
        {
            "message": "Todo success to delete"
        }

... 
* Error Response:

    * Code: 401 <br />
        Content: 
    
        {
            "message": "Unauthorized"
        }

    * Code: 404 <br />
        Content:
        
        {
            "message": "Error not found"
        }
         

    * Code: 500 <br />
        Content:
        
        {
            "message": _based on error sequelize message_ || "Internal Server Error"
        }


----

Register User
----
  Return json new user in todos.

* URL

  /register

* Method:

  post
  
*  URL Params

    None

* Request Body

    username:string
    email:string
    password:string

* Success Response:

  * Code: 201 <br />
    Content: 
    
    {
        "id": ".....",
        "username": ".....",
        "email": "......",
        "updatedAt": ".......",
        "createdAt": "......"
    }
    
 
* Error Response:
    * Code: 400 <br />
        Content:
        
        _based on validation error sequelize:_

        {
            "message": [
                "Username must be required",
                "Input must be format email",
                "The password length should be minimum 6 characters"
            ]
        }
         

    * Code: 500 <br />
    Content:
        
        {
            "message": _based on error sequelize message_ || "Internal Server Error"
        }

----

Login User
----
  Return json json token.

* URL

  /login

* Method:

  post
  
*  URL Params

    None

* Request Body

    email:string
    password:string

* Success Response:

  * Code: 200 <br />
        Content: 
    
        {
            "id": ".....",
            "email": ".....",
            "access_token": "....."
        }
    
 
* Error Response:
    * Code: 400 <br />
        Content:
        
        {
            "message": "Invalid Password or Email"
        }
                

    * Code: 500 <br />
        Content:
        
        {
            "message": _based on error sequelize message_ || "Internal Server Error"
        }

----


**3rd party API**
* **API**
    
    News
    
* **URL**

    /news

* **Mehtod**

    'GET'

* **URL Params**
    
    none

* **Data Params**

    {
        country: 'id',
        apiKey: NEWS_API
    }

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
        {
            "source": ".....",
            "title": ".....",
            "description": "....",
            "url": "....",
            "author": ".....",
            "imageUrl": "....."
        }
    
 
* **Error Response:**
    * **Code:** 500 <br />
    **Content:**
        
        {
            "message": _based on error sequelize message_ || "Internal Server Error"
        }




**3rd party API**
* **API**
    
    Prayer Time
    
* **URL**

    /prayer

* **Mehtod**

    'GET'

* **URL Params**
    
    none

* **Data Params**

    {
        city: 'jakarta'
    }

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
        "times": {
            "Imsak": "....",
            "Sunrise": "....",
            "Fajr": "....",
            "Dhuhr": "....",
            "Asr": "....",
            "Sunset": "....",
            "Maghrib": "....",
            "Isha": "....",
            "Midnight": "...."
        }
    
 
* **Error Response:**
    * **Code:** 500 <br />
    **Content:**
        
        {
            "message": _based on error sequelize message_ || "Internal Server Error"
        }

