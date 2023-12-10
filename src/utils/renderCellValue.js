import {formatIfDate} from "./formatIfDate";

export function renderCellValue(value) {
    if (value === null || value === undefined) return " ";
    if (typeof value === "object") return JSON.stringify(value);
    return formatIfDate(value).toString();
  }