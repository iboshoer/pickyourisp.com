/**
 * PickYourISP availability stub - client-only, no network, no PII POST.
 * On submit: show honest empty state. Does NOT invent providers for a ZIP.
 */
(function () {
  "use strict";

  var form = document.getElementById("availability-form");
  var zipInput = document.getElementById("avail-zip");
  var statusEl = document.getElementById("avail-status");
  var emptyEl = document.getElementById("avail-empty");

  function track(action, zipValid) {
    if (window.PickYourISPAnalytics && typeof window.PickYourISPAnalytics.track === "function") {
      var params = { action: action };
      if (typeof zipValid === "boolean") params.zip_valid = zipValid;
      window.PickYourISPAnalytics.track("availability_stub_interact", params);
    }
  }

  function setStatus(message) {
    if (statusEl) statusEl.textContent = message || "";
  }

  function isValidZip(value) {
    return /^\d{5}$/.test(String(value || "").trim());
  }

  if (zipInput) {
    zipInput.addEventListener("focus", function () {
      track("focus");
    });
    zipInput.addEventListener("input", function () {
      var cleaned = zipInput.value.replace(/\D/g, "").slice(0, 5);
      if (cleaned !== zipInput.value) zipInput.value = cleaned;
    });
  }

  if (emptyEl) {
    emptyEl.addEventListener("click", function (event) {
      var target = event.target;
      var browseLink = target && target.closest ? target.closest('[data-availability-action="browse_providers_from_empty"]') : null;
      if (browseLink) track("browse_providers_from_empty");
    });
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var zip = (zipInput && zipInput.value ? zipInput.value : "").trim();
      if (!isValidZip(zip)) {
        track("submit_invalid", false);
        setStatus("Enter a valid 5-digit US ZIP code (numbers only).");
        if (emptyEl) emptyEl.classList.add("hidden");
        if (zipInput) zipInput.focus();
        return;
      }
      track("submit_valid_preview", true);
      // Honest stub: never invent coverage or provider lists for this ZIP.
      setStatus(
        "ZIP " + zip + " accepted for preview only. Live availability is not connected."
      );
      if (emptyEl) {
        emptyEl.classList.remove("hidden");
        track("empty_state_shown");
        emptyEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }
})();
