import numbro from "numbro";
import numbroFrFRConfiguration from "numbro/dist/languages/fr-FR.min.js";

numbro.registerLanguage(numbroFrFRConfiguration);
numbro.setLanguage("fr-FR");

export const amountFormat = (amount: number, decimalPart = false): string =>
    numbro(amount).formatCurrency({
        thousandSeparated: true,
        mantissa: decimalPart ? 2 : 0,
    });
