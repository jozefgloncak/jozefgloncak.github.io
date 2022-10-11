# frontend
Contains various code examples usable at frontend development.
To see how would HTML page looks like add (after click on page) prefix **https://htmlpreview.github.io/?**

## complete codes
* [primes.html](primes.html) - contains example of **generating primes** and check whether number **isPrime**
* [canvas.html](canvas.html) - drawing on canvas various elements (diagonal, cross, circles)
* [participant_list_as_json.js](participant_list_as_json.js) - extract (JQ) from webpage pretekaj.sk list of participants and transform it to JSON.
* [addJQueryOnFly.js](addJQueryOnFly.js) - script which add (through developer console of webrowser) JQuery library to displaied page.
* [ageNumOfDays.js](ageNumOfDays.js) - display in console number of days from specified date until now.
* [canvas_polygon.html](canvas_polygon.html) - after click on canvas display in the middle (at coordinates [x,y]) polygon with:
    * defined line length
    * defined length of inner circle
* [canvas_circle.html](canvas_circle.html) - draw arc with 90°, 180°, 270° and 360°.
* [canvas_flower.html](canvas_flower.html) - generate flowers on canvas.
* [canvas_clock.html](canvas_clock.html) - clock (only second hand)
* [canvas_anim_moving_rectangles.html](canvas_anim_moving_rectangles.html) - movement of squares through canvas. Various speed. Possible change direction of movement. Read cursor coordinates on click.
* [canvas_anim_moving_rectangles_key.html](canvas_anim_moving_rectangles_key.html) - movement of squares through canvas. Squares are moved on arrow keys press event.
* [canvas_game_avoid_obstacles.html](canvas_game_avoid_obstacles.html) - simple game. square has to be traversed through gaps in vertical obstacles. Code contains classes, class inheritance. Handling key arrow press and release, animation
* [canvas_game_click_squares.html](canvas_game_click_squares.html) - click all squares until all disappear. Below canvas is simple timer which track length of game.
* [tone_generator.html](tone_generator.html) - generates some basic tones after press key on keyboard (press of 'c' key => generate c4 tone).

## study code
Contains code which was developed during study of some frontend development aspect.

* [jq_study_attributes.html](jq_study_attributes.html) - demonstrate possibility of getting HTML tag attribute value by its name via JQ.
* [jq_study_dateMillisecondsChange.html](jq_study_dateMillisecondsChange.html) - demonstrate (via JQ):
    * string interpolation,
    * timing of execution of some action (**setInterval()**, **clearInterval()**) - updating date (like watch)
* [jq_study_events.html](jq_study_events.html) demonstrate (via JQ) usage of HTML events:
    * hide
    * hover
    * mouseenter
    * mouseleave
    * click
* [jq_study_fade.html](jq_study_fade.html) demonstrate (via JQ) usage of fading (miznutie) of HTML elements.
* [jq_study_slide.html](jq_study_slide.html) demonstrate (via JQ) sliding (appear, disappear) of HTML elements.
* [js_study_string_interpolation.html](js_study_string_interpolation.html) - demonstrate string interpolation
* [js_study_output.html](js_study_output.html) - demonstrate possibility to directly write on webpage (overwrite previous content)



