# Полная инструкция по настройке botmaster.ton

## 🎯 Цель
Настроить домен `botmaster.ton` для автоматического редиректа на `botmaster.su`

## 📋 Что у нас есть
- ✅ Домен: `botmaster.ton` (куплен и привязан к кошельку)
- ✅ Кошелек: `EQAxpun-SUj1sj_2LedvM-E-ovXWjfzI-Ueu6HcwtF-1N3Oa`
- ✅ Сайт на Vercel: `https://botmaster-25xauro62-chatbotist.vercel.app`
- ✅ Файлы готовы: `index.html`, `ton-site.html`

## 🚀 Пошаговая настройка

### Шаг 1: Скачать TON Reverse Proxy

**Для Windows:**
1. Перейдите на [GitHub Releases](https://github.com/ton-utils/reverse-proxy/releases/latest)
2. Скачайте `tonutils-reverse-proxy-windows-amd64.exe`
3. Сохраните в папку с проектом

**Альтернативно - через PowerShell:**
```powershell
Invoke-WebRequest -Uri "https://github.com/ton-utils/reverse-proxy/releases/latest/download/tonutils-reverse-proxy-windows-amd64.exe" -OutFile "tonutils-reverse-proxy-windows-amd64.exe"
```

### Шаг 2: Настроить config.json

Файл `config.json` уже создан с настройками:
```json
{
   "proxy_pass": "https://botmaster-25xauro62-chatbotist.vercel.app/", 
   "private_key": "", 
   "external_ip": "", 
   "listen_ip": "0.0.0.0", 
   "network_config_url": "https://ton.org/global.config.json", 
   "port": 11706
}
```

**Что нужно изменить:**
- `external_ip`: ваш внешний IP адрес (можно узнать на whatismyip.com)
- `private_key`: будет сгенерирован автоматически при первом запуске

### Шаг 3: Запустить прокси

```bash
./tonutils-reverse-proxy-windows-amd64.exe
```

**Что произойдет:**
1. Сгенерируется `private_key`
2. Получите **ADNL адрес** вида: `214b9d44cf37e995dc9b50c4c3ae1bbd1eea8ee4a9912c2d12c3c491f22de982`
3. Прокси начнет работать на порту 11706

### Шаг 4: Настроить DNS в TON DNS

1. Откройте [TON DNS](https://dns.ton.org/)
2. Подключите кошелек: `EQAxpun-SUj1sj_2LedvM-E-ovXWjfzI-Ueu6HcwtF-1N3Oa`
3. Найдите домен `botmaster.ton`
4. В разделе **"TON Site"**:
   - **ADNL address**: вставьте полученный ADNL адрес
   - **Hosting in TON Storage**: включите
5. Сохраните настройки

### Шаг 5: Проверка работы

1. Откройте браузер
2. Перейдите на `https://botmaster.ton`
3. Убедитесь, что происходит редирект на `https://botmaster.su`

## 🔧 Альтернативный способ (без прокси)

Если не хотите настраивать прокси, можно использовать **TON Storage**:

1. Загрузите файл `ton-site.html` в [TON Storage](https://storage.ton.org/)
2. Получите HEX хэш файла
3. В TON DNS настройте:
   - **TON Storage**: включите
   - **HEX**: вставьте хэш файла

## 📱 Доступ к сайту

После настройки сайт будет доступен:
- **Через Telegram**: `https://botmaster.ton`
- **Через прокси**: `https://botmaster.ton.run` или `https://botmaster.ton.sc`

## 🆘 Решение проблем

### Проблема: Прокси не запускается
**Решение:** Убедитесь, что порт 11706 свободен и доступен извне

### Проблема: DNS не обновляется
**Решение:** Подождите 5-10 минут, очистите кэш браузера

### Проблема: Сайт не открывается
**Решение:** Проверьте ADNL адрес в настройках DNS

## 📞 Поддержка

Если что-то не работает:
1. Проверьте все настройки по шагам
2. Убедитесь, что прокси работает
3. Проверьте ADNL адрес в DNS
4. Подождите время распространения изменений
