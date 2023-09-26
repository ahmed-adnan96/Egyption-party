function closeNav() {
  let closeTap = $(".inner-navbar").outerWidth();
  $("#sideNabar").animate({ left: -closeTap });
}
function openNavbar() {
  $("#sideNabar").animate({ left: "0px" });
}
closeNav();
$(".iconClose").click(function () {
  closeNav();
});
$(".openNav").click(function () {
  openNavbar();
});

/* Slide section */
$(".slide h3").click(function () {
  $(this).next().slideToggle(500);
  $(".slide p").not($(this).next()).slideUp();
});

/* Generate Date  */
function updateDate() {
  const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
  const currentDate = new Date().getTime();
  const distance = countDownDate - currentDate;
  if (distance < 0) {
    clearInteval(updateInterval);
    dateExpired();
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  displayCountDate(days, hours, minutes, seconds);
}
function displayCountDate(day, hour, minute, second) {
  $(".days").html(`${day} D`);
  $(".hours").html(`${hour} h`);
  $(".minutes").html(`${minute} m`);
  $(".seconds").html(`${second} s`);
}
function dateExpired() {
  $(".days,.hours,.minutes,.seconds").html("EXPIRED!");
}
updateDate();
const updateInterval = setInterval(updateDate, 1000);
/* textarea */
$("textarea").keyup(function () {
  let counter =
    100 - $("textarea").val().length <= 0
      ? $("textarea").attr("disabled", "") && 0
      : 100 - $("textarea").val().length;
  $(".count-message").text(counter);
});
