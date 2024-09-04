# Mortgage Calculator App Documentation.
This is a guide on how to use this application. I'm not really good at markdown but I'll get the hang of it.

## What is Mortgage?
So, many of you might not know but I live in a 3rd world country and therefore mortgage is usually a typical loan to most of everyone. Although people that use bank accounts... like me know what this is ()
This is the dictionary definition of mortgage: An agreement between you and a lender that gives the lender the right to take your property if you don't repay the money you've borrowed plus interest.

## Mathematics behind mortgage.
I have a pretty solid mathematical foundation although I'm a little too careless with my values so I end up getting wrong answers with the right methods 😭
Enough with the chit chat... let's get to the riff raff! (Cringe)
Assume a Principal (P), an interest rate (R), a Term (T) and number of months = 12 (n)... That isn't 12n btw
Now that you have that, I don't know how to type fractions on a computer but here goes

<br>

Mortgage = (P * R/n)/(1 - (1 + r/n)^-nT)

<br>

Now I know you want to argue with my maths but joke's on you, [this_guy](https://youtu.be/-5cw1xc8pTw?si=JN_zy1INlYEHwI9y) did it now argue with him.

## Mathematics behind interest only.
I'm not going to lie, I kinda winged this one 😬 but not to worry, I got an A in mathematics back in high school.
So, after watching a few videos explaining interest only in relation to mortgage, I managed to get a hold of a formular that made sense.
<br>
Assume a Principal (P), an interest rate (R), a Term (T).... Oh come on, it's the same assumptions from the previous calculations.
Let's get this party started with I = (P * R)/12 ... This is what I used for the monthly interest and then for the yearly one, I simply multiplied that with T*12... For those who feel lost **sigh** Yearly Interest Only = ((P * R)/12)*(T*12)

## Interface.
### I had fun coding this interface in TypeScript for the first time 🧢
> I started with the form and I'll get into details of my development experience and tools used in my [README](./README.md) therefore with this documentation, I intend on only telling you and your grandma how to use this calculator... Give me a dollar if it's useful because I'm on a journey to beat Elon Musk as the richest man in the world and then I build a galactic empire... Wait back to the documentation. Zuck is a lizard... Just saying, if you are affiliated to anything Meta and you are reading this, don't tell him I said that, I'm highly unemployed and I need to buy a CyberTruck.
> Anyways, the interface consists of a card centered in the middle of the body and that card is composed of a form to submit inputs on the left (desktop) or the top (Phones... ew) and a display div on the right (desktop) or bottom (Phones... It better be a pixel). The form fields include Mortgage Amount, Mortgage Term, Mortgage Rate and two radio buttons to help you decide whether you want to calculate mortgage or Interest only. The form fields accept numerical values although the Mortgage amount field formats it to add thousand comma separators and the form won't submit unless all fields are filled (Pun very much intended) therefore, it will throw an error message.
> When the form hasn't submitted anything, the display renders place holder content to let the user know that that's where they will be able to see their results. Upon submission, it then renders a component that shows the resutls for both the monthly calculations (in lime green) or the yearly calculations. 
> There you have it... That's how you use the app! Are you now inspired to learn how to make calculator? I'm not... I don't even know why I chose this project because I don't intend on taking any loans... The student loan is tough enough but I learned a bunch of things from building this project like how painful but useful and much better it is to use TypeScript, using react-hook-form to validate my form and obviously a bunch of tailwind-css features like has-, peer- more on that on the [README](./README.md).

Note: Donald Trump said this "Life is about what you do when you are waiting to die... do a good job" I'm paraphrasing but yeah... Is this calculator going to make me billions, no... but it's teaching me the skills I need to get there!