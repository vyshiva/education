Homework 1 - HTML

<p style="color:red">49 tests passed.
0 tests failed.
Great job!</p>

In this assignment, you will modify an existing HTML page that uses inline style attributes so that it instead uses an external CSS file. 


In completing this assignment, you will:
•	Gain experience reading, understanding, and working with existing HTML
•	Apply what you have learned about CSS classes and styling


Background
Recall that there are three ways to use CSS in an HTML page:
1.	using inline "style" attributes within each HTML tag
2.	using internal CSS in the <style> element of the HTML page’s header
3.	using external CSS in a separate .css file that is referred to in the HTML page using the <link> tag


In this assignment, you will be given the HTML for a page that uses option #1 to display a calendar for a particular month, which includes some events that are color-coded, as well as other styling.


Your goal here is to modify the page so that it doesn’t use any inline attributes at all, but instead uses option #3 to include all CSS in a separate, external file.


Getting Started
Start by downloading the original HTML page by right-clicking this link and then saving the file "calendar.html" to your computer. 


When you open it in your web browser, you should see a calendar for the month of August 2017, which includes: 
•	a photo of a dog at the top
•	a grid for showing the weeks of the month in Sunday-Saturday format
•	color-coded boxes within the days for different types of events



 
If you look at the HTML source, you will see that all of the content is within a table (using the <table> tag), which is then organized into rows (using <tr>), and then columns (using <th> and <td>) within each row.


In this table, we’re also using the <thead> and <tbody> elements, which are child elements of the <table>. These were not discussed in the lesson, but they are used for simply providing further organization to the table content.


Last, note that most of the HTML elements have a “class” attribute that will help group elements together for styling, and that most also have a “style” attribute that specify the element’s appearance using inline CSS.


Activity
As discussed in the lessons, one of the drawbacks of using inline CSS is that it can lead to large amounts of repetitive code, which can be difficult to maintain and change. As you see in this example, there are many places in which the styling has been copied & pasted to create different elements, and if something were to change, it would be manually intensive.


In this assignment, you are asked to modify, or “refactor,” the existing HTML code so that it uses an external CSS file instead of inline CSS.


Start by creating a file called calendar.css (you must name it this for grading purposes!) and use the <link> tag in the header of calendar.html to link it to that page.


Then create CSS rules in calendar.css based on the “style” attributes of the HTML elements in calendar.html. Group the rules together based on elements’ “class” attributes and/or HTML element types, keeping the exact same styling rules.


When you are finished putting the CSS rules in calendar.css, delete the “style” attributes for all HTML elements in calendar.html. If you did this correctly, the rendered HTML page should still look exactly the same!


As an example, consider the following HTML element:
<div style=”font-family:Helvetica;”>
In the calendar.css file, you would write the following CSS. Note the style rule remains the same:
div {
font-family: Helvetica;
}
Now it is no longer necessary to have the inline style attribute, so you can remove it from the HTML tag:
<div>


Note that you should not be changing the appearance of the rendered HTML page at all; rather, you are simply moving everything from the HTML elements’ “style” attributes over to calendar.css.


One more important note:
Please do not change the “class” attributes of any of the HTML elements, as these will be used by our tests during grading. 


Likewise, please put all CSS into a single file called “calendar.css” (all lowercase) and be sure that it is in the same directory as calendar.html.


Helpful Hints
Review the lesson for the syntax of linking the CSS file from the HTML page, and for writing the CSS rules. 


Keep in mind that you can write rules not only for classes of HTML elements but also for the type of element. So you can have a rule for a class called “myTestClass” like this:
.myTestClass {
 font-size:75%;
}
and you can also have a rule for all <li> tags like this:
li {
 font-size:75%;
}


Note that it is possible for an HTML element to belong to multiple classes. For instance, if an element were defined like this:
<div class="employee student">
then that element would be in both the "employee" and the "student" classes. In this assignment, start by addressing the elements that are only in one class, and then look for similarities between elements in multiple classes so that you can assign the right styling to the right classes.


Last, rather than trying to make all of the changes to calendar.html at once and hoping that it works correctly, make a small change first and then make sure that the rendered page still looks the same, then make another change and check the page, and so on. That way, if you make a mistake, you’ll know what was most recently changed, rather than having to look through the whole file to see what broke.




