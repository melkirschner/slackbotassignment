module.exports = function(robot) {
  //  YOUR CODE HERE
  
dessert = [
  "http://images.media-allrecipes.com/userphotos/250x250/708879.jpg",
  "http://i.huffpost.com/gen/1927092/images/o-FROZEN-YOGURT-TOPPINGS-facebook.jpg",
  "http://www.gannett-cdn.com/-mm-/f3407122d7859378db967aa6a346e70d19152800/c=0-118-1416-2006&r=537&c=0-0-534-712/local/-/media/2016/05/04/CNYGroup/Elmira/635979720581763022-icecream.jpg",
  "http://www.guymondailyherald.com/sites/default/files/field/image/apple-pie.jpg"
]
    robot.hear(/my favorite girlscout cookie is (.*)/, function(msg) {
   var favoriteCookie;
   favoriteCookie = msg.match[1];
   console.log(favoriteCookie);
   switch (favoriteCookie) {
     case "samoas":
       msg.reply("That's my favorite too! Here is a tasty toffee recipe with samoas: Pulse two packages of Caramel deLites®/Samoas® cookies in a food processor until crumbled. Sprinkle one-third on a baking sheet lined with foil. In a large saucepan over medium heat, cook 2 cups of butter, 2 cups of sugar and a dash of salt, stirring frequently, until mixture reaches 300°. Remove; carefully pour over crumbled Caramel deLites®/Samoas® cookies, spreading with a spatula to cover. Top with remaining crumbled Caramel deLites®/Samoas® cookies, pressing down slightly. Refrigerate at least 2 hours. When cool, break into pieces. Yield: 10 servings.")
        msg.send("http://images.huffingtonpost.com/2010-02-24-2009_04_02Samoa.jpg");
       break;
     case "thin mints":
        msg.reply("Those are my second favorite. Here is a way to spice those up: In a large bowl, combine popcorn and half of the crushed Thin Mints® cookies. In a microwave, melt baking chips with shortening; stir until smooth. Pour over popcorn mixture; toss to coat. Immediately spread onto waxed paper; sprinkle with remaining crushed Thin Mints® cookies. Melt baking chips in microwave; stir until smooth. Drizzle over popcorn; let stand until set. Break into pieces. Store in an airtight container. ");
        msg.send("https://www.littlebrowniebakers.com/media/images/cookies/lbb-thinmints.jpg.460x259_q100.jpg");
       break;
     case "tagalongs":
       msg.send("https://www.littlebrowniebakers.com/media/images/cookies/lbb-tagalogs.jpg.460x259_q100.jpg");
       msg.reply("Those are so tasty!!! We can make them even tastier with this Caramel turtle recipe. You will need 3 milk chocolate bars, 12 caramels, 12 cookies, and 60 pecan halves. Preheat oven to 250°. Break each chocolate bar into fourths. Place each piece 2 in. apart on a parchment paper-lined baking sheet. Top with one caramel.Bake 5-7 minutes or until caramel just starts to soften. Immediately press one pecan half on one side for head; press four pecan halves onto each corner for legs. Place one Peanut Butter Patties®/Tagalongs® cookie over the top of each candy, pressing down to secure. Let stand until set");
       break;
         case "do-si-dos":
        msg.reply("http://www.poklat.com/wp-content/uploads/2014/02/Do-Si-Dos-Girl-Scout-Cookies.jpg");
        msg.send("Ehhhh those are okay- maybe this Caramel turtle recipe will make them better: You will need 3 milk chocolate bars, 12 caramels, 12 cookies, and 60 pecan halves. Preheat oven to 250°. Break each chocolate bar into fourths. Place each piece 2 in. apart on a parchment paper-lined baking sheet. Top with one caramel.Bake 5-7 minutes or until caramel just starts to soften. Immediately press one pecan half on one side for head; press four pecan halves onto each corner for legs. Place one Peanut Butter Patties®/Tagalongs® cookie over the top of each candy, pressing down to secure. Let stand until set");
       break;
     default:
       return msg.reply(favoriteCookie + " is not a girlscout cookie that I know try again?");
   }
 });
robot.hear(/i love dessert/, function(yummy) {
       return yummy.send(yummy.random(dessert));
   });

robot.hear(/vocab(.*)/, function(meaning) {
var word;
   word = meaning.match[1];
   console.log(word);

   switch (word) {
     case "library":
        meaning.reply("Set of Predifined functions that your code calls");
       break;
     case "framework":
        meaning.reply("opinionated architecture for building software");
       break;
     case "node.js":
       meaning.reply("an open-source, cross platform runtime environment for developing server-side Web applications");
       break;
     case "git":
       meaning.reply("version control software and is a tool that primarily stores code and maintains each file's history");
       break;
     case "github":
       meaning.reply("a website and platform for utilizing Git in a collaborative way");
       break;
     case "local scope":
        meaning.reply("a variable declared within a function that is not accessible outside of that function");
       break;
     case "array":
       meaning.reply("collection of data that you can use efficiently");
       break;
     case "function":
        meaning.reply("a reusable statement, or a group of reusable statements that can be called anywhere in a program");
       break;
     case "object":
       meaning.reply("a data type defined by code enclosed in braces{}. can contain properties and methods");
       break;
     case "scope":
        meaning.reply("describes the set of variables you have access to");
       break;
     case "global scope":
       meaning.reply("a variable declared outside of a function that is accessible everywhere, even within functions");
       break;
    case "hoisting":
       meaning.reply("moving declarations to the top of a scope. You can use a function or variable before it has been declared.");
       break;
     case "closure":
      meaning.reply("an inner function that has access to the outer(enclosing) function's variables. Aka lexical scope");
       break;
     default:
       return meaning.reply("I don't know what " + word + "means");
   }
});
}

