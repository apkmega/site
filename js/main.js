$(window).load(function() {
	$(".se-pre-con").fadeOut("slow")
}), $(".modal").on("show.bs.modal", function(t) {
	var n = $(".modal:visible").length;
	$(this).css("z-index", 1040 + 10 * n)
}), $(".modal").on("shown.bs.modal", function(t) {
	var n = $(".modal:visible").length - 1;
	$(".modal-backdrop").not(".stacked").css("z-index", 1039 + 10 * n), $(".modal-backdrop").not(".stacked").addClass("stacked")
});
var global_url = "";
$(document).ready(function() {
	$.fn.extend({
		animateCss: function(t, n) {
			var a = function(t) {
				var n = {
					animation: "animationend",
					OAnimation: "oAnimationEnd",
					MozAnimation: "mozAnimationEnd",
					WebkitAnimation: "webkitAnimationEnd"
				};
				for (var a in n)
					if (void 0 !== t.style[a]) return n[a]
			}(document.createElement("div"));
			return this.addClass("animated " + t).one(a, function() {
				$(this).removeClass("animated " + t), "function" == typeof n && n()
			}), this
		}
	}), $(".searchInput").on("keyup", function() {
		var t = $(this).val().toLowerCase();
		$(".AppContainer").filter(function() {
			$(".app-section-content").css("height", $(".app-section-content").height()), $(this).toggle($(this).text().toLowerCase().indexOf(t) > -1)
		})
	}), $(".AppContainer").click(function() {
		$(".avatar-modal img").attr("src", $(this).find(".app-img").attr("src")), $(".name-modal").html($(this).attr("data-app")), $(".name-modal").attr("data-name", $(this).attr("data-name")), $("#appModal").modal({
			backdrop: "static",
			keyboard: !1
		}), $(".console-log").html("Downloading " + $(this).attr("data-name")), global_url = $(this).attr("data-url")
	}), $(".btn-injection").click(function() {
		$("#loadModal").modal({
			backdrop: "static",
			keyboard: !1
		}), setTimeout(function() {
			$(".progress-bar").css("width", "5%"), setTimeout(function() {
				$(".progress-bar").css("width", "10%"), setTimeout(function() {
					$(".progress-bar").css("width", "15%")
				}, 1e3), setTimeout(function() {
					$(".progress-bar").css("width", "20%"), $(".console-log").html("Descompactando " + $(".name-modal").attr("data-name")), setTimeout(function() {
						$(".progress-bar").css("width", "25%"), setTimeout(function() {
							$(".progress-bar").css("width", "30%"), setTimeout(function() {
								$(".progress-bar").css("width", "35%"), setTimeout(function() {
									$(".progress-bar").css("width", "40%"), setTimeout(function() {
										$(".progress-bar").css("width", "60%"), $(".console-log").html("Iniciando injeção"), setTimeout(function() {
											$(".progress-bar").css("width", "65%"), setTimeout(function() {
												$(".progress-bar").css("width", "70%"), setTimeout(function() {
													$(".progress-bar").css("width", "75%"), setTimeout(function() {
														$(".progress-bar").css("width", "80%"), setTimeout(function() {
															$(".progress-bar").css("width", "85%"), setTimeout(function() {
																$(".progress-bar").css("width", "90%"), setTimeout(function() {
																	$(".progress-bar").css("width", "95%"), setTimeout(function() {
																		$(".progress-bar").css("width", "99%"), setTimeout(function() {
																			window.location.href = global_url
																		}, 1e3)
																	}, 1e3)
																}, 1e3)
															}, 1e3)
														}, 1e3), $(".console-log").html("Configurando estágio final")
													}, 1e3)
												}, 1e3)
											}, 1e3)
										}, 1e3)
									}, 1e3)
								}, 1e3)
							}, 1e3)
						}, 1e3)
					}, 1e3)
				}, 1e3)
			}, 1e3)
		}, 1e3)
	})
});
