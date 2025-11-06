import { PropsWithChildren, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import en from "../../shared/constants/en.json";
import me from "../../widgets/Begin/assets/me.jpeg";
import { Flex, Spin } from "antd";

function loadMessages(locale: string) {
  if (locale.startsWith("ru") || locale.startsWith("ua")) {
    return import("../../shared/constants/ru.json");
  }

  return import("../../shared/constants/en.json");
}

export const LangIntlProvider = ({ children }: PropsWithChildren) => {
  const [messages, setMessages] = useState<Record<string, string>>(en);
  const [isImgLoaded, setImgLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = me;
    img.onload = () => setImgLoaded(true);
  }, []);

  const locale = window.navigator.language.toLowerCase();

  useEffect(() => {
    console.log(locale);
    loadMessages(locale).then((data) => setMessages(data.default));
  }, [locale]);

  if (!isImgLoaded) {
    return (
      <Flex style={{ height: "100vh" }} align="center" justify="center">
        <Spin size="large" />
      </Flex>
    );
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};
