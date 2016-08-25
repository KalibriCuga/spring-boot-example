REST service backend
==========
Backend server which serves a simple web service.

On execution, hosts 2 RESTful web methods:
* Save person
* Find people with given name

# Prerequisites
* Oracle Java 8 JDK installed on machine

# Running the pre-built artifact
Download [demo-webapp-1.0.0.war](https://github.com/KalibriCuga/spring-boot-example/tree/master/demo-webapp/executable)
In a terminal, navigate to the directory containing the artifact and execute:

    `java -jar demo-webapp-1.0.0.war`

You should see the server log output as it runs.

To close the server, press `control + c` on the keybaord within the Terminal window.

# Rest service specification
## Save person
The 'save person' method accepts POST requests at:

    `http://localhost:8080/person/save`

This endpoint expects the content-type header to be 'application/json' a data payload of the form:

    {
      "name": "timmy",
      "age":32
    }
    
Successfully invoking this web method will save the given Person object and return a response:

    {"value":true}

### cURL example
An example of successfully invoking this service via the command line utility cURL:

    curl -X POST -H "Content-Type: application/json" -d '{ "name":"timmy", "age":32 }' "http://localhost:8080/person/save"
    {"value":true}
    
## Find person
The 'find person' method accepts GET requests at:

    http://localhost:8080/person/find/timmy
    
The last part of the above URL is the name of the person who is being queried (note: it is case-sensitive).

The response of this method is a list of Person objects.

### cURL example
An example of successfully invoking this service via the command line utility cURL:

    curl -X GET "http://localhost:8080/person/find/timmy"
    [{"id":"579d60c0b428cd1d3b8832cd","name":"timmy","age":32}]
  
    
