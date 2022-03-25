const customHeaderJson = (token_name = "access_token") => ({
	"Content-Type": "application/json",
	Accept: "application/json",
	Authorization: `Bearer ${localStorage.getItem(token_name)}`,
});

const customHeaderFormData = (token_name = "access_token") => ({
	Authorization: `Bearer ${localStorage.getItem(token_name)}`,
});


const base = (method, url, data = {}, option = "json") => {
	const body = method !== "get" ? JSON.stringify(data) : null;
	const test = new FormData();
	if (option !== "json") {
		test.append("file", data);
	}
	return fetch(url, {
		method,
		headers: option === "json" ? customHeaderJson() : customHeaderFormData(),
		body: option === "json" ? body : test,
	})
		.then(async response => {
			const { status } = response;
			switch (status) {
				case 401: {
					try {
						throw new Error();
					} catch (e) {
						throw new Error(e);
					}
				}
				case 500: {
					throw new Error("error");
				}
				default: {
					try {
						const res = await response.json();
						return { ...res, status };
					} catch {
						return { status };
					}
				}
			}
		})
		.catch(error => {
			throw new Error(error);
		});
};

const Fetch = {};
["get", "post", "put", "delete"].forEach(method => {
	Fetch[method] = base.bind(null, method);
});
export default Fetch;
