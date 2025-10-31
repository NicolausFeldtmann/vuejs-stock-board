import axios from "axios";

const order = [
    'Mar 21',
    'Jun 21',
    'Sep 21',
    'Dec 21',
    'Mar 22',
    'Jun 22',
    'Sep 22',
    'Dec 22',
    'Mar 23',
    '""',
    '3 Aug 23',
    '2 Nov 23',
    '1 Feb 24',
    '2 Mai 24'
];

class StockService {
    constructor() {
        this.stockService = axios.create({
            baseURL: 'https://sheetdb.io/api/v1/wjrooc8v7ffkt'
        });
    }

    async fetchData(sheetName) {
        try {
            const response = await this.stockService.get(`?sheet=${sheetName}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

    async getRevenue(sheetName) {
        const data = await this.fetchData(sheetName);
        console.log(`Data for sheet ${sheetName}:`, data);
        const revenueData = data[2];
        console.log(`Revenue data row for sheet ${sheetName}`)

        if (!data || !Array.isArray(data) || data.length < 6) {
            console.warn(`Unexpected data format for sheet ${sheetName}`, data);
        }

        if (typeof revenueData !== 'object') {
            console.warn(`Expected Object format in row for ${sheetName}`, data);
        }

        return order.map(key => revenueData[key] ?? 'N/A');
    }
}

export const stockService = new StockService();