# &mu;systest

A tiny, simple requirements and system test plan builder.

## Usage
To use &mu;systest, you can either: 
1. visit a hosted website (in the works) 
2. clone this repo and run the program yourself to access the site
    - the program will provide you with a localhost address
    - enter this into your browser to visit the site

## Getting Started

You can begin using &mu;systest by either creating a new project or uploading an existing project's JSON file. 

Projects follow a flow where the user uploads the project data file, makes changes, then downloads the updated project data file along with any desired document views of the project. 


## User Workflow

Once a project is created, you will interact with it via three basic objects: 
- categories
- requirements
- tests

**Categories**:

These are broad categories for different areas of your project
- can be specific features
- can be entire submodules
- can be whateever you want!

You are free to create and edit categories, but deleting them *will* remove the associated requirements.

Each Category has an associated requirement format: 
- Traditional
- Use Case
- User Stories 

(suggestions for more are welcome) 

Categories also come with a text description
of the related subsystem or set of features in your project.

**Requirements**:

Requirements define the functionality of your project or system. You can add new requirements to any category, and you will start with a template for the requirement 
format of that category. 

Requirements are simple: give them a name, fill out the 
description, and you're done! 

**System Tests**:

Once you've created a category and some requirements, you can start adding system tests for those requirements. 

Each test includes:
- a unique name
- one or more requirements that are covered by the test
- and a text description of preconditions, actions, and expected results 

Each test also stores a history of recorded test results - users can choose how much of this history to include when downloading the test plan in a markup format.

# Technical Details

Constraints:
- everything must go in one page: the content will change dynamically through JS based on the actions the user takes
- all of the functionality must be encoded in one (probably very large) JS script (for now):
    - reloading the page will nuke the user's data
- the only way I can see to split this: 
    - run a main script that maintains the data within the unchanging parts of the page (maybe even `<head>`)
    - this script provides functions for modifying the data
    - use a different sub-script script for each logical 'subpage' when the content is changed out


## Feature List / Progress
- [ ] user can create a new project
- [ ] user can load an existing project by uploading the JSON of the project
- [ ] user can add/edit/delete categories in a project
- [ ] user can set/change the style of requirements for a category (traditional, use cases, user stories)
- [ ] user can add/edit/delete requirements in a category
- [ ] user can add/edit/delete system tests
- [ ] user can record new results of a test
- [ ] user can view a complete file of categories, requirements, and tests (number of results to display is configurable)
- [ ] user can view just the categories/requirements individually
- [ ] user can view a single category and its requirements individually
- [ ] user can view just the tests (number of results for each to display is configurable)
- [ ] user can save the project to their machine by downloading its JSON file
- [ ] user can download HTML/Markdown markups of each view of the data
