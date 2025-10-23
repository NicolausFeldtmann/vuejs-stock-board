import applLogo from '@/assets/svg/aapl.svg';
import amznLogo from '@/assets/svg/amzn.svg';
import googLogo from '@/assets/svg/goog.svg';
import metaLogo from '@/assets/svg/meta.svg';
import msftLogo from '@/assets/svg/msft.svg';
import nvdaLogo from '@/assets/svg/nvda.svg';
import tslaLogo from '@/assets/svg/tsla.svg';

export const stockConfig = {
    "$AAPL": { sheetName: "AAPL", name: "Apple", row: 5, logoPath: applLogo },
    "$AMZN" : { sheetName: "AMZN", name: "Amazone", row: 9, logoPath: amznLogo },
    "$GOOG": { sheetName: "GOOG", name: "Google", row: 5, logoPath: googLogo },
    "$META": { sheetName: "META", name: "Meta", low: 5, logoPath: metaLogo },
    "$MSFT": { sheetName: "MSFT", name: "Microsoft", row: 9, logoPath: msftLogo },
    "$NVDA": { sheetName: "NVDA", name: "Nvidia", row: 5, logoPath: nvdaLogo },
    "$TSLA": { sheetName: "TSLA", name: "Tesla", row: 13, logoPath: tslaLogo }
}
