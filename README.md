For the DOM Manipulation Project, I have created a working Calculator from scratch without using any AI for code-generation or for debugging any problem I faced. The most difficult part of the project was to figure out the correct logic with which not only the correct calculations can be performed, but the final result as well as all the operations performed should be correctly displayed. I was confused between two different logics and spent quite some time on making them work until it clicked to me that the correct-working logic was a hybrid of the two.

Here is the logic:

-First Logic: Whichever button the user presses is concatenated to the display.Then numbers are extracted when 'equal to' button is pressed.
-Problem Occured: After one operation and displaying the result, the numbers got lost. The 
calculator was working but only for 2 number operations.

-Second Logic: Use of two seperate arrays, one which store the user input number and one which stores the operation asked for.
-Problem Occurred: No proper way of displaying the operations that take place and concantenate the strings displayed properly.

The Final Logic: A combination of the two. Two Arrays which store numbers and operation. The operation button does the string concatation part for both the result and the operation being taken place and when the equal button is preseed, the solving takes place and result is displayed.

To work on: Adding the BODMAS rule.

Thank You!!
