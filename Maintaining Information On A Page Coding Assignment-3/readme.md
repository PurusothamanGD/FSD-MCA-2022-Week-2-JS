# Maintaining Information on a Page

## Maintaining Information on a Web Page while Scheduling and Repeating Executions
So far, we've seen how we can schedule a code execution after a set number of seconds has elapsed. We've also seen how we can make that execution repeatable over time. However, the content that we scheduled and displayed on the console has only been static so far.

In this task, we're going to add some dynamic content to be displayed on the console. This dynamic content will be scheduled, repeated, and will change over an interval of time. This could be helpful for example if you wanted to display a countdown clock on the checkout page of your e-commerce website.

### You task in this activity is to do the following:

- Declare a variable called "counter" and set its value to 0.
- Write a function in JavaScript that will increment the variable "counter" by 1 every time it is called.
- Schedule the execution of the function you created to be executed every three seconds.
- Use `console.log` to show the results of the function call.

You will notice how JavaScript allows you to keep track of the dynamic "counter" content every time your code repeats execution (ex. counter clock counting down).

## Wondering where the "Console" is?
The browser console is a developer tool that helps you visualize what is happening on your web page. It displays all sorts of helpful information like page script errors that will help you debug issues as you build your web application.

To access the console, follow these steps:

- Locate the Web Browser pane on the bottom-right corner of this page.
- Right click anywhere on that pane and click on "Inspect"
- A new pane will now be visible on your page.
- Locate the Console tab at the top of the new pane.
- Congratulations! You have found the browser console.

Alternatively, you could always show the console log by hitting the F12 key on your keyboard at any moment while on this page.

__Note:__ _If you see messages in your console that are highlighted in yellow, do not worry. They are just informational messages about the current page you're on. To remove these messages, click anywhere on the console pane to highlight them, then hit CTRL+L on your keyboard if you're on Windows, and Command + K button if you're on MacOS_

## Checking results
After you're done adding your code for this task, you can check if your code works by examining the console output to locate the message "Hello World". When you're confident that your code works, click on the check box below to validate the task.

### Task

- Increment counter every three seconds