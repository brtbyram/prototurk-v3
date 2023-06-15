import store from "..";
import { _setSidebarType, _setLanguage, _setTheme } from ".";

export const setSidebarType = type => store.dispatch(_setSidebarType(type))
export const setLanguage = language => store.dispatch(_setLanguage(language))
export const setTheme = theme => store.dispatch(_setTheme(theme))