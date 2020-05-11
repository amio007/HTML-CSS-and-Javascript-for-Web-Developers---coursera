/*
Solution of Module 4:

Expected output:

Good Bye Jax
Good Bye Jhin
Hello trump
Hello boris
Good Bye joe
Hello Yaakov
Hello Larry
Hello annie
Hello Zed
Good Bye Justin
*/

(function() {
    var names = ["Jax", "Jhin", "trump", "boris", "joe", "Yaakov", "Larry", "annie", "Zed", "Justin"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
