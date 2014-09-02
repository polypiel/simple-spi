Simple SPI
==========

A really simple javascript module to turn a web into SPI.
It requires jQuery.

Just add the attribute data-nav to your links and the script will intercept the onclick event to load the target URL by AJAX.

## Quick start

 1 Download the latest version of [simplespi.js](https://raw.githubusercontent.com/polypiel/simple-spi/master/simplespi.js) and include it in your page.

 2 Add the attribute `data-nav` to your links. These links will trigger an ajax call to load the content.
    <a href="page.html" data-nav>Link to a page</a>

 3 Call the script on the container DOM element:
    $('#container').sspiNavigable({'toLoad': '#content'});
   This indicates that when a navigation event a element with id `content` will looked in the target, and their contents placed inside the container.


## Configuration

Options:
* toload            The CSS selector of the element to load. Default: '#content'
* beforeNavigate    Callback called just before loading the content
* afterNavigate     Callback called just after the content is loaded

The callbacks ´beforeNavigate´ and ´afterNavigate´ let you to add behaviour before and after the event.

### beforeNavigate
   	function (event, promise, url)
The client code have to call to `promise.resolve()` when it'd finished it.

### afterNavigate
	  function (event, url)

## Examples

The script is used in:
 - [angelcalvo.com](http://angelcalvo.com)
 - [damianflores.es](http://damianflores.es)
 - [casataller.info](http://casataller.info)
