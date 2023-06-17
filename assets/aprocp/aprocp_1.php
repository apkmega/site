<?php
define('IS_AJAX', isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');
if (!IS_AJAX) {
	die("<div style='width: 100%; height: 100%; position: fixed; background: #212833; left: 0; top: 0;'><div style='width: 70%; margin: 150px auto 0 auto; background: #fff; text-align:center; padding: 80px 100px; border-radius: 20px; font-family: Verdana; box-shadow: 0 0 0 3px rgba(255,255,255,0.2);'><h3 style='color: #000; text-transform: uppercase; margin: 0;'>Huh.. wait a second!</h3><h1 style='margin: 5px 0 0 0; color: #fc4349; text-transform: uppercase; letter-spacing: 1px;'>Nosey little mouse, aren't you?</h1><p style='font-size: 1em; color: #555;'>There is nothing interesting here, no point waisting your time.</p></div></div>");
}
require_once('../../includes/sqldb.inc.php');
$query_aos = $file_db->prepare("SELECT * FROM app_o_s");
$query_aos->execute();
$data_aos = $query_aos->fetch();
?>
<div id="step-container" class="step-container">
	<div id="s-ex" class="step-exit"><span class="material-icons-two-tone">cancel</span></div>
	<div class="step-app-content">
		<div class="step-icon-wrapper">
			<img src="" class="img-fluid app-step-icon" />
		</div>
		<div class="step-info-wrapper"></div>
		<div class="step-secondary-info-wrapper"></div>
	</div>
	<div class="step-proccesing-content">
		<div id="s-p-c-title">Download pronto</div>
		<div id="s-p-c-msg">Clique no botão abaixo para iniciar o download do seu aplicativo.</div>
		<div class="s-p-c-btn-wrapper">
			<div id="sp-sb" class="s-p-c-btn animated pulse infinite"><span>Baixar agora</span></div>
		</div>
	</div>
	<div class="step-loader">
		<div class="ball-scale-multiple">
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</div>