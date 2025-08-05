import { PropsWithChildren, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

function loadMessages(locale: string) {
  if (locale.startsWith("ru") || locale.startsWith("ua")) {
    return import("../../shared/constants/ru.json");
  }

  return import("../../shared/constants/en.json");
}

export const LangIntlProvider = ({ children }: PropsWithChildren) => {
  const [messages, setMessages] = useState<Record<string, string>>();

  const locale = window.navigator.language.toLowerCase();

  useEffect(() => {
    console.log(locale, locale.startsWith("ru"));
    loadMessages(locale).then((data) => setMessages(data.default));
  }, [locale]);

  console.log(messages);

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};
