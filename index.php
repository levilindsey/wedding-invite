<!-- -------------------------------------------------------------------------
  -- Authors: Levi Lindsey,
  --		  Jackie Lindsey
  ------------------------------------------------------------------------- -->
<?php
$HIT_COUNTER_FILENAME = "hits.txt";

# Reads the hit count from disk, increments it, writes it, and returns it.
function hit_counter() {
	global $HIT_COUNTER_FILENAME;
	if(file_exists($HIT_COUNTER_FILENAME)) {
		$hits = file_get_contents($HIT_COUNTER_FILENAME);
	} else {
		$hits = 0;
	}
	$hits++;
	file_put_contents($HIT_COUNTER_FILENAME, $hits);
	return $hits;
}

# A hand-made file_put_contents() function in case the default version does not exist for the
# given version of PHP.
if(!function_exists('file_put_contents')) {
	function file_put_contents($filename, $data, $file_append = false) {
		$fp = fopen($filename, (!$file_append ? 'w+' : 'a+'));
		if(!$fp) {
			trigger_error('file_put_contents cannot write in file.', E_USER_ERROR);
			return;
		}
		fputs($fp, $data);
		fclose($fp);
	}
}

# Returns the appropriate ordinality suffix for the given number; e.g. "st" for 1 or "th" for 5.
function get_ordinality_suffix($number) {
	if($number % 100 == 11 || $number % 100 == 12 || $number % 100 == 13) {
		return "th";
	} elseif($number % 10 == 1) {
		return "st";
	} elseif($number % 10 == 2) {
		return "nd";
	} elseif($number % 10 == 3) {
		return "rd";
	} else {
		return "th";
	}
}

include("home.php");
?>
