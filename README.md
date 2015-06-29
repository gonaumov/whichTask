This is a task which I developed when applying for a job in the company 
[Which?](http://www.which.co.uk/) I answered all the questions of the interview and sent task in two days. 
After my publication here I got some strange feedback. Will add my answers here. 

1. Project layout.
  * Comment: The candidate hasn’t fully followed the requirements for the layout. The responsiveness is missing.
  * Answer: I don't think so. 
    This is from the requirements: 
    Constraints: On mobile devices the grid will display 1 number per row. On tablet devices 2 
    numbers per row and on desktop and larger devices 3 numbers per row.
    There are media queries, located in styles.css and they work properly.
2. Coding style (HTML, CSS, JavaScript and tests).
  * Comment: Not very good coding style. The code is hard to read.
    There are too much unnecessary closures usage. Mixing callbacks and promises is a nonsense.
  * Answer: To return promise from asynchronous operation is good idea IMHO.
3. The test code that you write.
  * Comment: The entire code seems to be untestable because of the anonymous function that wraps everything.
  * Answer: There is a unit tests about important part of the code - multiplesCalculator.
4. Use of object-oriented JavaScript.
  * Comment: Touching Object. Prototype is not a good practice and the candidate used it for adding settings to the Object.
    Used Object directly instead of creating new object. The code is impossible to be extended later because of the closures.
  * Answer: This comment can be argued. To ride JavaScript to behave like classical OOP language is not always a good idea. 
    You can look at the book of Addy Osmany - Learning JavaScript Design Patterns.
5. Use of responsive design. 
  * Comment: No responsive design at all.
  * Answer: See the comment about point 1. There are media queries, located in styles.css and they work properly.
6. Naming conventions used.
  * Comment: Everything is fine here.
  * Answer: I can not believe that there is nothing wrong here.
7. Meeting the above requirements.
  * Comment: The missed the responsive design requirement.
  * Answer: Lying third time. Will repeat - see the comment about point 1.
8. Other comments: It’s nice that he separated the configuration.
  * Answer: Ha-ha.

I encourage people not to waste their time with this company. Other neutral programmers, who saw the task commented that the company
It is extremely incorrect.
