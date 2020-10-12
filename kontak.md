# Kontak

<form action="https://formspree.io/maywlrba" method="POST">
<fieldset>
  <legend>Hubungi saya lewat email :smile:</legend>

  <label for="name">Nama</label>
  <input id="name" type="text" name="name" class="fluid" required>

  <label for="mail">Email</label>
  <input id="mail" type="email" name="_replyto" class="fluid" required>

  <label for="message">Pesan</label>
  <textarea id="message" name="message" class="fluid" required></textarea>

  <input type="text" name="_gotcha" style="display:none" />

  {% if jekyll.environment == "production" %}
  <div class="g-recaptcha" data-sitekey="6LdvJhUTAAAAAGWXMLZRgp8gwgx1uV7qCNMKVpa7"></div>
  {% endif %}

  <input type="submit" class="fluid" value="Kirim">
</fieldset>
</form>
