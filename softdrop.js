/*
 *  SoftDrop
 *  Simple and light JS plugin to customize <select> elements
 *  https://github.com/goranefbl/softdrop/
 *
 *  Made by Goran Jakovljevic
 *  Under MIT License
 *
 *  EXAMPLE USAGE:
 *  SoftDrop.init({ selector:'input--select' });
 *  
 *  TODO:
 *  - Move each select to separate object ?
 *
 */


var SoftDrop = (function(){

	var options;
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent );

	// SoftDrop default options
	var defaults = {
	 	className: '',
	 	mobile: true
	}

	/**
	* Initializes the SoftDrop object. Returns nothing.
	*
	*/
	var init = function() {

		// Extend Default Options
		if (arguments[0] && typeof arguments[0] === "object") {
			options = _extendDefaults(defaults, arguments[0]);
	    }

	    // Click anywhere to close
	    document.addEventListener("click",_hide);

	    // Build elements
	   	_loop();
	}
    
    var _loop = function() {
    	var selects = document.getElementsByClassName(options.selector);

    	// Don't fire on mobile, orrr fire?
    	if ( !( isMobile && !options.mobile ) ) {
	    	[].forEach.call(selects,function(select,i){

				var docFrag = document.createDocumentFragment(),
					mainNode = document.createElement('div'),
					selected = document.createElement('div'),
					ul = document.createElement('ul');

					select.setAttribute("data-softdrop",i);
					mainNode.className = "softdrop-select";
					selected.className = "softdrop-selected";
					ul.className = "softdrop-list";

					mainNode.appendChild(selected);
					mainNode.appendChild(ul);
					select.parentNode.insertBefore(mainNode,null);

				for (var i = 0; i < select.length; i++) {
					var node = document.createElement("li"),
						textnode = document.createTextNode(select[i].value);
						
						node.appendChild(textnode);
						node.setAttribute("data-value",select[i].value);
						node.addEventListener("click",_clickEvent);
						docFrag.appendChild(node);

					if(i == 0) {
						selected.appendChild(document.createTextNode(select[i].value));
					}
				};

				ul.appendChild(docFrag);
				selected.addEventListener("click",_toggleElements);
			});
		}
    }

    // When element in dropdown is clicked
	var _clickEvent = function(e) {
		var el     = e.target,
			parent = el.parentNode,
			data   = el.getAttribute("data-value"),
			select = parent.parentNode.previousElementSibling;
			parent.previousSibling.innerHTML = data; // selected
		
		select.value = data; // select option

		_.toggleClass(parent.parentNode, "softdrop-active");
	}

	// Toggle dropdown state
	var _toggleElements = function(e) {
		_.toggleClass(e.target.parentNode, "softdrop-active");
	}

	// Hide on click outside
	var _hide = function(e) {
		var elements = document.getElementsByClassName('softdrop-active');
		[].forEach.call(elements,function(element,i){

			if(element) {
				var tr = element.contains(e.target);
				if(!tr)
					_.removeClass(element, "softdrop-active");	
			}

		});

	}

	// Common Stuff
	var _ = {
	    hasClass: function( elem, classname ) {
	      var reg = new RegExp( "(^|\\s+)" + classname + "(\\s+|$)" );
	      return elem && reg.test( elem.className );
	    },

	    addClass: function( elem, classname ) {
	      if( elem && !_.hasClass( elem, classname ) ) {
			elem.className += " " + classname;
	      }
	    },

	    removeClass: function( elem, classname ) {
	      var reg = new RegExp( "(^|\\s+)" + classname + "(\\s+|$)" );
	      elem && ( elem.className = elem.className.replace( reg, " " ) );
	    },

	    toggleClass: function( elem, classname ) {
	      var fn = _.hasClass( elem, classname ) ? "remove" : "add";
	      _[ fn + "Class" ]( elem, classname );
	    }
	}

	// Extend defaults with user options
	 var _extendDefaults = function(source, properties) {
	    var property;
	    for (property in properties) {
	      if (properties.hasOwnProperty(property)) {
			source[property] = properties[property];
	      }
	    }
	    return source;
	  }


	return {
		init:init
	}

})();