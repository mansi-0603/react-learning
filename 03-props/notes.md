que - what is props ?
ans - props is just a keyword which is used to pass data from parent to child element.

\*\*
data flow hain -> uppr se niche not vice versa

App - parent -> data is mostly kept here basically concentrated and then data is flowed to other components or child element

Card - child

IN APP.jsx

 <Card user = 'Bob' age ={20} />

we are passing the values for Card.jsx through this way
and if
age = '18' is this means that string is passed.
and age = {18} this depicts that a number is passed.
