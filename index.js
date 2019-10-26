function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  logShout('hello'.toUpperCase());
}
function logWhisper(string) {
  logShout('HELLO'.toLowerCase());
}
function sayHiToGrandma(string) {
  let uppercase = string.toUpperCase();
  let lowercase = string.toLowerCase();
  if(string.toLowerCase === lowercase) {
    return "I can\'t hear you!");
    
  } else if(string.toUpperCase=== uppercase) {
    return "YES INDEED!";
  }
  if(string === "I love you, Grandma.") {
    return 'I love you, too.';
  }
}

