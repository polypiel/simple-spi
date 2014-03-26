simple-spi
==========

A really simple javascript module to turn a web into SPI.
It requires jQuery.

Just add the attribute data-nav to your links and the script will intercept the onclick event to load the target URL by AJAX.

Options:
* toload       The css expresion of the element to load, default: #content
* container    The container element, default: body

Callbacks:
* beforeNavigate    It's called just before loading the content
* afterNavigate     It's called just after the content is loaded

== Examples
The script is used in:
 - angelcalvo.com
 - damianflores.es
 - casataller.info
