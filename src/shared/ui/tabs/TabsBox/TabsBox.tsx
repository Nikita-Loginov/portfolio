import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { ComponentPropsWithoutRef } from "react";

import scss from "./TabsBox.module.scss";

interface TabsBoxProps extends ComponentPropsWithoutRef<typeof Tabs> {
  items: {
    value: string;
    label: string;
    content: React.ReactNode;
  }[];
}

export const TabsBox = ({ items, ...tabsProps }: TabsBoxProps) => {
  return (
    <Tabs {...tabsProps} className={scss['tabs']}>
      <TabsList className={scss['tabs__btns']}>
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className={scss.tabsTrigger}
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {items.map((item) => (
        <TabsContent
          key={item.value}
          value={item.value}
          className={scss['tabs__content']}
        >
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};
