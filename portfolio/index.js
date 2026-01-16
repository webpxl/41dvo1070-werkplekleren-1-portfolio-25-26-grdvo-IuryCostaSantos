function sendEmailFromForm(){
    let name = document.getElementById('contact-name')?.value || '';
    let from = document.getElementById('contact-email')?.value || '';
    let message = document.getElementById('contact-message')?.value || '';

    // Basic validation: require at least a message or an email
    if(!message && !from){
        alert('Please enter a message or your email address before sending.');
        return;
    }

    var subject = encodeURIComponent('Portfolio contact from ' + (name || from || 'Website'));
    var bodyText = 'Name: ' + name + '\nEmail: ' + from + '\n\n' + message;
    // Open the user's default mail client
    window.location.href = 'mailto:iurycosta2006@gmail.com?subject=' + subject + '&body=' + encodeURIComponent(bodyText);
}

// Snackbar helper
function showSnackbar(message, timeout){
  timeout = timeout || 2500;
  var sb = document.getElementById('snackbar');
  if(!sb) return;
  sb.textContent = message;
  sb.classList.add('show');
  // Clear any existing timer
  if(sb._hideTimer) clearTimeout(sb._hideTimer);
  sb._hideTimer = setTimeout(function(){
    sb.classList.remove('show');
    sb._hideTimer = null;
  }, timeout);
}

// Toggle cards view: attach to the header button, persist preference in localStorage
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('toggle-cards');
  if(!btn) return;

  // Apply saved preference
  var saved = localStorage.getItem('cardsOn');
  if(saved === 'true'){
    document.body.classList.add('cards-on');
    btn.classList.add('active');
    btn.setAttribute('aria-pressed','true');
  }

  btn.addEventListener('click', function(){
    var on = document.body.classList.toggle('cards-on');
    btn.classList.toggle('active', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    localStorage.setItem('cardsOn', on ? 'true' : 'false');

    // animate icon is handled by CSS via .active
    // show snackbar when enabled
    if(on){
      showSnackbar('Card view enabled');
    }
  });
});
