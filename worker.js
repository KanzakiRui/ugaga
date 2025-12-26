const html = `
<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Iwara Video Ad-Free Player</title>
		<meta name="description" content="An ad-free online Iwara video playback site" />
		<meta name="keywords" content="free video, online, video, Iwara" />
		<link rel="icon"
			href="data:image/png;base64,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...(truncated 196234 characters)...`;

					// Pagination controls update
					pageSizeSelect.onchange = () => {
						pageSize = parseInt(pageSizeSelect.value);
						currentPage = 1;
						calculateTotalPages();
						renderCurrentPage();
						updateControls();
					};

					// Click row to copy link
					saveTableBody.addEventListener('click', e => {
						const tr = e.target.closest('tr');
						if (tr && !e.target.matches('button')) {
							const td = tr.querySelector('td');
							if (td && td.dataset.id) {
								copyLinkToClipboard('https://www.iwara.tv/video/' + td.dataset.id);
							}
						}
					});

					// Initialize
					calculateTotalPages();
					renderCurrentPage();
					updateControls();

					// SweetAlert modal
					swal({
						title: 'My Favorites',
						content: saveContainer,
						buttons: {
							clear: {
								text: "Clear All",
								value: 'clear'
							},
							export: {
								text: "Export",
								value: 'export'
							},
							import: {
								text: "Import",
								value: 'import'
							},
							close: {
								text: "Close",
								value: null
							}
						}
					}).then(act => {
						if (act === 'clear') {
							swal({
								title: 'Warning',
								text: 'Clearing favorites is irreversible. Are you sure?',
								icon: 'warning',
								buttons: ['Cancel', 'Clear']
							}).then(ok => {
								if (ok) {
									localStorage.removeItem('save');
									openFavorites();
								}
							});
						} else if (act === 'export') {
							exportFavorites();
						} else if (act === 'import') {
							importFavorites().then(() => openFavorites());
						}
					});
				}

				// Check if JWT Token is valid (local parsing only, no signature verification)
				function isJwtValid(token) {
					try {
						if (typeof token !== 'string' || token.trim() === '') {
							return false;
						}

						const parts = token.split('.');
						if (parts.length !== 3) {
							return false;
						}

						const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));

						if (!payload.exp || typeof payload.exp !== 'number') {
							return false;
						}

						const now = Math.floor(Date.now() / 1000);
						return payload.exp > now;
					} catch (err) {
						console.error('Token parsing failed:', err);
						return false;
					}
				}

				// Save Token
				function saveToken() {
					swal({
						title: "How to Get Token",
						text: "On the official Iwara homepage, press F12 (on PC), go to the Console tab, type localStorage.getItem('token'), press Enter. Copy the output, paste it below, and click OK.",
						content: "input",
						button: "OK"
					})
					.then((value) => {
						if (isJwtValid(value)) {
							localStorage.setItem('token', value);
							swal({
								text: "Token saved successfully!",
								icon: "success",
								button: "OK"
							});
						} else {
							swal({
								text: "Token is invalid or has expired!",
								icon: "error",
								button: "OK"
							});
						}
					});
				}

				// Export Favorites
				function exportFavorites() {
					const data = localStorage.getItem('save');
					if (data) {
						const blob = new Blob([data], {
							type: 'application/json'
						});
						const url = URL.createObjectURL(blob);
						const a = document.createElement('a');
						a.href = url;
						a.download = 'Iwara_Favorites.json';
						document.body.appendChild(a);
						a.click();
						document.body.removeChild(a);
						URL.revokeObjectURL(url);
					}
				}

				// Import Favorites (returns Promise)
				function importFavorites() {
					return new Promise((resolve) => {
						const input = document.createElement('input');
						input.type = 'file';
						input.accept = 'application/json';
						input.style.display = 'none';
						document.body.appendChild(input);

						input.addEventListener('change', () => {
							if (!input.files[0]) {
								resolve();
								return;
							}

							const reader = new FileReader();
							reader.readAsText(input.files[0]);
							reader.onload = () => {
								const imported = reader.result;
								if (localStorage.getItem('save')) {
									swal({
										text: 'You already have favorites. Importing will overwrite them. Continue?',
										icon: 'warning',
										buttons: {
											cancel: 'Cancel',
											ok: 'Confirm'
										}
									}).then(ok => {
										if (ok) {
											localStorage.setItem('save', imported);
										}
										resolve();
									});
								} else {
									localStorage.setItem('save', imported);
									resolve();
								}
							};

							reader.onerror = () => {
								swal({
									text: 'Failed to read file',
									icon: 'error'
								});
								resolve();
							};
						}, {
							once: true
						});

						input.click();
					});
				}

				// Copy link to clipboard
				async function copyLinkToClipboard(url = null) {
					try {
						const link = url || (() => {
							const u = new URL(location.origin);
							u.searchParams.set('id', inputVideo.value.trim() || 'Hvfo6PVnB9mnsD');
							u.searchParams.set('quality', selectQuality.value);
							return u.href;
						})();
						await navigator.clipboard.writeText(link);
						swal("Link copied to clipboard!", {
							icon: "success",
							buttons: false,
							timer: 2000
						});
					} catch (err) {
						swal({
							text: 'Copy failed: ' + err,
							icon: 'error',
							button: 'Close'
						});
					}
				}

				// Check if timestamp is older than one day
				function isExpired(timestamp) {
					return Date.now() - timestamp > 24 * 60 * 60 * 1000;
				}

				// Get random integer in [min, max]
				const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

			})();
		</script>
	</body>

</html>
`;

export default {
	async fetch(request, env) {
		let url = new URL(request.url);
		if (url.pathname === '/') {
			return new Response(html, {
				headers: {
					"content-type": "text/html;charset=UTF-8",
				},
			});
		} else if (url.pathname.startsWith('/video/')) {
			url.hostname = 'api.iwara.tv';
			let new_request = new Request(url, request);
			return fetch(new_request);
		} else if (url.pathname.startsWith('/view')) {
			let Finurl = url.searchParams.get('url');
			if (!Finurl) {
				return new Response(JSON.stringify({ error: "Missing 'url' parameter" }), {
					status: 400,
					headers: { "content-type": "application/json" },
				});
			}
			const decoded = decodeURIComponent(Finurl);
			const urlObj = new URL(decoded);
			const isIwaraUrl = (urlObj.protocol === "http:" || urlObj.protocol === "https:") && urlObj.hostname.endsWith(".iwara.tv");
			if (!isIwaraUrl) {
				return new Response(JSON.stringify({ error: "Proxying non-Iwara domains is prohibited!" }), {
					status: 403,
					headers: { "content-type": "application/json" },
				});
			}
			let new_request = new Request(Finurl, request);
			return fetch(new_request);
		} else if (url.pathname.startsWith('/file/')) {
			url.hostname = 'files.iwara.tv';
			let new_request = new Request(url, request);
			return fetch(new_request);
		}
		return env.ASSETS.fetch(request);
	}
};
