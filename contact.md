# Contact

Get in touch :smile:

<form action="https://formspree.io/maywlrba" method="POST" class="contact-form">
  <label for="name">Name</label>
  <input id="name" type="text" name="name" required>
  <label for="mail">Email</label>
  <input id="mail" type="email" name="_replyto" required>
  <label for="message" style="display:block">Message</label>
  <textarea id="message" name="message" required></textarea>
  <input type="text" name="_gotcha" style="display:none" />
  <div class="g-recaptcha" data-sitekey="6LdvJhUTAAAAAGWXMLZRgp8gwgx1uV7qCNMKVpa7"></div>
  <input type="submit" value="Send">
  <input type="hidden" name="_next" value="{{ site.url }}/thanks.html" />
</form>
