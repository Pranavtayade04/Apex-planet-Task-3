// Quiz Logic
document.getElementById("quizForm").addEventListener("submit", function(e){
  e.preventDefault();
  let selected = document.querySelector('input[name="q1"]:checked');
  if(selected){
    if(selected.value == "1"){
      document.getElementById("result").innerText = "✅ Correct! HTML = Hyper Text Markup Language.";
    } else {
      document.getElementById("result").innerText = "❌ Wrong! Try again.";
    }
  } else {
    document.getElementById("result").innerText = "⚠️ Please select an answer!";
  }
});

// Joke Generator Logic
document.getElementById("jokeBtn").addEventListener("click", getJoke);

async function getJoke() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();
  document.getElementById("joke").innerText = data.setup + " - " + data.punchline;
}
