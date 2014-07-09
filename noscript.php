<!-- -------------------------------------------------------------------------
  -- Authors: Levi Lindsey,
  --		  Jackie Lindsey
  ------------------------------------------------------------------------- -->
<?php
include("top.php");

// ---------- Handle any RSVP HTTP POST request information ---------- //
include("rsvp.php");
?>
<div class="no_script_page">
	<h1>
		You are invited
	</h1>

	<h2>Who</h2>
	<p>
		<span class="name">Jacqueline Kimberly Schwartzstein</span><br />and<br /><span class="name">Levi Scott Lindsey</span>
	</p>

	<h2>What</h2>
	<p>
		Jackie and Levi's closest family and friends will gather
		together to meet and celebrate their wedding!  There will be food, cake, and
		festive drinks.  The bride and groom will be married the day before the party, so
		attire need not be formal; however, they will be dressed up, so feel free to join
		in!  The party will be outside, and the weather in Olympia is usually idyllic in
		August.
	</p>

	<h2>When</h2>
	<p>
		Saturday, the third of August<br />
		Two thousand and thirteen<br />
		At two o'clock in the afternoon<br />
	</p>

	<h2>Where</h2>
	<p>
		The reception will be held under the beautiful trees at Scott and Carolyn Lindsey's house in Olympia, Washington.  This address will be provided with the RSVP confirmation.
	</p>

	<h2>RSVP</h2>
	<?php
	if (!$finishedrsvp) {
	?>
		<form action="http://www.jackieandlevi.com/home.php?start_card=rsvp&<?= $FINISHEDPARAM ?>=true" method="post">
			<span id="rsvp_by">(Please RSVP before June 25th!)</span><br /><br />
			Will you be attending?
			<label><input id="coming_yes_rb" type="radio" name="<?= $ATTENDINGPARAM ?>" value="yes" />
				Yes</label>
			<label><input id="coming_no_rb" type="radio" name="<?= $ATTENDINGPARAM ?>" value="no" />
				No</label><br />
			Your name:
			<input id="rsvp_name" type="text" name="<?= $NAMEPARAM ?>" size="28" /><br />
			Your email address:
			<input id="rsvp_email" type="text" name="<?= $EMAILPARAM ?>" size="28" /><br />
			Number of people in your party (including you) (if coming):
			<input id="rsvp_count" type="text" name="<?= $COUNTPARAM ?>" size="2" /><br />
			Please describe any dietary restrictions your party may have (if coming):<br />
			<textarea id="rsvp_diet_needs" name="<?= $DIETNEEDSPARAM ?>" rows="3" cols="32"></textarea><br />
			<input id="rsvp_submit" type="submit" value="RSVP" disabled="true"/>
		</form>
	<?php
	} else {
	?>
		<p>
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

	<h2>Registry</h2>
	<p>
		Should you wish to buy a gift for the bride and groom, there are two registry
		options. The traditional registry is at
		<a href="http://www.surlatable.com/registry/giftRegistryList.jsp?id=200513960343" target="_blank">Sur La Table</a>,
		which can be accessed online or in person at one of the store locations. An
		alternate option is the
		<a href="https://www.nrdcgreengifts.org/shopping-for-green-gifts-is-as-easy-as-1-2-3" target="_blank">NRDC's Green Gift</a>
		program, where you can donate to a good cause of your choice in honor of the bride and groom.
	</p>
</div>

<?php
include("bottom.php");
?>
