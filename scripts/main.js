module.exports = function(robot) {
  //  YOUR CODE HERE



  robot.hear(/what is your favorite season (.*)/, function(msg) {
   var favoriteSeason;
   favoriteSeason = msg.match[1];
   console.log(favoriteSeason);
   switch (favoriteSeason) {
     case "spring":
        msg.reply("Grab an umbrella for those spring showers");
        msg.send("https://images-na.ssl-images-amazon.com/images/I/71md9jHDSgL._UL1500_.jpg");

       break;
     case "summer":
       return msg.reply("Go to the beach");
       break;
     case "fall":
       return msg.reply("Wahoooo go stomp in some leaves");
       break;
     default:
       return msg.reply("I don't have a favorite " + fav + ". What's yours?");
   }
 });




  

 //    robot.hear(/what is your favorite girlscout cookie (.*)/, function(msg) {
 //   var favoriteCookie;
 //   favoriteCookie = msg.match[1];
 //   console.log(favoriteCookie);
 //   switch (favoriteCookie) {
 //     case "samoas":
 //       return msg.reply("That's my favorite too! Here is something tasty to do with samoas: ");
 //       break;
 //     case "thin mints":
 //       return msg.reply("Those are my second favorite. Here is a way to spice those up: In a large bowl, combine popcorn and half of the crushed Thin Mints® cookies. In a microwave, melt baking chips with shortening; stir until smooth. Pour over popcorn mixture; toss to coat. Immediately spread onto waxed paper; sprinkle with remaining crushed Thin Mints® cookies. Melt baking chips in microwave; stir until smooth. Drizzle over popcorn; let stand until set. Break into pieces. Store in an airtight container. ");
 //       break;
 //     case "do-si-dos":
 //       return msg.reply("Ehhhh those are okay- maybe this will make them better:");
 //       break;
 //     default:
 //       return msg.reply("I don't have a favorite " + fav + ". What's yours?");
 //   }
 // });
}