module.exports = function(robot) {
  //  YOUR CODE HERE



 //  robot.hear(/what is your favorite season (.*)/, function(msg) {
 //   var favoriteSeason;
 //   favoriteSeason = msg.match[1];
 //   console.log(favoriteSeason);
 //   switch (favoriteSeason) {
 //     case "spring":
 //        msg.reply("Grab an umbrella for those spring showers");
 //        msg.send("https://images-na.ssl-images-amazon.com/images/I/71md9jHDSgL._UL1500_.jpg");

 //       break;
 //     case "summer":
 //       return msg.reply("Go to the beach");
 //       break;
 //     case "fall":
 //       return msg.reply("Wahoooo go stomp in some leaves");
 //       break;
 //     default:
 //       return msg.reply("I don't have a favorite " + fav + ". What's yours?");
 //   }
 // });




  

    robot.hear(/my favorite girlscout cookie is (.*)/, function(msg) {
   var favoriteCookie;
   favoriteCookie = msg.match[1];
   console.log(favoriteCookie);
   switch (favoriteCookie) {
     case "samoas":
       msg.reply("hat's my favorite too! Here is a tasty toffee recipe with samoas: Pulse two packages of Caramel deLites®/Samoas® cookies in a food processor until crumbled. Sprinkle one-third on a baking sheet lined with foil. In a large saucepan over medium heat, cook 2 cups of butter, 2 cups of sugar and a dash of salt, stirring frequently, until mixture reaches 300°. Remove; carefully pour over crumbled Caramel deLites®/Samoas® cookies, spreading with a spatula to cover. Top with remaining crumbled Caramel deLites®/Samoas® cookies, pressing down slightly. Refrigerate at least 2 hours. When cool, break into pieces. Yield: 10 servings.")
        msg.send("http://images.huffingtonpost.com/2010-02-24-2009_04_02Samoa.jpg");
       break;
     case "thin mints":
        msg.reply("Those are my second favorite. Here is a way to spice those up: In a large bowl, combine popcorn and half of the crushed Thin Mints® cookies. In a microwave, melt baking chips with shortening; stir until smooth. Pour over popcorn mixture; toss to coat. Immediately spread onto waxed paper; sprinkle with remaining crushed Thin Mints® cookies. Melt baking chips in microwave; stir until smooth. Drizzle over popcorn; let stand until set. Break into pieces. Store in an airtight container. ");
        msg.send("https://www.littlebrowniebakers.com/media/images/cookies/lbb-thinmints.jpg.460x259_q100.jpg");
       break;
     case "tagalongs":
       return msg.send("https://www.littlebrowniebakers.com/media/images/cookies/lbb-tagalogs.jpg.460x259_q100.jpg");
       return msg.reply("Those are so tasty!!! We can make them even tastier with this Caramel turtle recipe. You will need 3 milk chocolate bars, 12 caramels, 12 cookies, and 60 pecan halves. Preheat oven to 250°. Break each chocolate bar into fourths. Place each piece 2 in. apart on a parchment paper-lined baking sheet. Top with one caramel.Bake 5-7 minutes or until caramel just starts to soften. Immediately press one pecan half on one side for head; press four pecan halves onto each corner for legs. Place one Peanut Butter Patties®/Tagalongs® cookie over the top of each candy, pressing down to secure. Let stand until set");
       break;
         case "do-si-dos":
       return msg.send("http://www.poklat.com/wp-content/uploads/2014/02/Do-Si-Dos-Girl-Scout-Cookies.jpg");
       return msg.reply("Ehhhh those are okay- maybe this Caramel turtle recipe will make them better: You will need 3 milk chocolate bars, 12 caramels, 12 cookies, and 60 pecan halves. Preheat oven to 250°. Break each chocolate bar into fourths. Place each piece 2 in. apart on a parchment paper-lined baking sheet. Top with one caramel.Bake 5-7 minutes or until caramel just starts to soften. Immediately press one pecan half on one side for head; press four pecan halves onto each corner for legs. Place one Peanut Butter Patties®/Tagalongs® cookie over the top of each candy, pressing down to secure. Let stand until set");
       break;
     default:
       return msg.reply("I don't have a favorite " + fav + ". What's yours?");
   }
 });
}