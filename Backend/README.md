# CASBCAST BACKEND CODE 

## Project Status

This project is currently in development. The API skeleton and expected payload have been completed, and the database tables are ready. The implementation to integrate both is yet to be done. 


## DATABASE FOLDER
# **Server**
This project uses Microsoft SQL Server as its database server. 


## INSTALLATION 

WINDOWS: https://www.microsoft.com/en-in/sql-server/sql-server-downloads

MAC: https://learn.microsoft.com/en-us/azure-data-studio/download-azure-data-studio?view=sql-server-ver16&tabs=macOS-install%2Cwin-user-install%2Credhat-install%2Cwindows-uninstall%2Credhat-uninstall


## Opening the Database Project

To open the database project in Microsoft SQL Server or Azure Data Studio, open the `Cabcast.Database.sqlproj` file. This file contains the configuration and structure of the database project and can be opened directly in these tools.


## Database Structure

The `Database` folder in this project is organized into separate schemas as individual folders. Each schema contains related tables and stored procedures. This structure helps in maintaining the database more efficiently and makes it easier to understand the relationships between different parts of the database.


### Example: 

In the `Cabcast.Database/Setup/StoredProcedure/Driver/`, directory which contains all the stored procedures related to the `Driver` entity. 

Similarly, under the `Tables` directory, we have a `Driver` directory which contains all the tables related to the `Driver` entity.


## APPLICATION FOLDER

## INSTALLATION 
DOWNLOAD : https://visualstudio.microsoft.com/downloads/

## Running the API Project

To open the API project, navigate to the directory containing the `api.sln` file. This file is a Visual Studio Solution file that contains the configuration and structure of the API project.

To run the project, you can use Visual Studio or the .NET CLI. 

In Visual Studio, you can simply open the `api.sln` file and press `F5` to start debugging.

If you're using the .NET CLI, navigate to the project directory in your terminal and run the following command:

cmd: dotnet run