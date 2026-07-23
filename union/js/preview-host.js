/**
 * Product preview is public only on GitHub Pages project URL — not the marketing domain.
 * local4663.com/union/* → send visitors home; buildtogetherlabs.github.io/ibh/union/* stays up.
 */
(function () {
  var h = location.hostname;
  if (h === "local4663.com" || h === "www.local4663.com") {
    location.replace("/");
  }
})();
