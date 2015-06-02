# Waypoints

Waypoints is a library that makes it easy to execute a function whenever you scroll to an element. 

Install with:

``` 
meteor add bigu:waypoints 
```

Basic usage:

```js
var waypoint = new Waypoint({
  element: document.getElementById('thing'),
  handler: function(direction) {
    alert('You have scrolled to a thing')
  }
})
```

Note that the Waypoint version included on this packages does require a raw DOM element, not a jQuery object. If you want to use jQuery selectors, make sure you will pass raw DOM element to Waypoint by doing so:

```
$('#foo')[0]
```
Or using [jQuery get](https://api.jquery.com/get/) method.

If you're new to Waypoints, check out the [Getting Started](http://imakewebthings.com/waypoints/guides/getting-started) guide.

[Read the full documentation](http://imakewebthings.com/waypoints/api/waypoint) for more details on usage and customization.

[Original Repo](https://github.com/imakewebthings/waypoints)

# Contributing

Contributions are welcome, check what is missing:
* Customize the Waypoint loaded version(jQuery, Zepto or No framework)
* Waypoint Shortcuts integration
* What else?

Submit a PR! :beers:

# License
MIT
