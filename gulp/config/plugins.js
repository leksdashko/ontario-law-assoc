import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import browsersync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Проверка обновления
import ifPlugin from "gulp-if"; // Условное ветвление
import tailwindcss from 'tailwindcss';
import postcss from 'gulp-postcss';

// Экспортируем объект
export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	postcss: postcss,
	tailwindcss: tailwindcss,
	browsersync: browsersync,
	newer: newer,
	if: ifPlugin
}