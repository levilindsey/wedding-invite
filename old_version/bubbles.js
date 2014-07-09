/*****************************************************************************
 * Authors: Levi Lindsey,
 *	    Jackie Schwartzstein
 *****************************************************************************/

// ------------------------------------------------------------------------- //
// THE CURRENT VERSION NUMBER

var VERSION_STRING					= "?v=0.0.1";

// ------------------------------------------------------------------------- //
// ELEMENT IDS AND CLASSES

var SHADOW_FILENAME					= "images/shadow.png";

// ------------------------------------------------------------------------- //
// ELEMENT IDS AND CLASSES

var SCRIPTED_CONTENT_CLASS			= "scripted_content";
var NO_SCRIPT_CONTENT_CLASS			= "no_script_content";

var ENVELOPE_BOTTOM_ID				= "envelope_bottom";
var ENVELOPE_TOP_ID				= "envelope_top";

var BUBBLE_1_ID						= "bubble1";
var BUBBLE_2_ID						= "bubble2";
var BUBBLE_3_ID						= "bubble3";
var BUBBLE_4_ID						= "bubble4";
var BUBBLE_5_ID						= "bubble5";
var BUBBLE_6_ID						= "bubble6";
var BUBBLE_7_ID						= "bubble7";

var BUBBLE_CLASS					= "bubble";
var BIG_BUBBLE_CLASS				= "big_bubble";
var SMALL_BUBBLE_CLASS				= "small_bubble";
var BUBBLE_MAIN_IMG_CLASS			= "bubble_main_img";
var BUBBLE_SUB_H_CLASS				= "bubble_sub_h";
var BUBBLE_BODY_CLASS				= "bubble_body";
var BUBBLE_MAIN_H_CLASS				= "bubble_main_h";
var BUBBLE_P_CLASS					= "bubble_p";
var BUBBLE_SUB_IMG_CLASS			= "bubble_sub_img";

var SHADOW_CLASS					= "shadow";

// ------------------------------------------------------------------------- //

var TWO_PI					= Math.PI * 2;
var EPSILON					= 0.00001;

var ENVELOPE_BOTTOM_WIDTH_INT			= 618;
var ENVELOPE_BOTTOM_HEIGHT_INT			= 438;
var ENVELOPE_BOTTOM_HALF_WIDTH_INT		= ENVELOPE_BOTTOM_WIDTH_INT / 2;
var ENVELOPE_BOTTOM_HALF_HEIGHT_INT		= ENVELOPE_BOTTOM_HEIGHT_INT / 2;
var ENVELOPE_TOP_WIDTH_INT			= 620;
var ENVELOPE_TOP_HEIGHT_INT			= 269;
var ENVELOPE_TOP_HALF_WIDTH_INT			= ENVELOPE_TOP_WIDTH_INT / 2;
var ENVELOPE_TOP_HALF_HEIGHT_INT		= ENVELOPE_TOP_HEIGHT_INT / 2;

var BIG_BUBBLE_WIDTH_INT			= 600;
var BIG_BUBBLE_HEIGHT_INT			= 420;
var BIG_BUBBLE_HALF_WIDTH_INT			= BIG_BUBBLE_WIDTH_INT / 2;
var BIG_BUBBLE_HALF_HEIGHT_INT			= BIG_BUBBLE_HEIGHT_INT / 2;

var SMALL_BUBBLE_WIDTH_INT			= 100;
var SMALL_BUBBLE_HEIGHT_INT			= 70;
var SMALL_BUBBLE_HALF_WIDTH_INT			= SMALL_BUBBLE_WIDTH_INT / 2;
var SMALL_BUBBLE_HALF_HEIGHT_INT		= SMALL_BUBBLE_HEIGHT_INT / 2;

var VERTICAL_SKEW				= BIG_BUBBLE_WIDTH_INT / BIG_BUBBLE_HEIGHT_INT;

var BUBBLE_MARGIN_INT				= 70;

var BUBBLE_HORIZONTAL_APPEAR_DISTANCE_INT	= 150 + BIG_BUBBLE_HALF_WIDTH_INT;
var BUBBLE_HORIZONTAL_DISAPPEAR_DISTANCE_INT	= 70 + BUBBLE_MARGIN_INT + BIG_BUBBLE_HALF_WIDTH_INT + SMALL_BUBBLE_WIDTH_INT;

var SLIDE_OUT_DURATION				= 1000;
var SLIDE_IN_DURATION				= 800;
var SLIDE_IN_OUT_INNER_BEZIER_ANGLE		= 90;
var SLIDE_IN_OUT_OUTER_BEZIER_ANGLE		= 120;
var SLIDE_IN_OUT_INNER_BEZIER_LENGTH		= 1.1;
var SLIDE_IN_OUT_OUTER_BEZIER_LENGTH		= 0.7;

var SLIDE_AROUND_DURATION			= 1000;
var SLIDE_AROUND_BEZIER_ANGLE			= 15;
var SLIDE_AROUND_BEZIER_LENGTH			= 0.4;

var BUBBLE_MAIN_H_WIDTH_INT			= 600;
var BUBBLE_SUB_H_WIDTH_INT			= 100;

// ------------------------------------------------------------------------- //

var windowHeight;
var windowWidth;
var windowCenterX;
var windowCenterY;
var bigBubbleCornerX;
var bigBubbleCornerY;
var smallBubbleHiddenCornerX;
var smallBubbleHiddenCornerY;

var envelopeBottomCornerX;
var envelopeBottomCornerY;
var envelopeTopCornerX;
var envelopeTopCornerY;

var smallBubbleCount;
var smallBubbleCenterXPositions;
var smallBubbleCenterYPositions;
var smallBubbleGapCenterXPositions;
var smallBubbleGapCenterYPositions;
var smallBubbleCornerXPositions;
var smallBubbleCornerYPositions;
var smallBubbleGapCornerXPositions;
var smallBubbleGapCornerYPositions;

var envelopeBottom;
var envelopeTop;

var bubbles;

var smallBubbles;

var homeBubble;

var currentBigBubble;
var displaySmallBubbleShadow;
var bubblesAreSlidingIn;
var bubblesAreSlidingOut;
var bubblesAreSlidingAround;

var smallBubbleShadow;

var lastAnimationStartTime;
var lastAnimationDuration;

// ------------------------------------------------------------------------- //

/**
 * Called when the window loads.
 */
$(document).ready(function() {
	initialize();
});

/**
 * Append the current version number to the end of each of the filename references.
 */
function updateFileNameVersions() {
//	BROLLY_FRONT_IMAGE_FILENAME = BROLLY_FRONT_IMAGE_FILENAME + VERSION_STRING;
//	BROLLY_BACK_IMAGE_FILENAME = BROLLY_BACK_IMAGE_FILENAME + VERSION_STRING;
//	BROLLY_HEADSTOCK_IMAGE_FILENAME = BROLLY_HEADSTOCK_IMAGE_FILENAME + VERSION_STRING;

//	REVERSE_OREO_BROLLY_FRONT_IMAGE_FILENAME = REVERSE_OREO_BROLLY_FRONT_IMAGE_FILENAME + VERSION_STRING;
//	REVERSE_OREO_BROLLY_BACK_IMAGE_FILENAME = REVERSE_OREO_BROLLY_BACK_IMAGE_FILENAME + VERSION_STRING;
//	REVERSE_OREO_BROLLY_HEADSTOCK_IMAGE_FILENAME = REVERSE_OREO_BROLLY_HEADSTOCK_IMAGE_FILENAME + VERSION_STRING;

//	BUMBERSHOOT_FRONT_IMAGE_FILENAME = BUMBERSHOOT_FRONT_IMAGE_FILENAME + VERSION_STRING;
//	BUMBERSHOOT_BACK_IMAGE_FILENAME = BUMBERSHOOT_BACK_IMAGE_FILENAME + VERSION_STRING;
//	BUMBERSHOOT_HEADSTOCK_IMAGE_FILENAME = BUMBERSHOOT_HEADSTOCK_IMAGE_FILENAME + VERSION_STRING;

//	PARASOL_FRONT_IMAGE_FILENAME = PARASOL_FRONT_IMAGE_FILENAME + VERSION_STRING;
//	PARASOL_BACK_IMAGE_FILENAME = PARASOL_BACK_IMAGE_FILENAME + VERSION_STRING;
//	PARASOL_HEADSTOCK_IMAGE_FILENAME = PARASOL_HEADSTOCK_IMAGE_FILENAME + VERSION_STRING;

//	KIT_IMAGE_FILENAME = KIT_IMAGE_FILENAME + VERSION_STRING;
}

/**
 * Set up some basic parameters and attach event-handling functionality.
 */
function initialize() {
	// Fix the page content for people do indeed have javascript enabled
	$("." + NO_SCRIPT_CONTENT_CLASS).css("display", "none");
	$("." + SCRIPTED_CONTENT_CLASS).css("display", "block");

	bubbles = $("." + BUBBLE_CLASS);
	
	lastAnimationStartTime = -1;
	lastAnimationDuration = -1;

	$(window).resize(onResize);
	$(document).mousemove(onBodyMouseMove);
	bubbles.click(onClick);
	bubbles.hover(onMouseIn, onMouseOut);
	bubbles.mousemove(onBubbleMouseMove);

	calculateWindowDimensions();
	calculateSmallBubblePositions();
	initializeBubbles();

	updateFileNameVersions();

	// Preload the other product images.
	// TODO: ensure that the CSS file has all bubbles/images as initially visible, and then hide them here
}

/**
 * Initialize bubble properties.
 */
function initializeBubbles() {
	homeBubble = $('#' + BUBBLE_1_ID);

	var smallBubble;
	smallBubbles = new Array();
	$("." + SMALL_BUBBLE_CLASS).each(function(index, element) {
		smallBubble = $(element);
		smallBubbles[index] = smallBubble;
		smallBubble.css("left", smallBubbleHiddenCornerX + "px");
		smallBubble.css("top", smallBubbleHiddenCornerY + "px");
		smallBubble.css("display", "none");
	});

	currentBigBubble = $("." + BIG_BUBBLE_CLASS);
	currentBigBubble.css("left", bigBubbleCornerX + "px");
	currentBigBubble.css("top", bigBubbleCornerY + "px");
	
	envelopeBottom = $('#' + ENVELOPE_BOTTOM_ID);
	envelopeTop = $('#' + ENVELOPE_TOP_ID);
	
	envelopeBottom.css("left", envelopeBottomCornerX + "px");
	envelopeBottom.css("top", envelopeBottomCornerY + "px");
	
	homeBubble.css("left", envelopeBottomCornerX + "px");
	homeBubble.css("top", envelopeBottomCornerY + "px");
	
	displaySmallBubbleShadow = true;
}

/**
 * Calculate and save some important window dimensions.
 */
function calculateWindowDimensions() {
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	windowCenterX = windowWidth / 2;
	windowCenterY = windowHeight / 2;
	
	bigBubbleCornerX = windowCenterX - BIG_BUBBLE_HALF_WIDTH_INT;
	bigBubbleCornerY = windowCenterY - BIG_BUBBLE_HALF_HEIGHT_INT;
	smallBubbleHiddenCornerX = windowCenterX - SMALL_BUBBLE_HALF_WIDTH_INT;
	smallBubbleHiddenCornerY = windowCenterY - SMALL_BUBBLE_HALF_HEIGHT_INT;
	
	envelopeBottomCornerX = windowCenterX - ENVELOPE_BOTTOM_HALF_WIDTH_INT;
	envelopeBottomCornerY = windowCenterY - ENVELOPE_BOTTOM_HALF_HEIGHT_INT;
	envelopeTopCornerX = windowCenterX - ENVELOPE_TOP_HALF_WIDTH_INT;
	envelopeTopCornerY = windowCenterY - ENVELOPE_TOP_HALF_HEIGHT_INT;
}

/**
 * Calculate and save the appropriate positions for the small bubbles.
 */
function calculateSmallBubblePositions() {
	smallBubbleCount = $("." + BUBBLE_CLASS).size() - 1;
	var deltaTheta = TWO_PI / smallBubbleCount;
	var smallBubblePositionHalfHorizontalOffset = BIG_BUBBLE_HALF_WIDTH_INT + SMALL_BUBBLE_HALF_WIDTH_INT + BUBBLE_MARGIN_INT;
	var smallBubblePositionHalfVerticalOffset = BIG_BUBBLE_HALF_HEIGHT_INT + SMALL_BUBBLE_HALF_HEIGHT_INT + BUBBLE_MARGIN_INT;

	var startingAngle;
	if(smallBubbleCount % 2 == 1) {
		startingAngle = -Math.PI / 2;
	} else if(smallBubbleCount % 4 == 0) {
		startingAngle = Math.PI / 4;
	} else {
		startingAngle = 0;
	}

	smallBubbleCenterXPositions = new Array();
	smallBubbleCenterYPositions = new Array();
	smallBubbleCornerXPositions = new Array();
	smallBubbleCornerYPositions = new Array();
	for(var theta = startingAngle, i = 0; i < smallBubbleCount; theta += deltaTheta, i++) {
		smallBubbleCenterXPositions[i] = windowCenterX + (smallBubblePositionHalfHorizontalOffset * Math.cos(theta));
		smallBubbleCenterYPositions[i] = windowCenterY + (smallBubblePositionHalfVerticalOffset * Math.sin(theta));
		smallBubbleCornerXPositions[i] = smallBubbleCenterXPositions[i] - SMALL_BUBBLE_HALF_WIDTH_INT;
		smallBubbleCornerYPositions[i] = smallBubbleCenterYPositions[i] - SMALL_BUBBLE_HALF_HEIGHT_INT;
	}

	smallBubbleGapCenterXPositions = new Array();
	smallBubbleGapCenterYPositions = new Array();
	smallBubbleGapCornerXPositions = new Array();
	smallBubbleGapCornerYPositions = new Array();
	for(var theta = startingAngle + (deltaTheta / 2), i = 0; i < smallBubbleCount; theta += deltaTheta, i++) {
		smallBubbleGapCenterXPositions[i] = windowCenterX + (smallBubblePositionHalfHorizontalOffset * Math.cos(theta));
		smallBubbleGapCenterYPositions[i] = windowCenterY + (smallBubblePositionHalfVerticalOffset * Math.sin(theta));
		smallBubbleGapCornerXPositions[i] = smallBubbleGapCenterXPositions[i] - SMALL_BUBBLE_HALF_WIDTH_INT;
		smallBubbleGapCornerYPositions[i] = smallBubbleGapCenterYPositions[i] - SMALL_BUBBLE_HALF_HEIGHT_INT;
	}
}

/**
 * Return the Euclidian distance between two points.
 */
function getDistance(aX, aY, bX, bY, verticalSkew) {
	var deltaX = aX - bX;
	var deltaY = (aY - bY) * verticalSkew;
	return Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
}

/**
 * Slide the given bubble into or out of the center according to the position represented by the
 * given position index.
 */
function slideBubbleInOut(i, slideOut) {
	var bubble = $(smallBubbles[i]);
	var bubbleOffset = bubble.offset();
	var currentX = bubbleOffset.left;
	var currentY = bubbleOffset.top;

	var bezierParams;

	if(slideOut) {
		bubblesAreSlidingOut = true;

		// Make the small bubble visible
		bubble.css("display", "block");

		// Unless the bubble is already in mid-transition, have it slide from the hidden position
		if(currentX <= 1 && currentY <= 1) {
			currentX = smallBubbleHiddenCornerX;
			currentY = smallBubbleHiddenCornerY;
		}

		// Display the small bubble's sub-header
		$("#" + bubble.id + " ." + BUBBLE_SUB_H_CLASS).css("display", "inline");

		// Slide the small bubble to its expanded position
		bezierParams = {
			start: {
				x: currentX,
				y: currentY,
				angle: SLIDE_IN_OUT_INNER_BEZIER_ANGLE,
				length: SLIDE_IN_OUT_INNER_BEZIER_LENGTH
			},
			end: {
				x: smallBubbleCornerXPositions[i],
				y: smallBubbleCornerYPositions[i],
				angle: -SLIDE_IN_OUT_OUTER_BEZIER_ANGLE,
				length: SLIDE_IN_OUT_OUTER_BEZIER_LENGTH
			}
		};

		bubble.animate({
			path: new $.path.bezier(bezierParams)
		}, SLIDE_OUT_DURATION, 'easeOutBack', function() {
			bubblesAreSlidingOut = false;
			lastAnimationStartTime = -1;
			lastAnimationDuration = -1;
		});

		lastAnimationDuration = SLIDE_OUT_DURATION;
	} else {
		bubblesAreSlidingIn = true;

		// Slide the small bubble to the hidden position
		bezierParams = {
			start: {
				x: currentX,
				y: currentY,
				angle: SLIDE_IN_OUT_OUTER_BEZIER_ANGLE,
				length: SLIDE_IN_OUT_OUTER_BEZIER_LENGTH
			},
			end: {
				x: smallBubbleHiddenCornerX,
				y: smallBubbleHiddenCornerY,
				angle: -SLIDE_IN_OUT_INNER_BEZIER_ANGLE,
				length: SLIDE_IN_OUT_INNER_BEZIER_LENGTH
			}
		};

		bubble.animate({
			path: new $.path.bezier(bezierParams)
		}, SLIDE_IN_DURATION, 'easeInQuart', function() {
			// Hide the small bubble's sub-headers
			$("#" + bubble.id + " ." + BUBBLE_SUB_H_CLASS).css("display", "none");

			// Make the small bubble invisible
			bubble.css("display", "none");

			bubblesAreSlidingIn = false;
			lastAnimationStartTime = -1;
			lastAnimationDuration = -1;
		});

		lastAnimationDuration = SLIDE_IN_DURATION;
	}

	lastAnimationStartTime = $.now();
}

/**
 * Slide the small bubble represented by the given index around the circle according to the
 * position represented by the given index.
 */
function slideBubbleAround(index) {
	bubblesAreSlidingAround = true;

	var bubble = smallBubbles[index];
	var bubbleOffset = bubble.offset();
	var currentX = bubbleOffset.left;
	var currentY = bubbleOffset.top;

	// Make the small bubble visible
	bubble.css("display", "block");

	// Slide the small bubble to expanded positions
	var bezierParams = {
		start: {
			x: currentX,
			y: currentY,
			angle: SLIDE_AROUND_BEZIER_ANGLE,
			length: SLIDE_AROUND_BEZIER_LENGTH
		},
		end: {
			x: smallBubbleGapCornerXPositions[index],
			y: smallBubbleGapCornerYPositions[index],
			angle: -SLIDE_AROUND_BEZIER_ANGLE,
			length: SLIDE_AROUND_BEZIER_LENGTH
		}
	};

	bubble.animate({
		path: new $.path.bezier(bezierParams)
	}, SLIDE_AROUND_DURATION, 'easeInOutCubic', function() {
		bubblesAreSlidingAround = false;
		lastAnimationStartTime = -1;
		lastAnimationDuration = -1;
	});

	lastAnimationStartTime = $.now();
	lastAnimationDuration = SLIDE_AROUND_DURATION;
}

/**
 * The event handler for the window re-size event.
 */
function onResize(event) {
	calculateWindowDimensions();
	calculateSmallBubblePositions();
	initializeBubbles();
}

/**
 * The event handler for the mouse move event (over the entire body).
 */
function onBodyMouseMove(event) {
	if(lastAnimationStartTime < 0 || $.now() > lastAnimationStartTime + lastAnimationDuration) {
		var mouseX = event.pageX;
		var mouseY = event.pageY;

		var skewedDistanceFromCenter = getDistance(mouseX, mouseY, windowCenterX, windowCenterY, VERTICAL_SKEW);

		var smallBubblesAreDisplayed = smallBubbles[0].css('display') != 'none';

		// Check whether the mouse is close to the main bubble area
		if(skewedDistanceFromCenter < BUBBLE_HORIZONTAL_APPEAR_DISTANCE_INT && !smallBubblesAreDisplayed && !bubblesAreSlidingOut) {
			for(var i = 0; i < smallBubbleCount; i++) {
				slideBubbleInOut(i, true);
			}

		// Check whether the mouse is far from the main bubble area
		} else if(skewedDistanceFromCenter > BUBBLE_HORIZONTAL_DISAPPEAR_DISTANCE_INT && smallBubblesAreDisplayed && !bubblesAreSlidingIn) {
			for(var i = 0; i < smallBubbleCount; i++) {
				slideBubbleInOut(i, false);
			}
		}
	}
}

/**
 * The event handler for the mouse over event (over a bubble).
 */
function onBubbleMouseMove(event) {
	// TODO: add an additional boolean param here to allow for square bubbles instead of just circular ones
	var thisBubble = $(this);

	if(displaySmallBubbleShadow && thisBubble.hasClass(SMALL_BUBBLE_CLASS)) {
		var mouseX = event.pageX;
		var mouseY = event.pageY;
		var bubbleOffset = thisBubble.offset();
		var thisBubbleCenterX = bubbleOffset.left + SMALL_BUBBLE_HALF_WIDTH_INT;
		var thisBubbleCenterY = bubbleOffset.top + SMALL_BUBBLE_HALF_HEIGHT_INT;
		var distanceFromBubbleCenter = getDistance(mouseX, mouseY, thisBubbleCenterX, thisBubbleCenterY, VERTICAL_SKEW);

		var shadows = $('.' + SHADOW_CLASS);

		if(distanceFromBubbleCenter <= SMALL_BUBBLE_HALF_WIDTH_INT) {
			if(shadows.length != 0 && !thisBubble.is(smallBubbleShadow.parent())) {
				smallBubbleShadow.remove();
			}

			if(shadows.length == 0) {
				smallBubbleShadow = $(document.createElement('img'));
				smallBubbleShadow.addClass(SHADOW_CLASS);
				smallBubbleShadow.attr('src', SHADOW_FILENAME);
				smallBubbleShadow.appendTo(thisBubble);
			}
		} else {
			if(shadows.length != 0) {
				smallBubbleShadow.remove();
			}
		}
	}
}

/**
 * The event handler for the mouse in hover event (over a bubble).
 */
function onMouseIn(event) {
	// Do nothing
}

/**
 * The event handler for the mouse out hover event (over a bubble).
 */
function onMouseOut(event) {
	var shadows = $('.' + SHADOW_CLASS);

	if(shadows.length != 0) {
		smallBubbleShadow.remove();
	}
}

/**
 * The event handler for the click event (over a bubble).
 */
function onClick(event) {
	var thisBubble = $(this);

	if(thisBubble.hasClass(SMALL_BUBBLE_CLASS)) {
		if(lastAnimationStartTime < 0 || $.now() > lastAnimationStartTime + lastAnimationDuration) {
			envelopeBottom.css('display', 'block');

			// ---------- Swap out and re-arrange the bubble indices ---------- //

			// Find the index of there currently clicked small bubble and the index at which to place
			// the previous big bubble
			var thisSmallBubbleIndex = -1;
			var prevBigBubbleNewIndex = -1;
			var i;
			for(i = 0; i < smallBubbles.length; i++) {
				if(thisBubble.is(smallBubbles[i])) {
					thisSmallBubbleIndex = i;
					prevBigBubbleNewIndex = (i + (smallBubbleCount / 2)) % smallBubbleCount;
					break;
				}
			}

			// Swap out big bubble references
			var previousBigBubble = currentBigBubble;
			currentBigBubble = thisBubble;

			// Shift half of the bubbles down one index
			for(i = thisSmallBubbleIndex; i < smallBubbleCount - 1 && i != prevBigBubbleNewIndex + 1; i++) {
					smallBubbles[i] = smallBubbles[i + 1];
			} if(i != prevBigBubbleNewIndex + 1) {
				smallBubbles[smallBubbleCount - 1] = smallBubbles[0];

				for(i = 0; i <= prevBigBubbleNewIndex; i++) {
					smallBubbles[i] = smallBubbles[i + 1];
				}
			}

			// Place the previous big bubble into the small bubble array
			smallBubbles[prevBigBubbleNewIndex] = previousBigBubble;

			// ---------- Turn off the small bubble shadow functionality ---------- //

			smallBubbleShadow.remove();
			displaySmallBubbleShadow = false;

			// ---------- Hide the swapping bubbles' headers and other content ---------- //

			previousBigBubble.removeClass(BIG_BUBBLE_CLASS);
			previousBigBubble.addClass(SMALL_BUBBLE_CLASS);
			previousBigBubble.find("." + BUBBLE_SUB_H_CLASS).css("display", "inline");
			currentBigBubble.find("." + BUBBLE_SUB_H_CLASS).css("display", "none");
			previousBigBubble.css("display", "block");

			// ---------- Flip the envelope around to be closed? ---------- //
			
			if(currentBigBubble.is(homeBubble)) {
				// TODO ...
				
				envelopeTop.css("display", 'none');
			}

			// ---------- Re-spread out the small bubbles ---------- //

			for(i = 0; i < smallBubbleCount; i++) {
				slideBubbleAround(i);
			}

			// ---------- Shrink the old main bubble ---------- //
			
			var prevBigBubMainImg = previousBigBubble.find("." + BUBBLE_MAIN_IMG_CLASS);

			if(!previousBigBubble.is(homeBubble)) {
				prevBigBubMainImg.css("height", BIG_BUBBLE_HEIGHT_INT + "px");
				prevBigBubMainImg.css("width", BIG_BUBBLE_WIDTH_INT + "px");
				prevBigBubMainImg.animate({
					height: SMALL_BUBBLE_HEIGHT_INT + "px",
					width: SMALL_BUBBLE_WIDTH_INT + "px"
				}, SLIDE_AROUND_DURATION, 'easeInOutCubic');

				var prevBigBubSubH = previousBigBubble.find("." + BUBBLE_SUB_H_CLASS);
				prevBigBubSubH.css("width", BUBBLE_MAIN_H_WIDTH_INT + "px");
				prevBigBubSubH.animate({
					width: BUBBLE_SUB_H_WIDTH_INT + "px"
				}, SLIDE_AROUND_DURATION, 'easeInOutCubic');

				previousBigBubble.animate({
					height: SMALL_BUBBLE_HEIGHT_INT + "px",
					width: SMALL_BUBBLE_WIDTH_INT + "px"
				}, SLIDE_AROUND_DURATION, 'easeInOutCubic');
			} else {
				prevBigBubMainImg.css("height", ENVELOPE_BOTTOM_HEIGHT_INT + "px");
				prevBigBubMainImg.css("width", ENVELOPE_BOTTOM_WIDTH_INT + "px");
				prevBigBubMainImg.animate({
					height: SMALL_BUBBLE_HEIGHT_INT + "px",
					width: SMALL_BUBBLE_WIDTH_INT + "px"
				}, SLIDE_AROUND_DURATION, 'easeInOutCubic');

				var prevBigBubSubH = previousBigBubble.find("." + BUBBLE_SUB_H_CLASS);
				prevBigBubSubH.css("width", BUBBLE_MAIN_H_WIDTH_INT + "px");
				prevBigBubSubH.animate({
					width: BUBBLE_SUB_H_WIDTH_INT + "px"
				}, SLIDE_AROUND_DURATION, 'easeInOutCubic');

				previousBigBubble.animate({
					height: SMALL_BUBBLE_HEIGHT_INT + "px",
					width: SMALL_BUBBLE_WIDTH_INT + "px"
				}, SLIDE_AROUND_DURATION, 'easeInOutCubic');
			}
			
			// ---------- Slide the new main bubble to the center and enlarge it ---------- //

			if(!currentBigBubble.is(homeBubble)) {
				currentBigBubble.find("." + BUBBLE_MAIN_IMG_CLASS).animate({
					height: BIG_BUBBLE_HEIGHT_INT + "px",
					width: BIG_BUBBLE_WIDTH_INT + "px"
				}, SLIDE_AROUND_DURATION, 'easeInOutCubic');

				currentBigBubble.animate({
					height: BIG_BUBBLE_HEIGHT_INT + "px",
					width: BIG_BUBBLE_WIDTH_INT + "px",
					left: bigBubbleCornerX,
					top: bigBubbleCornerY
				}, SLIDE_AROUND_DURATION, 'easeInOutCubic', function() {

				// ---------- Display the new main bubble's main header and other content ---------- //

					currentBigBubble.removeClass(SMALL_BUBBLE_CLASS);
					currentBigBubble.addClass(BIG_BUBBLE_CLASS);

				// ---------- Turn back on the small bubble shadow functionality ---------- //

					displaySmallBubbleShadow = true;
				});
			} else {
				currentBigBubble.find("." + BUBBLE_MAIN_IMG_CLASS).animate({
					height: ENVELOPE_BOTTOM_HEIGHT_INT + "px",
					width: ENVELOPE_BOTTOM_WIDTH_INT + "px"
				}, SLIDE_AROUND_DURATION, 'easeInOutCubic');

				currentBigBubble.animate({
					height: BIG_BUBBLE_HEIGHT_INT + "px",
					width: BIG_BUBBLE_WIDTH_INT + "px",
					left: envelopeBottomCornerX,
					top: envelopeBottomCornerY
				}, SLIDE_AROUND_DURATION, 'easeInOutCubic', function() {
					envelopeBottom.css('display', 'none');

				// ---------- Display the new main bubble's main header and other content ---------- //

					currentBigBubble.removeClass(SMALL_BUBBLE_CLASS);
					currentBigBubble.addClass(BIG_BUBBLE_CLASS);

				// ---------- Turn back on the small bubble shadow functionality ---------- //

					displaySmallBubbleShadow = true;
				});
			}

			// ---------- Flip the envelope around to be open? ---------- //
			
			if(previousBigBubble.is(homeBubble)) {
				// TODO ...
				
				envelopeTop.css("left", envelopeTopCornerX + "px");
				envelopeTop.css("top", envelopeTopCornerY + "px");
				envelopeTop.css("display", 'block');
			}
		}
	}
}
