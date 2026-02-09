# SysTestJS

A simple requirements and system test plan builder.

## Getting Started

The base data for the project is stored in a single JSON file. 
You can either upload an existing one or create a new one. Once
you are done with your work, you can save it by downloading to your
local computer. You can also convert the requirements and system tests
(separately) to Markdown, single HTML, or a set of multiple HTML files for 
*slightly* better presentation.

## Workflow

There are three basic objects you will work with, besides some metadata
like the project name: categories, requirements, and tests

Categories are what they sound like: broad categories for areas of your
project. These can focus around specific features, user types, or whatever
you want! You are free to create and edit categories, but deleting them *will* 
remove the associated requirements and tests.

Each Category has an associated requirement style: Traditional, Use Case, or User
Story (suggestions for more are welcome).

When adding a new Requirement to a category, it will start with a template for the
requirement style of that category. Requirements are simple: fill them out and be
done with it. You can get a bit fancier if you'd like to link to other requirements.

Each Test has an associated Requirement that it is testing. Tests consist of a textual
description of preconditions for the test, the actions to perform during the test, and
the expected results. Each test can have one or more actual results of running the test,
and users can choose how long the history of results for each test should be when 
downloading the test plan in a markup format. 
