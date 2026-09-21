/**
 * PickYourISP Phase A analytics stub.
 * First-party event bus only: console.debug in preview, no network calls.
 * Query ?analytics=off disables the preview sink.
 */
(function (window, document) {
  "use strict";

  var allowedActions = {
    focus: true,
    submit_invalid: true,
    submit_valid_preview: true,
    empty_state_shown: true,
    browse_providers_from_empty: true
  };
  var disabled = false;

  try {
    disabled = new URLSearchParams(window.location.search || "").get("analytics") === "off";
  } catch (error) {
    disabled = false;
  }

  function cleanSlug(value, allowSlash) {
    if (typeof value !== "string") return undefined;
    var pattern = allowSlash ? /^[a-z0-9][a-z0-9-]*(?:\/[a-z0-9][a-z0-9-]*)?$/ : /^[a-z0-9][a-z0-9-]*$/;
    return pattern.test(value) ? value : undefined;
  }

  function cleanPath(value) {
    if (typeof value !== "string") return undefined;
    var path = value.split("?")[0];
    return /^(?:\/|#)/.test(path) && path.length < 2048 ? path : undefined;
  }

  function pagePath() {
    var path = (window.location && window.location.pathname) || "/";
    path = path.split("?")[0] || "/";
    path = path.replace(/\/index\.html$/, "/");
    if (path.charAt(0) !== "/") path = "/" + path;
    return path.replace(/\/+/g, "/") || "/";
  }

  function pageTemplate(path) {
    var parts = path.split("/").filter(Boolean);
    if (path === "/" || path === "/index.html") return "home";
    if (path === "/404.html" || /\/(?:404|not-found)\/?$/.test(path)) return "error_404";
    if (parts[0] === "providers") return parts.length === 1 ? "providers_hub" : "provider_detail";
    if (parts[0] === "compare") return "compare_stub";
    if (parts[0] === "locations") return "location_city";
    if (parts[0] === "disclosure") return "trust_disclosure";
    if (parts[0] === "methodology") return "trust_methodology";
    if (parts[0] === "privacy") return "trust_privacy";
    if (parts[0] === "terms") return "trust_terms";
    if (parts[0] === "about") return "about";
    if (parts[0] === "contact") return "contact";
    if (parts[0] === "internet") return parts.length === 1 ? "internet_hub" : "internet_tech";
    return "preview_other";
  }

  function currentContext() {
    var path = pagePath();
    var parts = path.split("/").filter(Boolean);
    var context = {
      page_template: pageTemplate(path),
      page_path: path,
      content_status: "preview"
    };
    var status = document.documentElement.getAttribute("data-content-status") ||
      (document.body && document.body.getAttribute("data-content-status"));
    if (status === "preview" || status === "placeholder" || status === "do_not_publish" || status === "live") {
      context.content_status = status;
    }
    if (context.page_template === "provider_detail") context.provider_slug = cleanSlug(parts[1]);
    if (context.page_template === "location_city") context.location_slug = cleanSlug(parts.slice(1).join("/"), true);
    return context;
  }

  function sanitize(eventName, params) {
    params = params || {};
    var clean = {};
    if (eventName === "page_view") {
      var page = currentContext();
      clean.page_template = page.page_template;
      clean.page_path = page.page_path;
      clean.content_status = page.content_status;
      if (page.provider_slug) clean.provider_slug = page.provider_slug;
      if (page.location_slug) clean.location_slug = page.location_slug;
    } else if (eventName === "cta_click") {
      if (typeof params.cta_id === "string" && /^[a-z0-9_:-]+$/.test(params.cta_id)) clean.cta_id = params.cta_id;
      if (typeof params.cta_location === "string" && /^[a-z0-9_:-]+$/.test(params.cta_location)) clean.cta_location = params.cta_location;
      clean.page_template = currentContext().page_template;
      var dest = cleanPath(params.dest_path);
      if (dest) clean.dest_path = dest;
    } else if (eventName === "availability_stub_interact") {
      if (!allowedActions[params.action]) return null;
      clean.action = params.action;
      if (typeof params.zip_valid === "boolean") clean.zip_valid = params.zip_valid;
    } else if (eventName === "outbound_provider_click") {
      var slug = cleanSlug(params.provider_slug);
      if (!slug) return null;
      clean.provider_slug = slug;
      clean.page_template = currentContext().page_template;
      clean.link_role = "official_site";
    } else {
      return null;
    }
    return clean;
  }

  var sink = function (eventName, payload) {
    if (window.console && typeof window.console.debug === "function") {
      window.console.debug("[PickYourISP analytics] " + eventName, payload);
    }
  };

  function track(eventName, params) {
    var payload = sanitize(eventName, params);
    if (!payload || disabled) return;
    sink(eventName, payload);
  }

  function destinationPath(anchor) {
    var href = anchor && anchor.getAttribute("href");
    if (!href) return undefined;
    try {
      var url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return undefined;
      return url.pathname + (url.hash || "");
    } catch (error) {
      return cleanPath(href);
    }
  }

  window.PickYourISPAnalytics = {
    track: track,
    setSink: function (nextSink) {
      if (typeof nextSink === "function") sink = nextSink;
    }
  };

  document.addEventListener("click", function (event) {
    var target = event.target;
    var cta = target && target.closest ? target.closest("[data-cta-id]") : null;
    if (cta) {
      track("cta_click", {
        cta_id: cta.getAttribute("data-cta-id"),
        cta_location: cta.getAttribute("data-cta-location"),
        dest_path: destinationPath(cta)
      });
    }

    var outbound = target && target.closest ? target.closest('[data-outbound="provider"], [data-outbound-provider]') : null;
    if (outbound) {
      track("outbound_provider_click", {
        provider_slug: outbound.getAttribute("data-provider-slug"),
        link_role: "official_site"
      });
    }
  });

  function sendPageView() {
    track("page_view", currentContext());
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", sendPageView, { once: true });
  } else {
    sendPageView();
  }
})(window, document);
