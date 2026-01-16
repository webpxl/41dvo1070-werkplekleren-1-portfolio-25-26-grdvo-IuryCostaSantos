// Small interactivity for ideas.html

document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for nav
  document.querySelectorAll('.top-nav a').forEach(function(link){
    link.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(href && href.startsWith('#')){
        e.preventDefault();
        var el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // snackbar helper
  function showSnackbar(msg){
    var sb = document.getElementById('ideas-snackbar');
    if(!sb) return;
    sb.textContent = msg;
    sb.classList.add('show');
    clearTimeout(sb._t);
    sb._t = setTimeout(function(){ sb.classList.remove('show'); }, 2500);
  }

  // Attach to contact button to show a tiny confirmation when clicked
  var contactBtn = document.querySelector('.contact-btn');
  if(contactBtn){
    contactBtn.addEventListener('click', function(){
      // let mailto open; show snackbar to confirm action
      showSnackbar('Mailto gestart — succes!');
    });
  }

});

