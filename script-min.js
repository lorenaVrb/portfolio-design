document.getElementById("contact-form").addEventListener("submit",(function(e){e.preventDefault();const t=e.target,n=new FormData(t),r=document.getElementById("form-status");fetch("https://formspree.io/f/xeqywvqr",{method:"POST",body:n,headers:{Accept:"application/json"}}).then((e=>{e.ok?(r.innerHTML="Thank you for your message!",t.reset()):e.json().then((e=>{Object.hasOwn(e,"errors")?r.innerHTML=e.errors.map((e=>e.message)).join(", "):r.innerHTML="Oops! There was a problem submitting your form."})),setTimeout((()=>{r.innerHTML=""}),5e3)})).catch((e=>{r.innerHTML="Oops! There was a problem submitting your form."}))}));var navbar=document.getElementById("navbar"),sticky=navbar.offsetTop;function myFunction(){window.scrollY>=sticky?(navbar.classList.add("sticky"),placeholder.style.height=`${navbarHeight}px`):(navbar.classList.remove("sticky"),placeholder.style.height="0")}