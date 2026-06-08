const feedbackBtn =
document.getElementById("feedbackBtn");

feedbackBtn.addEventListener("click",()=>{

feedbackBtn.innerHTML =
"Redirecting...";

setTimeout(()=>{

window.open(
"https://forms.gle/Z1VTtCizaU92iaii9",
"_blank"
);

feedbackBtn.innerHTML =
"Give Feedback";

},1000);

});