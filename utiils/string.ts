export const localeNumber = (price: number, locale = "fa") => {
  return new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
