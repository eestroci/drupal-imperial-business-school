(() => {
	function e() {
		if (!window?.parsely?.siteId) return;
		const e = window.parsely.siteId,
			n = document.createElement("script");
		(n.id = "parsely-cfg"),
			(n.src = `//cdn.parsely.com/keys/${e}/p.js`),
			(n.async = !0),
			(n.defer = !0),
			document.body.appendChild(n);
	}
	window.adverts.queue.push(() => {
		window.__tcfapi
			? window.__tcfapi("getValidTCData", 2, () => {
					window.__tcfapi(
						"getNonRegisteredVendorsConsents",
						2,
						(n) => {
							n && n?.[25]?.consent && e();
						},
					);
			  })
			: window.__uspapi &&
			  window.__uspapi("getUSPData", 1, () => {
					window.__uspapi.a.push([
						"hasConsentedToAll",
						null,
						(n) => {
							n && e();
						},
					]);
			  });
	});
})();
