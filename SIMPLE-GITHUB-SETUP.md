# Простой способ через GitHub Pages

## 🎯 Если TON Storage не работает

Используем GitHub Pages + настройки в TON DNS.

## 📋 Пошаговая инструкция

### Шаг 1: Включить GitHub Pages

1. **Откройте репозиторий:** [https://github.com/Chatbotist/botmaster-ton](https://github.com/Chatbotist/botmaster-ton)
2. **Перейдите в Settings** (вкладка справа)
3. **Прокрутите до раздела "Pages"**
4. **В разделе "Source" выберите "Deploy from a branch"**
5. **Выберите branch: "main"**
6. **Выберите folder: "/ (root)"**
7. **Нажмите "Save"**

### Шаг 2: Получить URL

После настройки GitHub Pages:
- **URL будет:** `https://chatbotist.github.io/botmaster-ton/`
- **Подождите 5-10 минут** для деплоя

### Шаг 3: Настроить в TON DNS

1. **Откройте [TON DNS](https://dns.ton.org/)**
2. **Подключите кошелек:** `EQAxpun-SUj1sj_2LedvM-E-ovXWjfzI-Ueu6HcwtF-1N3Oa`
3. **Найдите домен:** `botmaster.ton`

#### В разделе "TON Site":
- **Hosting in TON Storage:** включите
- **HEX:** вставьте хэш файла `ton-site.html` (если TON Storage работает)

#### Или используйте кошелек:
1. **Откройте TON кошелек**
2. **Перейдите в "Домены"**
3. **Найдите `botmaster.ton`**
4. **Настройте TON Site** с файлом `ton-site.html`

## 🔧 Альтернативный способ - через Vercel

Если ничего не работает:

1. **Вернитесь к Vercel:** [https://vercel.com/chatbotist/botmaster-ton](https://vercel.com/chatbotist/botmaster-ton)
2. **Добавьте кастомный домен:**
   - Перейдите в Settings → Domains
   - Добавьте домен: `botmaster.ton`
   - Следуйте инструкциям по настройке DNS

## ✅ Что у нас есть

- ✅ Статический сайт с редиректом
- ✅ GitHub Pages (настраивается)
- ✅ Vercel деплой (работает)
- ✅ Файл для TON Storage
- ✅ Инструкции по всем способам

## 🎯 Рекомендуемый порядок

1. **Попробуйте TON Storage** (самый правильный способ)
2. **Если не работает** - используйте GitHub Pages
3. **В крайнем случае** - используйте Vercel с кастомным доменом

## 📱 Результат

После настройки `botmaster.ton` будет автоматически перенаправлять на `botmaster.su`!
