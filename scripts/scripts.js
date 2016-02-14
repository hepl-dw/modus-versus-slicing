/* MODUSversus
 * scripts.js - main scripts
 * started at 17/11/2015
 */

( function() {

    "use strict";

    window.addEventListener( "load", function() {
        document.querySelector( ".search-form-toggle" ).addEventListener( "click", function() {
            if( this.className === "search-form-toggle" ) {
                this.className = "search-form-toggle open";
                document.getElementById( "search-query" ).focus();
            } else {
                this.className = "search-form-toggle";
            }
        } );
    } );

} )();
