<!DOCTYPE html>
<html>
	<head>
		<title>Game of Thrones Adventure Game</title>
	</head>
	<h1> Welcome to the Game of Thrones "Choose your Own Adventure" Game! </h1>
	<p> Who will win the Iron Throne? </p>
	<img src="http://s.newsweek.com/sites/www.newsweek.com/files/styles/embed-lg/public/2016/02/12/data-broadband-download-record-game-thrones.jpg" />
	<script type="text/javascript">
  var user = prompt("Welcome to King's Landing. There is only one ruler in the seven kingdoms who will sit on the Iron Throne. Pick a family--Lannisters, Starks, or Targaryens. Choose wisely.").toLowerCase();
    switch(user){
    case 'lannisters':
      var attack = prompt("Shame, Shame, Shame! Look down. You are naked. Oh Noes! You are loosing power to a fanatic religious cult. Do you plan on attacking the Sparrows later (YES or NO)?").toUpperCase();
      var reform = prompt("Do you plan on reforming your wicked ways?").toUpperCase();
        if (attack === 'NO' || reform === 'YES') {
          confirm("Come on, you are Cersei. You are going to attack those bitches and only pretend to reform no matter what! The sparrows are dead. But you will never get the Iron Throne.")
        } else if (attack === 'YES' && reform === 'NO') {
          confirm("Long live Cersei! Sparrows are gone!")
}
      break;
      case 'starks':
      confirm("Your real father lost his head at King's Landing. You made a choice and you chose wrong. Now, you're stuck with an abusive, but hot, husband. You lost the Iron Throne, already, honey.");
      break;
      case 'targaryens':
        var dragons = prompt("All rulers are either butchers or meat. Do you plan on keeping your dragons YES or NO?").toUpperCase();
        var tyrion = prompt("Do you plan on keeping that little but snarky dude tyrion around to help you YES or NO?").toUpperCase();
          if (dragons === 'YES' && tyrion === 'YES') {
            confirm("You will WIN the Iron Throne!")
          } else if (dragons === 'NO' || tyrion === 'NO') {
            confirm("You can't win on your own and you need more help. You lose the iron throne!");
          } else {
            confirm("You lost the Iron Throne");
}
      break;
      default:
      confirm("Those bitches will NEVER sit on the Iron Throne.");}
</script>
	<a href="https://github.com/NatashaU">My Github for more games!</a>

<body>






</html>
