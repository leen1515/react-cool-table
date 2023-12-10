export function formatIfDate(value) {
  const datePattern = /^\d{4}-\d{1,2}-\d{1,2}$|^\d{1,2}\/\d{1,2}\/\d{4}$/;
  
  if (typeof value === "string" && datePattern.test(value)) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
          return date.toLocaleDateString("fr-FR", { year: "numeric", month: "numeric", day: "numeric" });
      }
  }
  return value;
}
