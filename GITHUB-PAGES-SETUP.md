# Настройка GitHub Pages для botmaster.ton

## 🎯 Альтернативный способ (без TON Storage)

Поскольку TON Storage не работает, используем GitHub Pages + DNS настройки.

## 📋 Пошаговая инструкция

### Шаг 1: Включить GitHub Pages

1. **Откройте репозиторий:** [https://github.com/Chatbotist/botmaster-ton](https://github.com/Chatbotist/botmaster-ton)
2. **Перейдите в Settings** (вкладка справа)
3. **Прокрутите до раздела "Pages"**
4. **В разделе "Source" выберите "Deploy from a branch"**
5. **Выберите branch: "main"**
6. **Выберите folder: "/ (root)"**
7. **Нажмите "Save"**

### Шаг 2: Получить URL GitHub Pages

После настройки GitHub Pages:
- **URL будет:** `https://chatbotist.github.io/botmaster-ton/`
- **Подождите 5-10 минут** для деплоя

### Шаг 3: Настроить DNS в TON DNS

1. **Откройте [TON DNS](https://dns.ton.org/)**
2. **Подключите кошелек:** `EQAxpun-SUj1sj_2LedvM-E-ovXWjfzI-Ueu6HcwtF-1N3Oa`
3. **Найдите домен:** `botmaster.ton`

#### Вариант A: Обычные DNS записи
В разделе **"DNS Records"** добавьте:
- **Type:** A
- **Name:** @
- **Value:** IP адрес GitHub Pages (можно узнать через ping)

#### Вариант B: CNAME запись
- **Type:** CNAME  
- **Name:** @
- **Value:** `chatbotist.github.io`

### Шаг 4: Альтернативный способ - через Vercel

Если GitHub Pages не работает с TON DNS:

1. **Вернитесь к Vercel:** [https://vercel.com/chatbotist/botmaster-ton](https://vercel.com/chatbotist/botmaster-ton)
2. **Добавьте кастомный домен:**
   - Перейдите в Settings → Domains
   - Добавьте домен: `botmaster.ton`
   - Следуйте инструкциям по настройке DNS

### Шаг 5: Проверка работы

1. **Откройте браузер**
2. **Перейдите на:** `https://botmaster.ton`
3. **Убедитесь в редиректе на:** `https://botmaster.su`

## 🔧 Решение проблем

### Проблема: GitHub Pages не работает
**Решение:** 
1. Убедитесь, что файл `index.html` в корне репозитория
2. Подождите 10-15 минут для деплоя
3. Проверьте настройки в Settings → Pages

### Проблема: DNS не обновляется
**Решение:**
1. Подождите 5-10 минут
2. Очистите кэш браузера
3. Попробуйте через VPN

### Проблема: Сайт не открывается
**Решение:**
1. Проверьте URL GitHub Pages
2. Убедитесь, что DNS записи настроены правильно
3. Попробуйте альтернативный способ через Vercel

## 📱 Доступ к сайту

После настройки сайт будет доступен:
- **Через Telegram:** `https://botmaster.ton`
- **Через прокси:** `https://botmaster.ton.run` или `https://botmaster.ton.sc`
- **Прямой доступ:** `https://chatbotist.github.io/botmaster-ton/`

## ✅ Что у нас есть

- ✅ Репозиторий на GitHub
- ✅ Статический сайт с редиректом
- ✅ Vercel деплой (работает)
- ✅ GitHub Pages (настраивается)
- ✅ Инструкции по DNS

## 🎯 Следующие шаги

1. **Включите GitHub Pages** в настройках репозитория
2. **Настройте DNS** в TON DNS
3. **Проверьте работу** сайта
