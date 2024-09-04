# Frontend Mentor - Mortgage repayment calculator

![Design preview for the Mortgage repayment calculator coding challenge](./preview.jpg)

## Welcome! 👋

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

## The challenge

Your challenge is to build out this mortgage repayment calculator and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Kevin's Official Painstaking technical documentation of this calculator app.

It was a long journey but I made it out alive 😭

## Tools used

> These are the tools that I used for this project

- NextJs
- TypeScript
- TailwindCSS
- React-hook-form
- Vercel
  That's it, no component library... I'm cut from a different cloth bruv!

## Technical difficulties I encountered and how I navigated them.

- <strong>TypeScript</strong>: Let's start off with the fact that this was the first time I was using typeScript for anything serious... Normally this would have taken me a day or two to develop but it almost took me a week because I had to know the types of variables I was passing as props and don't let me get started on the fact that I almost cried when it came to implementing the context API with typeScript. Regardless, tears clean eyes and give you better insight 😭. My main problem with this came when I was passing props to components, passing values to component functions and implementing the React Context API.
  On this note, if you were curious enough to look at my code, you will find out that I commented out some reusable components and instead painfully wrote the input components one by one instead of building once and re-using infinite times like a 10xer (lol). But I will refer to that once I get the hang of typeScript and that will be my next update on the code running this calculator.
  I read a few articles on the internet on how to implement the React Context API with typeScript, pass down and recieve props and these include:

* [Using contextAPI with typeScript](https://blog.logrocket.com/how-to-use-react-context-typescript/)
* [How to pass elements as props in react with typeScript](https://dev.to/mconner89/passing-props-in-react-using-typescript-20lm)

I also learned that event handlers are of type `React.ChangeEvent<HTMLInputElement>`
I learned how to use interfaces and custom types in typeScript.
I learned how to use type castin on a hook... `useContext()` hook in particular.

- <strong>React-hook-form</strong>: For a long while, I had refused to admit that form validation was my biggest bottle neck in frontend development and
  I used to run away from this by adding `required = true` to my `<input />` tags. Therefore the browser would help me with that but I had to fight that complacency and actually learn... which I did of course. So I learned how to validate my form input fields with [react-hook-form](https://react-hook-form.com/) which was a beautiful kind of pain. These are the following features/functions I managed to use from this hook:
  Note: I kind of read the documentation... there wasn't much to read anyway

* Error handling
* Form state
* register
  There's much more to learn from this hook and I'm going to take my time to get comfortable with it.

- <strong>Formating input in an input field</strong>: I will never again scoff at small details of applications that seem so easy to implement because
  this thing was a pain in my neck... I'm tyring to keep it PG here but you get my sentiment. So I basically had to make sure that the input field with Mortgage Amount had a thousand comma separator and this thing took me almost a whole 20hrs to figure out and after ploughing through various resources and videos, guess who helped me... [Perplexity AI](https://www.perplexity.ai/). That's true, I had to use a chatbot to get this but hey! a win's a win. Anyways, this is the proceedure that I got from it.

```
### 1. Add a custom formatting function (It uses regex)
const formatNumber = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

### 2. Use it in your input field (The regex here makes sure that only digits are accepted)
<input
    type="text"
    value={formatNumber(value)}
    onChange={(e) => {setValue(e.target.value.replace(/\D/g, ""))}}
 />

 ### 3. Removing the commas before sending the value to the server or before using it for calculations.
 const handleSubmit = () {
    const cleanedValue = value.replace(/,/g, "")
 }
```

Note: I also finally learned what TabIndex is all about... It enables us control how keyboard users navigate input components in a web app.
Also in my side quest to format the input field to allow thousands comma separator, I learned that inputFields have keyboard events and these cannot be passed as props to EventHandlers because they only partain to the keyboard. They are of a different type (In simple words)

- <strong>App logic</strong>:
  I explained this hustle in my [README](./README.md) but I saved this in [this file](./logic/mortgage.ts)

## Any other business

1. For those wondering, I used mobile first design with this project... I usually careless about this.
2. I wanted to add a show history feature but I felt like it would kill the design.
3. I recommend learning typeScript.
4. My next project will hava a Go backend... Learn Go.
5. Shout out to [Ezra](https://github.com/ezraorbit?tab=overview&from=2024-09-01&to=2024-09-05) for keeping me accountable... He really just kept making noise when I didn't commit my changes... Someone should tell him that sometimes we spend hours making changes and changing nothing 😩
6. If you see [Josh](https://github.com/ApplePieGiraffe), tell him to touch grass.

Ps: I used a color picker to get the colors right... The descriptions in the HTML files were a bit misleading 😂

Remember... Rome wasn't built in one day, but a sand castle was... I don't know what that's supposed to mean either but if you're and employer reading this, hire me... I think I'm funny.

[Programming is easy, it's just perspective:](./public/images/selfdrivingmeme.jpeg)
