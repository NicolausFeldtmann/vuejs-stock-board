import axios from "axios";

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
}

export const stockService = new StockService();