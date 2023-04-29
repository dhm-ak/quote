const quotes = [
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "So many books, so little time. - Frank Zappa",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "If you tell the truth, you don't have to remember anything. - Mark Twain",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "No one can make you feel inferior without your consent. - Eleanor Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "We are all in the gutter, but some of us are looking at the stars. - Oscar Wilde",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "The best way to predict the future is to invent it." ,
    "If you want to achieve greatness stop asking for permission.",
    "Things work out best for those who make the best of how things work out.",
    "To live a creative life, we must lose our fear of being wrong.",
    "If you are not willing to risk the usual you will have to settle for the ordinary.",
    "Trust because you are willing to accept the risk, not because it's safe or certain.",
    "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
    "Good things come to people who wait, but better things come to those who go out and get them.",
    "If you do what you always did, you will get what you always got.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
    "Successful entrepreneurs are givers and not takers of positive energy.",
    "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.",
    "Opportunities don't happen, you create them.",
    "Try not to become a person of success, but rather try to become a person of value.",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "If you don't value your time, neither will others. Stop giving away your time and talents- start charging for it.",
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    "No one can make you feel inferior without your consent.",
    "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
    "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.",
    "The ones who are crazy enough to think they can change the world, are the ones that do.",
    "Don't let yesterday take up too much of today.",
    "You miss 100% of the shots you don’t take.",
    "You can't build a reputation on what you are going to do.",
    "If you want to make your dreams come true, the first thing you have to do is wake up.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "What's the point of being alive if you don't at least try to do something remarkable?",
    "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
   
  ];
  
  const quoteElem = document.getElementById("quote");
  const generateBtn = document.getElementById("generateBtn");
  
  generateBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElem.textContent = randomQuote;
  });
  