<!-- -------------------------------------------------------------------------
  -- Authors: Levi Lindsey,
  --		  Jackie Lindsey
  ------------------------------------------------------------------------- -->

<?php
$RSVPYESFILENAME = "rsvp_yes_info.csv";
$RSVPNOFILENAME = "rsvp_no_info.csv";

$DELIMITER = ",";
$DELIMITERREPLACEMENT = "_COMMA_";

$FINISHEDPARAM = "finished_rsvp";

$ATTENDINGPARAM = "attending";
$NAMEPARAM = "name";
$EMAILPARAM = "email";
$COUNTPARAM = "count";
$DIETNEEDSPARAM = "diet_needs";

$NOTIFTO = "jackieandlevi.wedding@gmail.com";
$YESNOTIFSUB = "Wedding RSVP: yes";
$NONOTIFSUB = "Wedding RSVP: no";
$NOTIFFROM = "From:jackieandlevi.wedding@gmail.com";

$CONFSUB = "Jackie and Levi's wedding!";
$YESCONFMES = "We can't wait to see you!\n\nThe celebration will be held at Scott and Carolyn Lindsey's (Levi's parents) house on the third of August at two o'clock in Olympia, WA.  The address is\n\n6832 101st Ave SW\nOlympia, WA 98512.\n\nThanks!\n~Jackie and Levi\nwww.jackieandlevi.com";
$NOCONFMES = "We'll miss you!\n\nThanks,\n~Jackie and Levi";
$CONFFROM = "From:jackieandlevi.wedding@gmail.com";
?>

<?php
$finishedrsvp = isset($_REQUEST[$FINISHEDPARAM]) && htmlspecialchars($_REQUEST[$FINISHEDPARAM]) == "true";
$attending = isset($_REQUEST[$ATTENDINGPARAM]) && htmlspecialchars($_REQUEST[$ATTENDINGPARAM]) == "yes";

if($finishedrsvp) {
	# prevent HTML injection
	$name = htmlspecialchars($_REQUEST[$NAMEPARAM]);
	$email = htmlspecialchars($_REQUEST[$EMAILPARAM]);

	# Replace commas
	$email = str_replace($DELIMITER, $DELIMITERREPLACEMENT, $email);
	$name = str_replace($DELIMITER, $DELIMITERREPLACEMENT, $name);

	if($attending) {
		# prevent HTML injection
		$count = htmlspecialchars($_REQUEST[$COUNTPARAM]);
		$dietneeds = htmlspecialchars($_REQUEST[$DIETNEEDSPARAM]);

		# Replace commas
		$count = str_replace($DELIMITER, $DELIMITERREPLACEMENT, $count);
		$dietneeds = str_replace($DELIMITER, $DELIMITERREPLACEMENT, $dietneeds);

		# Create the new file entry
		$rsvpentry = $name . $DELIMITER . $email . $DELIMITER . $count . $DELIMITER . $dietneeds . "\n";
		$rsvpfilename = $RSVPYESFILENAME;

		# Send an email letting us know
		$notificationsubject = $YESNOTIFSUB;
		$notificationmessage = "NAME:\t\t\t" . $name . "\nEMAIL:\t\t\t" . $email . "\nCOUNT:\t\t\t" . $count . "\nDIET NEEDS:\t" . $dietneeds;

		# Send a confirmation email to the guest
		$confirmationmessage = $YESCONFMES;
	} else {
		# Create the new file entry
		$rsvpentry = $name . $DELIMITER . $email . "\n";
		$rsvpfilename = $RSVPNOFILENAME;

		# Send an email letting us know
		$notificationsubject = $NONOTIFSUB;
		$notificationmessage = "NAME:\t\t\t" . $name . "\nEMAIL:\t\t\t" . $email;

		# Send a confirmation email to the guest
		$confirmationmessage = $NOCONFMES;
	}

	# Send/record the results
	file_put_contents($rsvpfilename, $rsvpentry, FILE_APPEND);
#	mail($NOTIFTO, $notificationsubject, $notificationmessage, $NOTIFFROM);
#	mail($email, $CONFSUB, $confirmationmessage, $CONFFROM);
}
?>
