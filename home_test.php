<!-- -------------------------------------------------------------------------
  -- Authors: Levi Lindsey,
  --		  Jackie Lindsey
  ------------------------------------------------------------------------- -->

<?php
include("top_test.php");

// ---------- Set up which bubble starts as the main one ---------- //
$startbubble = isset($_REQUEST["start_card"]) ? $_REQUEST["start_card"] : "home";

$bubble1class = "small_bubble";
$bubble2class = "small_bubble";
$bubble3class = "small_bubble";
$bubble4class = "small_bubble";
$bubble5class = "small_bubble";
$bubble6class = "small_bubble";
$bubble7class = "small_bubble";

switch($startbubble) {
case "home":
	$bubble1class = "big_bubble";
	break;
case "who":
	$bubble2class = "big_bubble";
	break;
case "what":
	$bubble3class = "big_bubble";
	break;
case "when":
	$bubble4class = "big_bubble";
	break;
case "where":
	$bubble5class = "big_bubble";
	break;
case "rsvp":
	$bubble6class = "big_bubble";
	break;
case "registry":
	$bubble7class = "big_bubble";
	break;
default:
	$bubble1class = "big_bubble";
	break;
}

// ---------- Handle any RSVP HTTP POST request information ---------- //
include("rsvp.php");

?>

<div class="no_script_content">
	Hey!  This very pretty page was designed to be viewed with javascript enabled!  But if you'd really rather not deal with javascript, you can view the <a href="noscript.php">basic information here</a>.
</div>

<div class="ie_user_content">
	I'm sorry, but <a href="http://www.hipwebdesign.com/blog/why-you-should-stop-using-internet-explorer/" target="_blank">Internet Explorer is an awful browser</a>, and I refuse to support it on my personal site.  IE is not standards compliant, which means that professional web developers have to write everything they do twice&#8212;once for IE and once for everyone else.  IE has numerous security issues and has countless bugs.  IE consumes a good deal more of your computer's processing power than other browsers and still runs significantly more slowly.
	<br /><br />
	This site has some pretty spiffy bells and whistles, so if you want to see them, please come back in a different browser; most Internet-savvy people use <a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox</a> or <a href="https://www.google.com/intl/en/chrome/browser/" target="_blank">Chrome</a>. Otherwise, you can view the <a href="noscript.php">basic content of the site here</a>.
</div>

<div class="scripted_content">
	<img id="envelope_bottom" src="images/envelope_bottom.png<?= $currentVersion ?>" alt="__" />

	<div id="bubble1" class="bubble <?= $bubble1class ?>">
		<img class="bubble_main_img" src="images/home_bubble.png<?= $currentVersion ?>" alt="__" />
		<h3 class="bubble_sub_h">Home</h3>
		<div class="bubble_body">
			<h2 class="bubble_main_h">You are invited</h2>
		</div>
	</div>

	<div id="bubble2" class="bubble <?= $bubble2class ?>">
		<img class="bubble_main_img" src="images/card.png<?= $currentVersion ?>" alt="__" />
		<img class="bubble_border_img" src="images/card_border.png<?= $currentVersion ?>" alt="__" />
		<h3 class="bubble_sub_h">Who</h3>
		<div class="bubble_body">
			<h2 class="bubble_main_h">Who</h2>
			<p class="bubble_p">
				<span class="name">Jacqueline Kimberly Schwartzstein</span><br />and<br /><span class="name">Levi Scott Lindsey</span>
			</p>
			<img class="bubble_sub_img" src="images/bubble_2_sub.jpg" alt="awww..." title="awww..." />
		</div>
	</div>

	<div id="bubble3" class="bubble <?= $bubble3class ?>">
		<img class="bubble_main_img" src="images/card.png<?= $currentVersion ?>" alt="__" />
		<img class="bubble_border_img" src="images/card_border.png<?= $currentVersion ?>" alt="__" />
		<h3 class="bubble_sub_h">What</h3>
		<div class="bubble_body">
			<h2 class="bubble_main_h">What</h2>
			<p class="bubble_p">
				Approximately 150 of Jackie and Levi's closest family and friends will gather
				together to meet and celebrate their wedding!  There will be food, cake, and
				festive drinks.  The bride and groom will be married the day before the party, so
				attire need not be formal; however, they will be dressed up, so feel free to join
				in!  The party will be outside, and the weather in Olympia is usually idyllic in
				August.
			</p>
		</div>
	</div>

	<div id="bubble4" class="bubble <?= $bubble4class ?>">
		<img class="bubble_main_img" src="images/card.png<?= $currentVersion ?>" alt="__" />
		<img class="bubble_border_img" src="images/card_border.png<?= $currentVersion ?>" alt="__" />
		<h3 class="bubble_sub_h">When</h3>
		<div class="bubble_body">
			<h2 class="bubble_main_h">When</h2>
			<p class="bubble_p">
				Saturday, the third of August<br />
				Two thousand and thirteen<br />
				At two o'clock in the afternoon<br />
			</p>
			<table id="count_down_table">
				<tr class="time_row">
					<td id="days" class="main_cell">00</td><td class="sep_cell">:</td>
					<td id="hours" class="main_cell">00</td><td class="sep_cell">:</td>
					<td id="minutes" class="main_cell">00</td><td class="sep_cell">:</td>
					<td id="seconds" class="main_cell">00</td>
				</tr>
				<tr class="label_row">
					<td class="main_cell">days</td><td class="sep_cell"></td>
					<td class="main_cell">hours</td><td class="sep_cell"></td>
					<td class="main_cell">minutes</td><td class="sep_cell"></td>
					<td class="main_cell">seconds</td>
				</tr>
			</table>
		</div>
	</div>

	<div id="bubble5" class="bubble <?= $bubble5class ?>">
		<img class="bubble_main_img" src="images/card.png<?= $currentVersion ?>" alt="__" />
		<img class="bubble_border_img" src="images/card_border.png<?= $currentVersion ?>" alt="__" />
		<h3 class="bubble_sub_h">Where</h3>
		<div class="bubble_body">
			<h2 class="bubble_main_h">Where</h2>
			<p class="bubble_p low_p">
				The reception will be held under the beautiful trees at Scott and Carolyn Lindsey's house in Olympia, Washington.  This address and directions will be provided with the RSVP confirmation.
			</p>
			<img class="bubble_sub_img" src="images/bubble_5_sub.jpg" alt="__" />
		</div>
	</div>

	<div id="bubble6" class="bubble <?= $bubble6class ?>">
		<img class="bubble_main_img" src="images/card.png<?= $currentVersion ?>" alt="__" />
		<img class="bubble_border_img" src="images/card_border.png<?= $currentVersion ?>" alt="__" />
		<h3 class="bubble_sub_h">RSVP</h3>
		<div class="bubble_body">
			<h2 class="bubble_main_h">RSVP</h2>
			<?php
			if (!$finishedrsvp) {
			?>
				<form action="http://www.jackieandlevi.com/home.php?start_card=rsvp&<?= $FINISHEDPARAM ?>=true" method="post">
					<div class="bubble_p">
						<span id="rsvp_by">(Please RSVP by April first!)</span><br /><br />
						Will you be attending?
						<label><input id="coming_yes_rb" type="radio" name="<?= $ATTENDINGPARAM ?>" value="yes" />
							Yes</label>
						<label><input id="coming_no_rb" type="radio" name="<?= $ATTENDINGPARAM ?>" value="no" />
							No</label><br />
						Your name:
						<input id="rsvp_name" type="text" name="<?= $NAMEPARAM ?>" size="28" /><br />
						<span id="rsvp_name_error" class="rsvp_error_msg"></span>
						Your email address:
						<input id="rsvp_email" type="text" name="<?= $EMAILPARAM ?>" size="28" /><br />
						<span id="rsvp_email_error" class="rsvp_error_msg"></span>
						<span id="rsvp_coming">
							Number of people in your party (including you):
							<input id="rsvp_count" type="text" name="<?= $COUNTPARAM ?>" size="2" /><br />
							<span id="rsvp_count_error" class="rsvp_error_msg"></span>
							Please describe any dietary restrictions your party may have:<br />
							<textarea id="rsvp_diet_needs" name="<?= $DIETNEEDSPARAM ?>" rows="2" cols="32"></textarea><br />
							<span id="rsvp_diet_needs_error" class="rsvp_error_msg"></span>
						</span>
						<input id="rsvp_submit" type="submit" value="RSVP"/>
					</div>
				</form>
			<?php
			} else {
			?>
				<p class="bubble_p">
					Thank you for RSVPing!<br />
					<?php
					if($attending) {
					?>
					We look forward to seeing you!
					<?php
					} else {
					?>
					We&apos;ll miss you!
					<?php
					}
					?>
				</p>
			<?php
			}
			?>
		</div>
	</div>

	<div id="bubble7" class="bubble <?= $bubble7class ?>">
		<img class="bubble_main_img" src="images/card.png<?= $currentVersion ?>" alt="__" />
		<img class="bubble_border_img" src="images/card_border.png<?= $currentVersion ?>" alt="__" />
		<h3 class="bubble_sub_h">Registry</h3>
		<div class="bubble_body">
			<h2 class="bubble_main_h">Registry</h2>
			<p class="bubble_p">
				Should you wish to buy a gift for the bride and groom, there are two registry
				options. The traditional registry is at
				<a href="http://www.surlatable.com/registry/giftRegistryList.jsp?id=200513960343" target="_blank">Sur La Table</a>,
				which can be accessed online or in person at one of the store locations. An
				alternate option is the
				<a href="https://www.nrdcgreengifts.org/shopping-for-green-gifts-is-as-easy-as-1-2-3" target="_blank">NRDC's Green Gift</a>
				program, where you can donate to a good cause of your choice in honor of the bride and groom.
			</p>
		</div>
		<img class="bubble_sub_img" src="images/bubble_7_sub.jpg" alt="" />
	</div>
</div>

<?php
include("bottom.php");
?>
