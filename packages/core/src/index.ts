import { helper, scraper } from "@retailer-api/shared"
import type { IRetailer } from "@retailer-api/shared"

(async () => {
	console.log("Bootstrapping from core package")

	const retailer: IRetailer = {
		retailerId: 1,
		name: "Tesco"
	}

	console.log({ retailer })

	scraper()
	helper()
})()